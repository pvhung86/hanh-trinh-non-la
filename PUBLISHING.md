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

For Cloudflare Direct Upload, upload a new ZIP/folder as a new deployment. For GitHub Pages, replace the changed files in the repository and commit the update. The current release uses service-worker cache `non-la-quest-v4-mobile-flow`. The cache version is changed on each release that updates the offline app shell. When updating an existing deployment, upload the new `index.html` and `service-worker.js` together. Then fully close and reopen the mobile browser tab. If the older interface remains cached, clear the website data for that site once and reload.


## Verify the mobile fix

1. Open the deployed HTTPS URL in Chrome on Android or Safari on iPhone/iPad.
2. Allow microphone access and complete a phrase.
3. After the success message, look for the fixed **Next level** bar at the bottom of the screen.
4. Tap **Next level**; the next phrase should load and the microphone should be ready again.
5. Rotate the device or test a smaller screen to confirm the continue bar remains visible above the system/browser safe area.
6. If the old page still appears after deployment, close the tab, reopen the URL, and if needed clear the website's stored data once to remove an older service-worker cache.

Speech-recognition availability remains dependent on the mobile browser and OS speech service. The game should always remain playable with the **Type instead** fallback when speech recognition is unavailable.

For the phone-specific continue-bar fix and instructions for updating an existing deployment, see `MOBILE-TROUBLESHOOTING.md`.
