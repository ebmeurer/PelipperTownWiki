# Pelipper Town Wiki

This is a self-contained static wiki generated from the supplied Pelipper Town 1.2.6 dataset.

## Run

- Easiest: open `index.html` directly in a browser. The data bundle is embedded, so no build step is required.
- If your browser restricts local asset loading, run `serve.bat` on Windows or `./serve.sh` on macOS/Linux and open `http://localhost:8000`.

## Structure

- `index.html` — application shell
- `app.js` — routing, search, rendering and cross-reference logic
- `styles.css` — responsive Wiki styling
- `wiki-data.js` — Pelipper Town 1.2.6 JSON datasets bundled for browser use
- `assets/` — image assets from the supplied mod package
- `docs/` — supplied guides, release notes, and master lists
- `MOD_README.md` — supplied Pelipper Town README
- `source-meta.json` — generation metadata

The UI is data-driven. It does not create records that are absent from the supplied JSON. Unresolved references are shown as their original values rather than silently converted into invented entities.
