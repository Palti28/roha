/* ============================================================
   Roha — Product Preview Modal
   Click [data-preview-trigger] -> open modal iframe.
   Single source of truth: this file owns markup + behavior.

   Recognized data-* (read from trigger or its closest [data-preview-url]):
     data-preview-url            URL to load in iframe (required for live preview)
     data-preview-title          Title shown in header + URL pill (falls back to .name)
     data-preview-cat            Category eyebrow text       (falls back to .cat)
     data-preview-detail         URL for "Lihat detail produk" footer button
                                 (falls back to closest <a> href; "" or "#" hides button)
     data-preview-buy            URL for "Beli" footer button
                                 (falls back to detail URL; "" or "#" hides button)
     data-preview-detail-label   Custom label, default: "Lihat detail produk"
     data-preview-buy-label      Custom label, default: "Beli"
     data-preview-aspect         Aspect ratio for desktop view, e.g. "16/10", "9/16"
     data-preview-viewport       Initial viewport: "desktop" | "tablet" | "mobile"
     data-preview-timeout        ms before fallback shows if iframe never loads
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // ---------- Tunables ----------
  const FALLBACK_TIMEOUT_DEFAULT = 6000;
  const TRANSITION_MS = 320;
  const FOCUS_DELAY_MS = 80;
  const DEFAULT_LABELS = {
    detail: 'Lihat detail produk',
    buy: 'Beli',
  };

  let els = null;
  let lastFocus = null;
  let fallbackTimer = null;
  let currentAspect = '';

  function mount() {
    if (els) return els;

    const backdrop = document.createElement('div');
    backdrop.className = 'pv-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-hidden', 'true');
    backdrop.setAttribute('aria-labelledby', 'pv-title');
    backdrop.innerHTML = `
      <div class="pv-modal" role="document">
        <div class="pv-head">
          <div class="pv-head-title">
            <span class="cat" data-pv-cat>Preview</span>
            <h2 id="pv-title" data-pv-title>Product preview</h2>
          </div>
          <div class="pv-toggle" role="tablist" aria-label="Viewport size">
            <button type="button" data-vp="desktop" class="is-active" aria-label="Desktop">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            </button>
            <button type="button" data-vp="tablet" aria-label="Tablet">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M11 18h2"/></svg>
            </button>
            <button type="button" data-vp="mobile" aria-label="Mobile">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/></svg>
            </button>
          </div>
          <a class="pv-newtab" data-pv-newtab target="_blank" rel="noopener" aria-label="Open preview in new tab" title="Open in new tab">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 4h6v6M10 14L20 4M19 13v6a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h6"/></svg>
            <span>New Tab</span>
          </a>
          <button type="button" class="pv-close" aria-label="Close preview" data-pv-close>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
        <div class="pv-stage">
          <div class="pv-device" data-vp="desktop">
            <div class="pv-chrome">
              <div class="pv-dots"><span></span><span></span><span></span></div>
              <div class="pv-url" data-pv-url>preview</div>
              <div style="width: 38px;"></div>
            </div>
            <div class="pv-iframe-wrap" data-pv-wrap>
              <iframe data-pv-frame title="Product preview" loading="lazy" referrerpolicy="no-referrer"></iframe>
              <div class="pv-skeleton">
                <div class="ring" aria-hidden="true"></div>
                <div class="label">Loading preview…</div>
              </div>
              <div class="pv-fallback">
                <h3>Preview belum tersedia.</h3>
                <p>Demo live untuk produk ini belum di-host. Klik <em>Lihat detail produk</em> untuk informasi lengkap.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="pv-foot">
          <div class="pv-foot-hint">
            <span>Tekan</span><kbd>Esc</kbd><span>untuk tutup</span>
          </div>
          <div class="pv-foot-actions">
            <a href="#" class="btn btn-secondary btn-sm" data-pv-detail>Lihat detail produk</a>
            <a href="#" class="btn btn-primary btn-sm" data-pv-buy>Beli <span class="arr">→</span></a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);

    els = {
      backdrop,
      modal: backdrop.querySelector('.pv-modal'),
      device: backdrop.querySelector('.pv-device'),
      wrap: backdrop.querySelector('[data-pv-wrap]'),
      frame: backdrop.querySelector('[data-pv-frame]'),
      cat: backdrop.querySelector('[data-pv-cat]'),
      title: backdrop.querySelector('[data-pv-title]'),
      url: backdrop.querySelector('[data-pv-url]'),
      newtab: backdrop.querySelector('[data-pv-newtab]'),
      detail: backdrop.querySelector('[data-pv-detail]'),
      buy: backdrop.querySelector('[data-pv-buy]'),
      toggleBtns: backdrop.querySelectorAll('.pv-toggle button'),
      closeBtn: backdrop.querySelector('[data-pv-close]'),
    };

    els.closeBtn.addEventListener('click', close);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    els.toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => setViewport(btn.dataset.vp));
    });
    els.frame.addEventListener('load', () => {
      if (els.frame.src && els.frame.src !== 'about:blank') {
        els.wrap.classList.add('is-loaded');
        clearTimeout(fallbackTimer);
      }
    });

    return els;
  }

  function readData(trigger) {
    const host = trigger.dataset.previewUrl
      ? trigger
      : trigger.closest('[data-preview-url]') || trigger;
    const d = host.dataset || {};
    const fallbackHref = trigger.closest('a')?.getAttribute('href')
      || host.getAttribute?.('href') || '';
    const detail = (d.previewDetail !== undefined ? d.previewDetail : fallbackHref) || '';
    const buy = d.previewBuy || detail || '';
    const timeoutAttr = parseInt(d.previewTimeout, 10);
    return {
      url: d.previewUrl || '',
      title: d.previewTitle || host.querySelector?.('.name')?.textContent.trim() || 'Preview',
      cat: d.previewCat || host.querySelector?.('.cat')?.textContent.trim() || 'Product',
      detail,
      buy,
      detailLabel: d.previewDetailLabel || DEFAULT_LABELS.detail,
      buyLabel: d.previewBuyLabel || DEFAULT_LABELS.buy,
      aspect: d.previewAspect || '',
      viewport: d.previewViewport || 'desktop',
      timeout: Number.isFinite(timeoutAttr) ? timeoutAttr : FALLBACK_TIMEOUT_DEFAULT,
    };
  }

  function open(trigger) {
    const e = mount();
    const data = readData(trigger);

    // --- SANITIZE URL BIAR TIDAK RELATIF KE SUB-PAGE ---
    let targetUrl = data.url;
    if (targetUrl && targetUrl !== '#') {
      // 1. Bersihkan jika ada double slash akibat salah gabung string
      targetUrl = targetUrl.replace(/\/+/g, '/');

      // 2. Jika tidak diawali http atau /, paksa jadi absolut dari root (folder public)
      if (!targetUrl.startsWith('/') && !targetUrl.startsWith('http')) {
        targetUrl = '/' + targetUrl;
      }
    }
    // ----------------------------------------------------

    e.cat.textContent = data.cat;
    e.title.textContent = data.title;
    e.url.textContent = data.title;

    if (targetUrl && targetUrl !== '#') {
      e.newtab.style.display = '';
      e.newtab.setAttribute('href', targetUrl);
    } else {
      e.newtab.style.display = 'none';
      e.newtab.removeAttribute('href');
    }

    applyAction(e.detail, data.detail, data.detailLabel);
    applyAction(e.buy, data.buy, data.buyLabel + ' <span class="arr">→</span>', true);
    e.wrap.classList.remove('is-loaded', 'is-fallback');
    currentAspect = data.aspect;
    setViewport(data.viewport);
    clearTimeout(fallbackTimer);

    if (targetUrl && targetUrl !== '#') {
      e.frame.src = targetUrl; // Sekarang iframe aman menembak path absolut
      fallbackTimer = setTimeout(() => {
        if (!e.wrap.classList.contains('is-loaded')) {
          e.wrap.classList.add('is-fallback');
        }
      }, data.timeout);
    } else {
      e.frame.removeAttribute('src');
      e.wrap.classList.add('is-fallback');
    }

    lastFocus = document.activeElement;
    e.backdrop.classList.add('is-open');
    e.backdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('pv-lock');
    setTimeout(() => e.closeBtn.focus(), FOCUS_DELAY_MS);
  }

  function close() {
    if (!els) return;
    els.backdrop.classList.remove('is-open');
    els.backdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('pv-lock');
    clearTimeout(fallbackTimer);
    setTimeout(() => {
      els.frame.removeAttribute('src');
      els.wrap.classList.remove('is-loaded', 'is-fallback');
    }, TRANSITION_MS);
    lastFocus?.focus?.();
  }

  function applyAction(btn, href, html, isPrimary) {
    if (href && href !== '#') {
      btn.style.display = '';
      btn.setAttribute('href', href);
      btn.innerHTML = html;
      if (isPrimary && /^https?:\/\//i.test(href)) {
        btn.setAttribute('target', '_blank');
        btn.setAttribute('rel', 'noopener');
      } else {
        btn.removeAttribute('target');
        btn.removeAttribute('rel');
      }
    } else {
      btn.style.display = 'none';
    }
  }

  function setViewport(vp) {
    if (!els) return;
    els.device.dataset.vp = vp;
    els.toggleBtns.forEach(b => b.classList.toggle('is-active', b.dataset.vp === vp));
    if (vp === 'desktop' && currentAspect) {
      els.device.style.aspectRatio = currentAspect.replace('/', ' / ');
    } else {
      els.device.style.aspectRatio = '';
    }
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-preview-trigger]');
    if (!trigger) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    e.stopPropagation();
    open(trigger);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && els?.backdrop.classList.contains('is-open')) {
      close();
      return;
    }
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const trigger = e.target.closest('[data-preview-trigger]');
    if (!trigger) return;
    const tag = trigger.tagName;
    if (tag === 'BUTTON' || tag === 'A') return;
    e.preventDefault();
    open(trigger);
  });
});