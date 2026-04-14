# Component Tree & Relationships

## Visual Component Hierarchy

```
App
├── AppShell (layout wrapper)
│   ├── Header
│   │   ├── StreakDisplay (🔥 7 days)
│   │   ├── Avatar (user icon)
│   │   └── PageTitle
│   │
│   ├── Navigation (bottom mobile / sidebar desktop)
│   │   ├── NavItem (Home)
│   │   ├── NavItem (Learn)
│   │   ├── NavItem (Progress)
│   │   └── NavItem (Achievements)
│   │
│   └── Container (max-width wrapper)
│       └── [Page Content - see below]
│
└── Global Components
    ├── Modal (achievement unlock, session complete)
    ├── Toast (notifications)
    └── ConfettiEffect (celebrations)
```

## Page Component Trees

### HomePage
```
HomePage
├── WelcomeBanner
│   ├── Greeting ("Bom dia, Martin!")
│   └── Tagline ("Let's practice with Cris ❤️")
│
├── DailyGoal
│   ├── ProgressBar (15/20 cards)
│   └── GoalText
│
├── QuickStart
│   └── Button (Continue Learning)
│
├── StatsGrid
│   ├── StatCard (Streak)
│   │   ├── Icon (🔥)
│   │   ├── Value (7)
│   │   └── Label ("day streak")
│   │
│   └── StatCard (Mastery)
│       ├── Icon (🎯)
│       ├── Value (87%)
│       └── Label ("mastery")
│
├── LessonGrid
│   ├── LessonCard (Romantic)
│   │   ├── Icon (💕)
│   │   ├── Title
│   │   ├── ProgressRing (15/25)
│   │   └── Badge (category)
│   │
│   ├── LessonCard (Greetings)
│   └── LessonCard (Household)
│
└── RecentAchievements
    ├── AchievementBadge (unlocked)
    ├── AchievementBadge (unlocked)
    └── AchievementBadge (unlocked)
```

### LearnPage
```
LearnPage
├── SessionHeader
│   ├── ExitButton
│   ├── TopProgressBar (5/20)
│   └── ProgressDots (●●●●●○○○○○)
│
├── CategoryBadge (💕 Romantic)
│
├── FlashCardDeck
│   └── FlashCard
│       ├── CardFront (when not flipped)
│       │   ├── AudioButton (🔊)
│       │   ├── PortuguesePhrase (large, serif)
│       │   ├── FlipHint ("Tap to reveal")
│       │   └── CardProgress (5/20)
│       │
│       └── CardBack (when flipped)
│           ├── PortuguesePhrase (small)
│           ├── EnglishTranslation (medium)
│           ├── ContextExample (💬)
│           ├── ConfidenceButtons
│           │   ├── Button (Again ❌)
│           │   ├── Button (Hard 🤔)
│           │   ├── Button (Good 👍)
│           │   └── Button (Easy ✨)
│           └── CardProgress (5/20)
│
└── SwipeHint (mobile only)
```

### ProgressPage
```
ProgressPage
├── PageHeader
│   └── Title ("Your Progress")
│
├── StatsGrid (2x2 on mobile, 4x1 on desktop)
│   ├── StatCard (Total Studied)
│   │   ├── Icon (📚)
│   │   ├── Value (156)
│   │   └── Label
│   │
│   ├── StatCard (Streak)
│   ├── StatCard (Due Today)
│   └── StatCard (Mastery)
│
├── Section ("This Week")
│   └── ProgressChart
│       ├── ChartAxis
│       ├── ChartLine
│       ├── ChartBars
│       └── ChartTooltip (on hover)
│
├── Section ("Activity Calendar")
│   └── HeatMap
│       ├── DayCell (repeated 7x7)
│       └── Legend
│
└── Section ("Category Breakdown")
    ├── CategoryProgress (Romantic)
    │   ├── Icon (💕)
    │   ├── Label
    │   └── ProgressBar (80%)
    │
    ├── CategoryProgress (Greetings)
    └── CategoryProgress (Household)
```

### AchievementsPage
```
AchievementsPage
├── PageHeader
│   └── Title ("Achievements")
│
├── HeroStats
│   ├── UnlockCount (12 of 30)
│   ├── ProgressBar (40%)
│   └── TotalPoints (1,250)
│
├── FilterTabs
│   ├── Tab (All)
│   ├── Tab (Locked)
│   └── Tab (New)
│
└── AchievementGrid (2 col mobile, 3 col desktop)
    ├── AchievementBadge (unlocked)
    │   ├── RarityBand (top border)
    │   ├── Icon (💋)
    │   ├── NamePT (Primeiro Beijo)
    │   ├── NameEN (First Kiss)
    │   └── Points (+10pts)
    │
    ├── AchievementBadge (in progress)
    │   ├── Icon (💬)
    │   ├── Names
    │   ├── ProgressBar (50/100)
    │   └── ProgressText
    │
    └── AchievementBadge (locked)
        ├── Icon (? grayscale)
        ├── LockedLabel
        └── UnlockHint
```

## UI Component Atoms

### Button
```
Button
├── Props
│   ├── variant: 'primary' | 'secondary' | 'success' | 'ghost'
│   ├── size: 'sm' | 'md' | 'lg'
│   ├── fullWidth: boolean
│   ├── disabled: boolean
│   └── onClick: function
│
└── States
    ├── Default
    ├── Hover (lift + shadow)
    ├── Active (press)
    └── Disabled (faded)
```

### Card
```
Card
├── Props
│   ├── hover: boolean
│   ├── padding: 'none' | 'sm' | 'md' | 'lg'
│   ├── className: string
│   └── onClick: function
│
└── States
    ├── Default (shadow-card)
    └── Hover (lift + shadow-lg)
```

### ProgressBar
```
ProgressBar
├── Props
│   ├── value: number (0-100)
│   ├── max: number
│   ├── color: 'coral' | 'green' | 'blue'
│   └── showLabel: boolean
│
└── Elements
    ├── Track (sand background)
    ├── Fill (gradient, animated)
    └── Label (optional)
```

### Badge
```
Badge
├── Props
│   ├── text: string
│   ├── color: string
│   └── size: 'sm' | 'md'
│
└── Variants
    ├── Category (💕 Romantic)
    ├── Status (NEW)
    └── Count (5/20)
```

## State Management Flow

```
User Actions
    ↓
Event Handlers (onClick, onSwipe, etc.)
    ↓
Custom Hooks
    ├── useFlashCards
    │   ├── Current card state
    │   ├── Deck queue
    │   ├── Answer submission
    │   └── SM-2 algorithm
    │
    ├── useProgress
    │   ├── Total studied
    │   ├── Daily history
    │   ├── Streak calculation
    │   └── Stats aggregation
    │
    ├── useAchievements
    │   ├── Unlock conditions
    │   ├── Progress tracking
    │   └── Notification triggers
    │
    └── useStreak
        ├── Current streak
        ├── Longest streak
        └── Freeze availability
    ↓
LocalStorage Persistence
    ↓
UI Updates (re-render)
```

## Data Flow Diagram

```
phrases.ts (static data)
    ↓
FlashCardContext
    ├── Current card
    ├── Card queue
    ├── Review history
    └── Spaced repetition state
    ↓
Components consume context
    ├── FlashCard (display)
    ├── LessonCard (count)
    └── ProgressChart (history)

ProgressContext
    ├── Total stats
    ├── Daily history
    └── Category breakdown
    ↓
Components consume context
    ├── StatsCard (display)
    ├── ProgressChart (visualize)
    └── HeatMap (calendar)

AchievementContext
    ├── All achievements
    ├── Unlocked status
    └── Progress tracking
    ↓
Components consume context
    ├── AchievementBadge (display)
    ├── AchievementToast (notify)
    └── RecentAchievements (list)
```

## Animation Sequence Diagram

### FlashCard Flip
```
User taps card
    ↓
onClick handler
    ↓
Set isFlipped = true
    ↓
CSS transition starts (0ms)
    ├── rotateY 0deg → 180deg
    ├── At 300ms: front invisible
    ├── Switch content (front → back)
    └── At 600ms: back fully visible
    ↓
Animation complete
```

### Answer Submission
```
User clicks confidence button
    ↓
onAnswer handler
    ├── Update card state (SM-2)
    ├── Save to LocalStorage
    ├── Check for achievements
    └── Prepare next card
    ↓
Exit animation starts (0ms)
    ├── Card shrinks (scale 0.98)
    ├── Card fades (opacity 0)
    └── Card slides left (translateX -100%)
    ↓
At 400ms: current card gone
    ↓
Next card entrance starts
    ├── Slide in from right
    ├── Fade in (opacity 0 → 1)
    └── Scale up (0.95 → 1)
    ↓
At 800ms: new card settled
```

### Achievement Unlock
```
Achievement condition met
    ↓
useAchievements hook triggers
    ↓
Show unlock modal
    ├── Trophy icon pops (0-500ms)
    ├── Background dims (0-300ms)
    ├── Badge slides up (200-700ms)
    ├── Confetti spawns (300-3000ms)
    ├── Text fades in (500-800ms)
    └── Sound plays (600ms)
    ↓
User taps to dismiss
    ↓
Modal fades out (0-300ms)
    ↓
Achievement saved to LocalStorage
```

## Responsive Layout Breakpoints

### Mobile (0-639px)
```
AppShell
├── Header (fixed top)
├── Container (full width, 16px padding)
│   └── [Single column content]
└── Navigation (fixed bottom)
```

### Tablet (640-1023px)
```
AppShell
├── Header (fixed top)
├── Container (max-width 640px, 24px padding)
│   └── [2-column grid where appropriate]
└── Navigation (fixed bottom)
```

### Desktop (1024px+)
```
AppShell
├── Header (fixed top)
├── Navigation (fixed left sidebar, 280px)
└── Container (max-width 1024px, 32px padding)
    └── [3-column grid where appropriate]
```

## Component File Mapping

```
/src/components/ui/
├── Button.tsx → Button.css
├── Card.tsx → Card.css
├── ProgressBar.tsx → ProgressBar.css
├── Badge.tsx → Badge.css
├── Avatar.tsx → Avatar.css
├── Modal.tsx → Modal.css
└── Tooltip.tsx → Tooltip.css

/src/components/layout/
├── AppShell.tsx → AppShell.css
├── Navigation.tsx → Navigation.css
├── Header.tsx → Header.css
└── Container.tsx → Container.css

/src/components/flashcards/
├── FlashCard.tsx → FlashCard.css
├── FlashCardDeck.tsx → FlashCardDeck.css
└── CardProgress.tsx → CardProgress.css

/src/components/progress/
├── StatsCard.tsx → StatsCard.css
├── ProgressChart.tsx → ProgressChart.css
├── StreakDisplay.tsx → StreakDisplay.css
└── HeatMap.tsx → HeatMap.css

/src/components/achievements/
├── AchievementBadge.tsx → AchievementBadge.css
├── AchievementGrid.tsx → AchievementGrid.css
└── AchievementToast.tsx → AchievementToast.css
```

## Import Order Convention

```tsx
// External imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Internal components
import Button from '../ui/Button';
import Card from '../ui/Card';

// Hooks
import { useFlashCards } from '../../hooks/useFlashCards';
import { useProgress } from '../../hooks/useProgress';

// Utils
import { calculateNextReview } from '../../utils/spacedRepetition';

// Types
import type { FlashCard, CardState } from '../../types/flashcard';

// Styles (always last)
import './ComponentName.css';
```

## Prop Naming Conventions

```tsx
// Boolean props: use 'is' or 'has' prefix
isFlipped, isDisabled, hasError, hasProgress

// Event handlers: use 'on' prefix
onClick, onFlip, onAnswer, onComplete

// Numbers: be descriptive
cardCount, totalPoints, currentStreak

// Strings: avoid abbreviations
categoryName (not catName)
portugueseText (not ptText)

// Arrays: plural form
cards, achievements, lessons

// Functions: verb form
calculateProgress, submitAnswer, unlockAchievement
```
