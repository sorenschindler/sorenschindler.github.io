# TEWnM client presentation previews

Two responsive website concepts built with plain HTML, CSS and JavaScript. No build step, framework, WordPress installation or account is required.

## Present the designs

Unzip the complete folder and double-click `index.html`. Choose either option. Keep the assets, CSS and JavaScript alongside the HTML files. The pages work offline, including menus and information dialogs. Phone, email and existing legal-page links open external applications or sites.

Alternatively, from this directory run `python -m http.server 4173 --bind 127.0.0.1` and visit http://127.0.0.1:4173/.

## Files

- `option-1.html`: growing tree with five service leaves; About, Partners, Team, and the original three-image slideshow.
- `option-2.html`: tree on the right and three information leaves, gold contact button.
- `styles.css`: shared responsive styling, local fonts and accessible focus states.
- `script.js`: mobile navigation, in-place leaf details, navigation dialogs, slideshow, and contact-form validation.
- `leaf-topics.js`: Option 1's additional leaf topics; add/remove entries without adjusting CSS positions.
- `contact-form.html`: source for the bottom contact form (Option 1 only).
- `expanded-sections.html`: source for Option 1's new sections, included in the rendered homepage.
- `assets/`: locally stored brand logo, generated botanical artwork, fonts and icons.
- `references/`: the selected concept images used as presentation thumbnails.

Both pages use live, selectable text. Leaf details now appear on mouse hover or keyboard focus without a modal. On desktop, the reading panel fits inside the leaf footprint and long text can scroll. It remains open while the pointer or focus is inside it. Moving away closes it automatically unless pinned by activating the trigger. Escape and the optional close button dismiss it. On mobile, a tap expands the details beneath the leaf and a second tap collapses them; opening another leaf switches the details. Navigation dialogs still support Escape, a close button and focus return. Reduced-motion preferences are respected. The personal area is explicitly a demonstration; there is no authentication, form submission or data collection.

## Content and next steps

The main-page wording follows the concept images. The information panels contain draft editorial copy for client review; this is not a complete migration of every page on the existing websites. Telephone and email are based on the existing public site. Verify those, the service wording, financing description and legal-page destinations before publication. Unverified opening hours from the concept image have been omitted. No existing website has been changed.

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


## Contact form (Option 1, 3 October 2026)

Fields follow https://www.tewnm.de/kontakt.html: first name, last name, optional birthday, street and house number, postcode, city, email and email confirmation, telephone, mobile telephone, and message. Country selection and salutation are omitted. All remaining text fields are required except birthday; at least one of telephone/mobile is required. Any supplied phone number must contain 6–20 digits and may use international prefixes, spaces, brackets, slashes and hyphens. Postcodes are not limited to German formats. Email confirmation must match. Birthdays cannot be in the future. Required text is trimmed so spaces alone cannot satisfy it.

One optional attachment is supported: PDF, JPEG or PNG, up to 10 MiB (shown as 10 MB). These are editable prototype limits. Browser checks cover extension, reported MIME type and size; they do not inspect file contents. The privacy acknowledgement is included and required now, linking to the current public privacy page. No captcha simulation or third-party captcha script is included.

The button checks the form locally and explicitly confirms that nothing was sent. There is no fetch, upload, storage, email or connection to the old form-mailer. Controls remain disabled without JavaScript to prevent accidental submission. Errors appear alongside fields and in a focusable summary with links to the affected inputs. Edit `contact-form.html` and run `python build_previews.py` to regenerate.

For the WordPress version, provide an HTTPS submission endpoint, repeat all validation on the server, enforce upload size/type by inspecting content, keep attachments in private storage with restricted access and retention, add spam protection/rate limits and verify captcha tokens on the server, and verify the final privacy wording and destination. A captcha must be paired with the actual submission endpoint; a decorative checkbox would provide no protection. HTTPS encrypts browser-to-server transport. It does not automatically encrypt any subsequently forwarded email; secure inquiry handling needs to cover that separate step as well.
