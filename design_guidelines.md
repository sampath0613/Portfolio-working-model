# Professional Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Linear (clean typography, spacious layouts), Stripe (professional restraint), and Apple (minimalism with purpose). This portfolio prioritizes clarity, professionalism, and signal over noise—designed to impress technical founders and hiring managers in AI/ML/Quantum Computing domains.

## Core Design Principles
1. **Content Over Decoration**: Every element serves a purpose; avoid flashy effects
2. **Professional Formality**: Suitable for any interview context—startups to big tech
3. **Honest Authenticity**: Showcase capability and potential, not false expertise
4. **Impact-Focused**: Emphasize real-world applications and leadership achievements
5. **Clean Spaciousness**: Generous whitespace signals confidence and sophistication

## Color System

**Primary Colors:**
- Deep Navy: `#1e3a5f` (primary brand color for headers, key sections)
- Charcoal: `#2c3e50` (alternative primary for variety)

**Accent Colors:**
- Subtle Teal: `#16a085` (CTAs, links, highlights)
- Muted Gold: `#d4af37` (achievement badges, special callouts)

**Neutrals:**
- Background: `#ffffff` (primary) or `#f8f9fa` (section alternation)
- Heading Text: `#1a1a1a`
- Body Text: `#333333`
- Subtle Borders: `#e1e8ed`

## Typography System

**Font Families:**
- Headings: Inter or Helvetica Neue (clean, professional sans-serif)
- Body: Source Sans Pro or Roboto (readable, modern)

**Hierarchy:**
- H1 (Name): 3.5rem (56px), bold, tracking tight
- H2 (Section Headers): 2.5rem (40px), semibold
- H3 (Subsections): 1.75rem (28px), medium
- Body Large: 1.125rem (18px), regular
- Body Standard: 1rem (16px), regular
- Caption: 0.875rem (14px), regular

**Line Heights:**
- Headlines: 1.2
- Body Text: 1.75 (generous for readability)

## Layout System

**Spacing Units:** Use Tailwind spacing scale: 2, 4, 6, 8, 12, 16, 20, 24, 32 units

**Section Spacing:**
- Desktop: `py-20` to `py-32` between major sections
- Mobile: `py-12` to `py-16`

**Container Widths:**
- Maximum content: `max-w-6xl` (1152px)
- Text-heavy sections: `max-w-4xl` (896px)
- Reading content: `max-w-prose` (65ch)

**Grid System:**
- Hero: Single column, centered
- Projects: 2 columns on tablet, 3 columns on desktop
- Leadership cards: 1-2 columns responsive
- Technical skills: Multi-column lists (3-4 columns desktop)

## Component Library

### Hero Section
- Full viewport height (80vh minimum)
- Large professional headshot or abstract tech visual (left or center)
- Name and tagline hierarchy clearly established
- Three primary CTAs: "View Projects" | "Download Resume" | "Contact"
- Buttons on hero image use blurred backdrop (`backdrop-blur-md`, semi-transparent background)
- Subtle scroll indicator at bottom

### About Section
- Two-column layout (desktop): Text left, supporting visual/stats right
- Lead with intellectual curiosity statement
- Bullet points for current focus areas
- Authentic learning journey narrative
- Optional timeline visualization of academic progress

### Leadership & Impact Section
- Prominent placement (3rd section - founders care about initiative)
- Card-based layout highlighting Space Club achievements
- Visual hierarchy: Organization → Role → Key Achievements
- Metrics highlighted: 16 teams, 6 problem statements, 2 major events
- Timeline indicator showing 5-month presidency

### Projects Section
- Domain-categorized cards (NLP, Computer Vision, Space & ML)
- Each card: Title, 1-2 line impact description, tech stack tags, GitHub link
- Hover state: Subtle elevation with shadow
- Grid layout: 1 column mobile, 2 columns tablet, 3 columns desktop
- Icon or thumbnail for each project category

### Technical Foundation
- Presented as "Building Blocks" not "Skills"
- Multi-column lists for coursework and technologies
- Visual separation of: Coursework | Programming | AI/ML Concepts
- Highlight favorite subjects (Theory of Computation, Operating Systems)

### Interests & Vision
- Centered text block with key focus areas
- Future-oriented language about impact and mission
- Clean typography with generous spacing

### Contact Section
- Simple, centered layout
- Email, LinkedIn, GitHub with icons
- Location: "JNU, Delhi" with subtle map pin icon
- Professional footer with copyright

## Images

**Hero Image:**
- Large professional hero image required
- Options: Professional headshot with tech background, abstract AI/ML visualization, or clean minimalist workspace
- Placement: Full-width background with overlay gradient, or split layout (image 50%, content 50%)
- Treatment: Subtle blur or overlay to ensure text readability

**Section Supporting Images:**
- Space Club section: Photo from hackathon or event (if available, use placeholder otherwise)
- Projects: Small thumbnail or icon representing each domain (NLP, CV, Space)
- About section: Optional secondary photo showing personality/interests

**Image Style:**
- Professional quality
- Consistent color grading (slightly desaturated for cohesion)
- No stock photo clichés
- Tech-relevant imagery preferred

## Interaction & Animation

**Minimal Animation Philosophy:**
- Fade-in on scroll for sections (subtle, 300ms)
- Smooth scroll behavior for navigation
- Hover states: Slight elevation (2px-4px shadow increase)
- Button hover: Subtle scale (1.02) with color darkening
- No flashy transitions, no auto-playing animations

**Loading States:**
- Fast loading prioritized
- Graceful image loading with placeholders

## Responsive Breakpoints

**Mobile (< 768px):**
- Single column layouts
- Stacked navigation
- Hero text size reduced by 30%
- Cards full-width

**Tablet (768px - 1024px):**
- 2-column grids where appropriate
- Increased spacing
- Balanced layouts

**Desktop (> 1024px):**
- Full multi-column layouts
- Maximum spacing for luxury feel
- Optimal reading widths maintained

## Accessibility & Quality

- High contrast ratios (WCAG AA minimum)
- Focus states clearly visible
- Semantic HTML structure
- Screen reader friendly
- Keyboard navigable
- Fast loading (<3 seconds)
- Mobile-first responsive design

## Professional Standards

- Clean, production-ready code structure
- Deploy-ready immediately
- Cross-browser compatible
- No console errors
- Optimized assets
- Professional URL structure ready

This portfolio should feel like a product designed by a thoughtful, capable engineer—clean, intentional, and focused on substance over style. Every design choice signals professionalism and technical competence.