# Mitt Julstök – mobilwebbapp (första versionen)

En separat, **läsande** mobilapp till befintliga planeringsverktyget **Planera julstök**. Den använder samma Firebase-projekt (`julstoket`) och samma Firestore-dokument och samlingar. Inga ändringar görs i den gamla planeringsfilen eller i databasen av själva mobilappen.

## 1. Se hur appen fungerar direkt

Öppna filen **`mitt-julstok-forhandsvisning.html`** (följer med separat) genom att dubbelklicka på den. Den använder **enbart tydligt markerade exempelpersoner och exempelpass** – ingen Firebase-anslutning. **Kartpositioner ingår inte i exemplen:** de riktiga Google Maps-länkarna hämtas från `julstokPlaces/{id}` (fältet `mapsUrl`) när appen körs mot Firebase. Detta förhindrar att exempelkoordinater misstas för verkliga platspositioner.

Alternativt kan appens huvudversion startas lokalt i demoversion:

1. Packa upp zip-filen i en mapp, till exempel `C:\MittJulstok`.
2. Öppna Terminal/Kommandotolken i den mappen.
3. Kör `py -m http.server 8000` (eller `python -m http.server 8000`).
4. Öppna `http://localhost:8000/?demo=1`.

Utan `?demo=1` försöker sidan läsa den riktiga Firestore-planen för aktuellt år.

## 2. Publicering

Ladda upp samtliga filer i zip-arkivet (förutom denna README) till en statisk HTTPS-webbplats, exempelvis en **separat** Firebase Hosting-site eller annan HTTPS-host. Behåll filerna i samma mapp. Startfilen heter `index.html`.

**Varning:** Om planeringsverktyget redan använder Firebase Hosting ska du inte skriva över dess befintliga Hosting-site. Skapa i så fall en separat webbplats eller en egen underkatalog.

När webbplatsen är publicerad visas en fungerande, skanningsbar QR-kod under **Dela**. QR-koden innehåller enbart webbappens gemensamma URL. Den innehåller inget personnamn och ingen årtalsspecifik parameter, så samma tryckta QR-kod kan återanvändas kommande år om webbadressen behålls.

## 3. Firebase: en inställning krävs

Mobilappen har **ingen inloggning**. Firestore måste därför tillåta oautentiserade läsningar av:

- `julstokPlans/{year}`
- `julstokPeople/{id}`
- `julstokPlaces/{id}`

I **Firebase Console → Firestore Database → Rules** kan du tillföra följande läsregel i **respektive redan befintliga match-block**:

```js
allow read: if true;
```

**Behåll alla befintliga regler för `create`, `update`, `delete` och administratörernas skrivbehörighet. Ersätt inte hela regeluppsättningen med exemplen ovan.** Observera också att publik läsning gör innehållet i just dessa samlingar läsbart för alla som ansluter till Firestore-projektet, inte endast för dem som fått QR-koden.

Det går inte att öppna innehållet anonymt om de aktuella Firestore-reglerna fortfarande kräver inloggning. Den här leveransen har inte ändrat några regler i ditt Firebase-projekt.

## 4. Funktioner

- Namnval via **filter-as-you-type** från personer som finns i vald årsplan. Valet lagras i `localStorage` och försöker följa med även när planeringsår ändras.
- **Hela dagens schema direkt**; klicka för att växla mellan fredag, lördag och söndag. Dagens pass som pågår markeras automatiskt enligt svensk tid, och pauser framhävs när de inträffar.
- Instruktioner, arbetsplats, Google Maps-länk **enbart för platser med registrerad kartadress**, pauser, bemannade avlösare, personer man avlöser och kollegor som arbetar samtidigt på samma **specificerade** plats.
- **Kollegor:** direkt sökning, aktuell schemaplacering och klickbara `tel:`-telefonnummer både i sökresultat och persondetalj.
- **Platser:** platsernas beskrivningar, kartlänkar och personer som arbetar där just nu enligt schemat.
- **Dela:** QR-kod och funktionerna för att kopiera och dela samma gemensamma webbadress.
- **PWA:** kan läggas på mobilens hemskärm. Appens skal och den senast hämtade planen sparas lokalt för tillfälliga nätverksavbrott. En sparad kopia märks tydligt så att den inte förväxlas med en aktuellt hämtad plan.

Personernas **faktiska GPS-positioner spåras inte**. ”Just nu” betyder schemalagd placering baserad på aktuell svensk tid.

## 5. Filer

- `index.html` – startsida och ikoner
- `styles.css` – mobilanpassad layout
- `app.js` – läsning av Firestore och appens funktioner
- `qr.js` – lokal QR-kodsgenerator, inga tredjepartsanrop vid generering
- `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `service-worker.js` – installerbar PWA och grundläggande offlinefunktion
- `LICENSE-QR.txt` – licensinformation för QR-kodsbiblioteket

Appen kräver en nätverksanslutning för att ladda Firebase-modulerna första gången och få aktuell data. QR-kodsfunktionen fungerar lokalt efter att appen laddats, men kräver en publicerad HTTPS-webbadress för att vara meningsfull för andra mobilanvändare.
