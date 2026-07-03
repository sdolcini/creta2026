// ═══════════════════════════════════════════════════════════════
//  DATI VIAGGIO — Creta 7-22 luglio 2026
//  Base: Lagada Bay Resort (tra Makrigialos e Goudouras)
// ═══════════════════════════════════════════════════════════════

export const TRIP_START = new Date(2026, 6, 7); // 7 luglio

export const days = [
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
      }
    ]
  },
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
        desc: "Wizz Air W46439 · Milano MXP → Heraklion HER · 05:30–09:15",
        detail: "Volo diretto Wizz Air Malta, durata 2h 45min. Partenza da Milano Malpensa (MXP) ore 05:30, arrivo Heraklion (HER) ore 09:15. Prenotazione: GPY5KQ · Volo numero W46439.",
        tips: ["Presentarsi in aeroporto almeno 2h prima (ore 03:30)", "Stefano: 1 bagaglio in stiva 20kg incluso", "Leidy e Sophia: solo oggetto personale (sotto al sedile), bagaglio a mano NON incluso", "Check-in online su Wizz Air prima della partenza"],
        mapsUrl: "https://maps.google.com/?q=Milano+Malpensa+Airport",
        mapsLabel: "Aeroporto Malpensa MXP"
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
  {
    id: "day02",
    date: "2026-07-08",
    label: "Mar",
    title: "Xerokampos",
    emoji: "🏖",
    type: "vicino",
    distanza: "~20 min",
    activities: [
      {
        id: "d02a01",
        name: "Spiagge di Xerokampos",
        tag: "mare",
        desc: "Spiaggia selvaggia, acque calme, lontana dal turismo di massa.",
        detail: "Xerokampos è una piccola baia isolata a ovest di Goudouras, tra le più tranquille dell'est di Creta. Sabbia chiara, acqua limpida e pochissima gente. Perfetta per famiglie: fondale basso e graduale, nessuna corrente. Portarsi tutto: ombrellone, acqua, cibo.",
        tips: ["Arrivare prima delle 10 anche se è poco frequentata, per avere il posto migliore", "Portare pranzo al sacco — non ci sono chioschi", "Lo snorkeling vicino agli scogli a sinistra è ottimo"],
        mapsUrl: "https://maps.google.com/?q=Xerokampos+beach+Crete",
        mapsLabel: "Spiaggia di Xerokampos"
      },
      {
        id: "d02a02",
        name: "Cena a casa",
        tag: "cena",
        desc: "Serata tranquilla, cena in appartamento.",
        detail: "Dopo una lunga giornata al sole, cucina semplice a casa: insalata greca, formaggio, pane, olive. Ottimo momento per riposo dopo il viaggio di arrivo.",
        tips: [],
        mapsUrl: null,
        mapsLabel: null
      }
    ]
  },
  {
    id: "day03",
    date: "2026-07-09",
    label: "Mer",
    title: "Kato Zakros + Palazzo Minoico",
    emoji: "🏛",
    type: "vicino",
    distanza: "~30 min",
    activities: [
      {
        id: "d03a01",
        name: "Palazzo Minoico di Zakros",
        tag: "cultura",
        desc: "Unico palazzo minoico direttamente sul mare. Mattina visita al sito.",
        detail: "Il Palazzo di Kato Zakros è uno dei quattro grandi palazzi minoici di Creta, scoperto nel 1961. È l'unico posizionato direttamente sulla costa. Risale al 1600 a.C. circa. Visita: circa 1-1.5h. Biglietto adulti circa 4€, bambini gratis. Perfetto anche per bambini grazie alla storia del Minotauro e dei Minoici.",
        tips: ["Portare acqua e cappello — poco ombra", "Il sito apre alle 8:00, meglio andare la mattina presto", "Chiedere la mappa al botteghino all'ingresso"],
        mapsUrl: "https://maps.google.com/?q=Minoan+Palace+Kato+Zakros+Crete",
        mapsLabel: "Palazzo Minoico Kato Zakros"
      },
      {
        id: "d03a02",
        name: "Spiaggia di Kato Zakros",
        tag: "mare",
        desc: "Spiaggia accanto al palazzo, pomeriggio in acqua.",
        detail: "Dopo la visita al sito, la spiaggia di Kato Zakros è a pochi passi. Sabbia grigia con ciottoli, acqua limpidissima. C'è una piccola taverna direttamente sulla spiaggia.",
        tips: ["La taverna Zakros Beach ha buon pesce fresco", "Ottimo snorkeling sulle rocce a destra"],
        mapsUrl: "https://maps.google.com/?q=Kato+Zakros+beach+Crete",
        mapsLabel: "Spiaggia Kato Zakros"
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
  {
    id: "day04",
    date: "2026-07-10",
    label: "Gio",
    title: "Vai + Monastero di Toplou",
    emoji: "🌴",
    type: "vicino",
    distanza: "~45 min",
    activities: [
      {
        id: "d04a01",
        name: "Spiaggia di Vai",
        tag: "mare",
        desc: "Il palmeto naturale più grande d'Europa. Partenza presto!",
        detail: "Vai è famosa per la foresta di palme da dattero che la circonda — oltre 5.000 esemplari, il palmeto naturale più grande d'Europa. La spiaggia è sabbiosa, le acque calme e azzurrissime. In luglio si riempie molto dalle 10 in poi: arrivare entro le 8:30-9:00. Parcheggio a pagamento (circa 3€).",
        tips: ["Arrivare tassativamente prima delle 9:30", "Area protetta: vietato raccogliere palme o frutti", "Portare pranzo al sacco, bar in loco molto cari", "Snorkeling ottimo nella parte sinistra della baia"],
        mapsUrl: "https://maps.google.com/?q=Vai+beach+palm+forest+Crete",
        mapsLabel: "Spiaggia di Vai"
      },
      {
        id: "d04a02",
        name: "Monastero di Toplou",
        tag: "cultura",
        desc: "Monastero ancora abitato dai monaci, sulla strada di rientro.",
        detail: "Il Monastero di Toplou (Moni Toplou) risale al XIV secolo e ospita ancora una comunità di monaci. Al suo interno si trova una straordinaria icona del Signore Tu Sei Grande di Ioannis Kornaros (1770). Museo annesso con oggetti sacri e documenti storici. Aperto al pubblico tutti i giorni 9:00-13:00 e 14:00-18:00. Biglietto circa 3€.",
        tips: ["Abbigliamento coperto richiesto (spalle e ginocchia coperte)", "Vendono olio d'oliva e vino biologici prodotti dal monastero — ottimi da portare a casa"],
        mapsUrl: "https://maps.google.com/?q=Toplou+Monastery+Crete",
        mapsLabel: "Monastero di Toplou"
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
  {
    id: "day05",
    date: "2026-07-11",
    label: "Ven",
    title: "Sitia — città autentica",
    emoji: "🏘",
    type: "vicino",
    distanza: "~40 min",
    activities: [
      {
        id: "d05a01",
        name: "Giro di Sitia",
        tag: "cultura",
        desc: "Cittadina autentica, mercato, lungomare, porto.",
        detail: "Sitia è la città più orientale di Creta e una delle più autentiche — poco turistica. Il centro storico sale su una collina con case color pastello. Il lungomare è piacevole per passeggiare. Il museo archeologico ospita la collezione di reperti del palazzo di Zakros. La fortezza veneziana Kazarma è visitabile gratuitamente.",
        tips: ["Il mercato settimanale c'è il sabato mattina — controlla il giorno prima", "Fai scorta: miele di timo, graviera (formaggio locale), xerotigana (dolci fritti)"],
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
  {
    id: "day06",
    date: "2026-07-12",
    label: "Sab",
    title: "Giornata libera",
    emoji: "☀️",
    type: "vicino",
    distanza: null,
    activities: [
      {
        id: "d06a01",
        name: "Spiaggia Lagada / Diaskari",
        tag: "mare",
        desc: "Spiaggia a 5 minuti dall'appartamento. Nessun programma.",
        detail: "La spiaggia di Lagada Bay è praticamente sotto l'appartamento. Piccola, ciottolosa ma con acqua cristallina e pochissima gente. Ideale per un giorno di recupero senza organizzazione.",
        tips: ["Taverna Diaskari Green Beach a pochi passi — pesce fresco, prezzi locali", "Porta snorkeling: i fondali rocciosi sono ricchi di pesci"],
        mapsUrl: "https://maps.google.com/?q=Lagada+beach+Makrigialos+Crete",
        mapsLabel: "Spiaggia Lagada"
      },
      {
        id: "d06a02",
        name: "Cena alla Taverna Diaskari",
        tag: "cena",
        desc: "Taverna sul mare, a piedi dall'appartamento.",
        detail: "La Taverna Diaskari Green Beach è letteralmente a 5 minuti a piedi dal Lagada Bay Resort. Pesce fresco, vista mare, atmosfera locale. Perfetta per la serata pigra.",
        tips: ["Meglio prenotare in alta stagione, anche solo qualche ora prima", "Chiedi il polpo alla griglia — specialità della casa"],
        mapsUrl: "https://maps.google.com/?q=Diaskari+Green+Beach+taverna+Makrigialos",
        mapsLabel: "Taverna Diaskari Green Beach"
      }
    ]
  },
  {
    id: "day07",
    date: "2026-07-13",
    label: "Dom",
    title: "Makrigialos + Koufonisi",
    emoji: "⛵",
    type: "vicino",
    distanza: "~20 min + barca",
    activities: [
      {
        id: "d07a01",
        name: "Spiaggia di Makrigialos",
        tag: "mare",
        desc: "Bella spiaggia sabbiosa attrezzata, 2,5 km dalla base.",
        detail: "Makrigialos ha una delle spiagge più belle dell'est Creta: lunga, sabbiosa, con acque basse e chiare. Attrezzata con lettini e ombrelloni in affitto (circa 8-10€ a coppia). Comoda e sicura per bambini.",
        tips: ["Ottima base per mattina prima di eventuale gita a Koufonisi", "I lettini si prenotano arrivando presto"],
        mapsUrl: "https://maps.google.com/?q=Makrigialos+beach+Crete",
        mapsLabel: "Spiaggia Makrigialos"
      },
      {
        id: "d07a02",
        name: "Gita a Koufonisi (isola)",
        tag: "gita",
        desc: "Isola incontaminata, fondali caraibici. Barche da Ierapetra.",
        detail: "Koufonissi (o Gaidouronisi) è un'isola disabitata al largo di Ierapetra, considerata una delle più belle della Grecia. Ha spiagge di sabbia bianchissima con acque turchesi caraibiche. Le barche partono da Ierapetra (~35 min da Lagada). Gita organizzata con tour operator circa 25-30€ a persona adulti, bambini solitamente metà prezzo. Include pranzo a bordo o sosta in spiaggia.",
        tips: ["Prenotare il giorno prima — le barche si riempiono in luglio", "Portare crema solare abbondante e cappello (zero ombra sull'isola)", "Vietato raccogliere sabbia o conchiglie — area protetta"],
        mapsUrl: "https://maps.google.com/?q=Chryssi+Island+Ierapetra+Crete",
        mapsLabel: "Koufonisi / Isola di Chryssi"
      },
      {
        id: "d07a03",
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
  {
    id: "day08",
    date: "2026-07-14",
    label: "Lun",
    title: "Gola di Pervolakia + Monastero di Kapsa",
    emoji: "🥾",
    type: "vicino",
    distanza: "~10 min",
    activities: [
      {
        id: "d08a01",
        name: "Gola di Pervolakia",
        tag: "trekking",
        desc: "4 km A/R, adatta a bambini, finisce al monastero sul mare.",
        detail: "La Gola di Pervolakia (nota anche come Gola di Kapsa) è a pochissimi minuti dalla base. Il sentiero è breve, circa 2 km in discesa fino al Monastero di Kapsa direttamente sul mare. Adatta a bambini da 5 anni in su. Paesaggio di rocce calcaree, vegetazione mediterranea e uccelli. Durata: 1-1.5h in discesa.",
        tips: ["Partire la mattina prima del caldo", "Scarpe chiuse — non infradito", "Il rientro è in risalita: più impegnativo. Portare acqua abbondante"],
        mapsUrl: "https://maps.google.com/?q=Kapsa+Gorge+Crete",
        mapsLabel: "Gola di Pervolakia / Kapsa"
      },
      {
        id: "d08a02",
        name: "Monastero di Kapsa",
        tag: "cultura",
        desc: "Monastero sul mare, fine del percorso nella gola.",
        detail: "Il Monastero di Kapsa (Moni Kapsas) è incassato tra le rocce direttamente sul mare Libico. Fondato nel XV secolo, è ancora abitato da monaci. Interno con affreschi e icone bizantine. Ingresso libero, abbigliamento rispettoso richiesto.",
        tips: ["Porta un leggero foulard per coprirsi all'ingresso", "La spiaggia sotto il monastero è accessibile"],
        mapsUrl: "https://maps.google.com/?q=Kapsa+Monastery+Crete",
        mapsLabel: "Monastero di Kapsa"
      },
      {
        id: "d08a03",
        name: "Bagno a Kalo Nero",
        tag: "mare",
        desc: "Spiaggia sulla strada di rientro dal monastero.",
        detail: "Kalo Nero è una spiaggia di sassi con acqua limpidissima, sulla strada di casa. Perfetta per un bagno dopo il trekking.",
        tips: [],
        mapsUrl: "https://maps.google.com/?q=Kalo+Nero+beach+Makrigialos+Crete",
        mapsLabel: "Spiaggia Kalo Nero"
      },
      {
        id: "d08a04",
        name: "Cena a casa",
        tag: "cena",
        desc: "Rientro e cena leggera in appartamento.",
        detail: "Dopo trekking e bagno, serata tranquilla a casa.",
        tips: [],
        mapsUrl: null,
        mapsLabel: null
      }
    ]
  },
  {
    id: "day09",
    date: "2026-07-15",
    label: "Mar",
    title: "Agios Nikolaos + Spinalonga",
    emoji: "🏝",
    type: "gita",
    distanza: "~1h15",
    activities: [
      {
        id: "d09a01",
        name: "Agios Nikolaos — città e lago",
        tag: "cultura",
        desc: "Una delle città più belle dell'est Creta, lago interno collegato al mare.",
        detail: "Agios Nikolaos è una delle città più scenografiche di Creta. Il suo elemento distintivo è il lago Voulismeni, collegato al mare da un canale artificiale — un posto unico al mondo. Passeggiata sul lungomare, boutique, musei. Il Museo Archeologico di Agios Nikolaos è uno dei migliori di Creta.",
        tips: ["Parcheggio gratuito fuori dal centro, poi a piedi", "Il lago Voulismeni è bellissimo al tramonto — torna per la cena"],
        mapsUrl: "https://maps.google.com/?q=Agios+Nikolaos+lake+Crete",
        mapsLabel: "Lago Voulismeni, Agios Nikolaos"
      },
      {
        id: "d09a02",
        name: "Gita in barca a Spinalonga",
        tag: "cultura",
        desc: "Ex colonia per lebbrosi, isola scenografica nel golfo di Mirabello.",
        detail: "Spinalonga è una delle destinazioni più affascinanti di Creta. L'isola fu l'ultima colonia per lebbrosi d'Europa, attiva fino al 1957. Le barche partono da Agios Nikolaos o dal porto di Plaka (più vicino). Visita all'isola: 1-1.5h. Biglietto ingresso circa 8€. Le barche costano circa 15-20€ A/R. Resa famosa dal romanzo La villa dell'isola di Victoria Hislop.",
        tips: ["Prenotare i biglietti online in alta stagione", "Da Plaka il tragitto in barca è più breve (10 min) e più economico", "Portare acqua — sull'isola fa molto caldo"],
        mapsUrl: "https://maps.google.com/?q=Spinalonga+island+Crete",
        mapsLabel: "Isola di Spinalonga"
      },
      {
        id: "d09a03",
        name: "Cena ad Agios Nikolaos",
        tag: "cena",
        desc: "Taverne sul lago Voulismeni — una delle cene migliori del viaggio.",
        detail: "Le taverne attorno al lago di Agios Nikolaos sono ottime e l'atmosfera serale è bellissima. Scegli un posto con vista acqua.",
        tips: ["Le taverne sul lato est del lago sono mediamente migliori e meno caotiche", "Pesce fresco o dakos (bruschetta cretese) per iniziare"],
        mapsUrl: "https://maps.google.com/?q=Agios+Nikolaos+lake+restaurants+Crete",
        mapsLabel: "Ristoranti lago AN"
      }
    ]
  },
  {
    id: "day10",
    date: "2026-07-16",
    label: "Mer",
    title: "Giornata relax",
    emoji: "🌊",
    type: "vicino",
    distanza: null,
    activities: [
      {
        id: "d10a01",
        name: "Spiaggia di Votsalaki",
        tag: "mare",
        desc: "Spiaggia più isolata e silenziosa, 500 m a ovest di Goudouras.",
        detail: "Votsalaki è una piccola spiaggia di sassi bianchi a pochi minuti dall'appartamento, meno frequentata della spiaggia principale. Acqua cristallina, ombra naturale con qualche arbusto. Ideale per una giornata di vero riposo.",
        tips: ["Porta tutto: nessun servizio in loco", "Snorkeling eccellente lungo la scogliera a sinistra"],
        mapsUrl: "https://maps.google.com/?q=Votsalaki+beach+Goudouras+Crete",
        mapsLabel: "Spiaggia Votsalaki"
      },
      {
        id: "d10a02",
        name: "Cena a casa",
        tag: "cena",
        desc: "Serata libera, nessun programma.",
        detail: "Riposo totale. Cucina quello che hai in frigo o fai una passeggiata alla Taverna Diaskari sotto casa.",
        tips: [],
        mapsUrl: null,
        mapsLabel: null
      }
    ]
  },
  {
    id: "day11",
    date: "2026-07-17",
    label: "Gio",
    title: "Heraklion + Palazzo di Cnosso",
    emoji: "🏺",
    type: "gita",
    distanza: "~1h45",
    activities: [
      {
        id: "d11a01",
        name: "Palazzo di Cnosso",
        tag: "cultura",
        desc: "Sito minoico più importante dell'isola. Biglietti online!",
        detail: "Il Palazzo di Cnosso è il più grande sito minoico del Mediterraneo, risalente al 2000 a.C. Il sito è associato alla leggenda del Minotauro e del Labirinto — perfetto per catturare l'immaginazione dei bambini. Visita: 2-3 ore. Biglietto: 15€ adulti, gratuito sotto i 18 anni. Estate: aprire alle 8:00, consigliato arrivarci all'apertura.",
        tips: ["Comprare biglietti online — evita la coda in luglio", "Prendere la audioguida o una guida locale: senza contesto il sito è difficile da leggere", "Cappello e acqua — pochissima ombra", "Evita le ore 11-14: caldo e folla massimi"],
        mapsUrl: "https://maps.google.com/?q=Palace+of+Knossos+Heraklion+Crete",
        mapsLabel: "Palazzo di Cnosso"
      },
      {
        id: "d11a02",
        name: "Centro di Heraklion",
        tag: "cultura",
        desc: "Passeggiata nel centro veneziano, Museo Archeologico.",
        detail: "Heraklion ha un centro storico veneziano notevole: la Fontana Morosini, il porto con la fortezza Koules, Piazza Eleftherias. Il Museo Archeologico di Heraklion è uno dei migliori della Grecia (collezione minoica unica al mondo) — ma è impegnativo: se la bambina è stanca, salta e torna un'altra volta.",
        tips: ["Museo Arch.: chiuso il lunedì, orari 8-20 estate", "Il mercato coperto (Agora) è interessante per lo shopping di formaggi e spezie"],
        mapsUrl: "https://maps.google.com/?q=Heraklion+old+city+center+Crete",
        mapsLabel: "Centro storico Heraklion"
      },
      {
        id: "d11a03",
        name: "Cena a casa",
        tag: "cena",
        desc: "Rientro in serata, cena a casa.",
        detail: "1h45 di strada — meglio rientrare prima di sera e cenare a casa. Porta qualcosa di buono da Heraklion.",
        tips: [],
        mapsUrl: null,
        mapsLabel: null
      }
    ]
  },
  {
    id: "day12",
    date: "2026-07-18",
    label: "Ven",
    title: "Ierapetra + isola di Chrissi",
    emoji: "🏙",
    type: "vicino",
    distanza: "~35 min",
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
        detail: "Chrissi (Chrysi) è un'isola protetta a 15 km da Ierapetra con spiagge di sabbia dorata e un cedro secolare. Le barche partono dal porto di Ierapetra. Ticket circa 20-25€ A/R adulti, bambini metà. Attenzione: in alta stagione ci sono restrizioni al numero di visitatori giornalieri — verificare il giorno prima che lo sbarco sia garantito.",
        tips: ["Partire dal porto di Ierapetra mattina presto", "Portare tutto: sull'isola c'è solo un piccolo chiosco", "Zero ombra: protezione solare alta"],
        mapsUrl: "https://maps.google.com/?q=Chrysi+Island+Ierapetra+Crete",
        mapsLabel: "Isola di Chrissi"
      },
      {
        id: "d12a03",
        name: "Cena fuori a Ierapetra",
        tag: "cena",
        desc: "Buona scelta di taverne, prezzi locali.",
        detail: "Ierapetra ha ottimi ristoranti di pesce sul lungomare e nel centro storico. Prezzi meno gonfiati rispetto alle zone più turistiche.",
        tips: [],
        mapsUrl: "https://maps.google.com/?q=Ierapetra+taverna+restaurant+Crete",
        mapsLabel: "Taverne Ierapetra"
      }
    ]
  },
  {
    id: "day13",
    date: "2026-07-19",
    label: "Sab",
    title: "Preveli — laguna e palme",
    emoji: "🌿",
    type: "gita",
    distanza: "~2h",
    activities: [
      {
        id: "d13a01",
        name: "Spiaggia di Preveli",
        tag: "mare",
        desc: "Laguna con palme, fiume che sfocia nel mare. Unica al mondo.",
        detail: "Preveli è una delle spiagge più iconiche di Creta. Il fiume Megalopotamos crea una laguna tropicale prima di sfociare nel Mar Libico, circondata da palme nane cretesi. Si raggiunge scendendo a piedi dal parcheggio in alto (circa 15-20 minuti su sentiero abbastanza ripido) oppure in barca dalla baia di Plakias. L'acqua è eccezionale — mare e fiume mescolati.",
        tips: ["Partire di mattina presto — parcheggio si riempie presto", "Il sentiero in discesa è su terreno irregolare: scarpe chiuse, non infradito", "La risalita è faticosa: portare acqua abbondante", "In barca da Plakias è più comodo ma costa circa 15€ A/R"],
        mapsUrl: "https://maps.google.com/?q=Preveli+beach+Crete",
        mapsLabel: "Spiaggia di Preveli"
      },
      {
        id: "d13a02",
        name: "Monastero di Preveli (facoltativo)",
        tag: "cultura",
        desc: "Monastero panoramico sulla strada per la spiaggia.",
        detail: "Il Monastero di Preveli si trova sulla strada che porta alla spiaggia. Vale una sosta di 20-30 minuti: vista panoramica sul Mar Libico, giardino curato, museo. Biglietto circa 2,50€.",
        tips: ["Abbigliamento coperto", "Vendono raki e prodotti del monastero all'uscita"],
        mapsUrl: "https://maps.google.com/?q=Preveli+Monastery+Crete",
        mapsLabel: "Monastero di Preveli"
      },
      {
        id: "d13a03",
        name: "Cena a casa",
        tag: "cena",
        desc: "Rientro dopo una lunga gita — cena semplice a casa.",
        detail: "2h di rientro: meglio tornare e cucinare qualcosa di semplice a casa.",
        tips: [],
        mapsUrl: null,
        mapsLabel: null
      }
    ]
  },
  {
    id: "day14",
    date: "2026-07-20",
    label: "Dom",
    title: "Gole di Samaria",
    emoji: "⛰️",
    type: "gita",
    distanza: "~2h30 fino a Omalos",
    activities: [
      {
        id: "d14a01",
        name: "Gole di Samaria — trekking",
        tag: "trekking",
        desc: "16 km, il canyon più lungo d'Europa. Giornata intera.",
        detail: "Le Gole di Samaria sono il trekking più celebre di Creta: 16 km in discesa attraverso il canyon più lungo d'Europa (18 km totali). Si entra a Omalos (1200m) e si scende fino al Mar Libico ad Agia Roumeli. Durata: 4-6 ore a seconda del passo. Ingresso: 5€ adulti, gratuito sotto i 15 anni. Il parco è aperto da maggio a ottobre, 6:00-15:00 (ultimo ingresso).",
        tips: ["⚠️ Consigliato dai 8 anni in su", "Partire all'apertura (6:00) per evitare il caldo peggiore", "Scarponi o scarpe da trekking obbligatori — il terreno è sassoso", "Portare almeno 2 litri d'acqua a persona", "Si termina ad Agia Roumeli: prendi il traghetto per Chora Sfakion (circa 10€), poi taxi/bus per il parcheggio", "Organizza i trasporti A/R prima di partire — i bus da Heraklion e Chania passano presto"],
        mapsUrl: "https://maps.google.com/?q=Samaria+Gorge+entrance+Omalos+Crete",
        mapsLabel: "Ingresso Gole di Samaria"
      },
      {
        id: "d14a02",
        name: "Agia Roumeli — bagno finale",
        tag: "mare",
        desc: "Il mare alla fine delle gole: meritato!",
        detail: "Agia Roumeli è accessibile solo a piedi o in barca — nessuna strada carrabile. Piccolo villaggio con taverne e spiaggia. Dopo 16 km di cammino, il tuffo è tra le esperienze più belle del viaggio.",
        tips: ["Il traghetto per Chora Sfakion parte alle ore fisse — controlla l'orario prima", "Mangia qualcosa ad Agia Roumeli: hai camminato tanto"],
        mapsUrl: "https://maps.google.com/?q=Agia+Roumeli+Crete",
        mapsLabel: "Agia Roumeli"
      },
      {
        id: "d14a03",
        name: "Cena a casa",
        tag: "cena",
        desc: "Rientro tardi e stanchi — cena a casa.",
        detail: "Dopo le Gole è praticamente impossibile fare altro. Rientro in serata e cena veloce a casa.",
        tips: [],
        mapsUrl: null,
        mapsLabel: null
      }
    ]
  },
  {
    id: "day15",
    date: "2026-07-21",
    label: "Lun",
    title: "Elafonissi — ultima gita",
    emoji: "🏖",
    type: "gita",
    distanza: "~2h45",
    activities: [
      {
        id: "d15a01",
        name: "Spiaggia di Elafonissi",
        tag: "mare",
        desc: "Sabbia rosata, acque bassissime, area protetta. Partenza ore 7:30!",
        detail: "Elafonissi è una delle spiagge più famose d'Europa: sabbia che tende al rosa per la presenza di frammenti di corallo, acque calme, bassissime e calde — perfette per bambini. È un'area naturale protetta. Distanza: circa 2h45 dalla base. In luglio si riempie moltissimo: partire tassativamente alle 7:30 per arrivare entro le 10:30 e godersi la mattina tranquillamente. Restare fino alle 14-15, poi rientro.",
        tips: ["⚠️ Partenza ore 7:30 al massimo", "Parcheggio a pagamento (~3€) — si esaurisce in fretta", "Portare pranzo al sacco o comprare in loco (prezzi alti)", "Area protetta: non raccogliere sabbia", "La laguna a nord della spiaggia è accessibile guadando (acqua fino alle ginocchia) — bellissima"],
        mapsUrl: "https://maps.google.com/?q=Elafonissi+beach+Crete",
        mapsLabel: "Spiaggia di Elafonissi"
      },
      {
        id: "d15a02",
        name: "Cena fuori — ultima serata",
        tag: "cena",
        desc: "L'ultima vera cena del viaggio: scegli il posto migliore.",
        detail: "Ultima serata prima del rientro. Scegli il locale migliore che hai scoperto in queste due settimane, oppure torna nella taverna preferita di Makrigialos per una degna conclusione.",
        tips: ["Porta a casa del raki come souvenir", "Fai foto al tramonto — l'est di Creta ha tramonti bellissimi"],
        mapsUrl: "https://maps.google.com/?q=Makrigialos+best+restaurant+Crete",
        mapsLabel: "Makrigialos"
      }
    ]
  },
  {
    id: "day16",
    date: "2026-07-22",
    label: "Mar",
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
        detail: "Riconsegna auto all'Autocandia, Kazantzakis Airport Heraklion, ore 20:30. Stessa area di ritiro. Controllare il livello del carburante prima di restituire (serbatoio allo stesso livello del ritiro). Tel: +302814260270.",
        tips: ["Fare pieno prima di arrivare in aeroporto", "Arrivare qualche minuto prima delle 20:30", "Scattare foto all'auto prima della riconsegna per eventuali contestazioni"],
        mapsUrl: "https://maps.google.com/?q=Heraklion+Airport+Crete",
        mapsLabel: "Aeroporto Heraklion — Autocandia"
      },
      {
        id: "d16a03",
        name: "✈️ Volo ritorno — W46440",
        tag: "logistica",
        desc: "Wizz Air W46440 · Heraklion HER → Milano MXP · 22:10–00:10+1",
        detail: "Volo diretto Wizz Air Malta, durata 3h. Partenza da Heraklion (HER) ore 22:10, arrivo Milano Malpensa (MXP) giovedì 23 lug ore 00:10. Prenotazione: GPY5KQ · Volo numero W46440.",
        tips: ["⚠️ Attenzione ai tempi: riconsegna auto ore 20:30, volo ore 22:10 — solo 1h40 di margine. Presentarsi al check-in subito dopo la riconsegna", "Check-in online su Wizz Air prima della partenza per risparmiare tempo in aeroporto", "Stefano: 1 bagaglio in stiva 20kg incluso"],
        mapsUrl: "https://maps.google.com/?q=Heraklion+Airport+Crete",
        mapsLabel: "Aeroporto Heraklion HER"
      }
    ]
  }
];

// Giorno kitesurf (da inserire nel piano o consultare separatamente)
export const kitesurfInfo = {
  spot: "Kouremenos Beach, Palekastro",
  distanza: "~45 min da Lagada",
  scuola: "Freak Surf Crete",
  tel: "+30 697 925 3861",
  sito: "https://www.freak-surf.com/crete/",
  mapsUrl: "https://maps.google.com/?q=Kouremenos+Beach+Palekastro+Crete+kitesurf",
  note: "Vento Meltemi quasi garantito ogni giorno in luglio. Noleggio attrezzatura completa (kite + tavola + harness): circa 60-80€ mezza giornata, 100-130€ giornata intera. Richiesta valutazione iniziale (~20€ scalabile). Prenotare per telefono qualche giorno prima."
};
