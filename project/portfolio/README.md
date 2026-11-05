# Sri Sai Lasya Pothuganti | Portfolio

A personal portfolio website built with plain HTML, CSS and JavaScript. It has no build step and no dependencies, so it runs anywhere a browser can open a file.

## Files

```
portfolio/
├── index.html   Page structure and SEO metadata
├── style.css    Design, layout and responsive styles
├── script.js    Project and certification data, menus, back-to-top, contact form
└── README.md    This guide
```

## Run locally in VS Code with Live Server

1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Open the `portfolio` folder in VS Code (File > Open Folder).
3. Install the **Live Server** extension by Ritwick Dey (Extensions panel, search "Live Server").
4. Open `index.html` and click **Go Live** in the bottom-right corner of VS Code.
5. Your browser opens the site, usually at `http://127.0.0.1:5500`. Changes you save refresh automatically.

## Update your content

Everything you are likely to change lives in `script.js` at the top of the file:

- **Projects**: edit the `projects` list. Each entry has `name`, `category`, `description`, `tech` (a list of technologies, leave empty if not confirmed), `github` and `demo`.
- **GitHub and Live Demo buttons** only appear when `github` or `demo` contains a real URL. Leave them empty until you have one.
- **Certifications**: edit the `certifications` list. Use `status: 'Completed'` for finished training and `'Learning credential'` for credentials that are still in progress or under review. Add a `url` only when there is a real verification link.

Other content (name, introduction, skills, education, contact details) is in `index.html`. Search for the text you want to change.

### Replace the profile photo

In `index.html`, find the comment in the Home section and replace the `profile-placeholder` block with:

```html
<img class="profile-photo" src="your-photo.jpg" alt="Sri Sai Lasya Pothuganti" />
```

Place `your-photo.jpg` in the `portfolio` folder.

## Contact form

The form checks that the fields are filled in correctly, then opens the visitor's email app with the message ready to send to `srisailasya14@gmail.com`. The page does not send email by itself, so no backend is required. If you later want messages to be sent directly from the website, a form service such as Formspree or a backend will need to be connected.

## Deploy free on GitHub Pages

1. Create a new public repository on GitHub, for example `portfolio`.
2. Upload the four files from this folder to the repository root (drag and drop on the GitHub page works), or push them with Git.
3. In the repository, go to **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose the `main` branch and the `/ (root)` folder, then click **Save**.
6. After about a minute, GitHub shows your live address at the top of the Pages settings, in the form `https://<your-username>.github.io/portfolio/`.

Every time you push a change to the branch, the site updates automatically.

## Before sharing

- Check that the LinkedIn and email links open correctly.
- Confirm each certification status is accurate.
- Replace the placeholder photo with your own.
