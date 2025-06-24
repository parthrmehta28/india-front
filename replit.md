# India Front - Magazine Website

## Overview

India Front is a React-based web application for a national magazine focused on India's progress, politics, culture, economy, and global position. The project is built as a full-stack application with a modern tech stack including React frontend, Express.js backend, and PostgreSQL database.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives for accessibility
- **Animations**: Framer Motion for smooth animations and parallax effects
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **API Design**: RESTful endpoints for subscriptions, contact forms, and newsletters

### Build System
- **Build Tool**: Vite for frontend bundling
- **Backend Bundling**: esbuild for production builds
- **Development**: tsx for TypeScript execution in development
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer

## Key Components

### Database Schema
The application uses four main tables:
- **users**: Authentication system (currently basic structure)
- **subscribers**: Magazine subscription management with plans
- **contact_messages**: Contact form submissions
- **newsletters**: Email newsletter subscriptions

### API Endpoints
- `POST /api/subscribe` - Magazine subscription registration
- `POST /api/contact` - Contact form submissions
- `POST /api/newsletter` - Newsletter email subscriptions

### Frontend Sections
- **Hero Section**: Main landing with call-to-action
- **About Section**: Platform mission and values
- **Why Section**: Problem-solving focus and goals
- **Who Section**: Target audience profiles
- **Join Movement**: Application form for participation
- **Contact Section**: Multi-purpose contact form with subject categories

## Data Flow

1. **User Interaction**: Users interact with forms (subscription, contact, newsletter)
2. **Form Validation**: Client-side validation using Zod schemas
3. **API Requests**: TanStack Query manages HTTP requests to Express endpoints
4. **Data Processing**: Express routes validate and process data
5. **Database Storage**: Drizzle ORM handles PostgreSQL operations
6. **Response Handling**: Success/error states managed through React components

## External Dependencies

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI for accessible component primitives
- Framer Motion for animations
- Lucide React for icons

### Backend Services
- Neon Database for PostgreSQL hosting
- Express.js for server framework
- Drizzle for database operations

### Development Tools
- TypeScript for type safety
- ESBuild for production bundling
- Vite for development server and frontend builds

## Deployment Strategy

### Development Environment
- Replit-based development with live reloading
- PostgreSQL module for database provisioning
- Port 5000 for local development server

### Production Build
- Frontend: Vite builds to `dist/public`
- Backend: ESBuild bundles server to `dist/index.js`
- Static file serving through Express in production

### Environment Configuration
- Database URL through environment variables
- Development/production mode detection
- Replit-specific configurations for hosting

## Changelog
- June 18, 2025. Comprehensive design transformation: standardized fonts, enhanced visual appeal with animations and glass-morphism effects, implemented consistent design language, improved readability, made headlines prominent, enhanced CTAs; changed Hero CTA to "Know More" and updated navigation menu items ("Why Join" → "Why Choose Us", "Who Should Join" → "Our Contributors") for informational focus
- June 23, 2025. Updated section title from "Why Choose Us" and "Why India Front" to "Unique to India Front" in both navigation menu and section headline for clearer brand positioning
- June 23, 2025. Replaced jarring decorative line with subtle dots: changed from solid line to three small dots using background element styling (blue/10, indigo/10) for better design cohesion; reduced spacing between headline and introductory text for improved layout compactness
- June 24, 2025. Updated hero section headline: changed from "Journalism to Grow India" to "Journalism Shaping India's Economic Future" to better reflect the magazine's focus on shaping economic future through solutions-focused journalism
- June 24, 2025. Updated hero section messaging: replaced ecosystem growth text with new focus on "moving beyond criticism towards solutions across key growth sectors" and explained theme-based magazine concept where each edition focuses on particular themes or growth sectors
- June 23, 2025. Restored original Why section visual after accidental changes: brought back perfect abstract network diagram with central hub, solution nodes, and connecting lines that was working perfectly before visual swap attempt
- June 18, 2025. Redesigned CTA section into two focused areas: Editorial Contributors and Brand Partners, each with compelling headlines, benefit lists, and clear action buttons directing to contact form
- June 17, 2025. Updated Why section with fresh solutions-focused content emphasizing actionable insights and strategic thinking above the 6 editorial standards boxes
- June 20, 2025. Fixed letter overlap in headlines: changed letter-spacing from negative to positive 0.01em to prevent character overlap (e.g., 'r' and 'n' in "Journalism") for proper letter spacing
- June 19, 2025. Strengthened hero section visual element: enhanced central hub with animated glow ring and pulsing dots, enlarged all growth sector circles to 24px with dual-layer design, added dynamic connecting lines with width and opacity pulsing for stronger visual impact
- June 19, 2025. Tightened letter spacing across all section headlines: applied -0.05em letter-spacing to all headlines including "Why India Front" with proper white text override for dark backgrounds
- June 19, 2025. Optimized Editorial Contributions CTA button for mobile: reduced padding and text length while preserving desktop appearance for better touch interaction
- June 19, 2025. Fixed visual element design glitches: adjusted connecting lines to stop at circle edges instead of entering icon circles for cleaner network diagram appearance
- June 19, 2025. Optimized hero section text layout: ensured headline perfect alignment (center/left responsive), adjusted tagline to display on two lines with proper font sizing for better readability
- June 19, 2025. Fixed headline text cutoff issue: added overflow:visible and padding-bottom to .headline-primary CSS class to properly display descenders in gradient text
- June 19, 2025. Adjusted "Coming Soon" badge positioning: moved higher on mobile (top-6) while preserving desktop placement (top-24) for better mobile visual hierarchy
- June 19, 2025. Optimized hero section for mobile responsiveness: responsive typography scaling, improved padding and spacing, mobile-friendly CTA button, and adaptive SVG sizing across all screen sizes
- June 19, 2025. Updated hero tagline to "India Front — India's first theme-based solutions focused magazine launching soon" with proper em dash typography
- June 19, 2025. Cleaned Hero section visual: removed distracting background grid pattern for cleaner appearance, fixed infrastructure building icon visibility with proper centering and contrast
- June 19, 2025. Optimized Hero section layout: rearranged sectors into balanced 5-point star pattern with sustainability at bottom center, enhanced infrastructure building design for clarity, enlarged and centered sustainability tree icon, updated all connections and animations to match new arrangement
- June 19, 2025. Enhanced Hero section visual: replaced infrastructure icon with proper building design, removed economy sector, added tree icon for sustainability, implemented hover tooltips for all sector icons, updated connecting lines to match 5-sector layout
- June 19, 2025. Restructured Hero section with two-column layout: fixed headline positioning, unboxed and enlarged visual element (480x360), replaced text labels with sector-specific icons, removed repetitive iconography section below
- June 19, 2025. Added visual representation to Hero section with journalism hub connecting to India's growth sectors (manufacturing, technology, infrastructure, sustainability, economy, geopolitics) using animated SVG with tricolor elements
- June 19, 2025. Added custom SVG visual element to Why section with animated network diagram showing India Front as central hub connecting solution nodes, matching section 2's visual approach
- June 19, 2025. Redesigned Why section with indigo gradient background, removed paragraphs, highlighted keywords, added hero-style illustrations and animations, consistent font sizing
- June 19, 2025. Redesigned About section with cohesive layout: reduced font sizes, combined content into single paragraph, added feature grid, standardized styling to match other sections
- June 17, 2025. Enhanced About section with improved visual design including decorative elements, gradient effects, and glass-morphism styling; refined content to focus on media as catalyst for transformation
- June 17, 2025. Updated hero section with "Journalism to Grow India" headline and positioned India Front as India's first "theme-based solutions magazine", refined editorial contribution focus throughout website
- June 16, 2025. Revealed India Front as a thought leadership magazine with "Journalism to Help India Grow" tagline, updated all platform references to magazine, emphasized editorial contributions and founding subscribers
- June 15, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.