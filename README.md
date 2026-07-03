# 🌊 Creta 2025 — Trip Planner

App web per la pianificazione del viaggio a Creta, 7–22 luglio 2025.  
Base: **Lagada Bay Resort**, tra Makrigialos e Goudouras.

## Funzionalità

- ✅ Spunta le attività completate
- 📅 Sposta attività da un giorno all'altro
- 📋 Dettaglio di ogni attività con descrizione, consigli e link a Google Maps
- 🔄 Sync real-time su Firebase (funziona su tutti i dispositivi)
- 📱 Ottimizzato per mobile

---

## Setup in 3 passi

### 1. Crea un progetto Firebase

1. Vai su [console.firebase.google.com](https://console.firebase.google.com)
2. Crea un nuovo progetto (es. `creta-2025`)
3. Aggiungi un'app **Web** al progetto
4. Copia la configurazione che ti viene mostrata (`firebaseConfig`)

### 2. Configura Firestore

1. Nel progetto Firebase, vai su **Firestore Database**
2. Clicca **Crea database**
3. Scegli **modalità test** (per ora, cambia le regole prima del viaggio)
4. Scegli la regione `europe-west3` (Frankfurt, più vicina)

Regole consigliate per uso privato (vai su Firestore > Regole):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /trips/{tripId} {
      allow read, write: if true; // Solo voi due — OK per uso personale
    }
  }
}
```

### 3. Inserisci la configurazione nell'app

Apri `index.html` e cerca il blocco `firebaseConfig`:

```javascript
const firebaseConfig = {
  apiKey:            "INSERISCI_LA_TUA_API_KEY",
  authDomain:        "INSERISCI.firebaseapp.com",
  projectId:         "INSERISCI_IL_PROJECT_ID",
  storageBucket:     "INSERISCI.appspot.com",
  messagingSenderId: "INSERISCI_SENDER_ID",
  appId:             "INSERISCI_APP_ID"
};
```

Sostituisci i valori con quelli del tuo progetto Firebase.

---

## Deploy su GitHub Pages

1. Crea un repository su GitHub (es. `creta-2025`)
2. Carica tutti i file del progetto
3. Vai su **Settings > Pages**
4. In **Source** seleziona **GitHub Actions**
5. Il workflow `.github/workflows/deploy.yml` fa tutto automaticamente

L'app sarà disponibile su: `https://TUO_USERNAME.github.io/creta-2025/`

---

## Struttura file

```
creta-trip/
├── index.html          ← Entry point + configurazione Firebase
├── style.css           ← Stili
├── src/
│   ├── app.js          ← Logica app + rendering
│   └── data.js         ← Tutti i dati del viaggio (giorni, attività, dettagli)
└── .github/
    └── workflows/
        └── deploy.yml  ← Deploy automatico su GitHub Pages
```

Per aggiungere o modificare attività, giorni o dettagli → modifica `src/data.js`.
