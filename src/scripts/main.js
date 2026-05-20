/* ============================================================
   Roha — Main JS (vanilla ES6+)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Navbar scroll behavior ----------
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 20) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---------- Mobile menu toggle ----------
  const toggleBtn = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('[data-nav-close]');
  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeBtn && menu) {
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  document.querySelectorAll('.mobile-menu a').forEach((a) => {
    a.addEventListener('click', () => {
      menu?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ---------- Smooth scroll for # links ----------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  // ---------- Accordion (FAQ) ----------
  document.querySelectorAll('.accordion-trigger').forEach((trig) => {
    trig.addEventListener('click', () => {
      const item = trig.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const open = item.classList.toggle('open');
      content.style.maxHeight = open ? content.scrollHeight + 'px' : '0px';
    });
  });

  // ---------- Contact form validation ----------
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      let valid = true;
      form.querySelectorAll('[required]').forEach((input) => {
        const field = input.closest('.field');
        field?.classList.remove('has-error');
        if (!input.value.trim()) {
          field?.classList.add('has-error');
          valid = false;
        }
        if (input.type === 'email' && input.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value)) {
          field?.classList.add('has-error');
          valid = false;
        }
      });
      if (!valid) {
        e.preventDefault();
        form.querySelector('.has-error input, .has-error select, .has-error textarea')?.focus();
        return;
      }
      if (form.action.startsWith('mailto:')) {
        e.preventDefault();
        const data = new FormData(form);
        const lines = [];
        data.forEach((v, k) => lines.push(`${k}: ${v}`));
        const body = encodeURIComponent(lines.join('\n'));
        const subject = encodeURIComponent(`Project inquiry from ${data.get('name') || 'website'}`);
        window.location.href = `${form.action}?subject=${subject}&body=${body}`;
      }
    });
  }

  // ---------- Shop filter ----------
  const filterContainer = document.querySelector('[data-shop-filter]');
  if (filterContainer) {
    const grid = document.querySelector('[data-shop-grid]');
    filterContainer.querySelectorAll('.pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        filterContainer.querySelectorAll('.pill').forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.dataset.filter;
        grid.querySelectorAll('[data-category]').forEach((card) => {
          card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
        });
      });
    });
  }

  // ---------- Work filter ----------
  const workFilter = document.querySelector('[data-work-filter]');
  if (workFilter) {
    workFilter.querySelectorAll('.pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        workFilter.querySelectorAll('.pill').forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
      });
    });
  }
});