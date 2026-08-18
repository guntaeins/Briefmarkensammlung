# Die Briefmarkensammlung

Eine statische Webseite, die eine Briefmarkensammlung Seite für Seite als
digitales Archiv bewahrt. Kein Server, keine Datenbank, keine Abhängigkeiten –
`index.html` im Browser öffnen genügt.

## Ordnerstruktur

```
index.html          Die Seite selbst
style.css           Gestaltung
app.js              Darstellung und Lightbox
data.js             Inhalte Album 1        <- siehe Hinweis unten
data-album2.js      Inhalte Album 2 (Schweiz 1954–2007)
img/                Alle Bilder, flach in einem Ordner
.nojekyll           Nötig für GitHub Pages
```

Es gibt nur noch **einen** Unterordner (`img/`). Alle Bilder liegen dort flach
nebeneinander, nach einer festen Regel benannt:

| Zweck | Dateiname |
|---|---|
| grosse Ansicht | `img/<name>.jpg` |
| Vorschaubild | `img/thumb-<name>.jpg` |

Album 1 nutzt `page-01` … `page-110`, Album 2 nutzt `a2-001` … `a2-135`.

## ⚠️ Hinweis zu `data.js`

`data.js` ist momentan ein **Platzhalter**. Beim Umbau liess sich die
ursprüngliche Datei `js/data.js` nicht vom Rechner übertragen – vermutlich weil
sie in einem Editor geöffnet und dadurch gesperrt war.

**So kommen die Originaltexte zurück:** den kompletten Inhalt der alten
`js/data.js` in diese Datei kopieren (also `data.js` damit überschreiben).
Sonst ändert sich nichts – Album 2 liegt separat in `data-album2.js` und wird
automatisch ergänzt.

## Keine Preise

Die Seite zeigt bewusst **keine Wertangaben**. Das Feld `wert` wird nicht mehr
dargestellt, und `app.js` entfernt zusätzlich Beträge, die noch in älteren
Beschreibungstexten stehen könnten. An die Stelle der Preise tritt die
Geschichte der Marke – und der Hinweis **„Gehört in den Tresor"** für Stücke,
die sicher verwahrt werden sollten.

## Auf GitHub Pages veröffentlichen

1. Auf github.com ein neues Repository anlegen (z. B. `briefmarkensammlung`).
2. Den **Inhalt dieses Ordners** hochladen – `index.html` muss direkt im
   Wurzelverzeichnis des Repositorys liegen, nicht in einem Unterordner.
   (Im Browser: „Add file" → „Upload files", dann alle Dateien und den Ordner
   `img` hineinziehen.)
3. Im Repository auf **Settings → Pages** gehen.
4. Bei „Source" **Deploy from a branch** wählen, Branch `main`, Ordner `/ (root)`.
5. Nach ein bis zwei Minuten ist die Seite erreichbar unter
   `https://<benutzername>.github.io/<repository-name>/`

Der Upload umfasst rund 490 Bilder (ca. 87 MB) – das liegt gut innerhalb der
Grenzen von GitHub Pages (1 GB pro Repository).

## Neue Alben ergänzen

1. Bilder nach `img/` legen: `img/a3-001.jpg` und `img/thumb-a3-001.jpg` usw.
2. Eine neue Datei `data-album3.js` nach dem Muster von `data-album2.js`
   anlegen und in `index.html` eine Zeile ergänzen:

```html
<script src="data-album3.js"></script>
```

`data.js` muss dafür nicht angefasst werden. Die Kennzahlen im Kopf der Seite
(Alben, Seiten, Länder) rechnen sich automatisch neu.

## Einzelne Seite beschriften

In `data-album2.js` den passenden Eintrag suchen und ändern:

```js
{ img: "a2-042", titel: "Mein Titel", text: "Kurze Beschreibung." },
```

Soll die Seite den Tresor-Hinweis zeigen:

```js
{ img: "a2-042", titel: "…", tresor: true, text: "…" },
```
