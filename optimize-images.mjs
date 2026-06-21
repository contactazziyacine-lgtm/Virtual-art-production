// ===================================================================
//  optimize-images.mjs
//  Génère une version .webp optimisée à côté de chaque .jpg/.png.
//  Le .htaccess sert ensuite le .webp automatiquement — AUCUNE modif
//  de ton code n'est nécessaire.
//
//  Installation puis exécution (depuis la racine du projet) :
//    npm i -D sharp
//    node optimize-images.mjs
// ===================================================================

import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

// 📁 Dossier des images. Pour un CRA, c'est en général public/assets.
const ROOT = 'public/assets';

const QUALITY    = 78;    // qualité WebP (75-80 = bon compromis)
const MAX_WIDTH  = 1600;  // largeur max pour héros / grandes images
const CARD_MAX   = 720;   // vignettes portfolio
const LOGO_MAX   = 320;   // logos clients (affichés petits)

function capFor(fullPath) {
  if (/clients/i.test(fullPath)) return LOGO_MAX;
  if (/portfolio|card|thumb/i.test(fullPath)) return CARD_MAX;
  return MAX_WIDTH;
}

let made = 0, skipped = 0, failed = 0;

async function walk(dir) {
  let entries;
  try { entries = await readdir(dir, { withFileTypes: true }); }
  catch { console.error('Dossier introuvable :', dir); return; }

  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) { await walk(full); continue; }
    if (!/\.(jpe?g|png)$/i.test(e.name)) continue;

    const out = full.replace(/\.(jpe?g|png)$/i, '.webp');
    try {
      await sharp(full)
        .resize({ width: capFor(full), withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(out);
      made++;
      console.log('✓', path.relative(ROOT, out));
    } catch (err) {
      failed++;
      console.error('✗', full, '—', err.message);
    }
  }
}

await walk(ROOT);
console.log(`\nTerminé : ${made} WebP générés, ${failed} échecs.`);
console.log('Uploade le dossier assets (avec les .webp) sur cPanel. Le .htaccess fait le reste.');
