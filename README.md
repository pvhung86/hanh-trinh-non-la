# Hành Trình Nón Lá — Vietnamese Heritage Adventure

A self-contained, static browser game for children aged approximately 5–15 in Vietnamese-speaking families overseas. The player speaks the target phrase to help a friendly animated nón lá leap across a Vietnam-inspired course.

## Learning design

This version is deliberately designed for **heritage Vietnamese learners** rather than assuming every child is a complete beginner. Children may already understand family conversation but have different strengths in speaking, vocabulary, literacy and confidence. Every level is available immediately; families can choose a starting point that suits the child rather than using age as a gate.

The 100 levels are organised into six age-guided stages:

| Stage | Levels | Age guide | Main learning goals |
|---|---:|---:|---|
| Family Greetings | 1–15 | 5–7 | Kinship words, greetings, polite replies, needs and family identity |
| Home & Everyday Life | 16–30 | 6–9 | Meals, food, routines, chores, reading familiar labels and staying in touch |
| Friends & Community | 31–45 | 8–10 | School, friends, feelings, questions, clarification and sharing family traditions |
| Stories & Visits | 46–60 | 9–11 | Recounting visits, sequencing events, describing memories and making plans |
| Language & Culture | 61–80 | 11–13 | Tết, family customs, forms of address, regional variation, tone awareness and pronunciation |
| Heritage Storyteller | 81–100 | 13–15 | Longer explanations, personal viewpoints, comparison, proverbs and family storytelling |

The sequence uses familiar family language first, then moves from short everyday exchanges to narratives, cultural reflection and more independent expression. Topics and age bands are guides, not limits.

## Northern Vietnamese (Hà Nội) focus

- Browser speech recognition is requested with the `vi-VN` locale.
- Each lesson includes a short Hà Nội-oriented sound or tone focus.
- The expandable guide introduces the six tone categories: ngang, huyền, sắc, hỏi, ngã and nặng. It notes that hỏi and ngã are distinct in careful Hà Nội speech.
- The lesson notes include Northern forms such as **vâng ạ**, and explain the role of particles such as **ạ** and **nhé**.
- Family address words such as **con**, **ông bà**, **bố mẹ**, **anh**, **chị** and **em** appear in context. The right form of address depends on family relationships and local family practice; the examples are not a universal rule for every household.

**Important pronunciation limitation:** `vi-VN` is a browser locale hint, not a guarantee that the speech-recognition engine or text-to-speech voice uses a Hà Nội speaker. The browser may supply a different Vietnamese voice or recognition model. The game does not measure whether a learner sounds native, and it does not award a pronunciation or accent score. Use a trusted Hà Nội family member or teacher as the reference model where available.

## What's included

- 100 Vietnamese targets, English meanings, family/usage notes, and individual sound or tone prompts.
- Six heritage-focused learning stages and direct level selection from 1–100.
- A playful animated nón lá character and themed stages in a Vietnam-inspired setting.
- Vietnamese browser speech recognition (`vi-VN`) where supported, plus typed-answer practice.
- Browser Vietnamese text-to-speech where a Vietnamese voice is installed.
- Gentle practice feedback: the game reports what the speech service recognised, but does not claim to assess a child's accent or tone quality.
- Previously completed levels can be practised again.
- Browser-local progress only. No game account, backend, analytics, or user database.
- A small offline app shell after the first successful load.
- Responsive layouts for desktop, tablet and mobile.

## Suggested family practice

1. Let the child choose a familiar or interesting level; do not assume the age guide determines readiness.
2. Listen to a family member or teacher say the phrase, then use the game’s example audio as an optional extra model.
3. Ask the child who they would say it to and whether their family uses another natural word or expression.
4. Extend the target with one extra detail from the child’s own life. The game is a speaking prompt, not a test of one “correct” family identity.
5. Praise communication, curiosity and confidence. A speech-recognition mismatch is not proof that the child pronounced Vietnamese incorrectly.

## Run locally

Use a local server rather than opening `index.html` directly. Microphone permissions require HTTPS or localhost in most browsers.

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Free hosting

This is a static website: no database, user account, server-side code or build process is needed. The included `PUBLISHING.md` explains Cloudflare Pages Direct Upload and GitHub Pages. Once deployed over HTTPS, the browser microphone permission flow can be tested.

## Privacy and technical notes

- The game itself does not record, upload or store audio. A browser speech-recognition provider may process the audio to return text; this depends on the browser and its service.
- Microphone access requires explicit permission and usually HTTPS (or localhost for local testing).
- Text-to-speech depends on the Vietnamese voice installed on the learner’s device.
- Speech recognition checks the words returned by the browser; it is not a formal pronunciation or tone assessment.
- Completion is stored in `localStorage` on the current browser/device only. It does not sync between devices. Clearing browser data clears the saved progress.
- The app does not need a server-side database or profile.

## Curriculum reference and limits

Vietnam's Ministry of Education and Training Circular 28/2018/TT-BGDDT establishes a Vietnamese curriculum for overseas Vietnamese learners. It is organised into three proficiency levels and six stages, with speaking and listening given particular emphasis. This game borrows that broad progression and heritage-learning orientation, then adapts it to 100 short game levels for children; it is not a one-to-one implementation, accreditation or formal proficiency test.

Official publication: <https://congbao.chinhphu.vn/van-ban/thong-tu-so-28-2018-tt-bgddt-27771.htm>

Further reading on Northern/Hà Nội tone patterns and dialect variation:
- Michaud et al., *Inconspicuous coarticulation: A complex path to sound change in the tone system of Hanoi Vietnamese*: <https://www.sciencedirect.com/science/article/pii/S009544701630033X>
- Pham & McLeod, *Consonants, vowels and tones across Vietnamese dialects*: <https://doi.org/10.3109/17549507.2015.1101162>

## Mobile progression fix (Version 4)

On phone-sized screens, a successful answer now opens a fixed **Next level** bar at the bottom of the screen (above the iOS/Android safe area) and scrolls the completed lesson into view. This makes the continue action visible even when the lesson content is taller than the phone viewport. The desktop Next level button remains in place.

After a correct spoken phrase, the app now stops the active recognition session and ignores late/duplicate speech events. The microphone button is reset when the next level loads. Touch targets are protected from accidental double taps, and text inputs use a 16px font to avoid automatic zoom when focused in iOS Safari.

The offline cache was bumped to `non-la-quest-v4-mobile-flow`. When updating an existing GitHub Pages installation, upload the new files (including `service-worker.js`) and then refresh the site on the phone. If an old app shell remains visible, close the tab and reopen the site; if necessary, clear that site's stored website data once so its old service worker/cache is removed.

**Compatibility note:** Speech recognition is still a browser-provided feature with limited availability, not a feature guaranteed by all mobile browsers. Chrome on Android and Safari on iOS may differ by OS version, language pack, microphone permission and speech-service availability. Typed practice remains available as the dependable fallback. See MDN's current compatibility notes: <https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition>.
