# Senmar Mastercard-Inspired Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the landing page to closely match Mastercard Business Outcomes styling and storytelling while preserving Senmar branding and dual-theme behavior.

**Architecture:** Rebuild `src/app/page.tsx` into a narrative flow with hero, outcomes, story bands, proof strip, testimonials, and conversion-focused contact. Expand `src/app/globals.css` with a stronger editorial visual system and theme tokens. Rewrite `src/content/site.json` for outcome-led messaging and media content.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, motion, lucide-react

---

### Task 1: Restructure Content Model

**Files:**
- Modify: `src/content/site.json`

**Step 1: Write failing check**
Ensure the JSON includes `hero`, `outcomes`, `storyBands`, `proof`, `testimonials`, `contact`, and `footer` with updated copy fields.

**Step 2: Run check to verify it fails**
Run: `node -e "const j=require('./src/content/site.json'); ['outcomes','storyBands','proof'].forEach(k=>{if(!j.landing[k]) throw new Error(k)});"`
Expected: FAIL due to missing keys.

**Step 3: Write minimal implementation**
Add the new keys and rewrite copy to an outcome-led tone while preserving Senmar brand context.

**Step 4: Run check to verify it passes**
Run: `node -e "const j=require('./src/content/site.json'); ['outcomes','storyBands','proof'].forEach(k=>{if(!j.landing[k]) throw new Error(k)}); console.log('ok')"`
Expected: `ok`

### Task 2: Rebuild Landing Page Structure

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Write failing check**
Add a temporary test that expects new landmark sections (`#outcomes`, `#story`, `#proof`) in rendered HTML.

**Step 2: Run check to verify it fails**
Run: `pnpm lint`
Expected: existing section expectations not met.

**Step 3: Write minimal implementation**
Rebuild page into approved narrative architecture, preserving responsive behavior and semantic structure.

**Step 4: Run check to verify it passes**
Run: `pnpm lint`
Expected: lint passes.

### Task 3: Apply Editorial Visual System

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Write failing check**
Define required tokens for section surfaces and accent variants in both `:root` and `.dark`.

**Step 2: Run check to verify it fails**
Run: `pnpm lint`
Expected: UI still generic before token updates.

**Step 3: Write minimal implementation**
Add new palette variables, background treatments, and typography rhythm utilities while preserving compatibility.

**Step 4: Run check to verify it passes**
Run: `pnpm lint`
Expected: pass with updated styling system.

### Task 4: Final Verify

**Files:**
- Verify: `src/content/site.json`
- Verify: `src/app/page.tsx`
- Verify: `src/app/globals.css`

**Step 1: Lint**
Run: `pnpm lint`
Expected: pass

**Step 2: Build**
Run: `pnpm build`
Expected: successful production build

**Step 3: Manual responsive checks**
Validate desktop/mobile layout, dual-theme readability, and CTA clarity.
