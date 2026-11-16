# phillipsconcrete.com.au

Static rebuild of the Phillips Concrete WordPress site. See `CLAUDE.md` for where everything lives.

## First-time setup (about 20 minutes)

1. **Swap in the original photos (optional).** The photos in `public/images/` are good web-size copies. For the full-resolution originals, run `npm install` and then `npm run fetch-images` on your own computer while the old site is still up.
2. **Put it on GitHub.** Create a private repository (e.g. `moomedia/phillips-concrete`) and push this folder to it.
3. **Connect Cloudflare Pages.** Go to Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git, then pick the repository.
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
   You get a `*.pages.dev` address. Check the site there before touching the domain.
4. **Contact form.** Get a free access key at web3forms.com using admin@phillipsconcrete.com.au, paste it into `src/content/site.json`, then commit.
5. **Check email before moving the domain.** If phillipsconcrete.com.au email is hosted at SiteGround, move it first (Google Workspace, Zoho, etc.). Otherwise Andrew's email stops when SiteGround is cancelled.
6. **Point the domain.** In Cloudflare Pages → Custom domains, add `www.phillipsconcrete.com.au` and `phillipsconcrete.com.au`, then follow the DNS instructions. Keep the MX (email) records exactly as they are.
7. Once it's live and checked, delete the site from SiteGround.

## Making changes later

Open the repository with Claude and describe the change, e.g. "add a testimonial from Sarah in Ocean Grove" or "change the phone number". Claude edits the files in `src/content/` and pushes, and Cloudflare publishes the change in about a minute.
