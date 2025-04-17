Set up the frontend according to the following prompt:
  <frontend-prompt>
  Create detailed components with these requirements:
  1. Use 'use client' directive for client-side components
  2. Make sure to concatenate strings correctly using backslash
  3. Style with Tailwind CSS utility classes for responsive design
  4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
  5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
  6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
  7. Create root layout.tsx page that wraps necessary navigation items to all pages
  8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
  9. Accurately implement necessary grid layouts
  10. Follow proper import practices:
     - Use @/ path aliases
     - Keep component imports organized
     - Update current src/app/page.tsx with new comprehensive code
     - Don't forget root route (page.tsx) handling
     - You MUST complete the entire prompt before stopping
  </frontend-prompt>

  <summary_title>
KODAKA Manufacturing Company Website - Modern Industrial Design Interface
</summary_title>

<image_analysis>
1. Navigation Elements:
- Primary navigation: BUSINESS, FACILITIES, ABOUT US, RECRUIT, CONTACT, 技術力, 開発力, 製品力, 人間力
- Logo positioned top-left, white text on dark background
- Navigation bar height: approximately 60px
- Fixed position header with semi-transparent dark background
- Language toggle (JP/EN) in top-right corner

2. Layout Components:
- Full-width hero section with background image (~100vh height)
- Content sections divided into full-width blocks
- Grid-based product showcase area (2x2 grid)
- Footer with 3-column layout
- Responsive container max-width: 1200px
- Section padding: 80px (top/bottom)

3. Content Sections:
- Hero section with Japanese/English tagline
- Company introduction block
- Product showcase with images
- News/Updates section
- Four capability sections (技術力, 開発力, 製品力, 人間力)
- Contact information block

4. Interactive Controls:
- "Learn More" buttons with hover effects
- Product category selection buttons
- News article links
- Contact form elements
- Social media links in footer

5. Colors:
- Primary Blue: #003087
- Secondary Blue: #0056b3
- Text Dark: #333333
- Background Light: #f8f9fa
- Accent White: #ffffff
- Button Highlight: #0069d9

6. Grid/Layout Structure:
- 12-column grid system
- Breakpoints: 576px, 768px, 992px, 1200px
- Gutter width: 30px
- Container padding: 15px
</image_analysis>

<development_planning>
1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── Footer
│   │   └── Navigation
│   ├── features/
│   │   ├── Hero
│   │   ├── Products
│   │   ├── Capabilities
│   │   └── News
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```

2. Key Features:
- Multilingual support (JP/EN)
- Responsive navigation system
- Dynamic product showcase
- News/Updates management
- Contact form with validation
- Image optimization and lazy loading

3. State Management:
```typescript
interface AppState {
  language: {
    current: 'jp' | 'en',
    translations: Record<string, string>
  },
  navigation: {
    isOpen: boolean,
    currentPath: string
  },
  products: {
    categories: Product[],
    selectedCategory: string
  },
  news: {
    items: NewsItem[],
    loading: boolean
  }
}
```

4. Component Architecture:
- HeaderComponent (navigation, language toggle)
- HeroSection (background, tagline)
- CapabilitySection (技術力, 開発力, etc.)
- ProductShowcase (grid layout)
- NewsSection (list view)
- ContactForm (form validation)

5. Responsive Breakpoints:
```scss
$breakpoints: (
  'sm': 576px,
  'md': 768px,
  'lg': 992px,
  'xl': 1200px,
  'xxl': 1400px
);
```
</development_planning>