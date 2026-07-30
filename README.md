# tanner

Personal portfolio site. Static HTML/CSS — no build step, no dependencies.

## Structure

```
index.html        Home page
resume/index.html Resume page, served at /resume
style.css         Shared styles
assets/           resume.pdf, resume.png (fallback), favicon.svg
```

## Local preview

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Updating the resume

Replace `assets/resume.pdf`, then regenerate the fallback image that mobile
browsers use when they can't embed the PDF inline:

```sh
sips -s format png --resampleWidth 1400 assets/resume.pdf --out assets/resume.png
```

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel) — publish the repo root.
