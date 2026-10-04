'use strict';
const details = {
  about: ['Über TEWnM', '<p>Therapeutisches Einzelwohnen nach Maß begleitet Menschen mit psychischen Erkrankungen in München. Im Mittelpunkt stehen Ihre persönliche Lebenssituation, Ihre Stärken und Ihre eigenen Ziele.</p><p>Gemeinsam entwickeln wir passende Schritte für einen selbstbestimmten Alltag in Ihrem Zuhause.</p>'],
  costs: ['Kosten & Unterstützung', '<p>Eine Finanzierung über den Bezirk Oberbayern kann im Rahmen der Eingliederungshilfe möglich sein. Welche Voraussetzungen gelten und ob ein Eigenanteil entsteht, hängt von Ihrer individuellen Situation ab.</p><p>Wir besprechen mit Ihnen die nächsten Schritte und unterstützen Sie dabei, die Finanzierungsmöglichkeiten zu klären.</p>'],
  offer: ['Unser Angebot', '<p>Begleitung, die sich an Ihrem Alltag orientiert. Gemeinsam vereinbaren wir die Unterstützung, die Sie benötigen.</p><ul><li>Wohnen und Alltag gestalten</li><li>Kontakte und Beziehungen stärken</li><li>Arbeit und Tagesstruktur entwickeln</li><li>Freizeit und gesellschaftliche Teilhabe ermöglichen</li><li>Stabilität fördern und Krisen bewältigen</li></ul>'],
  audience: ['Für wen wir da sind', '<p>Unser Angebot richtet sich an Erwachsene mit psychischen Erkrankungen in München, die in ihrer eigenen Wohnung leben und ihren Alltag selbstständiger gestalten möchten.</p><p>In einem persönlichen Gespräch klären wir gemeinsam, ob unser Angebot zu Ihrem Unterstützungsbedarf passt.</p>'],
  home: ['Wohnen & Alltag', '<p>Das eigene Zuhause kann ein Ort für Sicherheit und Selbstbestimmung sein. Wir begleiten Sie dabei, Ihren Alltag nach Ihren Bedürfnissen zu gestalten.</p><ul><li>Alltagsaufgaben planen und bewältigen</li><li>Eine passende Tagesstruktur finden</li><li>Termine und persönliche Anliegen organisieren</li></ul>'],
  relationships: ['Beziehungen', '<p>Wir unterstützen Sie dabei, bestehende Kontakte zu stärken und neue Beziehungen aufzubauen – in Ihrem eigenen Tempo.</p><p>Gemeinsam schauen wir auf Ihre Wünsche, Ihre Grenzen und auf die Menschen, die Ihnen Halt geben.</p>'],
  work: ['Arbeit & Tagesstruktur', '<p>Wir entwickeln mit Ihnen Perspektiven für eine sinnvolle Tagesgestaltung, Beschäftigung und Arbeit.</p><p>Ihre Interessen und Möglichkeiten geben die Richtung vor. Kleine, erreichbare Schritte helfen dabei, den eigenen Weg zu finden.</p>'],
  participation: ['Freizeit & Teilhabe', '<p>Interessen leben, Neues entdecken und am gesellschaftlichen Leben teilnehmen: Wir begleiten Sie dabei, passende Angebote und Aktivitäten zu finden.</p><p>Sie entscheiden, was Ihnen Freude macht und wie viel Unterstützung Sie möchten.</p>'],
  stability: ['Stabilität & Krisen', '<p>In herausfordernden Zeiten stehen wir Ihnen im Rahmen der vereinbarten Begleitung zur Seite. Wir entwickeln gemeinsam Strategien, die Ihnen im Alltag Halt geben.</p><p>TEWnM ist kein Notfalldienst. Bei akuter Gefahr wenden Sie sich bitte an den Notruf 112.</p>'],
  login: ['Mein TEWnM', '<p>Der persönliche Bereich ist in diesem Gestaltungsvorschlag noch nicht freigeschaltet.</p><p>Wenn Sie bereits begleitet werden oder Fragen zum Angebot haben, erreichen Sie uns telefonisch unter <a href="tel:+498955062498">089 55 06 24 98</a>.</p>']
};
const dialog = document.querySelector('#details');
const contactTarget = document.body.classList.contains('option-1') ? '#kontaktformular' : 'mailto:anfrage@tewnm.de';
dialog.querySelector('.cta').href = contactTarget;
dialog.querySelector('.cta').addEventListener('click', () => dialog.close());
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
let lastTrigger;
function closeMenu() { navigation.classList.remove('is-open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Menü öffnen'); }
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('is-open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen'); });
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
// Leaves reveal details in place; the navigation keeps its separate dialogs.
const canopy = document.querySelector('.option-1 .canopy-leaves');
if (canopy) {
  (window.tewnmAdditionalLeaves || []).forEach((topic, index) => {
    if (!topic.title || (!topic.target && !topic.paragraphs?.length)) return;
    const leaf = document.createElement(topic.target ? 'a' : 'button');
    leaf.className = 'leaf leaf-extra';
    if (topic.target) leaf.href = topic.target;
    else {
      const key = 'extra-' + index;
      leaf.dataset.detail = key;
      const copy = document.createElement('div');
      topic.paragraphs.forEach(text => { const p = document.createElement('p'); p.textContent = text; copy.append(p); });
      details[key] = [topic.title, copy.innerHTML];
    }
    const image = document.createElement('img'); image.src = 'assets/leaf-sage.png'; image.alt = '';
    const content = document.createElement('span'); content.className = 'leaf-content';
    const icon = document.createElement('i'); icon.className = 'ph ph-' + (topic.icon || 'leaf'); icon.setAttribute('aria-hidden', 'true');
    const title = document.createElement('span'); title.className = 'leaf-title'; title.textContent = topic.title;
    const summary = document.createElement('span'); summary.className = 'leaf-copy'; summary.textContent = topic.summary || '';
    content.append(icon, title, summary);
    if (topic.target) { const more = document.createElement('span'); more.className = 'more'; more.textContent = 'Zum Abschnitt'; content.append(more); }
    leaf.append(image, content); canopy.append(leaf);
  });
  canopy.classList.toggle('is-growing', canopy.children.length > 5);
}
const hoverInput = window.matchMedia('(hover: hover) and (pointer: fine)');
let activeLeaf = null;
document.querySelectorAll('.leaf[data-detail]').forEach((button, index) => {
  const content = details[button.dataset.detail];
  if (!content) return;
  const slot = document.createElement('div');
  slot.className = button.className + ' leaf-item';
  button.replaceWith(slot);
  slot.append(button.querySelector('img'), button);
  button.className = 'leaf-trigger';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'leaf-detail-' + index);
  const panel = document.createElement('section');
  panel.className = 'leaf-detail';
  panel.id = 'leaf-detail-' + index;
  panel.hidden = true;
  panel.setAttribute('aria-labelledby', panel.id + '-title');
  panel.innerHTML = '<button class="leaf-close" aria-label="Details schließen"><i class="ph ph-x" aria-hidden="true"></i></button><h3 id="' + panel.id + '-title">' + content[0] + '</h3><div class="leaf-detail-copy">' + content[1] + '</div><a class="leaf-contact" href="mailto:anfrage@tewnm.de">Kontakt aufnehmen <i class="ph ph-arrow-right" aria-hidden="true"></i></a>';
  slot.append(panel);
  panel.querySelector('.leaf-contact').href = contactTarget;
  let leaveTimer;
  let pinned = false;
  let suppressed = false;
  function close(returnFocus = false) {
    clearTimeout(leaveTimer);
    pinned = false;
    suppressed = true;
    panel.hidden = true;
    slot.classList.remove('is-expanded');
    button.setAttribute('aria-expanded', 'false');
    if (activeLeaf?.slot === slot) activeLeaf = null;
    if (returnFocus) button.focus();
  }
  function open() {
    clearTimeout(leaveTimer);
    if (suppressed) return;
    if (activeLeaf?.slot !== slot) activeLeaf?.close();
    activeLeaf = {slot, close};
    panel.hidden = false;
    slot.classList.add('is-expanded');
    button.setAttribute('aria-expanded', 'true');
  }
  slot.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse' && hoverInput.matches) { suppressed = false; open(); }
  });
  slot.addEventListener('pointerleave', event => {
    suppressed = false;
    if (event.pointerType === 'mouse' && !pinned && !slot.contains(document.activeElement)) leaveTimer = setTimeout(() => close(), 180);
  });
  slot.addEventListener('focusin', event => {
    if (!slot.contains(event.relatedTarget)) suppressed = false;
    if (hoverInput.matches && !suppressed) open();
  });
  slot.addEventListener('focusout', () => {
    setTimeout(() => { if (!slot.contains(document.activeElement) && !pinned && !slot.matches(':hover')) close(); }, 0);
  });
  button.addEventListener('click', () => {
    if (pinned) { close(); return; }
    suppressed = false;
    pinned = true;
    open();
  });
  panel.querySelector('.leaf-close').addEventListener('click', () => close(true));
  slot.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) { event.preventDefault(); event.stopPropagation(); close(true); }
  });
});
document.addEventListener('pointerdown', event => { if (activeLeaf && !activeLeaf.slot.contains(event.target)) activeLeaf.close(); });
document.querySelectorAll('[data-detail]:not(.leaf-trigger)').forEach(button => button.addEventListener('click', () => {
  const content = details[button.dataset.detail];
  if (!content || !dialog) return;
  lastTrigger = button;
  closeMenu();
  document.querySelector('#detail-title').textContent = content[0];
  document.querySelector('#detail-body').innerHTML = content[1];
  dialog.showModal();
}));
dialog?.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog?.addEventListener('close', () => lastTrigger?.focus());
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });

const slideshow = document.querySelector('.slideshow');
if (slideshow) {
  const slides = [...slideshow.querySelectorAll('.slide')];
  const choices = [...slideshow.querySelectorAll('[data-slide]')];
  const play = slideshow.querySelector('.slide-play');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let currentSlide = 0, playing = false, interval;
  function showSlide(index, announce = true) {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== currentSlide; });
    choices.forEach((button, i) => { if (i === currentSlide) button.setAttribute('aria-current', 'true'); else button.removeAttribute('aria-current'); });
    const status = slideshow.querySelector('.slide-status');
    status.setAttribute('aria-live', announce ? 'polite' : 'off');
    status.textContent = 'Bild ' + (currentSlide + 1) + ' von ' + slides.length;
  }
  function schedule() {
    clearInterval(interval);
    if (playing && !document.hidden && !slideshow.matches(':hover') && !slideshow.contains(document.activeElement)) interval = setInterval(() => showSlide(currentSlide + 1, false), 7000);
  }
  function stop() { playing = false; play.setAttribute('aria-pressed', 'false'); play.innerHTML = 'Wiedergabe starten <i class="ph ph-play" aria-hidden="true"></i>'; schedule(); }
  function manual(index) { stop(); showSlide(index); }
  slideshow.querySelector('.slide-prev').addEventListener('click', () => manual(currentSlide - 1));
  slideshow.querySelector('.slide-next').addEventListener('click', () => manual(currentSlide + 1));
  choices.forEach(button => button.addEventListener('click', () => manual(Number(button.dataset.slide))));
  play.addEventListener('click', () => {
    if (playing) { stop(); return; }
    playing = true; play.setAttribute('aria-pressed', 'true'); play.innerHTML = 'Wiedergabe pausieren <i class="ph ph-pause" aria-hidden="true"></i>'; schedule();
  });
  slideshow.addEventListener('pointerenter', schedule);
  slideshow.addEventListener('pointerleave', schedule);
  slideshow.addEventListener('focusin', schedule);
  slideshow.addEventListener('focusout', () => setTimeout(schedule, 0));
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) stop(); });
  slideshow.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); manual(currentSlide + (event.key === 'ArrowRight' ? 1 : -1)); }
  });
  let touchStart;
  const stage = slideshow.querySelector('.slide-stage');
  stage.addEventListener('pointerdown', event => { if (event.pointerType === 'touch') touchStart = {x:event.clientX, y:event.clientY}; });
  stage.addEventListener('pointerup', event => { if (event.pointerType === 'touch' && touchStart) { const dx = event.clientX - touchStart.x, dy = event.clientY - touchStart.y; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) manual(currentSlide + (dx < 0 ? 1 : -1)); touchStart = null; } });
  stage.addEventListener('pointercancel', () => { touchStart = null; });
}

// Static preview only: attach the submit guard before enabling any form controls.
const inquiryForm = document.querySelector('#inquiry-form');
if (inquiryForm) {
  const fields = [...inquiryForm.querySelectorAll('input, textarea')];
  const summary = inquiryForm.querySelector('#form-errors');
  const result = inquiryForm.querySelector('#form-result');
  const birthday = inquiryForm.querySelector('#birthday');
  const today = new Date();
  const localToday = [today.getFullYear(), String(today.getMonth()+1).padStart(2,'0'), String(today.getDate()).padStart(2,'0')].join('-');
  birthday.max = localToday;
  let attempted = false;
  const value = id => inquiryForm.querySelector('#'+id).value.trim();
  function validate() {
    const errors = new Map();
    fields.forEach(field => {
      if (field.type !== 'file' && field.type !== 'checkbox') field.value = field.value.trim();
      if (field.required && (field.type === 'checkbox' ? !field.checked : !field.value)) {
        errors.set(field.id, field.type === 'checkbox' ? 'Bitte bestätigen Sie die Datenschutzerklärung.' : 'Bitte füllen Sie dieses Feld aus.');
      }
      if (field.value && field.type === 'email' && field.validity.typeMismatch) errors.set(field.id,'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    });
    if (value('email') && value('email-confirm') && value('email') !== value('email-confirm')) errors.set('email-confirm','Die E-Mail-Adressen stimmen nicht überein.');
    if (!value('phone') && !value('mobile')) {
      errors.set('phone','Bitte geben Sie Telefon oder Mobiltelefon an.');
      errors.set('mobile','Bitte geben Sie Telefon oder Mobiltelefon an.');
    }
    ['phone','mobile'].forEach(id => {
      const number = value(id);
      const digits = number.replace(/\D/g,'');
      if (number && (!/^\+?[\d\s()./\-]+$/.test(number) || digits.length < 6 || digits.length > 20)) errors.set(id,'Bitte geben Sie eine gültige Telefonnummer mit Vorwahl an (6–20 Ziffern).');
    });
    if (birthday.validity.badInput || (birthday.value && (birthday.validity.rangeOverflow || birthday.value > localToday || !/^\d{4}-\d{2}-\d{2}$/.test(birthday.value)))) errors.set('birthday','Bitte geben Sie einen gültigen Geburtstag ein, der nicht in der Zukunft liegt.');
    const file = inquiryForm.querySelector('#attachment').files[0];
    if (file) {
      const types = {pdf:'application/pdf',jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png'};
      const extension = file.name.split('.').pop().toLowerCase();
      if (!types[extension] || (file.type && types[extension] !== file.type)) errors.set('attachment','Bitte wählen Sie eine PDF-, JPG- oder PNG-Datei.');
      else if (file.size === 0 || file.size > 10*1024*1024) errors.set('attachment','Die Datei muss zwischen 1 Byte und 10 MB groß sein.');
    }
    fields.forEach(field => {
      const message = errors.get(field.id);
      field.setAttribute('aria-invalid',String(!!message));
      const error = inquiryForm.querySelector('#'+field.id+'-error');
      error.textContent = message || ''; error.hidden = !message;
    });
    const list = summary.querySelector('ul'); list.replaceChildren();
    errors.forEach((message,id) => {
      // The two phone inputs share one requirement; keep the summary concise.
      if (id === 'mobile' && !value('phone') && !value('mobile')) return;
      const item = document.createElement('li'); const link = document.createElement('a');
      link.href = '#'+id;
      const label = inquiryForm.querySelector('label[for="'+id+'"]').textContent.replace(/\s*\*\s*$/, '').trim();
      link.textContent = label + ': ' + message;
      link.addEventListener('click', event => {event.preventDefault(); inquiryForm.querySelector('#'+id).focus();});
      item.append(link); list.append(item);
    });
    summary.hidden = !errors.size;
    return errors.size === 0;
  }
  inquiryForm.addEventListener('submit', event => {
    event.preventDefault(); attempted = true; result.hidden = true;
    if (!validate()) {summary.focus(); return;}
    result.hidden = false;
    result.textContent = 'Ihre Angaben sind vollständig. Dies ist eine Vorschau: Ihre Anfrage und eine eventuell ausgewählte Datei wurden nicht versendet.';
  });
  // Clear resolved errors after leaving a field, without trimming while typing.
  inquiryForm.addEventListener('change', () => { result.hidden = true; if (attempted) validate(); });
  inquiryForm.addEventListener('input', () => { result.hidden = true; });
  inquiryForm.querySelector('#inquiry-fields').disabled = false;
}
