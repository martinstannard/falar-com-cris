# Implementation Checklist

Track your progress building Falar com Cris!

## Setup & Foundation

### Initial Setup
- [ ] Read README_DESIGN.md
- [ ] Read DESIGN_SYSTEM.md
- [ ] Skim through all design docs
- [ ] Install dependencies: `npm install react-router-dom recharts`

### Style System
- [ ] Import variables.css in main.tsx
- [ ] Import reset.css in main.tsx
- [ ] Import typography.css in main.tsx
- [ ] Import animations.css in main.tsx
- [ ] Import utilities.css in main.tsx
- [ ] Test: Verify fonts load correctly
- [ ] Test: Verify CSS variables work (inspect in DevTools)

## Phase 1: Core UI Components (Week 1)

### Button Component
- [ ] Create `/src/components/ui/Button.tsx`
- [ ] Create `/src/components/ui/Button.css`
- [ ] Implement 4 variants (primary, secondary, success, ghost)
- [ ] Implement 3 sizes (sm, md, lg)
- [ ] Add hover states (lift + shadow)
- [ ] Add active states (press down)
- [ ] Add disabled state
- [ ] Add focus-visible ring
- [ ] Test: Keyboard navigation
- [ ] Test: All variants render correctly

### Card Component
- [ ] Create `/src/components/ui/Card.tsx`
- [ ] Create `/src/components/ui/Card.css`
- [ ] Implement padding variants
- [ ] Add hover effect (optional)
- [ ] Add shadow styles
- [ ] Test: Different padding sizes
- [ ] Test: Hover animation smooth

### ProgressBar Component
- [ ] Create `/src/components/ui/ProgressBar.tsx`
- [ ] Create `/src/components/ui/ProgressBar.css`
- [ ] Implement gradient fill
- [ ] Add animated width transition
- [ ] Add shimmer effect (optional)
- [ ] Support color variants
- [ ] Test: 0%, 50%, 100% values
- [ ] Test: Animation smooth

### Badge Component
- [ ] Create `/src/components/ui/Badge.tsx`
- [ ] Create `/src/components/ui/Badge.css`
- [ ] Implement size variants
- [ ] Implement color variants
- [ ] Test: Category badges (💕, 👋, 🏠)

### Avatar Component
- [ ] Create `/src/components/ui/Avatar.tsx`
- [ ] Create `/src/components/ui/Avatar.css`
- [ ] Implement circular shape
- [ ] Add placeholder (initials or icon)
- [ ] Test: Different sizes

## Phase 1: Layout Components

### Container Component
- [ ] Create `/src/components/layout/Container.tsx`
- [ ] Create `/src/components/layout/Container.css`
- [ ] Implement max-width constraint
- [ ] Add responsive padding
- [ ] Test: Mobile, tablet, desktop widths

### Header Component
- [ ] Create `/src/components/layout/Header.tsx`
- [ ] Create `/src/components/layout/Header.css`
- [ ] Add page title
- [ ] Add streak display placeholder
- [ ] Add avatar
- [ ] Make it sticky (optional)
- [ ] Test: Responsive layout

### Navigation Component
- [ ] Create `/src/components/layout/Navigation.tsx`
- [ ] Create `/src/components/layout/Navigation.css`
- [ ] Add 4 nav items (Home, Learn, Progress, Achievements)
- [ ] Implement active state styling
- [ ] Mobile: Fixed bottom bar
- [ ] Desktop: Fixed left sidebar
- [ ] Add glass morphism effect
- [ ] Add icons (emoji or SVG)
- [ ] Test: Active state highlights correctly
- [ ] Test: Responsive switch (mobile to desktop)

### AppShell Component
- [ ] Create `/src/components/layout/AppShell.tsx`
- [ ] Create `/src/components/layout/AppShell.css`
- [ ] Combine Header + Navigation + Container
- [ ] Implement responsive layout
- [ ] Test: Content doesn't overlap nav
- [ ] Test: Scrolling works correctly

## Phase 2: Core Features (Week 2)

### Data Structure
- [ ] Create `/src/types/flashcard.ts`
- [ ] Create `/src/types/progress.ts`
- [ ] Create `/src/types/achievement.ts`
- [ ] Define Phrase interface
- [ ] Define CardState interface (SM-2 fields)
- [ ] Define ProgressState interface
- [ ] Define Achievement interface

### Phrase Data
- [ ] Create `/src/data/phrases.ts`
- [ ] Add 10 romantic phrases
- [ ] Add 10 greeting phrases
- [ ] Add 10 household phrases
- [ ] Include Portuguese, English, context for each
- [ ] Test: Data structure matches types

### Spaced Repetition Logic
- [ ] Create `/src/utils/spacedRepetition.ts`
- [ ] Implement SM-2 algorithm
- [ ] Function: calculateNextReview(card, quality)
- [ ] Function: getDueCards(cards, date)
- [ ] Function: getNewCards(cards, limit)
- [ ] Test: Intervals increase correctly
- [ ] Test: "Again" resets card
- [ ] Test: "Easy" graduates faster

### LocalStorage Utilities
- [ ] Create `/src/hooks/useLocalStorage.ts`
- [ ] Implement save to localStorage
- [ ] Implement load from localStorage
- [ ] Handle JSON serialization
- [ ] Handle errors gracefully
- [ ] Test: Data persists after refresh

### FlashCard Component
- [ ] Create `/src/components/flashcards/FlashCard.tsx`
- [ ] Create `/src/components/flashcards/FlashCard.css`
- [ ] Implement card front (Portuguese)
- [ ] Implement card back (English + context)
- [ ] Add flip animation (3D rotateY)
- [ ] Add tap to flip handler
- [ ] Add audio button (placeholder)
- [ ] Add category badge
- [ ] Add card progress (5/20)
- [ ] Style with serif font for Portuguese
- [ ] Test: Flip animation smooth (600ms)
- [ ] Test: Accessibility (keyboard flip with Space)

### Confidence Buttons
- [ ] Create confidence button set
- [ ] Style: Again (red gradient)
- [ ] Style: Hard (orange gradient)
- [ ] Style: Good (green gradient)
- [ ] Style: Easy (blue gradient)
- [ ] Add icons (emoji)
- [ ] Add keyboard shortcuts (1-4 keys)
- [ ] Test: All buttons trigger correctly
- [ ] Test: Keyboard shortcuts work

### useFlashCards Hook
- [ ] Create `/src/hooks/useFlashCards.ts`
- [ ] Manage current card state
- [ ] Manage deck queue
- [ ] Implement answer submission
- [ ] Integrate SM-2 algorithm
- [ ] Save to localStorage on answer
- [ ] Load cards on mount
- [ ] Test: Cards cycle correctly
- [ ] Test: State persists

## Phase 2: Home Page

### HomePage Layout
- [ ] Create `/src/pages/HomePage.tsx`
- [ ] Create `/src/pages/HomePage.css`
- [ ] Add AppShell wrapper
- [ ] Test: Basic layout renders

### WelcomeBanner Component
- [ ] Create `/src/components/home/WelcomeBanner.tsx`
- [ ] Create `/src/components/home/WelcomeBanner.css`
- [ ] Add greeting ("Bom dia, Martin!")
- [ ] Add tagline with Cris's name
- [ ] Style with warm background
- [ ] Test: Time-appropriate greeting (bonus)

### DailyGoal Component
- [ ] Create `/src/components/home/DailyGoal.tsx`
- [ ] Create `/src/components/home/DailyGoal.css`
- [ ] Show progress bar (X/20 cards)
- [ ] Show goal text
- [ ] Use ProgressBar component
- [ ] Test: Updates when cards studied

### QuickStart Component
- [ ] Create `/src/components/home/QuickStart.tsx`
- [ ] Add large CTA button
- [ ] Link to LearnPage
- [ ] Test: Navigation works

### StatsCard Component
- [ ] Create `/src/components/progress/StatsCard.tsx`
- [ ] Create `/src/components/progress/StatsCard.css`
- [ ] Add icon (emoji)
- [ ] Add value (large number)
- [ ] Add label (description)
- [ ] Style with Card component
- [ ] Test: Different stat types

### LessonCard Component
- [ ] Create `/src/components/lessons/LessonCard.tsx`
- [ ] Create `/src/components/lessons/LessonCard.css`
- [ ] Add category icon
- [ ] Add category name
- [ ] Add progress ring (circular)
- [ ] Add card count (15/25)
- [ ] Color code by category
- [ ] Add hover effect
- [ ] Test: All 3 categories render
- [ ] Test: Progress updates

### Assemble HomePage
- [ ] Add WelcomeBanner
- [ ] Add DailyGoal
- [ ] Add QuickStart
- [ ] Add StatsGrid (2 cards)
- [ ] Add LessonGrid (3 cards)
- [ ] Add RecentAchievements placeholder
- [ ] Style responsive layout
- [ ] Test: Mobile layout (single column)
- [ ] Test: Desktop layout (grid)

## Phase 2: Learn Page

### LearnPage Layout
- [ ] Create `/src/pages/LearnPage.tsx`
- [ ] Create `/src/pages/LearnPage.css`
- [ ] Add session header (exit, progress)
- [ ] Add FlashCard in center
- [ ] Add confidence buttons below
- [ ] Test: Basic layout renders

### FlashCardDeck Component
- [ ] Create `/src/components/flashcards/FlashCardDeck.tsx`
- [ ] Manage card queue
- [ ] Handle card transitions
- [ ] Implement slide-out animation
- [ ] Implement slide-in animation
- [ ] Test: Cards cycle smoothly
- [ ] Test: Queue never empty (shows completion)

### Session Complete Modal
- [ ] Create completion screen
- [ ] Show stats (cards studied)
- [ ] Show achievements unlocked
- [ ] Add confetti (placeholder)
- [ ] Add continue/done buttons
- [ ] Test: Appears after last card
- [ ] Test: Stats accurate

## Phase 3: Progress Tracking (Week 3)

### useProgress Hook
- [ ] Create `/src/hooks/useProgress.ts`
- [ ] Track total cards studied
- [ ] Track daily history
- [ ] Track current streak
- [ ] Track longest streak
- [ ] Calculate mastery percentage
- [ ] Save to localStorage
- [ ] Test: Stats update correctly
- [ ] Test: Streak logic correct

### StreakDisplay Component
- [ ] Create `/src/components/progress/StreakDisplay.tsx`
- [ ] Create `/src/components/progress/StreakDisplay.css`
- [ ] Add flame emoji (🔥)
- [ ] Add streak count
- [ ] Add pulse animation
- [ ] Style prominently
- [ ] Test: Animation smooth
- [ ] Test: Updates correctly

### ProgressChart Component
- [ ] Create `/src/components/progress/ProgressChart.tsx`
- [ ] Create `/src/components/progress/ProgressChart.css`
- [ ] Install recharts (if not done)
- [ ] Implement line chart (7-day view)
- [ ] Add hover tooltips
- [ ] Add goal line overlay
- [ ] Style with brand colors
- [ ] Test: Data renders correctly
- [ ] Test: Responsive on mobile

### HeatMap Component
- [ ] Create `/src/components/progress/HeatMap.tsx`
- [ ] Create `/src/components/progress/HeatMap.css`
- [ ] Create 7x7 grid (last 7 weeks)
- [ ] Color cells by activity level
- [ ] Add hover tooltips
- [ ] Add legend
- [ ] Test: Fills with data
- [ ] Test: Hover shows count

### ProgressPage Assembly
- [ ] Create `/src/pages/ProgressPage.tsx`
- [ ] Create `/src/pages/ProgressPage.css`
- [ ] Add stats grid (4 cards)
- [ ] Add ProgressChart
- [ ] Add HeatMap
- [ ] Add category breakdown
- [ ] Style responsive layout
- [ ] Test: All sections render
- [ ] Test: Data updates correctly

## Phase 3: Enhancements

### Audio Pronunciation
- [ ] Create `/src/utils/speech.ts`
- [ ] Implement Web Speech API
- [ ] Add speak() function
- [ ] Set language to pt-BR
- [ ] Set rate to 0.9x (slower)
- [ ] Connect to audio button
- [ ] Test: Portuguese pronunciation
- [ ] Test: Works on mobile Safari

### Swipe Gestures (Mobile)
- [ ] Add touch event listeners
- [ ] Detect swipe direction
- [ ] Add color overlay on swipe
- [ ] Add threshold (80px)
- [ ] Add haptic feedback
- [ ] Map directions to confidence
- [ ] Test: All 4 directions work
- [ ] Test: Desktop unaffected

### Daily Goal System
- [ ] Add goal setting (default 20)
- [ ] Track progress toward goal
- [ ] Show completion celebration
- [ ] Add bonus points on completion
- [ ] Save goal to localStorage
- [ ] Test: Resets daily
- [ ] Test: Celebration triggers

## Phase 4: Achievements (Week 4)

### Achievement Data
- [ ] Create `/src/data/achievements.ts`
- [ ] Define 20+ achievements
- [ ] Include Portuguese & English names
- [ ] Set rarity levels
- [ ] Set point values
- [ ] Define unlock conditions
- [ ] Test: Data structure valid

### useAchievements Hook
- [ ] Create `/src/hooks/useAchievements.ts`
- [ ] Load achievements from data
- [ ] Track unlock status
- [ ] Track progress toward locked
- [ ] Check conditions on state changes
- [ ] Trigger unlock notifications
- [ ] Save to localStorage
- [ ] Test: Unlocks trigger correctly
- [ ] Test: Progress calculates correctly

### AchievementBadge Component
- [ ] Create `/src/components/achievements/AchievementBadge.tsx`
- [ ] Create `/src/components/achievements/AchievementBadge.css`
- [ ] Style unlocked state (full color)
- [ ] Style locked state (grayscale)
- [ ] Add rarity border colors
- [ ] Add progress bar (partial)
- [ ] Add glow effects by rarity
- [ ] Test: All rarity levels
- [ ] Test: Locked vs unlocked

### AchievementToast Component
- [ ] Create `/src/components/achievements/AchievementToast.tsx`
- [ ] Create `/src/components/achievements/AchievementToast.css`
- [ ] Show on unlock
- [ ] Position top-right (desktop) / top (mobile)
- [ ] Auto-dismiss after 5s
- [ ] Add slide-in animation
- [ ] Test: Appears on unlock
- [ ] Test: Dismisses automatically

### Achievement Unlock Modal
- [ ] Create unlock modal
- [ ] Add trophy icon entrance
- [ ] Add badge slide-up
- [ ] Add confetti burst
- [ ] Add sound effect (optional)
- [ ] Add celebration text
- [ ] Style beautifully
- [ ] Test: Full animation sequence
- [ ] Test: Tap to dismiss

### AchievementsPage
- [ ] Create `/src/pages/AchievementsPage.tsx`
- [ ] Create `/src/pages/AchievementsPage.css`
- [ ] Add hero stats
- [ ] Add filter tabs
- [ ] Add achievement grid
- [ ] Add click for details
- [ ] Style responsive
- [ ] Test: All achievements render
- [ ] Test: Filters work

## Phase 4: Polish & Effects

### Confetti Effect
- [ ] Create `/src/utils/confetti.ts`
- [ ] Implement particle system
- [ ] Use Brazilian flag colors
- [ ] Add physics (gravity, velocity)
- [ ] Add canvas rendering
- [ ] Trigger on achievements
- [ ] Trigger on session complete
- [ ] Test: Performance acceptable
- [ ] Test: Cleans up properly

### Sound Effects
- [ ] Find/create sound files
- [ ] Flip sound (subtle whoosh)
- [ ] Correct answer (chime)
- [ ] Streak milestone (fanfare)
- [ ] Achievement unlock (celebration)
- [ ] Add volume controls
- [ ] Test: All sounds play
- [ ] Test: Can mute

### Animations & Transitions
- [ ] Card flip (600ms spring)
- [ ] Card slide transitions
- [ ] Progress bar fill
- [ ] Achievement pop
- [ ] Streak flame pulse
- [ ] Button hover/press
- [ ] Smooth page transitions
- [ ] Test: All smooth at 60fps
- [ ] Test: Reduced motion respected

### Responsive Refinements
- [ ] Test on iPhone SE (small screen)
- [ ] Test on iPad (tablet)
- [ ] Test on desktop (1920px)
- [ ] Fix any layout issues
- [ ] Adjust touch targets (min 44px)
- [ ] Test landscape mode (mobile)

## Accessibility Audit

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Test focus indicators visible
- [ ] Test Space to flip card
- [ ] Test 1-4 for confidence
- [ ] Test Escape to exit
- [ ] Test Enter to submit
- [ ] Test skip to content link

### Screen Reader
- [ ] Add ARIA labels to icon buttons
- [ ] Add ARIA live regions for updates
- [ ] Add role attributes
- [ ] Test with VoiceOver (Mac)
- [ ] Test with NVDA/JAWS (Windows)
- [ ] Ensure logical heading structure
- [ ] Test image alt text

### Color Contrast
- [ ] Check all text (4.5:1 minimum)
- [ ] Check button text
- [ ] Check disabled states
- [ ] Check focus indicators
- [ ] Use WebAIM contrast checker
- [ ] Fix any failures

### Motion & Interaction
- [ ] Test reduced-motion preference
- [ ] Ensure no time limits
- [ ] Ensure no auto-play
- [ ] Ensure hover alternatives exist
- [ ] Test with keyboard only
- [ ] Test with screen magnifier

## Testing & Quality

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Android

### Device Testing
- [ ] iPhone (small screen)
- [ ] Android phone
- [ ] iPad
- [ ] Desktop (1920px)
- [ ] Desktop (4K)

### Performance
- [ ] Lighthouse audit (90+ score)
- [ ] Check bundle size
- [ ] Optimize images (if any)
- [ ] Lazy load components
- [ ] Test with slow 3G
- [ ] Test with CPU throttling

### Data Integrity
- [ ] Test localStorage limits
- [ ] Test data corruption handling
- [ ] Test migration (if updating schema)
- [ ] Test backup/export (optional)
- [ ] Test import (optional)

## Launch Preparation

### Final Polish
- [ ] Fix any remaining bugs
- [ ] Spell check all text
- [ ] Verify Portuguese accuracy
- [ ] Test all user flows end-to-end
- [ ] Get feedback from test user
- [ ] Make final adjustments

### Documentation
- [ ] Write user guide (optional)
- [ ] Document known issues
- [ ] Create changelog
- [ ] Update README

### Deployment
- [ ] Build for production (`npm run build`)
- [ ] Test production build locally
- [ ] Deploy to hosting (Vercel, Netlify, etc.)
- [ ] Test deployed version
- [ ] Set up analytics (optional)
- [ ] Monitor for errors

## Post-Launch

### V1 Complete!
- [ ] Celebrate achievement (você conseguiu!)
- [ ] Share with Martin
- [ ] Get user feedback
- [ ] Track usage patterns
- [ ] Plan V2 features

### Maintenance
- [ ] Monitor for bugs
- [ ] Update dependencies
- [ ] Add more phrases
- [ ] Respond to feedback
- [ ] Iterate and improve

---

## Progress Tracking

**Started**: _______________
**Week 1 Complete**: _______________
**Week 2 Complete**: _______________
**Week 3 Complete**: _______________
**Week 4 Complete**: _______________
**V1 Launched**: _______________

**Total Checkboxes**: 300+
**Completed**: _____ / 300+
**Progress**: _____%

---

Boa sorte! (Good luck!)
