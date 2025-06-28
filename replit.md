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
- June 24, 2025. Updated hero section headline: changed from "Journalism to Grow India" to "Journalism Shaping India's Economic Future", reduced font size (text-xl to text-5xl), and added strategic line break to fit in exactly 2 lines for optimal readability
- June 27, 2025. Streamlined contact forms by removing feature boxes for cleaner, more compact design: simplified both Guest Articles & Press Releases and Advertising & Brand Partnerships forms to focus on form functionality
- June 27, 2025. Updated contact forms with comprehensive fields: Guest Articles & Press Releases form (guestArticleForm) and Advertising & Brand Partnerships form (brandPartnershipForm) including name, email, phone, company, industry fields with proper validation, hidden subject fields, and updated JavaScript handling
- June 27, 2025. Integrated Formspree.io form with footer newsletter section: replaced React form with native HTML form using action="https://formspree.io/f/xanjaqle", method="POST", and added name attribute to email input for direct submission
- June 27, 2025. Adjusted hero section visual alignment: moved visual element upwards with negative margin (-mt-8) on large screens to better align with text content
- June 27, 2025. Updated hero section headline structure: repositioned "India's" to first line, restructured as "Through Unfiltered Lens: Chronicling India's / Economic Success with / Intent-Driven Journalism"
- June 27, 2025. Increased hero section headline font size by one point: adjusted from text-base/lg/xl/2xl/3xl to text-lg/xl/2xl/3xl/4xl for better visual prominence while maintaining 3-line layout
- June 27, 2025. Updated hero section body copy: replaced existing text with new passage emphasizing effective solutions, strategic intelligence, and intent-driven journalism that illuminates India's journey toward economic success
- June 27, 2025. Updated hero section headline: changed from "Journalism Shaping India's Economic Future" to "Through Unfiltered Lens: Chronicling India's Economic Success with Intent-Driven Journalism" for more specific and compelling messaging
- June 26, 2025. Updated About section tagline: changed from "Journalism Hand-Woven for India's Growth" to "Journalism Hand-Woven for India's Continued Progress" for emphasis on ongoing development
- June 26, 2025. Fixed mobile hero section visual issues: Hidden geometric shapes on mobile to prevent overlap with coming soon banner, removed inner circles from growth sector nodes to eliminate unwanted visual elements
- June 26, 2025. Fixed navbar overlap issue: Increased z-index to z-[100], adjusted hero section padding to accommodate fixed navbar, moved coming soon banner below navbar, added backdrop blur for better visibility
- June 26, 2025. Reverted Editorial card to blue gradient: Changed to normal blue-600 to blue-800 background with white text and glassmorphism effects, matching the previous design approach for better visual appeal
- June 26, 2025. Updated Brand Partnerships card styling: Applied Section 3 indigo gradient background with white text and glassmorphism effects for visual consistency with "The India Front Edge" section
- June 26, 2025. Added contrast background to Contact section: Changed "Join India's Growth Story" section to light gray-blue gradient background with subtle graphics and gray text for clear section definition using existing color scheme
- June 26, 2025. Comprehensive mobile optimization: Fixed hero section overlaps (coming soon banner + headline + background graphics), optimized all typography scales (text-xs to text-5xl responsive), reduced padding/margins on mobile, improved touch targets, fixed text-image overlaps across all sections, optimized background elements for mobile performance
- June 26, 2025. Updated Hero section growth sectors: changed "Power" to "Energy" and replaced "Oil & Gas" with "Banking & Finance" including new bank building icon with columns for financial sector representation
- June 26, 2025. Aligned CTA boxes in Contact section: changed grid from items-start to items-stretch, added h-full class to AnimateOnScroll wrappers for perfect vertical alignment of Editorial and Brand Partnerships cards
- June 26, 2025. Updated About section introductory line: changed from "Reimagining Journalism" to "Journalism Hand-Woven for India's Growth" for more specific, crafted messaging that emphasizes the tailored approach
- June 26, 2025. Updated first editorial standard: changed "Solutions-Focused Reporting" to "Unlocking Growth Pathways" in section 3 for clearer value proposition
- June 26, 2025. Optimized About section layout: changed from 2-column to 5-column grid (3 for text, 2 for image), increased image size from max-w-xs/sm to max-w-sm/md/lg for better visual balance with extensive text content
- June 26, 2025. Removed duplicate "Join India's Growth Story" section: eliminated older JoinMovementSection.tsx component while retaining newer ContactSection.tsx with targeted CTA approach (editor@indiafront.co.in and sales@indiafront.co.in)
- June 26, 2025. Hero section body copy update: replaced detailed explanation with concise messaging "India Front Magazine moves beyond criticism towards solutions. It is a theme-based magazine, so each edition will deep dive into a growth sector and pinpoint solutions to the most pressing issues, helping to accelerate the country's economic progress"
- June 26, 2025. Brand Partnerships color scheme update: changed from green to purple (purple-100, purple-600, purple-50, purple-900, purple-700) to maintain consistent color scheme with existing brand partners styling
- June 26, 2025. CTA section alignment improvements: added items-start to grid container, increased all box heights to h-24 for better visual balance between blue and purple boxes
- June 26, 2025. Editorial CTA refinement: removed "on content strategy" from Guest Editor description, simplified to "Collaborate with our editorial team."
- June 26, 2025. CTA section improvements: increased email font size to text-base with font-medium, aligned all blue/green boxes to h-20 height with centered content for better visual balance and user experience
- June 26, 2025. Content refinements: removed "you won't find anything else" from Exclusive Insights box in section 3; updated Editorial CTA to "Be a Guest Editor for our Inaugural Edition"; removed "content" from "content marketing" in Brand Partnerships CTA
- June 26, 2025. Replaced contact form with targeted CTAs: Editorial section (editor@indiafront.co.in) for guest articles, press releases, and guest editor opportunities; Brand Partnerships section (sales@indiafront.co.in) for advertising opportunities and custom solutions
- June 26, 2025. Updated editorial standards with current content: refined 6 boxes to reflect recent messaging (Solutions-Focused Reporting, Deep Sector Analysis, Expert Collaboration, Exclusive Insights, Business Ecosystem Empowerment, Nation-Building Focus) aligning with updated body copy and approach
- June 26, 2025. Updated "Unique to India Front" section: changed headline to "The India Front Edge: Our Process, Quality, and Approach" and replaced body copy with detailed explanation of editorial process, quality standards, and journalism approach
- June 26, 2025. Updated About section body copy: replaced content with new passage emphasizing real-world solutions, sector-specific empowerment, theme-based approach, and call to action "come aboard this journey to grow India"
- June 26, 2025. Updated About section title: changed from "About India Front" to "A Magazine to Empower India's Key Business Ecosystems for Growth" for clearer value proposition
- June 26, 2025. Updated hero section body copy: replaced existing text with new passage emphasizing deep dive approach into growth sectors and pinpointing solutions to pressing issues for economic progress
- June 26, 2025. Updated hero tagline punctuation: changed from "India Front — India's first theme-based solutions focused magazine launching soon" to "India Front, India's first theme-based solutions magazine launching soon" using comma instead of em dash
- June 25, 2025. Reverted and optimized "Unique to India Front" section layout: restored previous visual-text arrangement with visual on left, improved spacing and alignment, separated editorial standards into cleaner grid layout
- June 25, 2025. Updated body copy font consistency in "Unique to India Front" section: applied consistent body-text styling (EB Garamond, 1.25rem base size) to match website-wide typography standards
- June 25, 2025. Fixed "Unique to India Front" section layout: improved text and visual element placement, consolidated content with visual, enhanced responsive behavior, optimized grid layout for better alignment
- June 25, 2025. Optimized About section: removed orphaned words, improved text flow, tightened spacing and gaps, enhanced alignment consistency across all screen sizes for better readability
- June 25, 2025. Fixed text cutoff issue in "Join India's Growth Story" headline: added proper padding-bottom and overflow settings to prevent letters J and Y from being clipped
- June 25, 2025. Updated typography to use Lora font for all section headlines and subheadings across the website, replacing Playfair Display for a more modern serif look
- June 24, 2025. Mobile optimization complete: enhanced responsive design across all sections with improved typography scaling, proper spacing, touch-friendly buttons, and optimized layouts for mobile-first experience
- June 24, 2025. Updated About section with conversational tone: replaced formal language with more accessible, reader-friendly content that explains solutions-focused approach and theme-based format in simpler terms
- June 24, 2025. Removed vertical tricolor visual element from About section for cleaner design focus
- June 24, 2025. Removed early contributor program from website: eliminated references in Footer and navigation for cleaner focus on core magazine mission
- June 24, 2025. Enhanced hero section visual: increased overall size from 520x380 to 600x450, scaled up all growth sectors to 30px radius, added four new sectors (Agriculture, Power, Healthcare, Oil & Gas), updated connecting lines, and repositioned elements for better balance with new typography scale
- June 24, 2025. Optimized typography scale: increased body copy to 20px (1.25rem), headlines to text-2xl-6xl range, secondary headlines to text-lg-3xl, and CTA buttons to text-xl-2xl for improved readability and visual hierarchy with Playfair Display headlines and EB Garamond body text
- June 24, 2025. Enhanced hero section messaging: refined theme-based magazine description to emphasize that each edition focuses on "a particular growth sector or a theme highlighting opportunities and growth strategies" for clearer value proposition
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