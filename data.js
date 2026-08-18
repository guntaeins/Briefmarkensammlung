/* =========================================================================
   ACHTUNG – PLATZHALTER
   ---------------------------------------------------------------------
   Diese Datei ersetzt die frühere  js/data.js.  Beim Umbau liess sich die
   Original-Datei nicht vom Rechner übertragen (der Upload schlug wiederholt
   fehl, vermutlich weil sie in einem Editor geöffnet und dadurch gesperrt
   war). Sie enthält daher vorerst nur die Seitennummern von Album 1.

   SO STELLST DU DIE ORIGINALTEXTE WIEDER HER:
   Den kompletten Inhalt der alten Datei  js/data.js  hier hineinkopieren
   (also diese Datei damit überschreiben). Alles andere funktioniert
   unverändert weiter – Album 2 liegt in data-album2.js und wird
   automatisch ergänzt. Preise aus der alten Datei werden nicht angezeigt.
   ========================================================================= */

const COLLECTION = {

  meta: {
    laender: ["Schweiz", "Österreich", "Finnland"],
    epoche: "19.–21. Jh.",
    seitenTotal: 245
  },

  highlights: [
    // Besondere Stücke aus Album 1 – kommen mit der Original-data.js zurück.
    // Aufbau eines Eintrags:
    //   { img: "page-07", titel: "…", tresor: true,
    //     text: "Kurzbeschreibung.",
    //     geschichte: "Längerer Text zur Geschichte der Marke." },
  ],

  albums: [
    {
      titel: "Album 1",
      land: "Schweiz · Österreich · Finnland",
      zeitraum: "klassische Ausgaben",
      beschreibung:
        "Das erste Album mit den klassischen Ausgaben. Die Seitentitel und " +
        "Beschreibungen erscheinen wieder, sobald der Inhalt der ursprünglichen " +
        "js/data.js in diese Datei kopiert wurde.",
      pages: [
    { img: "page-01", text: "Albumseite 1 von Album 1." },
    { img: "page-02", text: "Albumseite 2 von Album 1." },
    { img: "page-03", text: "Albumseite 3 von Album 1." },
    { img: "page-04", text: "Albumseite 4 von Album 1." },
    { img: "page-05", text: "Albumseite 5 von Album 1." },
    { img: "page-06", text: "Albumseite 6 von Album 1." },
    { img: "page-07", text: "Albumseite 7 von Album 1." },
    { img: "page-08", text: "Albumseite 8 von Album 1." },
    { img: "page-09", text: "Albumseite 9 von Album 1." },
    { img: "page-10", text: "Albumseite 10 von Album 1." },
    { img: "page-11", text: "Albumseite 11 von Album 1." },
    { img: "page-12", text: "Albumseite 12 von Album 1." },
    { img: "page-13", text: "Albumseite 13 von Album 1." },
    { img: "page-14", text: "Albumseite 14 von Album 1." },
    { img: "page-15", text: "Albumseite 15 von Album 1." },
    { img: "page-16", text: "Albumseite 16 von Album 1." },
    { img: "page-17", text: "Albumseite 17 von Album 1." },
    { img: "page-18", text: "Albumseite 18 von Album 1." },
    { img: "page-19", text: "Albumseite 19 von Album 1." },
    { img: "page-20", text: "Albumseite 20 von Album 1." },
    { img: "page-21", text: "Albumseite 21 von Album 1." },
    { img: "page-22", text: "Albumseite 22 von Album 1." },
    { img: "page-23", text: "Albumseite 23 von Album 1." },
    { img: "page-24", text: "Albumseite 24 von Album 1." },
    { img: "page-25", text: "Albumseite 25 von Album 1." },
    { img: "page-26", text: "Albumseite 26 von Album 1." },
    { img: "page-27", text: "Albumseite 27 von Album 1." },
    { img: "page-28", text: "Albumseite 28 von Album 1." },
    { img: "page-29", text: "Albumseite 29 von Album 1." },
    { img: "page-30", text: "Albumseite 30 von Album 1." },
    { img: "page-31", text: "Albumseite 31 von Album 1." },
    { img: "page-32", text: "Albumseite 32 von Album 1." },
    { img: "page-33", text: "Albumseite 33 von Album 1." },
    { img: "page-34", text: "Albumseite 34 von Album 1." },
    { img: "page-35", text: "Albumseite 35 von Album 1." },
    { img: "page-36", text: "Albumseite 36 von Album 1." },
    { img: "page-37", text: "Albumseite 37 von Album 1." },
    { img: "page-38", text: "Albumseite 38 von Album 1." },
    { img: "page-39", text: "Albumseite 39 von Album 1." },
    { img: "page-40", text: "Albumseite 40 von Album 1." },
    { img: "page-41", text: "Albumseite 41 von Album 1." },
    { img: "page-42", text: "Albumseite 42 von Album 1." },
    { img: "page-43", text: "Albumseite 43 von Album 1." },
    { img: "page-44", text: "Albumseite 44 von Album 1." },
    { img: "page-45", text: "Albumseite 45 von Album 1." },
    { img: "page-46", text: "Albumseite 46 von Album 1." },
    { img: "page-47", text: "Albumseite 47 von Album 1." },
    { img: "page-48", text: "Albumseite 48 von Album 1." },
    { img: "page-49", text: "Albumseite 49 von Album 1." },
    { img: "page-50", text: "Albumseite 50 von Album 1." },
    { img: "page-51", text: "Albumseite 51 von Album 1." },
    { img: "page-52", text: "Albumseite 52 von Album 1." },
    { img: "page-53", text: "Albumseite 53 von Album 1." },
    { img: "page-54", text: "Albumseite 54 von Album 1." },
    { img: "page-55", text: "Albumseite 55 von Album 1." },
    { img: "page-56", text: "Albumseite 56 von Album 1." },
    { img: "page-57", text: "Albumseite 57 von Album 1." },
    { img: "page-58", text: "Albumseite 58 von Album 1." },
    { img: "page-59", text: "Albumseite 59 von Album 1." },
    { img: "page-60", text: "Albumseite 60 von Album 1." },
    { img: "page-61", text: "Albumseite 61 von Album 1." },
    { img: "page-62", text: "Albumseite 62 von Album 1." },
    { img: "page-63", text: "Albumseite 63 von Album 1." },
    { img: "page-64", text: "Albumseite 64 von Album 1." },
    { img: "page-65", text: "Albumseite 65 von Album 1." },
    { img: "page-66", text: "Albumseite 66 von Album 1." },
    { img: "page-67", text: "Albumseite 67 von Album 1." },
    { img: "page-68", text: "Albumseite 68 von Album 1." },
    { img: "page-69", text: "Albumseite 69 von Album 1." },
    { img: "page-70", text: "Albumseite 70 von Album 1." },
    { img: "page-71", text: "Albumseite 71 von Album 1." },
    { img: "page-72", text: "Albumseite 72 von Album 1." },
    { img: "page-73", text: "Albumseite 73 von Album 1." },
    { img: "page-74", text: "Albumseite 74 von Album 1." },
    { img: "page-75", text: "Albumseite 75 von Album 1." },
    { img: "page-76", text: "Albumseite 76 von Album 1." },
    { img: "page-77", text: "Albumseite 77 von Album 1." },
    { img: "page-78", text: "Albumseite 78 von Album 1." },
    { img: "page-79", text: "Albumseite 79 von Album 1." },
    { img: "page-80", text: "Albumseite 80 von Album 1." },
    { img: "page-81", text: "Albumseite 81 von Album 1." },
    { img: "page-82", text: "Albumseite 82 von Album 1." },
    { img: "page-83", text: "Albumseite 83 von Album 1." },
    { img: "page-84", text: "Albumseite 84 von Album 1." },
    { img: "page-85", text: "Albumseite 85 von Album 1." },
    { img: "page-86", text: "Albumseite 86 von Album 1." },
    { img: "page-87", text: "Albumseite 87 von Album 1." },
    { img: "page-88", text: "Albumseite 88 von Album 1." },
    { img: "page-89", text: "Albumseite 89 von Album 1." },
    { img: "page-90", text: "Albumseite 90 von Album 1." },
    { img: "page-91", text: "Albumseite 91 von Album 1." },
    { img: "page-92", text: "Albumseite 92 von Album 1." },
    { img: "page-93", text: "Albumseite 93 von Album 1." },
    { img: "page-94", text: "Albumseite 94 von Album 1." },
    { img: "page-95", text: "Albumseite 95 von Album 1." },
    { img: "page-96", text: "Albumseite 96 von Album 1." },
    { img: "page-97", text: "Albumseite 97 von Album 1." },
    { img: "page-98", text: "Albumseite 98 von Album 1." },
    { img: "page-99", text: "Albumseite 99 von Album 1." },
    { img: "page-100", text: "Albumseite 100 von Album 1." },
    { img: "page-101", text: "Albumseite 101 von Album 1." },
    { img: "page-102", text: "Albumseite 102 von Album 1." },
    { img: "page-103", text: "Albumseite 103 von Album 1." },
    { img: "page-104", text: "Albumseite 104 von Album 1." },
    { img: "page-105", text: "Albumseite 105 von Album 1." },
    { img: "page-106", text: "Albumseite 106 von Album 1." },
    { img: "page-107", text: "Albumseite 107 von Album 1." },
    { img: "page-108", text: "Albumseite 108 von Album 1." },
    { img: "page-109", text: "Albumseite 109 von Album 1." },
    { img: "page-110", text: "Albumseite 110 von Album 1." },
      ]
    }
  ]
};
