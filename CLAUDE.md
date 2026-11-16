# Phillips Concrete Constructions — website

Static site built with Astro. No database, no plugins, no WordPress. Hosted on Cloudflare Pages; every push to `main` on GitHub rebuilds and publishes the site automatically.

Client: Phillips Concrete Constructions Pty Ltd (owner Andrew), concreter in Geelong and Melbourne.
Built and maintained by Chris at moomedia.

## Where things live

Content is kept separate from layout. **Most edits only touch `src/content/`.**

| What | File |
|---|---|
| Business name, phone, email, socials, service area, years in business, hero image, form key | `src/content/site.json` |
| Services (one file per service; drives the homepage grid, /services/, footer list and each service page) | `src/content/services/*.md` |
| About page text | `src/content/about.md` |
| Testimonials | `src/content/testimonials.json` |
| Gallery photos | `src/content/gallery.json` + image files in `public/images/` |
| Brand colours, fonts, spacing | `src/styles/global.css` (`:root` variables at the top) |
| Main menu | `src/components/Header.astro` (`nav` array) |
| Page layouts | `src/pages/*.astro`, shared bits in `src/components/` |

## Conventions

- **Adding a service:** copy an existing file in `src/content/services/`, change `title`, `summary`, `image`, `order` (sort position) and the body text. The filename becomes the URL: `driveways.md` → `/driveways/`.
- **URLs match the old WordPress site** (`/exposed-aggregate/`, `/about-us/` etc.) and keep trailing slashes, so Google rankings carry over. Don't rename service files without adding a redirect in `public/_redirects`.
- **Images:** put them in `public/images/` and reference them as `/images/name.jpg`. Keep photos around 1600px wide, JPG, under 400KB.
- **Brand colour** is lime `#afd136` (sampled from the logo) on near-black `#111`. Headings are bold and tight, body text is Inter or the system sans-serif.
- Australian spelling (specialise, colour). Tone: plain and practical; Andrew is the contact person.
- **Contact form** posts to Web3Forms (free). The access key goes in `site.json → contactForm.accessKey`; messages go to the email registered with that key.
- Don't add client-side JavaScript frameworks. The site should stay plain HTML and CSS.

## Commands

- `npm install`: install once
- `npm run dev`: local preview at http://localhost:4321
- `npm run build`: build into `dist/` (Cloudflare runs this automatically)
- `npm run fetch-images`: re-download the original full-size photos from the old WordPress site (only works while it's still online)

## Known content gaps (from the old site)

- The old service detail pages were still placeholder "lorem ipsum" text. The service descriptions here are taken from the old homepage blurbs and are short. Ask Andrew for more detail on each service, and for more project photos.
- There were only 5 project photos. The gallery would benefit from more.
- No ABN or licence details were shown. Add them to `site.json` and the footer if Andrew wants them displayed.
