# PEAXIS PFE Deck: Update Summary

## Revision 2 (timing, monitoring, polish)
- **Bug fixed:** Hire → next slide went blank. Cause: framer-motion `layout` animation on the Hire board cards blocked the slide exit (the next slide never mounted). Removed; a 105-press walk-through now confirms every transition mounts exactly one slide.
- **15-minute talk:** main deck cut from 28 to 22 timed slides (+ Questions). Merged Host+Internship → *Context*, Methodology+Quality → *Built like a product*, Demo plan+Live demo → one dark *Live demo* slide; removed Overview, Journey and Tech Stack (tech names now live on the architecture diagram). Per-slide timings and a cut-order are in `PITCH_NOTES.md`; the demo is 5 minutes.
- **Landscape** is now three one-word focuses (Reach / Process / Speed) vs PEAXIS (Evidence).
- **New Monitoring slide** (Grafana Alloy → Grafana Cloud, what we watch, honest next step) + backup slide B2.
- **Backup slides** (7, after Questions, press `B`): kept as jury-question reserves, not part of the talk.
- **Visual upgrade:** cover with a floating product composition, navy hero slides for objective / demo / conclusion / questions, animated score ring, flowing data dots on the architecture diagram.

## Result (revision 1 summary, partly superseded above)
28 main slides + 6 backup slides (after Questions). Order: Introduction → Context → Problem → Method → Solution → Engineering & AI → Production → Perspectives → **Demo** → Conclusion → Questions → Backup.
Perspectives (24) come before the demo (25–26); conclusion (27) follows it.

## Audit: old deck → new deck
| Old content | Decision | Why |
| --- | --- | --- |
| "Modular AI Hiring Operating System" title | REPLACE → "AI-Powered Recruitment Platform" | Shorter, matches current product |
| PEAXIS Core slide + "Core" in the platform overview, stakeholder mapping | REMOVE | Core is no longer a product; platform capabilities shown as a shared layer |
| Stats wall (42 days, 75%, 60%, $14.9K) | REMOVE / REPLACE | Unverifiable. Now: SHRM time-to-fill + LinkedIn 37% GenAI adoption, with source labels |
| ATS competitor checkmark matrix | REMOVE → honest 4-lane landscape | Major ATS vendors now ship AI |
| 4 cards on most slides, FR-01… IDs, section + slide + step numbering | REPLACE | One idea + one visual per slide; requirements by user |
| Full-page screenshots on `peaxis.app` | REPLACE | Rebuilt interactive UI components from `apps/web` tokens/components; no obsolete domain |
| 8-slide engineering deep dive (runtime, parsing, matching algorithm, model routing, optimizations, challenges, roadmap) | REPLACE with 3 jury-friendly AI slides (CV, "why it matches", human control); details moved to backup A3/A4 | Plain language first |
| Old roadmap (bug fixes) | REPLACE | New: deepen Hire (roadmap-backed) + future PEAXIS HR |
| Demo slides in the middle | MOVED to the end, as a plan slide + live-demo slide | As requested |
| Prospecter, internship, methodology, cover supervisors | KEEP / simplify | Still accurate |
| **New** | Production architecture, Security/Reliability/Scalability/Operations, "From PFE to real product", backup slides | Missing engineering achievements |

## Deck engineering changes
- **Fixed 1280×720 stage** scaled to any screen (deterministic 16:9, projection-safe type ≥ 17 px at stage scale for main content).
- **Reveal steps now actually work.** In the old deck `step` always jumped to its maximum, so no progressive reveal ever happened. Navigation now steps through reveals, then slides; going back lands on the fully revealed slide. New shortcuts: Home/End/PageUp/PageDown/Enter/Backspace/F. Footer dots show reveal progress.
- `Reveal` reserves layout space, so slides never jump, and the export view (`?export=true`, `&step=N` for QA) shows the final state.
- Fonts (Plus Jakarta Sans, Inter, JetBrains Mono) are now **self-hosted** in `public/fonts`: the deck no longer depends on Google Fonts being reachable in the defense room.
- New presentation components in `src/components/product/` (Jobs journey, Hire board + candidate drawer, CV and structured profile) and `src/components/slide/` (Slide, Reveal, Takeaway). Slide registry in `src/slides/index.ts` is the single source of order/labels/step counts.
- Removed: old slides, mockups, screenshots, legacy `docs/` pitch scripts (still in git history), small-screen blocker.
- Added `scripts/screenshot-slides.ts` for per-slide visual QA (uses the existing Playwright dependency; no new packages).
- `PEAXIS-PFE-Defense.pdf` regenerated (34 pages).

## Verification performed
- `pnpm build` (tsc + vite build): passes. There is no lint or unit-test script in this project.
- All 34 slides rendered at 1280×720 and visually reviewed; reveal steps checked on the Jobs, Hire, CV, matching and architecture slides.
- Keyboard walk-through at 1920×1080: 101 presses cover all 34 slides in order, back-navigation and Home work, stage scale = 1.5, no console errors.
- Grep: no "PEAXIS Core", `peaxis.app`, old statistics, or FR-IDs remain. All candidate/company names are fictitious; no IPs, secrets, or PII.

## Things you should know / decide
1. **AI availability in production.** `docs/audits/evidence/hire-manual-deployment-2026-09-21` records a *closed* release with `AI_PROVIDER_APPROVED=false` and `AI_PII_PROCESSING_ENABLED=false`, plus open legal/provider gates. The deck follows your statement (deployed, first client validation beginning) and makes no claim that AI processing is enabled for clients. **Check the current environment before the live demo**, since the demo shows AI evidence.
2. **Monitoring.** Docs state Grafana Cloud dashboards/alerts/synthetics are deployed "per environment-owner status". Slide 22 says "alerting through Grafana Cloud" and names routine restore drills as the next hardening step; verify the alerts are live before presenting that bullet.
3. **Handbook vs code.** The AI handbook says reviewer decisions do not affect the score; the current scorer applies `WAIVE_REQUIREMENT`. The deck follows the code (recruiters can waive requirements). The handbook is stale on this point.
4. **Example data.** The 85% alignment is computed from the real scoring function for the illustrated requirements (Kubernetes as a nice-to-have). It is labelled illustrative everywhere.
5. **Stats checked.** The brief's "73%" appears as "74%" in a search of the LinkedIn report, so I used only the 37% and ~20% figures. Vendor positioning (Greenhouse/Ashby/Lever) is from your brief and not independently re-verified.
6. `pnpm-workspace.yaml`, `tailwind.config.ts`, `.serena/` and the deleted `PEAXIS-PFE-Defense-Reviewed.pdf` were already modified/untracked before this work (I extended `tailwind.config.ts` with `a-*` product colors). Nothing has been committed.
7. `peaxis-workspace` was not modified.
