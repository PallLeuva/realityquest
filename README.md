# RealityQuest
**Play:** https://pallleuva.github.io/realityquest/

An interactive AI literacy game for ages 10–14, created for Child Safety in AI.

## Play
Six fictional missions cover voice impersonation, unreliable AI answers, privacy, manipulated media, chatbot boundaries, and harmful sharing. Inspect clues, make two decisions, and read explanations. Each first choice changes the next scenario. Replays retain the highest score. A field guide and downloadable learning report reinforce learning.

## Run locally
Serve `dist/` with any static HTTP server, for example `python3 -m http.server 8000 --directory dist`, then open http://localhost:8000. No build, API key, backend, or dependencies are required. `npm test` checks every authored decision path. The contents of `dist/` can also be hosted by GitHub Pages.

## Privacy and limitations
No accounts, analytics, external fonts, APIs, or message uploads. Only mission IDs and best scores are stored in localStorage. Reset deletes that progress from this app. Hosting infrastructure may process normal request metadata. Browser storage can be cleared or unavailable.

All scenarios are authored fiction, not live AI interactions. The game does not detect deepfakes, monitor children, or assess real-world safety. XP is a practice mechanic. It has not been evaluated for educational effectiveness. Children are encouraged to seek trusted human support. Voice and image scenarios are represented through text; no realistic harmful media is required.

## Implementation and disclosure
Vanilla JavaScript modules, semantic HTML, responsive CSS, inline SVG. AI coding assistance was used in development and drafting fictional scenarios. Scenario text is bundled with the application and does not require sending information to an AI provider. Keyboard controls, visible focus, reduced motion, live announcements, and storage-error handling are included.

## Validation
Automated checks cover mission structure and all 54 two-choice combinations. Browser rendering and assistive-technology testing remain to be performed before a public launch.
