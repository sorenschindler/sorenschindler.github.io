# Design QA — TEWnM static previews

## Findings and comparison history

1. **[P2, resolved] Option 1 hero and contact proportions.** Initial browser comparison showed excessive hero height and three contact-heading lines. Reduced hero typography/margins and contact heading size. The final capture preserves the three-line hero and two-line desktop contact heading. Evidence: `qa/comparison-1.png`.
2. **[P2, resolved] Option 2 cost leaf overlapped adjacent content.** Moved it down within the leaf field and gave the category section a readable cream background. Evidence: `qa/comparison-2.png` and `qa/detail-2.png`.
3. **[P2, resolved] Option 2 mobile grid overflow.** At 390px, intrinsic grid sizing initially produced 465px scroll width. Changed the track to `minmax(0, 1fr)` and leaf min-width to zero. Verified scroll width 375px at 390px viewport (15px reserved scrollbar), and 305/753px at 320/768px viewports. Evidence: `qa/option-2-mobile.png`.
4. **[P2, resolved] Mobile hero readability and cost text.** Added an ivory surface over the busy hero background, constrained the cost heading, and reduced its mobile type/icon spacing. Evidence: `qa/option-2-mobile.png`.
5. **[P2, resolved] Upright relationship leaf intruded into introduction.** Rotated the real leaf asset and offset the card by 6% of the tree stage. Final full-view comparison shows separated introduction and leaf text. Evidence: `qa/comparison-1.png`.

No remaining actionable P0/P1/P2 findings for the client presentation scope.

## Visual truth and browser evidence

All paths are relative to `E:/Playground/Codex/TEWnM/client-previews/`.

| Target | Source | Browser screenshot | CSS viewport | Image pixels |
| --- | --- | --- | --- | --- |
| Option 1 desktop | `references/option-1.png` | `qa/option-1-desktop.png` | 1003 × 1568 | source 1003 × 1568; implementation 988 × 1700 |
| Option 2 desktop | `references/option-2.png` | `qa/option-2-desktop.png` | 1190 × 1322 | source 1190 × 1322; implementation 1175 × 1542 |
| Option 1 mobile | desktop concept, responsive adaptation | `qa/option-1-mobile.png` | 390 × 844 | 375 × 2555 |
| Option 2 mobile | desktop concept, responsive adaptation | `qa/option-2-mobile.png` | 390 × 844 | 375 × 1987 |

State: default German homepages, menus/dialogs closed, light theme. Captures are full-page screenshots at 1 CSS pixel per image pixel; 15px desktop scrollbar is omitted by the browser screenshot API. Combined comparison inputs place source and actual capture together at native pixel scale, top aligned. Added footer and contact email account for some extra page height; these are intentional prototype additions. Mobile has no original visual target and was reviewed as an adaptation, not as pixel-identical reproduction.

Full-view evidence: `qa/comparison-1.png`, `qa/comparison-2.png`, each inspected as a combined source/implementation input. Focused evidence: `qa/detail-1.png` and `qa/detail-2.png`, showing leaf typography, icon treatment and copy. Final offset was reviewed again in `qa/comparison-1.png` after the earlier focused capture.

## Required fidelity surfaces

- **Fonts/typography:** locally loaded Lora 500/600 and Source Sans 3 400/500/600 provide the serif/sans hierarchy. Checked line breaks, headings and body copy in full-view and focused images. Exact generated-image letterforms are not reproducible; these are visually consistent equivalents. No fallback-font loading failures observed.
- **Spacing/layout:** hero scale and service grouping reflect each concept. Desktop five-leaf/three-leaf arrangements remain distinct. Tablets and phones stack the leaves to preserve readable text. Header switches to menu at 960px. Tested 320, 390, 768, 1003 and 1190px widths without horizontal scrolling.
- **Colors/tokens:** ivory `#fbf8ef`, green `#123d2b`, sage `#e7ebd8`, gold `#f3c629`; solid readable text and conspicuous keyboard focus. Option 1 green and Option 2 gold primary actions retained. No gradients or CSS illustrations replace the art.
- **Image quality/assets:** actual client logo; generated botanical raster artwork with transparent leaf assets. Art retains the tree, bird, spring foliage and pale leaf direction. Natural image proportions preserved. Minor branch/leaf silhouette differences are expected generated-asset variations, not exact pixel reconstruction.
- **Copy/content:** main headlines and leaf text correspond to the selected concepts. Intro Option 1 corrected against visible source. Unverified hours removed. Service-detail copy is a draft; no invented authentication flow or working client portal. Email added to Option 1 contact block for usability.
- **Icons/states:** local Phosphor icon font; semantic buttons/links; empty-alt decorative images. Native modal focus handling, close button, Escape and focus return verified. Menu exposes expanded state and closes after navigation.

## Interaction checks

Verified in rendered browser: first-page relationship leaf opens correct dialog; Escape closes and returns focus to leaf. Second-page cost leaf opens financing dialog; close button works. Mobile menu expands; contact anchor navigates to contact section and collapses menu. Mobile About button opens correct modal. Phone/email hrefs expose `tel:`/`mailto:` destinations; no call or email sent. Image loading and local font loading checked. Both page console-error logs and chooser console-error log were empty. Chooser visibly exposes both preview routes.

## Accepted limitations / P3 polish

- Regenerated artwork has slightly different leaf silhouettes and branch positions from the original image concepts.
- The contact bands are simple readable surfaces rather than the mockup's tiny branch detail and irregular lower edge.
- Final service and financing text, public phone/email, legal destinations and client portal requirements need client review before production. This does not block design presentation.
- No full screen-reader audit, production WordPress testing, back end, login, or hosting security work is claimed.

## Implementation checklist

- [x] Two plain HTML/CSS/JavaScript pages with local dependencies.
- [x] Real editable text over raster botanical assets.
- [x] Responsive layouts and primary interactions checked in browser.
- [x] Combined source/implementation comparisons and focused inspection.
- [x] Resolved significant findings with revised captures.
- [x] Portable presentation package and README.

final result: passed

## Interaction revision — 3 October 2026

The user requested automatic access to leaf details. Leaf dialogs were replaced with in-place detail regions in both options. Navigation dialogs remain separate. This supersedes the leaf-dialog interaction descriptions above.

- Desktop: pointer entry or keyboard focus reveals the details inside the leaf footprint; long text scrolls within the panel. The panel is hoverable, selectable and remains open while focus is inside. Pointer departure schedules dismissal after 180ms, unless the trigger was activated to pin it. Escape dismisses without requiring a close click. A close control is also available.
- Small screens: details expand below the selected leaf and shift subsequent content down. Tap/activation toggles expansion; opening another leaf closes the previous one. This avoids overlaying neighbouring content. Real touchscreen hardware was not available; activation was exercised at mobile viewport sizes.
- Browser verification: Option 2 pointer-entry path was exercised by clicking its leaf's coordinates; the resulting panel intercepted the click, the original trigger remained unfocused (active element BODY), and details were visible with the native dialog closed. Keyboard focus alone opened both options' details. Escape dismissed; Tab then opened the next leaf. Mobile activation and second activation expanded/collapsed Option 2 financing. No horizontal overflow at 320px or 390px. Console error log empty.
- Evidence: `qa/option-1-inline-desktop.png`, `qa/option-2-inline-desktop.png` (1190 × 900 CSS viewport, full-page capture); `qa/option-1-inline-mobile.png`, `qa/option-2-inline-mobile.png` (390 × 844 CSS viewport). Full images were visually inspected. Existing botanical assets, fonts, palette and closed-state service structure are preserved; new reading surfaces intentionally use cream backgrounds for legibility. No other leaf's text is hidden by the reading panels in the captured states. Desktop inner scrolling is an accepted tradeoff for longer copy; dedicated content pages are recommended for substantial articles.
- Follow-up polish resolved during verification: inset desktop panels by 5% to keep them away from the hero action, and avoid duplicated keyboard-focus outlines.

final result: passed

## Option 1 content and growing-canopy revision — 3 October 2026

User-authorized visual target change: retain the botanical direction and hover/touch behavior while allowing more leaves and adding the existing About, Partners, Team and slideshow material. The original five-leaf placement is therefore no longer the visual target for the expanded page.

Implemented eight leaves: five service reading panels and three links to full-page sections. The canopy uses three columns above 960px, two between 641–960px, one below that, and grows vertically in document flow. Original five-leaf mode is retained when additional entries are absent. Configuration is in `leaf-topics.js`; no manual coordinates are required for new topics.

Evidence: `qa/option-1-expanded-desktop.png` (1190 × 900 CSS viewport; 1175 × 5047 full-page pixels), `qa/expanded-canopy.png`, `qa/expanded-sections.png`, `qa/option-1-expanded-mobile.png` (390 × 844 CSS viewport; 375 × 7033 full-page pixels). Desktop focused crops and mobile lower-section crop were opened and inspected. Initial full-page capture omitted lazy-loaded logos until the corresponding section was visited; revised capture after section navigation confirms all three real logos. Artwork, fonts and palette remain unchanged; the larger canopy arrangement and new section layouts are deliberate adaptations.

Required surfaces reviewed: Lora/Source Sans hierarchy, readable leaf and section text, three/two/one-column spacing, ivory/green/sage/gold tokens, actual source partner/photo/slideshow assets with natural aspect ratios, adapted source copy with no invented staff profiles. Mobile section heading scale refined for narrow screens. Embedded slideshow text is preserved as original raster imagery; accessible full-text transcription and final quote editorial review remain production work.

Browser checks: eight-leaf count and new section links; existing service expansion; slideshow next, numbered selection, ArrowLeft, play/pause controls, and actual timed advancement; partner image loading; 320/390/768/1190px widths without horizontal overflow; empty console-error log. A QA-only thirteen-leaf fixture (`qa/leaf-growth-check.html`) verified five rows on desktop, no horizontal overflow on mobile, and a newly configured plain-text reading panel. Fixture navigation is not a production target and is excluded from the ZIP. Touch swiping is implemented but not tested on physical touch hardware. Browser preview remains available with temporary viewport overrides cleared.

Accepted editorial limit: the layout can grow past ten leaves, but the main canopy should stay around eight to ten clear topics before grouping further content into sections. Team uses the general public introduction; no individual profiles were supplied. New public page assets were retrieved read-only; neither existing website was modified.

final result: passed


## Revision: five leaves and contact form, 3 October 2026

Result: passed for the static preview. Browser verified exactly five service leaves and retained About, Partners, Team and slideshow sections. Slideshow next/numbered navigation still works. Form follows the fields on the old contact page, excluding country and salutation. Empty submission displays field errors and focuses a summary with links to fields. Tested malformed email, mismatched confirmation, malformed phone, future birthday, valid phone with mobile empty, and valid mobile with phone empty. Optional birthday and attachment may remain empty. Privacy acknowledgement is required. Unsupported TXT and a PDF over 10 MiB were rejected; an allowed small PNG was accepted. Successful validation explicitly reports no transmission. All tests used invented local fixture values.

1190×900 and 320×800 browser checks: no horizontal overflow; no form input crosses the viewport; no missing loaded images or console errors. Corrected a wrapping house-number label discovered in the visual review. Screenshots: `qa/option-1-contact-desktop.png`, `qa/contact-form-desktop.png`, `qa/option-1-contact-mobile.png`, `qa/contact-errors-mobile.png`.

Limitations: this is a frontend demonstration with no sending endpoint, captcha or server-side upload inspection. No inquiries, uploads or messages were sent to any live website. File MIME/extension checks are convenience checks only; server validation and private storage are required in production. HTTPS, captcha token verification, server validation, and secure downstream handling remain future WordPress work.
