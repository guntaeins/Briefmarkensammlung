/* =========================================================================
   Rendert die Sammlung aus data.js (+ optionalen weiteren Datendateien)
   und steuert die Lightbox.

   Bildpfade: ALLE Bilder liegen flach im Ordner  img/
     - grosse Ansicht  ->  img/<name>.jpg
     - Vorschau/Thumb  ->  img/thumb-<name>.jpg

   Preise werden auf dieser Seite bewusst NICHT angezeigt.
   ========================================================================= */

(function () {
  "use strict";

  const $ = (sel, el = document) => el.querySelector(sel);
  const create = (tag, cls) => { const e = document.createElement(tag); if (cls) e.className = cls; return e; };

  const IMG = "img/";
  const pageSrc  = name => IMG + name + ".jpg";
  const thumbSrc = name => IMG + "thumb-" + name + ".jpg";

  /* -------------------------------------------------------------------
     Preisangaben ausblenden.
     Die Seite soll keine Wertangaben zeigen. Das Feld "wert" wird gar
     nicht erst gerendert; zusätzlich werden Beträge entfernt, die noch in
     älteren Beschreibungstexten stehen könnten.

     Bewusst konservativ: NENNWERTE einer Marke ("2 Franken", "40 Rappen",
     "Höchstwert zu 20 Fr.") sind inhaltlich wichtig und bleiben stehen.
     Entfernt werden nur Angaben, die eindeutig ein Preis sind – erkennbar
     an einem Wert-Etikett, an einer Währungsabkürzung wie CHF oder € oder
     an der Preisschreibweise "Fr. 200.–".
     ------------------------------------------------------------------- */
  // Zahl, die keinen Satzpunkt verschluckt: 1200, 1'200, 80,50, 80–120
  const ZAHL   = "\\d+(?:[’'.,]\\d+)*";
  const BETRAG = ZAHL + "(?:\\s*(?:[–\\-—]|bis)\\s*" + ZAHL + ")?";
  const CA     = "(?:ca\\.|rund|etwa|circa)";
  // "Franken" vor "Fr" – sonst frisst Fr\.? den Wortanfang von "Franken"
  const WAEHR  = "(?:CHF|SFr\\.?|Franken|Fr\\.|EUR|Euro|€)";

  const GELD = [
    // "Katalogwert: ca. 200 CHF", "Wert 80–120 Franken"
    new RegExp("\\(?\\s*(?:Katalog(?:wert|preis)|Marktwert|Schätzwert|Versicherungswert|Wert)\\s*:?\\s*" +
               CA + "?\\s*" + WAEHR + "?\\s*" + BETRAG + "\\s*(?:\\.-|\\.–)?\\s*" + WAEHR + "?\\s*\\)?", "gi"),
    // "CHF 120", "€ 80–100"
    new RegExp("\\(?\\s*" + CA + "?\\s*(?:CHF|SFr\\.|EUR|€|\\$)\\s*" + BETRAG + "\\s*\\)?", "gi"),
    // "200 CHF", "80–100 Euro"
    new RegExp("\\(?\\s*" + CA + "?\\s*" + BETRAG + "\\s*(?:CHF|SFr\\.|EUR|Euro|€)\\b\\s*\\)?", "gi"),
    // Preisschreibweise "Fr. 200.–" / "Fr. 200.-"
    new RegExp("\\(?\\s*" + CA + "?\\s*S?Fr\\.\\s*" + BETRAG + "\\s*(?:\\.-|\\.–)\\s*\\)?", "gi"),
    // "ca. 200 Franken" – der Schätzer macht es zum Preis, nicht zum Nennwert
    new RegExp("\\(?\\s*" + CA + "\\s*" + BETRAG + "\\s*Franken\\b\\s*\\)?", "gi")
  ];

  function ohnePreise(text) {
    if (!text) return "";
    let t = String(text);
    GELD.forEach(re => { t = t.replace(re, " "); });
    return t.replace(/\(\s*\)/g, " ")
            .replace(/\s{2,}/g, " ")
            .replace(/\s+([,.;:)])/g, "$1")
            .replace(/\.\s*\./g, ".")
            .replace(/^[\s–\-—,.;:]+/, "")
            .replace(/[;,]\s*$/, "")
            .trim();
  }

  // Flache Liste aller Seiten (für die Lightbox-Navigation)
  const flat = [];

  /* ---------------- Kennzahlen ---------------- */
  function renderStats() {
    let erfasst = 0;
    COLLECTION.albums.forEach(a => erfasst += a.pages.length);

    const total = Math.max(Number(COLLECTION.meta.seitenTotal) || 0, erfasst);
    COLLECTION.meta.seitenErfasst = erfasst;

    $("#stat-laender").textContent = COLLECTION.meta.laender.length;
    $("#stat-epoche").textContent  = COLLECTION.meta.epoche;
    $("#stat-alben").textContent   = COLLECTION.albums.length;
    $("#stat-seiten").textContent  = (erfasst >= total) ? erfasst : (erfasst + " / " + total);
  }

  /* ---------------- Besondere Stücke ---------------- */
  function renderHighlights() {
    const grid = $("#highlights");
    COLLECTION.highlights.forEach(h => {
      const card = create("article", "hl");

      if (h.img) {
        const thumb = create("div", "thumb");
        const img = create("img");
        img.src = thumbSrc(h.img);
        img.alt = h.titel || "";
        img.loading = "lazy";
        thumb.appendChild(img);
        thumb.addEventListener("click", () => openLightboxByImg(h.img));
        card.appendChild(thumb);
      }

      const body = create("div", "body");
      if (h.tresor) body.appendChild(tresorBadge());

      const title = create("h3"); title.textContent = h.titel || ""; body.appendChild(title);

      const p = create("p"); p.textContent = ohnePreise(h.text); body.appendChild(p);

      // Längere Hintergrundgeschichte, falls vorhanden
      if (h.geschichte) {
        const g = create("p", "geschichte");
        g.textContent = ohnePreise(h.geschichte);
        body.appendChild(g);
      }

      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  function tresorBadge() {
    const b = create("span", "tresor");
    b.textContent = "Gehört in den Tresor";
    return b;
  }

  /* ---------------- Alben & Seiten ---------------- */
  function renderAlbums() {
    const host = $("#albums");
    COLLECTION.albums.forEach((album, ai) => {
      const wrap = create("div", "album");
      wrap.id = "album-" + (ai + 1);

      const head = create("div", "album-head");
      const h3 = create("h3"); h3.textContent = album.titel;
      const meta = create("span", "meta");
      meta.textContent = [album.land, album.zeitraum, album.pages.length + " Seiten"]
        .filter(Boolean).join(" · ");
      head.appendChild(h3); head.appendChild(meta);
      wrap.appendChild(head);

      if (album.beschreibung) {
        const d = create("p", "desc"); d.textContent = ohnePreise(album.beschreibung);
        wrap.appendChild(d);
      }

      const grid = create("div", "grid");
      album.pages.forEach((page, i) => {
        const idx = flat.length;
        flat.push({
          img: page.img,
          titel: page.titel,
          text: ohnePreise(page.text),
          album: album.titel,
          nr: i + 1
        });

        const card = create("div", "card");
        const frame = create("div", "frame");
        const img = create("img");
        img.src = thumbSrc(page.img);
        img.alt = page.titel || ("Seite " + (i + 1));
        img.loading = "lazy";
        frame.appendChild(img);
        if (page.tresor) {
          const badge = create("span", "badge-tresor");
          badge.textContent = "🔒";
          badge.title = "Enthält Stücke für den Tresor";
          frame.appendChild(badge);
        }
        card.appendChild(frame);

        const cap = create("div", "cap");
        const n = create("div", "n"); n.textContent = "Seite " + String(i + 1).padStart(2, "0");
        const t = create("div", "t"); t.textContent = page.titel || "";
        cap.appendChild(n); cap.appendChild(t);
        card.appendChild(cap);

        card.addEventListener("click", () => openLightbox(idx));
        grid.appendChild(card);
      });
      wrap.appendChild(grid);
      host.appendChild(wrap);
    });
  }

  /* ---------------- Sprungmarken zu den Alben ---------------- */
  function renderAlbumNav() {
    const host = $("#album-nav");
    if (!host || COLLECTION.albums.length < 2) return;
    COLLECTION.albums.forEach((album, ai) => {
      const a = create("a", "chip");
      a.href = "#album-" + (ai + 1);
      a.textContent = album.titel;
      host.appendChild(a);
    });
  }

  /* ---------------- Lightbox ---------------- */
  let current = 0;

  function openLightboxByImg(imgName) {
    const idx = flat.findIndex(f => f.img === imgName);
    openLightbox(idx >= 0 ? idx : 0);
  }

  function openLightbox(idx) {
    current = idx;
    updateLightbox();
    $("#lb").classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    $("#lb").classList.remove("open");
    document.body.style.overflow = "";
  }
  function step(d) {
    current = (current + d + flat.length) % flat.length;
    updateLightbox();
  }
  function updateLightbox() {
    const item = flat[current];
    $("#lb-img").src = pageSrc(item.img);
    $("#lb-img").alt = item.titel || "";
    $("#lb-title").textContent = item.titel || "";
    $("#lb-sub").textContent =
      (item.album ? item.album + " · Seite " + item.nr + " · " : "") + (item.text || "");
  }

  function bindLightbox() {
    $("#lb-close").addEventListener("click", closeLightbox);
    $("#lb-prev").addEventListener("click", () => step(-1));
    $("#lb-next").addEventListener("click", () => step(1));
    $("#lb").addEventListener("click", e => { if (e.target.id === "lb") closeLightbox(); });
    document.addEventListener("keydown", e => {
      if (!$("#lb").classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHighlights();
    renderAlbumNav();
    renderAlbums();
    renderStats();
    bindLightbox();
    $("#year").textContent = new Date().getFullYear();
  });
})();
