# Samrina Sarkar Sammi Portfolio

GitHub Pages version of the portfolio published at https://portfolio-website-65d.app.orvisai.com/.

## Publish on GitHub

1. Open your repository `samrinasarkar-sammi.github.io`.
2. Back up its existing contents if you want to keep the previous portfolio.
3. Extract the downloaded ZIP on your computer.
4. Upload the **contents** of the extracted folder to the repository root. `index.html` must be at the top level, alongside `assets` and `img`, not inside another folder.
5. Commit the files to `main`.
6. Open **Settings → Pages**.
7. Select **Deploy from a branch**, branch **main**, folder **/(root)**, and save.
8. Open the URL displayed by GitHub Pages once deployment completes.

No npm installation or build step is needed. The same files can be hosted in a project repository because asset paths are relative.

## Files

- `index.html`: page metadata, font loading, and application entry point.
- `assets/index-Dvcc6f2m.js`: compiled React application and animation libraries.
- `assets/index-x0QnsSVX.css`: original published stylesheet.
- `img/hero-cutout.png`: original hero portrait.
- `img/contact-avatar.png`: original contact portrait.
- `Samrina_Sarkar_Sammi_CV.pdf`: CV downloaded from the original portfolio.
- `custom.css`: optional styling overrides, loaded after the original stylesheet.
- `.nojekyll`: prevents Jekyll processing.

## Editing

This is the published browser build, not the original editable React project. It preserves the public portfolio closely but the JavaScript is minified. For normal long-term development, export the source project from OrvisAI (if export is available) and use that as your source repository. You can make styling adjustments in `custom.css`, replace image files using the same names, and replace the PDF using the same name without rebuilding.

The original site uses external fonts from fonts.bunny.net. An internet connection is needed for those fonts; the browser uses fallback fonts if unavailable.

The original portfolio content has been retained, including the six-month internship wording and public phone number. Its CV is the original website download, not a newly substituted CV.

## Local preview

Serve this folder with a static HTTP server; do not open `index.html` using a `file://` URL because it loads an ES module.

```sh
python3 -m http.server 8000
```

Open http://localhost:8000.

## Checks performed

All referenced local images, application assets, favicon and CV were downloaded and checked. Root-relative application paths were changed to relative paths for GitHub Pages. The original public site was visually inspected. The GitHub-hosted copy must be checked after deployment; it was not deployed by this task.

Third-party library license notices in the original JavaScript bundle are retained.
