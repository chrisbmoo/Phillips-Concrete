// Downloads the site's photos from the old WordPress site into public/images/.
// Run once on your own computer:  npm run fetch-images
import { writeFile, mkdir } from 'node:fs/promises';
const base = 'https://www.phillipsconcrete.com.au/wp-content/uploads/';
const files = [
  '2020/04/Phillips_Concrete_pty_ltd_logo.png',
  '2020/05/Photo-2g.jpg',
  '2020/05/Photo-3_smlg.jpg',
  '2020/05/Photo-4g.jpg',
  '2020/05/Photo-5_smlg.jpg',
  '2020/05/Photo-6_smlg.jpg',
];
await mkdir('public/images', { recursive: true });
for (const f of files) {
  const res = await fetch(base + f);
  if (!res.ok) { console.error('Failed:', f, res.status); continue; }
  const name = f.split('/').pop();
  await writeFile('public/images/' + name, Buffer.from(await res.arrayBuffer()));
  console.log('Saved public/images/' + name);
}
