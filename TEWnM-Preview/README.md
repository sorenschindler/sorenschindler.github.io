# TEWnM client presentation previews

Three responsive website concepts built with plain HTML, CSS and JavaScript. No build step, framework, WordPress installation or account is required.

## Present the designs

Unzip the complete folder and double-click `index.html`. Choose one of the three options. Keep the assets, CSS and JavaScript alongside the HTML files. The pages work offline, including menus and information dialogs. Phone and email links open external applications. Each option now has its own legal pages, blog, article layouts and Links directory; the chooser links directly to them.

Alternatively, from this directory run `python -m http.server 4173 --bind 127.0.0.1` and visit http://127.0.0.1:4173/.

## Files

- `option-1.html`: growing tree with five service leaves; About, Partners, Team, and the original three-image slideshow.
- `option-2.html`: tree on the right and five leaves (three detail leaves and two section links), gold contact button, shared page sections and contact form.
- `option-3.html`: central watercolor tree, six information leaves in sage/cream/blue, navy and yellow accents, shared page sections and contact form.
- `styles.css`: shared responsive styling, local fonts and accessible focus states.
- `script.js`: mobile navigation, in-place leaf details, navigation dialogs, slideshow, and contact-form validation.
- `leaf-topics.js`: Option 1's additional leaf topics; add/remove entries without adjusting CSS positions.
- `contact-form.html`: source for the bottom contact form used in all three options.
- `expanded-sections.html`: source for Option 1's new sections, included in the rendered homepage.
- `assets/`: locally stored brand logo, generated botanical artwork, fonts and icons.
- `references/`: the selected concept images used as presentation thumbnails.

All three pages use live, selectable text. Leaf details now appear on mouse hover or keyboard focus without a modal. On desktop, the reading panel fits inside the leaf footprint and long text can scroll. It remains open while the pointer or focus is inside it. Moving away closes it automatically unless pinned by activating the trigger. Escape and the optional close button dismiss it. On mobile, a tap expands the details beneath the leaf and a second tap collapses them; opening another leaf switches the details. Navigation dialogs still support Escape, a close button and focus return. Reduced-motion preferences are respected. The personal area is explicitly a demonstration; there is no authentication, form submission or data collection.

## Content and next steps

The main-page wording follows the concept images. The information panels contain draft editorial copy for client review; this is not a complete migration of every page on the existing websites. Telephone and email are based on the existing public site. Verify those, the service wording, financing description and provider details and the legal-page drafts before publication. Unverified opening hours from the concept image have been omitted. No existing website has been changed.

After the client selects a direction, translate the selected structure into WordPress core blocks, reusable patterns, templates and theme.json settings. The botanical artwork should stay decorative; service copy must remain editable. The site's hosting, WordPress configuration and security require separate implementation work.

## Asset attribution

TEWnM logo: supplied by the existing website; client permission required for final publication. Botanical illustrations: generated for these concepts. Lora and Source Sans 3: SIL Open Font License, see `assets/licenses/`. Phosphor icons: MIT license, see the same directory.

The consultation photograph, three partner logos and three slideshow images were reused from the public homepage at http://logosmundi.com/ (retrieved 3 October 2026). The About and general Team copy is adapted from that page. Individual staff names or portraits were not present there and have not been invented. Existing slideshow images, including their embedded quotations and attributions, are preserved. The client should confirm rights and final editorial copy before production.

## Adding more leaves to Option 1

Edit `leaf-topics.js`. Each entry contains a title, short summary, Phosphor icon name, and either a `target` pointing to a section or an array of plain-text `paragraphs` for an in-place reading panel. A commented example is already included. The new leaves are appended after the five service leaves; the order of the additional entries controls their order on the page. The original five services are maintained in `build_previews.py` and their details in `script.js`.

Above five leaves, the canopy switches to a growing three-column layout on desktop, two columns on tablets and one column on phones. New rows grow in normal document flow. Incomplete final rows are centred on desktop. Removing all additional entries restores the original five-leaf arrangement. Keep summaries short, with roughly two or three words in each heading. Long details scroll inside desktop reading panels and expand below leaves on smaller screens.

A thirteen-leaf QA fixture was verified at desktop and mobile widths. That is a layout resilience check, not a recommendation to keep adding topics indefinitely. Around eight to ten main leaves is a useful editorial target; larger sites should group topics into branches/sections or link to dedicated pages. In the future WordPress implementation, the same structure can be represented by a reusable canopy pattern and repeatable leaf blocks, so the client can add and reorder topics in the editor.

## Slideshow

The slideshow starts in manual mode. Previous/next, numbered controls and left/right arrow keys select images. Touch swiping is supported by pointer events; physical touchscreen testing remains outstanding. Optional playback advances every seven seconds and pauses temporarily while hovered, focused or in a hidden browser tab. Manual navigation stops automatic playback. A change to a reduced-motion preference stops playback. Use the play/pause button to control it explicitly.

## Validation

Browser checks covered desktop, mobile and tablet layouts, local asset loading, menus, leaf dialogs, Escape and focus return, contact anchor navigation, and link destinations. See `design-qa.md` and `qa/` in the working source directory for evidence. The portable ZIP excludes the QA captures and test fixtures to keep the client presentation compact.


## Contact form (all three options; shared since 13 October 2026)

Fields follow https://www.tewnm.de/kontakt.html: first name, last name, optional birthday, street and house number, postcode, city, email and email confirmation, telephone, mobile telephone, and message. Country selection and salutation are omitted. All remaining text fields are required except birthday; at least one of telephone/mobile is required. Any supplied phone number must contain 6–20 digits and may use international prefixes, spaces, brackets, slashes and hyphens. Postcodes are not limited to German formats. Email confirmation must match. Birthdays cannot be in the future. Required text is trimmed so spaces alone cannot satisfy it.

One optional attachment is supported: PDF, JPEG or PNG, up to 10 MiB (shown as 10 MB). These are editable prototype limits. Browser checks cover extension, reported MIME type and size; they do not inspect file contents. The privacy acknowledgement is included and required now, linking to the current public privacy page. No captcha simulation or third-party captcha script is included.

The button checks the form locally and explicitly confirms that nothing was sent. There is no fetch, upload, storage, email or connection to the old form-mailer. Controls remain disabled without JavaScript to prevent accidental submission. Errors appear alongside fields and in a focusable summary with links to the affected inputs. Edit `contact-form.html` and run `python build_previews.py` to regenerate.

For the WordPress version, provide an HTTPS submission endpoint, repeat all validation on the server, enforce upload size/type by inspecting content, keep attachments in private storage with restricted access and retention, add spam protection/rate limits and verify captcha tokens on the server, and verify the final privacy wording and destination. A captcha must be paired with the actual submission endpoint; a decorative checkbox would provide no protection. HTTPS encrypts browser-to-server transport. It does not automatically encrypt any subsequently forwarded email; secure inquiry handling needs to cover that separate step as well.


## Three-option update — 13 October 2026

Option 3 implements the previously generated blue/yellow, central-tree concept with six topics: Unser Angebot, Für wen?, Wohnen & Alltag, Beziehungen & Teilhabe, Arbeit & Tagesstruktur, Kosten & Beratung. The tree background was derived from that concept without embedded UI text; live text overlays the decorative artwork. Blue leaves reuse the existing leaf artwork with a CSS color filter. The common header retains the working navigation from the current previews rather than adding the concept's unimplemented Blog/Links destinations.

All three now contain Über uns, Unsere Kooperationspartner, Unser Team, the original three-image slideshow and the same validated bottom contact form. Those sections remain outside the leaf navigation. Option 1 keeps five service leaves; Option 2 initially kept three overview leaves and now has five (see below); Option 3 has six. All leaf and information-dialog contact links target the form. Captcha and actual submission remain future implementation work.

`expanded-sections.html`, `contact-form.html`, shared `script.js`, `styles.css` and the common header/footer in `build_previews.py` are the source of future shared revisions. Edit those once, then run `python build_previews.py` to update every option. The two existing selection pages now list all three designs; the older extracted `TEWnM-client-previews-hover/index.html` links to the canonical `client-previews` pages so it cannot present divergent copies. Earlier ZIP archives remain historical. The new `TEWnM-three-options.zip` contains the current complete presentation.

Browser checks covered 1190×900 desktop and 320×800 mobile: shared sections and forms present; no horizontal overflow after fixing Option 3's grid; keyboard leaf open/Escape; slideshow next; empty-form summary focus; valid phone-only input in Option 2 and mobile-only input in Option 3; Option 3 mobile leaf expansion and navigation to About. No console errors were reported in Options 2/3 during these checks. Desktop and corrected 320-pixel mobile screenshots were captured. A stale browser-tab capture failure was resolved by using a fresh tab; the chooser-to-Option-3 link and the mobile chooser were then verified as well. Physical touch and a new exhaustive attachment matrix were not retested; the attachment validator itself is unchanged.

The WordPress work remains the separate Option 1 development release in `../wordpress`. This update implements the three HTML presentation options; it does not deploy a site or create additional WordPress themes. The WordPress generator's CSS filtering was updated so rebuilding Option 1 cannot pull in Option 3-only artwork or layout styles.


## Option 2 client revision — 13 October 2026

The overview now has five leaves: Unser Angebot, Für wen wir da sind, Kosten & Unterstützung, Über uns, Unsere Kooperationspartner. The first three retain in-place hover/focus reading panels. The additional two contain short text and native links to the existing About and Partners sections. Desktop uses two columns, with the fifth leaf on the lower left and the Lichtenberg quote on the lower right. Phones stack all five leaves, then the quote, in reading order.

The exact client-supplied quote and attribution are live selectable HTML, displayed over the background with a light translucent backing. The original quote image remains in the slideshow as requested. A CSS mask fades only the decorative tree layer to the left; foreground text and navigation are unaffected. The background continues across the enlarged five-leaf area, and the overall canvas is capped at 1600px on wider screens.

Browser checks at 1190×900, 2560×1440 and 320×800 verified five leaves, no horizontal overflow, correct About/Partners link destinations, mobile text fitting within both new leaves, retained keyboard opening/Escape for an existing detail leaf, and the updated selection-page description. No relevant console errors were reported. Screenshot capture used viewport images because full-page capture failed in the browser tool. Existing contact-form and slideshow validation logic is unchanged.


### Option 2 mobile background correction — 13 October 2026

At widths up to 960px, the hero now has a solid cream background. The tree layer is attached to `.branch-leaves` rather than the whole `.branch-canvas`, starting exactly below the hero. It uses a proportional cover crop and the full section height instead of a fixed 1500px height; all five leaves and the quote stay within its area, even when reading panels expand. The cover crop prioritizes the branches/trunk toward the right of the source image. Desktop keeps the existing canvas-wide image and left fade.

Browser checks at 320px, 390px and 768px confirmed no horizontal overflow, matching leaf-section/background heights and image placement below the hero. Expanded details also increased the background height correctly. At 1190px, the desktop background remained on the full canvas. No console errors were reported.

## Legal, blog and resource page previews (14 October 2026)

All three styles include separate Impressum and Datenschutzerklärung pages, a blog overview, three single-article previews and a Links directory. Header links reach Blog and Links; footer links and the contact-form privacy link reach the matching legal pages. Home-section links and contact CTAs return to the same option's homepage. Both selection pages include direct links to the additional pages.

- `page-content.json`: shared provider information, article metadata, short editorial draft copy and resource groups.
- `build_content_pages.py`: renders the additional pages; called by `build_previews.py`.
- `option-N-impressum.html` and `option-N-datenschutz.html`: legal layout drafts with published contact details and explicit missing-information notices.
- `option-N-blog.html`: the latest entry featured prominently, followed by two other highlights.
- `option-N-artikel-ID.html`: a reading layout with publication date, contents navigation, original-source link, contact CTA and related articles.
- `option-N-links.html`: resources grouped into advice/support, financing/law, work/everyday life and self-help, followed by the existing flyer.

Original post titles and publication dates come from the public feed at http://logosmundi.com/wp-json/wp/v2/posts?per_page=3&orderby=date&order=desc, retrieved 14 October 2026. The newest exposed entry was published 4 August 2025 (ID 689). The static presentation is a snapshot; it does not fetch the feed in visitors' browsers. Short article texts are new editorial drafts, not a reproduction of the originals. The originals remain separately linked. Categories are proposed editorial groupings, not imported taxonomies.

Provider details come from http://logosmundi.com/impressum-disclaimer and http://logosmundi.com/datenschutz. These pages are previews, not finished production legal declarations: provider status, hosting, contact delivery, storage periods, cookies, personal area and future captcha remain to be confirmed. The old blanket privacy boilerplate and obsolete MDStV reference have not been copied into a purported finished declaration.

The Links page is a curated proposal based on http://logosmundi.com/links. It includes descriptions, destination domains and explicit pending-review wording for old addresses. It is not a complete verification or migration of every old link. Municipal Sozialbürgerhaus and Sozialhilfe destinations were checked against the official city pages; other retained resources and the flyer need a final destination/content check.

### Suggested WordPress implementation

Use a blog overview template with a featured latest-post Query Loop ordered by publication date descending, then a further-posts loop with an offset of one so the newest article is not duplicated. Start with a small number of highlights; introduce pagination when the archive grows. Use a single-post template for title, date, verified author, content, source references and related posts. Keep categories limited and meaningful. New posts should replace the featured entry automatically.

Keep the Links directory as an editable page with reusable resource-row patterns grouped by topic. Give each link a short purpose description and maintain its URL centrally; periodically review outdated destinations. Avoid embedded external previews in the initial version, which would add third-party requests. The legal pages should remain ordinary editable WordPress pages in the same site shell, with complete deployment-specific text before launch.
