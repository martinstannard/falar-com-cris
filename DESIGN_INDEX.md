# Falar com Cris - Design System Index

Complete UI/UX design for a Brazilian Portuguese learning app personalized for Martin to communicate with Cris.

## Start Here

**NEW TO THE PROJECT?** Read these in order:

1. **README_DESIGN.md** - Overview, philosophy, quick start
2. **DESIGN_SUMMARY.md** - High-level summary and priorities
3. **IMPLEMENTATION_CHECKLIST.md** - Track your build progress

## Design Documentation (11 Files)

### Core Design System
1. **DESIGN_SYSTEM.md** (5.4 KB)
   - Complete color palette with Brazilian inspiration
   - Typography system (Outfit, Inter, Merriweather)
   - Spacing, shadows, border radius, animations
   - Cultural elements and visual motifs

2. **COMPONENT_ARCHITECTURE.md** (10.6 KB)
   - All 40+ components with full specifications
   - Data structures (FlashCard, Progress, Achievement)
   - File organization and folder structure
   - State management approach
   - Accessibility checklist

3. **FLASHCARD_INTERACTION.md** (11.0 KB)
   - Card flip animation (3D, 600ms)
   - Swipe gesture system (4 directions)
   - Confidence button design
   - Audio feedback and haptics
   - Spaced repetition integration
   - Error states and completion screens

4. **ACHIEVEMENTS_REWARDS.md** (15.1 KB)
   - 20+ Brazilian-themed achievements
   - Rarity system (common → legendary)
   - Points and level progression
   - Unlock animations and celebrations
   - Gamification balance principles

### Implementation Guides
5. **IMPLEMENTATION_GUIDE.md** (18.5 KB)
   - Step-by-step build instructions
   - Sample components (Button, Card)
   - Package dependencies
   - CSS setup and imports
   - Data structure examples
   - Testing the design system

6. **IMPLEMENTATION_CHECKLIST.md** (16.7 KB)
   - 300+ actionable checkboxes
   - 4-week build timeline
   - Phase-by-phase breakdown
   - Testing requirements
   - Launch preparation steps

### Visual References
7. **VISUAL_MOCKUPS.md** (28.0 KB)
   - ASCII mockups of all screens
   - Mobile and desktop layouts
   - Color usage examples
   - Button state variations
   - Animation timing reference
   - Accessibility annotations

8. **COMPONENT_TREE.md** (12.1 KB)
   - Visual component hierarchy
   - Page component trees
   - State management flow
   - Data flow diagrams
   - Animation sequences
   - Responsive breakpoint behavior

### Quick References
9. **README_DESIGN.md** (11.9 KB)
   - Project overview and philosophy
   - Design principles summary
   - Quick start guide
   - File structure map
   - Browser support
   - Next steps

10. **DESIGN_SUMMARY.md** (9.7 KB)
    - What you have
    - File overview
    - Color and typography quick reference
    - Component priority order
    - Key design principles
    - Getting started checklist

11. **DESIGN_INDEX.md** (this file)
    - Navigation hub for all documentation
    - File descriptions and sizes
    - Quick links by topic

## Implementation Files (5 CSS Files)

All located in `/src/styles/`:

1. **variables.css** (3.0 KB)
   - CSS custom properties for entire design system
   - Colors, typography, spacing, shadows, transitions
   - Layout constants, z-index scale
   - Import first in main.tsx

2. **reset.css** (1.2 KB)
   - Modern CSS reset
   - Base styles for body, images, buttons
   - Focus-visible ring
   - Smooth scrolling and reduced motion support

3. **typography.css** (1.2 KB)
   - Google Fonts imports
   - Heading styles (h1-h6)
   - Portuguese text classes
   - Body paragraph styles

4. **animations.css** (2.2 KB)
   - Keyframe animations (flip, fade, slide, etc.)
   - Progress fill, achievement pop
   - Streak flame pulse, shimmer, confetti
   - Reduced motion fallbacks

5. **utilities.css** (4.9 KB)
   - Flexbox and grid utilities
   - Spacing utilities (padding, margin)
   - Text utilities (size, weight, color)
   - Border, shadow, display utilities
   - Responsive utilities

## Quick Navigation by Topic

### Getting Started
- Start: **README_DESIGN.md**
- Setup: **IMPLEMENTATION_GUIDE.md** → "Quick Start Checklist"
- Checklist: **IMPLEMENTATION_CHECKLIST.md**

### Visual Design
- Colors: **DESIGN_SYSTEM.md** → "Color Palette"
- Typography: **DESIGN_SYSTEM.md** → "Typography"
- Layouts: **VISUAL_MOCKUPS.md**
- Animations: **DESIGN_SYSTEM.md** → "Animations"

### Components
- Full list: **COMPONENT_ARCHITECTURE.md**
- Examples: **IMPLEMENTATION_GUIDE.md** → "Sample Component"
- Tree view: **COMPONENT_TREE.md**
- Priority: **DESIGN_SUMMARY.md** → "Component Priority Order"

### Features
- Flashcards: **FLASHCARD_INTERACTION.md**
- Achievements: **ACHIEVEMENTS_REWARDS.md**
- Progress: **COMPONENT_ARCHITECTURE.md** → "Progress Components"
- Spaced repetition: **IMPLEMENTATION_GUIDE.md** → "Spaced Repetition Logic"

### Implementation
- Build guide: **IMPLEMENTATION_GUIDE.md**
- Checklist: **IMPLEMENTATION_CHECKLIST.md**
- CSS setup: **variables.css**, **reset.css**, etc.
- Data structures: **COMPONENT_ARCHITECTURE.md** → "Data Persistence"

## Design Specifications at a Glance

### Color Palette
```
Primary:   #FF6B6B (Sunset Coral)
Secondary: #FFB84D (Tropical Orange)
Success:   #51CF66 (Amazon Green)
Info:      #4DABF7 (Copacabana Blue)
Special:   #B197FC (Ipanema Purple)

Background: #FFF8F0 (Cream)
Secondary:  #F5E6D3 (Sand)
Text:       #2D2416 (Warm Gray 900)
```

### Typography
```
Display: Outfit (headers, buttons)
Body:    Inter (readable text)
Special: Merriweather (Portuguese phrases)
```

### Key Measurements
```
Mobile nav height:     56px
Desktop sidebar width: 280px
Header height:         64px
Container max-width:   1024px
Minimum touch target:  44x44px
```

### Animation Timings
```
Fast:   150ms (hover states)
Base:   250ms (button press)
Slow:   350ms (page transitions)
Spring: 400ms (playful interactions)
Flip:   600ms (card reveal)
```

### Breakpoints
```
Mobile:  0-639px
Tablet:  640-1023px
Desktop: 1024px+
```

## Component Count

- **Layout**: 4 components (AppShell, Navigation, Header, Container)
- **UI Primitives**: 7 components (Button, Card, ProgressBar, Badge, Avatar, Modal, Tooltip)
- **Flashcards**: 3 components (FlashCard, FlashCardDeck, CardProgress)
- **Lessons**: 3 components (LessonCard, LessonGrid, PhraseList)
- **Progress**: 4 components (StatsCard, ProgressChart, StreakDisplay, HeatMap)
- **Achievements**: 4 components (AchievementBadge, AchievementGrid, AchievementToast, MilestoneCard)
- **Home**: 4 components (WelcomeBanner, DailyGoal, QuickStart, RecentActivity)
- **Pages**: 4 pages (HomePage, LearnPage, ProgressPage, AchievementsPage)

**Total: 33 components + 4 pages = 37 deliverables**

## Feature Count

- **3 Lesson Categories**: Romantic, Greetings, Household
- **4 Confidence Levels**: Again, Hard, Good, Easy
- **20+ Achievements**: Brazilian-themed with 5 rarity tiers
- **4 Navigation Items**: Home, Learn, Progress, Achievements
- **Spaced Repetition**: SM-2 algorithm
- **Progress Tracking**: Stats, charts, heat map, streak
- **Interactions**: Tap to flip, swipe gestures, keyboard shortcuts

## File Sizes Summary

```
Total Documentation:  133.4 KB (11 markdown files)
Total CSS:            12.8 KB (5 CSS files)
Total Design System:  146.2 KB

Largest files:
1. VISUAL_MOCKUPS.md       28.0 KB
2. IMPLEMENTATION_GUIDE.md 18.5 KB
3. IMPLEMENTATION_CHECKLIST 16.7 KB
4. ACHIEVEMENTS_REWARDS.md 15.1 KB
5. COMPONENT_TREE.md       12.1 KB
```

## Implementation Status

Track your progress:

- [ ] Read all documentation
- [ ] Set up CSS system
- [ ] Build Phase 1 (Core UI)
- [ ] Build Phase 2 (Features)
- [ ] Build Phase 3 (Progress)
- [ ] Build Phase 4 (Achievements)
- [ ] Testing & QA
- [ ] Launch V1

Use **IMPLEMENTATION_CHECKLIST.md** for detailed tracking.

## External Resources

### Fonts (Google Fonts)
- Outfit: https://fonts.google.com/specimen/Outfit
- Inter: https://fonts.google.com/specimen/Inter
- Merriweather: https://fonts.google.com/specimen/Merriweather

### Tools
- Coolors.co - Color palette tools
- WebAIM Contrast Checker - Accessibility testing
- Recharts - Chart library
- React Router - Navigation

### Inspiration
- Duolingo - Gamification patterns
- Drops - Minimalist card design
- Memrise - Cultural context integration

## Design Principles (Repeated for Emphasis)

1. **Warm over Cold** - Cream backgrounds, not white
2. **Personal over Generic** - Cris's name, relationship context
3. **Cultural over Stereotypical** - Authentic Brazilian references
4. **Playful over Serious** - Spring animations, celebrations
5. **Progress over Perfection** - Celebrate all effort
6. **Simple over Complex** - Focus on learning
7. **Accessible over Flashy** - WCAG AA compliance

## Support

### Questions?
- Check **DESIGN_SUMMARY.md** → "Questions & Support"
- Review **IMPLEMENTATION_GUIDE.md** for code examples
- Use **COMPONENT_ARCHITECTURE.md** for specifications

### Feedback
- Track issues in **IMPLEMENTATION_CHECKLIST.md**
- Document decisions in code comments
- Iterate based on user feedback (Martin + Cris)

---

**Design System Version**: 1.0
**Created**: April 12, 2026
**Total Documentation**: 11 markdown files, 5 CSS files
**Purpose**: Help Martin learn Portuguese to talk with Cris

**Start building**: Open **IMPLEMENTATION_CHECKLIST.md** and check off your first task!

Boa sorte! 🇧🇷❤️
