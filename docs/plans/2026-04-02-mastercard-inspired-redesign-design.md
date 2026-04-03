# Senmar Mastercard-Inspired Redesign Design

## Objective
Redesign the landing page to match the visual language and storytelling rhythm of Mastercard Business Outcomes while preserving Senmar branding, domain relevance, and dual-theme support.

## Approved Direction
- Keep Senmar brand identity, but rewrite copy and section flow to be outcome-led.
- Keep both light and dark modes.
- Use a full structural + visual redesign rather than a cosmetic reskin.

## Information Architecture
1. Sticky minimal navigation with clear CTA
2. Editorial hero with media panel
3. Outcome cards band
4. Alternating narrative media/text sections
5. Metrics and trust proof strip
6. Testimonials in editorial card style
7. Conversion-focused contact section
8. Premium structured footer

## Visual System
- Typography: stronger hierarchy with oversized hero title, compact labels, shorter line lengths.
- Palette: warm off-white + charcoal in light mode, graphite surfaces in dark mode, restrained red/orange accents.
- Surfaces: layered gradients and soft radial highlights, not flat single-color blocks.
- Components: editorial-style cards, stronger CTA contrast, cleaner separators.
- Motion: subtle staged reveals and restrained hover transitions.

## Content Strategy
- Move from service-description tone to outcomes language:
  - risk reduction
  - compliance confidence
  - operational simplicity
  - measurable business impact
- Keep Senmar context and offerings accurate.
- Use public placeholder media URLs where needed.

## Technical Scope
- `src/app/page.tsx`: major section flow and layout rewrite.
- `src/app/globals.css`: new visual tokens, gradients, theme-aware section styles.
- `src/content/site.json`: new content model + rewritten copy + media links.
- `src/app/layout.tsx`: keep existing font/theme setup unless minor metadata adjustment is needed.

## Quality Gates
- Responsive behavior validated on desktop and mobile.
- Accessibility basics preserved: heading hierarchy, contrast, semantic landmarks.
- Lint and build must pass.
