# Publish Hành Trình Nón Lá for free

The game is a static website: no database, server-side code, account system, or build process is needed.

## Easiest route: Cloudflare Pages Direct Upload

1. Create/sign in to a Cloudflare account.
2. Open **Workers & Pages** in the dashboard.
3. Choose **Create application**, then **Pages**, then **Direct Upload**.
4. Name the project (for example, `non-la-quest`).
5. Upload `non-la-quest.zip` or the unzipped project folder.
6. Choose **Deploy site**. Cloudflare supplies a public `*.pages.dev` address over HTTPS.

The browser microphone API requires a secure context, so test the deployed HTTPS address rather than a plain LAN address. The typed-answer mode also works when voice recognition is unavailable.

Official instructions: https://developers.cloudflare.com/pages/get-started/direct-upload/

## Alternative: GitHub Pages

1. Create a **public** repository on GitHub Free.
2. Upload all files and folders inside this project to the repository root (the `index.html` file must be at the root).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then save.
6. GitHub displays the public site address in the Pages section after deployment.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Update the game later

For Cloudflare Direct Upload, upload a new ZIP/folder as a new deployment. For GitHub Pages, replace the changed files in the repository and commit the update. The current release uses service-worker cache `non-la-quest-v3`; increment this value when a later release changes cached assets.
