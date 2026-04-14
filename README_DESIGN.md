# Falar com Cris - Portuguese Learning App

A beautiful, personalized Brazilian Portuguese learning application designed for Martin to learn conversational Portuguese to communicate with his partner Cris.

## Design Overview

This is a **spaced repetition flashcard app** with a warm, romantic, Brazilian-inspired aesthetic that feels modern and polished while avoiding generic AI design patterns.

### Core Features
- Spaced repetition flashcard system (SM-2 algorithm)
- Three lesson categories: Romantic phrases, Greetings, Household & daily life
- Progress tracking with visual dashboards
- Achievement/rewards system with Brazilian cultural themes
- Streak tracking and daily goals
- Personalized for Martin learning to talk with Cris

## Design Philosophy

**Warm & Romantic**: Color palette inspired by Brazilian sunsets, tropical beaches, and the Amazon rainforest. Emphasis on warm neutrals (cream, sand) rather than stark whites.

**Culturally Authentic**: Brazilian flag colors (green, yellow, blue) as accents, achievement names in Portuguese, cultural references that respect rather than appropriate.

**Personal & Intimate**: Context examples feature Cris's name, romantic category emphasizes the relationship, encouraging messages reference impressing Cris.

**Modern & Polished**: Duolingo-level quality with smooth animations, thoughtful microinteractions, and attention to detail. Bold design choices that feel confident.

**Accessible**: WCAG AA compliant, keyboard navigable, reduced motion support, semantic HTML, generous touch targets.

## Visual Identity

### Color Palette

**Primary Colors** (Brazilian-inspired):
- **Sunset Coral** (#FF6B6B): Primary accent, romantic, warm
- **Tropical Orange** (#FFB84D): Secondary accent, energetic
- **Amazon Green** (#51CF66): Success, progress, growth
- **Copacabana Blue** (#4DABF7): Info, calm, beach vibes
- **Ipanema Purple** (#B197FC): Achievement, elegance

**Neutrals** (Warm tones):
- **Cream** (#FFF8F0): Main background
- **Sand** (#F5E6D3): Secondary background
- **Warm Gray 900** (#2D2416): Text

### Typography

- **Display/Headers**: Outfit (geometric, modern, friendly)
- **Body**: Inter (readable, professional)
- **Portuguese Emphasis**: Merriweather (warm serif for phrases)

### Visual Style

- **Border Radius**: Generous (8-24px) for friendly, approachable feel
- **Shadows**: Soft with warm tint, not harsh black shadows
- **Gradients**: Subtle, coral-to-orange for accents
- **Animations**: Spring-based easing for playful, energetic feel
- **Icons**: Emoji for personality + cultural representation

## Component Architecture

### Layout Components
- **AppShell**: Main wrapper with nav + header
- **Navigation**: Bottom nav (mobile) / Sidebar (desktop)
- **Header**: Streak display, profile, page title
- **Container**: Max-width content wrapper

### Feature Components
- **FlashCard**: 3D flip animation, swipe gestures, audio button
- **FlashCardDeck**: Card manager with queue system
- **LessonCard**: Category selection with progress ring
- **ProgressChart**: Line/bar charts for weekly activity
- **StreakDisplay**: Fire emoji with pulse animation
- **AchievementBadge**: Brazilian-themed rewards with rarity tiers

### UI Primitives
- **Button**: 4 variants (primary, secondary, success, ghost)
- **Card**: Hoverable, shadow-on-lift effect
- **ProgressBar**: Animated gradient fill with shimmer
- **Badge**: Small labels for categories
- **Modal**: Centered or full-screen overlays

## Pages

1. **HomePage**: Dashboard with welcome, daily goal, quick start, stats, categories
2. **LearnPage**: Flashcard session with progress bar, confidence buttons
3. **ProgressPage**: Detailed statistics, charts, heat map, category breakdown
4. **AchievementsPage**: Gallery of unlocked/locked achievements

## Key Interactions

### FlashCard Flow
1. **Front shows**: Portuguese phrase + audio button + category badge
2. **Tap to flip**: 3D rotation animation (600ms)
3. **Back shows**: English translation + context example + confidence buttons
4. **Select confidence**: Again (red) / Hard (orange) / Good (green) / Easy (blue)
5. **Next card**: Slide out + new card slides in (400ms)

### Swipe Gestures (Mobile)
- **Right swipe**: Easy (green indicator)
- **Left swipe**: Again (red indicator)
- **Up swipe**: Good (blue indicator)
- **Down swipe**: Hard (orange indicator)

### Achievement Unlock
1. Trophy icon pops center screen (scale animation)
2. Background dims
3. Achievement badge slides up
4. Confetti bursts (Brazilian flag colors)
5. Name + points fade in
6. Success sound plays
7. Tap to dismiss

## Data Structure

### FlashCard State (LocalStorage)
```typescript
{
  id: string;
  easeFactor: number;        // SM-2 algorithm
  interval: number;          // Days until next review
  repetitions: number;       // Times reviewed
  nextReview: Date;          // When to show again
  lastReview: Date;          // Last study date
}
```

### Progress Tracking
```typescript
{
  totalStudied: number;      // All-time card count
  currentStreak: number;     // Consecutive days
  longestStreak: number;     // Best streak
  dailyGoal: number;         // Cards per day target
  history: {
    [date: string]: number   // Cards studied per day
  }
}
```

### Achievement
```typescript
{
  id: string;
  name: string;              // Portuguese
  nameEn: string;            // English
  description: string;
  icon: string;              // Emoji
  color: string;             // Hex color
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  points: number;
  unlocked: boolean;
  progress?: number;         // 0-100
}
```

## Implementation Priority

### Phase 1: Foundation (Week 1)
1. Set up CSS variables and design system
2. Create base UI components (Button, Card, ProgressBar)
3. Implement AppShell layout with navigation
4. Create phrase data structure
5. Basic routing setup

### Phase 2: Core Features (Week 2)
1. FlashCard component with flip animation
2. SM-2 spaced repetition algorithm
3. LocalStorage persistence
4. Progress tracking system
5. Lesson category selection

### Phase 3: Enhancement (Week 3)
1. Swipe gesture support (mobile)
2. Audio pronunciation (Web Speech API)
3. Progress dashboard with charts
4. Streak tracking
5. Daily goal system

### Phase 4: Polish (Week 4)
1. Achievement system with unlock animations
2. Confetti effects
3. Sound effects
4. Responsive refinements
5. Accessibility audit
6. Performance optimization

## Technical Stack

- **Framework**: React 19 + TypeScript
- **Build**: Vite
- **Styling**: CSS Modules / plain CSS with CSS variables
- **Charts**: Recharts (for progress visualization)
- **Routing**: React Router (optional, can use state-based)
- **Storage**: LocalStorage (simple, no backend needed)
- **Audio**: Web Speech API (built-in browser TTS)

## File Structure

```
src/
├── components/
│   ├── layout/        # AppShell, Navigation, Header, Container
│   ├── flashcards/    # FlashCard, FlashCardDeck, CardProgress
│   ├── lessons/       # LessonCard, LessonGrid, PhraseList
│   ├── progress/      # StatsCard, ProgressChart, StreakDisplay, HeatMap
│   ├── achievements/  # AchievementBadge, AchievementGrid, AchievementToast
│   ├── ui/            # Button, Card, ProgressBar, Badge, Modal
│   └── home/          # WelcomeBanner, DailyGoal, QuickStart
├── pages/
│   ├── HomePage.tsx
│   ├── LearnPage.tsx
│   ├── ProgressPage.tsx
│   └── AchievementsPage.tsx
├── hooks/
│   ├── useFlashCards.ts
│   ├── useProgress.ts
│   ├── useAchievements.ts
│   └── useStreak.ts
├── utils/
│   ├── spacedRepetition.ts
│   ├── achievementRules.ts
│   └── confetti.ts
├── data/
│   ├── phrases.ts
│   └── achievements.ts
├── styles/
│   ├── variables.css
│   ├── reset.css
│   ├── typography.css
│   ├── animations.css
│   └── utilities.css
└── types/
    ├── flashcard.ts
    ├── progress.ts
    └── achievement.ts
```

## Design System Files

All design documentation is located in the project root:

1. **DESIGN_SYSTEM.md**: Complete design system with colors, typography, spacing, shadows
2. **COMPONENT_ARCHITECTURE.md**: Full component breakdown and data structures
3. **FLASHCARD_INTERACTION.md**: Detailed interaction design and animations
4. **ACHIEVEMENTS_REWARDS.md**: Achievement system with all badges and rewards
5. **IMPLEMENTATION_GUIDE.md**: Step-by-step implementation with code examples
6. **VISUAL_MOCKUPS.md**: ASCII mockups of all pages and states

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Accessibility Features

- **Keyboard Navigation**: Space to flip, 1-4 for confidence, Tab/Enter for navigation
- **Screen Reader Support**: ARIA labels, live regions, semantic HTML
- **Focus Indicators**: 3px coral ring with 4px offset
- **Touch Targets**: Minimum 44x44px
- **Color Contrast**: WCAG AA compliant (4.5:1 minimum)
- **Reduced Motion**: Respects prefers-reduced-motion media query
- **Skip Links**: Jump to main content

## Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile**: iOS Safari 14+, Chrome Android 90+
- **Features**: CSS Grid, CSS Custom Properties, Web Speech API (progressive enhancement)

## Design Resources

### Inspiration
- Duolingo (gamification, progress tracking)
- Drops (minimalist card design, bold colors)
- Memrise (cultural context, mnemonic devices)

### Assets Needed
- Custom illustrations of Brazilian landmarks (optional)
- Achievement badge icons (can use emoji initially)
- Sound effects for interactions
- Background patterns (calçadão sidewalk mosaic)

### Fonts
- Outfit: https://fonts.google.com/specimen/Outfit
- Inter: https://fonts.google.com/specimen/Inter
- Merriweather: https://fonts.google.com/specimen/Merriweather

## Future Enhancements

### V2 Features
- [ ] Audio recordings of native speaker (better than TTS)
- [ ] Conversation practice (dialogue mode)
- [ ] Photo flashcards (visual learning)
- [ ] Social sharing of achievements
- [ ] Dark mode toggle
- [ ] More categories (food, travel, emotions)

### V3 Features
- [ ] Backend sync (cross-device)
- [ ] Leaderboard (optional, low-pressure)
- [ ] AI conversation partner
- [ ] Voice recognition for pronunciation
- [ ] Spaced repetition improvements (SuperMemo 15+)

## Design Principles Summary

1. **Warm over cold**: Cream backgrounds, not stark white
2. **Personal over generic**: Cris's name, relationship context
3. **Cultural over stereotypical**: Authentic Brazilian references
4. **Playful over serious**: Spring animations, emoji, celebrations
5. **Progress over perfection**: Celebrate all effort, not just streaks
6. **Simple over complex**: Focus on learning, not distractions
7. **Accessible over flashy**: WCAG compliance, keyboard navigation
8. **Responsive over desktop-first**: Mobile experience is primary

## Contact & Attribution

Designed for Martin's personal use to learn Portuguese and communicate with Cris.

**Design System Created**: April 2026
**Target Launch**: [Your timeline]
**Designer**: Frontend Engineer (Claude Code)

---

## Next Steps

1. **Read all design docs** in order (listed above)
2. **Set up CSS variables** from IMPLEMENTATION_GUIDE.md
3. **Create base components** (Button, Card)
4. **Build FlashCard component** with flip animation
5. **Implement spaced repetition** algorithm
6. **Add progress tracking** system
7. **Polish with animations** and achievements

**Most important**: Keep the design warm, personal, and focused on Martin's relationship with Cris. Every design decision should support the goal of helping them communicate better.

Boa sorte! (Good luck!)
