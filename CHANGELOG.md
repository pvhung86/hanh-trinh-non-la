# Changelog

## Version 4 — Mobile progression and speech-session fix

- Added a persistent mobile-only Next level bar, positioned above Android/iOS safe-area insets so the next action stays visible after a correct phrase.
- Scrolls the completed lesson into view after a successful answer on phone/tablet-sized screens.
- Makes the success state stop the active speech-recognition session and disable the microphone until the next level is loaded.
- Guards recognition callbacks against stale or duplicate events after a level change or successful answer.
- Keeps the standard desktop Next level button and the existing typed-answer fallback.
- Adds touch-friendly button behaviour, a 16px input font to avoid iOS focus zoom, and safe-area viewport support.
- Bumps the offline service-worker cache to `non-la-quest-v4-mobile-flow` and checks for service-worker updates on load so deployed phones receive the fix.
- Leaves the 100-level Northern Vietnamese heritage curriculum and local-only progress model unchanged.

## Version 3 — Northern Vietnamese heritage pathway

- Replaced generic beginner targets with 100 heritage-focused phrases and prompts.
- Reorganised the course into Family Greetings, Home & Everyday Life, Friends & Community, Stories & Visits, Language & Culture, and Heritage Storyteller.
- Added family/usage notes and a lesson-specific Hà Nội sound or tone focus to every target.
- Added a six-tone guide and concise notes on Northern pronunciation patterns.
- Updated feedback to be encouraging and to avoid treating speech recognition as a pronunciation or accent score.
- Clarified that `vi-VN` is a browser locale hint, not a guarantee of a Hà Nội model voice.
- Made previously completed levels replayable while preserving browser-local progress.
- Updated the service-worker cache to `non-la-quest-v3`.
