# Saumya Singh — Portfolio

Personal portfolio site, built for [GitHub Pages](https://pages.github.com/).

**Live site:** https://saumyasinghz.github.io

---

## What’s in this repo

- **index.html** — Single-page portfolio (About, Experience, Education, Skills, Projects, Contact)
- **styles.css** — Styling
- **script.js** — Small interactions (mobile menu, footer year)

Content is tailored for: **M.S. Computer Science @ NYU**, **ex–Data Scientist @ Societe Generale (2 years)**.  
Edit `index.html` to add your real email, LinkedIn URL, projects, and skills.

---

## Deploy to GitHub Pages

Your repo is already set up for GitHub Pages: **saumyasinghz/saumyasinghz.github.io**.  
Pushing the `main` branch will publish the site.

### 1. Initialize Git (if you haven’t)

```bash
cd c:\Users\HP\Desktop\PROJECTS\portfolio
git init
```

### 2. Add and commit

```bash
git add index.html styles.css script.js README.md
git commit -m "Add portfolio site for GitHub Pages"
```

### 3. Add your GitHub repo and push

```bash
git remote add origin https://github.com/saumyasinghz/saumyasinghz.github.io.git
git branch -M main
git push -u origin main
```

### 4. Turn on GitHub Pages (if needed)

- Open the repo: https://github.com/saumyasinghz/saumyasinghz.github.io  
- **Settings** → **Pages**  
- Under **Source**, choose **Deploy from a branch**  
- Branch: **main**, folder: **/ (root)**  
- Save

After a minute or two, the site will be at:

**https://saumyasinghz.github.io**

---

## Local preview

Open `index.html` in a browser, or use a simple server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit http://localhost:8000 (or the port shown).

---

## Customize

- **Email / LinkedIn:** In `index.html`, replace `your.email@nyu.edu` and the LinkedIn URL in the Contact section.
- **Skills:** Edit the `.skill-tag` items in the Skills section.
- **Projects:** Replace the placeholder project cards with your real projects and links.
- **Experience:** Add more `.timeline-item` blocks for other roles.

No build step required — plain HTML, CSS, and JS.
