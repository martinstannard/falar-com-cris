# Component Architecture

## App Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── AppShell.tsx              # Main layout wrapper
│   │   ├── Navigation.tsx            # Bottom nav (mobile) / Sidebar (desktop)
│   │   ├── Header.tsx                # Top bar with streak, profile
│   │   └── Container.tsx             # Content container with max-width
│   │
│   ├── flashcards/
│   │   ├── FlashCard.tsx             # Single card with flip animation
│   │   ├── FlashCardDeck.tsx         # Card deck manager with swipe
│   │   ├── FlashCardAnswer.tsx       # Answer reveal with confidence rating
│   │   └── CardProgress.tsx          # Mini progress indicator on card
│   │
│   ├── lessons/
│   │   ├── LessonCard.tsx            # Category selection card
│   │   ├── LessonGrid.tsx            # Grid of lesson categories
│   │   ├── LessonProgress.tsx        # Progress ring/bar for category
│   │   └── PhraseList.tsx            # List of phrases in category
│   │
│   ├── progress/
│   │   ├── StatsCard.tsx             # Individual stat display
│   │   ├── ProgressChart.tsx         # Weekly/monthly progress graph
│   │   ├── StreakDisplay.tsx         # Fire streak counter
│   │   ├── HeatMap.tsx               # GitHub-style activity calendar
│   │   └── MasteryRing.tsx           # Circular progress indicator
│   │
│   ├── achievements/
│   │   ├── AchievementBadge.tsx      # Single achievement display
│   │   ├── AchievementGrid.tsx       # All achievements gallery
│   │   ├── AchievementToast.tsx      # Pop-up when unlocked
│   │   └── MilestoneCard.tsx         # Special milestone celebrations
│   │
│   ├── ui/
│   │   ├── Button.tsx                # Primary button component
│   │   ├── Card.tsx                  # Base card component
│   │   ├── ProgressBar.tsx           # Animated progress bar
│   │   ├── Badge.tsx                 # Small label/tag component
│   │   ├── Avatar.tsx                # User avatar with ring
│   │   ├── IconButton.tsx            # Circular icon button
│   │   ├── Tooltip.tsx               # Hover tooltip
│   │   ├── Modal.tsx                 # Full-screen or centered modal
│   │   └── ConfettiEffect.tsx        # Celebration animation
│   │
│   └── home/
│       ├── WelcomeBanner.tsx         # Personalized greeting
│       ├── DailyGoal.tsx             # Today's goal progress
│       ├── QuickStart.tsx            # Jump into lesson button
│       └── RecentActivity.tsx        # Last studied phrases
│
├── pages/
│   ├── HomePage.tsx                  # Dashboard overview
│   ├── LearnPage.tsx                 # Active learning session
│   ├── ProgressPage.tsx              # Detailed stats & charts
│   ├── AchievementsPage.tsx          # All achievements
│   └── SettingsPage.tsx              # Preferences, daily goal
│
├── hooks/
│   ├── useFlashCards.ts              # Card state & spaced repetition logic
│   ├── useProgress.ts                # Progress tracking & stats
│   ├── useAchievements.ts            # Achievement unlock logic
│   ├── useStreak.ts                  # Daily streak tracking
│   └── useLocalStorage.ts            # Persistent data helper
│
├── utils/
│   ├── spacedRepetition.ts           # SM-2 algorithm implementation
│   ├── achievementRules.ts           # Achievement unlock conditions
│   ├── confetti.ts                   # Confetti particle system
│   └── animations.ts                 # Shared animation variants
│
├── data/
│   ├── phrases.ts                    # All Portuguese phrases & translations
│   ├── achievements.ts               # Achievement definitions
│   └── lessonCategories.ts           # Category metadata
│
├── styles/
│   ├── variables.css                 # CSS custom properties
│   ├── reset.css                     # CSS reset
│   ├── utilities.css                 # Utility classes
│   └── animations.css                # Keyframe animations
│
└── types/
    ├── flashcard.ts                  # Card, deck types
    ├── progress.ts                   # Stats, streak types
    └── achievement.ts                # Achievement types
```

## Key Component Details

### FlashCard.tsx
```tsx
// Features:
// - 3D flip animation (CSS transform)
// - Swipe gestures (left = again, right = good, up = easy)
// - Tap to flip
// - Audio pronunciation button
// - Confidence rating (1-4 buttons)
// - Progress dot indicator at bottom

// Props:
interface FlashCardProps {
  front: string;           // Portuguese phrase
  back: string;            // English translation
  context?: string;        // Usage example
  category: LessonCategory;
  onAnswer: (confidence: 1 | 2 | 3 | 4) => void;
  cardNumber: number;
  totalCards: number;
}
```

### Navigation.tsx
```tsx
// Mobile (bottom): 4 icons
// - Home (house)
// - Learn (book/cards)
// - Progress (chart)
// - Achievements (trophy)

// Desktop (sidebar): Same + expanded labels
// Glass morphism background
// Active state: coral accent + icon fill

// Props:
interface NavigationProps {
  currentPage: 'home' | 'learn' | 'progress' | 'achievements';
}
```

### StreakDisplay.tsx
```tsx
// Features:
// - Animated flame icon (pulses when active)
// - Number display with proud emphasis
// - Freeze protection indicator (can miss 1 day)
// - Motivational message ("Don't break the chain!")

// Props:
interface StreakDisplayProps {
  currentStreak: number;
  longestStreak: number;
  freezeAvailable: boolean;
}
```

### ProgressChart.tsx
```tsx
// Features:
// - Line/bar chart showing cards studied per day
// - 7-day or 30-day view toggle
// - Smooth animations
// - Hover tooltips with exact counts
// - Goal line overlay (daily target)

// Uses: Recharts or custom SVG

// Props:
interface ProgressChartProps {
  data: Array<{ date: string; count: number }>;
  goal: number;
  period: '7d' | '30d';
}
```

### AchievementBadge.tsx
```tsx
// Features:
// - Icon with Brazilian cultural reference
// - Locked/unlocked states (grayscale vs full color)
// - Progress bar if partially complete
// - Pop animation when unlocked
// - Click for details modal

// Achievement Examples:
// - "Primeiro Beijo" (First 10 romantic phrases)
// - "Bom Dia Todo Dia" (7-day greeting streak)
// - "Chef de Cozinha" (All household phrases mastered)
// - "Conversação Básica" (100 cards reviewed)
// - "Amor Eterno" (30-day streak)

// Props:
interface AchievementBadgeProps {
  achievement: Achievement;
  unlocked: boolean;
  progress?: number; // 0-100
  onClick?: () => void;
}
```

## Page Structures

### HomePage.tsx
```tsx
// Layout:
// - Welcome banner: "Bom dia, Martin!" with Cris's name highlighted
// - Today's goal card (10/20 cards studied)
// - Quick start button: "Practice with Cris"
// - Streak display (prominent)
// - Recent achievements (last 3 unlocked)
// - Category cards with progress rings
```

### LearnPage.tsx
```tsx
// Layout:
// - Top: progress bar (5/20 cards)
// - Center: FlashCard (large, prominent)
// - Bottom: confidence buttons (Again, Hard, Good, Easy)
// - Floating: category badge, card counter
// - Exit button (saves progress)

// Flow:
// 1. Category selection (if not from quick start)
// 2. Card presentation (front)
// 3. Flip to reveal (back)
// 4. Confidence rating
// 5. Next card (with smooth transition)
// 6. Completion celebration (confetti!)
```

### ProgressPage.tsx
```tsx
// Layout:
// - Stats grid (4 cards):
//   - Total cards studied (all-time)
//   - Current streak (with flame)
//   - Cards due today
//   - Mastery percentage
// - Progress chart (line graph)
// - Heat map calendar (activity)
// - Category breakdown (pie or bar chart)
```

### AchievementsPage.tsx
```tsx
// Layout:
// - Hero stat: X of Y achievements unlocked
// - Progress bar (overall completion)
// - Achievement grid (3 columns desktop, 2 mobile)
// - Filter tabs: All, Locked, Unlocked
// - Achievement details modal on click
```

## Responsive Breakpoints

```css
/* Mobile first approach */
--mobile: 0-639px;        /* Single column, bottom nav */
--tablet: 640px-1023px;   /* 2 columns, bottom nav */
--desktop: 1024px+;       /* 3 columns, sidebar nav */
```

## Animation Strategy

### Performance
- Use transform and opacity for animations
- GPU acceleration with will-change
- Reduce motion support for accessibility

### Key Animations
1. **Card Flip**: rotateY(180deg) with preserve-3d
2. **Swipe Away**: translateX/Y + rotate + fade
3. **Progress Fill**: width transition with spring easing
4. **Achievement Pop**: scale(0) → scale(1.1) → scale(1)
5. **Confetti**: Random velocity particles with gravity
6. **Streak Flame**: Alternating glow intensity

## Data Persistence

```tsx
// LocalStorage structure
{
  "cards": {
    "card-id": {
      "easeFactor": 2.5,
      "interval": 1,
      "repetitions": 0,
      "nextReview": "2026-04-13",
      "lastReview": "2026-04-12"
    }
  },
  "progress": {
    "totalStudied": 150,
    "currentStreak": 7,
    "longestStreak": 12,
    "dailyGoal": 20,
    "history": {
      "2026-04-12": 25,
      "2026-04-11": 30
    }
  },
  "achievements": {
    "primeiro-beijo": {
      "unlocked": true,
      "unlockedAt": "2026-04-10T14:30:00Z"
    }
  }
}
```

## State Management

For this app size, React Context + hooks is sufficient:

```tsx
// AppContext.tsx
interface AppState {
  cards: CardState[];
  progress: ProgressState;
  achievements: AchievementState;
  settings: SettingsState;
}

// Separate contexts for each domain:
// - FlashCardContext
// - ProgressContext
// - AchievementContext
// - SettingsContext
```

## Accessibility Checklist

- [ ] All interactive elements keyboard navigable
- [ ] Focus indicators on all focusable elements
- [ ] ARIA labels on icon-only buttons
- [ ] Semantic HTML (nav, main, section, article)
- [ ] Skip to content link
- [ ] Color not sole indicator of meaning
- [ ] Reduced motion preference respected
- [ ] Screen reader announcements for progress changes
- [ ] Touch targets minimum 44x44px
- [ ] Form inputs with proper labels
