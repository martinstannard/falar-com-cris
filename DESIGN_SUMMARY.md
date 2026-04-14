# Falar com Cris - Design System Summary

## What You Have

A complete, production-ready design system for a Brazilian Portuguese learning app with:

### 1. Visual Design System
- **6 comprehensive design documents** covering every aspect of the UI/UX
- **Warm, romantic color palette** inspired by Brazilian culture
- **3-tier typography system** (display, body, Portuguese emphasis)
- **Modern, polished aesthetic** that avoids generic AI design patterns

### 2. Component Architecture
- **40+ components** fully specified with props, states, and interactions
- **4 main pages** with detailed layouts and user flows
- **Responsive design** for mobile, tablet, and desktop
- **Accessibility-first** approach with WCAG AA compliance

### 3. Implementation-Ready Code
- **CSS variables** file with complete design tokens
- **CSS reset** for consistent cross-browser rendering
- **Typography styles** with Google Fonts imports
- **Animation keyframes** for all interactions
- **Utility classes** for rapid development

### 4. Feature Specifications
- **Spaced repetition system** with SM-2 algorithm
- **Achievement system** with 20+ Brazilian-themed badges
- **Progress tracking** with charts, heat maps, and stats
- **Flashcard interactions** with swipe gestures and animations

## File Overview

### Core Design Documents (Read in Order)

1. **README_DESIGN.md** - Start here! Overview and quick reference
2. **DESIGN_SYSTEM.md** - Colors, typography, spacing, shadows
3. **COMPONENT_ARCHITECTURE.md** - All components and data structures
4. **FLASHCARD_INTERACTION.md** - Card flip, swipe, and answer flow
5. **ACHIEVEMENTS_REWARDS.md** - Badge system and gamification
6. **IMPLEMENTATION_GUIDE.md** - Step-by-step build instructions
7. **VISUAL_MOCKUPS.md** - ASCII mockups of all screens

### Implementation Files (Ready to Use)

- **`/src/styles/variables.css`** - CSS custom properties (colors, spacing, etc.)
- **`/src/styles/reset.css`** - CSS reset and base styles
- **`/src/styles/typography.css`** - Font imports and text styles
- **`/src/styles/animations.css`** - Keyframe animations
- **`/src/styles/utilities.css`** - Helper classes (flex, grid, spacing)

## Quick Start Guide

### Step 1: Set Up Styles (5 minutes)

Import all style files in `/src/main.tsx`:

```tsx
import './styles/variables.css';
import './styles/reset.css';
import './styles/typography.css';
import './styles/animations.css';
import './styles/utilities.css';
```

### Step 2: Install Dependencies (2 minutes)

```bash
npm install react-router-dom recharts
```

### Step 3: Create First Component (10 minutes)

Follow the Button example in `IMPLEMENTATION_GUIDE.md` to create your first component with proper styling.

### Step 4: Build the FlashCard (1-2 hours)

This is the heart of the app. Refer to `FLASHCARD_INTERACTION.md` for complete specifications.

### Step 5: Implement Data & Logic (2-3 hours)

- Create phrase data structure
- Implement SM-2 spaced repetition algorithm
- Add LocalStorage persistence
- Build progress tracking

### Step 6: Add Polish (ongoing)

- Animations and transitions
- Achievement system
- Sound effects
- Responsive refinements

## Color Palette Quick Reference

### Primary Colors
```css
--sunset-coral: #FF6B6B;      /* Primary accent, romantic */
--tropical-orange: #FFB84D;   /* Secondary accent, energetic */
--amazon-green: #51CF66;      /* Success, progress */
--copacabana-blue: #4DABF7;   /* Info, calm */
--ipanema-purple: #B197FC;    /* Achievement, special */
```

### Neutrals
```css
--cream: #FFF8F0;             /* Main background */
--sand: #F5E6D3;              /* Secondary background */
--warm-gray-900: #2D2416;     /* Text */
```

### Usage Examples
- **Romantic category**: Coral tint background + coral border
- **Greetings category**: Orange tint background + orange border
- **Household category**: Green tint background + green border
- **Primary buttons**: Coral to orange gradient
- **Success states**: Amazon green
- **Progress bars**: Coral to orange gradient with shimmer

## Typography Quick Reference

### Font Families
```css
--font-display: 'Outfit';      /* Headers, buttons */
--font-body: 'Inter';          /* Body text */
--font-portuguese: 'Merriweather'; /* Portuguese phrases */
```

### Common Sizes
```css
--text-sm: 0.875rem;   /* Labels, captions */
--text-base: 1rem;     /* Body text */
--text-lg: 1.125rem;   /* Subheadings */
--text-2xl: 1.5rem;    /* Section headings */
--text-4xl: 2.25rem;   /* Portuguese phrases on cards */
```

## Component Priority Order

Build in this order for fastest time-to-value:

### Phase 1: Core (Week 1)
1. Button component
2. Card component
3. ProgressBar component
4. AppShell layout
5. Navigation component

### Phase 2: Features (Week 2)
1. FlashCard component (most important!)
2. Spaced repetition logic
3. LocalStorage persistence
4. LessonCard component
5. HomePage layout

### Phase 3: Enhancement (Week 3)
1. ProgressPage with charts
2. Streak tracking
3. Daily goal system
4. Audio pronunciation
5. Swipe gestures

### Phase 4: Polish (Week 4)
1. Achievement system
2. Unlock animations
3. Confetti effects
4. Sound effects
5. Final responsive tweaks

## Key Design Principles

1. **Warm over Cold**: Cream backgrounds, not stark white
2. **Personal over Generic**: Use Cris's name, relationship context
3. **Cultural over Stereotypical**: Authentic Brazilian references
4. **Playful over Serious**: Spring animations, emoji, celebrations
5. **Progress over Perfection**: Celebrate all effort, not just perfection
6. **Simple over Complex**: Focus on learning, not distractions
7. **Accessible over Flashy**: Keyboard navigation, screen reader support

## Three Lesson Categories

### 1. Romantic/Relationship Phrases (💕)
- Color: Sunset Coral (#FF6B6B)
- Examples: "Eu te amo", "Você é linda", "Bom dia, meu amor"
- Context: Always includes Cris's name

### 2. Everyday Greetings (👋)
- Color: Tropical Orange (#FFB84D)
- Examples: "Bom dia", "Boa tarde", "Boa noite"
- Context: Time-appropriate usage examples

### 3. Household & Daily Life (🏠)
- Color: Amazon Green (#51CF66)
- Examples: "Vou fazer café", "Está com fome?", "Preciso de ajuda"
- Context: Practical home situations

## Interaction Highlights

### FlashCard Flow
1. Show Portuguese phrase (front)
2. Tap to flip (3D rotation, 600ms)
3. Show English + context (back)
4. Select confidence (Again/Hard/Good/Easy)
5. Next card slides in (400ms transition)

### Swipe Gestures
- **Left**: Again (needs practice) - Red
- **Right**: Easy (mastered) - Green
- **Up**: Good (got it) - Blue
- **Down**: Hard (struggled) - Orange

### Achievement Unlock
1. Trophy icon pops (scale animation)
2. Background dims
3. Badge slides up
4. Confetti bursts (Brazilian colors)
5. Name + points appear
6. Tap to dismiss

## Browser Requirements

- Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- CSS Grid, CSS Custom Properties support
- Web Speech API (optional, for text-to-speech)
- LocalStorage (required for data persistence)

## Accessibility Features

- Keyboard navigation (Space, 1-4, Tab, Enter, Escape)
- Screen reader announcements (ARIA labels, live regions)
- Focus indicators (3px coral ring)
- Touch targets (minimum 44x44px)
- Color contrast (WCAG AA - 4.5:1)
- Reduced motion support

## Next Steps

1. **Read README_DESIGN.md** for full overview
2. **Set up CSS files** (already created in /src/styles/)
3. **Build Button component** following the example
4. **Create FlashCard** (the heart of the app)
5. **Implement spaced repetition** algorithm
6. **Add progress tracking**
7. **Polish with animations**

## Design Resources

### Fonts (Google Fonts)
- Outfit: https://fonts.google.com/specimen/Outfit
- Inter: https://fonts.google.com/specimen/Inter
- Merriweather: https://fonts.google.com/specimen/Merriweather

### Inspiration
- Duolingo (gamification)
- Drops (minimalist design)
- Memrise (cultural context)

### Color Tools
- Coolors.co (palette generation)
- WebAIM Contrast Checker (accessibility)

## Questions & Support

### Common Questions

**Q: Do I need a backend?**
A: No! LocalStorage is sufficient for MVP. Add backend later for cross-device sync.

**Q: How do I implement the spaced repetition algorithm?**
A: Full SM-2 algorithm with code examples is in IMPLEMENTATION_GUIDE.md.

**Q: Can I change the color palette?**
A: Yes! Just update the CSS variables in `/src/styles/variables.css`.

**Q: What about dark mode?**
A: Not in V1, but easy to add later with CSS variables.

**Q: How do I add more phrases?**
A: Edit `/src/data/phrases.ts` (structure defined in COMPONENT_ARCHITECTURE.md).

### Getting Started Checklist

- [ ] Read README_DESIGN.md
- [ ] Import style files in main.tsx
- [ ] Install dependencies (react-router-dom, recharts)
- [ ] Create Button component
- [ ] Create Card component
- [ ] Build FlashCard component
- [ ] Implement spaced repetition
- [ ] Add phrase data
- [ ] Test on mobile device
- [ ] Accessibility audit

## Final Notes

This design system is **comprehensive but flexible**. You have:

- ✅ Complete visual design
- ✅ Full component specifications
- ✅ Ready-to-use CSS
- ✅ Implementation roadmap
- ✅ Accessibility guidelines
- ✅ Animation specifications

**Most importantly**: Every design decision supports Martin's goal of learning Portuguese to communicate better with Cris. Keep that personal, romantic focus throughout implementation.

Boa sorte! (Good luck!)

---

**Created**: April 12, 2026
**Design System Version**: 1.0
**Total Documents**: 7 markdown files + 5 CSS files
**Components Specified**: 40+
**Pages Designed**: 4
**Achievements Defined**: 20+
