// ═══════════════════════════════════════════════════════════════
//  DATI VIAGGIO — Creta 7-22 luglio 2026
//  Base: Lagada Bay Resort (tra Makrigialos e Goudouras)
// ═══════════════════════════════════════════════════════════════

export const TRIP_START = new Date(2026, 6, 7); // 7 luglio

export const days = [
  // ── GIORNO 0 ─────────────────────────────────────────────────
  {
    id: "day00",
    date: "2026-07-06",
    label: "Lun",
    title: "Vigilia partenza",
    emoji: "📋",
    type: "vicino",
    distanza: null,
    activities: [
      {
        id: "d00a01",
        name: "✈️ Check-in online Wizz Air",
        tag: "logistica",
        desc: "Check-in online apre 24h prima — farlo oggi per entrambi i voli",
        detail: "Il check-in online di Wizz Air apre 24 ore prima della partenza. Volo W46439 MXP→HER: partenza domani 7 lug ore 05:30, quindi il check-in apre oggi 6 lug alle 05:30. Prenotazione: GPY5KQ. Fare check-in per tutti e 3 i passeggeri: Stefano Dolcini, Leidy Paola Medrano Emiliani, Sophia Dolcini.",
        tips: ["Andare su wizzair.com o app Wizz Air", "Codice prenotazione: GPY5KQ", "Stefano: scegliere il posto (bagaglio stiva 20kg incluso)", "Leidy e Sophia: solo oggetto personale incluso — bagaglio a mano e stiva NON inclusi", "Scaricare le carte d'imbarco sul telefono"],
        mapsUrl: "https://wizzair.com",
        mapsLabel: "Wizz Air — Check-in online"
      },
      {
        id: "d00a02",
        name: "🐶 Lascia Axel alla pensione — Centro Cinofilo della Viola",
        tag: "logistica",
        desc: "Portare Axel al Centro Cinofilo della Viola prima della partenza",
        detail: "Centro Cinofilo della Viola, Via Giacomo Leopardi 94, 20010 Marcallo con Casone (MI). Tel pensione: 320 708 8140. Orari: Lun–Sab 08:00–12:00 e 15:00–18:30. Sito: centrocinofilodellaviola.org",
        tips: ["Portare il libretto sanitario di Axel", "Portare il suo cibo se ha una dieta specifica", "Confermare la data di ritiro: 22 luglio 2026"],
        mapsUrl: "https://www.google.com/maps/dir//Via+Giacomo+Leopardi,+94,+20010+Marcallo+con+Casone+MI",
        mapsLabel: "Centro Cinofilo della Viola"
      },
      {
        id: "d00a03",
        name: "🅿️ Porta l'auto a Mister Parking — entro le 03:00 del 7 lug",
        tag: "logistica",
        desc: "Parcheggio prenotato con Parkos · Conf. 6GD95HB · navetta gratuita 6 min",
        detail: "Mister Parking (Paga in parcheggio), Via Giuseppe Giusti 96, 21019 Somma Lombardo (VA). Prenotazione Parkos n. 6GD95HB. Parcheggio scoperto con bus navetta gratuito (6 min fino al Terminal 1 di Malpensa). Lasciare l'auto entro le 03:00 del 7 luglio per prendere il volo delle 05:30. Il parcheggio è prenotato fino al 23 luglio ore 00:30 — perfetto con l'atterraggio alle 00:10. Si paga direttamente in parcheggio al ritiro.",
        tips: ["Arrivare al parcheggio entro le 02:45 per avere margine con la navetta", "La navetta porta direttamente al Terminal 1 — quello giusto per Wizz Air Malta", "Tel. Mister Parking: +39 0331 25 65 81 oppure +39 348 8036626 (attivi 24h/7g)", "Al ritiro (23 lug ~00:30): la navetta riporta dal Terminal 1 al parcheggio", "Cancellazione gratuita fino a 24h prima — modifica su account Parkos"],
        mapsUrl: "https://maps.google.com/?q=Via+Giuseppe+Giusti+96+Somma+Lombardo+Mister+Parking",
        mapsLabel: "Mister Parking — Somma Lombardo",
        editableShuttle: true
      }
    ]
  },

  // ── GIORNO 1 — 7 lug ─────────────────────────────────────────
  {
    id: "day01",
    date: "2026-07-07",
    label: "Mar",
    title: "Arrivo a Creta",
    emoji: "🛬",
    type: "vicino",
    distanza: null,
    activities: [
      {
        id: "d01a00",
        name: "✈️ Volo andata — W46439",
        tag: "logistica",
        desc: "Wizz Air W46439 · Milano MXP T1 → Heraklion HER · 05:30–09:15",
        detail: "Volo diretto Wizz Air Malta, durata 2h 45min. Partenza da Milano Malpensa Terminal 1 (MXP) ore 05:30, arrivo Heraklion (HER) ore 09:15. Prenotazione: GPY5KQ · Volo numero W46439. Sequenza mattina: lascia auto a Mister Parking (Via Giusti 96, Somma Lombardo) → navetta gratuita 6 min → Terminal 1 → check-in → imbarco.",
        tips: ["⚠️ Arrivare al parcheggio entro le 02:45 — navetta + check-in richiedono almeno 45 min", "Terminal 1 — è quello corretto per Wizz Air Malta a Malpensa", "Stefano: 1 bagaglio in stiva 20kg incluso", "Leidy e Sophia: solo oggetto personale (sotto al sedile), bagaglio a mano NON incluso", "Check-in online su Wizz Air già fatto il giorno prima"],
        mapsUrl: "https://maps.google.com/?q=Milano+Malpensa+Airport+Terminal+1",
        mapsLabel: "Malpensa Terminal 1 — Wizz Air"
      },
      {
        id: "d01a00b",
        name: "🚗 Ritiro auto — Autocandia",
        tag: "logistica",
        desc: "Ritiro Peugeot 208 in aeroporto ore 10:30 · Rif. 768030983",
        detail: "Autocandia, Kazantzakis Airport, Iraklio, Crete, 71500. Conf. 9MJF07 · Numero volo da mostrare: WMT6439. Peugeot 208 o similare, cambio manuale, km illimitati, assicurazione inclusa. Deposito cauzionale: 700€ (carta di credito fisica MasterCard/Visa, no prepagata). Riconsegna: mer 22 lug ore 20:30 stesso luogo.",
        tips: ["Esci dall'edificio Arrivi e attraversa la strada a destra", "Accanto alla stazione degli autobus, sali i gradini verso il parcheggio", "Portare: patente fisica, voucher stampato, carta di credito con sufficiente plafond", "Restituire con serbatoio allo stesso livello del ritiro", "Tel. Autocandia: +302814260270"],
        mapsUrl: "https://maps.google.com/?q=Heraklion+Airport+Crete",
        mapsLabel: "Aeroporto Heraklion — Autocandia"
      },
      {
        id: "d01a01",
        name: "🏨 Check-in Lagada Resort",
        tag: "relax",
        desc: "Check-in ore 15:00–23:00 · Conf. 5980.580.483 · PIN 8557",
        detail: "Lagada Resort, 1 km Makrigialos–Goudouras, Makrigialos 72055. Appartamento con vista piscina e mare, 2 adulti + 1 bambino (8 anni). Check-in: 15:00–23:00. Check-out: 22 lug 08:00–11:00. Tel: +30 694 848 6850. GPS: N 035°1.804, E 26°0.125.",
        tips: ["Avvisare il resort dell'orario di arrivo previsto (verranno prima delle 15:00 dall'aeroporto)", "Parcheggio privato gratuito on site", "WiFi gratuita in tutte le aree", "Prenotare online su Booking.com per modifiche: conf. 5980.580.483"],
        mapsUrl: "https://maps.google.com/?q=N+35.030067,+E+26.002083",
        mapsLabel: "Lagada Resort"
      },
      {
        id: "d01a02",
        name: "Spesa al supermercato",
        tag: "relax",
        desc: "Rifornimento base a Makrigialos (~2,5 km).",
        detail: "A Makrigialos ci sono alcuni piccoli supermercati e un mini market. Fai scorta di acqua, frutta, formaggi locali (graviera cretese) e miele di timo.",
        tips: ["Compra subito bottiglie d'acqua grandi per la base", "Il pane fresco si trova la mattina presto"],
        mapsUrl: "https://maps.google.com/?q=Makrigialos+village+Crete",
        mapsLabel: "Makrigialos"
      },
      {
        id: "d01a03",
        name: "Passeggiata al porto di Makrigialos",
        tag: "relax",
        desc: "Primo giro del porto, prime taverne del posto.",
        detail: "Makrigialos ha un piccolo porto carino con barche da pesca e qualche taverna sul lungomare. Perfetto per ambientarsi e scegliere dove cenare.",
        tips: ["Occhio ai prezzi esposti all'esterno", "Il pesce fresco è sulla lavagnetta, non nel menu fisso"],
        mapsUrl: "https://maps.google.com/?q=Makrigialos+harbour+Crete",
        mapsLabel: "Porto di Makrigialos"
      },
      {
        id: "d01a04",
        name: "Cena fuori — Makrigialos",
        tag: "cena",
        desc: "Prima cena in una taverna del porto.",
        detail: "Prima serata: cena in una delle taverne sul porto di Makrigialos. Menu locale tipico: polpo, calamari, insalata greca. Prezzi nella media 35-55€ in tre.",
        tips: ["Chiedi il pesce al peso: chiedi sempre quanto pesa prima", "Il raki a fine pasto è quasi sempre offerto dalla casa"],
        mapsUrl: "https://maps.google.com/?q=Makrigialos+taverna+Crete",
        mapsLabel: "Taverne Makrigialos"
      }
    ]
  },

  // ── GIORNO 2 — 8 lug ─────────────────────────────────────────
  {
    id: "day02",
    date: "2026-07-08",
    label: "Mer",
    title: "Xerokampos",
    emoji: "🏖",
    type: "vicino",
    distanza: "~40 min · 30 km",
    activities: [
      {
        id: "d02a01",
        name: "Spiagge di Xerokampos",
        tag: "mare",
        desc: "Spiaggia selvaggia, acque calme, lontana dal turismo di massa.",
        detail: "Xerokampos è una piccola baia isolata a est di Goudouras, tra le più tranquille dell'est di Creta. Sabbia chiara, acqua limpida e pochissima gente. Perfetta per famiglie: fondale basso e graduale, nessuna corrente. Portarsi tutto: ombrellone, acqua, cibo.",
        tips: ["Arrivare prima delle 10 anche se è poco frequentata, per avere il posto migliore", "Portare pranzo al sacco — non ci sono chioschi", "Lo snorkeling vicino agli scogli a sinistra è ottimo"],
        mapsUrl: "https://maps.google.com/?q=Xerokampos+beach+Crete",
        mapsLabel: "Spiaggia di Xerokampos",
        photoUrl: "https://images.unsplash.com/photo-1616763866684-b215941fae5e?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d02a02",
        name: "Cena a casa",
        tag: "cena",
        desc: "Serata tranquilla, cena in appartamento.",
        detail: "Dopo una lunga giornata al sole, cucina semplice a casa: insalata greca, formaggio, pane, olive.",
        tips: [],
        mapsUrl: null,
        mapsLabel: null
      }
    ]
  },

  // ── GIORNO 3 — 9 lug ─────────────────────────────────────────
  {
    id: "day03",
    date: "2026-07-09",
    label: "Gio",
    title: "Kato Zakros + Palazzo Minoico",
    emoji: "🏛",
    type: "vicino",
    distanza: "~50 min · 40 km",
    activities: [
      {
        id: "d03a01",
        name: "Palazzo Minoico di Zakros",
        tag: "cultura",
        desc: "Unico palazzo minoico direttamente sul mare. Mattina visita al sito.",
        detail: "Il Palazzo di Kato Zakros è uno dei quattro grandi palazzi minoici di Creta, scoperto nel 1961. È l'unico posizionato direttamente sulla costa. Risale al 1600 a.C. circa. Visita: circa 1-1.5h. Biglietto adulti circa 4€, bambini gratis. Perfetto anche per bambini grazie alla storia del Minotauro e dei Minoici.",
        tips: ["Portare acqua e cappello — poco ombra", "Il sito apre alle 8:00, meglio andare la mattina presto", "Chiedere la mappa al botteghino all'ingresso"],
        mapsUrl: "https://maps.google.com/?q=Minoan+Palace+Kato+Zakros+Crete",
        mapsLabel: "Palazzo Minoico Kato Zakros",
        photoUrl: "https://images.unsplash.com/photo-1600547151285-075e218ada49?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d03a02",
        name: "Spiaggia di Kato Zakros",
        tag: "mare",
        desc: "Spiaggia accanto al palazzo, pomeriggio in acqua.",
        detail: "Dopo la visita al sito, la spiaggia di Kato Zakros è a pochi passi. Sabbia grigia con ciottoli, acqua limpidissima. C'è una piccola taverna direttamente sulla spiaggia.",
        tips: ["La taverna Zakros Beach ha buon pesce fresco", "Ottimo snorkeling sulle rocce a destra"],
        mapsUrl: "https://maps.google.com/?q=Kato+Zakros+beach+Crete",
        mapsLabel: "Spiaggia Kato Zakros",
        photoUrl: "https://images.unsplash.com/photo-1627240821221-10c90724a9e1?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d03a03",
        name: "Cena fuori a Zakros o rientro",
        tag: "cena",
        desc: "Cena in zona oppure rientro a Makrigialos.",
        detail: "A Zakros village (qualche km dall'arrivo al palazzo) ci sono taverne tipiche. In alternativa rientro a Makrigialos dove la scelta è maggiore.",
        tips: [],
        mapsUrl: "https://maps.google.com/?q=Zakros+village+Crete+taverna",
        mapsLabel: "Zakros village"
      }
    ]
  },

  // ── GIORNO 4 — 10 lug ────────────────────────────────────────
  {
    id: "day04",
    date: "2026-07-10",
    label: "Ven",
    title: "Vai + Monastero di Toplou",
    emoji: "🌴",
    type: "gita",
    distanza: "~1h15 · 65 km",
    activities: [
      {
        id: "d04a01",
        name: "Spiaggia di Vai",
        tag: "mare",
        desc: "Il palmeto naturale più grande d'Europa. Partenza presto!",
        detail: "Vai è famosa per la foresta di palme da dattero che la circonda — oltre 5.000 esemplari, il palmeto naturale più grande d'Europa. La spiaggia è sabbiosa, le acque calme e azzurrissime. In luglio si riempie molto dalle 10 in poi: arrivare entro le 8:30-9:00. Parcheggio a pagamento (circa 3€).",
        tips: ["Arrivare tassativamente prima delle 9:30", "Area protetta: vietato raccogliere palme o frutti", "Portare pranzo al sacco, bar in loco molto cari", "Snorkeling ottimo nella parte sinistra della baia"],
        mapsUrl: "https://maps.google.com/?q=Vai+beach+palm+forest+Crete",
        mapsLabel: "Spiaggia di Vai",
        photoUrl: "https://images.unsplash.com/photo-1734649186977-390d05b5348d?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d04a02",
        name: "Monastero di Toplou",
        tag: "cultura",
        desc: "Monastero ancora abitato dai monaci, sulla strada di rientro.",
        detail: "Il Monastero di Toplou (Moni Toplou) risale al XIV secolo e ospita ancora una comunità di monaci. Al suo interno si trova una straordinaria icona del Signore Tu Sei Grande di Ioannis Kornaros (1770). Museo annesso con oggetti sacri e documenti storici. Aperto al pubblico tutti i giorni 9:00-13:00 e 14:00-18:00. Biglietto circa 3€.",
        tips: ["Abbigliamento coperto richiesto (spalle e ginocchia coperte)", "Vendono olio d'oliva e vino biologici prodotti dal monastero — ottimi da portare a casa"],
        mapsUrl: "https://maps.google.com/?q=Toplou+Monastery+Crete",
        mapsLabel: "Monastero di Toplou",
        photoUrl: "https://images.unsplash.com/photo-1637959716372-89274f10e2ca?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d04a03",
        name: "Cena a casa",
        tag: "cena",
        desc: "Rientro e cena semplice in appartamento.",
        detail: "Giornata lunga: meglio cena casalinga. Usa i prodotti locali comprati al supermercato.",
        tips: [],
        mapsUrl: null,
        mapsLabel: null
      }
    ]
  },

  // ── GIORNO 5 — 11 lug ────────────────────────────────────────
  {
    id: "day05",
    date: "2026-07-11",
    label: "Sab",
    title: "Sitia — città autentica",
    emoji: "🏘",
    type: "vicino",
    distanza: "~30 min · 27 km",
    activities: [
      {
        id: "d05a01",
        name: "Giro di Sitia",
        tag: "cultura",
        desc: "Cittadina autentica, mercato, lungomare, porto.",
        detail: "Sitia è la città più orientale di Creta e una delle più autentiche — poco turistica. Il centro storico sale su una collina con case color pastello. Il lungomare è piacevole per passeggiare. Il museo archeologico ospita la collezione di reperti del palazzo di Zakros. La fortezza veneziana Kazarma è visitabile gratuitamente.",
        tips: ["Il mercato settimanale c'è il sabato mattina — oggi è sabato!", "Fai scorta: miele di timo, graviera (formaggio locale), xerotigana (dolci fritti)"],
        mapsUrl: "https://maps.google.com/?q=Sitia+Crete+town+center",
        mapsLabel: "Centro di Sitia"
      },
      {
        id: "d05a02",
        name: "Acquisti prodotti locali",
        tag: "relax",
        desc: "Miele di timo, formaggi, dolci tradizionali.",
        detail: "Sitia è famosa per la produzione di olio d'oliva, miele di timo selvatico e il formaggio graviera. Porta a casa qualcosa di autentico.",
        tips: ["I negozi di prodotti locali sono sul lungomare e nelle vie del centro", "Il miele di timo di Creta è tra i migliori d'Europa"],
        mapsUrl: "https://maps.google.com/?q=Sitia+local+products+Crete",
        mapsLabel: "Prodotti locali Sitia"
      },
      {
        id: "d05a03",
        name: "Spiaggia di Sitia o Agia Fotia",
        tag: "mare",
        desc: "Bagno pomeridiano prima di cena — due opzioni vicinissime.",
        detail: "Dopo il giro di Sitia, due opzioni comode per un bagno pomeridiano: 1) Spiaggia di Sitia: lunga spiaggia sabbiosa attrezzata proprio sotto la città, comoda per un bagno veloce prima di cena. 2) Agia Fotia: ~20 minuti verso casa, spiaggia sabbiosa e più tranquilla, ottima alternativa se vuoi già avvicinarti a Lagada. Entrambe con acqua pulita e fondale basso.",
        tips: ["La spiaggia di Sitia è attrezzata con lettini (~8€ coppia) e docce", "Agia Fotia è più selvaggia ma più silenziosa — meglio se sei stanco della città"],
        mapsUrl: "https://maps.google.com/?q=Sitia+beach+Crete",
        mapsLabel: "Spiaggia di Sitia"
      },
      {
        id: "d05a04",
        name: "Cena fuori a Sitia",
        tag: "cena",
        desc: "Ristoranti sul porto, ottimi e a prezzi locali.",
        detail: "I ristoranti sul lungomare di Sitia hanno buon pesce e prezzi onesti, non gonfiati dal turismo. Prova il polpo steso al sole (è il simbolo dei porti cretesi) e chiedi i piatti del giorno.",
        tips: ["Evita i locali con foto plastificate sul menu", "Il vino sfuso locale (hima) è ottimo e costa pochissimo"],
        mapsUrl: "https://maps.google.com/?q=Sitia+harbour+restaurant+Crete",
        mapsLabel: "Taverne porto Sitia"
      }
    ]
  },

  // ── GIORNO 6 — 12 lug ────────────────────────────────────────
  {
    id: "day06",
    date: "2026-07-12",
    label: "Dom",
    title: "Gola di Pervolakia + Monastero di Kapsa",
    emoji: "🥾",
    type: "vicino",
    distanza: "~10 min · 10 km",
    activities: [
      {
        id: "d06a01",
        name: "Gola di Pervolakia",
        tag: "trekking",
        desc: "4 km A/R, adatta a bambini, finisce al monastero sul mare.",
        detail: "La Gola di Pervolakia (nota anche come Gola di Kapsa) è a pochissimi minuti dalla base — una delle escursioni più facili e scenografiche raggiungibili da Lagada. Il sentiero è breve, circa 2 km in discesa fino al Monastero di Kapsa direttamente sul mare. Adatta a bambini da 5 anni in su. Paesaggio di rocce calcaree, vegetazione mediterranea e uccelli. Durata: 1-1.5h in discesa.",
        tips: ["Partire la mattina prima del caldo", "Scarpe chiuse — non infradito", "Il rientro è in risalita: più impegnativo. Portare acqua abbondante"],
        mapsUrl: "https://maps.google.com/?q=Kapsa+Gorge+Crete",
        mapsLabel: "Gola di Pervolakia / Kapsa",
        photoUrl: "https://images.unsplash.com/photo-1719525962152-e306d80920a6?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d06a02",
        name: "Monastero di Kapsa",
        tag: "cultura",
        desc: "Monastero sul mare, fine del percorso nella gola.",
        detail: "Il Monastero di Kapsa (Moni Kapsas) è incassato tra le rocce direttamente sul mare Libico. Fondato nel XV secolo, è ancora abitato da monaci. Interno con affreschi e icone bizantine. Ingresso libero, abbigliamento rispettoso richiesto.",
        tips: ["Porta un leggero foulard per coprirsi all'ingresso", "La spiaggia sotto il monastero è accessibile"],
        mapsUrl: "https://maps.google.com/?q=Kapsa+Monastery+Crete",
        mapsLabel: "Monastero di Kapsa",
        photoUrl: "https://images.unsplash.com/photo-1617796773070-8f41ada1948e?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d06a03",
        name: "Bagno a Kalo Nero",
        tag: "mare",
        desc: "Spiaggia sulla strada di rientro dal monastero.",
        detail: "Kalo Nero è una spiaggia di sassi con acqua limpidissima, sulla strada di casa. Perfetta per un bagno dopo il trekking.",
        tips: [],
        mapsUrl: "https://maps.google.com/?q=Kalo+Nero+beach+Makrigialos+Crete",
        mapsLabel: "Spiaggia Kalo Nero"
      },
      {
        id: "d06a04",
        name: "Cena a casa",
        tag: "cena",
        desc: "Rientro e cena leggera — domani si parte presto per Elafonissi!",
        detail: "Dopo trekking e bagno, serata tranquilla a casa. Prepara qualcosa di semplice e vai a letto presto: domani sveglia alle 6:00 per Elafonissi.",
        tips: ["Prepara lo zaino per domani stasera: crema solare, acqua, pranzo al sacco", "Controlla la prenotazione Ledra Maleme per domani sera"],
        mapsUrl: null,
        mapsLabel: null
      }
    ]
  },

  // ── GIORNO 7 — 13 lug ────────────────────────────────────────
  {
    id: "day07",
    date: "2026-07-13",
    label: "Lun",
    title: "Elafonissi → notte a Maleme",
    emoji: "🏖",
    type: "gita",
    distanza: "~3h30 · 240 km (da Lagada a Elafonissi)",
    activities: [
      {
        id: "d07a01",
        name: "⚠️ Partenza ore 6:00 da Lagada",
        tag: "logistica",
        desc: "Sveglia presto — 3h30 di strada fino a Elafonissi.",
        detail: "Partenza obbligatoria alle 6:00 da Lagada. Elafonissi è a circa 240 km verso ovest, 3h30 di guida. Percorso consigliato: SS di Ierapetra → Heraklion → autostrada E75 verso Chania → Kissamos → Elafonissi. Arrivare entro le 9:30 al massimo.",
        tips: ["Fare pieno di benzina la sera prima", "Portare caffè e colazione in auto", "Google Maps: impostare 'Elafonissi Beach Crete' come destinazione"],
        mapsUrl: "https://maps.google.com/?q=Elafonissi+beach+Crete",
        mapsLabel: "Elafonissi Beach"
      },
      {
        id: "d07a02",
        name: "Spiaggia di Elafonissi",
        tag: "mare",
        desc: "Sabbia rosata, acque bassissime, area protetta. Paradiso per bambini.",
        detail: "Elafonissi è una delle spiagge più famose d'Europa: sabbia che tende al rosa per la presenza di frammenti di corallo, acque calme, bassissime e calde — perfette per bambini. È un'area naturale protetta. In luglio si riempie dalle 10:30 in poi con le barche da Kissamos: arrivare prima è fondamentale. Restare fino alle 14:30-15:00 poi partire verso il Ledra Maleme (~45 min).",
        tips: ["Parcheggio a pagamento ~5€ — arrivare presto o è pieno", "Portare pranzo al sacco: bar in loco costosissimi", "Area protetta: non raccogliere sabbia o conchiglie", "La laguna nord è accessibile guadando con acqua fino alle ginocchia — bellissima", "Partire entro le 15:00 per il Ledra Maleme"],
        mapsUrl: "https://maps.google.com/?q=Elafonissi+beach+Crete",
        mapsLabel: "Spiaggia di Elafonissi",
        photoUrl: "https://images.unsplash.com/photo-1601836743857-4d1e6da20a32?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d07a03",
        name: "🏨 Check-in Ledra Maleme Hotel",
        tag: "logistica",
        desc: "Hotel a Maleme, 45 min da Elafonissi · Check-in dalle 14:00",
        detail: "Ledra Maleme Hotel, Maleme, Chania, Creta. Hotel 3 stelle, 150 metri dalla spiaggia, piscina con bar, ristorante cretese, parcheggio gratuito. Rating 9/10 su Booking. Check-in dalle 14:00, check-out entro le 12:00. Posizione strategica: 45 min da Elafonissi, 30 min da Balos/Kissamos, 20 min da Chania.",
        tips: ["Avvisare l'hotel dell'orario di arrivo (fine pomeriggio)", "Parcheggio privato gratuito on site", "Ristorante cretese in loco — ottimo per la cena"],
        mapsUrl: "https://maps.google.com/?q=Ledra+Maleme+Hotel+Maleme+Crete",
        mapsLabel: "Ledra Maleme Hotel"
      },
      {
        id: "d07a04",
        name: "Cena al Ledra Maleme o a Platanias",
        tag: "cena",
        desc: "Ristorante cretese dell'hotel o 5 min a Platanias.",
        detail: "Il ristorante del Ledra Maleme serve cucina cretese tradizionale con ingredienti freschi locali. In alternativa Platanias è a soli 5 minuti di auto: centro turistico con buona scelta di locali e una bella passeggiata serale sul lungomare.",
        tips: ["Il Black Lantern è a 50 metri dall'hotel — molto consigliato dai recensori", "Domani sveglia presto per Balos: cena leggera e a letto presto"],
        mapsUrl: "https://maps.google.com/?q=Platanias+Chania+Crete+restaurants",
        mapsLabel: "Platanias — ristoranti"
      }
    ]
  },

  // ── GIORNO 8 — 14 lug ────────────────────────────────────────
  {
    id: "day08",
    date: "2026-07-14",
    label: "Mar",
    title: "Balos → rientro a Lagada",
    emoji: "🌊",
    type: "gita",
    distanza: "~30 min da Maleme · rientro ~3h30 a Lagada",
    activities: [
      {
        id: "d08a01",
        name: "Laguna di Balos",
        tag: "mare",
        desc: "La spiaggia più iconica di Creta. Laguna turchese e sabbia rosa.",
        detail: "Balos è forse la spiaggia più fotografata di Creta: laguna turchese con sabbia bianca e rosa, circondata da colline desertiche nella penisola di Gramvousa. Dal Ledra Maleme è solo ~30 minuti: un lusso enorme rispetto alla distanza da Lagada. Si raggiunge in due modi: 1) In auto: strada sterrata da Kaliviani, 7 km sconnessa ma percorribile con auto normale (attenzione all'assicurazione). 2) In barca da Kissamos (~30 min): circa 25-30€ adulti, metà bambini — include sosta a Gramvousa. Attenzione: con la barca gli orari sono fissi e la spiaggia si riempie.",
        tips: ["⚠️ Partenza dal Ledra Maleme alle 7:30 per arrivare prima della folla", "In auto: la sterrata è percorribile ma controlla che l'assicurazione copra strade non asfaltate", "In barca da Kissamos: prenotare il giorno prima", "Portare tutto: zero servizi in loco, bar solo a prezzi altissimi", "Parcheggio a pagamento ~3€. Si riempie presto", "Abbandonare la spiaggia entro le 14:00 — poi arrivano le barche e si affollla"],
        mapsUrl: "https://maps.google.com/?q=Balos+Lagoon+Gramvousa+Crete",
        mapsLabel: "Laguna di Balos",
        photoUrl: "https://images.unsplash.com/photo-1572805815879-3cfa3ec772a6?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d08a02",
        name: "Isola di Gramvousa (opzionale)",
        tag: "cultura",
        desc: "Fortezza veneziana sull'isola, visibile in barca da Kissamos.",
        detail: "Se prendete la barca da Kissamos, quasi tutti i tour includono una sosta a Gramvousa: isoletta con una fortezza veneziana del 1579 arroccata sulla roccia. Vista panoramica su Balos dall'alto — spettacolare e diversa dalla spiaggia.",
        tips: ["I tour combinati Gramvousa + Balos costano circa 25-30€ adulti, metà bambini", "Prenotare online il giorno prima in luglio"],
        mapsUrl: "https://maps.google.com/?q=Gramvousa+island+fortress+Crete",
        mapsLabel: "Isola di Gramvousa",
        photoUrl: "https://images.unsplash.com/photo-1745331383290-2fe806c74bd8?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d08a03",
        name: "🚗 Rientro a Lagada (~3h30)",
        tag: "logistica",
        desc: "Partenza da Balos/Maleme nel primo pomeriggio. Rientro in serata.",
        detail: "Partire da Balos entro le 14:00 e dal Ledra Maleme (check-out entro le 12:00) verso Lagada. Percorso inverso: ~3h30 di guida. Sosta consigliata a metà strada a Heraklion o Agios Nikolaos per stirarsi le gambe e fare rifornimento.",
        tips: ["Check-out Ledra Maleme entro le 12:00", "Fare pieno prima di lasciare la zona di Chania — carburante più economico", "Sosta a metà: Heraklion (a ~1h45 da Maleme) o Agios Nikolaos (a ~2h30)"],
        mapsUrl: "https://maps.google.com/?q=Lagada+Bay+Resort+Makrigialos+Crete",
        mapsLabel: "Rientro a Lagada Resort"
      },
      {
        id: "d08a04",
        name: "Cena a casa",
        tag: "cena",
        desc: "Rientro in serata dopo una giornata e mezza intensa.",
        detail: "Dopo Balos e 3h30 di guida, si rientra stanchi. Cena semplice a casa con quello che c'è in frigo — o una pizza d'emergenza a Makrigialos se non hai voglia di cucinare.",
        tips: ["Porta qualcosa di pronto dal supermercato prima di arrivare a Lagada"],
        mapsUrl: null,
        mapsLabel: null
      }
    ]
  },

  // ── GIORNO 9 — 15 lug ────────────────────────────────────────
  {
    id: "day09",
    date: "2026-07-15",
    label: "Gio",
    title: "Giornata relax",
    emoji: "🌊",
    type: "vicino",
    distanza: null,
    activities: [
      {
        id: "d09a01",
        name: "Spiaggia di Votsalaki",
        tag: "mare",
        desc: "Spiaggia isolata e silenziosa, 500 m a ovest di Goudouras.",
        detail: "Votsalaki è una piccola spiaggia di sassi bianchi a pochi minuti dall'appartamento, meno frequentata della spiaggia principale. Acqua cristallina, ombra naturale con qualche arbusto. Ideale per una giornata di vero riposo dopo i giorni intensi di Elafonissi e Balos.",
        tips: ["Porta tutto: nessun servizio in loco", "Snorkeling eccellente lungo la scogliera a sinistra"],
        mapsUrl: "https://maps.google.com/?q=Votsalaki+beach+Goudouras+Crete",
        mapsLabel: "Spiaggia Votsalaki",
        photoUrl: "https://images.unsplash.com/photo-1561917657-09bd994eb04a?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d09a02",
        name: "Cena fuori a Ierapetra",
        tag: "cena",
        desc: "La città più meridionale d'Europa · ~30 min · 26 km.",
        detail: "Ierapetra ha ottimi ristoranti di pesce sul lungomare e nel centro storico. Prezzi meno gonfiati rispetto alle zone più turistiche. Il centro storico veneziano merita una passeggiata prima di cena: fortezza veneziana, quartiere turco, vicoli caratteristici.",
        tips: ["Parcheggio gratuito sul lungomare", "Il vino sfuso locale (hima) è ottimo e costa pochissimo", "Evita i locali con foto plastificate sul menu"],
        mapsUrl: "https://maps.google.com/?q=Ierapetra+taverna+restaurant+Crete",
        mapsLabel: "Taverne Ierapetra"
      }
    ]
  },

  // ── GIORNO 10 — 16 lug ───────────────────────────────────────
  {
    id: "day10",
    date: "2026-07-16",
    label: "Mer",
    title: "Agios Nikolaos + Spinalonga",
    emoji: "🏝",
    type: "gita",
    distanza: "~1h10 · 61 km",
    activities: [
      {
        id: "d10a01",
        name: "Agios Nikolaos — città e lago",
        tag: "cultura",
        desc: "Una delle città più belle dell'est Creta, lago interno collegato al mare.",
        detail: "Agios Nikolaos è una delle città più scenografiche di Creta. Il suo elemento distintivo è il lago Voulismeni, collegato al mare da un canale artificiale — un posto unico al mondo. Passeggiata sul lungomare, boutique, musei. Il Museo Archeologico di Agios Nikolaos è uno dei migliori di Creta.",
        tips: ["Parcheggio gratuito fuori dal centro, poi a piedi", "Il lago Voulismeni è bellissimo al tramonto — torna per la cena"],
        mapsUrl: "https://maps.google.com/?q=Agios+Nikolaos+lake+Crete",
        mapsLabel: "Lago Voulismeni, Agios Nikolaos",
        photoUrl: "https://images.unsplash.com/photo-1727622918878-02dc80642adb?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d10a02",
        name: "Gita in barca a Spinalonga",
        tag: "cultura",
        desc: "Ex colonia per lebbrosi, isola scenografica nel golfo di Mirabello.",
        detail: "Spinalonga è una delle destinazioni più affascinanti di Creta. L'isola fu l'ultima colonia per lebbrosi d'Europa, attiva fino al 1957. Le barche partono da Agios Nikolaos o dal porto di Plaka (più vicino a ~40 min da Lagada). Visita all'isola: 1-1.5h. Biglietto ingresso circa 8€. Le barche costano circa 15-20€ A/R.",
        tips: ["Prenotare i biglietti online in alta stagione", "Da Plaka il tragitto in barca è più breve (10 min) e più economico", "Portare acqua — sull'isola fa molto caldo"],
        mapsUrl: "https://maps.google.com/?q=Spinalonga+island+Crete",
        mapsLabel: "Isola di Spinalonga",
        photoUrl: "https://images.unsplash.com/photo-1603916652356-0f472d5ed12b?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d10a03",
        name: "Cena ad Agios Nikolaos",
        tag: "cena",
        desc: "Taverne sul lago Voulismeni — una delle cene migliori del viaggio.",
        detail: "Le taverne attorno al lago di Agios Nikolaos sono ottime e l'atmosfera serale è bellissima. Scegli un posto con vista acqua.",
        tips: ["Le taverne sul lato est del lago sono mediamente migliori e meno caotiche", "Pesce fresco o dakos (bruschetta cretese) per iniziare"],
        mapsUrl: "https://maps.google.com/?q=Agios+Nikolaos+lake+restaurants+Crete",
        mapsLabel: "Ristoranti lago Agios Nikolaos"
      }
    ]
  },

  // ── GIORNO 11 — 17 lug ───────────────────────────────────────
  {
    id: "day11",
    date: "2026-07-17",
    label: "Ven",
    title: "Heraklion + Palazzo di Cnosso",
    emoji: "🏺",
    type: "gita",
    distanza: "~2h · 115 km",
    activities: [
      {
        id: "d11a01",
        name: "Palazzo di Cnosso",
        tag: "cultura",
        desc: "Sito minoico più importante dell'isola. Biglietti online!",
        detail: "Il Palazzo di Cnosso è il più grande sito minoico del Mediterraneo, risalente al 2000 a.C. Il sito è associato alla leggenda del Minotauro e del Labirinto — perfetto per catturare l'immaginazione dei bambini. Visita: 2-3 ore. Biglietto: 15€ adulti, gratuito sotto i 18 anni. Apre alle 8:00 — consigliato arrivarci all'apertura.",
        tips: ["Comprare biglietti online — evita la coda in luglio", "Prendere l'audioguida o una guida locale: senza contesto il sito è difficile da leggere", "Cappello e acqua — pochissima ombra", "Evita le ore 11-14: caldo e folla massimi"],
        mapsUrl: "https://maps.google.com/?q=Palace+of+Knossos+Heraklion+Crete",
        mapsLabel: "Palazzo di Cnosso",
        photoUrl: "https://images.unsplash.com/photo-1746109055692-39e2fb53f5a8?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d11a02",
        name: "Centro di Heraklion",
        tag: "cultura",
        desc: "Passeggiata nel centro veneziano, Museo Archeologico.",
        detail: "Heraklion ha un centro storico veneziano notevole: la Fontana Morosini, il porto con la fortezza Koules, Piazza Eleftherias. Il Museo Archeologico di Heraklion è uno dei migliori della Grecia (collezione minoica unica al mondo) — ma è impegnativo: se la bambina è stanca, salta.",
        tips: ["Museo Arch.: chiuso il lunedì, orari 8-20 estate", "Il mercato coperto (Agora) è interessante per lo shopping di formaggi e spezie"],
        mapsUrl: "https://maps.google.com/?q=Heraklion+old+city+center+Crete",
        mapsLabel: "Centro storico Heraklion",
        photoUrl: "https://images.unsplash.com/photo-1586119732042-ff23ccf4bd23?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d11a03",
        name: "Spiaggia di Amnissos o Tobruk",
        tag: "mare",
        desc: "Spiaggia a 10 min da Heraklion, sul tragitto di rientro verso est.",
        detail: "Amnissos e Tobruk sono spiagge sabbiose proprio sulla strada nazionale che da Heraklion porta verso est — esattamente il percorso di rientro verso Lagada. Zero deviazione. Spiagge attrezzate, acque calme, ottime per un bagno pomeridiano prima di rimettersi in auto per il rientro. Amnissos ha anche un piccolo sito minoico sul lungomare, curiosità rapida.",
        tips: ["Fermati tra le 15:00 e le 17:00 — il caldo peggiore è passato", "Tobruk è leggermente più tranquilla di Amnissos", "Dal parcheggio in spiaggia si riparte direttamente sulla SS verso est"],
        mapsUrl: "https://maps.google.com/?q=Amnisos+beach+Heraklion+Crete",
        mapsLabel: "Spiaggia Amnissos"
      },
      {
        id: "d11a04",
        name: "Cena a casa",
        tag: "cena",
        desc: "Rientro in serata, cena a casa.",
        detail: "2h di strada al rientro — meglio rientrare prima di sera e cenare a casa. Porta qualcosa di buono da Heraklion (formaggi, dolci, vino).",
        tips: ["Fai spesa al mercato coperto di Heraklion prima di partire"],
        mapsUrl: null,
        mapsLabel: null
      }
    ]
  },

  // ── GIORNO 12 — 18 lug ───────────────────────────────────────
  {
    id: "day12",
    date: "2026-07-18",
    label: "Sab",
    title: "Ierapetra + isola di Chrissi",
    emoji: "🏙",
    type: "vicino",
    distanza: "~30 min · 26 km",
    activities: [
      {
        id: "d12a01",
        name: "Giro di Ierapetra",
        tag: "cultura",
        desc: "La città più meridionale d'Europa. Fortezza veneziana, mercato.",
        detail: "Ierapetra è la città più a sud d'Europa (continentale). Ha una fortezza veneziana sul mare, un piccolo centro storico con quartiere turco, mercato e buona selezione di negozi. Perfetta per commissioni e una passeggiata tranquilla. La spiaggia cittadina è sabbiosa e attrezzata.",
        tips: ["Parcheggio gratuito sul lungomare", "Ottima pasticceria nel centro storico per colazione"],
        mapsUrl: "https://maps.google.com/?q=Ierapetra+town+Crete",
        mapsLabel: "Ierapetra"
      },
      {
        id: "d12a02",
        name: "Gita isola di Chrissi (opzionale)",
        tag: "gita",
        desc: "Isola splendida — verificare accesso sbarco in alta stagione.",
        detail: "Chrissi (Chrysi) è un'isola protetta a 15 km da Ierapetra con spiagge di sabbia dorata e un cedro secolare. Le barche partono dal porto di Ierapetra. Ticket circa 20-25€ A/R adulti, bambini metà. Attenzione: in alta stagione ci sono restrizioni al numero di visitatori giornalieri — verificare il giorno prima.",
        tips: ["Partire dal porto di Ierapetra mattina presto", "Portare tutto: sull'isola c'è solo un piccolo chiosco", "Zero ombra: protezione solare alta"],
        mapsUrl: "https://maps.google.com/?q=Chrysi+Island+Ierapetra+Crete",
        mapsLabel: "Isola di Chrissi"
      },
      {
        id: "d12a03",
        name: "Spiaggia di Ierapetra (se non si fa Chrissi)",
        tag: "mare",
        desc: "Lunga spiaggia sabbiosa attrezzata, sotto la città. Piano B perfetto.",
        detail: "Se la gita a Chrissi non si fa (restrizioni accesso, barche piene o semplicemente voglia di stare vicini), la spiaggia urbana di Ierapetra è un ottimo piano B: lunga, sabbiosa, attrezzata con lettini, acque calme e basse. Ideale per bambini. È a 2 minuti a piedi dal centro storico — si può abbinare al giro della città senza spostamenti.",
        tips: ["Lettini ~8€ a coppia", "La parte est della spiaggia è più tranquilla e meno affollata", "Bar e chioschi in loco"],
        mapsUrl: "https://maps.google.com/?q=Ierapetra+beach+Crete",
        mapsLabel: "Spiaggia di Ierapetra"
      },
      {
        id: "d12a04",
        name: "Cena a casa",
        tag: "cena",
        desc: "Serata tranquilla in appartamento.",
        detail: "Rientro da Ierapetra e cena a casa con prodotti freschi del mercato.",
        tips: [],
        mapsUrl: null,
        mapsLabel: null
      }
    ]
  },

  // ── GIORNO 13 — 19 lug ───────────────────────────────────────
  {
    id: "day13",
    date: "2026-07-19",
    label: "Dom",
    title: "Makrigialos + Koufonisi",
    emoji: "⛵",
    type: "vicino",
    distanza: "~5 min · 2,5 km (+ barca da Ierapetra ~30 min)",
    activities: [
      {
        id: "d13a01",
        name: "Spiaggia di Makrigialos",
        tag: "mare",
        desc: "Bella spiaggia sabbiosa attrezzata, 2,5 km dalla base.",
        detail: "Makrigialos ha una delle spiagge più belle dell'est Creta: lunga, sabbiosa, con acque basse e chiare. Attrezzata con lettini e ombrelloni in affitto (circa 8-10€ a coppia). Comoda e sicura per bambini.",
        tips: ["Ottima base per mattina prima di eventuale gita a Koufonisi", "I lettini si prenotano arrivando presto"],
        mapsUrl: "https://maps.google.com/?q=Makrigialos+beach+Crete",
        mapsLabel: "Spiaggia Makrigialos"
      },
      {
        id: "d13a02",
        name: "Gita a Koufonisi (isola)",
        tag: "gita",
        desc: "Isola incontaminata, fondali caraibici. Barche da Ierapetra.",
        detail: "Koufonissi (o Gaidouronisi) è un'isola disabitata al largo di Ierapetra, considerata una delle più belle della Grecia. Ha spiagge di sabbia bianchissima con acque turchesi caraibiche. Le barche partono da Ierapetra (~30 min da Lagada). Gita organizzata con tour operator circa 25-30€ a persona adulti, bambini solitamente metà prezzo.",
        tips: ["Prenotare il giorno prima — le barche si riempiono in luglio", "Portare crema solare abbondante e cappello (zero ombra sull'isola)", "Vietato raccogliere sabbia o conchiglie — area protetta"],
        mapsUrl: "https://maps.google.com/?q=Chryssi+Island+Ierapetra+Crete",
        mapsLabel: "Koufonisi / Isola di Chryssi",
        photoUrl: "https://images.unsplash.com/photo-1635882387457-0958fb8320cc?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d13a03",
        name: "Cena fuori a Makrigialos",
        tag: "cena",
        desc: "Una delle migliori serate in zona.",
        detail: "Makrigialos ha diverse taverne di livello. Dopo la giornata in mare è il posto giusto per una bella cena con vista porto.",
        tips: [],
        mapsUrl: "https://maps.google.com/?q=Makrigialos+taverna+restaurant+Crete",
        mapsLabel: "Taverne Makrigialos"
      }
    ]
  },

  // ── GIORNO 14 — 20 lug ───────────────────────────────────────
  {
    id: "day14",
    date: "2026-07-20",
    label: "Lun",
    title: "Gola di Richtis + Cascata",
    emoji: "🌿",
    type: "gita",
    distanza: "~1h · 55 km",
    activities: [
      {
        id: "d14a01",
        name: "Gola di Richtis — trekking",
        tag: "trekking",
        desc: "4 km A/R tra ulivi e oleandri, finisce in una cascata sul mare.",
        detail: "La Gola di Richtis è uno dei percorsi naturalistici più belli dell'est Creta, molto meno frequentato delle Samaria. Il sentiero scende per circa 2 km attraverso una vegetazione lussureggiante — ulivi selvatici, oleandri, platani — lungo il fiume Richtis fino alla cascata che sfocia direttamente sul mare. Dislivello contenuto, sentiero ben segnalato. Adatta a bambini da 5 anni in su. Durata: 1-1.5h in discesa, stessa in risalita.",
        tips: ["Partire la mattina presto per evitare il caldo nel canyon", "Scarpe chiuse con buona suola — il terreno è scivoloso vicino all'acqua", "Portare almeno 1,5 litri d'acqua a persona", "Il sentiero inizia vicino al villaggio di Exo Mouliana — segui le indicazioni per Richtis Gorge", "La cascata è alta circa 15 metri — spettacolare anche in luglio"],
        mapsUrl: "https://maps.google.com/?q=Richtis+Gorge+Crete",
        mapsLabel: "Gola di Richtis",
        photoUrl: "https://images.unsplash.com/photo-1575237579976-4d4219f1860f?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d14a02",
        name: "Cascata di Richtis + bagno",
        tag: "mare",
        desc: "La cascata sfocia sul mare — bagno alla fine del percorso.",
        detail: "La cascata di Richtis è la più alta di Creta orientale. Dopo la discesa nella gola si apre su una piccola spiaggia di sassi dove la cascata sfocia nel mare. L'acqua è fresca e limpidissima — uno dei bagni più belli del viaggio. La spiaggia è raggiungibile solo a piedi, quindi sempre poco affollata.",
        tips: ["Porta sandali da scoglio per camminare vicino alla cascata", "L'acqua è fresca anche in luglio — perfetta dopo il cammino"],
        mapsUrl: "https://maps.google.com/?q=Richtis+waterfall+beach+Crete",
        mapsLabel: "Cascata e spiaggia Richtis",
        photoUrl: "https://images.unsplash.com/photo-1674149091778-33d21429dbf0?w=700&q=80&fit=crop&auto=format"
      },
      {
        id: "d14a03",
        name: "Pranzo a Exo Mouliana o Sfaka",
        tag: "cena",
        desc: "Piccoli villaggi tradizionali sulla strada del rientro.",
        detail: "Exo Mouliana e il vicino Sfaka sono villaggi dell'entroterra cretese praticamente intatti, con qualche taverna tradizionale dove si mangia cucina casalinga autentica — agnello, fagioli, dakos. Prezzi bassissimi, zero turismo.",
        tips: ["Non aspettarti menu in inglese — indicare con il dito va benissimo", "Sfaka è famosa per il formaggio mizithra fatto in casa"],
        mapsUrl: "https://maps.google.com/?q=Exo+Mouliana+village+Crete",
        mapsLabel: "Exo Mouliana"
      },
      {
        id: "d14a04",
        name: "Spiaggia di Agia Fotia (rientro)",
        tag: "mare",
        desc: "Spiaggia comoda sulla strada di casa, per chiudere la giornata.",
        detail: "Agia Fotia è una spiaggia sabbiosa a circa 20 minuti da Lagada, sulla strada del rientro. Attrezzata, acque calme. Perfetta per un pomeriggio rilassato dopo il trekking mattutino.",
        tips: [],
        mapsUrl: "https://maps.google.com/?q=Agia+Fotia+beach+Crete+Sitia",
        mapsLabel: "Spiaggia Agia Fotia"
      },
      {
        id: "d14a05",
        name: "Cena a casa",
        tag: "cena",
        desc: "Rientro tranquillo, cena in appartamento.",
        detail: "Giornata completa ma non estenuante. Rientro in tarda giornata, cena leggera a casa.",
        tips: [],
        mapsUrl: null,
        mapsLabel: null
      }
    ]
  },

  // ── GIORNO 15 — 21 lug ───────────────────────────────────────
  {
    id: "day15",
    date: "2026-07-21",
    label: "Mar",
    title: "Giornata libera — Lagada",
    emoji: "☀️",
    type: "vicino",
    distanza: null,
    activities: [
      {
        id: "d15a01",
        name: "Spiaggia Lagada / Diaskari",
        tag: "mare",
        desc: "Spiaggia a 5 minuti dall'appartamento. Nessun programma.",
        detail: "La spiaggia di Lagada Bay è praticamente sotto l'appartamento. Piccola, ciottolosa ma con acqua cristallina e pochissima gente. Ideale per un giorno di recupero e relax totale prima del rientro.",
        tips: ["Taverna Diaskari Green Beach a pochi passi — pesce fresco, prezzi locali", "Porta snorkeling: i fondali rocciosi sono ricchi di pesci"],
        mapsUrl: "https://maps.google.com/?q=Lagada+beach+Makrigialos+Crete",
        mapsLabel: "Spiaggia Lagada"
      },
      {
        id: "d15a02",
        name: "Cena fuori — ultima serata",
        tag: "cena",
        desc: "L'ultima vera cena del viaggio: scegli il posto migliore.",
        detail: "Ultima serata a Creta. Torna nella taverna preferita di Makrigialos o scopri qualcosa di nuovo. Porta a casa raki e prodotti locali come souvenir.",
        tips: ["Porta a casa del raki come souvenir", "Fai foto al tramonto sul Mar Libico — memorabile", "Domani sveglia presto: check-out entro le 11:00"],
        mapsUrl: "https://maps.google.com/?q=Makrigialos+best+restaurant+Crete",
        mapsLabel: "Taverne Makrigialos"
      }
    ]
  },

  // ── GIORNO 16 — 22 lug ───────────────────────────────────────
  {
    id: "day16",
    date: "2026-07-22",
    label: "Mer",
    title: "Rientro",
    emoji: "✈️",
    type: "vicino",
    distanza: null,
    activities: [
      {
        id: "d16a01",
        name: "Ultima mattina a Lagada",
        tag: "relax",
        desc: "Ultimo bagno nella spiaggia di casa. Check-out ore 08:00–11:00.",
        detail: "Ultima mattina: spiaggia di Lagada, ultimi acquisti, ultime foto. Check-out appartamento entro le 11:00. Il volo è in serata quindi si ha tutta la giornata.",
        tips: ["Check-out entro le 11:00 (lasciare le chiavi alla reception)", "Fai la spesa di prodotti locali da portare a casa (olio, miele, formaggio)", "Puoi lasciare i bagagli in reception dopo il check-out"],
        mapsUrl: "https://maps.google.com/?q=Lagada+Bay+Resort+Makrigialos+Crete",
        mapsLabel: "Lagada Bay Resort"
      },
      {
        id: "d16a02",
        name: "🚗 Riconsegna auto — Autocandia",
        tag: "logistica",
        desc: "Riconsegna Peugeot 208 in aeroporto ore 20:30",
        detail: "Riconsegna auto all'Autocandia, Kazantzakis Airport Heraklion, ore 20:30. Stessa area di ritiro. Controllare il livello del carburante prima di restituire. Tel: +302814260270.",
        tips: ["Fare pieno prima di arrivare in aeroporto", "Arrivare qualche minuto prima delle 20:30", "Scattare foto all'auto prima della riconsegna per eventuali contestazioni", "⚠️ Da Lagada a Heraklion: ~2h di strada — partire entro le 17:30"],
        mapsUrl: "https://maps.google.com/?q=Heraklion+Airport+Crete",
        mapsLabel: "Aeroporto Heraklion — Autocandia"
      },
      {
        id: "d16a03",
        name: "✈️ Volo ritorno — W46440",
        tag: "logistica",
        desc: "Wizz Air W46440 · Heraklion HER → Milano MXP T1 · 22:10–00:10+1",
        detail: "Volo diretto Wizz Air Malta, durata 3h. Partenza da Heraklion (HER) ore 22:10, arrivo Milano Malpensa Terminal 1 ore 00:10 di giovedì 23 luglio. Prenotazione: GPY5KQ · Volo numero W46440. All'arrivo: bagagli, uscita Terminal 1 → navetta Mister Parking (gratuita, ~6 min) → recupero auto in Via Giusti 96 Somma Lombardo → pagamento in loco. Prenotazione parcheggio valida fino alle 00:30.",
        tips: ["⚠️ Tempi stretti: riconsegna auto Autocandia ore 20:30, volo ore 22:10 — solo 1h40 di margine. Andare subito al check-in dopo la riconsegna", "All'arrivo a Malpensa T1: segui indicazioni navette parcheggi privati, cerca Mister Parking", "Tel. Mister Parking per la navetta di ritorno: +39 0331 25 65 81 · +39 348 8036626 (24h/7g)", "Paga il parcheggio direttamente in loco al ritiro dell'auto", "Prenotazione Parkos valida fino alle 00:30 del 23 lug — siete in tempo"],
        mapsUrl: "https://maps.google.com/?q=Milano+Malpensa+Airport+Terminal+1",
        mapsLabel: "Malpensa Terminal 1 — arrivo"
      },
      {
        id: "d16a04",
        name: "🚌 Recupero auto — navetta Mister Parking",
        tag: "logistica",
        desc: "Navetta gratuita T1 → Via Giusti 96, Somma Lombardo · prenotazione 6GD95HB",
        detail: "All'uscita del Terminal 1 di Malpensa cerca la navetta Mister Parking (gratuita, ~6 min). Indirizzo parcheggio: Via Giuseppe Giusti 96, 21019 Somma Lombardo (VA). Prenotazione Parkos rif. 6GD95HB, valida fino alle 00:30 del 23 luglio. Paga il parcheggio direttamente in loco al ritiro dell'auto.",
        tips: ["Segui le indicazioni 'navette parcheggi privati' all'uscita bagagli del T1", "La navetta impiega circa 6 minuti fino al parcheggio", "Prenotazione valida fino alle 00:30 — siete in tempo con l'atterraggio alle 00:10"],
        mapsUrl: "https://maps.google.com/?q=Via+Giuseppe+Giusti+96+Somma+Lombardo+Mister+Parking",
        mapsLabel: "Mister Parking — Somma Lombardo",
        showShuttleRecovery: true,
        shuttleSourceId: "d00a03"
      }
    ]
  }
];

// ── INFO KITESURF ─────────────────────────────────────────────
export const kitesurfInfo = {
  spot: "Kouremenos Beach, Palekastro",
  distanza: "~1h20 · 70 km da Lagada",
  scuola: "Freak Surf Crete",
  tel: "+30 697 925 3861",
  sito: "https://www.freak-surf.com/crete/",
  mapsUrl: "https://maps.google.com/?q=Kouremenos+Beach+Palekastro+Crete+kitesurf",
  note: "Vento Meltemi quasi garantito ogni giorno in luglio (media 6 Bft). Noleggio attrezzatura completa (kite + tavola + harness): circa 60-80€ mezza giornata, 100-130€ giornata intera. Richiesta valutazione iniziale (~20€ scalabile). Prenotare per telefono qualche giorno prima. Combinabile con la gita a Vai/Toplou (stesso quadrante nord-est)."
};