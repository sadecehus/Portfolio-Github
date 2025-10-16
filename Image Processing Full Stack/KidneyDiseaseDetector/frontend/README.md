# Kidney Disease Detection - Frontend

Modern, responsive web interface for the Kidney Disease Detection System built with Next.js 15, React 19, and Tailwind CSS.

## 🎨 Features

- **Modern UI/UX** - shadcn/ui inspired design system
- **Smooth Animations** - Framer Motion powered transitions
- **Responsive Design** - Works on all screen sizes
- **Drag & Drop** - Intuitive file upload
- **Real-time Updates** - Live detection results
- **Type-Safe** - Full TypeScript support

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Tech Stack

- **Framework:** Next.js 15.5.5
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Components:** Custom shadcn-style UI components

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   └── api/
│   │       └── upload/
│   │           └── route.ts   # Upload API proxy
│   │
│   ├── components/
│   │   └── ui/                # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── badge.tsx
│   │
│   └── lib/
│       └── utils.ts           # Utility functions
│
├── public/                    # Static files
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## 🎯 Key Components

### UI Components

All components are built with accessibility and reusability in mind:

- **Button** - Versatile button with multiple variants
- **Card** - Container component for content sections
- **Badge** - Small status or label component

### Main Features

1. **Image Upload**
   - Drag and drop support
   - File browser fallback
   - Format and size validation

2. **AI Analysis**
   - Real-time processing indicator
   - Animated loading states
   - Progress visualization

3. **Results Display**
   - Annotated image preview
   - Detection cards with confidence scores
   - Color-coded by disease type
   - Bounding box coordinates

## 🎨 Design System

### Color Palette

- **Primary:** Indigo/Purple gradients
- **Disease-Specific:**
  - Cyst: Yellow/Orange
  - Tumor: Pink/Purple
  - Stone: Red/Orange
  - Kidney: Green/Emerald

### Typography

- **Font:** Inter (Google Fonts)
- **Weights:** Regular (400), Semibold (600), Bold (700)

### Animations

- Fade-in on page load
- Slide-up for content
- Scale effects on hover
- Smooth state transitions

## 📡 API Integration

The frontend communicates with the Flask backend through Next.js API routes:

```typescript
// POST /api/upload
{
  file: File
}

// Response
{
  success: boolean,
  detections: {
    [modelName]: Detection[]
  },
  image: string (base64)
}
```

## 🛠️ Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5001
```

### Tailwind Configuration

The project uses Tailwind CSS v4 with custom theme configuration in `globals.css`.

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🎭 Component Variants

### Button

```tsx
<Button variant="default" size="lg">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="secondary">Secondary</Button>
```

### Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Badge

```tsx
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
```

## 🚀 Performance Optimizations

- Next.js automatic code splitting
- Image optimization with Next.js Image component
- Lazy loading of heavy components
- Efficient re-renders with React.memo
- CSS-in-JS minimization

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Type checking
npx tsc --noEmit
```

## 📄 License

MIT License - Part of the Kidney Disease Detection System

## 👨‍💻 Developer

**Hüseyin Koçatürk**

Built with modern web technologies for optimal user experience.
