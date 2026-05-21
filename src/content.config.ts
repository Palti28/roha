import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── WORK ────────────────────────────────────────────────
// Case studies. Quote & metrics blocks live in the markdown body.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['web', 'uiux', 'branding']),
    // Service label shown in the meta grid, e.g. "Web Design + Dev"
    service: z.string(),
    duration: z.string(),
    year: z.number(),
    client: z.string(),
    // true = unsolicited/spec redesign, not a real client engagement
    concept: z.boolean().default(false),
    cover: z.string().optional(),
    previewPath: z.string().optional(),
    // Pattern class for the cover frame, e.g. "pat-arcs"
    pattern: z.string().default('pat-arcs'),
    // Controls listing order AND the "next project" sequence
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

// ── PRODUCTS ────────────────────────────────────────────
// Shop items. Mirrors the fields product-detail.html actually renders.
// Spec table, "what's inside" list and trust points live in the BODY.
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    // Category label above the title, e.g. "Website Template"
    category: z.string(),
    // Short tagline under the title
    tagline: z.string(),
    // One-line summary for listing cards / meta description
    summary: z.string(),

    // ── Pricing ──
    // Final selling price in IDR, e.g. 240000
    price: z.number(),
    // Optional original price for the crossed-out "was" figure
    priceOriginal: z.number().optional(),
    currency: z.string().default('IDR'),

    // ── What it is ──
    // 'figma' or 'html' — products are a mix, set per file
    format: z.enum(['figma', 'html']),
    status: z.enum(['available', 'soon', 'sold-out']).default('available'),

    // ── Links ──
    // Mayar product/checkout link
    buyUrl: z.string().url().optional(),
    // Optional Figma preview link (only meaningful for format: figma)
    figmaUrl: z.string().url().optional(),
    // HTML preview folder under public/templates/ — drives the preview
    // modal via data-preview-url. Leave undefined for no live preview.
    previewPath: z.string().optional(),

    // ── Visuals ──
    cover: z.string().optional(),
    // Pattern class for the cover frame, e.g. "pat-arcs"
    pattern: z.string().default('pat-arcs'),

    // Controls shop order AND the "related products" sequence
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, products };
