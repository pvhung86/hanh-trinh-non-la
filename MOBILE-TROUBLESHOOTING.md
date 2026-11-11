# Mobile troubleshooting — Version 4

## What was fixed

The previous build displayed the successful-level **Next level** button only inside the lesson card. On a phone, the card can be taller than the visible screen, leaving the player at the success message without an obvious continue action. The recognition session also remained active until the browser delivered its `end` event, which can arrive at a different time on mobile browsers.

Version 4 addresses both behaviours:

- A fixed **Next level** bar appears at the bottom of phone/tablet screens as soon as the phrase is accepted.
- The completed lesson is scrolled into view, and the bar is positioned above iOS/Android safe-area insets.
- The normal in-card button remains the desktop control; the duplicate is hidden on mobile while the bottom bar is visible.
- The active recognition session is stopped on success, and late/duplicate callbacks are ignored.
- The microphone is disabled for the completed level and becomes active again after the next level loads.
- The typed-answer path uses the same success/continue flow.
- The service-worker cache version is now `non-la-quest-v4-mobile-flow` so the updated shell replaces the previous cached release.

## Update an existing GitHub Pages installation

1. Download and extract `hanh-trinh-non-la-mobile-fix-v4.zip`.
2. Open the existing GitHub repository.
3. Upload **all contents** of the extracted folder to the repository root, replacing the previous files. Keep `index.html`, `service-worker.js`, `.nojekyll`, `manifest.webmanifest` and `assets/` at the root/in their original locations.
4. Commit the changes to the `main` branch.
5. Wait for the GitHub Pages deployment action to complete successfully.
6. Close the old game tab on the phone, then reopen the same GitHub Pages URL.
7. If the old page still appears, clear the website data for that site once in the mobile browser, then reopen it. This removes an old service-worker cache; the new release will cache itself after a successful visit.

## Verify on a phone

1. Open the deployed HTTPS URL in Chrome on Android or Safari on iOS.
2. Allow microphone access and speak a target phrase.
3. When the phrase is accepted, confirm the conical hat reaches the goal and the bottom **Next level** bar appears.
4. Tap **Next level**. Confirm the next phrase appears and the microphone becomes available again.
5. Repeat using **Type instead** to verify that typed practice advances in the same way.

## Browser speech-recognition limitation

The game can request `vi-VN`, but the Web Speech `SpeechRecognition` API is not supported consistently across all major browsers and devices. On some browsers the recognition engine is service-based and requires network access. A phone may therefore recognise phrases differently, fail to start recognition, or not offer speech recognition at all. The **Type instead** mode is the dependable fallback. This release improves the post-success game flow; it does not replace or add a separate speech-recognition provider.

Reference: [MDN — SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition).
