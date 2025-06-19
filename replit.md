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
- June 18, 2025. Redesigned CTA section into two focused areas: Editorial Contributors and Brand Partners, each with compelling headlines, benefit lists, and clear action buttons directing to contact form
- June 17, 2025. Updated Why section with fresh solutions-focused content emphasizing actionable insights and strategic thinking above the 6 editorial standards boxes
- June 19, 2025. Added custom SVG visual element to Why section with animated network diagram showing India Front as central hub connecting solution nodes, matching section 2's visual approach
- June 19, 2025. Redesigned Why section with indigo gradient background, removed paragraphs, highlighted keywords, added hero-style illustrations and animations, consistent font sizing
- June 19, 2025. Redesigned About section with cohesive layout: reduced font sizes, combined content into single paragraph, added feature grid, standardized styling to match other sections
- June 17, 2025. Enhanced About section with improved visual design including decorative elements, gradient effects, and glass-morphism styling; refined content to focus on media as catalyst for transformation
- June 17, 2025. Updated hero section with "Journalism to Grow India" headline and positioned India Front as India's first "theme-based solutions magazine", refined editorial contribution focus throughout website
- June 16, 2025. Revealed India Front as a thought leadership magazine with "Journalism to Help India Grow" tagline, updated all platform references to magazine, emphasized editorial contributions and founding subscribers
- June 15, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.