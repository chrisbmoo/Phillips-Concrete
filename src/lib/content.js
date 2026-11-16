// One place that loads all editable content. Pages import from here.
import site from '../content/site.json';
import testimonials from '../content/testimonials.json';
import gallery from '../content/gallery.json';

const serviceFiles = import.meta.glob('../content/services/*.md', { eager: true });

export const services = Object.entries(serviceFiles)
  .map(([path, mod]) => ({
    slug: path.split('/').pop().replace('.md', ''),
    ...mod.frontmatter,
    Content: mod.Content,
  }))
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export { site, testimonials, gallery };

export const phoneHref = 'tel:' + site.phone.replace(/\s/g, '');
