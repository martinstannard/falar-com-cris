# Achievements & Rewards System

## Achievement Philosophy

Celebrate progress with Brazilian cultural flair and romantic themes. Each achievement should feel meaningful and tied to Martin's journey of learning to communicate with Cris.

## Achievement Categories

### 1. Romantic Milestones (Love-themed)
```tsx
{
  id: 'primeiro-beijo',
  name: 'Primeiro Beijo',
  nameEn: 'First Kiss',
  description: 'Study 10 romantic phrases',
  icon: '💋',
  color: '#FF6B6B',
  rarity: 'common',
  points: 10,
  unlockCondition: { romanticPhrases: 10 }
}

{
  id: 'coracao-brasileiro',
  name: 'Coração Brasileiro',
  nameEn: 'Brazilian Heart',
  description: 'Master all romantic phrases',
  icon: '❤️',
  color: '#FA5252',
  rarity: 'rare',
  points: 50,
  unlockCondition: { romanticPhrasesMastered: 'all' }
}

{
  id: 'amor-eterno',
  name: 'Amor Eterno',
  nameEn: 'Eternal Love',
  description: 'Maintain a 30-day streak',
  icon: '💕',
  color: '#FF6B9D',
  rarity: 'epic',
  points: 100,
  unlockCondition: { streak: 30 }
}

{
  id: 'te-amo-sempre',
  name: 'Te Amo Sempre',
  nameEn: 'Love You Always',
  description: 'Study romantic phrases 50 times',
  icon: '💖',
  color: '#FF8787',
  rarity: 'uncommon',
  points: 30,
  unlockCondition: { romanticReviews: 50 }
}
```

### 2. Daily Commitment (Streak-themed)
```tsx
{
  id: 'bom-dia-todo-dia',
  name: 'Bom Dia Todo Dia',
  nameEn: 'Good Morning Every Day',
  description: 'Study greetings for 7 consecutive days',
  icon: '🌅',
  color: '#FFB84D',
  rarity: 'common',
  points: 15,
  unlockCondition: { greetingStreak: 7 }
}

{
  id: 'dedicacao-brasileira',
  name: 'Dedicação Brasileira',
  nameEn: 'Brazilian Dedication',
  description: 'Maintain a 7-day streak',
  icon: '🔥',
  color: '#FF8C42',
  rarity: 'common',
  points: 20,
  unlockCondition: { streak: 7 }
}

{
  id: 'forca-de-vontade',
  name: 'Força de Vontade',
  nameEn: 'Willpower',
  description: 'Study 100 cards in one day',
  icon: '💪',
  color: '#51CF66',
  rarity: 'rare',
  points: 40,
  unlockCondition: { dailyCards: 100 }
}

{
  id: 'maratona-portuguesa',
  name: 'Maratona Portuguesa',
  nameEn: 'Portuguese Marathon',
  description: 'Study for 60 minutes straight',
  icon: '⏱️',
  color: '#4DABF7',
  rarity: 'uncommon',
  points: 25,
  unlockCondition: { sessionDuration: 3600 }
}
```

### 3. Mastery & Progress (Skill-themed)
```tsx
{
  id: 'conversacao-basica',
  name: 'Conversação Básica',
  nameEn: 'Basic Conversation',
  description: 'Review 100 cards total',
  icon: '💬',
  color: '#4DABF7',
  rarity: 'common',
  points: 25,
  unlockCondition: { totalReviews: 100 }
}

{
  id: 'chef-de-cozinha',
  name: 'Chef de Cozinha',
  nameEn: 'Kitchen Chef',
  description: 'Master all household phrases',
  icon: '👨‍🍳',
  color: '#FFB84D',
  rarity: 'rare',
  points: 50,
  unlockCondition: { householdMastered: 'all' }
}

{
  id: 'fluente',
  name: 'Fluente',
  nameEn: 'Fluent',
  description: 'Master 500 phrases',
  icon: '🎓',
  color: '#B197FC',
  rarity: 'legendary',
  points: 200,
  unlockCondition: { totalMastered: 500 }
}

{
  id: 'rapido-como-senna',
  name: 'Rápido Como Senna',
  nameEn: 'Fast as Senna',
  description: 'Complete 50 cards in under 10 minutes',
  icon: '🏎️',
  color: '#51CF66',
  rarity: 'rare',
  points: 45,
  unlockCondition: { speedChallenge: { cards: 50, time: 600 } }
}
```

### 4. Brazilian Culture (Theme-themed)
```tsx
{
  id: 'carioca-honorario',
  name: 'Carioca Honorário',
  nameEn: 'Honorary Carioca',
  description: 'Complete 1000 total reviews',
  icon: '🏖️',
  color: '#4DABF7',
  rarity: 'epic',
  points: 150,
  unlockCondition: { totalReviews: 1000 }
}

{
  id: 'paixao-pelo-portugues',
  name: 'Paixão pelo Português',
  nameEn: 'Passion for Portuguese',
  description: 'Study every category',
  icon: '🇧🇷',
  color: '#51CF66',
  rarity: 'uncommon',
  points: 30,
  unlockCondition: { categoriesStudied: 'all' }
}

{
  id: 'sabor-brasileiro',
  name: 'Sabor Brasileiro',
  nameEn: 'Brazilian Flavor',
  description: 'Unlock all achievements',
  icon: '🎖️',
  color: '#FFD700',
  rarity: 'legendary',
  points: 500,
  unlockCondition: { allAchievements: true }
}
```

### 5. Special Milestones (Event-themed)
```tsx
{
  id: 'primeiro-passo',
  name: 'Primeiro Passo',
  nameEn: 'First Step',
  description: 'Complete your first card',
  icon: '👣',
  color: '#4DABF7',
  rarity: 'common',
  points: 5,
  unlockCondition: { totalReviews: 1 }
}

{
  id: 'perfeccionista',
  name: 'Perfeccionista',
  nameEn: 'Perfectionist',
  description: 'Get 20 cards correct in a row',
  icon: '⭐',
  color: '#FFD700',
  rarity: 'rare',
  points: 40,
  unlockCondition: { correctStreak: 20 }
}

{
  id: 'ressurreicao',
  name: 'Ressurreição',
  nameEn: 'Resurrection',
  description: 'Return after 7+ days away',
  icon: '🌟',
  color: '#B197FC',
  rarity: 'uncommon',
  points: 20,
  unlockCondition: { returnAfterDays: 7 }
}
```

## Rarity System

### Rarity Tiers
```tsx
type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

const rarityConfig = {
  common: {
    color: '#A8A8A8',      // Silver
    glow: 'none',
    border: '2px solid',
    animation: 'fade'
  },
  uncommon: {
    color: '#51CF66',       // Green
    glow: 'soft',
    border: '2px solid',
    animation: 'pulse'
  },
  rare: {
    color: '#4DABF7',       // Blue
    glow: 'medium',
    border: '3px solid',
    animation: 'shimmer'
  },
  epic: {
    color: '#B197FC',       // Purple
    glow: 'strong',
    border: '3px solid',
    animation: 'sparkle'
  },
  legendary: {
    color: '#FFD700',       // Gold
    glow: 'intense',
    border: '4px solid',
    animation: 'rainbow-shine'
  }
};
```

## Achievement Display

### Badge Design
```
┌─────────────────┐
│                 │
│   Rarity band   │  ← Color-coded top border
│                 │
│       💋        │  ← Large icon (48px)
│                 │
│  Primeiro Beijo │  ← Portuguese name
│  First Kiss     │  ← English subtitle
│                 │
│  ████░░░░░░     │  ← Progress bar (if incomplete)
│  10/50 phrases  │  ← Progress text
│                 │
│   +25 points    │  ← Points value
│                 │
└─────────────────┘
```

### Locked State
- Grayscale filter
- Icon at 30% opacity
- "?" icon overlay
- Teaser text: "Study 10 romantic phrases to unlock"
- No progress bar

### Unlocked State
- Full color
- Subtle glow effect
- Pop animation on unlock
- "NEW" badge for recently unlocked

### Modal Detail View
```
┌─────────────────────────────────────┐
│  ✕                                  │  ← Close button
│                                     │
│            💋                       │  ← Large icon (96px)
│                                     │
│        Primeiro Beijo               │  ← Portuguese (2xl)
│        First Kiss                   │  ← English (lg)
│                                     │
│  "Study 10 romantic phrases"        │  ← Description
│                                     │
│  Progress: 10/10 ✓                 │
│  Unlocked: April 12, 2026          │
│  Rarity: Common                     │
│  Points: +10                        │
│                                     │
│  ┌─────────────────────────┐       │
│  │   Share Achievement     │       │
│  └─────────────────────────┘       │
│                                     │
└─────────────────────────────────────┘
```

## Unlock Animation

### Sequence
```
1. Trophy icon appears center screen (scale 0 → 1.2)
2. Icon bounces (spring animation)
3. Background dims (opacity 0.9)
4. Badge slides up from bottom
5. Confetti bursts from badge
6. Portuguese name fades in
7. English name fades in
8. Points counter animates (+10)
9. Success sound plays
10. Glow pulse (3 times)
11. "Tap to continue" appears
```

**Duration:** 3 seconds total
**Dismissible:** Tap anywhere after 1.5s

### Toast Notification (less intrusive)
```
┌────────────────────────────────┐
│  🎉 Achievement Unlocked!       │
│  💋 Primeiro Beijo (+10pts)    │
└────────────────────────────────┘
```
- Appears top-right on desktop
- Appears top on mobile
- Auto-dismiss after 5s
- Click to view details

## Points System

### Point Values
- Common: 5-25 points
- Uncommon: 20-35 points
- Rare: 40-60 points
- Epic: 75-150 points
- Legendary: 200-500 points

### Level System (based on total points)
```tsx
const levels = [
  { level: 1, points: 0, title: 'Iniciante' },          // Beginner
  { level: 2, points: 100, title: 'Estudante' },        // Student
  { level: 3, points: 300, title: 'Aprendiz' },         // Learner
  { level: 4, points: 600, title: 'Praticante' },       // Practitioner
  { level: 5, points: 1000, title: 'Intermediário' },   // Intermediate
  { level: 6, points: 1500, title: 'Avançado' },        // Advanced
  { level: 7, points: 2200, title: 'Experiente' },      // Experienced
  { level: 8, points: 3000, title: 'Mestre' },          // Master
  { level: 9, points: 4000, title: 'Fluente' },         // Fluent
  { level: 10, points: 5000, title: 'Brasileiro Honorário' }, // Honorary Brazilian
];
```

### Level Display
```
┌──────────────────────────────┐
│  Level 3: Aprendiz           │
│                              │
│  ████████░░░░░░░░░░          │  ← Progress to next level
│  600 / 1000 points           │
│                              │
│  🏆 8 achievements           │
│  🔥 7 day streak             │
└──────────────────────────────┘
```

## Rewards & Incentives

### Daily Goal Completion
- Confetti burst (Brazilian flag colors)
- +5 bonus points
- Encouraging message: "Muito bem, Martin!" (Well done, Martin!)
- Streak flame animation

### Streak Milestones
- **7 days:** Fire emoji upgrade (🔥→🔥🔥)
- **14 days:** Special animation (flame dance)
- **30 days:** Achievement unlock + bonus points
- **100 days:** Legendary status

### Session Completion
```
┌─────────────────────────────────────┐
│         ✨ Session Complete!        │
│                                     │
│     Great work, Martin!             │
│     You studied 20 cards            │
│                                     │
│  ✓ Daily goal reached (20/20)      │
│  ✓ 7-day streak maintained          │
│  ✓ +25 points earned                │
│                                     │
│  Next review: Tomorrow at 9:00 AM   │
│                                     │
│  ┌─────────────┐ ┌──────────────┐  │
│  │  Continue   │ │  View Stats   │  │
│  └─────────────┘ └──────────────┘  │
└─────────────────────────────────────┘
```

### Personalized Encouragement

**Messages rotate based on context:**
- After correct answer: "Isso aí!" "Muito bem!" "Perfeito!"
- After struggle: "Não desista!" "Você consegue!" "Mais uma vez!"
- Milestone: "Parabéns, Martin!" "Incrível!" "Você é demais!"
- To Cris: "Cris vai adorar!" "Ela vai se impressionar!" "Quase lá!"

## Progress Visualization

### Achievement Progress Grid
```
┌─────────────────────────────────────┐
│  Achievements  [All][Locked][New]   │
│                                     │
│  12 of 30 unlocked  ████░░░░ 40%   │
│  1,250 total points                 │
│                                     │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐      │
│  │ 💋 │ │ ❤️ │ │ 🌅 │ │ 💬 │      │  ← Unlocked (color)
│  │ ✓  │ │ ✓  │ │ ✓  │ │ ✓  │      │
│  └────┘ └────┘ └────┘ └────┘      │
│                                     │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐      │
│  │ 🔥 │ │ 💪 │ │ ?  │ │ ?  │      │  ← Locked (grayscale)
│  │50% │ │75% │ │    │ │    │      │
│  └────┘ └────┘ └────┘ └────┘      │
│                                     │
└─────────────────────────────────────┘
```

### Category Achievements
Each lesson category has its own achievement tree:

**Romantic Phrases:**
- 10 studied → Primeiro Beijo
- 25 studied → Coração Quente
- All mastered → Coração Brasileiro

**Greetings:**
- 7-day streak → Bom Dia Todo Dia
- All mastered → Educado

**Household:**
- 15 studied → Ajudante
- All mastered → Chef de Cozinha

## Share Functionality

### Shareable Achievement Cards
```
┌─────────────────────────────────────┐
│                                     │
│  🎉 I unlocked an achievement!      │
│                                     │
│           💋                        │
│      Primeiro Beijo                 │
│      First Kiss                     │
│                                     │
│  Learning Portuguese to talk        │
│  with Cris! 🇧🇷❤️                  │
│                                     │
│  falarcomcris.app                   │
│                                     │
└─────────────────────────────────────┘
```

**Export formats:**
- PNG image (for social media)
- Text snippet (for messaging)
- URL link (with achievement preview)

## Gamification Balance

### Avoid Over-Gamification
- Achievements enhance, don't distract
- No pay-to-win mechanics
- No artificial urgency (no timers)
- No social comparison pressure
- Focus on personal growth

### Healthy Motivation
- Celebrate consistency over intensity
- Reward returning after breaks (no shame)
- Acknowledge all progress (not just perfection)
- Personalized to Martin & Cris relationship
- Cultural appreciation, not appropriation
