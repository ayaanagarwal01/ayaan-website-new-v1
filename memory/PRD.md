# Ayaan Portfolio Clone — PRD

## Original Problem
Pixel-perfect clone of https://www.ayaanportfolio.com/ as a frontend-only React MVP with mocked data, vibrant blue/colorful theme, animations, and consolidated content.

## Implemented (as of Feb 16, 2026)
- React SPA (React Router) with custom blue/colorful theme
- Pages: Home, About, Theatre, Research, Community, Blog, Blog Post
- Animated particle background, hover micro-animations
- Full Blog with 10 mocked posts + category filters
- "My Community" page with social handles (Pinterest/Medium/Quora added; Spotify/GitHub/TikTok/Discord removed)
- Social Awareness section + menu link
- Hero with full custom illustration (visual-edit text: "Welcome to World!" / "Hi" — preserve)
- Theatre & Research consolidated to single pages at `/theatre` and `/research` (no submenus)
- Obsolete `TheatreDetailPage.jsx` and `ResearchDetailPage.jsx` removed
- Emergent watermark removal logic in `App.js`

## Architecture
- `/app/frontend/src/data/mockData.js` — single source of truth for all content
- `/app/frontend/src/pages/` — route-level components
- `/app/frontend/src/components/` — section + shared components
- No backend; no DB

## Backlog
- **P1**: Backend integration — migrate `mockData.js` → MongoDB + FastAPI CRUD (awaiting user approval)
- **P2**: Admin panel to manage blog/research/theatre content
- **P2**: SEO meta tags + OG images per route

## Notes for next agent
- Hero section text is user visual-edited; do not auto-revert
- All third-party links in mockData
- No auth, no payments, no integrations yet
