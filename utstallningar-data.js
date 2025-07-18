const utstallningar = [
     {
      id: 0,
      namn: "Kulturens första utställning… de första föremålen",
      typ: "Tillfällig",
      start: "1882-08-21",
      slut: "åååå-mm-dd",
      lokal: "I ett  vindsrum i Huaröds prästgård",
      kommentar: ""
    },
    {
      id: 1,
      namn: "Kulturens andra utställning… sommarens förvärv",
      typ: "Tillfällig",
      start: "1882-09-28",
      slut: "1882-10-12",
      lokal: "Akademiska föreningen",
      kommentar: ""
    },
    {
      id: 2,
      namn: "Kulturens tredje utställning…",
      typ: "Basutställning",
      start: "1882-10-21",
      slut: "1884-06-01",
      lokal: "Några salar i Kungshusets (\"gamla Bibliotekshusets\") nedre våning",
      kommentar: "\"De kulturhistoriska samlingarna i Lund (i Bibliotekshusets nedre våning) äro mot en afgift af 24 öre tillgängliga för allmänheten\" (Folkets Tidning 1882-10-24)."
    },
    {
      id: 3,
      namn: "Kulturens fjärde utställning…",
      typ: "Basutställning",
      start: "1883-11-04",
      slut: "1884-mm-dd",
      lokal: "Kungshuset (antik- och fornsal)",
      kommentar: "Utställning av fornföremål och antikviteter, samlade i en särskild \"antik- och fornsal\""
    },
    {
      id: 4,
      namn: "Kulturens femte utställning…",
      typ: "Basutställning",
      start: "1883-12-02",
      slut: "1884-mm-dd",
      lokal: "Kungshuset (allmogesalen)",
      kommentar: "En \"synnerligen rik och för ändamålet väl sammansatt samling\" av allmogeföremål."
    },
    {
      id: 5,
      namn: "Kulturens sjätte utställning…",
      typ: "Basutställning",
      start: "1884-06-15",
      slut: "1886-08-16",
      lokal: "I övre våningen av gamla Universitetshuset (\"Kuggis\").",
      kommentar: ""
    },
    {
      id: 6,
      namn: "Textilutställning",
      typ: "Tillfällig",
      start: "1885-09-25",
      slut: "1885-09-30",
      lokal: "I Kristianstad",
      kommentar: "Gamla skånska vävnader och folkdräkter från föreningens samlingar; nyproducerade textilier med förlaga i äldre skånska mönster."
    },
    {
      id: 7,
      namn: "Skånsk textil konstslöjd",
      typ: "Tillfällig",
      start: "1886-09-09",
      slut: "1886-10-06",
      lokal: "I Köpenhamn",
      kommentar: "Historiska textilier ur museets samlingar; nyproducerad skånsk hemslöjd (bl.a. Thora Kulles fabrik); en rekonstruerad gammal allmogestuga från Gärds härad."
    },
    {
      id: 8,
      namn: "Återinvigning i Weibullska gården",
      typ: "Basutställning",
      start: "1888-02-28",
      slut: "1891-09-02",
      lokal: "Weibullska gården",
      kommentar: "Ingen ny tematisk utställning, men samlingarna återöppnas i sin helhet i en ny lokal."
    },
    {
      id: 9,
      namn: "Textilutställning",
      typ: "Tillfällig",
      start: "1888-05-05",
      slut: "1888-05-05",
      lokal: "Akademiska föreningen",
      kommentar: "Källa: Lunds Weckoblad 1888-05-08; skånska vävnader och föremål ur föreningens samlingar; syftet var att \"...väcka intresse för den skånska textiltraditionen och det förestående deltagandet i Köpenhamnsutställningen\"."
    },
    {
      id: 10,
      namn: "Den skånska hemslöjden",
      typ: "Tillfällig",
      start: "1888-05-18",
      slut: "1888-10-02",
      lokal: "Köpenhamn (Danska Industriföreningens expositionslokal)",
      kommentar: "Källa redogörelse 1887-1888; på \"Nordisk industri-, lantbruks- och konstutställning\""
    },
    {
      id: 11,
      namn: "Fynd från grävningar i Falsterbo",
      typ: "Tillfällig",
      start: "1888-mm-dd",
      slut: "1888-mm-dd",
      lokal: "Akademiska föreningen",
      kommentar: "Föremål från grävningar i Falsterbo."
    },
    {
      id: 12,
      namn: "Fynd från grävningar i Falsterbo",
      typ: "Tillfällig",
      start: "1889-01-05",
      slut: "1889-01-12",
      lokal: "Weibullska gården",
      kommentar: "Den första egna museibyggnaden för Kulturen i Lund, belägen vid Tomegapsgatan (nuvarande Tegnérsplatsen); föremål från grävningar i Falsterbo."
    },
    {
      id: 13,
      namn: "Återinvigning i Herrehuset",
      typ: "Basutställning",
      start: "1890-09-01",
      slut: "åååå-mm-dd",
      lokal: "Herrehuset",
      kommentar: "\"Åtskilliga rum ställdes genast i ordning, så att en stor del af de mest representativa föremålen kunde utställas på ett sätt, som väckt allmän tillfredsställelse.\"; etnografiska kollektioner, konstvävnad, folkdräkter och konstslöjdsföremål."
    },
    {
      id: 14,
      namn: "Industriutställningen i Göteborg",
      typ: "Tillfällig",
      start: "1891-07-01",
      slut: "1891-09-15",
      lokal: "I Göteborg",
      kommentar: "Kulturen formade \"ramen för den skånska textilkonsten\""
    },
    {
      id: 15,
      namn: "Måketorpsboden",
      typ: "Friluftsobjekt",
      start: "1892-09-07",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Friluftsmuseets invigningsdag; förekommer även benämningen \"Mocketorpsboden\""
    },
    {
      id: 16,
      namn: "Uranäsboden",
      typ: "Friluftsobjekt",
      start: "1892-09-07",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Friluftsmuseets invigningsdag; byggnaden hade ursprungligen namnet \"Then Gyldene Drufwan\" och var särskilt avsedd att fungera som taverna för trötta museibesökare."
    },
    {
      id: 17,
      namn: "Herrehuset med tillhörande Lusthus",
      typ: "Friluftsobjekt",
      start: "1892-09-07",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Friluftsmuseets invigningsdag; museets huvudbyggnad vid denna tid; till Herrehuset hör även Lusthuset; Herrehuset tidigare benämnt \"Tollska huset\" (eller gården), \"Lingska huset\""
    },
    {
      id: 18,
      namn: "Blekingegården",
      typ: "Basutställning",
      start: "1892-09-07",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Friluftsmuseets invigningsdag."
    },
    {
      id: 19,
      namn: "Borgarhuset",
      typ: "Friluftsobjekt",
      start: "1892-09-07",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Friluftsmuseets invigningsdag."
    },
    {
      id: 20,
      namn: "Friluftsmuseet",
      typ: "Basutställning",
      start: "1892-09-07",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Kulturens första utställning på egen plats; friluftsmuseet i sig samt några byggnader (Herrehuset, Borgarhuset, Uranäsboden, Måketorpsboden, Blekingegården)."
    },
    {
      id: 21,
      namn: "Bosebo kyrka",
      typ: "Friluftsobjekt",
      start: "1894-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "\"En ny dragningskraft har Museet i vår vunnit genom förvärfvandet af den lilla efter medeltida typ uppförda träkyrkan från Bosebo.\""
    },
    {
      id: 22,
      namn: "Nordiska industri- och slöjdutställningen i Malmö",
      typ: "Tillfällig",
      start: "1896-06-06",
      slut: "1896-09-30",
      lokal: "I Malmö",
      kommentar: "Kulturen organiserade ett omfattande deltagande av omkring 60 konstslöjdare från södra Sverige."
    },
    {
      id: 23,
      namn: "Sydsvenska konstslöjdutställningen i Lund",
      typ: "Tillfällig",
      start: "1897-09-11",
      slut: "1897-10-01",
      lokal: "På hotel Altona mitt emot domkyrkan",
      kommentar: "Den första allmänna konstslöjdutställningen i Lund."
    },
    {
      id: 24,
      namn: "Lindforska huset",
      typ: "Friluftsobjekt",
      start: "1898-06-14",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Invigdes som del av museet troligen i samband med föreningens årsmöte (14 juni); skrevs 1898 och i vissa enskilda fall \"Lindforsska\", i övrigt ofta \"Lindforska gården\" (snarare än \"huset\")."
    },
    {
      id: 25,
      namn: "Locus Virtutum",
      typ: "Friluftsobjekt",
      start: "1898-06-14",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Invigdes som del av museet troligen i samband med föreningens årsmöte (14 juni)."
    },
    {
      id: 26,
      namn: "Locus Peccatorum",
      typ: "Friluftsobjekt",
      start: "1898-06-14",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Invigdes som del av museet troligen i samband med föreningens årsmöte (14 juni)."
    },
    {
      id: 27,
      namn: "Sydsvenska konstslöjdutställningen i Karlskrona",
      typ: "Tillfällig",
      start: "1899-09-01",
      slut: "1899-09-20",
      lokal: "I Karlskrona",
      kommentar: ""
    },
    {
      id: 28,
      namn: "Pariserkollektionen på Kulturen",
      typ: "Tillfällig",
      start: "1900-02-10",
      slut: "1900-03-25",
      lokal: "Borgarhuset (Borgarsalen)",
      kommentar: "Utställningen skulle egentligen ha visats på Världsutställningen i Paris 1900, men pga. vissa villkor i censurbestämmelserna kunde den inte komma med."
    },
    {
      id: 29,
      namn: "Pariserkollektionen på turné i Göteborg",
      typ: "Tillfällig",
      start: "1900-04-05",
      slut: "1900-04-21",
      lokal: "I Göteborg på Valand",
      kommentar: ""
    },
    {
      id: 30,
      namn: "Pariserkollektionen på turné i Stockholm",
      typ: "Tillfällig",
      start: "1900-04-23",
      slut: "1900-05-10",
      lokal: "I Stockholm vid Kungsträdgården",
      kommentar: ""
    },
    {
      id: 31,
      namn: "Pariserkollektionen på turné i Norrköping",
      typ: "Tillfällig",
      start: "1900-05-18",
      slut: "1900-05-27",
      lokal: "I Norrköping i stadshussalongen",
      kommentar: ""
    },
    {
      id: 32,
      namn: "Konsttextilutställning",
      typ: "Tillfällig",
      start: "1900-11-dd",
      slut: "åååå-mm-dd",
      lokal: "Borgarhuset (Borgarsalen)",
      kommentar: ""
    },
    {
      id: 33,
      namn: "Dekorativa utkast och kompositioner",
      typ: "Tillfällig",
      start: "1901-02-03",
      slut: "1901-02-17",
      lokal: "Borgarhuset (Borgarsalen)",
      kommentar: ""
    },
    {
      id: 34,
      namn: "Östra Göingeutställning",
      typ: "Tillfällig",
      start: "1901-04-dd",
      slut: "1901-04-dd",
      lokal: "Borgarhuset (Borgarsalen)",
      kommentar: ""
    },
    {
      id: 35,
      namn: "Konstutställning",
      typ: "Tillfällig",
      start: "1901-05-26",
      slut: "1901-06-16",
      lokal: "Borgarhuset (Borgarsalen)",
      kommentar: ""
    },
    {
      id: 36,
      namn: "Allmänna sydsvenska konstslöjdutställningen i Halmstad",
      typ: "Tillfällig",
      start: "1901-09-26",
      slut: "1901-10-09",
      lokal: "I Halmstad",
      kommentar: ""
    },
    {
      id: 37,
      namn: "Den historiska vapenutställningen",
      typ: "Tillfällig",
      start: "1902-11-22",
      slut: "1902-12-31",
      lokal: "Borgarhuset",
      kommentar: ""
    },
    {
      id: 38,
      namn: "Allmänna sydsvenska konstslöjdutställningen i Jönköping",
      typ: "Tillfällig",
      start: "1904-06-18",
      slut: "1904-07-10",
      lokal: "I Jönköping",
      kommentar: ""
    },
    {
      id: 39,
      namn: "Egyptiska textila gravfynd",
      typ: "Tillfällig",
      start: "1904-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Herrehuset (Bibliotekssalen)",
      kommentar: ""
    },
    {
      id: 40,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1904-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Herrehuset (Bibliotekssalen)",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 41,
      namn: "Årets grundgrävningsfynd",
      typ: "Tillfällig",
      start: "1904-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Borgarhuset",
      kommentar: ""
    },
    {
      id: 42,
      namn: "Möbelarkitekten C. Andréns utställning",
      typ: "Tillfällig",
      start: "1905-11-25",
      slut: "1905-11-26",
      lokal: "Locus Peccatorum",
      kommentar: ""
    },
    {
      id: 43,
      namn: "Julutställning",
      typ: "Tillfällig",
      start: "1905-12-12",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: ""
    },
    {
      id: 44,
      namn: "Förvärven från Hammerska och Nilssonska auktionerna",
      typ: "Tillfällig",
      start: "1906-03-07",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 45,
      namn: "Sydsvenska konstslöjdutställningen i Kristianstad",
      typ: "Tillfällig",
      start: "1906-09-15",
      slut: "1906-10-07",
      lokal: "I Kristianstad, Östra folkskolan",
      kommentar: ""
    },
    {
      id: 46,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1906-12-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 47,
      namn: "Keramiska samlingen",
      typ: "Basutställning",
      start: "1906-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Herrehuset",
      kommentar: "Först enbart svensk keramik, sedermera (1916+) föremål från flera andra länder, t.ex. Tyskland, nordafrika, Panama, Costa Rica, Nya Mexico, Belgien, Italien, Spanien, Portugal etc."
    },
    {
      id: 48,
      namn: "Nordenstedtska huset",
      typ: "Friluftsobjekt",
      start: "1907-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Benämndes tidigare \"Intendentbostaden\"; blev en del av Kulturens friluftsmuseum genom förvärvet av fastigheten år 1907"
    },
    {
      id: 49,
      namn: "Rustmästarbostaden",
      typ: "Friluftsobjekt",
      start: "1907-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Blev en del av Kulturens friluftsmuseum genom förvärvet av fastigheten år 1907"
    },
    {
      id: 50,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1907-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 51,
      namn: "Schlyterska huset",
      typ: "Friluftsobjekt",
      start: "1908-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 52,
      namn: "Dekanhuset",
      typ: "Friluftsobjekt",
      start: "1908-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Benämndes tidigare \"Kalendehuset\", \"Dekanresidenset\""
    },
    {
      id: 53,
      namn: "Ystadhuset",
      typ: "Friluftsobjekt",
      start: "1908-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 54,
      namn: "Slaget i Sundet 1658",
      typ: "Tillfällig",
      start: "1908-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 55,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1908-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 56,
      namn: "Konstindustriutställningen i Stockholm",
      typ: "Tillfällig",
      start: "1909-06-04",
      slut: "1909-09-30",
      lokal: "I Stockholm",
      kommentar: ""
    },
    {
      id: 57,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1909-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 58,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1910-06-27",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 59,
      namn: "Kyrklig utställning i Östersund",
      typ: "Tillfällig",
      start: "1910-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Östersund",
      kommentar: ""
    },
    {
      id: 60,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1911-06-10",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 61,
      namn: "S:ta Maria Minor",
      typ: "Friluftsobjekt",
      start: "1911-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "1914 avslutades arbetet med återuppbyggnaden av Sankta Maria Minor i friluftsmuseet."
    },
    {
      id: 62,
      namn: "Berlingska huset",
      typ: "Friluftsobjekt",
      start: "1911-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 63,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1912-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 64,
      namn: "Skånsk textilkonst",
      typ: "Tillfällig",
      start: "1913-10-03",
      slut: "1913-10-30",
      lokal: "Locus Peccatorum",
      kommentar: ""
    },
    {
      id: 65,
      namn: "Wahlbomska huset",
      typ: "Friluftsobjekt",
      start: "1913-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 66,
      namn: "Halmstadstornet",
      typ: "Friluftsobjekt",
      start: "1913-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 67,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1913-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 68,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1914-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 69,
      namn: "Deltagande i Baltiska utställningen i Malmö",
      typ: "Tillfällig",
      start: "1914-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Malmö",
      kommentar: ""
    },
    {
      id: 70,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1915-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 71,
      namn: "Generalkonsul J. F. Anderssons etnografiska, historiska och arkeologiska samlingar",
      typ: "Tillfällig",
      start: "1916-12-14",
      slut: "1916-12-16",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 72,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1916-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 73,
      namn: "Museets byggnadsritningar",
      typ: "Tillfällig",
      start: "1916-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 74,
      namn: "Osasiatiska rustningar",
      typ: "Tillfällig",
      start: "1916-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 75,
      namn: "Arkeologiska undersökningar i Lund",
      typ: "Tillfällig",
      start: "1917-06-24",
      slut: "åååå-mm-dd",
      lokal: "Borgarhuset (Gripsholmsrummet)",
      kommentar: ""
    },
    {
      id: 76,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1917-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 77,
      namn: "von Schweingelska Meissensamlingen från Dresden",
      typ: "Tillfällig",
      start: "1917-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Samlingen såldes därefter på Bukowskiauktion i Stockholm."
    },
    {
      id: 78,
      namn: "En större samling tavlor och andra konstverk",
      typ: "Tillfällig",
      start: "1918-04-dd",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 79,
      namn: "Hautelissevävda tapeter, orientaliska mattor, egyptisk-koptiska vävnader",
      typ: "Tillfällig",
      start: "1918-05-dd",
      slut: "1919-06-dd",
      lokal: "Gamla universitetsbiblioteket",
      kommentar: ""
    },
    {
      id: 80,
      namn: "Konstutställning: Anders Montan",
      typ: "Tillfällig",
      start: "1918-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 81,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1918-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 82,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1919-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 83,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1920-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 84,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1921-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 85,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1922-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 86,
      namn: "Bosmålatorpet",
      typ: "Basutställning",
      start: "1923-07-22",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Benämndes tidigare \"Daggans stuga\", \"Soldattorpet\"; Sydsvenskan 1923-07-21: \"Kulturhistoriska museet har till i morgon fått en ny sevärdhet. Det är det lilla torpet, som i vintras förvärvades från Urshult uppe i den gamla Värendsbygden, vilket nu står färdigt.\""
    },
    {
      id: 87,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1923-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 88,
      namn: "Östarpsmuseet (Kulturens Östarp)",
      typ: "Basutställning",
      start: "1924-08-02",
      slut: "åååå-mm-dd",
      lokal: "Kulturens Östarp",
      kommentar: ""
    },
    {
      id: 89,
      namn: "Solfjädrar",
      typ: "Tillfällig",
      start: "1924-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Borgarhuset (Borgarsalen)",
      kommentar: ""
    },
    {
      id: 90,
      namn: "Arbetarbostaden",
      typ: "Friluftsobjekt",
      start: "1924-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Blir formellt sett en del av friluftsmuseet redan 1924, då Kulturen köper fastigheten. Från 1964 används bostaden som studentbostad. 1975 byggs den om till lekskola. 2002 blir interiören en utställning över en arbetarbostad på 1930-talet."
    },
    {
      id: 91,
      namn: "Thomanderska huset",
      typ: "Basutställning",
      start: "1925-08-24",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 92,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1925-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Locus Peccatorum",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 93,
      namn: "Skånska konsttextilier",
      typ: "Tillfällig",
      start: "1926-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Thomanderska huset",
      kommentar: ""
    },
    {
      id: 94,
      namn: "Nya riket till Ptolomæisk tid – egyptisk utställning",
      typ: "Tillfällig",
      start: "1926-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Thomanderska huset",
      kommentar: ""
    },
    {
      id: 95,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1926-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Thomanderska huset",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 96,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1927-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset, Västra Vrams prästgård",
      kommentar: "Konstslöjdanstaltens elevarbeten; Lindforska huset skrivs \"Lindforss'ska huset\""
    },
    {
      id: 97,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1928-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (Gobelinsalen)",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 98,
      namn: "Kyrklig textilutställning i Stockholm",
      typ: "Tillfällig",
      start: "1929-01-dd",
      slut: "1929-02-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 99,
      namn: "Västra Vrams prästgård",
      typ: "Basutställning",
      start: "1929-08-09",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Invigdes troligen som en del av museet samma dag som Vita huset (och utställningen \"Konst och konstslöjd – sydsvensk konst-, konstslöjd- och hemslöjd\") öppnades."
    },
    {
      id: 100,
      namn: "Allmogehallen",
      typ: "Friluftsobjekt",
      start: "1929-08-09",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Invigdes troligen som en del av museet samma dag som Vita huset (och utställningen \"Konst och konstslöjd – sydsvensk konst-, konstslöjd- och hemslöjd\") öppnades."
    },
    {
      id: 101,
      namn: "Konst och konstslöjd – sydsvensk konst-, konstslöjd- och hemslöjd",
      typ: "Tillfällig",
      start: "1929-08-09",
      slut: "1929-09-15",
      lokal: "Vita huset",
      kommentar: "Öppnades i närvaro av kronprinsen. Till utställningen vävdes tre av GAN:s folkvisebilder i nära samarbete med konstnären och även den stora \"Finnsagan\"."
    },
    {
      id: 102,
      namn: "Vita huset",
      typ: "Friluftsobjekt",
      start: "1929-08-09",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "\"Vita huset\" blev ett smeknamn som fastnade. Byggnaden benämndes tidigare \"Sjögrenska fastigheten\" men kallades i folkmun \"Bondpinan\"."
    },
    {
      id: 103,
      namn: "Skånskt allmogeliv",
      typ: "Basutställning",
      start: "1929-08-09",
      slut: "2022-09-01",
      lokal: "Allmogehallen (ovanvåningen)",
      kommentar: "Livet i de skånska byarna och gårdarna; stuginteriörerna ger en uppfattning om 1700-talets och det tidiga 1800-talets bostadsformer; Kulturens enda bevarade utställning från 1929"
    },
    {
      id: 104,
      namn: "Konstlsöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1929-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 105,
      namn: "De senaste årens keramiska förvärv",
      typ: "Tillfällig",
      start: "1929-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 106,
      namn: "Onsjöstugan",
      typ: "Basutställning",
      start: "1929-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 107,
      namn: "Helsingborg-Halmstadhuset",
      typ: "Friluftsobjekt",
      start: "1930-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 108,
      namn: "Konsttextil vandringsutställning (Tyskland)",
      typ: "Tillfällig",
      start: "1930-mm-dd",
      slut: "1933-05-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 109,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1930-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 110,
      namn: "Rättsliga och kommunala livet",
      typ: "Tillfällig",
      start: "1930-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Brahehuset",
      kommentar: ""
    },
    {
      id: 111,
      namn: "Brahehuset",
      typ: "Friluftsobjekt",
      start: "1930-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "I årsredogörelse 1930–1931: \"det Braheska huset\""
    },
    {
      id: 112,
      namn: "Tibetansk religiös konst",
      typ: "Tillfällig",
      start: "1931-11-21",
      slut: "1931-12-31",
      lokal: "Vita huset",
      kommentar: "\"i Vita husets södra överljussal\""
    },
    {
      id: 113,
      namn: "Utställning på Konstindustrimuseet i Köpenhamn",
      typ: "Tillfällig",
      start: "1931-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 114,
      namn: "Hygien och hälsovård",
      typ: "Tillfällig",
      start: "1931-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Brahehuset",
      kommentar: ""
    },
    {
      id: 115,
      namn: "Sjöfart",
      typ: "Tillfällig",
      start: "1931-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Allmogehallen",
      kommentar: ""
    },
    {
      id: 116,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1931-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 117,
      namn: "Utställning av museets adresser och gåvor till jubelfesten",
      typ: "Tillfällig",
      start: "1932-11-30",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Museet firar 50 år."
    },
    {
      id: 118,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1932-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 119,
      namn: "Persiska mattor",
      typ: "Tillfällig",
      start: "1932-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 120,
      namn: "Konserveringsutställning",
      typ: "Tillfällig",
      start: "1932-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 121,
      namn: "Gustav II Adolfs utställning",
      typ: "Tillfällig",
      start: "1932-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 122,
      namn: "Orientaliska mattor",
      typ: "Tillfällig",
      start: "1933-06-18",
      slut: "1933-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 123,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1933-06-18",
      slut: "1933-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 124,
      namn: "Oljemålningar och skisser av Bengt Nordenberg",
      typ: "Tillfällig",
      start: "1934-03-04",
      slut: "1934-03-11",
      lokal: "Vita huset (södra överljussalen)",
      kommentar: ""
    },
    {
      id: 125,
      namn: "Leksaker och barnkläder",
      typ: "Tillfällig",
      start: "1934-05-06",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (södra överljussalen)",
      kommentar: ""
    },
    {
      id: 126,
      namn: "Dockutställning",
      typ: "Tillfällig",
      start: "1934-05-06",
      slut: "1934-05-31",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 127,
      namn: "Konstslöjdanstaltens arbeten",
      typ: "Tillfällig",
      start: "1934-06-17",
      slut: "1934-06-dd",
      lokal: "Vita huset (södra överljussalen)",
      kommentar: "Konstslöjdanstaltens elevarbeten."
    },
    {
      id: 128,
      namn: "Vad jorden gömmer",
      typ: "Tillfällig",
      start: "1934-11-17",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: "Kullurens enastående samlingar av jordfynd "
    },
    {
      id: 129,
      namn: "Separatutställning av arkivet",
      typ: "Tillfällig",
      start: "1937-05-01",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 130,
      namn: "Bonde och bygd",
      typ: "Tillfällig",
      start: "1937-06-19",
      slut: "1937-06-27",
      lokal: "På lantbruksmässa i Malmö",
      kommentar: "I samarbete med Sydsvenska Dagbladet Snällposten."
    },
    {
      id: 131,
      namn: "Den stora silverskatten",
      typ: "Tillfällig",
      start: "1938-04-18",
      slut: "1938-05-02",
      lokal: "Vita huset (vapensalen)",
      kommentar: "Utställning av \"den ryktbara Loheskatten från Stockholm\"; \"Besökssiffran under de femton dagarna uppgick till 7.006 personer\""
    },
    {
      id: 132,
      namn: "Sydsvenskt bonadsmåleri och folklig konst",
      typ: "Tillfällig",
      start: "1938-06-dd",
      slut: "1940-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 133,
      namn: "Svensk dryckessed",
      typ: "Tillfällig",
      start: "1938-10-13",
      slut: "1938-10-16",
      lokal: "Uppgift saknas",
      kommentar: "I samband med Centralföreningens för nykterhetsundervisning upplysningskurs i Lund."
    },
    {
      id: 134,
      namn: "Ett färgeri under 200 år",
      typ: "Tillfällig",
      start: "1938-mm-dd",
      slut: "1938-mm-dd",
      lokal: "Allmogehallen",
      kommentar: "I samband med firandet av AB C. 0. Borgs Söners fabrikers 200-årsjubileum."
    },
    {
      id: 135,
      namn: "Svensk dryckessed (Malmö)",
      typ: "Tillfällig",
      start: "1939-08-dd",
      slut: "1939-08-dd",
      lokal: "Rådhuset i Malmö",
      kommentar: ""
    },
    {
      id: 136,
      namn: "Sydsvensk follklig konst",
      typ: "Tillfällig",
      start: "1940-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 137,
      namn: "Stolen genom 300 år",
      typ: "Tillfällig",
      start: "1941-06-dd",
      slut: "1941-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 138,
      namn: "Folkskolan 100 år",
      typ: "Tillfällig",
      start: "1942-mm-dd",
      slut: "1942-mm-dd",
      lokal: "Vita huset (\"övervåningen\")",
      kommentar: "Folkskolans 100-åtsminne firades genom en skolutställning på museet."
    },
    {
      id: 139,
      namn: "Betalningsmedlens historia",
      typ: "Tillfällig",
      start: "1942-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Ystadhuset",
      kommentar: ""
    },
    {
      id: 140,
      namn: "Högreståndsdräkter från 1700-talet",
      typ: "Tillfällig",
      start: "1942-mm-dd",
      slut: "1943-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "\"utgöra nu en av museets värdefullaste samlingar\""
    },
    {
      id: 141,
      namn: "Utställning åt Kaninavelsföreningen",
      typ: "Tillfällig",
      start: "1942-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 142,
      namn: "Utställning åt Kaninavelsföreningen",
      typ: "Tillfällig",
      start: "1943-05-23",
      slut: "1943-05-25",
      lokal: "Uppgift saknas",
      kommentar: "Anordnades av Kaninavelsföreningen."
    },
    {
      id: 143,
      namn: "De äldsta förvärven (från 1882)",
      typ: "Tillfällig",
      start: "1943-11-18",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 144,
      namn: "Folkliv på Österlen (Frans Lindbergs akvareller och teckningar)",
      typ: "Tillfällig",
      start: "1943-mm-dd",
      slut: "1943-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 145,
      namn: "Korsstygnsbroderier från mormors tid",
      typ: "Tillfällig",
      start: "1943-mm-dd",
      slut: "1944-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 146,
      namn: "Oljetryck",
      typ: "Tillfällig",
      start: "1943-mm-dd",
      slut: "1944-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 147,
      namn: "Spegeln genom tiderna",
      typ: "Tillfällig",
      start: "1943-mm-dd",
      slut: "1944-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 148,
      namn: "Utställning åt Kaninavelsföreningen",
      typ: "Tillfällig",
      start: "1944-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 149,
      namn: "Plock bland skrock",
      typ: "Tillfällig",
      start: "1945-01-06",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 150,
      namn: "Skånska allmogebroderier på ylle",
      typ: "Tillfällig",
      start: "1945-10-30",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 151,
      namn: "Boktryckarekonstens och stilgjuteriets tekniska utveckling",
      typ: "Tillfällig",
      start: "1945-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 152,
      namn: "Lundensiskt silversmide",
      typ: "Tillfällig",
      start: "1945-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "\"I samband med domkyrkans 800-årsjubileum…\""
    },
    {
      id: 153,
      namn: "Riksdalermynt från Gustav Vasa fram till 1875",
      typ: "Tillfällig",
      start: "1945-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "\"anordnades av samlaren köpman A. Fr. Forsslund\""
    },
    {
      id: 154,
      namn: "Det lustiga museet, parodiutställning",
      typ: "Tillfällig",
      start: "1946-09-dd",
      slut: "1946-09-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 155,
      namn: "Utställning av de under kriget evakuerade textilsamlingarna",
      typ: "Tillfällig",
      start: "1946-10-30",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 156,
      namn: "Fem fordømte aar",
      typ: "Tillfällig",
      start: "1946-mm-dd",
      slut: "1946-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Av Bymuseet i Köpemhamn."
    },
    {
      id: 157,
      namn: "Skånska skisser av Anders Montan",
      typ: "Tillfällig",
      start: "1946-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 158,
      namn: "Fröken Ammilons testamentariska gåva",
      typ: "Tillfällig",
      start: "1946-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 159,
      namn: "Beredskapsårens vapen",
      typ: "Basutställning",
      start: "1947-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "\"I samband med Lunds Befälsutbildningsförenings 35-årsjubileum …\""
    },
    {
      id: 160,
      namn: "Häradsskrivare Hans Collins testamentariska gåva",
      typ: "Tillfällig",
      start: "1947-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 161,
      namn: "Hylla Smedja",
      typ: "Basutställning",
      start: "1947-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 162,
      namn: "Prov på smide ur museets samlingar",
      typ: "Tillfällig",
      start: "1947-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Arrangerad i öppna bodar i museiparken."
    },
    {
      id: 163,
      namn: "Nordisk Bokkonst 1947",
      typ: "Tillfällig",
      start: "1948-10-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 164,
      namn: "Museets senaste nyförvärv",
      typ: "Tillfällig",
      start: "1948-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 165,
      namn: "Leksaksutställning",
      typ: "Tillfällig",
      start: "1948-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 166,
      namn: "Utställning av duvor",
      typ: "Tillfällig",
      start: "1948-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "\"I början av året anordnade Svenska Duvavelsföreningens Lundaavdelning en utställning av duvor…\""
    },
    {
      id: 167,
      namn: "Stickningsutställning",
      typ: "Tillfällig",
      start: "1948-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "\"mot slutet av året visade Damtidningen Femina en livligt uppskattad stickningsutställning\""
    },
    {
      id: 168,
      namn: "Staden Lund i skala 1:1000",
      typ: "Tillfällig",
      start: "1949-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 169,
      namn: "Skulptur i natur",
      typ: "Tillfällig",
      start: "1950-08-dd",
      slut: "1950-09-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Anordnad av A.B. Gunnar Fredriksons Skulpturförmedling (Stockholm)."
    },
    {
      id: 170,
      namn: "Fotoutställning",
      typ: "Tillfällig",
      start: "1951-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Anordnad av Lunds fotoklubb i samband med den s.k. Skåneträffen."
    },
    {
      id: 171,
      namn: "Alla tiders skor",
      typ: "Tillfällig",
      start: "1952-03-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 172,
      namn: "Säkerhet i hemmet",
      typ: "Tillfällig",
      start: "1952-10-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Anordnad av ett utskott inom kommittén \"Lund, en säkerhetens mönsterstad\""
    },
    {
      id: 173,
      namn: "Folklivsmåleri av Ernst Gullberg",
      typ: "Tillfällig",
      start: "1953-10-17",
      slut: "1953-11-01",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 174,
      namn: "Dockor",
      typ: "Tillfällig",
      start: "1953-11-08",
      slut: "1953-11-19",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 175,
      namn: "Moderna textilier",
      typ: "Tillfällig",
      start: "1953-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 176,
      namn: "Foton från fyra vänortsstäder",
      typ: "Tillfällig",
      start: "1953-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 177,
      namn: "Famla kartor",
      typ: "Tillfällig",
      start: "1953-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 178,
      namn: "Glassamlingarna",
      typ: "Basutställning",
      start: "1954-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Borgarhuset",
      kommentar: ""
    },
    {
      id: 179,
      namn: "Äldre målningar ur museets samlingar",
      typ: "Tillfällig",
      start: "1954-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 180,
      namn: "Stortorgsfynden med föremål från lundagrävningar",
      typ: "Tillfällig",
      start: "1954-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 181,
      namn: "Graficus",
      typ: "Tillfällig",
      start: "1955-03-27",
      slut: "1955-04-17",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 182,
      namn: "Allmogebonader",
      typ: "Tillfällig",
      start: "1955-mm-dd",
      slut: "1955-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 183,
      namn: "De äldsta förvärven (från 1882)",
      typ: "Tillfällig",
      start: "1955-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 184,
      namn: "Sydsvenskt folkligt måleri",
      typ: "Tillfällig",
      start: "1955-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 185,
      namn: "Peruansk keramik",
      typ: "Tillfällig",
      start: "1955-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Av föreningen Graphica med Ung grafisk konst."
    },
    {
      id: 186,
      namn: "Teckningar från skolor i England, Australien och Sydamerika",
      typ: "Tillfällig",
      start: "1955-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Av Internationella Konstkongressen ICA med teckningar från skolor i England, Australien och Sydamerika."
    },
    {
      id: 187,
      namn: "Tidmätning",
      typ: "Tillfällig",
      start: "1956-mm-dd",
      slut: "1956-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 188,
      namn: "Koppen genom tiderna",
      typ: "Tillfällig",
      start: "1956-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 189,
      namn: "Klassisk terrakotta",
      typ: "Tillfällig",
      start: "1956-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 190,
      namn: "Simontorpsutställningen",
      typ: "Tillfällig",
      start: "1956-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 191,
      namn: "De första förvärven i Huaröd och Simrishamn",
      typ: "Tillfällig",
      start: "1957-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 192,
      namn: "Vagnmakeri",
      typ: "Tillfällig",
      start: "1957-mm-dd",
      slut: "1957-mm-dd",
      lokal: "Weibullska huset",
      kommentar: ""
    },
    {
      id: 193,
      namn: "Ung grafik",
      typ: "Tillfällig",
      start: "1957-mm-dd",
      slut: "1957-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Anordnad av föreningen Graphica."
    },
    {
      id: 194,
      namn: "1880-talet",
      typ: "Tillfällig",
      start: "1957-mm-dd",
      slut: "1957-mm-dd",
      lokal: "Vita huset (överljussalarna)",
      kommentar: "Tillfällig utställning i samband med 75-årsjubileet."
    },
    {
      id: 195,
      namn: "Masker",
      typ: "Basutställning",
      start: "1957-mm-dd",
      slut: "1957-mm-dd",
      lokal: "Vita huset, Medeltidshallen",
      kommentar: "Benkt-Åke Benktssons masker."
    },
    {
      id: 196,
      namn: "Hörselfrämjandet (\"i samband med Hörselfrämjandet anordnades…\")",
      typ: "Tillfällig",
      start: "1958-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 197,
      namn: "Juniormuseet",
      typ: "Tillfällig",
      start: "1959-06-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 198,
      namn: "1809 års regeringsform: 150-årsjubileum",
      typ: "Tillfällig",
      start: "1959-11-16",
      slut: "1959-11-31",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 199,
      namn: "Oljetryck från farfars tid",
      typ: "Tillfällig",
      start: "1959-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 200,
      namn: "Nyförvärv",
      typ: "Tillfällig",
      start: "1959-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 201,
      namn: "Skånskt jordbruk",
      typ: "Basutställning",
      start: "1960-01-01",
      slut: "2022-09-01",
      lokal: "Allmogehallen",
      kommentar: "Inget svenskt landskap är så präglat av bilden av sitt jordbruk som Skåne och i synnerhet landskapets sydvästra del, som har Sveriges i särklass mest produktiva jordar."
    },
    {
      id: 202,
      namn: "Sydsvenskt fiske",
      typ: "Basutställning",
      start: "1960-01-01",
      slut: "2022-09-01",
      lokal: "Allmogehallen",
      kommentar: ""
    },
    {
      id: 203,
      namn: "Benkt-Åke Benktssons masker (etnografisk utställning)",
      typ: "Tillfällig",
      start: "1960-05-13",
      slut: "1961-mm-dd",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 204,
      namn: "Skånska souvenirer och gammal allmogeslöjd",
      typ: "Tillfällig",
      start: "1960-08-dd",
      slut: "1960-09-dd",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 205,
      namn: "Nordiska vävnader",
      typ: "Tillfällig",
      start: "1960-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 206,
      namn: "Keramik från Andersson & Johansson i Höganäs",
      typ: "Tillfällig",
      start: "1961-04-10",
      slut: "1961-07-02",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 207,
      namn: "Tidmätningens historia",
      typ: "Tillfällig",
      start: "1961-06-05",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen)",
      kommentar: ""
    },
    {
      id: 208,
      namn: "Egypten",
      typ: "Basutställning",
      start: "1961-06-05",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen)",
      kommentar: ""
    },
    {
      id: 209,
      namn: "Trätäljareturnén",
      typ: "Tillfällig",
      start: "1961-07-02",
      slut: "1961-mm-dd",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "En utställning av träsnittsgrafik och träskulptur, ordnad genom Folkrörelsernas konstfrämjande."
    },
    {
      id: 210,
      namn: "Lunds äldsta bebyggelse",
      typ: "Tillfällig",
      start: "1961-09-30",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: "Fynden från sommarens stora grävning på Thule-tomten."
    },
    {
      id: 211,
      namn: "Skånskt dräktsilver",
      typ: "Tillfällig",
      start: "1961-09-30",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: "Anordnades gemensamt med Österlens museum i Simrishamn."
    },
    {
      id: 212,
      namn: "Thulegrävningen - Kvarteret Färgaren 22",
      typ: "Tillfällig",
      start: "1961-09-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 213,
      namn: "Stormaktstidens boktryck",
      typ: "Tillfällig",
      start: "1961-12-11",
      slut: "1962-02-dd",
      lokal: "Uppgift saknas",
      kommentar: "Ett led i firandet av Kungliga bibliotekets 300-årsjubileum; från Kungliga Biblioteket och Nordiska museet."
    },
    {
      id: 214,
      namn: "Folkkonst och smide",
      typ: "Tillfällig",
      start: "1961-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen)",
      kommentar: ""
    },
    {
      id: 215,
      namn: "Leksaksutställning",
      typ: "Tillfällig",
      start: "1961-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen)",
      kommentar: ""
    },
    {
      id: 216,
      namn: "Kulturens nyheter",
      typ: "Tillfällig",
      start: "1961-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 217,
      namn: "Svensk lag 1280–1962",
      typ: "Tillfällig",
      start: "1962-03-09",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Från Kungliga biblioteket och på initiativ av professor Gerhard Hafström."
    },
    {
      id: 218,
      namn: "Skånsk hemslöjd",
      typ: "Tillfällig",
      start: "1962-05-01",
      slut: "1962-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Anordnad av Malmöhus läns hemslöjdsmagasin."
    },
    {
      id: 219,
      namn: "Skånska glasbruket 1691–1762",
      typ: "Tillfällig",
      start: "1962-05-07",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Kristianstads museum, landsantikvarien i Kristianstads län och Hälsingborgs museum."
    },
    {
      id: 220,
      namn: "Friaregåvor och trolovningsskänker",
      typ: "Tillfällig",
      start: "1962-08-12",
      slut: "1962-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 221,
      namn: "Dukade bord",
      typ: "Tillfällig",
      start: "1962-11-24",
      slut: "1962-11-26",
      lokal: "Vita huset (Auditoriet)",
      kommentar: "Anordnad av \"10 akademikerfruar … till förmån för Inomeuropeiska missions verksamhet\""
    },
    {
      id: 222,
      namn: "Från knävling till hålkort, Håkan Ohlssons boktryckeri 100 år 1962",
      typ: "Tillfällig",
      start: "1962-mm-dd",
      slut: "1963-02-28",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 223,
      namn: "Glas och konst från Småland",
      typ: "Tillfällig",
      start: "1963-03-30",
      slut: "1963-04-15",
      lokal: "Uppgift saknas",
      kommentar: "Anordnad i samarbete med sammanslutningarna Smålands Gille och Smålands Minne."
    },
    {
      id: 224,
      namn: "Textila klenoder i Lundahem",
      typ: "Tillfällig",
      start: "1963-04-20",
      slut: "1963-05-06",
      lokal: "Vita huset (översta våningen)",
      kommentar: ""
    },
    {
      id: 225,
      namn: "Korgar och textilier",
      typ: "Tillfällig",
      start: "1963-05-01",
      slut: "1963-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "I samarbete med Kristianstads och Malmöhus läns hemslöjdsföreningar."
    },
    {
      id: 226,
      namn: "Kartan och samhället",
      typ: "Tillfällig",
      start: "1963-05-16",
      slut: "1963-09-15",
      lokal: "Uppgift saknas",
      kommentar: "Anordnad av Rikets allmänna kartverk."
    },
    {
      id: 227,
      namn: "Hökeriet",
      typ: "Basutställning",
      start: "1963-06-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 228,
      namn: "Modern grafik",
      typ: "Tillfällig",
      start: "1963-10-27",
      slut: "1963-11-17",
      lokal: "Uppgift saknas",
      kommentar: "Anordnad av föreningen Graphica."
    },
    {
      id: 229,
      namn: "Illustrerade böcker",
      typ: "Tillfällig",
      start: "1963-11-11",
      slut: "1963-11-17",
      lokal: "Uppgift saknas",
      kommentar: "Under Bokens vecka. Böckerna hade \"välvilligt ställts till förfogande av Allhems förlag\""
    },
    {
      id: 230,
      namn: "Kartan som kulturdokument",
      typ: "Tillfällig",
      start: "1964-04-27",
      slut: "1964-09-20",
      lokal: "Uppgift saknas",
      kommentar: "Apotekare Uno Nordholms samling av äldre kartor."
    },
    {
      id: 231,
      namn: "Gamla koppar ur Kulturens samlingar",
      typ: "Tillfällig",
      start: "1964-05-01",
      slut: "1964-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Tillsammans med textilier från Malmöhus läns hemslöjdsförening."
    },
    {
      id: 232,
      namn: "Bygga och bevara Lunds stadskärna",
      typ: "Tillfällig",
      start: "1964-09-28",
      slut: "1964-11-15",
      lokal: "Uppgift saknas",
      kommentar: "Av Stadsarkitektkontoret."
    },
    {
      id: 233,
      namn: "Museet fotograferar",
      typ: "Tillfällig",
      start: "1964-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Av Nordiska museet."
    },
    {
      id: 234,
      namn: "Kungl. Svea Hovrätt 1614–1964, 300-årsjubileum",
      typ: "Tillfällig",
      start: "1965-02-08",
      slut: "1965-03-07",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Lunds universitet och Kungl. Svea hovrätt, finansierad av Lunds universitet."
    },
    {
      id: 235,
      namn: "Kulturen kommer till Stockholm",
      typ: "Tillfällig",
      start: "1965-04-02",
      slut: "1965-05-02",
      lokal: "I Svenska Handelsbankens lokaler vid Sergels torg",
      kommentar: ""
    },
    {
      id: 236,
      namn: "Gamla schattérsömmar",
      typ: "Tillfällig",
      start: "1965-04-28",
      slut: "1965-05-16",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Anordnad av Malmöhus läns hemslöjdsförening."
    },
    {
      id: 237,
      namn: "Gamla bolstervar och ljusstakar",
      typ: "Tillfällig",
      start: "1965-05-16",
      slut: "1965-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "I samarbete med Malmöhus läns hemslöjdsförening."
    },
    {
      id: 238,
      namn: "Mjölkens käril",
      typ: "Tillfällig",
      start: "1965-10-01",
      slut: "1965-11-15",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 239,
      namn: "Skånsk stad – Lund, stadsmiljö i förvandling",
      typ: "Tillfällig",
      start: "1965-12-10",
      slut: "1967-02-28",
      lokal: "Vita huset",
      kommentar: "Anordnad av Skånes Hembygdsförbund."
    },
    {
      id: 240,
      namn: "Från Märta Måås-Fjetterström till Gösta Adrian-Nilsson 1896–1930",
      typ: "Tillfällig",
      start: "1965-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 241,
      namn: "Jugendtextil på Kulturen, KSAL",
      typ: "Tillfällig",
      start: "1965-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 242,
      namn: "Att överleva",
      typ: "Tillfällig",
      start: "1966-04-02",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Visade det material, som av dr Zygmunt Lakocinski insamlades, då polska koncentrationslägerfångar togs emot i Lund vid krigsslutet 1945"
    },
    {
      id: 243,
      namn: "Att bo på Norra Fäladen",
      typ: "Tillfällig",
      start: "1966-04-15",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Ordnades av Lunds stad i samarbete med de organisationer som förberett exploateringen av det stora nya bostadsområdet norr om staden."
    },
    {
      id: 244,
      namn: "Arkeologi i stadskärnan, kvarteret Botulf 12",
      typ: "Tillfällig",
      start: "1966-04-28",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "En utställning av de viktigaste fynden från utgrävningen på tomten för den nya stadshallen."
    },
    {
      id: 245,
      namn: "Gamla möbler – nya tyger",
      typ: "Tillfällig",
      start: "1966-05-01",
      slut: "1966-09-25",
      lokal: "Kulturens Östarp (Östarpshallen), sedermera i Vita huset (start 17 okt)",
      kommentar: "Ordnades i samarbete med Malmöhus läns hemslöjd."
    },
    {
      id: 246,
      namn: "Kartonger till bildvävnader av Hilding Linnqvist",
      typ: "Tillfällig",
      start: "1966-05-15",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 247,
      namn: "En hundraårig museisamling",
      typ: "Tillfällig",
      start: "1966-05-22",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Maa. De skånska landskapens historiska och arkeologiska förenings 100-årsjubileum."
    },
    {
      id: 248,
      namn: "1700-talskläder till fest och vardag",
      typ: "Tillfällig",
      start: "1966-07-15",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (mellanvåningen)",
      kommentar: ""
    },
    {
      id: 249,
      namn: "Exotiska dräkter (särskilt från Ostasien)",
      typ: "Tillfällig",
      start: "1966-07-dd",
      slut: "1966-07-dd",
      lokal: "Textilhallen",
      kommentar: "Gjordes av sommarpraktikanter, \"Utställningen, som tilldragit sig stor uppmärksamhet fick hänga kvar hela året.\""
    },
    {
      id: 250,
      namn: "Gamla möbler – nya tyger",
      typ: "Tillfällig",
      start: "1966-10-17",
      slut: "åååå-mm-dd",
      lokal: "Vita huset, dessförinnan i Östarpshallen",
      kommentar: ""
    },
    {
      id: 251,
      namn: "Hur det var för 50 år sedan",
      typ: "Tillfällig",
      start: "1966-11-15",
      slut: "åååå-mm-dd",
      lokal: "Sparbanken i Lund",
      kommentar: ""
    },
    {
      id: 252,
      namn: "Nyförvärv 1966",
      typ: "Tillfällig",
      start: "1966-12-dd",
      slut: "1966-12-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 253,
      namn: "Hilding Linnqvists gobelängkartonger",
      typ: "Tillfällig",
      start: "1966-mm-dd",
      slut: "1967-10-13",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 254,
      namn: "Skarpsinne och fantasti – Carl Adolph Agardh i Lund 1799-1835",
      typ: "Tillfällig",
      start: "1966-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 255,
      namn: "Myt och verklighet",
      typ: "Tillfällig",
      start: "1967-02-28",
      slut: "1967-03-20",
      lokal: "Vita huset",
      kommentar: "Ordnad med material från Kungl. livrustkammaren."
    },
    {
      id: 256,
      namn: "Utställning av föremål insamlade i Makedonien (1965)",
      typ: "Tillfällig",
      start: "1967-03-dd",
      slut: "1968-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 257,
      namn: "Textilier",
      typ: "Tillfällig",
      start: "1967-04-30",
      slut: "1967-10-01",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Malmöhus läns hemslöjdsförening."
    },
    {
      id: 258,
      namn: "Gammal mässing",
      typ: "Tillfällig",
      start: "1967-04-30",
      slut: "1967-10-01",
      lokal: "Kulturens Östarp (Östarpshallen), sedermera i Vita huset (start okt)",
      kommentar: ""
    },
    {
      id: 259,
      namn: "Fantastiska spetsar (gjorda av Milcǎ Půhona-Erimiásǒvá från Prag)",
      typ: "Tillfällig",
      start: "1967-07-06",
      slut: "1967-09-dd",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 260,
      namn: "Så åkte vi",
      typ: "Tillfällig",
      start: "1967-08-dd",
      slut: "åååå-mm-dd",
      lokal: "Skånemässan",
      kommentar: "Hur man reste i Sverige genom 500 år."
    },
    {
      id: 261,
      namn: "Konstnärsgillet i Lund",
      typ: "Tillfällig",
      start: "1967-09-30",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 262,
      namn: "Till Gaudi (fritt broderi för offentlig miljö, Ulla Schumacher-Percy)",
      typ: "Tillfällig",
      start: "1967-10-13",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 263,
      namn: "Gammal mässing",
      typ: "Tillfällig",
      start: "1967-10-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset, dessförinnan i Östarpshallen",
      kommentar: ""
    },
    {
      id: 264,
      namn: "Hantverk under 120 år",
      typ: "Tillfällig",
      start: "1967-11-dd",
      slut: "1968-02-15",
      lokal: "Vita huset (översta våningen)",
      kommentar: "Fabriks- och hantverksföreningen i Lund 120 år."
    },
    {
      id: 265,
      namn: "Wiwen Nilsson 70 år",
      typ: "Tillfällig",
      start: "1967-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Första gången som hela hans verksamhetstid belyses."
    },
    {
      id: 266,
      namn: "Gömt och glömt",
      typ: "Tillfällig",
      start: "1967-mm-dd",
      slut: "1967-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 267,
      namn: "Fajanser från Sölvesborg 1773–1798",
      typ: "Tillfällig",
      start: "1967-mm-dd",
      slut: "1967-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Resultatet av ett forsknings- och inventeringsarbete, som startades av Karlin på 1890-talet; visades \"våren och sommaren\""
    },
    {
      id: 268,
      namn: "GAN 1916–1925, collage och teckningar",
      typ: "Tillfällig",
      start: "1967-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 269,
      namn: "Hantverksutställning",
      typ: "Tillfällig",
      start: "1967-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Schlyterska huset",
      kommentar: ""
    },
    {
      id: 270,
      namn: "Dynor och täcken",
      typ: "Basutställning",
      start: "1967-mm-dd",
      slut: "1968-mm-dd",
      lokal: "Textilhallen",
      kommentar: "Bildvävnader, broderade agedynor och spetsar har monterats för den permanenta utställningen."
    },
    {
      id: 271,
      namn: "Arkeologi från luften",
      typ: "Tillfällig",
      start: "1967-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Kaptenen vid flygvapnet Esse Eriksson ställde ut ett urval av sina arkeologiska bilder."
    },
    {
      id: 272,
      namn: "Dryckesseder",
      typ: "Tillfällig",
      start: "1967-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "I Malmö Rådhus",
      kommentar: "I samband med att Nykterhetsnämnden i Malmö firade 50-årsjubileum."
    },
    {
      id: 273,
      namn: "Jubileumsutställning, 75 år",
      typ: "Tillfällig",
      start: "1967-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (översta våningen)",
      kommentar: ""
    },
    {
      id: 274,
      namn: "Bengt Nodenberg",
      typ: "Tillfällig",
      start: "1968-02-17",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 275,
      namn: "Linjer i modet – mannekänguppvisning",
      typ: "Tillfällig",
      start: "1968-02-23",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Inom ramen för \"Kul i Lund\" (under skolornas vinterlov), arrangerad av konstnären Bengt Rooke och Textilhandlarnas förening i Lund."
    },
    {
      id: 276,
      namn: "Ciselören Sven Bengtssons teater- och bokaffischer",
      typ: "Tillfällig",
      start: "1968-03-23",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Berikades med barnteckningar från Nevers och Lund."
    },
    {
      id: 277,
      namn: "Som man bäddar…",
      typ: "Tillfällig",
      start: "1968-04-01",
      slut: "1968-05-15",
      lokal: "Uppgift saknas",
      kommentar: "Sängklädernas historia."
    },
    {
      id: 278,
      namn: "Kryntor och krus",
      typ: "Tillfällig",
      start: "1968-04-30",
      slut: "1968-10-01",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 279,
      namn: "Damast 1590–1950",
      typ: "Tillfällig",
      start: "1968-05-24",
      slut: "1968-08-05",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 280,
      namn: "Lärde lärare",
      typ: "Tillfällig",
      start: "1968-06-12",
      slut: "1968-08-25",
      lokal: "Vita huset",
      kommentar: "Till firandet av Lunds universitets 300-årsjubileum."
    },
    {
      id: 281,
      namn: "Tygtryck (gjordes tillsammans med sommarpraktikanter)",
      typ: "Tillfällig",
      start: "1968-07-11",
      slut: "1970-mm-dd",
      lokal: "Textilhallen",
      kommentar: "En samling äldre tryck och verktyg som visade olika slag av hantverksmässig framställning."
    },
    {
      id: 282,
      namn: "Vårda – bota, Lunds lasarett 200 år, Medicinhistorisk utställning",
      typ: "Tillfällig",
      start: "1968-09-21",
      slut: "1968-11-15",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 283,
      namn: "Franska barn- och ungdomsböcker",
      typ: "Tillfällig",
      start: "1968-11-15",
      slut: "1969-01-06",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 284,
      namn: "Brunnsholk av urholkad ekstam",
      typ: "Tillfällig",
      start: "1968-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "I Svenska Handelsbankens nya huvudkontor",
      kommentar: "Funnen vid grundgrävningen på Svenska Handelsbankens tomt, St. Södergatan."
    },
    {
      id: 285,
      namn: "Ryor av unga nordiska konstnärer",
      typ: "Tillfällig",
      start: "1968-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Anordnad av CUM (firma Carl Ulrich Madsen i Köpenhamn) i samarbete med firma Garnknuten i Lund."
    },
    {
      id: 286,
      namn: "Tennfigurer",
      typ: "Tillfällig",
      start: "1968-mm-dd",
      slut: "1969-03-15",
      lokal: "Uppgift saknas",
      kommentar: "Lånades från Kristiandstads museum, kan betraktas som ett äreminne över konservatorn vid Töljhusmuseet i Köpenhamn Preben Kannik som avled 1967"
    },
    {
      id: 287,
      namn: "Ölets käril",
      typ: "Tillfällig",
      start: "1969-04-09",
      slut: "1970-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Baserad på Pripp-Bryggeriernas gåva (ett medeltida dryckeshorn)."
    },
    {
      id: 288,
      namn: "Dessa fantastiska färdredskap",
      typ: "Tillfällig",
      start: "1969-05-01",
      slut: "1969-10-01",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 289,
      namn: "Hemslöjdsalster",
      typ: "Tillfällig",
      start: "1969-05-01",
      slut: "1969-10-01",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Anordnades av Malmöhus läns hemslöjd."
    },
    {
      id: 290,
      namn: "Telegrafen genom tiderna",
      typ: "Tillfällig",
      start: "1969-05-21",
      slut: "1969-06-15",
      lokal: "Uppgift saknas",
      kommentar: "Anordnad av Televerket, ett underlag för skolvisningar."
    },
    {
      id: 291,
      namn: "Mått-Vikt-Värde",
      typ: "Basutställning",
      start: "1969-05-28",
      slut: "åååå-mm-dd",
      lokal: "Ystadhuset",
      kommentar: "Kulturen står i stor tacksamhetsskuld till Skandinaviska banken (bekostade nyinredningen av utställningen)."
    },
    {
      id: 292,
      namn: "Den stora Schmitzska keramikutställningen",
      typ: "Tillfällig",
      start: "1969-06-11",
      slut: "1969-09-14",
      lokal: "Herrehuset",
      kommentar: "Svea och Wilhelm Schmitz' stora keramiska donation."
    },
    {
      id: 293,
      namn: "Miljö i förvandling",
      typ: "Tillfällig",
      start: "1970-04-20",
      slut: "1970-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Uppmätningar och fotografier från fastigheter vid Skomakaregatan i Lund."
    },
    {
      id: 294,
      namn: "Försvunnen miljö",
      typ: "Tillfällig",
      start: "1970-04-20",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 295,
      namn: "Martin Åkessons djur",
      typ: "Tillfällig",
      start: "1970-05-01",
      slut: "1970-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Utställning om Martin Åkessons djurskulpturer."
    },
    {
      id: 296,
      namn: "Hemslöjdsalster",
      typ: "Tillfällig",
      start: "1970-05-01",
      slut: "1970-mm-dd",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Anordnad av Malmöhus läns hemslöjd."
    },
    {
      id: 297,
      namn: "Lund 950 år",
      typ: "Tillfällig",
      start: "1970-05-20",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 298,
      namn: "Skånskt silver från dansk tid",
      typ: "Tillfällig",
      start: "1970-06-24",
      slut: "1970-07-26",
      lokal: "Uppgift saknas",
      kommentar: "Resultatet av en inventering gjord i samarbete med Kristianstads museum."
    },
    {
      id: 299,
      namn: "Mjölk och mekanik",
      typ: "Tillfällig",
      start: "1970-06-25",
      slut: "1970-12-31",
      lokal: "Uppgift saknas",
      kommentar: "I anslutning till den Nordiska mejeritekniska kongressen, som avhölls i Lund."
    },
    {
      id: 300,
      namn: "Utställning i samband med Skånemässan 1970",
      typ: "Tillfällig",
      start: "1970-08-12",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Anordnad av Lunds kommun."
    },
    {
      id: 301,
      namn: "Lunds 950-årsminne",
      typ: "Tillfällig",
      start: "1970-mm-dd",
      slut: "1971-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 302,
      namn: "Konstnären Åke Waldemar Larssons 22 gouacher över kv. Svartbröder",
      typ: "Tillfällig",
      start: "1970-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Skildrar fastigheterna vid Skomakaregatan i Lund innan rivningarna sattes igång."
    },
    {
      id: 303,
      namn: "Siden, sammet, trasa, lump",
      typ: "Tillfällig",
      start: "1970-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 304,
      namn: "Slaget vid Lützen",
      typ: "Tillfällig",
      start: "1970-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 305,
      namn: "C. F. Hills målningar och teckningar",
      typ: "Basutställning",
      start: "1970-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (översta våningen, Hillrummet)",
      kommentar: "Baserad på C. G. Lindgrens gåva (avled i februari 1969)."
    },
    {
      id: 306,
      namn: "Trä",
      typ: "Tillfällig",
      start: "1971-05-01",
      slut: "1971-10-03",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 307,
      namn: "Hemslöjdsartiklar",
      typ: "Tillfällig",
      start: "1971-05-01",
      slut: "1971-10-03",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Anordnades av Malmöhus läns hemslöjd."
    },
    {
      id: 308,
      namn: "Peruansk medicinhistoria",
      typ: "Tillfällig",
      start: "1971-10-dd",
      slut: "1971-10-dd",
      lokal: "Uppgift saknas",
      kommentar: "I anslutning till en nordisk medicinhistorisk kongress."
    },
    {
      id: 309,
      namn: "Att tämja en cykel",
      typ: "Tillfällig",
      start: "1971-10-dd",
      slut: "1971-10-dd",
      lokal: "Uppgift saknas",
      kommentar: "Gjordes av skolelever från Lund."
    },
    {
      id: 310,
      namn: "Gustavsbergsporslin",
      typ: "Tillfällig",
      start: "1971-11-dd",
      slut: "åååå-mm-dd",
      lokal: "Herrehuset",
      kommentar: ""
    },
    {
      id: 311,
      namn: "Skolslöjden under 100 år",
      typ: "Tillfällig",
      start: "1971-mm-dd",
      slut: "1971-mm-dd",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 312,
      namn: "Myntskatten från Skomakaregatan",
      typ: "Tillfällig",
      start: "1971-mm-dd",
      slut: "1971-mm-dd",
      lokal: "Herrehuset",
      kommentar: ""
    },
    {
      id: 313,
      namn: "Teckningsundervisningens historia",
      typ: "Tillfällig",
      start: "1972-01-18",
      slut: "1972-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 314,
      namn: "Östra Torn – miljö i förvandling",
      typ: "Tillfällig",
      start: "1972-03-25",
      slut: "1972-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Maa. att Östra Torn varit föremål för intensiva diskussioner ang. planer för dess framtid som levande bebyggelse."
    },
    {
      id: 315,
      namn: "Så lagade man skånsk mat",
      typ: "Tillfällig",
      start: "1972-04-30",
      slut: "1972-10-02",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Affischen fick pris i New York."
    },
    {
      id: 316,
      namn: "Hemslöjdsartiklar",
      typ: "Tillfällig",
      start: "1972-04-30",
      slut: "1972-10-02",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Anordnades av Malmöhus läns hemslöjd."
    },
    {
      id: 317,
      namn: "Samfärdsel",
      typ: "Tillfällig",
      start: "1972-06-08",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 318,
      namn: "Leve bokskogen",
      typ: "Tillfällig",
      start: "1972-06-22",
      slut: "1972-08-27",
      lokal: "På Malmö stadsbibliotek",
      kommentar: "I samband med propagandan för skånskt bokträ."
    },
    {
      id: 319,
      namn: "Avigt och rätt",
      typ: "Tillfällig",
      start: "1972-10-03",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Hur man skall behandla gamla hus, företrädesvis skånska."
    },
    {
      id: 320,
      namn: "Verkstadsinteriörer i hantverksutställningen",
      typ: "Basutställning",
      start: "1972-12-02",
      slut: "åååå-mm-dd",
      lokal: "Schlyterska huset",
      kommentar: "Till Fabriks- och Hantverksföreningens 125-årsjubileum."
    },
    {
      id: 321,
      namn: "Utställning av nyförvärv",
      typ: "Tillfällig",
      start: "1972-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: "Som det nyinrättade Mecenatkontot möjliggjort."
    },
    {
      id: 322,
      namn: "Utställning av nyförvärv",
      typ: "Tillfällig",
      start: "1973-01-05",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: "Som det nyinrättade Mecenatkontot möjliggjort."
    },
    {
      id: 323,
      namn: "Nordamerikansk pueblokeramik",
      typ: "Tillfällig",
      start: "1973-03-05",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 324,
      namn: "Kinesiskt porslin i strålande färg",
      typ: "Tillfällig",
      start: "1973-04-28",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "I anslutning till Rädda barnens dagar på Kulturen."
    },
    {
      id: 325,
      namn: "Så blev kläderna rena och fina",
      typ: "Tillfällig",
      start: "1973-05-01",
      slut: "1973-10-01",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 326,
      namn: "Hemslöjdsalster",
      typ: "Tillfällig",
      start: "1973-05-01",
      slut: "1973-10-01",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Anordnad av Malmöhus läns hemslöjd."
    },
    {
      id: 327,
      namn: "Museum Stobæanum",
      typ: "Tillfällig",
      start: "1973-05-30",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset",
      kommentar: "Universitetets äldsta demonstrationssamling."
    },
    {
      id: 328,
      namn: "Lindforska huset – en historisk kavalkad",
      typ: "Tillfällig",
      start: "1973-05-30",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset",
      kommentar: "Om gårdens historia och dess invånares relationer till staden Lund, universitetet och Kulturen."
    },
    {
      id: 329,
      namn: "Dräktutställning",
      typ: "Basutställning",
      start: "1973-06-dd",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen (källarvåningen)",
      kommentar: "Uteslutande skånska folkdräkter."
    },
    {
      id: 330,
      namn: "Gravfynd från franciskanerkyrkan",
      typ: "Tillfällig",
      start: "1973-08-02",
      slut: "åååå-mm-dd",
      lokal: "Vita huset, Medeltidshallen",
      kommentar: ""
    },
    {
      id: 331,
      namn: "Polismössor från hela världen",
      typ: "Tillfällig",
      start: "1973-08-12",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "I samband med det möte som »International Police Association» avhöll på Kulturen den 12 augusti."
    },
    {
      id: 332,
      namn: "Kungen gräver",
      typ: "Tillfällig",
      start: "1973-11-08",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Sammanställd till konung Gustaf VI Adolfs 90-årsdag, andordnad av Statens historiska museum."
    },
    {
      id: 333,
      namn: "Kulturens samling av Frans Lindberg-målningar",
      typ: "Tillfällig",
      start: "1973-12-dd",
      slut: "1973-12-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 334,
      namn: "Hantverkshuset",
      typ: "Basutställning",
      start: "1973-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Schlyterska huset",
      kommentar: ""
    },
    {
      id: 335,
      namn: "Gamla ting kring mat och dryck",
      typ: "Basutställning",
      start: "1973-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Borgarhuset",
      kommentar: ""
    },
    {
      id: 336,
      namn: "Allmogetextilier",
      typ: "Tillfällig",
      start: "1973-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen (andra våningen)",
      kommentar: ""
    },
    {
      id: 337,
      namn: "Så klädde vi oss",
      typ: "Tillfällig",
      start: "1973-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen (bottenplan)",
      kommentar: "Modedräkter från tidigt 1700-tal till dags dato, skånska allmogedräkter och civiluniformer."
    },
    {
      id: 338,
      namn: "1500-talsgobeliner",
      typ: "Tillfällig",
      start: "1973-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen (övre våningen)",
      kommentar: ""
    },
    {
      id: 339,
      namn: "Litografier av konstnären och grafikern Denis Gelotte",
      typ: "Tillfällig",
      start: "1974-03-dd",
      slut: "1974-04-dd",
      lokal: "Uppgift saknas",
      kommentar: "Allmänheten - inte minst skolklasser - uppskattade att få pröva på att framställa egna litografier."
    },
    {
      id: 340,
      namn: "Från Kaos till Kosmos",
      typ: "Tillfällig",
      start: "1974-04-05",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset",
      kommentar: "Producerad av intendent Nils Hansson och I:e fotograf Antoni Wielock vid Institutionen för astronomi."
    },
    {
      id: 341,
      namn: "Så hade vi roligt – skånska fester och lekar",
      typ: "Tillfällig",
      start: "1974-05-01",
      slut: "1974-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 342,
      namn: "Hemslöjdsartiklar",
      typ: "Tillfällig",
      start: "1974-05-01",
      slut: "1974-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Anordnades av Malmöhus läns hemslöjd."
    },
    {
      id: 343,
      namn: "Polsk allmogekeramik",
      typ: "Tillfällig",
      start: "1974-09-11",
      slut: "1976-03-07",
      lokal: "Herrehuset (mellanvåningen)",
      kommentar: ""
    },
    {
      id: 344,
      namn: "Nils Månsson Mandelgren – fältforskare, resenär",
      typ: "Tillfällig",
      start: "1974-11-15",
      slut: "1975-01-dd",
      lokal: "Lindforska huset",
      kommentar: "Producerad av fil. kand. Bengt Jacobsson vid Etnologiska institutionen tillsammans med Folklivsarkivet."
    },
    {
      id: 345,
      namn: "Svenska spetsar",
      typ: "Tillfällig",
      start: "1974-11-dd",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: "Utsänd av Nordiska museet och Föreningen Svenska Spetsar."
    },
    {
      id: 346,
      namn: "Silver",
      typ: "Basutställning",
      start: "1974-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Herrehuset (bottenvåningen)",
      kommentar: "Inklusive den stora donationen av Wiwen Nilsson-silver."
    },
    {
      id: 347,
      namn: "Europeiskt porslin",
      typ: "Basutställning",
      start: "1974-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Herrehuset (översta våningen)",
      kommentar: ""
    },
    {
      id: 348,
      namn: "Dagligt bröd och överflöd",
      typ: "Tillfällig",
      start: "1974-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "I Riksutställningars buss",
      kommentar: "Vände sig till mellanstadiets elever främst i skolor som hade lång väg till museum."
    },
    {
      id: 349,
      namn: "Ewelina Pęksowas glasmålningar",
      typ: "Tillfällig",
      start: "1974-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: "I samarbete med Etnografiska museet i Krakow."
    },
    {
      id: 350,
      namn: "Det kan vara Jacob Erlandsen",
      typ: "Tillfällig",
      start: "1974-mm-dd",
      slut: "1977-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 351,
      namn: "Sängutrusning från 1600-talet och framåt",
      typ: "Tillfällig",
      start: "1974-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen (entréplan)",
      kommentar: ""
    },
    {
      id: 352,
      namn: "Kontinentaldrift",
      typ: "Tillfällig",
      start: "1975-01-31",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset",
      kommentar: "Producerades ursprungligen av Geologiska institutionen vid Uppsala universitet men inköptes av Lunds universitet."
    },
    {
      id: 353,
      namn: "Skåne 1525",
      typ: "Tillfällig",
      start: "1975-03-04",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Producerad av fil. lic. Rikard Holmberg och AB Hyrrokin."
    },
    {
      id: 354,
      namn: "Skånskt brännvin",
      typ: "Tillfällig",
      start: "1975-05-01",
      slut: "1975-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 355,
      namn: "Hemslöjdsartiklar",
      typ: "Tillfällig",
      start: "1975-05-01",
      slut: "1975-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Anordnades av Malmöhus läns hemslöjd."
    },
    {
      id: 357,
      namn: "Var rädd om Lund",
      typ: "Tillfällig",
      start: "1975-10-18",
      slut: "1975-11-09",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 358,
      namn: "Fynden från PK-bankens tomt",
      typ: "Tillfällig",
      start: "1975-11-22",
      slut: "1976-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "De intressanta resultaten av grävningar på tomten för den nya PK-banken, kv. S:t Clemens."
    },
    {
      id: 359,
      namn: "Gustavsberg i våra hem",
      typ: "Tillfällig",
      start: "1975-mm-dd",
      slut: "1976-01-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 360,
      namn: "Bondens hushåll",
      typ: "Basutställning",
      start: "1975-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Allmogehallen (ovanvåningen)",
      kommentar: "Har möjliggjorts ekonomiskt genom bidrag från Lunds Husmodersförening."
    },
    {
      id: 361,
      namn: "Montage med folkdräktsplagg och modedräkter",
      typ: "Tillfällig",
      start: "1975-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen (entrén)",
      kommentar: ""
    },
    {
      id: 362,
      namn: "Fornamerikans keramik",
      typ: "Tillfällig",
      start: "1975-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (mellanvåningen)",
      kommentar: ""
    },
    {
      id: 363,
      namn: "Sydsvenskt lergods",
      typ: "Tillfällig",
      start: "1975-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (översta våningen)",
      kommentar: ""
    },
    {
      id: 364,
      namn: "Konst från alla världsdelar",
      typ: "Tillfällig",
      start: "1976-02-11",
      slut: "1976-03-21",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 365,
      namn: "Lunds Arbetarkommun 75 år",
      typ: "Tillfällig",
      start: "1976-03-dd",
      slut: "1976-05-09",
      lokal: "Lindforska huset",
      kommentar: "Ordnades av fil.kand. Ingrid Millbourn."
    },
    {
      id: 366,
      namn: "Gamla krukmakare i Färs härad",
      typ: "Tillfällig",
      start: "1976-05-01",
      slut: "1976-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 367,
      namn: "Hemslöjdsartiklar",
      typ: "Tillfällig",
      start: "1976-05-01",
      slut: "1976-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Anordnades av Malmöhus läns hemslöjd."
    },
    {
      id: 368,
      namn: "Broderade bonader",
      typ: "Tillfällig",
      start: "1976-05-13",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 369,
      namn: "GAN – Gösta Adrian-Nilsson",
      typ: "Tillfällig",
      start: "1976-06-dd",
      slut: "1977-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 370,
      namn: "Keramik 1000–1600",
      typ: "Tillfällig",
      start: "1976-10-07",
      slut: "1977-04-dd",
      lokal: "Vita huset (tredje våningen)",
      kommentar: ""
    },
    {
      id: 371,
      namn: "Solfjädrar",
      typ: "Tillfällig",
      start: "1976-11-dd",
      slut: "1977-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 372,
      namn: "Broderier",
      typ: "Tillfällig",
      start: "1976-11-dd",
      slut: "1977-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 373,
      namn: "Oljetryck ur Kulturens samlingar",
      typ: "Tillfällig",
      start: "1976-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vandringsutställning",
      kommentar: "Som sedan sin tillkomst våren 1976 vandrat runt på vårdanstalter tillhörande Malmöhus läns landsting."
    },
    {
      id: 374,
      namn: "Gården och byn",
      typ: "Tillfällig",
      start: "1976-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Allmogehallen",
      kommentar: "Med interiörer från Skytts och Gärds härader."
    },
    {
      id: 375,
      namn: "Byastämman",
      typ: "Tillfällig",
      start: "1976-06-dd",
      slut: "åååå-mm-dd",
      lokal: "Allmogehallen",
      kommentar: ""
    },
    {
      id: 376,
      namn: "Den medeltida staden i fynd och forskning",
      typ: "Tillfällig",
      start: "1977-01-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 377,
      namn: "Vagnar och vagnmakeri",
      typ: "Tillfällig",
      start: "1977-05-01",
      slut: "1977-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Baserad på material som samlats vid en inventering 1955 och som aldrig tidigare visats för allmänheten."
    },
    {
      id: 378,
      namn: "4 lundakonstnärer",
      typ: "Tillfällig",
      start: "1977-06-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Johannes Collin, GAN, Carl Fredrik Hill, Johan Johansson."
    },
    {
      id: 379,
      namn: "Kinesisk keramik",
      typ: "Tillfällig",
      start: "1977-06-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 380,
      namn: "Känn på keramik",
      typ: "Tillfällig",
      start: "1977-09-03",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "En \"röra-vid utställning\" för synskadade, bekostad av Malmöhus läns landsting."
    },
    {
      id: 381,
      namn: "Barndomshemmet – textila minnesbilder",
      typ: "Tillfällig",
      start: "1977-10-20",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Hemmets Journal."
    },
    {
      id: 382,
      namn: "Cilgetus, samekultur i brytningstid",
      typ: "Tillfällig",
      start: "1977-11-27",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset",
      kommentar: "Producerad av Finlands museiförbund."
    },
    {
      id: 383,
      namn: "Polska hemslöjdade leksaker",
      typ: "Tillfällig",
      start: "1977-11-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Från Statliga Etnografiska museet i Warszawa."
    },
    {
      id: 384,
      namn: "Glömda spel",
      typ: "Tillfällig",
      start: "1977-11-dd",
      slut: "åååå-mm-dd",
      lokal: "På banklokal i Lund",
      kommentar: ""
    },
    {
      id: 385,
      namn: "Skolutställning: I museets verkstad",
      typ: "Tillfällig",
      start: "1977-06-dd",
      slut: "1978-mm-dd",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 386,
      namn: "Kinesiska akvareller",
      typ: "Tillfällig",
      start: "1978-02-03",
      slut: "1978-07-12",
      lokal: "Weibullska huset",
      kommentar: ""
    },
    {
      id: 387,
      namn: "Mäta-Rita-Rikta",
      typ: "Basutställning",
      start: "1978-02-dd",
      slut: "åååå-mm-dd",
      lokal: "Schlyterska huset",
      kommentar: "Visar hur man mäter inom olika hantverk."
    },
    {
      id: 388,
      namn: "Låtsaskullor och kungliga moror",
      typ: "Tillfällig",
      start: "1978-04-21",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 389,
      namn: "Hantverk på landet",
      typ: "Tillfällig",
      start: "1978-05-01",
      slut: "1978-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 390,
      namn: "Flintgods",
      typ: "Tillfällig",
      start: "1978-05-05",
      slut: "1978-10-29",
      lokal: "Weibullska huset",
      kommentar: ""
    },
    {
      id: 391,
      namn: "Lunds bryggeri – skolutställning",
      typ: "Tillfällig",
      start: "1978-05-29",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 392,
      namn: "Oljetryck – älskade bilder",
      typ: "Tillfällig",
      start: "1978-10-20",
      slut: "1979-01-15",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 393,
      namn: "Bilden på tallriken",
      typ: "Tillfällig",
      start: "1978-11-19",
      slut: "åååå-mm-dd",
      lokal: "Weibullska huset",
      kommentar: ""
    },
    {
      id: 394,
      namn: "Julseder",
      typ: "Tillfällig",
      start: "1978-12-10",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 395,
      namn: "Bilen – det onda och det goda",
      typ: "Tillfällig",
      start: "1979-02-17",
      slut: "1979-03-18",
      lokal: "Lindforska huset",
      kommentar: "Vandringsutställning från Malmö museum."
    },
    {
      id: 396,
      namn: "Leksaker",
      typ: "Basutställning",
      start: "1979-02-28",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen)",
      kommentar: ""
    },
    {
      id: 397,
      namn: "Jean Eric Rehn tecknar",
      typ: "Tillfällig",
      start: "1979-03-24",
      slut: "1979-05-13",
      lokal: "Vita huset",
      kommentar: "Baserad på verk av Rehn ur Bellinga-samlingen på Krageholm."
    },
    {
      id: 398,
      namn: "Lågenergihuset",
      typ: "Tillfällig",
      start: "1979-05-01",
      slut: "1979-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "I samarbete med Föreningen Skånska Gårdar."
    },
    {
      id: 399,
      namn: "Tennfigurer",
      typ: "Tillfällig",
      start: "1979-05-19",
      slut: "1979-06-12",
      lokal: "Vita huset",
      kommentar: "I samarbete med föreningen Husaren."
    },
    {
      id: 400,
      namn: "Skånska bilder – Anders Montan",
      typ: "Tillfällig",
      start: "1979-06-09",
      slut: "1979-07-08",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 401,
      namn: "Åke Holm – 50 år som keramiker",
      typ: "Tillfällig",
      start: "1979-07-20",
      slut: "1979-11-04",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 402,
      namn: "Gud skapade – Linné ordnade",
      typ: "Tillfällig",
      start: "1979-08-18",
      slut: "1979-10-28",
      lokal: "Lindforska huset",
      kommentar: "Från Riksutställningar."
    },
    {
      id: 403,
      namn: "Freden i Lund",
      typ: "Tillfällig",
      start: "1979-09-27",
      slut: "1979-10-14",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 404,
      namn: "Vetenskapliga instrument",
      typ: "Tillfällig",
      start: "1979-11-10",
      slut: "1980-01-07",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 405,
      namn: "Jens Nielsens bondgård",
      typ: "Tillfällig",
      start: "1979-11-17",
      slut: "1980-01-15",
      lokal: "Vita huset",
      kommentar: "Utlånad av Herning museum i Danmark."
    },
    {
      id: 406,
      namn: "Klockor i bostaden",
      typ: "Tillfällig",
      start: "1980-01-19",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 407,
      namn: "En lifvad påsk",
      typ: "Tillfällig",
      start: "1980-03-07",
      slut: "1980-04-13",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 408,
      namn: "Tvåändsstickning",
      typ: "Tillfällig",
      start: "1980-03-08",
      slut: "1980-03-30",
      lokal: "Textilhallen",
      kommentar: "En vandringsutställning från Dalarnas museum."
    },
    {
      id: 409,
      namn: "Skånskt folkliv – vardagsklenoder från sters och stuga",
      typ: "Tillfällig",
      start: "1980-05-01",
      slut: "1982-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Ett litet urval av typiskt skånska inredningsdetaljer från det äldre bostadsskicket."
    },
    {
      id: 410,
      namn: "SE-banksfynden",
      typ: "Tillfällig",
      start: "1980-06-12",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 411,
      namn: "Skånska textilier",
      typ: "Tillfällig",
      start: "1980-06-dd",
      slut: "1980-06-dd",
      lokal: "På Västerås stadsbibliotek",
      kommentar: ""
    },
    {
      id: 412,
      namn: "Haven – en skånsk allmogeträdgård",
      typ: "Tillfällig",
      start: "1980-07-07",
      slut: "1980-09-30",
      lokal: "Uppgift saknas",
      kommentar: "Från Trelleborgs museum."
    },
    {
      id: 413,
      namn: "Bröd",
      typ: "Tillfällig",
      start: "1980-08-10",
      slut: "1980-08-10",
      lokal: "Kulturens Östarp (Gamlegård)",
      kommentar: "Visades brödbak i äldre tid och en utställning om bröd."
    },
    {
      id: 414,
      namn: "Skånska bygder",
      typ: "Tillfällig",
      start: "1980-08-23",
      slut: "1980-09-29",
      lokal: "Uppgift saknas",
      kommentar: "Från Kristianstads museum."
    },
    {
      id: 415,
      namn: "Utflykt i 30-talet",
      typ: "Tillfällig",
      start: "1980-10-10",
      slut: "1981-03-08",
      lokal: "Uppgift saknas",
      kommentar: "Ting från den tiden i Kulturens samlingar."
    },
    {
      id: 416,
      namn: "Akademiska föreningen 150 år",
      typ: "Tillfällig",
      start: "1980-10-25",
      slut: "1981-02-08",
      lokal: "Vita huset",
      kommentar: "Ett jubileumscollage."
    },
    {
      id: 417,
      namn: "Kyrkor i Skåne",
      typ: "Tillfällig",
      start: "1980-12-19",
      slut: "1981-03-31",
      lokal: "Uppgift saknas",
      kommentar: "Konst och kultur under 800 år."
    },
    {
      id: 418,
      namn: "Bebyggelselämningar och hantverksaktiviteter 1000–1300",
      typ: "Tillfällig",
      start: "1980-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 419,
      namn: "En lifvad påsk",
      typ: "Tillfällig",
      start: "1981-03-16",
      slut: "1981-04-20",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 420,
      namn: "Klut, särk, strumpa",
      typ: "Tillfällig",
      start: "1981-03-20",
      slut: "1981-08-31",
      lokal: "Uppgift saknas",
      kommentar: "Vandringsutställning i samarbete med Skånes hembygdsförbund, behandlar de vita dräktplaggen i skånsk folkdräkt."
    },
    {
      id: 421,
      namn: "Av lera och salt",
      typ: "Tillfällig",
      start: "1981-05-01",
      slut: "1981-09-27",
      lokal: "Uppgift saknas",
      kommentar: "Från Helsinborgs museum."
    },
    {
      id: 422,
      namn: "Kungens stenar",
      typ: "Tillfällig",
      start: "1981-07-20",
      slut: "1981-08-16",
      lokal: "Uppgift saknas",
      kommentar: "Från Riksmuseet."
    },
    {
      id: 423,
      namn: "Jeans och mycket mera",
      typ: "Tillfällig",
      start: "1981-11-29",
      slut: "1982-01-10",
      lokal: "Uppgift saknas",
      kommentar: "Från Nordiska museet."
    },
    {
      id: 424,
      namn: "Eric Jacob Romberg – bonde, målare och träsnidare",
      typ: "Tillfällig",
      start: "1981-11-29",
      slut: "1982-01-31",
      lokal: "Uppgift saknas",
      kommentar: "Från Kulturnämnden i Laholm och Södra Hallands hembygdsförening."
    },
    {
      id: 425,
      namn: "Julstämning i Skytts- och Mäsingestugan",
      typ: "Tillfällig",
      start: "1981-11-29",
      slut: "1982-01-06",
      lokal: "Allmogehallen (Skyttsstugan och Mäsingestugan)",
      kommentar: ""
    },
    {
      id: 426,
      namn: "Stjärnan, granen, tomten och klappen",
      typ: "Tillfällig",
      start: "1981-11-29",
      slut: "1982-01-06",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 427,
      namn: "Leksaker som barnen gjorde förr",
      typ: "Tillfällig",
      start: "1981-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Vandringsutställning."
    },
    {
      id: 428,
      namn: "Cirkusliv",
      typ: "Tillfällig",
      start: "1982-02-15",
      slut: "1982-03-14",
      lokal: "Uppgift saknas",
      kommentar: "Från Malmö museum."
    },
    {
      id: 429,
      namn: "Skånska tröjor",
      typ: "Tillfällig",
      start: "1982-02-18",
      slut: "1982-04-12",
      lokal: "Uppgift saknas",
      kommentar: "Från Malmö museum."
    },
    {
      id: 430,
      namn: "En lifvad påsk",
      typ: "Tillfällig",
      start: "1982-03-01",
      slut: "1982-04-12",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 431,
      namn: "Bildvävar av Kirsten Hennix",
      typ: "Tillfällig",
      start: "1982-04-01",
      slut: "1982-05-02",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 432,
      namn: "Eva Sjögren – keramiker i lergods och porslin",
      typ: "Tillfällig",
      start: "1982-04-15",
      slut: "1982-08-15",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 433,
      namn: "Målat och ommålat",
      typ: "Tillfällig",
      start: "1982-05-01",
      slut: "1982-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "En utställning om allmogemöbler."
    },
    {
      id: 434,
      namn: "Bostad och bohag från senmedeltid, renässans och barock (jubileumsutställning)",
      typ: "Basutställning",
      start: "1982-06-06",
      slut: "åååå-mm-dd",
      lokal: "Borgarhuset",
      kommentar: "Borgarhusets nyordnade stilhistoriska utställning invigs av H. M. Konungen. Carl XVI Gustav."
    },
    {
      id: 435,
      namn: "Lund – kyrkornas stad (jubileumsutställning)",
      typ: "Basutställning",
      start: "1982-06-06",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: "En utställning om Lunds andliga liv under medeltiden, kyrkor och kloster, präster och lekmän."
    },
    {
      id: 436,
      namn: "Förr och framöver (jubileumsutställning)",
      typ: "Tillfällig",
      start: "1982-10-24",
      slut: "1983-10-03",
      lokal: "Vita huset (översta våningen)",
      kommentar: "Utställningstemat utgick från Georg Karlins motto Forntid-Framtid."
    },
    {
      id: 437,
      namn: "Särktåg och bandkrus",
      typ: "Tillfällig",
      start: "1982-11-26",
      slut: "1983-01-09",
      lokal: "Uppgift saknas",
      kommentar: "Från Dalarnas museum."
    },
    {
      id: 438,
      namn: "Vapen",
      typ: "Basutställning",
      start: "1982-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 439,
      namn: "En lifvad påsk",
      typ: "Tillfällig",
      start: "1983-03-01",
      slut: "1983-04-04",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 440,
      namn: "Renoveringsobjekt",
      typ: "Tillfällig",
      start: "1983-04-06",
      slut: "1983-05-08",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Skånes hembygdsförbund."
    },
    {
      id: 441,
      namn: "Johan C. W. Thyrén – legendarisk lundaprofessor",
      typ: "Tillfällig",
      start: "1983-04-28",
      slut: "1983-09-18",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med juridiska fakulteten vid Lunds universitet."
    },
    {
      id: 442,
      namn: "Väva vadmal och bråka lin",
      typ: "Tillfällig",
      start: "1983-05-01",
      slut: "1983-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 443,
      namn: "Opplötar och särkar från Skåne",
      typ: "Tillfällig",
      start: "1983-07-10",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: "Med bidrag från Nordenstedtska stiftelsen."
    },
    {
      id: 444,
      namn: "GAN – Gösta Adrian Nilsson, 1884–1984,",
      typ: "Tillfällig",
      start: "1983-12-04",
      slut: "1984-03-18",
      lokal: "Vita huset",
      kommentar: "I samarbete med Ystads museer; kan betraktas som ett förspel till den stora jubileumsutställning, som öppnas på Liljevalchs i Stockholm i april 1984"
    },
    {
      id: 445,
      namn: "Edward Hald – glaskonstnär och keramisk formgivare",
      typ: "Tillfällig",
      start: "1983-12-11",
      slut: "1984-01-29",
      lokal: "Uppgift saknas",
      kommentar: "Från Nationalmuseum och Waldemarsudde."
    },
    {
      id: 446,
      namn: "Frisisk folkkonst och fajanser från Makkum",
      typ: "Tillfällig",
      start: "1984-02-12",
      slut: "1984-04-08",
      lokal: "Uppgift saknas",
      kommentar: "Från Frielandmuseet i Leuwarden (Holland), bekostades delvis av holländska staten."
    },
    {
      id: 447,
      namn: "Konkylien – snäckan och musslan i människans värld",
      typ: "Tillfällig",
      start: "1984-03-04",
      slut: "1984-06-11",
      lokal: "Uppgift saknas",
      kommentar: "Ett omfattande inlån från danska museer och privatpersoner."
    },
    {
      id: 448,
      namn: "Värdet av handens arbete – slöjdens kulturarv inom hårda slöjdmaterial",
      typ: "Tillfällig",
      start: "1984-04-01",
      slut: "1984-04-08",
      lokal: "Uppgift saknas",
      kommentar: "Producerad av lärare i trä- och metallslöjd i Lunds kommun."
    },
    {
      id: 449,
      namn: "Sadlar, seldon och annat i hästväg",
      typ: "Tillfällig",
      start: "1984-05-01",
      slut: "1984-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 450,
      namn: "Garn – stickat – bok",
      typ: "Tillfällig",
      start: "1984-05-17",
      slut: "1984-07-31",
      lokal: "Textilhallen",
      kommentar: "Från Spindegården i Aabenraa (Danmark) av textilkonstnärerna Vibeke Lind och Hanne Vedel samt arkitekt Grete Jalk."
    },
    {
      id: 451,
      namn: "Samla och studera: snäckor och musslor",
      typ: "Tillfällig",
      start: "1984-07-15",
      slut: "1984-mm-dd",
      lokal: "Lindforska huset",
      kommentar: "När utställningen Konkylien revs, kunde den lärdomshistoriska delen efter viss omredigering stå kvar året ut."
    },
    {
      id: 452,
      namn: "Skånsk kulturbygd",
      typ: "Tillfällig",
      start: "1984-09-11",
      slut: "1984-10-14",
      lokal: "Uppgift saknas",
      kommentar: "I samband med utgivningen av det nya kulturminnesprogrammet för Malmöhus län; vandringsutställning i samarbete med Länsstyrelsen i Malmöhus län och Skånes Hembygdsförbund."
    },
    {
      id: 453,
      namn: "Alfred Hedlund – minnesutställning 1884–1984",
      typ: "Tillfällig",
      start: "1984-09-30",
      slut: "1984-10-28",
      lokal: "Uppgift saknas",
      kommentar: "Lundakonstnär."
    },
    {
      id: 454,
      namn: "I Knipplingahjörnan – knyppling från sydöstra Skåne",
      typ: "Tillfällig",
      start: "1984-11-01",
      slut: "1984-11-22",
      lokal: "Uppgift saknas",
      kommentar: "En vandringsutställning distribuerad av Kristianstads läns museum."
    },
    {
      id: 455,
      namn: "Guds soldater – Frälsningsarmén i Sverige under 100 år",
      typ: "Tillfällig",
      start: "1984-11-06",
      slut: "1984-11-27",
      lokal: "Uppgift saknas",
      kommentar: "Vandringsutställning från Nordiska museet."
    },
    {
      id: 456,
      namn: "En septemberdag i Jens Nielsens liv",
      typ: "Tillfällig",
      start: "1985-01-13",
      slut: "1985-03-10",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 457,
      namn: "En lifvad påsk",
      typ: "Tillfällig",
      start: "1985-03-11",
      slut: "1985-04-08",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 458,
      namn: "Av Skånes lera",
      typ: "Tillfällig",
      start: "1985-03-31",
      slut: "1985-09-15",
      lokal: "Vita huset",
      kommentar: "Om skånskt krukmakeri."
    },
    {
      id: 459,
      namn: "Mjölka, ysta, kärna",
      typ: "Tillfällig",
      start: "1985-05-01",
      slut: "1985-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Om äldre tiders mjölkhushållning."
    },
    {
      id: 460,
      namn: "Traditionella textila tekniker i Japan",
      typ: "Tillfällig",
      start: "1985-05-10",
      slut: "1985-06-09",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 461,
      namn: "Kungagåvan 1095",
      typ: "Tillfällig",
      start: "1985-05-21",
      slut: "1985-09-15",
      lokal: "Lindforska huset",
      kommentar: "Jubileumsutställning om 900-årsminnet av Knut den heliges gåvobrev."
    },
    {
      id: 462,
      namn: "Dräkter från sidenvägen",
      typ: "Tillfällig",
      start: "1985-06-20",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: "Visar några av museets utomeuropeiska dräkter."
    },
    {
      id: 463,
      namn: "Folk och fä",
      typ: "Tillfällig",
      start: "1985-09-02",
      slut: "1985-10-02",
      lokal: "Uppgift saknas",
      kommentar: "Producerad av Östra Torngårdens fritidsgård (Lund)."
    },
    {
      id: 464,
      namn: "Lars Gynning, textila bilder",
      typ: "Tillfällig",
      start: "1985-09-29",
      slut: "1985-11-24",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 465,
      namn: "Carl Adolph Agardh – skarpsinne och fantasi",
      typ: "Tillfällig",
      start: "1985-10-27",
      slut: "1986-02-02",
      lokal: "Lindforska huset",
      kommentar: "Kulturen i Lund firar 200-årsminnet av Agardhs födelse med en stor utställning om forskaren, ekonomen, botanisten, politikern, biskopen, kulturpersonligheten."
    },
    {
      id: 466,
      namn: "Folkliga band",
      typ: "Tillfällig",
      start: "1985-11-30",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 467,
      namn: "Sven T. Kjellberg – en kulturhistorikers lek med pennan",
      typ: "Tillfällig",
      start: "1985-12-15",
      slut: "1986-02-09",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "Sven T. Kjellberg som var Kulturens intendent 1934–1961 var också en skicklig tecknare. Utställningen ger prov på hans mångsidiga verksamhet."
    },
    {
      id: 468,
      namn: "Rolf Palm – flambränt stengods",
      typ: "Tillfällig",
      start: "1986-01-26",
      slut: "1986-03-16",
      lokal: "Uppgift saknas",
      kommentar: "Utställning som visar Rolf Palms senaste stengods."
    },
    {
      id: 469,
      namn: "Skogen är jordens hud",
      typ: "Tillfällig",
      start: "1986-02-10",
      slut: "1986-03-09",
      lokal: "Lindforska huset",
      kommentar: "Utställning om skogarnas betydelse för planetens fortlevnad."
    },
    {
      id: 470,
      namn: "Jette Stoltz-utställningen",
      typ: "Tillfällig",
      start: "1986-03-02",
      slut: "1986-04-13",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "Konstnärinnan Jette Stoltz ställer ut en värld av färg och visioner, som både fascinerar och manar till eftertanke."
    },
    {
      id: 471,
      namn: "Påskutställning",
      typ: "Tillfällig",
      start: "1986-03-03",
      slut: "1986-03-31",
      lokal: "Vita huset (första våningen)",
      kommentar: "En stor utställning kring våra påsktraditioner."
    },
    {
      id: 472,
      namn: "Brott och straff",
      typ: "Tillfällig",
      start: "1986-04-03",
      slut: "1986-05-11",
      lokal: "Lindforska huset",
      kommentar: "En utställning om brottens och straffens historia."
    },
    {
      id: 473,
      namn: "Baltiskt silver i svensk ägo",
      typ: "Tillfällig",
      start: "1986-04-27",
      slut: "1986-06-08",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "En stor samlingsutställning av baltiskt silver i Sverige, med tyngdpunkten lagd på de estniska silversmedernas arbeten. Utställningen anordnas i samband med den estniska kulturfestivalen i Lund och Malmö."
    },
    {
      id: 474,
      namn: "Här skall bröllopet stånda",
      typ: "Tillfällig",
      start: "1986-05-01",
      slut: "1986-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "En utställning om frieri, trolovning och vigsel i skånsk allmogemiljö vid 1850-talet."
    },
    {
      id: 475,
      namn: "Leksand – gammalt och nytt",
      typ: "Tillfällig",
      start: "1986-06-01",
      slut: "1986-06-22",
      lokal: "Lindforska huset, Vita huset (tredje våningen)",
      kommentar: "Hantverk med tradition. Dalmåleri, smide, trä och rotslö j d, musik, kyrkbåtar, folkdräkter, textilier."
    },
    {
      id: 476,
      namn: "Småland – Kronobergs län",
      typ: "Tillfällig",
      start: "1986-06-29",
      slut: "1986-07-27",
      lokal: "Lindforska huset, Vita huset (tredje våningen)",
      kommentar: "Hemslöjden, Tingsrydsgruppen, Hantverksgruppen de 20 och Ljungby kommun medverkar."
    },
    {
      id: 477,
      namn: "Fredsduvor",
      typ: "Tillfällig",
      start: "1986-08-17",
      slut: "1986-09-07",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "Resultatet av ICA-kurirens tävling premiärvisas."
    },
    {
      id: 478,
      namn: "Tre generationer – breven berättar",
      typ: "Tillfällig",
      start: "1986-09-14",
      slut: "1986-10-19",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "Gobelänger och sydda tavlor av Solveig Kristiansson. Arbetsbilder från sekelskiftet sammanställda av Konny Södring."
    },
    {
      id: 479,
      namn: "Statarliv",
      typ: "Tillfällig",
      start: "1986-09-21",
      slut: "1986-10-26",
      lokal: "Lindforska huset",
      kommentar: "Utställningen presenterar de skånska statarnas liv vid seklets början."
    },
    {
      id: 480,
      namn: "Spex",
      typ: "Tillfällig",
      start: "1986-11-16",
      slut: "1987-01-11",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "Spexets historia från Gerda till Ming."
    },
    {
      id: 481,
      namn: "Svenska konstnärer i Danmark",
      typ: "Tillfällig",
      start: "1987-01-18",
      slut: "1987-02-22",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "Från 1880-talet till 1930-talet. Oscar Björk, Siri Derkert, K. lsakson, Kurt Jungstedt, Otto Sköld m.fl."
    },
    {
      id: 482,
      namn: "Alla tiders förpackningar",
      typ: "Tillfällig",
      start: "1987-02-08",
      slut: "1987-08-30",
      lokal: "Lindforska huset",
      kommentar: "Förpackningar av många olika slag ur Kulturens samlingar ställs ut."
    },
    {
      id: 483,
      namn: "Små barn",
      typ: "Tillfällig",
      start: "1987-03-08",
      slut: "1987-05-03",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "De minsta barnen i äldre tid från dopet till skolåldern beskrivs genom kläder och föremål. Två barnkammare från 1840 och 1940 visas."
    },
    {
      id: 484,
      namn: "Uppbrott",
      typ: "Tillfällig",
      start: "1987-05-01",
      slut: "1987-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Ett kulturdrama för hundra år sedan."
    },
    {
      id: 485,
      namn: "Lunds stads järnvägar 1904–1939",
      typ: "Tillfällig",
      start: "1987-05-10",
      slut: "1987-09-07",
      lokal: "Vita huset (första våningen)",
      kommentar: "Beskriver järnvägen Bjärred-Lund-Harlösa i form av skärmexpo, modelljärnväg, tänger, tidtabeller samt video från 1938, året före nedläggelsen av banan."
    },
    {
      id: 486,
      namn: "Ur egna gömmor",
      typ: "Tillfällig",
      start: "1987-05-24",
      slut: "1987-09-30",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "Bildkonst från sex sekler - gömda klenoder från Kulturens samlingar."
    },
    {
      id: 487,
      namn: "En ros är en ros är en ros…",
      typ: "Tillfällig",
      start: "1987-11-08",
      slut: "1988-02-14",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 488,
      namn: "Ateljé Larsen",
      typ: "Tillfällig",
      start: "1987-12-13",
      slut: "1988-02-25",
      lokal: "Vita huset (tredje våningen)",
      kommentar: ""
    },
    {
      id: 489,
      namn: "Kulturimpuls!",
      typ: "Tillfällig",
      start: "1988-03-06",
      slut: "1988-04-04",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "Kulturarbetare stöder Waldorfskolan i Lund."
    },
    {
      id: 490,
      namn: "Målade ägg",
      typ: "Tillfällig",
      start: "1988-03-13",
      slut: "1988-04-04",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 491,
      namn: "Lundagårdstecknare 1920–1988",
      typ: "Tillfällig",
      start: "1988-04-10",
      slut: "1988-05-08",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 492,
      namn: "Prinsessan Eugénie – bilder från en glömd värld",
      typ: "Tillfällig",
      start: "1988-04-17",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (tredje våningen)",
      kommentar: ""
    },
    {
      id: 493,
      namn: "Bondens bot – om folklig läkekonst",
      typ: "Tillfällig",
      start: "1988-05-01",
      slut: "1988-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 494,
      namn: "Nyupptäckta kalkmålningar i Vombs kyrka",
      typ: "Tillfällig",
      start: "1988-05-15",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (första våningen)",
      kommentar: "\"Skärmutställning\""
    },
    {
      id: 495,
      namn: "Gudarnas lera – precolumbiansk keramik",
      typ: "Tillfällig",
      start: "1988-05-29",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 496,
      namn: "Femton skånska guldsmeder",
      typ: "Tillfällig",
      start: "1988-08-07",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (tredje våningen)",
      kommentar: ""
    },
    {
      id: 497,
      namn: "Arbetare i Lund för 100 år sedan – typograferna",
      typ: "Tillfällig",
      start: "1988-11-22",
      slut: "1989-09-30",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 498,
      namn: "Inspiration och förnyelse – om Carl Malmsten",
      typ: "Tillfällig",
      start: "1988-mm-dd",
      slut: "1989-02-05",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 499,
      namn: "Papua Nya Guinea – traditionell konst och traditionellt liv",
      typ: "Tillfällig",
      start: "1989-01-15",
      slut: "1989-02-26",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 500,
      namn: "Bondens barn",
      typ: "Tillfällig",
      start: "1989-05-01",
      slut: "1989-08-31",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 501,
      namn: "Hemma i konsten – svenska hem i konstnärsögon",
      typ: "Tillfällig",
      start: "1989-05-21",
      slut: "1989-08-20",
      lokal: "Uppgift saknas",
      kommentar: "Från Nationalmuseum."
    },
    {
      id: 502,
      namn: "Tidens rum – en rundvandring genom 400 år",
      typ: "Basutställning",
      start: "1989-05-21",
      slut: "åååå-mm-dd",
      lokal: "Borgarhuset",
      kommentar: "Bostadens och inredningens historia från 1500-talet till det tidiga 1900-talet."
    },
    {
      id: 503,
      namn: "Fotot 150 år",
      typ: "Tillfällig",
      start: "1989-08-19",
      slut: "1989-09-24",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 504,
      namn: "Lapptäcken",
      typ: "Tillfällig",
      start: "1989-08-26",
      slut: "1989-09-24",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med ICA-kuriren."
    },
    {
      id: 505,
      namn: "Den gamla bokens dagar",
      typ: "Tillfällig",
      start: "1989-09-30",
      slut: "1989-10-29",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 506,
      namn: "Målningarnas anatomi – material, teknik, bevaring och förfalskning",
      typ: "Tillfällig",
      start: "1989-10-08",
      slut: "1990-01-07",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 507,
      namn: "Brev och frimärken",
      typ: "Tillfällig",
      start: "1989-11-04",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 508,
      namn: "Julutställning",
      typ: "Tillfällig",
      start: "1989-11-26",
      slut: "1990-01-06",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 509,
      namn: "Skomode under 3 000 år",
      typ: "Tillfällig",
      start: "1990-02-04",
      slut: "1990-04-08",
      lokal: "Uppgift saknas",
      kommentar: "Ur Ballymuseets berömda samlingar."
    },
    {
      id: 510,
      namn: "Lund på 1000-talet och efter 1500",
      typ: "Tillfällig",
      start: "1990-02-18",
      slut: "1990-12-dd",
      lokal: "Vita huset",
      kommentar: "I samarbete med Landsarkivet; utställningen benämns också \"Lund genom seklerna\""
    },
    {
      id: 511,
      namn: "Utställning om påsken",
      typ: "Tillfällig",
      start: "1990-03-18",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 512,
      namn: "Kulturlandskapet",
      typ: "Tillfällig",
      start: "1990-05-01",
      slut: "1990-08-31",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 513,
      namn: "Wiwen Nilsson",
      typ: "Tillfällig",
      start: "1990-06-17",
      slut: "1990-08-26",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 514,
      namn: "Djuret i broderiet",
      typ: "Tillfällig",
      start: "1990-08-25",
      slut: "1990-09-16",
      lokal: "Lindforska huset",
      kommentar: "I samarbete med ICA-kuriren."
    },
    {
      id: 515,
      namn: "Läs för oss när vi är små",
      typ: "Tillfällig",
      start: "1990-09-30",
      slut: "1990-10-21",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 516,
      namn: "I glas och lust – Bertil Vallien och Ulrika Hydman-Vallien",
      typ: "Tillfällig",
      start: "1990-10-14",
      slut: "1991-01-06",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 517,
      namn: "Estland och Sverige – historiska skatter",
      typ: "Tillfällig",
      start: "1990-10-21",
      slut: "1990-11-10",
      lokal: "Uppgift saknas",
      kommentar: "Stadsarkivet i Tallinn visar arkivhandlingar."
    },
    {
      id: 518,
      namn: "Skolplanscher",
      typ: "Tillfällig",
      start: "1990-10-27",
      slut: "1990-11-11",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 519,
      namn: "Ansikten är också historia",
      typ: "Tillfällig",
      start: "1990-11-03",
      slut: "1991-09-29",
      lokal: "Vita huset (andra våningen)",
      kommentar: "Fotoutställning; bilder av arbetarfamiljer i Lund 1880–1940"
    },
    {
      id: 520,
      namn: "Julutställning",
      typ: "Tillfällig",
      start: "1990-11-25",
      slut: "1991-01-06",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 521,
      namn: "Nordiskt ljus vid sjön Racken",
      typ: "Tillfällig",
      start: "1991-02-03",
      slut: "1991-04-14",
      lokal: "Vita huset (tredje våningen)",
      kommentar: ""
    },
    {
      id: 522,
      namn: "Johannes Collin",
      typ: "Tillfällig",
      start: "1991-02-10",
      slut: "1991-09-29",
      lokal: "Vita huset (andra våningen)",
      kommentar: "En liten utställning med nyförvärv."
    },
    {
      id: 523,
      namn: "En lifvad påsk",
      typ: "Tillfällig",
      start: "1991-02-10",
      slut: "1991-04-01",
      lokal: "Wahlbomska huset",
      kommentar: ""
    },
    {
      id: 524,
      namn: "Ur en lundaprofessors bouppteckning 1668",
      typ: "Tillfällig",
      start: "1991-02-17",
      slut: "1991-04-01",
      lokal: "Borgarhuset (Hornsbergssalen)",
      kommentar: ""
    },
    {
      id: 525,
      namn: "Nils Ferlins sätt att skapa",
      typ: "Tillfällig",
      start: "1991-03-17",
      slut: "1991-04-14",
      lokal: "Vita huset (Hillrummet)",
      kommentar: "Fil dr Jenny Westerström och Vivianne Geijer ställer ut skulpturer med anknytning till Ferlin."
    },
    {
      id: 526,
      namn: "Arsenik och gamla hästar – djurläkare",
      typ: "Tillfällig",
      start: "1991-04-06",
      slut: "1991-08-11",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 527,
      namn: "Kulturlandskapet",
      typ: "Tillfällig",
      start: "1991-05-01",
      slut: "1991-08-31",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: ""
    },
    {
      id: 528,
      namn: "Dosor dosor dosor",
      typ: "Tillfällig",
      start: "1991-05-05",
      slut: "1991-08-18",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "Från Nationalmuseum."
    },
    {
      id: 529,
      namn: "Svamputställning",
      typ: "Tillfällig",
      start: "1991-09-07",
      slut: "1991-09-08",
      lokal: "Kulturens Östarp",
      kommentar: ""
    },
    {
      id: 530,
      namn: "Broderiskatter i rött och blått",
      typ: "Tillfällig",
      start: "1991-09-07",
      slut: "1991-10-06",
      lokal: "Lindforska huset",
      kommentar: "I samarbete med ICA-kuriren."
    },
    {
      id: 531,
      namn: "Madeleine Pyk – den sjungande kroppen",
      typ: "Tillfällig",
      start: "1991-09-08",
      slut: "1991-10-06",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "Illustrationer till Jacques Werups nya bok."
    },
    {
      id: 532,
      namn: "Beatles",
      typ: "Tillfällig",
      start: "1991-10-05",
      slut: "1991-11-03",
      lokal: "Wahlbomska huset (andra våningen)",
      kommentar: ""
    },
    {
      id: 533,
      namn: "Fajanserna kring Östersjön",
      typ: "Tillfällig",
      start: "1991-10-20",
      slut: "1992-03-01",
      lokal: "Vita huset (tredje våningen)",
      kommentar: ""
    },
    {
      id: 534,
      namn: "Från Anders till Knut",
      typ: "Tillfällig",
      start: "1991-11-24",
      slut: "1992-01-12",
      lokal: "Lindforska huset",
      kommentar: "Julutställning; berättas om våra jultraditioners ursprung och om välkända namn i almanackan som Anna, Nikolaus, Lucia, Staffan och Knut."
    },
    {
      id: 535,
      namn: "Carl Fredrik Hill",
      typ: "Tillfällig",
      start: "1991-mm-dd",
      slut: "1991-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 536,
      namn: "100 år men full av liv – skolelevers förslag till jubileumsaffisch",
      typ: "Tillfällig",
      start: "1992-01-19",
      slut: "1992-02-23",
      lokal: "Lindforska huset",
      kommentar: "Även \"100 år och full av liv\""
    },
    {
      id: 537,
      namn: "Påskutställning",
      typ: "Tillfällig",
      start: "1992-03-09",
      slut: "1992-04-26",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 538,
      namn: "En vikingatida handelsstad i Polen – Wolin-Jomsburg",
      typ: "Tillfällig",
      start: "1992-03-15",
      slut: "1992-05-17",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 539,
      namn: "Bondens landskap",
      typ: "Tillfällig",
      start: "1992-05-01",
      slut: "1992-09-30",
      lokal: "Kulturens Östarp",
      kommentar: ""
    },
    {
      id: 540,
      namn: "Bygd och marknad",
      typ: "Tillfällig",
      start: "1992-05-01",
      slut: "1992-09-30",
      lokal: "Kulturens Östarp",
      kommentar: ""
    },
    {
      id: 541,
      namn: "I huvet på en ung student – Kulturens födelse",
      typ: "Tillfällig",
      start: "1992-05-10",
      slut: "1992-09-13",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 542,
      namn: "Ökenstämning och skön Anna – konstslöjdanstalten 1897–1933",
      typ: "Tillfällig",
      start: "1992-05-30",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 543,
      namn: "Lettland och Sverige – arkivskatter från Riga",
      typ: "Tillfällig",
      start: "1992-09-27",
      slut: "1992-10-18",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 544,
      namn: "Isskåp, kommod och fotogenlampa – att leva i Lund för 100 år sedan",
      typ: "Tillfällig",
      start: "1992-10-04",
      slut: "1993-01-06",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 545,
      namn: "Ulrica Fredrica Pasch 1735–1796",
      typ: "Tillfällig",
      start: "1992-10-18",
      slut: "1993-01-06",
      lokal: "Vita huset (tredje våningen)",
      kommentar: ""
    },
    {
      id: 546,
      namn: "Julutställning",
      typ: "Tillfällig",
      start: "1992-11-22",
      slut: "1993-01-06",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 547,
      namn: "Lund efter 1658 – etapp 1",
      typ: "Tillfällig",
      start: "1992-11-22",
      slut: "åååå-mm-dd",
      lokal: "Wahlbomska huset",
      kommentar: "Visades som tillfällig utställning till kommande basutställning (1993)."
    },
    {
      id: 548,
      namn: "Nya lundafynd – om de arkeologiska utgrävningarna 1990–92",
      typ: "Tillfällig",
      start: "1992-12-13",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 549,
      namn: "Ola Terje. Med vänd kikare – byggen i skala",
      typ: "Tillfällig",
      start: "1993-02-14",
      slut: "1993-04-12",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 550,
      namn: "En lifvad påsk",
      typ: "Tillfällig",
      start: "1993-03-14",
      slut: "1993-04-12",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 551,
      namn: "Lund efter 1658",
      typ: "Basutställning",
      start: "1993-03-21",
      slut: "åååå-mm-dd",
      lokal: "Wahlbomska huset",
      kommentar: ""
    },
    {
      id: 552,
      namn: "Skåne mellan Danmark och Sverie",
      typ: "Tillfällig",
      start: "1993-03-21",
      slut: "1993-04-12",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 553,
      namn: "Röda stugor – fritt broderi. Ulla Nordin.",
      typ: "Tillfällig",
      start: "1993-04-06",
      slut: "1993-05-16",
      lokal: "Vita huset (andra våningen)",
      kommentar: ""
    },
    {
      id: 554,
      namn: "TRÄD som TRÄ",
      typ: "Tillfällig",
      start: "1993-05-01",
      slut: "1993-09-30",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "En utställning om hur träd i bondskogar togs tillvara."
    },
    {
      id: 555,
      namn: "Glas och lera. Blås och knåda.",
      typ: "Tillfällig",
      start: "1993-05-13",
      slut: "1993-10-03",
      lokal: "Vita huset (tredje våningen)",
      kommentar: ""
    },
    {
      id: 556,
      namn: "Vardagsbilder från svenskt 1700-tal",
      typ: "Tillfällig",
      start: "1993-05-26",
      slut: "1993-08-22",
      lokal: "Vita huset (andra våningen)",
      kommentar: "Ur Jean Eric Rehns Bellingasamling."
    },
    {
      id: 557,
      namn: "Silver till nytta och lust",
      typ: "Tillfällig",
      start: "1993-06-27",
      slut: "1993-08-29",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "Från Nationalmuseum och föreningen Nutida Svenskt Silver."
    },
    {
      id: 558,
      namn: "Wo Daa Be – ett nomadfolk i Niger",
      typ: "Tillfällig",
      start: "1993-08-16",
      slut: "1993-10-31",
      lokal: "Lindforska huset",
      kommentar: "Utställningsnamnet förekommer även sammanskrivet \"WoDaaBee\""
    },
    {
      id: 559,
      namn: "Karlar kan – herrarnas handarbete",
      typ: "Tillfällig",
      start: "1993-08-29",
      slut: "1993-09-26",
      lokal: "Vita huset (andra våningen)",
      kommentar: "I samarbete med ICA-kuriren."
    },
    {
      id: 560,
      namn: "Svamputställning",
      typ: "Tillfällig",
      start: "1993-09-04",
      slut: "1993-09-05",
      lokal: "Kulturens Östarp",
      kommentar: ""
    },
    {
      id: 561,
      namn: "Nära Linné",
      typ: "Tillfällig",
      start: "1993-10-03",
      slut: "1993-11-07",
      lokal: "Vita huset (andra våningen)",
      kommentar: "Apropå en bok av Hans Hammarskiöld och Tony Lewenhaupt."
    },
    {
      id: 562,
      namn: "Skånekraft på Kulturen",
      typ: "Tillfällig",
      start: "1993-10-17",
      slut: "1994-01-06",
      lokal: "Vita huset (tredje våningen)",
      kommentar: ""
    },
    {
      id: 563,
      namn: "Lund efter 1658 – etapp 2",
      typ: "Basutställning",
      start: "1993-10-28",
      slut: "åååå-mm-dd",
      lokal: "Wahlbomska huset",
      kommentar: ""
    },
    {
      id: 564,
      namn: "Livets träd i vargens käft",
      typ: "Tillfällig",
      start: "1994-01-16",
      slut: "1994-02-27",
      lokal: "Vita huset (tredje våningen)",
      kommentar: ""
    },
    {
      id: 565,
      namn: "Kraften tar form – barns arbete i lerverkstad",
      typ: "Tillfällig",
      start: "1994-01-23",
      slut: "1994-02-27",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 566,
      namn: "En lifvad påsk",
      typ: "Tillfällig",
      start: "1994-03-06",
      slut: "1994-04-04",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 567,
      namn: "Min bild av Kulturen",
      typ: "Tillfällig",
      start: "1994-03-06",
      slut: "1994-04-10",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "Folkuniversitetets fotolinje."
    },
    {
      id: 568,
      namn: "Karneval – lundakarnevaler 1962–94",
      typ: "Tillfällig",
      start: "1994-04-21",
      slut: "1994-05-23",
      lokal: "Vita huset (tredje våningen)",
      kommentar: ""
    },
    {
      id: 569,
      namn: "Masker – andra världar",
      typ: "Tillfällig",
      start: "1994-04-24",
      slut: "1995-01-01",
      lokal: "Vita huset (andra våningen)",
      kommentar: "Stängs för ombyggnad Vita huset, öppnar igen 1995-09-02"
    },
    {
      id: 570,
      namn: "Från fjällko till skånegås",
      typ: "Tillfällig",
      start: "1994-05-01",
      slut: "1994-07-31",
      lokal: "Kulturens Östarp",
      kommentar: ""
    },
    {
      id: 571,
      namn: "IKEA:s 1700-tal",
      typ: "Tillfällig",
      start: "1994-06-05",
      slut: "1994-08-14",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "öppnades av Ingvar Kamprad."
    },
    {
      id: 572,
      namn: "Blommehöna, rödkulla och linderödssvin",
      typ: "Tillfällig",
      start: "1994-08-02",
      slut: "1994-09-04",
      lokal: "Kulturens Östarp",
      kommentar: ""
    },
    {
      id: 573,
      namn: "All världens broderier",
      typ: "Tillfällig",
      start: "1994-08-21",
      slut: "1994-09-18",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "I samarbete med ICA-kuriren."
    },
    {
      id: 574,
      namn: "Lapidariet",
      typ: "Friluftsobjekt",
      start: "1994-08-28",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 575,
      namn: "Kulturens djur under Karlins tid – fotoutställning",
      typ: "Tillfällig",
      start: "1994-08-dd",
      slut: "1994-09-dd",
      lokal: "Kulturens Östarp",
      kommentar: "\"augusti - september\" 1994"
    },
    {
      id: 576,
      namn: "Korgkonster – nya och gamla korgar",
      typ: "Tillfällig",
      start: "1994-10-02",
      slut: "1995-01-06",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 577,
      namn: "Julinteriörer",
      typ: "Tillfällig",
      start: "1994-11-14",
      slut: "1995-01-06",
      lokal: "Västra Vrams prästgård, Thomanderska huset, Dekanhuset, Arbetarbostaden",
      kommentar: ""
    },
    {
      id: 578,
      namn: "Arkitekternas hus",
      typ: "Friluftsobjekt",
      start: "1994-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 579,
      namn: "Livsstilar – fotoutställning",
      typ: "Tillfällig",
      start: "1995-01-15",
      slut: "1995-02-05",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Folkuniversitetet."
    },
    {
      id: 580,
      namn: "Vad är en hållbar livsstil?",
      typ: "Tillfällig",
      start: "1995-01-15",
      slut: "1995-02-12",
      lokal: "Dekanhuset",
      kommentar: "Vision 21:s temautställning."
    },
    {
      id: 581,
      namn: "EWK – tecknaren Ewert Karlsson",
      typ: "Tillfällig",
      start: "1995-02-12",
      slut: "1995-03-12",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 582,
      namn: "En lifvad påsk",
      typ: "Tillfällig",
      start: "1995-03-20",
      slut: "1995-04-17",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 583,
      namn: "Ull tar gull – Unn Søiland Dale, norsk designer",
      typ: "Tillfällig",
      start: "1995-05-17",
      slut: "1995-08-13",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 584,
      namn: "Bokkulturen – från A till Ö",
      typ: "Basutställning",
      start: "1995-06-07",
      slut: "åååå-mm-dd",
      lokal: "Berlingska huset",
      kommentar: "öppnades av professor Håkan Westling; här guidas besökaren på en resa genom bokens historia."
    },
    {
      id: 585,
      namn: "Hjärtat i broderiet",
      typ: "Tillfällig",
      start: "1995-08-27",
      slut: "1995-09-24",
      lokal: "Dekanhuset",
      kommentar: "I samarbete med ICA-kurireni."
    },
    {
      id: 586,
      namn: "Masker – andra världar (återöppnas)",
      typ: "Basutställning",
      start: "1995-09-02",
      slut: "2004-10-01",
      lokal: "Vita huset (andra våningen)",
      kommentar: ""
    },
    {
      id: 587,
      namn: "Vita husets historia",
      typ: "Tillfällig",
      start: "1995-09-02",
      slut: "1995-09-24",
      lokal: "Vita huset (andra våningen)",
      kommentar: ""
    },
    {
      id: 588,
      namn: "Domkyrkobilder av Britt Lundbohm Reuterswärd",
      typ: "Tillfällig",
      start: "1995-09-02",
      slut: "1995-09-17",
      lokal: "Dekanhuset",
      kommentar: ""
    },
    {
      id: 589,
      namn: "Staden – installationer av Anna-Karin Bylund",
      typ: "Tillfällig",
      start: "1995-09-02",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 590,
      namn: "Heligheter – installationer av kyrklig konst",
      typ: "Tillfällig",
      start: "1995-09-02",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (första våningen)",
      kommentar: ""
    },
    {
      id: 591,
      namn: "Folkets part 100 år",
      typ: "Tillfällig",
      start: "1995-10-01",
      slut: "1995-10-20",
      lokal: "Vita huset (andra våningen)",
      kommentar: ""
    },
    {
      id: 592,
      namn: "Den väg som bjudits dig att vandra – röster om judisk kultur",
      typ: "Tillfällig",
      start: "1995-10-22",
      slut: "1997-05-04",
      lokal: "Vita huset (tredje våningen)",
      kommentar: ""
    },
    {
      id: 593,
      namn: "Hamlet av Mrozek/Ploski",
      typ: "Tillfällig",
      start: "1995-10-29",
      slut: "1995-11-17",
      lokal: "Vita huset (andra våningen)",
      kommentar: ""
    },
    {
      id: 594,
      namn: "Theresienstadt – kultur och barbari",
      typ: "Tillfällig",
      start: "1995-11-12",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 595,
      namn: "Broderiakademien",
      typ: "Tillfällig",
      start: "1995-11-18",
      slut: "1995-11-24",
      lokal: "Vita huset (andra våningen)",
      kommentar: ""
    },
    {
      id: 596,
      namn: "Runor – om stenar på landet och klotter i stan",
      typ: "Tillfällig",
      start: "1996-05-01",
      slut: "1996-09-01",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 597,
      namn: "Ordvision Smygtittar",
      typ: "Tillfällig",
      start: "1996-05-02",
      slut: "1996-05-16",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Författarcentrum Syd."
    },
    {
      id: 598,
      namn: "Självbryggeri i Bolivia",
      typ: "Tillfällig",
      start: "1996-05-19",
      slut: "1996-05-30",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 599,
      namn: "Sörby gård – i teori och praktik",
      typ: "Tillfällig",
      start: "1996-06-02",
      slut: "1996-08-11",
      lokal: "Vita huset (första våningen)",
      kommentar: ""
    },
    {
      id: 600,
      namn: "Rosenlängtan",
      typ: "Tillfällig",
      start: "1996-06-06",
      slut: "1996-08-15",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 601,
      namn: "Introduktion till Frilandsmuseet i Köpenhamn",
      typ: "Tillfällig",
      start: "1996-08-18",
      slut: "1996-09-01",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 602,
      namn: "Sinnenas rum",
      typ: "Tillfällig",
      start: "1996-09-01",
      slut: "1996-09-26",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 603,
      namn: "Klädd och oklädd",
      typ: "Tillfällig",
      start: "1996-09-15",
      slut: "1996-11-17",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 604,
      namn: "Att åka tåg – lundarallarna",
      typ: "Tillfällig",
      start: "1996-09-28",
      slut: "1996-10-06",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 605,
      namn: "Grönsaksutställning (utomhus för barn)",
      typ: "Tillfällig",
      start: "1996-10-06",
      slut: "åååå-mm-dd",
      lokal: "Utomhus",
      kommentar: ""
    },
    {
      id: 606,
      namn: "Liv på Kulturen",
      typ: "Tillfällig",
      start: "1996-10-08",
      slut: "1996-10-27",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 607,
      namn: "Masker av Eva Härstedt",
      typ: "Tillfällig",
      start: "1996-10-29",
      slut: "1996-11-10",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 608,
      namn: "Svenska namn i USA",
      typ: "Tillfällig",
      start: "1996-11-17",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 609,
      namn: "Absalon och hans städer. Roskilde Lund Köpenhamn",
      typ: "Tillfällig",
      start: "1996-12-06",
      slut: "1997-04-06",
      lokal: "Drottens kyrkoruin",
      kommentar: ""
    },
    {
      id: 610,
      namn: "Svenskare än Sverige",
      typ: "Tillfällig",
      start: "1996-12-19",
      slut: "1997-05-04",
      lokal: "Lundahallen",
      kommentar: ""
    },
    {
      id: 611,
      namn: "Skatter i kyrkan",
      typ: "Tillfällig",
      start: "1997-01-23",
      slut: "1997-02-06",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Folkuniversitetets fotolinje."
    },
    {
      id: 612,
      namn: "Längtan",
      typ: "Tillfällig",
      start: "1997-02-09",
      slut: "1997-03-06",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Elever från Polhemsskolan."
    },
    {
      id: 613,
      namn: "Jag minns ett föremål",
      typ: "Tillfällig",
      start: "1997-02-23",
      slut: "1997-10-05",
      lokal: "Vita huset (första våningen)",
      kommentar: ""
    },
    {
      id: 614,
      namn: "Främlingen – dröm eller hot",
      typ: "Tillfällig",
      start: "1997-03-02",
      slut: "1997-06-01",
      lokal: "Vita huset (tredje våningen)",
      kommentar: ""
    },
    {
      id: 615,
      namn: "Slå katten ur tunnan och se solen dansa!",
      typ: "Tillfällig",
      start: "1997-03-04",
      slut: "1997-03-31",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 616,
      namn: "Barnröster från Theresienstadt",
      typ: "Tillfällig",
      start: "1997-03-09",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 617,
      namn: "Barnasinnet – lin, trä, ull",
      typ: "Tillfällig",
      start: "1997-04-01",
      slut: "1997-04-30",
      lokal: "Lekloftet med gård",
      kommentar: ""
    },
    {
      id: 618,
      namn: "Universitetsmuseet",
      typ: "Basutställning",
      start: "1997-04-26",
      slut: "2018-03-18",
      lokal: "Lindforska huset",
      kommentar: ""
    },
    {
      id: 619,
      namn: "Poesi på Kulturen – fotoutställning",
      typ: "Tillfällig",
      start: "1997-05-01",
      slut: "1997-05-20",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 620,
      namn: "Linnea i Kulturens trädgårdar",
      typ: "Tillfällig",
      start: "1997-05-25",
      slut: "1997-09-28",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 621,
      namn: "Spelmanstävling i Lund 90 år",
      typ: "Tillfällig",
      start: "1997-05-29",
      slut: "1997-06-03",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 622,
      namn: "Den röda stugan som dröm – textila bilder av Ulla Nordin",
      typ: "Tillfällig",
      start: "1997-06-05",
      slut: "1997-08-17",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 623,
      namn: "Över tröskeln – hemma i folkhemshus",
      typ: "Tillfällig",
      start: "1997-06-12",
      slut: "1998-01-06",
      lokal: "Lundahallen",
      kommentar: ""
    },
    {
      id: 624,
      namn: "Något som jag tycker om i Lund",
      typ: "Tillfällig",
      start: "1997-08-23",
      slut: "1997-09-07",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Teckningar av låg- och mellanstadieelever."
    },
    {
      id: 625,
      namn: "Äga rum – en utställning om Norra Fäladen",
      typ: "Tillfällig",
      start: "1997-09-25",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 626,
      namn: "Johanna Karlin – skulptur",
      typ: "Tillfällig",
      start: "1997-10-19",
      slut: "1997-11-09",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 627,
      namn: "Baroque't – couture på docka",
      typ: "Tillfällig",
      start: "1997-11-16",
      slut: "1998-02-15",
      lokal: "Vita huset (första våningen)",
      kommentar: ""
    },
    {
      id: 628,
      namn: "Bonadsmålningar från magasinet",
      typ: "Tillfällig",
      start: "1997-11-30",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 629,
      namn: "Myternas vatten – glaskonstnären Kjell Engman",
      typ: "Tillfällig",
      start: "1997-12-14",
      slut: "1998-03-29",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 630,
      namn: "Klouóz – fotoutställning av Folkuniversitetets fotolinje",
      typ: "Tillfällig",
      start: "1998-01-18",
      slut: "1998-02-15",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 631,
      namn: "ReSpektera – barnet, minnet, myter",
      typ: "Tillfällig",
      start: "1998-02-08",
      slut: "1998-04-13",
      lokal: "Lundahallen",
      kommentar: "I samarbete med Levande Verkstad."
    },
    {
      id: 632,
      namn: "Boendemiljö i Klostergården",
      typ: "Tillfällig",
      start: "1998-02-22",
      slut: "1998-03-15",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 633,
      namn: "Påskutställning",
      typ: "Tillfällig",
      start: "1998-03-17",
      slut: "1998-04-13",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 634,
      namn: "Människan i centrum",
      typ: "Tillfällig",
      start: "1998-04-19",
      slut: "1998-05-07",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Vipeholmsskolans bildelever."
    },
    {
      id: 635,
      namn: "Bluesbox - ett rytmiskt collage i ord och bild",
      typ: "Tillfällig",
      start: "1998-04-19",
      slut: "1998-06-07",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 636,
      namn: "Illustratörer",
      typ: "Tillfällig",
      start: "1998-05-01",
      slut: "1998-05-10",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Samarbete med Sydsvenskan."
    },
    {
      id: 637,
      namn: "Året runt med Nalle och Kanin",
      typ: "Tillfällig",
      start: "1998-05-01",
      slut: "1998-08-31",
      lokal: "Lekloftet",
      kommentar: ""
    },
    {
      id: 638,
      namn: "Snaps – på gott och ont",
      typ: "Tillfällig",
      start: "1998-05-02",
      slut: "1998-08-16",
      lokal: "Lundahallen",
      kommentar: ""
    },
    {
      id: 639,
      namn: "En stund i livet – bilden berättar",
      typ: "Tillfällig",
      start: "1998-05-05",
      slut: "1998-08-16",
      lokal: "Vita huset (första våningen)",
      kommentar: ""
    },
    {
      id: 640,
      namn: "Stadens dag",
      typ: "Tillfällig",
      start: "1998-05-15",
      slut: "1998-05-24",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 641,
      namn: "Bokstav – exlibris och kalligrafi",
      typ: "Tillfällig",
      start: "1998-05-17",
      slut: "1998-08-16",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Spykens bildelever."
    },
    {
      id: 642,
      namn: "Kulturens uttryck – skolungdomar ger sin bild av Kulturen",
      typ: "Tillfällig",
      start: "1998-05-27",
      slut: "1998-06-11",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Samarbete med Sydsvenskan."
    },
    {
      id: 643,
      namn: "Solspår – Vivianne Geijer och Etsuko Magami Jönsson",
      typ: "Tillfällig",
      start: "1998-06-11",
      slut: "1998-08-16",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 644,
      namn: "Struktur – foto av Sophia Callmer",
      typ: "Tillfällig",
      start: "1998-06-13",
      slut: "1998-08-16",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 645,
      namn: "Modernismen – en ny konst, en ny värld",
      typ: "Basutställning",
      start: "1998-06-14",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (tredje våningen)",
      kommentar: "Lunds två modernistiska pionjärer, målaren GAN (Gösta Adrian-Nilsson) och silversmeden Wiwen Nilsson, ledsagar oss genom modernismens idéer."
    },
    {
      id: 646,
      namn: "Inför framtiden oförsvarbart – studentkårens judeläkardebatt 1939",
      typ: "Tillfällig",
      start: "1998-09-01",
      slut: "1998-11-01",
      lokal: "Lindforska huset (väggen)",
      kommentar: ""
    },
    {
      id: 647,
      namn: "Dammen på Kulturen",
      typ: "Tillfällig",
      start: "1998-09-05",
      slut: "1998-09-23",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 648,
      namn: "Lekfullt",
      typ: "Tillfällig",
      start: "1998-09-05",
      slut: "1998-11-29",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 649,
      namn: "Tankens bilder – bilder som förklarar världen",
      typ: "Tillfällig",
      start: "1998-09-12",
      slut: "1998-11-29",
      lokal: "Lundahallen",
      kommentar: ""
    },
    {
      id: 650,
      namn: "IM – 60 år",
      typ: "Tillfällig",
      start: "1998-09-27",
      slut: "1998-10-11",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 651,
      namn: "Drömmen om det främmande – dockor och exotism",
      typ: "Tillfällig",
      start: "1998-10-18",
      slut: "1998-11-01",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 652,
      namn: "Limes – kulturella gränser",
      typ: "Tillfällig",
      start: "1998-11-05",
      slut: "1998-11-22",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 653,
      namn: "Lars Håkansson – silver",
      typ: "Tillfällig",
      start: "1998-12-13",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 654,
      namn: "Tomas Anagrius – stengods",
      typ: "Tillfällig",
      start: "1998-mm-dd",
      slut: "1999-02-14",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 655,
      namn: "Ecce Homo",
      typ: "Tillfällig",
      start: "1999-01-09",
      slut: "1999-02-07",
      lokal: "Textilhallen",
      kommentar: "Om det kristna kärleksbudskapet och frågan om alla omfattas av det; \"På Kulturen söker vi kontinuerligt spegla kulturbegreppet och arbetar med frågor kring etnicitet, religion och kön.\""
    },
    {
      id: 656,
      namn: "Vad är modernt?",
      typ: "Tillfällig",
      start: "1999-01-17",
      slut: "1999-02-14",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Folkuniversitetets fotolinje."
    },
    {
      id: 657,
      namn: "Bakom år 2000 – barn och ungdomar om framtiden",
      typ: "Tillfällig",
      start: "1999-02-28",
      slut: "1999-03-21",
      lokal: "Vita huset (andra våningen, lilla väggen/bildverkstan)",
      kommentar: "Samarbete Skånes Arkivförbund."
    },
    {
      id: 658,
      namn: "Kvinnor och politik",
      typ: "Tillfällig",
      start: "1999-02-28",
      slut: "1999-03-21",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Samarbete med Arbetarrörelsens arkiv i Landskrona och Lunds universitet."
    },
    {
      id: 659,
      namn: "Lundabor – röster om liv och arbete",
      typ: "Tillfällig",
      start: "1999-02-28",
      slut: "1999-04-25",
      lokal: "Lundahallen",
      kommentar: "Byggde på samtal i studiecirkelform och dokumentationer gjorda 1996-1997 med verkstadsarbetare från Alfa Laval och Gambro, undersköterskor vid Universitetssjukhuset i Lund samt en grupp arbetssökande."
    },
    {
      id: 660,
      namn: "Till Er tjänst – om städyrket i förändring",
      typ: "Tillfällig",
      start: "1999-02-28",
      slut: "1999-04-11",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Vandringsutställning från Arbetets museum."
    },
    {
      id: 661,
      namn: "Påskverkstad",
      typ: "Tillfällig",
      start: "1999-03-15",
      slut: "1999-04-06",
      lokal: "Vita huset (andra våningen, lilla väggen/bildverkstan)",
      kommentar: ""
    },
    {
      id: 662,
      namn: "Folkbildning – i rättvisans och solidaritetens namn",
      typ: "Tillfällig",
      start: "1999-04-11",
      slut: "1999-04-30",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Samarbete ABF."
    },
    {
      id: 663,
      namn: "Att överleva – minnen från kvinnolägret i Ravensbrück",
      typ: "Tillfällig",
      start: "1999-04-17",
      slut: "1999-08-30",
      lokal: "Uppgift saknas",
      kommentar: "Anges i VB1999"
    },
    {
      id: 664,
      namn: "Makt, prakt, identitet – skånsk renässans",
      typ: "Basutställning",
      start: "1999-05-02",
      slut: "1999-12-31",
      lokal: "Textilhallen (övre våningen)",
      kommentar: "Visar hur den danska renässansen präglade de skånska böndernas sätt att klä sig och inreda sina hem; Kulturens bidrag till projektet \"Renässans för Skåne 1999\""
    },
    {
      id: 665,
      namn: "Harry Martinson och samlandet",
      typ: "Tillfällig",
      start: "1999-05-05",
      slut: "1999-05-16",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 666,
      namn: "Inside, outside Africa – målningar i blandteknik, Birgitta Godlund",
      typ: "Tillfällig",
      start: "1999-05-15",
      slut: "1999-09-19",
      lokal: "Vita huset (andra våningen, lilla väggen/bildverkstan)",
      kommentar: ""
    },
    {
      id: 667,
      namn: "Christian von Sydow – 25 år med glas och lera",
      typ: "Tillfällig",
      start: "1999-05-16",
      slut: "1999-08-15",
      lokal: "Lundahallen",
      kommentar: "Invigningstalare var professor Signe Persson-Melin."
    },
    {
      id: 668,
      namn: "Reflectory – foto Valdemar Wentz",
      typ: "Tillfällig",
      start: "1999-05-19",
      slut: "1999-06-06",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 669,
      namn: "Små fötter i Linnés fotspår",
      typ: "Tillfällig",
      start: "1999-06-10",
      slut: "1999-08-10",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 670,
      namn: "Linnés skånska resa",
      typ: "Tillfällig",
      start: "1999-06-10",
      slut: "1999-09-19",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Utställningen öppnades av Linné själv i Sven Snogerups gestalt."
    },
    {
      id: 671,
      namn: "Skulptur och platsens stämning",
      typ: "Tillfällig",
      start: "1999-06-15",
      slut: "1999-08-15",
      lokal: "Utomhus",
      kommentar: "Invigdes av professor Janne Ahlin."
    },
    {
      id: 672,
      namn: "Krukmakare, kakelugnsmakare – eldens gång från fyr till pipa",
      typ: "Tillfällig",
      start: "1999-08-15",
      slut: "1999-09-15",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Tom Möller."
    },
    {
      id: 673,
      namn: "Röster om tro",
      typ: "Tillfällig",
      start: "1999-09-19",
      slut: "1999-10-10",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Lunds stift."
    },
    {
      id: 674,
      namn: "Framtidstro",
      typ: "Tillfällig",
      start: "1999-09-19",
      slut: "1999-11-28",
      lokal: "Lundahallen",
      kommentar: "Om global etik och om kulturens roll för mänsklig utveckling i ett globalt och lokalt perspektiv; Kulturens bidrag till det nationella projektet \"Framtidstro\""
    },
    {
      id: 675,
      namn: "Kulturvisioner",
      typ: "Tillfällig",
      start: "1999-10-14",
      slut: "1999-10-27",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Samarbete med Lunds stift och Arcus förlag."
    },
    {
      id: 676,
      namn: "Qissatuna – vår berättelse",
      typ: "Tillfällig",
      start: "1999-10-30",
      slut: "1999-11-18",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Fotoutställning; \"qissatuna\" är ett arabiskt ord som betyder \"vår berättelse\""
    },
    {
      id: 677,
      namn: "Ont i magen",
      typ: "Tillfällig",
      start: "1999-11-05",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset (Universitetsmuseet)",
      kommentar: ""
    },
    {
      id: 678,
      namn: "Metropolis – Lund på medeltiden",
      typ: "Basutställning",
      start: "1999-11-21",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (första våningen)",
      kommentar: "2023 bytte utställningen namn till \"Metropolis – Lund och medeltiden\". Utställningen återinvigdes 2023-02-18."
    },
    {
      id: 679,
      namn: "Trosbekännelse från en fältbiolog",
      typ: "Tillfällig",
      start: "1999-12-12",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Fältbiologerna i Lund."
    },
    {
      id: 680,
      namn: "2020 – Unga röster i samhlällsdebatten",
      typ: "Tillfällig",
      start: "1999-12-12",
      slut: "2000-02-27",
      lokal: "Lundahallen",
      kommentar: "Med UngKraft. Även kallad \"2020 – unga röster i samhällsdebatten\"; elever från Apelskolan i Malmö och Östra Torn i Lund gav sin syn på \"framtidstro\""
    },
    {
      id: 681,
      namn: "Universitetets sigill",
      typ: "Tillfällig",
      start: "1999-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset (Universitetsmuseet)",
      kommentar: ""
    },
    {
      id: 682,
      namn: "Liv och verk – Albert Levan och lundagenetiken",
      typ: "Tillfällig",
      start: "1999-mm-dd",
      slut: "1999-04-dd",
      lokal: "Lindforska huset (väggen)",
      kommentar: ""
    },
    {
      id: 683,
      namn: "Oklädda, klädda, omklädda",
      typ: "Tillfällig",
      start: "1999-mm-dd",
      slut: "1999-mm-dd",
      lokal: "Vita huset",
      kommentar: "Två kvinnor (formgivare Emma Linton och tapetserare Ulrica Haglund) som för hantverkstraditioner och kvinnoarv vidare."
    },
    {
      id: 684,
      namn: "Den röda tråden",
      typ: "Tillfällig",
      start: "1999-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Anges i VB1999"
    },
    {
      id: 685,
      namn: "Egyptiskt på Kulturen",
      typ: "Tillfällig",
      start: "2000-01-16",
      slut: "2000-02-06",
      lokal: "Textilhallen (övre våningen)",
      kommentar: "Ett urval gravföremål ur Kulturens samlingar belyste översiktligt hur föremålen användes i det egyptiska gravskicket."
    },
    {
      id: 686,
      namn: "Framtidstro – Folkuniversitetets fotolinje",
      typ: "Tillfällig",
      start: "2000-01-16",
      slut: "2000-02-16",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 687,
      namn: "I Asiens tid. Möten och återbesök. Indien, Kina, Japan 1966–1999",
      typ: "Tillfällig",
      start: "2000-02-20",
      slut: "2000-05-14",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "Om förändring av människors vardag och tänkesätt i Asien under de senaste årtiondena; av fotografen Stig T Karlsson och författaren Lasse Berg."
    },
    {
      id: 688,
      namn: "Själen bakom Schalen",
      typ: "Tillfällig",
      start: "2000-03-11",
      slut: "2000-04-09",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 689,
      namn: "Islamiskt – ur Kulturens samlingar",
      typ: "Tillfällig",
      start: "2000-03-12",
      slut: "2000-05-14",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Fokuserade på material ur museets egna samlingar; inom ramen för ett nationellt samarbetsprojekt lett av Medelhavsmuseet."
    },
    {
      id: 690,
      namn: "Svåra saker",
      typ: "Tillfällig",
      start: "2000-04-15",
      slut: "2000-04-16",
      lokal: "Vandringsutställning",
      kommentar: "Vandringsutställning från Riksutställningar; utställningen turnerade genom landet i en trailer."
    },
    {
      id: 691,
      namn: "Lilla Margarete och andra barn under medeltiden",
      typ: "Tillfällig",
      start: "2000-05-21",
      slut: "2000-07-31",
      lokal: "Uppgift saknas",
      kommentar: "Vandringsutställning från Nationalmuseet i Köpenhamn; utställningen blev utgångspunkt för sommarens barnverksamhet med medeltiden som tema."
    },
    {
      id: 692,
      namn: "Tulpaner, trissehjärtan, sjubladsrosor – spetsar",
      typ: "Tillfällig",
      start: "2000-06-10",
      slut: "2000-08-13",
      lokal: "Textilhallen, Lundahallen",
      kommentar: ""
    },
    {
      id: 693,
      namn: "Spets på många sätt",
      typ: "Tillfällig",
      start: "2000-06-10",
      slut: "2000-08-13",
      lokal: "Uppgift saknas",
      kommentar: "Med anledning av att OIDFA:s internationella spetskonferens år 2000; om skånska spetsar ur Kulturens samlingar, kompletterade med ny spetsdesign och Vadstenaspetsar."
    },
    {
      id: 694,
      namn: "Gycklare och drottningar. Klockor i lera av Gunilla Ståhle.",
      typ: "Tillfällig",
      start: "2000-06-dd",
      slut: "2000-07-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "\"Sommarutställning\""
    },
    {
      id: 695,
      namn: "Tjeckiska knypplingar",
      typ: "Tillfällig",
      start: "2000-07-04",
      slut: "2000-07-06",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 696,
      namn: "Bosnien – ett islamiskt kulturarv i Europa",
      typ: "Tillfällig",
      start: "2000-08-20",
      slut: "2000-10-08",
      lokal: "Uppgift saknas",
      kommentar: "Producerades av Medelhavsmuseet; visade föremål från Nationalmuseet i Sarajevo samt foton på hur arbetet pågår med att bygga upp byggnader som raserats av kriget."
    },
    {
      id: 697,
      namn: "Svenskt Avantgarde och der Sturm i Berlin",
      typ: "Tillfällig",
      start: "2000-09-15",
      slut: "2000-11-19",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "Inom ramen för Kulturbro 2000, ett omfattande svensk-danskt kulturprojekt som syftade till att stärka det kulturella samarbetet i Öresundsregionen."
    },
    {
      id: 698,
      namn: "Det som aldrig blev. 100 års förslag till Rådhus och Stadshall",
      typ: "Tillfällig",
      start: "2000-09-24",
      slut: "2000-11-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 699,
      namn: "Folklig knyppling och Vadstenaspets",
      typ: "Tillfällig",
      start: "2000-10-08",
      slut: "2000-11-05",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 700,
      namn: "Årets utgrävningar",
      typ: "Tillfällig",
      start: "2000-11-05",
      slut: "2000-11-19",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Med betoning på kvarteret Altona i Lund."
    },
    {
      id: 701,
      namn: "Stora Råby i historia och nutid",
      typ: "Tillfällig",
      start: "2000-11-26",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 702,
      namn: "Halloween på skånska",
      typ: "Tillfällig",
      start: "2000-11-dd",
      slut: "2000-11-dd",
      lokal: "Uppgift saknas",
      kommentar: "Samarbetet med elever i olika projektarbeten ledde bland annat till en utställning i allhelgonatid kring temat Halloween på skånska."
    },
    {
      id: 703,
      namn: "Humor i Lund",
      typ: "Tillfällig",
      start: "2000-mm-dd",
      slut: "2000-mm-dd",
      lokal: "Lindforska huset (väggen)",
      kommentar: ""
    },
    {
      id: 704,
      namn: "Om Lundalänken",
      typ: "Tillfällig",
      start: "2000-mm-dd",
      slut: "2000-09-17",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarrangemang med Gamla Lund och stadsarkitektkontoret."
    },
    {
      id: 705,
      namn: "Fittstim",
      typ: "Tillfällig",
      start: "2000-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Anges i VB2000"
    },
    {
      id: 706,
      namn: "Tutankhamon – då och nu",
      typ: "Tillfällig",
      start: "2000-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Ett urval gravföremål ur den egyptiska samlingen."
    },
    {
      id: 707,
      namn: "Spegelbilder: mödrar, döttrar, fäder, söner",
      typ: "Tillfällig",
      start: "2001-01-01",
      slut: "2001-01-31",
      lokal: "Allmogehallen",
      kommentar: "I samarbete med Sydsvenskan; porträtt av kända och okända svenskar av fotograferna Jens Assur, Magnus af Geijerstam, Hans Jonsson, Thomas Löfqvist, Ann-Sofi Rosenkvist och Susanne Walström."
    },
    {
      id: 708,
      namn: "Ariadnes tråd – Agneta Svensk",
      typ: "Tillfällig",
      start: "2001-01-14",
      slut: "2001-03-25",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "I samarbete med Textilmuseet i Borås, Konstmuseet i Kalmar, Medelhavsmuseet i Stockholm och Leksands Kulturcentrum."
    },
    {
      id: 709,
      namn: "Form i foto",
      typ: "Tillfällig",
      start: "2001-01-20",
      slut: "2001-02-25",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Folkuniversitetets fotolinje."
    },
    {
      id: 710,
      namn: "Idén om Ideon",
      typ: "Tillfällig",
      start: "2001-01-25",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset (Universitetsmuseet)",
      kommentar: ""
    },
    {
      id: 711,
      namn: "Unga uttryck",
      typ: "Tillfällig",
      start: "2001-02-04",
      slut: "2001-02-25",
      lokal: "Allmogehallen",
      kommentar: ""
    },
    {
      id: 712,
      namn: "Palaver på grenesiska",
      typ: "Tillfällig",
      start: "2001-03-04",
      slut: "2001-04-16",
      lokal: "Allmogehallen",
      kommentar: "Producerad av Riksutställningar; om gränslandet mellan och språk och natur."
    },
    {
      id: 713,
      namn: "Kvinnobilder från Eritrea – fotoutställning av Daniel Boström",
      typ: "Tillfällig",
      start: "2001-03-10",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Samarbete med vänortsföreningen Lund-Asmara."
    },
    {
      id: 714,
      namn: "Samiskt silver",
      typ: "Tillfällig",
      start: "2001-04-15",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 715,
      namn: "Modebubblor – design förr och nu",
      typ: "Tillfällig",
      start: "2001-04-21",
      slut: "2001-08-26",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "Kvinnlig modedräkt 1730–1900 i Kulturens samlingar, som inspirerade fyra formgivare – Agneta Hanell, Petra Lundgren, Helle Robertsson och Jessica Romberg –till egna skapelser."
    },
    {
      id: 716,
      namn: "De ovanliga. Människor som går mot strömmen.",
      typ: "Tillfällig",
      start: "2001-04-22",
      slut: "2001-05-27",
      lokal: "Allmogehallen",
      kommentar: "Fotoutställning av Åke Mokvist; om modiga människor som frivilligt eller ofrivilligt valt att leva ett annorlunda liv."
    },
    {
      id: 717,
      namn: "Ett år på Östarp",
      typ: "Tillfällig",
      start: "2001-05-01",
      slut: "2001-08-31",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Fotografier av Bo Ingvar Svensson från ett arbetsår på Kulturens Östarp med hästdrivet jordbruk."
    },
    {
      id: 718,
      namn: "Lund 2001 – bilder av förändring",
      typ: "Tillfällig",
      start: "2001-05-06",
      slut: "2001-08-12",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Gamla Lund och Stadsarkitektkontoret i Lund."
    },
    {
      id: 719,
      namn: "Industridesign 01",
      typ: "Tillfällig",
      start: "2001-06-07",
      slut: "2001-08-26",
      lokal: "Uppgift saknas",
      kommentar: "Ett samarrangemang med Lunds Tekniska Högskola med projekt och examensarbeten."
    },
    {
      id: 720,
      namn: "Modeteckningar – Jessica Romberg",
      typ: "Tillfällig",
      start: "2001-08-19",
      slut: "2001-mm-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 721,
      namn: "Ingeborg Hammarskjöld-Reiz – arkitekt i folkhemmets Lund",
      typ: "Tillfällig",
      start: "2001-09-02",
      slut: "2001-09-30",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 722,
      namn: "RÖTT mellan kärlek och revolution. Albert Wiking, fotografier",
      typ: "Tillfällig",
      start: "2001-09-09",
      slut: "2001-10-14",
      lokal: "Uppgift saknas",
      kommentar: "Fotoutställning om offentliga personers associationer till den röda färgen; i samarbete med Albert Wiking."
    },
    {
      id: 723,
      namn: "Nordiska spelen 1901–1926, fotoutställning",
      typ: "Tillfällig",
      start: "2001-09-15",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 724,
      namn: "Vittringar – glas och textil",
      typ: "Tillfällig",
      start: "2001-09-16",
      slut: "2001-11-11",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Kosta Boda. Monica Backström, formgivare på Kosta Boda, tillsammans med Gerda Wissler, textilkonstnär och verksam i Lund."
    },
    {
      id: 725,
      namn: "Carl Johan De Geer – tyger, mönster, rum",
      typ: "Tillfällig",
      start: "2001-10-07",
      slut: "2002-01-13",
      lokal: "Textilhallen",
      kommentar: "I samarbete med Norrköpings konstmuseum och Jönköpings länsmuseum; De Geers ideer om mönster, textilier och heminredning från 1960-talet till det sena 1900-talet."
    },
    {
      id: 726,
      namn: "Utställning av tåg för stora och små",
      typ: "Tillfällig",
      start: "2001-10-20",
      slut: "2001-10-21",
      lokal: "I samarbete med Amprorail och Lundarallarna",
      kommentar: ""
    },
    {
      id: 727,
      namn: "Att överleva – Alice berättelse och barns reaktioner i bild",
      typ: "Tillfällig",
      start: "2001-11-03",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 728,
      namn: "Underbara, fasansfulla människa. Vem har rätt att leva?",
      typ: "Tillfällig",
      start: "2001-11-03",
      slut: "2002-05-12",
      lokal: "Allmogehallen",
      kommentar: "Använder Förintelsen som fönster för att belysa fenomen och mekanismer bakom systematiseringen av människor."
    },
    {
      id: 729,
      namn: "I kärl och hjärta",
      typ: "Tillfällig",
      start: "2001-11-09",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset (Universitetsmuseet)",
      kommentar: ""
    },
    {
      id: 730,
      namn: "Goda människor – målningar av elever från Lindängens grundsärskola",
      typ: "Tillfällig",
      start: "2001-11-11",
      slut: "2002-04-21",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "I samarbete med lärare och elever vid Lindängens grundsärskola i Malmö; bestod av bilder, texter, självporträtt och dikter."
    },
    {
      id: 731,
      namn: "Jul på Kulturen",
      typ: "Tillfällig",
      start: "2001-11-25",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 732,
      namn: "Arkitektur i pepparkaksdeg",
      typ: "Tillfällig",
      start: "2001-12-02",
      slut: "2001-12-26",
      lokal: "Uppgift saknas",
      kommentar: "Pepparkaksbygge; ett 30-tal bidrag på temat \"Mötesplatser\" bildade utställningen."
    },
    {
      id: 733,
      namn: "Studier i det tysta – teckningar av Tryggve Emond",
      typ: "Tillfällig",
      start: "2001-12-09",
      slut: "2002-01-20",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Katedralskolan och Tryggve Emond."
    },
    {
      id: 734,
      namn: "Skånska arkitekturpaviljonger",
      typ: "Tillfällig",
      start: "2001-mm-dd",
      slut: "2001-mm-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Paviljonger för information och vision; i samarbete med Lunds Tekniska Högskola."
    },
    {
      id: 735,
      namn: "Sommarfjärilar i vintermörkret – Dore Nordström",
      typ: "Tillfällig",
      start: "2001-mm-dd",
      slut: "2001-mm-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 736,
      namn: "Längtan – systrarna Jonn",
      typ: "Tillfällig",
      start: "2002-01-20",
      slut: "2002-03-10",
      lokal: "Allmogehallen",
      kommentar: "Systrarna Lina Jonn, fotograf och Erika Jonn, målarinna."
    },
    {
      id: 737,
      namn: "Syskon – fotoutställning med Folkuniversitetets fotolinje",
      typ: "Tillfällig",
      start: "2002-01-27",
      slut: "2002-02-17",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Folkuniversitetets fotolinje."
    },
    {
      id: 738,
      namn: "Formens språk – ny kyrkoarkitektur",
      typ: "Tillfällig",
      start: "2002-03-16",
      slut: "2002-04-07",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Helen Jakobsson och Stiftshistoriska sällskapet."
    },
    {
      id: 739,
      namn: "Katja of Sweden",
      typ: "Tillfällig",
      start: "2002-04-14",
      slut: "2003-01-06",
      lokal: "Textilhallen, Lundahallen",
      kommentar: ""
    },
    {
      id: 740,
      namn: "Struktur – Henrik Enquist",
      typ: "Tillfällig",
      start: "2002-04-14",
      slut: "2002-05-20",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Henrik Enquist."
    },
    {
      id: 741,
      namn: "Skåne. Kultur och landskap.",
      typ: "Tillfällig",
      start: "2002-04-28",
      slut: "2002-06-02",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Akvareller av Björn Gidstam."
    },
    {
      id: 742,
      namn: "Karnevalen i Venedig – masker och bilder",
      typ: "Tillfällig",
      start: "2002-05-09",
      slut: "2002-05-20",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 743,
      namn: "Buss 2002. Destination. Identitet",
      typ: "Tillfällig",
      start: "2002-05-31",
      slut: "2002-09-15",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Agardhsgymnasiet."
    },
    {
      id: 744,
      namn: "Skånska fotografer födda efter 1970",
      typ: "Tillfällig",
      start: "2002-06-07",
      slut: "2002-08-25",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Malmö museer och Höganäs museum."
    },
    {
      id: 745,
      namn: "Industridesign 02 – Lunds Tekniska Högskolas examensutställning",
      typ: "Tillfällig",
      start: "2002-06-07",
      slut: "2002-08-11",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "I samarbete med utbildningen i Industridesign vid Lunds Tekniska Högskola."
    },
    {
      id: 746,
      namn: "Wiwen Nilsson-rummet",
      typ: "Basutställning",
      start: "2002-06-13",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: ""
    },
    {
      id: 747,
      namn: "Transit – Come in, go out",
      typ: "Tillfällig",
      start: "2002-09-04",
      slut: "2002-12-15",
      lokal: "Utomhus",
      kommentar: "I samarbete med multikonstnären Robert Wilson och arkitektstudenterna Maria Johansson och Vigga Haremst, vid Kunstakademiets Arkitektskole i Köpenhamn. Kulturbro 2002"
    },
    {
      id: 748,
      namn: "Dockor i dräkt",
      typ: "Tillfällig",
      start: "2002-09-07",
      slut: "2003-01-06",
      lokal: "Textilhallen (sidogången)",
      kommentar: "Tolv dockor i skånska häradsdräkter från Baltiska utställningen 1914"
    },
    {
      id: 749,
      namn: "makten.nu: UNDERsköterskor!",
      typ: "Tillfällig",
      start: "2002-09-14",
      slut: "2003-01-27",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 750,
      namn: "Fart – om drömmen att vilja leva snabbt",
      typ: "Tillfällig",
      start: "2002-09-15",
      slut: "2003-01-31",
      lokal: "Allmogehallen",
      kommentar: ""
    },
    {
      id: 751,
      namn: "Movements – foto Anders Mattsson",
      typ: "Tillfällig",
      start: "2002-09-16",
      slut: "2002-10-27",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Skånes Dansteater och Anders Matsson."
    },
    {
      id: 752,
      namn: "Mumiens återkomst – nya rön om Kulturens egyptiska mumier",
      typ: "Tillfällig",
      start: "2002-09-29",
      slut: "2003-02-02",
      lokal: "Vita huset (andra våningen)",
      kommentar: ""
    },
    {
      id: 753,
      namn: "Måltiden – installation av Katrine Ussing",
      typ: "Tillfällig",
      start: "2002-10-13",
      slut: "2003-01-06",
      lokal: "Borgarhuset (Hornsbergssalen)",
      kommentar: "I samarbete med konstnären Katrine Ussing. Kulturbro 2002"
    },
    {
      id: 754,
      namn: "Att växa upp i krig",
      typ: "Tillfällig",
      start: "2002-11-02",
      slut: "2002-12-31",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Donald Boström och SOS barnbyar."
    },
    {
      id: 755,
      namn: "I väntan – på att leva",
      typ: "Tillfällig",
      start: "2002-11-02",
      slut: "2002-12-15",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 756,
      namn: "Fagerdals flyktingförläggning 1994–1995 – fotoutställning",
      typ: "Tillfällig",
      start: "2002-11-02",
      slut: "2002-12-31",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "I samarbete med Lars Johnsson."
    },
    {
      id: 757,
      namn: "Konstnärerna David Svensson och Johan Svensson",
      typ: "Tillfällig",
      start: "2002-mm-dd",
      slut: "2002-mm-dd",
      lokal: "Vita huset (i Modernismen)",
      kommentar: "Konstnärerna David Svensson och Johan Svensson (utbildade vid Malmö Konsthögskola) ställde \"under året\" ut inom ramen för Modernismen."
    },
    {
      id: 758,
      namn: "Slöjan – en järnridå av tyg",
      typ: "Tillfällig",
      start: "2003-01-01",
      slut: "2003-01-16",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "I samarbete med Sydsvenskan."
    },
    {
      id: 759,
      namn: "Kamelia, Mina och Karolina – tre drottningar från Dammfri",
      typ: "Tillfällig",
      start: "2003-01-01",
      slut: "2003-01-16",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "I samarbete med Sydsvenskan."
    },
    {
      id: 760,
      namn: "Ansikten från barnbyar – fotoutställning",
      typ: "Tillfällig",
      start: "2003-01-01",
      slut: "2003-01-26",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med SOS Barnbyar."
    },
    {
      id: 761,
      namn: "Min bild av Kulturen – fotoutställning",
      typ: "Tillfällig",
      start: "2003-01-19",
      slut: "2003-02-16",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "I samarbete med Folkuniversitetets fotolinje."
    },
    {
      id: 762,
      namn: "Siri Derkert – modernist och modetecknare",
      typ: "Tillfällig",
      start: "2003-02-02",
      slut: "2003-03-30",
      lokal: "Textilhallen",
      kommentar: "L samarbete med Textilmuseet i Borås, Institutionen för Textil_x0002_forskning vid Högskolan i Borås och Borås Konstmuseum."
    },
    {
      id: 763,
      namn: "Berättande bagage – historiska väskor",
      typ: "Tillfällig",
      start: "2003-02-08",
      slut: "2003-06-12",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Skapad av fyra klasser i åk 7 och 8 vid Fäladsgården."
    },
    {
      id: 764,
      namn: "Mårtenstorget",
      typ: "Tillfällig",
      start: "2003-02-09",
      slut: "2003-03-09",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Bengt Karlsson."
    },
    {
      id: 765,
      namn: "Cool couture – bärbar konst",
      typ: "Tillfällig",
      start: "2003-02-09",
      slut: "2003-05-25",
      lokal: "Lundahallen",
      kommentar: "I samarbete med Eva Bendes; hennes kläder ställde på ett spännande sätt det kvinnliga konstnärskapet och modeskapandet i fokus, skiljt åt i tid med drygt åtta decennier."
    },
    {
      id: 766,
      namn: "Från A till Ö. Bokkulturen. (återinvigning)",
      typ: "Basutställning",
      start: "2003-02-16",
      slut: "åååå-mm-dd",
      lokal: "Berlingska huset",
      kommentar: ""
    },
    {
      id: 767,
      namn: "Sida vid sida – ett år i det nya landet",
      typ: "Tillfällig",
      start: "2003-02-23",
      slut: "2003-05-11",
      lokal: "Allmogehallen",
      kommentar: "Om kulturmöten och de nya svenskarna skildrade i bild; i samarbete med Sydsvenskan."
    },
    {
      id: 768,
      namn: "Samtiden under lupp. Kulturen dokumenterar.",
      typ: "Tillfällig",
      start: "2003-02-23",
      slut: "2003-05-15",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 769,
      namn: "Sex visioner – Folkuniversitetets fotolinje",
      typ: "Tillfällig",
      start: "2003-03-16",
      slut: "2003-04-06",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Folkuniversitetets fotolinje."
    },
    {
      id: 770,
      namn: "Inspiration från Europa – Malmö Tillskärarakademi",
      typ: "Tillfällig",
      start: "2003-04-13",
      slut: "2003-05-25",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Malmö Tillskärarakademi."
    },
    {
      id: 771,
      namn: "Skeende – fotografier av Helen Toresdotter",
      typ: "Tillfällig",
      start: "2003-05-25",
      slut: "2003-08-31",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 772,
      namn: "Industridesign 03",
      typ: "Tillfällig",
      start: "2003-06-05",
      slut: "2003-07-31",
      lokal: "Allmogehallen",
      kommentar: ""
    },
    {
      id: 773,
      namn: "Skånelängans traditionella utformning",
      typ: "Tillfällig",
      start: "2003-06-06",
      slut: "2003-08-10",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Birgitta och Eric Lilius."
    },
    {
      id: 774,
      namn: "Ting för lek – en leksakshistoria",
      typ: "Basutställning",
      start: "2003-06-12",
      slut: "åååå-mm-dd",
      lokal: "Gårdshuset",
      kommentar: ""
    },
    {
      id: 775,
      namn: "I mannaminne",
      typ: "Tillfällig",
      start: "2003-06-15",
      slut: "2003-08-31",
      lokal: "Kulturens Östarp (Östarpshallen)",
      kommentar: "Dokumentationsprojekt."
    },
    {
      id: 776,
      namn: "Österlen mellan himmel och jord – fotograf Stig T Karlsson",
      typ: "Tillfällig",
      start: "2003-06-19",
      slut: "2003-09-21",
      lokal: "Lundahallen",
      kommentar: "I samarbete med Stig T. Karlsson."
    },
    {
      id: 777,
      namn: "Bernards hus – kvinnodrama från den spanska landsbygden",
      typ: "Tillfällig",
      start: "2003-08-17",
      slut: "2003-09-28",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Ulla Nordin."
    },
    {
      id: 778,
      namn: "Kärlek, makt och systerkap – 30 år av kvinnokamp",
      typ: "Tillfällig",
      start: "2003-08-17",
      slut: "2004-01-06",
      lokal: "Allmogehallen",
      kommentar: "Visade kvinnorörelsens framväxt och aktualitet; i samarbete med Carin Mannheimer och Arbetets museum."
    },
    {
      id: 779,
      namn: "Reseskisser – teckningar och akvareller av Vibeke Dalgas",
      typ: "Tillfällig",
      start: "2003-09-28",
      slut: "2003-10-26",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 780,
      namn: "Sue Williamssons kvinnoporträtt av apartheidmotståndare",
      typ: "Tillfällig",
      start: "2003-10-12",
      slut: "2003-10-26",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Nathalie Nilsson."
    },
    {
      id: 781,
      namn: "I samlarens öga – svenskt 1900-talsglas",
      typ: "Tillfällig",
      start: "2003-10-19",
      slut: "2004-01-06",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Visade konsthantverk och design ur ett nytt perspektiv – samlarens och dennes kärlek till konsthantverket."
    },
    {
      id: 782,
      namn: "3 x Afghanistan – tre fotografier, tre möten, tre decennier",
      typ: "Tillfällig",
      start: "2003-11-02",
      slut: "2004-01-06",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Samarbete med Lunds Afghanistankommitté"
    },
    {
      id: 783,
      namn: "Om minröjning",
      typ: "Tillfällig",
      start: "2003-11-09",
      slut: "2003-11-30",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Samarbete med Lunds Afghanistankommitté"
    },
    {
      id: 784,
      namn: "Slöjdverkstan – inspirations- och aktivitetsutställning",
      typ: "Tillfällig",
      start: "2003-12-21",
      slut: "2004-02-22",
      lokal: "Uppgift saknas",
      kommentar: "Producerad av Hemslöjdskonsulenterna i sydlänen."
    },
    {
      id: 785,
      namn: "Terror – fotoutställning",
      typ: "Tillfällig",
      start: "2004-01-18",
      slut: "2004-03-14",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Av Fotoskolan Skåne."
    },
    {
      id: 786,
      namn: "Raoul Wallenberg – one man can make a difference",
      typ: "Tillfällig",
      start: "2004-01-27",
      slut: "2005-05-22",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Raoul Wallenberginstitutet och Judiska museet i Stockholm."
    },
    {
      id: 787,
      namn: "Globalt eko",
      typ: "Tillfällig",
      start: "2004-01-29",
      slut: "2004-02-18",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 788,
      namn: "Möt privatdetektiven Ture Sventon och upptäcktsresanden P Karlsson",
      typ: "Tillfällig",
      start: "2004-02-22",
      slut: "2004-05-02",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 789,
      namn: "Vem är Du? Vem är Jag? Mellanöstern Här",
      typ: "Tillfällig",
      start: "2004-02-28",
      slut: "2004-12-12",
      lokal: "Uppgift saknas",
      kommentar: "Byggde på samtal med svenskar med rötter i Mellanöstern."
    },
    {
      id: 790,
      namn: "Kropp, kläder, kontakt",
      typ: "Tillfällig",
      start: "2004-03-13",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Utställning av Fäladsgårdens årskurs 6–7"
    },
    {
      id: 791,
      namn: "Slå katten ur tunnan och se solen dansa! En påskutställning",
      typ: "Tillfällig",
      start: "2004-03-14",
      slut: "2004-04-14",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 792,
      namn: "Tarlabashi – en multikulturell stadsdel i centrala Istanbul",
      typ: "Tillfällig",
      start: "2004-03-21",
      slut: "2004-04-30",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 793,
      namn: "Småfolklig påsk",
      typ: "Tillfällig",
      start: "2004-03-28",
      slut: "åååå-mm-dd",
      lokal: "Lusthuset",
      kommentar: "En utställning av Trollets förskola."
    },
    {
      id: 794,
      namn: "Kulturernas glas – från Egypten till Orrefors",
      typ: "Basutställning",
      start: "2004-04-18",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen (andra våningen)",
      kommentar: "Kulturens glassamling består av cirka 2 500 föremål."
    },
    {
      id: 795,
      namn: "Blomsterfestivalen i Skåne Tranås",
      typ: "Tillfällig",
      start: "2004-05-09",
      slut: "2004-06-13",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Foto av Anders Mattsson."
    },
    {
      id: 796,
      namn: "Ingenmansland",
      typ: "Tillfällig",
      start: "2004-05-16",
      slut: "2004-08-22",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Konstutställning."
    },
    {
      id: 797,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2004-06-19",
      slut: "2004-08-22",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 798,
      namn: "Bygden där vinden vände",
      typ: "Tillfällig",
      start: "2004-06-23",
      slut: "2004-08-08",
      lokal: "Allmogehallen",
      kommentar: "Med fotografier av Peter Gerdehag handlade om kulturlandskapet och värnandet om biologisk mångfald."
    },
    {
      id: 799,
      namn: "Bröd och vatten – foto på rituellt bröd och vackra källor",
      typ: "Tillfällig",
      start: "2004-09-06",
      slut: "2004-09-14",
      lokal: "Uppgift saknas",
      kommentar: "Foto från Moldavien."
    },
    {
      id: 800,
      namn: "Hemma i Lund",
      typ: "Tillfällig",
      start: "2004-09-12",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "I samarbete med Kulturskolan och deras elever."
    },
    {
      id: 801,
      namn: "Korridoren och andra studentbon",
      typ: "Tillfällig",
      start: "2004-09-15",
      slut: "2004-12-30",
      lokal: "Uppgift saknas",
      kommentar: "Med anledning av att AF Bostäder firade 50 år."
    },
    {
      id: 802,
      namn: "Gränser – expomobil, utställningsbuss",
      typ: "Tillfällig",
      start: "2004-09-26",
      slut: "åååå-mm-dd",
      lokal: "Tegnérsplatsen",
      kommentar: "Gjord av Forum för levande historia."
    },
    {
      id: 803,
      namn: "GYM – en sund själ i en sund kropp",
      typ: "Tillfällig",
      start: "2004-10-03",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset (Universitetsmuseet)",
      kommentar: ""
    },
    {
      id: 804,
      namn: "Atlantöar – fotoutställning av K G Olsson",
      typ: "Tillfällig",
      start: "2004-10-09",
      slut: "2004-11-07",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 805,
      namn: "Go Girls! Vikten av flickors utbildning",
      typ: "Tillfällig",
      start: "2004-10-24",
      slut: "2004-11-14",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "I samarbete med Birgitta Svensson."
    },
    {
      id: 806,
      namn: "Pällar och gamla spetsar",
      typ: "Tillfällig",
      start: "2004-11-06",
      slut: "2004-11-07",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Yrsa Lindholm."
    },
    {
      id: 807,
      namn: "Låtom oss fröjdas…",
      typ: "Tillfällig",
      start: "2004-11-14",
      slut: "2005-01-31",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Foto av Malin Hellberg."
    },
    {
      id: 808,
      namn: "Traditionsmontern",
      typ: "Tillfällig",
      start: "2004-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Sex olika teman under året: minnesdag över förintelsen, påskkort, majblommor, sommarminnen, judiska högtider och juldekorationer."
    },
    {
      id: 809,
      namn: "Frusna ögonblick",
      typ: "Tillfällig",
      start: "2004-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Friluftsmuseets hemmiljöer lyftes fram med iscensatta \"frusna ögonblick\" i samarbete med formgivare Peter Holm och Ljusdesign AB; visades \"under våren\""
    },
    {
      id: 810,
      namn: "Aspekter på civilkurage",
      typ: "Tillfällig",
      start: "2005-01-23",
      slut: "2005-03-28",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Fotoskolan Skåne."
    },
    {
      id: 811,
      namn: "Att överleva – Röster från Ravensbrück",
      typ: "Basutställning",
      start: "2005-01-27",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen)",
      kommentar: "En unik samling föremål som samlades in när de vita bussarna kom till Lund 1945; tack vare finansiering från Kommittén för Levande Historia."
    },
    {
      id: 812,
      namn: "Livskraft: Civilkurage – \"annars är man ingen människa…\"",
      typ: "Tillfällig",
      start: "2005-01-30",
      slut: "2005-05-22",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 813,
      namn: "Gamla leksaker",
      typ: "Basutställning",
      start: "2005-03-10",
      slut: "åååå-mm-dd",
      lokal: "Gårdshuset",
      kommentar: "Utställningen var tidigare en del av den större utställningen \"Ting för lek\" (se d.o.)"
    },
    {
      id: 814,
      namn: "Spår av en befolkning – fotoutställning",
      typ: "Tillfällig",
      start: "2005-03-13",
      slut: "2005-08-28",
      lokal: "Uppgift saknas",
      kommentar: "Fotografen Anders Kristensson familjeporträtt; produktionen gick vidare till Nordiska museet."
    },
    {
      id: 815,
      namn: "Studentaftnar i Lund 100 år – affischerna som fyllde Stora salen",
      typ: "Tillfällig",
      start: "2005-04-03",
      slut: "2005-05-16",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 816,
      namn: "Teckningar från Hiroshima Peace Museum – 60 år efter bomben",
      typ: "Tillfällig",
      start: "2005-05-22",
      slut: "2005-08-28",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 817,
      namn: "Jeg er student fra Lund – H.C. Andersen 200 år",
      typ: "Tillfällig",
      start: "2005-05-29",
      slut: "2005-09-04",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 818,
      namn: "Underbart – underkläder formar kroppen 1750–2005",
      typ: "Tillfällig",
      start: "2005-06-05",
      slut: "2006-02-26",
      lokal: "Uppgift saknas",
      kommentar: "Kulturens bidrag till Designåret 2005; sponsor: Kappahl; våra äldre rika samlingar tillsammans med Borås Textilmuseums något yngre."
    },
    {
      id: 819,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2005-06-dd",
      slut: "2005-08-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 820,
      namn: "Klä på – pappersdockor",
      typ: "Tillfällig",
      start: "2005-09-04",
      slut: "2005-12-30",
      lokal: "Uppgift saknas",
      kommentar: "Sponsor: Kappahl."
    },
    {
      id: 821,
      namn: "Människor i papp",
      typ: "Tillfällig",
      start: "2005-09-11",
      slut: "2005-10-02",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 822,
      namn: "Föremålen omkring oss",
      typ: "Tillfällig",
      start: "2005-09-11",
      slut: "2006-06-06",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 823,
      namn: "Amnesty Internationel",
      typ: "Tillfällig",
      start: "2005-10-08",
      slut: "2005-10-30",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 824,
      namn: "Arbeten på papper",
      typ: "Tillfällig",
      start: "2005-11-05",
      slut: "2005-12-30",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 825,
      namn: "Odödlighet. Läkare i Lund porträtterade av Johan Falkman.",
      typ: "Tillfällig",
      start: "2006-01-14",
      slut: "2006-02-26",
      lokal: "Uppgift saknas",
      kommentar: "Samarbete med Kultur Lund, Lunds kommun."
    },
    {
      id: 826,
      namn: "Tvillingar – fotoutställning med Fotoskolan Skåne",
      typ: "Tillfällig",
      start: "2006-01-22",
      slut: "2006-02-26",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 827,
      namn: "Leksaker som rör sig. Nytt av gammalt.",
      typ: "Tillfällig",
      start: "2006-01-28",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 828,
      namn: "Svart gips – vitt folkhem",
      typ: "Tillfällig",
      start: "2006-01-29",
      slut: "2006-02-26",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 829,
      namn: "Minnesvärt – sakernas tillstånd",
      typ: "Tillfällig",
      start: "2006-02-26",
      slut: "2006-12-30",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 830,
      namn: "Mellan 4 ögon – fotoutställning",
      typ: "Tillfällig",
      start: "2006-03-05",
      slut: "2006-06-11",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 831,
      namn: "South Africa Via Dolorosa – fotoutställning Elisabeth Ohlson Wallin",
      typ: "Tillfällig",
      start: "2006-03-12",
      slut: "2006-05-21",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 832,
      namn: "Too much is never enough. Omgjort mode av Bea Szenfeld.",
      typ: "Tillfällig",
      start: "2006-04-02",
      slut: "2006-08-20",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 833,
      namn: "Varför spara detta? Föremål och minnen",
      typ: "Tillfällig",
      start: "2006-06-11",
      slut: "2006-12-30",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 834,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2006-06-17",
      slut: "2006-08-27",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 835,
      namn: "Minnesvärda ögonblick – fotografier av Ingemar D. Kristiansen",
      typ: "Tillfällig",
      start: "2006-06-18",
      slut: "2006-08-27",
      lokal: "Uppgift saknas",
      kommentar: "Ett 30-tal exempel från kända och okända individer."
    },
    {
      id: 836,
      namn: "Efter tsunamin",
      typ: "Tillfällig",
      start: "2006-08-20",
      slut: "2006-10-22",
      lokal: "Borgarhuset (Hornsbergssalen)",
      kommentar: ""
    },
    {
      id: 837,
      namn: "En livs levande Raine Navin",
      typ: "Tillfällig",
      start: "2006-09-02",
      slut: "2006-10-22",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 838,
      namn: "Rädda Barnen i Beirut",
      typ: "Tillfällig",
      start: "2006-09-02",
      slut: "2006-09-17",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 839,
      namn: "Memorial – foto John S. Webb",
      typ: "Tillfällig",
      start: "2006-09-03",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 840,
      namn: "Do Redo – gör nytt av gammalt",
      typ: "Tillfällig",
      start: "2006-09-10",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 841,
      namn: "Månteatern – 20 år",
      typ: "Tillfällig",
      start: "2006-09-23",
      slut: "2006-10-15",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 842,
      namn: "Frukostdags 2020 – installation av Carl Johan De Geer",
      typ: "Tillfällig",
      start: "2006-10-08",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "En inte helt ljus framtidsvision av vårt konsumtionssamhälle."
    },
    {
      id: 843,
      namn: "Textilt – tekniker och material",
      typ: "Basutställning",
      start: "2006-10-15",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: ""
    },
    {
      id: 844,
      namn: "Bilder från ungerska revolutionen 1956",
      typ: "Tillfällig",
      start: "2006-10-21",
      slut: "2006-10-29",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 845,
      namn: "Minnesbilder – resultat av fototävling",
      typ: "Tillfällig",
      start: "2006-11-04",
      slut: "2006-11-26",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 846,
      namn: "Sakligt och visionärt – Bauhaus i Dessau",
      typ: "Tillfällig",
      start: "2006-11-05",
      slut: "2007-01-28",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 847,
      namn: "Vantar – resultatet av handarbetstävling",
      typ: "Tillfällig",
      start: "2006-12-03",
      slut: "2006-12-30",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: ""
    },
    {
      id: 848,
      namn: "Konstgiganter – Sten Dunér, Jörgen Fogelquist, Staffan Nihlén, Ulf Trotzig, John Wipp",
      typ: "Tillfällig",
      start: "2007-01-13",
      slut: "2007-03-04",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 849,
      namn: "Fem i Lund",
      typ: "Tillfällig",
      start: "2007-01-13",
      slut: "2007-03-04",
      lokal: "Uppgift saknas",
      kommentar: "Verk av fem lundakonstnärer; Sten Dunér, Jörgen Fogelquist, Staffan Nihlén, Ulf Trotzig och John Wipp."
    },
    {
      id: 850,
      namn: "Slöjdcirkus mini – tid för slöjd",
      typ: "Tillfällig",
      start: "2007-01-14",
      slut: "2007-02-25",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 851,
      namn: "Sex – fotoutställning",
      typ: "Tillfällig",
      start: "2007-01-21",
      slut: "2007-02-25",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Fotoskolan Skåne."
    },
    {
      id: 852,
      namn: "Herr Fransson skottar snö – Sverige och nazismen",
      typ: "Tillfällig",
      start: "2007-01-27",
      slut: "2007-03-18",
      lokal: "Uppgift saknas",
      kommentar: "Producerad av Forum för Levande historia och filmregissören Roy Andersson."
    },
    {
      id: 853,
      namn: "Amor – kärlek och erotik i antikens Rom",
      typ: "Tillfällig",
      start: "2007-03-04",
      slut: "2007-04-30",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 854,
      namn: "Personligt silver och guld",
      typ: "Tillfällig",
      start: "2007-03-18",
      slut: "2007-04-01",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 855,
      namn: "Lustar – drömmar och fantasier",
      typ: "Tillfällig",
      start: "2007-03-22",
      slut: "2007-12-30",
      lokal: "Uppgift saknas",
      kommentar: "Med utgångspunkt i material med anknytning till fruktsamhet, kön, sexualmoral och tabun."
    },
    {
      id: 856,
      namn: "In hate we trust – fotografier av Elisabeth Ohlson Wallin",
      typ: "Tillfällig",
      start: "2007-04-06",
      slut: "2007-05-13",
      lokal: "Uppgift saknas",
      kommentar: "Om det hat och våld som drabbar homo-, bi- och transsexuella i samhället."
    },
    {
      id: 857,
      namn: "Ståndare och pistiller – Linné i parken",
      typ: "Tillfällig",
      start: "2007-04-15",
      slut: "2007-09-30",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 858,
      namn: "Sagan om ägget",
      typ: "Tillfällig",
      start: "2007-04-29",
      slut: "2007-09-09",
      lokal: "Uppgift saknas",
      kommentar: "Um livets uppkomst både ur perspektiv från gamla myter och nutida forskning;  tog sin utgångspunkt ur en stor samling av ägg skapad av professor Nils Otto Sjöberg."
    },
    {
      id: 859,
      namn: "Herbarium – fotoutställning Gabriella Dahlman",
      typ: "Tillfällig",
      start: "2007-05-06",
      slut: "2007-08-26",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 860,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2007-06-16",
      slut: "2007-08-26",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 861,
      namn: "John Bauer – Bergakungen och Sagogarderoben",
      typ: "Tillfällig",
      start: "2007-06-17",
      slut: "2007-09-30",
      lokal: "Uppgift saknas",
      kommentar: "Producerad av Jönköpings länsmuseum, Högskolan i Borås och Smålands Musik och Teater; om den ofullbordade balletten \"Bergakungen\" samt utklädningsmaterial."
    },
    {
      id: 862,
      namn: "Touch me – fotoutstuällning Viveca Ohlsson",
      typ: "Tillfällig",
      start: "2007-09-02",
      slut: "2007-10-28",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 863,
      namn: "A history of sex – fotoutställning Andres Serrano",
      typ: "Tillfällig",
      start: "2007-09-23",
      slut: "2007-12-30",
      lokal: "Uppgift saknas",
      kommentar: "Om människors hemliga sexuella fantasier."
    },
    {
      id: 864,
      namn: "Min plats i Skåne – fotoutställning Anders Roos och Michael Tegnér",
      typ: "Tillfällig",
      start: "2007-11-04",
      slut: "2008-01-06",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 865,
      namn: "Vapen – makt över liv",
      typ: "Basutställning",
      start: "2008-01-20",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen (källarvåningen)",
      kommentar: "Kulturen har en stor och bred vapensamling som kan berätta om vapnens roll både i krig och i jakt; berättelsen om Slaget vid Lund utgör en viktig del."
    },
    {
      id: 866,
      namn: "Makt över liv – en tolkning av elever från Fotoskolan Skåne",
      typ: "Tillfällig",
      start: "2008-01-20",
      slut: "2008-02-24",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: ""
    },
    {
      id: 867,
      namn: "Drömmar – utställning av sparbössor",
      typ: "Tillfällig",
      start: "2008-01-27",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Sparbanken Finn."
    },
    {
      id: 868,
      namn: "Drakar från Kina",
      typ: "Tillfällig",
      start: "2008-02-17",
      slut: "2008-09-28",
      lokal: "Textilhallen",
      kommentar: "I samarberte med  Tetra Pak; med anledning av att de Olympiska spelen skulle äga rum i Kina och att det publika intresset för landet därmed kunde förväntas vara stort."
    },
    {
      id: 869,
      namn: "Påskutställning",
      typ: "Tillfällig",
      start: "2008-02-26",
      slut: "2008-03-24",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 870,
      namn: "Uarda – 100 år av spex (1908–2008)",
      typ: "Tillfällig",
      start: "2008-03-30",
      slut: "2008-05-04",
      lokal: "Lindforska huset (Universitetsmuseet), Vita huset (Trädgårdsrummet)",
      kommentar: "I samarbete med Lundaspexarna och AF."
    },
    {
      id: 871,
      namn: "Kina – mitt i världen",
      typ: "Tillfällig",
      start: "2008-05-11",
      slut: "2014-09-dd",
      lokal: "Vita huset (andra våningen)",
      kommentar: "Kinas historia, kultur och konst."
    },
    {
      id: 872,
      namn: "Fotografi, Emma Krantz",
      typ: "Tillfällig",
      start: "2008-05-18",
      slut: "2008-08-30",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Fotografier ur serien \"If all\""
    },
    {
      id: 873,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2008-06-07",
      slut: "2008-08-31",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 874,
      namn: "Bilder av Kina – fotoutställning",
      typ: "Tillfällig",
      start: "2008-09-07",
      slut: "2008-11-16",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 875,
      namn: "Övergivna platser – fotoutställning",
      typ: "Tillfällig",
      start: "2008-09-13",
      slut: "2009-01-11",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 876,
      namn: "Trådar från Mittens rike – dockteater i Kina och världen",
      typ: "Tillfällig",
      start: "2008-09-14",
      slut: "2009-01-06",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Michael Meschke från Marionettmuseet."
    },
    {
      id: 877,
      namn: "Kinesiskt tuschmåleri – ur det gamla föds det nya",
      typ: "Tillfällig",
      start: "2008-10-26",
      slut: "2009-01-25",
      lokal: "Uppgift saknas",
      kommentar: "Målningar av de nutida kinesiska konstnärerna Cui Zifan, Zeng Mi och Jiang Baolin."
    },
    {
      id: 878,
      namn: "Julkalendrar",
      typ: "Tillfällig",
      start: "2008-11-25",
      slut: "2009-01-11",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 879,
      namn: "Med skägget i brevlådan",
      typ: "Tillfällig",
      start: "2008-12-02",
      slut: "2009-01-11",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Anagram Produktion, SVT, SR och Lunds kommun."
    },
    {
      id: 880,
      namn: "Ur egen hand – fotoutställning Fotoskolan Skåne",
      typ: "Tillfällig",
      start: "2009-01-18",
      slut: "2009-02-28",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 881,
      namn: "Signe Perrson-Melin, keramiker och formgivare",
      typ: "Tillfällig",
      start: "2009-02-22",
      slut: "2009-08-16",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Prins Eugens Waldemarsudde."
    },
    {
      id: 882,
      namn: "Hålkamerabilder i ädeltekniger – fotoutställning",
      typ: "Tillfällig",
      start: "2009-02-28",
      slut: "2009-03-29",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 883,
      namn: "Uighurer – Kinas bortglömda muslimer",
      typ: "Tillfällig",
      start: "2009-03-01",
      slut: "2009-05-31",
      lokal: "Vita huset (andra våningen)",
      kommentar: "Som en fördjupning till utställningen \"Kina – mitt i världen\"; i samarbete med fotogalleriet Format, Malmö."
    },
    {
      id: 884,
      namn: "Påskutställning",
      typ: "Tillfällig",
      start: "2009-03-17",
      slut: "2009-04-13",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 885,
      namn: "En utställning om Island",
      typ: "Tillfällig",
      start: "2009-04-25",
      slut: "2009-05-31",
      lokal: "Uppgift saknas",
      kommentar: "Fotoutställning; bilderna tagna i Reykjavik och omnejd; slutresultatet av ett projektarbete av Helena Hansen, gymnasieskolan Spyken."
    },
    {
      id: 886,
      namn: "Refricater – fotoserier av Christer Järeslätt",
      typ: "Tillfällig",
      start: "2009-05-17",
      slut: "2009-09-27",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 887,
      namn: "Ostrolocus 50 år – Östgöta nationshus historia",
      typ: "Tillfällig",
      start: "2009-05-28",
      slut: "2009-09-30",
      lokal: "Uppgift saknas",
      kommentar: "I samarbete med Östgöta Nation i Lund."
    },
    {
      id: 888,
      namn: "Folkdräktsträditioner – Bea Szenfeld",
      typ: "Tillfällig",
      start: "2009-05-28",
      slut: "2009-12-30",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 889,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2009-06-13",
      slut: "2009-08-31",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 890,
      namn: "Hellsinglund – en hyllning till Lennart Hellsing",
      typ: "Tillfällig",
      start: "2009-09-19",
      slut: "2010-mm-dd",
      lokal: "Lundahallen",
      kommentar: "Invigdes samma dag som Kulturnatten i Lund."
    },
    {
      id: 891,
      namn: "Gjort det själv",
      typ: "Tillfällig",
      start: "2009-10-18",
      slut: "2009-12-31",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 892,
      namn: "Folkkonst & Design: Dräktmod",
      typ: "Basutställning",
      start: "2009-10-18",
      slut: "åååå-mm-dd",
      lokal: "Wahlbomska huset",
      kommentar: "Folklig skånsk dräkt ställs i kontrast till nutida design, skapad av studenter från olika designskolor."
    },
    {
      id: 893,
      namn: "Folkkonst & Design: Formfröjd – samtal med historien",
      typ: "Basutställning",
      start: "2009-10-18",
      slut: "2022-06-06",
      lokal: "Ystadhuset, Schlyterska huset",
      kommentar: "En utställning med konst och design skapad med det folkliga som inspiration."
    },
    {
      id: 894,
      namn: "Folkkonst & Design: Märk väl! – personliga minnesmärken",
      typ: "Basutställning",
      start: "2009-10-18",
      slut: "2021-04-27",
      lokal: "Ystadhuset, Schlyterska huset",
      kommentar: "Initialer och årtal på folkkonstföremål – vad berättar dom?"
    },
    {
      id: 895,
      namn: "Henry B. Goodwin",
      typ: "Tillfällig",
      start: "2009-10-24",
      slut: "2010-01-10",
      lokal: "Uppgift saknas",
      kommentar: "Innehåller ädelkopierade originalfotografier av piktorialisten och porträttören Henry B Goodwin; samarbete med Historiska Media."
    },
    {
      id: 896,
      namn: "Tibetbilder",
      typ: "Tillfällig",
      start: "2009-mm-dd",
      slut: "2010-mm-dd",
      lokal: "Vita huset (andra våningen)",
      kommentar: "Som komplement till utställningen \"Kina – mitt i världen\""
    },
    {
      id: 897,
      namn: "Designat",
      typ: "Tillfällig",
      start: "2010-01-24",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Av Folkuniversitetets fotoskola."
    },
    {
      id: 898,
      namn: "Anne Frank & jag",
      typ: "Tillfällig",
      start: "2010-01-27",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 899,
      namn: "Bengt Böckman – bilder från ett liv",
      typ: "Tillfällig",
      start: "2010-01-31",
      slut: "2010-04-18",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 900,
      namn: "Albrecht Dürer och den stora passionen",
      typ: "Tillfällig",
      start: "2010-02-14",
      slut: "2010-06-27",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 901,
      namn: "Påsktraditioner",
      typ: "Tillfällig",
      start: "2010-03-09",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 902,
      namn: "Kreativ virkning",
      typ: "Tillfällig",
      start: "2010-05-08",
      slut: "2010-06-27",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 903,
      namn: "Karnevalsfilm 100 år",
      typ: "Tillfällig",
      start: "2010-05-17",
      slut: "2010-08-29",
      lokal: "Lindforska huset (Universitetsmuseet)",
      kommentar: "En liten skärmutställning; filmens utveckling från 1908 fram tills idag."
    },
    {
      id: 904,
      namn: "Da Capo",
      typ: "Tillfällig",
      start: "2010-05-30",
      slut: "2010-09-01",
      lokal: "Uppgift saknas",
      kommentar: "Fotoutställning."
    },
    {
      id: 905,
      namn: "Folkkonst & Design: Bröllop!",
      typ: "Basutställning",
      start: "2010-06-17",
      slut: "åååå-mm-dd",
      lokal: "Wahlbomska huset",
      kommentar: "Färgrika föremål och folkliga traditioner från 1800-talet, samt 100 års bröllopsfotografier."
    },
    {
      id: 906,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2010-06-dd",
      slut: "2010-08-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 907,
      namn: "Åke Axelsson – möbelskaparen",
      typ: "Tillfällig",
      start: "2010-10-03",
      slut: "2011-01-30",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 908,
      namn: "Stefan Castas gröna tråd",
      typ: "Tillfällig",
      start: "2010-10-12",
      slut: "2011-01-09",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 909,
      namn: "Parkskulpturer",
      typ: "Tillfällig",
      start: "2010-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 910,
      namn: "Hållbart – fotoutställning",
      typ: "Tillfällig",
      start: "2011-01-23",
      slut: "2011-02-27",
      lokal: "Uppgift saknas",
      kommentar: "Av Fotoskolan Skåne."
    },
    {
      id: 911,
      namn: "Förbisett – när vardagen glimrar till",
      typ: "Tillfällig",
      start: "2011-04-03",
      slut: "2011-08-28",
      lokal: "Uppgift saknas",
      kommentar: "Bygger på fotoboken \"Förbisett\" och visar det som tillfälligt glimrar till i vardagen, det tillfälligt stämningsfulla."
    },
    {
      id: 912,
      namn: "Rapporter från ett tält",
      typ: "Tillfällig",
      start: "2011-05-01",
      slut: "2011-08-dd",
      lokal: "Friluftsmuseet",
      kommentar: "Av Lunds Konst- och Designskola."
    },
    {
      id: 913,
      namn: "Folkkonst & Design: Folkonstens skapare",
      typ: "Basutställning",
      start: "2011-05-08",
      slut: "åååå-mm-dd",
      lokal: "Ystadhuset, Schlyterska huset",
      kommentar: "Kulturens bästa föremål av träsnideri, målade skåp och skrin, broderier samt smide."
    },
    {
      id: 914,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2011-06-dd",
      slut: "2011-08-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 915,
      namn: "Popstad Lund",
      typ: "Tillfällig",
      start: "2011-10-30",
      slut: "2013-01-13",
      lokal: "Uppgift saknas",
      kommentar: "Projektet Popstad Lund startade på Facebook med insamling bilder och berättelser kring Lunds musikliv under åren 1971–1996; utställningen bestod av över tusen föremål som privatpersoner lånat ut."
    },
    {
      id: 916,
      namn: "Kulturen ReMix",
      typ: "Tillfällig",
      start: "2011-mm-dd",
      slut: "2011-03-11",
      lokal: "Uppgift saknas",
      kommentar: "Av elever från tre folkhögskolor."
    },
    {
      id: 917,
      namn: "Påskutställning",
      typ: "Tillfällig",
      start: "2011-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 918,
      namn: "Folkdräktstolkningar",
      typ: "Tillfällig",
      start: "2011-mm-dd",
      slut: "åååå-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Av Sätergläntans elever."
    },
    {
      id: 919,
      namn: "Yllebroderi – ett urval av Kulturens yllebroderier",
      typ: "Tillfällig",
      start: "2011-mm-dd",
      slut: "2011-mm-dd",
      lokal: "Textilhallen",
      kommentar: "I samband med boksläppet av \"Yllebroderier\" som ges ut av Hemslöjdens förlag."
    },
    {
      id: 920,
      namn: "Utomhusinstallation av Bea Szenfeld",
      typ: "Tillfällig",
      start: "2011-mm-dd",
      slut: "2011-mm-dd",
      lokal: "Friluftsmuseet",
      kommentar: ""
    },
    {
      id: 921,
      namn: "Halle & Lomakka",
      typ: "Tillfällig",
      start: "2011-mm-dd",
      slut: "2011-mm-dd",
      lokal: "Uppgift saknas",
      kommentar: "Kim Halle och Barbro Lomakkas gemensamma produktion."
    },
    {
      id: 922,
      namn: "Strindberg och fotokonsten",
      typ: "Tillfällig",
      start: "2012-01-22",
      slut: "2012-03-22",
      lokal: "Uppgift saknas",
      kommentar: "Producerad av Strindbergsmuseet i Stockholm."
    },
    {
      id: 923,
      namn: "Det gröna hjärtat",
      typ: "Tillfällig",
      start: "2012-03-18",
      slut: "2012-04-22",
      lokal: "Uppgift saknas",
      kommentar: ""
    },
    {
      id: 924,
      namn: "Alfons Åberg fyller år!",
      typ: "Tillfällig",
      start: "2012-04-15",
      slut: "2013-01-06",
      lokal: "Uppgift saknas",
      kommentar: "Lekutställning med anledning av att barnboksfiguren Alfons Åberg fyllde 40 år."
    },
    {
      id: 925,
      namn: "Folkkonst & Design: ByggnadsKulturen",
      typ: "Basutställning",
      start: "2012-06-10",
      slut: "åååå-mm-dd",
      lokal: "Wahlbomska huset",
      kommentar: "Material och byggnadstekniker från olika tider."
    },
    {
      id: 926,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2012-06-dd",
      slut: "2012-08-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 927,
      namn: "Kulturgranar",
      typ: "Tillfällig",
      start: "2012-12-02",
      slut: "2012-12-dd",
      lokal: "Borgarhuset (Hornsbergssalen)",
      kommentar: "Julgransutställning."
    },
    {
      id: 928,
      namn: "Smyckat – unga designers inspireras av skånsk dräkt",
      typ: "Tillfällig",
      start: "2013-01-26",
      slut: "2014-05-dd",
      lokal: "Ystadhuset",
      kommentar: "Av elever från HDK (Högskolan för design och konsthantverk, Göteborg)."
    },
    {
      id: 929,
      namn: "EPA – Martin Bogren",
      typ: "Tillfällig",
      start: "2013-02-16",
      slut: "2013-04-28",
      lokal: "Uppgift saknas",
      kommentar: "Fotoutställning med den skånske fotografen Martin Bogren."
    },
    {
      id: 930,
      namn: "Vem är jag?",
      typ: "Tillfällig",
      start: "2013-02-17",
      slut: "2013-09-01",
      lokal: "Uppgift saknas",
      kommentar: "Skiljer sig barns självporträtt uttrycksmässigt från konstnärernas?"
    },
    {
      id: 931,
      namn: "Stradanus – hovkonstnär hos Medici",
      typ: "Basutställning",
      start: "2013-03-17",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: "Grafiska blad av den flamländske målaren Johannes Stradanus."
    },
    {
      id: 932,
      namn: "Romernas svenska kulturhistoria",
      typ: "Tillfällig",
      start: "2013-04-02",
      slut: "2013-05-02",
      lokal: "Friluftsmuseet",
      kommentar: "Producerad av Romska kulturcentret i Malmö; visades i en vagn i friluftsmuseet."
    },
    {
      id: 933,
      namn: "Sinnligt och Sakligt – Lars Håkansson",
      typ: "Tillfällig",
      start: "2013-04-21",
      slut: "2013-09-15",
      lokal: "Uppgift saknas",
      kommentar: "Skånske Lars Håkansson hör till de mest uppmärksammade silversmederna i Sverige."
    },
    {
      id: 934,
      namn: "Modefotografier – Carl Bengtsson",
      typ: "Tillfällig",
      start: "2013-05-26",
      slut: "2013-11-03",
      lokal: "Lundahallen",
      kommentar: "Visar ett fyrtiotal bilder av en av landets mest uppmärksammade modefotografer."
    },
    {
      id: 935,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2013-06-dd",
      slut: "2013-08-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 936,
      namn: "Det här är jag!",
      typ: "Tillfällig",
      start: "2013-09-14",
      slut: "2013-12-01",
      lokal: "Allmogehallen",
      kommentar: "Barns egna självporträtt; ett tillfälle att reflektera över den egna identiteten, drömmarna och framtiden."
    },
    {
      id: 937,
      namn: "Guldkorn",
      typ: "Tillfällig",
      start: "2013-10-13",
      slut: "2014-03-09",
      lokal: "Textilhallen",
      kommentar: "Spännande, vackra, fascinerande föremål och berättelser ur museets magasin."
    },
    {
      id: 938,
      namn: "Min värld",
      typ: "Tillfällig",
      start: "2014-01-12",
      slut: "2014-08-24",
      lokal: "Allmogehallen",
      kommentar: "Elever från årskurs 3 har dokumenterat sina tankar och drömmar."
    },
    {
      id: 939,
      namn: "Denise Grünstein – fotoutställning",
      typ: "Tillfällig",
      start: "2014-01-19",
      slut: "2014-03-30",
      lokal: "Vita huset, Lundahallen",
      kommentar: "Med verk både från hennes senaste serier \"Wunder\" och \"Winter\" och från äldre serier. Genom sin kamera utforskar hon kroppen och tolkar omvärlden."
    },
    {
      id: 940,
      namn: "Att göra skillnad – att rädda liv",
      typ: "Tillfällig",
      start: "2014-01-21",
      slut: "2014-02-28",
      lokal: "Uppgift saknas",
      kommentar: "En inlånad utställning om de bulgariska judarna som helt undkom förintelsen."
    },
    {
      id: 941,
      namn: "Hjärtprojektet",
      typ: "Tillfällig",
      start: "2014-01-26",
      slut: "2014-01-dd",
      lokal: "Ystadhuset",
      kommentar: "Hjärtprojektet genomfördes på Skönadalsskolan i Hofterup läsåret 2005/2006"
    },
    {
      id: 942,
      namn: "Granne med Kulturen",
      typ: "Tillfällig",
      start: "2014-02-15",
      slut: "2014-05-04",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Originalillustrationer och dikter av den folkkära diktaren, översättaren och psalmförfattaren Britt G. Hallqvist (1914-97) som i många år bodde på S:t Annegatan i Lund."
    },
    {
      id: 943,
      namn: "Mötesplatser",
      typ: "Tillfällig",
      start: "2014-03-21",
      slut: "2014-05-25",
      lokal: "Vita huset (Auditoriet)",
      kommentar: "Av etnologistudenter från Lunds universitet som har gjort fältövningar på olika mötesplatser i Lund."
    },
    {
      id: 944,
      namn: "Gudrun Sjödén – 40 år av inspiration",
      typ: "Tillfällig",
      start: "2014-05-04",
      slut: "2015-03-08",
      lokal: "Textilhallen",
      kommentar: "Lena Drake är utställningsarkitekt och står för formgivning och utställningsskyltar."
    },
    {
      id: 945,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2014-06-07",
      slut: "2014-08-dd",
      lokal: "Vita huset (andra våningen, väggen)",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 946,
      namn: "Spelar roll",
      typ: "Tillfällig",
      start: "2014-09-12",
      slut: "2015-01-11",
      lokal: "Uppgift saknas",
      kommentar: "Om civilkurage och att våga ta ställning; från Forum för levande historia."
    },
    {
      id: 947,
      namn: "Hjälp att andas",
      typ: "Tillfällig",
      start: "2014-11-14",
      slut: "åååå-mm-dd",
      lokal: "Livets museum",
      kommentar: "Om andningsvård och respiratorer."
    },
    {
      id: 948,
      namn: "Emil!",
      typ: "Tillfällig",
      start: "2015-02-14",
      slut: "2016-01-10",
      lokal: "Allmogehallen",
      kommentar: "Lekutställning."
    },
    {
      id: 949,
      namn: "Vinden – en utställning om Lund",
      typ: "Tillfällig",
      start: "2015-03-21",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: "Om människors liv i Lund – deras vardag, arbete, drömmar, minnen och föremål – från 1700-talet till idag."
    },
    {
      id: 950,
      namn: "Staged Fashion – designed identities",
      typ: "Tillfällig",
      start: "2015-04-12",
      slut: "2015-08-23",
      lokal: "Textilhallen",
      kommentar: "Har du hört talas om Army of Lovers, The Knife och Yohio? Känner du till Camilla Thulin, Bella Rune eller Katarina de Bourg som skapat deras kläder? I utställningen får du se originaldräkter... "
    },
    {
      id: 951,
      namn: "Krigsslutet 1945",
      typ: "Tillfällig",
      start: "2015-05-08",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen)",
      kommentar: "I år är det 70 år sedan andra världskriget tog slut. I en mindre utställning återger vi minnesfragment från tiden då krig förbyttes mot fred."
    },
    {
      id: 952,
      namn: "Världen på Kulturen",
      typ: "Basutställning",
      start: "2015-05-10",
      slut: "åååå-mm-dd",
      lokal: "Herrehuset",
      kommentar: "Kulturens stora samling av keramik från olika delar av världen."
    },
    {
      id: 953,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2015-06-13",
      slut: "2015-08-dd",
      lokal: "Wahlbomska huset",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 954,
      namn: "Tro, hopp och hälsa",
      typ: "Basutställning",
      start: "2015-09-04",
      slut: "2020-09-30",
      lokal: "Medicinhistoriska museet i Helsingborg",
      kommentar: "En upplevelsebaserad tidsresa i medicinens utveckling. Den handlar om synen på sjukdom, vad som anses som friskt eller sjukt och hur detta har förändrats över tid."
    },
    {
      id: 955,
      namn: "Africa is a Great Country – Jens Assur",
      typ: "Tillfällig",
      start: "2015-09-13",
      slut: "2016-01-10",
      lokal: "Textilhallen",
      kommentar: "Fotoutställning."
    },
    {
      id: 956,
      namn: "P.K. – en utställning om intolerans",
      typ: "Tillfällig",
      start: "2015-09-25",
      slut: "2016-02-28",
      lokal: "Vita huset",
      kommentar: "Producerad av Forum för levande historia."
    },
    {
      id: 957,
      namn: "Mitt Lund",
      typ: "Tillfällig",
      start: "2016-01-31",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen)",
      kommentar: "Internationella elevers bild om Lund, en internationell stad."
    },
    {
      id: 958,
      namn: "Barockt III – rock i barocken",
      typ: "Tillfällig",
      start: "2016-03-12",
      slut: "2016-05-15",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "Blomsterkonstnären Tage Andersen och fotografen Bent Rej."
    },
    {
      id: 959,
      namn: "Pettson och Findus – en lekutställning",
      typ: "Tillfällig",
      start: "2016-04-16",
      slut: "2017-04-17",
      lokal: "Allmogehallen",
      kommentar: "Lekutställning."
    },
    {
      id: 960,
      namn: "Romska röster",
      typ: "Tillfällig",
      start: "2016-05-21",
      slut: "2016-08-07",
      lokal: "Vita huset",
      kommentar: "Vandringsutställning."
    },
    {
      id: 961,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2016-06-09",
      slut: "2016-08-dd",
      lokal: "Wahlbomska huset",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 962,
      namn: "Bröst – fotografier av Elisabeth Ohlson Wallin",
      typ: "Tillfällig",
      start: "2016-06-11",
      slut: "2016-09-11",
      lokal: "Textilhallen",
      kommentar: "En fotoutställning som vill få oss att fundera kring kroppsideal, hur normer skapas och hur de påverkar synen på våra egna och andras kroppar."
    },
    {
      id: 963,
      namn: "Gynning x 3",
      typ: "Tillfällig",
      start: "2016-10-08",
      slut: "2017-01-22",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "Målningar av Carolina Gynning, skulpturer av Agneta Gynning och textila verk av Lars Gynning."
    },
    {
      id: 964,
      namn: "Julfotografier ur gömmorna",
      typ: "Tillfällig",
      start: "2016-12-06",
      slut: "2017-01-06",
      lokal: "Herrehuset (källaren)",
      kommentar: "Fotoutställning med jultema."
    },
    {
      id: 965,
      namn: "Hela världen brinner",
      typ: "Tillfällig",
      start: "2017-02-08",
      slut: "2017-05-28",
      lokal: "Lundahallen",
      kommentar: "Tar avstamp i Astrid Lindgrens krigsdagböcker från andra världskriget; producerad av Annmari Kastrup på Actit kommunikation på uppdrag av Stiftelsen för bevarandet av Astrid Lindgrens gärning."
    },
    {
      id: 966,
      namn: "Mumin – en lekutställning",
      typ: "Tillfällig",
      start: "2017-05-21",
      slut: "2018-01-14",
      lokal: "Allmogehallen",
      kommentar: "Lekutställning."
    },
    {
      id: 967,
      namn: "The Studio of Vanities – Omar Victor Diop",
      typ: "Tillfällig",
      start: "2017-06-10",
      slut: "2018-01-21",
      lokal: "Textilhallen",
      kommentar: "Fotografier av Omar Victor Diop."
    },
    {
      id: 968,
      namn: "Uppklädd – kvinnligt mode 1730–2000",
      typ: "Basutställning",
      start: "2017-06-10",
      slut: "åååå-mm-dd",
      lokal: "Textilhallen",
      kommentar: "En utställning med kvinnliga modedräkter och festklänningar ur museets samlingar."
    },
    {
      id: 969,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2017-06-dd",
      slut: "2017-08-dd",
      lokal: "Wahlbomska huset",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 970,
      namn: "Hasse och Tage",
      typ: "Tillfällig",
      start: "2017-07-01",
      slut: "2018-02-04",
      lokal: "Lundahallen",
      kommentar: "I sambarbete med Universitetsbiblioteket i Lund."
    },
    {
      id: 971,
      namn: "Katja of Sweden",
      typ: "Tillfällig",
      start: "2017-09-12",
      slut: "2018-02-18",
      lokal: "Textilhallen",
      kommentar: "Ett urval av Katja Geigers design."
    },
    {
      id: 972,
      namn: "Att se in i kroppen",
      typ: "Basutställning",
      start: "2017-09-19",
      slut: "2019-06-21",
      lokal: "Livets museum",
      kommentar: "Om teknik som gjort det möjligt att titta in i den mänskliga kroppen utan att först öppna upp den."
    },
    {
      id: 973,
      namn: "Stämplad",
      typ: "Tillfällig",
      start: "2017-09-26",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Från Forum för levande historia."
    },
    {
      id: 974,
      namn: "En stund i Lund – staden från 1500-talet till idag",
      typ: "Basutställning",
      start: "2017-11-11",
      slut: "åååå-mm-dd",
      lokal: "Vita huset (andra våningen)",
      kommentar: "Stadshistorisk utställning om Lund från 1500-talet till idag, uppbyggd kring olika teman och spänner över 500 år."
    },
    {
      id: 975,
      namn: "Alice i Underlandet – en lekutställning",
      typ: "Tillfällig",
      start: "2018-02-18",
      slut: "2019-01-13",
      lokal: "Allmogehallen",
      kommentar: "Lekutställning."
    },
    {
      id: 976,
      namn: "Unika och lika – möten, teckning och samtal",
      typ: "Tillfällig",
      start: "2018-03-04",
      slut: "2018-05-06",
      lokal: "Vita huset",
      kommentar: "Av Kulturcentrum Skåne; kulturarbetstagares och studenters möten med personer i Lund som ägnat sina liv åt kultur i olika former."
    },
    {
      id: 977,
      namn: "A Sense of Jane Austen – dräkt & historia",
      typ: "Tillfällig",
      start: "2018-04-07",
      slut: "2018-09-02",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "Ett samarbete med Skoklosters slott/Statens Historiska Museer; visas dräkter från filmatiseringar av Jane Austens romaner \"Stolthet & fördom\", \"Förnuft & känsla\" och \"Övertalning\""
    },
    {
      id: 978,
      namn: "Nell Walden i Modernismen – miniutställning",
      typ: "Tillfällig",
      start: "2018-06-02",
      slut: "2018-08-31",
      lokal: "Vita huset (Trädgårdsrummet)",
      kommentar: "Nell Wallden spelade en betydande roll inom modernismen."
    },
    {
      id: 979,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2018-06-dd",
      slut: "2018-08-dd",
      lokal: "Wahlbomska huset",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 980,
      namn: "Fokus Sápmi",
      typ: "Basutställning",
      start: "2018-09-22",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset",
      kommentar: "Skildrar samernas historia och kultur och knyter också an till nutidens Sápmi."
    },
    {
      id: 981,
      namn: "Klädd för porträtt – fotografier ur Kulturens samlingar",
      typ: "Tillfällig",
      start: "2018-10-06",
      slut: "2019-01-06",
      lokal: "Textilhallen",
      kommentar: "Visar hur människor iscensatt sig själva genom den klädsel de valt inför fotograferingen."
    },
    {
      id: 982,
      namn: "Upphovsmannen är en kvinna",
      typ: "Tillfällig",
      start: "2018-10-06",
      slut: "2019-01-13",
      lokal: "Lundahallen",
      kommentar: "Utställningen presenterar tre kvinnor som under 1900-talet trotsade samhällets föreställningar och visade att det var möjligt att inta en framstående plats inom presskåren."
    },
    {
      id: 983,
      namn: "Miniutställning: Katja of Sweden",
      typ: "Tillfällig",
      start: "2018-10-23",
      slut: "2019-01-06",
      lokal: "Textilhallen",
      kommentar: "Visar ett litet smakprov av Katjas design, åtta dräkter, i en monter i Textilhallen."
    },
    {
      id: 984,
      namn: "Alla ska passa in",
      typ: "Tillfällig",
      start: "2019-01-23",
      slut: "2019-05-05",
      lokal: "Lundahallen",
      kommentar: "Vandringsutställning; om hur vi dömer varandra; ett samarbete mellan Arbetets museum, Riksutställningar och Världskulturmuseet, med finansiering av Allmänna Arvsfonden."
    },
    {
      id: 985,
      namn: "id:TRANS - Från Kung Kristina till idag",
      typ: "Tillfällig",
      start: "2019-01-26",
      slut: "2019-05-05",
      lokal: "Textilhallen",
      kommentar: "Av Elisabeth Ohlson Wallin; i denna utställning lyfter fotokonstnären Elisabeth Ohlson Wallin fram transpersoners liv, situation och rättigheter."
    },
    {
      id: 986,
      namn: "Hans och Greta – en lekutställning",
      typ: "Tillfällig",
      start: "2019-02-17",
      slut: "2020-01-12",
      lokal: "Allmogehallen",
      kommentar: "Lekutställning."
    },
    {
      id: 987,
      namn: "Lengertz kulturpris",
      typ: "Tillfällig",
      start: "2019-06-08",
      slut: "2019-08-31",
      lokal: "Ystadhuset",
      kommentar: "Pristagarnas verk visas på Kulturen."
    },
    {
      id: 988,
      namn: "Katja of Sweden",
      typ: "Tillfällig",
      start: "2019-06-15",
      slut: "2020-02-23",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "Om Sveriges första internationellt kända modedesigner."
    },
    {
      id: 989,
      namn: "DINGS",
      typ: "Tillfällig",
      start: "2019-06-29",
      slut: "2019-09-22",
      lokal: "Herrehuset (källaren)",
      kommentar: "En del av Lunds konsthalls utställning \"Alltings mått. Om det (o)mänskliga\"; Utställningen samlar fyra konstnärer, alla med stark anknytning till den svenska och den regionala konstscenen, som ställer frågor om kropp, politik och subjektivitet: Ulrika Gomm, Hanni Kamaly, Santiago Mostyn och Sandra Mujinga."
    },
    {
      id: 990,
      namn: "Flyktingdokumentation",
      typ: "Tillfällig",
      start: "2019-07-03",
      slut: "2022-02-03",
      lokal: "Vita huset",
      kommentar: "En miniutställning baserad på resultatet av ett samarbete mellan Kulturen, Malmö museer, Regionmuseet Kristianstad och Institutionen för kulturvetenskaper vid Lunds universitet om dokumentationen av den stora flyktingströmmen till Skåne som började 2015"
    },
    {
      id: 991,
      namn: "Nasoteket",
      typ: "Tillfällig",
      start: "2019-07-03",
      slut: "2023-04-16",
      lokal: "Wahlbomska huset",
      kommentar: "En samling gipsavgjutningar av olika personers näsor – den första gjordes 1986 på komikern Hans Alfredson; utställningen fanns dessförinnan (och finns numera) i Akademiska föreningen i Lund."
    },
    {
      id: 992,
      namn: "Jag ser dig – Ida Ekelund",
      typ: "Basutställning",
      start: "2019-09-07",
      slut: "åååå-mm-dd",
      lokal: "Lindforska huset",
      kommentar: "Vem var Ida Ekelund och hur kom det sig att hon blev fotograf? Vilka var hennes kunder och hur såg fotografens arbete och ateljé ut i början av 1900-talet?"
    },
    {
      id: 993,
      namn: "Att gå vidare efter Ravensbrück – Inger Gulbrandsen",
      typ: "Tillfällig",
      start: "2019-10-06",
      slut: "2020-03-31",
      lokal: "Vita huset",
      kommentar: "Ett antal små lerdockor av konstnären Inger Gulbrandsen (1923–2016)."
    },
    {
      id: 994,
      namn: "Elsa Beskows sagovärld",
      typ: "Tillfällig",
      start: "2020-02-15",
      slut: "2022-01-17",
      lokal: "Allmogehallen",
      kommentar: "Lekutställning."
    },
    {
      id: 995,
      namn: "Carl Johan De Geer – den stora missuppfattningen",
      typ: "Tillfällig",
      start: "2020-04-04",
      slut: "2020-08-30",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "Producerad av Bildmuseet, Umeå universitet; presenterar Carl Johan De Geers textila arbeten."
    },
    {
      id: 996,
      namn: "Husmöten – Roger Marmdal tecknar hus i Lund",
      typ: "Tillfällig",
      start: "2020-04-18",
      slut: "2020-08-27",
      lokal: "Vita huset",
      kommentar: "I över två års tid har Roger Marmdal utvecklat ett projekt där han porträtterar hus i Lund."
    },
    {
      id: 997,
      namn: "Mopeden – en svensk designhistoria",
      typ: "Tillfällig",
      start: "2020-09-26",
      slut: "2021-01-28",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "Utställningen går på djupet i mopedens designhistoria, från 1950-talet till 1970-talet; producerades av journalisten och mopedhistorikern Claes Johansson."
    },
    {
      id: 998,
      namn: "TILT! – Flipperspelens kultur och historia",
      typ: "Tillfällig",
      start: "2020-09-26",
      slut: "2021-02-21",
      lokal: "Lundahallen",
      kommentar: "Berättar om flipperspelens tekniska, konstnärliga och kulturella historia; inlånad och producerad av Mats Holmquist och Claes Johansson i samarbete med Västergötlands museum "
    },
    {
      id: 999,
      namn: "Min kopp",
      typ: "Tillfällig",
      start: "2020-11-14",
      slut: "2020-12-dd",
      lokal: "Locus Virtutum",
      kommentar: "Gjord av praktikant Linnea Christensen."
    },
    {
      id: 1000,
      namn: "Fira demokratin!",
      typ: "Tillfällig",
      start: "2020-12-01",
      slut: "2021-05-27",
      lokal: "Vita huset",
      kommentar: "Vandringsutställning från Sveriges riksdag; berättar historien bakom beslutet om allmän och lika rösträtt."
    },
    {
      id: 1001,
      namn: "Sockerviken – en miniatyrby med pepparkakshus",
      typ: "Tillfällig",
      start: "2020-12-18",
      slut: "2021-01-10",
      lokal: "Schlyterska huset",
      kommentar: "Bidragen i Kulturens pepparkakshus-tävling har blivit en del av en miniatyrby."
    },
    {
      id: 1002,
      namn: "Cirkus",
      typ: "Tillfällig",
      start: "2021-04-10",
      slut: "2022-02-27",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "Pandemiår; i samarbete med Cirkus Rhodin och fotograf Åsa Sjöström; cirkusens historia, det hårda arbetet bakom kulisserna och de magiska stunderna i cirkusmanegen."
    },
    {
      id: 1003,
      namn: "Knitstart my heart – Anna Bauer",
      typ: "Tillfällig",
      start: "2021-09-25",
      slut: "2023-01-15",
      lokal: "Ystadhuset, Schlyterska huset",
      kommentar: "Pandemiår; Anna Bauers konstnärliga process och skapande inom flera olika tekniker (textil bildkonst och hönsestrik)."
    },
    {
      id: 1004,
      namn: "Konsten att höra till",
      typ: "Tillfällig",
      start: "2022-02-12",
      slut: "2022-04-17",
      lokal: "Vita huset",
      kommentar: "I samarbete med Sinikka Neuhaus (LU) och Katarina Blennow (LU); en utställning som tar sitt namn från ett internationellt forskningsprojekt som undersöker hur konstnärligt skapande kan påverka känslan av tillhörighet och erkännande i städer."
    },
    {
      id: 1005,
      namn: "Pippi Långstrump – en lekutställning",
      typ: "Tillfällig",
      start: "2022-02-19",
      slut: "2023-02-26",
      lokal: "Allmogehallen",
      kommentar: "Lekutställning."
    },
    {
      id: 1006,
      namn: "Kaffe – en het historia",
      typ: "Tillfällig",
      start: "2022-04-09",
      slut: "2023-02-05",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "En väldoftande utställning om mörk beska och vardaglig rit kring Sveriges mest älskade dryck."
    },
    {
      id: 1007,
      namn: "Vi som kom till er",
      typ: "Tillfällig",
      start: "2022-05-18",
      slut: "2023-04-10",
      lokal: "Vita huset",
      kommentar: "Om flyktingar som med hjälp av räddningsaktionerna de Vita bussarna och de Vita båtarna kom till Skåne efter andra världskriget; skapad av en klass vid Katedralskolans historieprogram."
    },
    {
      id: 1008,
      namn: "Med världen framför våra fötter (och bakom vår rygg)",
      typ: "Tillfällig",
      start: "2022-05-22",
      slut: "2022-06-08",
      lokal: "Herrehuset",
      kommentar: "En elevutställning där avgångsklassen på det estetiska programmet vid Drottning Blankas gymnasieskola i Lund."
    },
    {
      id: 1009,
      namn: "Scandinavian Design of Everyday Life",
      typ: "Tillfällig",
      start: "2022-09-24",
      slut: "2023-08-27",
      lokal: "Ystadhuset, Schlyterska huset",
      kommentar: "Producerad av Thomas Lindblad och Tove Alderin Studio; visar delar ur samlaren och författaren Thomas Lindblads unika samling av skandinaviska vardagsföremål."
    },
    {
      id: 1010,
      namn: "Mästarprovet – en rustning blir till",
      typ: "Tillfällig",
      start: "2023-02-18",
      slut: "2023-11-05",
      lokal: "Textilhallen",
      kommentar: "Visas en rekonstruktion av en 1500-talsrustning, tillverkad i nutid av rustningsmakare Albert Collins."
    },
    {
      id: 1011,
      namn: "Metropolis – Lund och medeltiden",
      typ: "Basutställning",
      start: "2023-02-18",
      slut: "åååå-mm-dd",
      lokal: "Vita huset",
      kommentar: "En förnyad version av utställningen \"Metropolis – Lund på medeltiden\" (se d.o.)."
    },
    {
      id: 1012,
      namn: "Sven Fristedt – mästare i mönster",
      typ: "Tillfällig",
      start: "2023-04-01",
      slut: "2024-01-28",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "I samarbete med Borås Cotton; en stor retrospektiv utställning om textilformgivaren Sven Fristedts långa och omfattande konstnärskap."
    },
    {
      id: 1013,
      namn: "Då och nu – en resa genom de lundensiska konstspråken",
      typ: "Tillfällig",
      start: "2023-04-22",
      slut: "2023-08-20",
      lokal: "Vita huset",
      kommentar: "Elever från gymnasieskolan Spyken i Lund skapat egna verk med utgångspunkt i några av Kulturens permanenta utställningar."
    },
    {
      id: 1014,
      namn: "Vi formger vår framtid",
      typ: "Tillfällig",
      start: "2023-05-22",
      slut: "2023-08-20",
      lokal: "Wahlbomska huset",
      kommentar: "Elevutställning där avgångsklassen på det estetiska programmet vid Drottning Blankas gymnasieskola i Lund visar upp resultaten av sina gymnasiearbeten."
    },
    {
      id: 1015,
      namn: "Moving on – röster från barn på flykt",
      typ: "Digital",
      start: "2023-05-27",
      slut: "åååå-mm-dd",
      lokal: "Digital utställning",
      kommentar: "En utställning och samtidsdokumentation producerad av Kulturen i Lund, Malmö museum och Regionmuseet Skåne i unikt samarbete med flera andra aktörer; filmade intervjuer med barn som flytt från det pågående kriget i Ukraina."
    },
    {
      id: 1016,
      namn: "En annan värld – konst från Sankt Lars sjukhus",
      typ: "Tillfällig",
      start: "2023-09-23",
      slut: "2028-mm-dd",
      lokal: "Ystadhuset, Schlyterska huset",
      kommentar: "Drygt 70 konstverk skapade av patienter intagna på Sankt Lars sjukhus, från 1880-talet och hundra år framåt."
    },
    {
      id: 1017,
      namn: "Women's Concentration Camp Experience",
      typ: "Tillfällig",
      start: "2024-01-24",
      slut: "2024-11-24",
      lokal: "Vita huset",
      kommentar: "Berättar om kvinnors upplevelser i tyska koncentrationsläger under andra världskriget."
    },
    {
      id: 1018,
      namn: "H.C. Andersens sagovärld – en lekutställning",
      typ: "Tillfällig",
      start: "2024-02-17",
      slut: "2026-01-11",
      lokal: "Allmogehallen",
      kommentar: "Lekutställning."
    },
    {
      id: 1019,
      namn: "2 tjugotal",
      typ: "Tillfällig",
      start: "2024-03-23",
      slut: "2027-08-dd",
      lokal: "Textilhallen, Lundahallen",
      kommentar: "I utställningen djupdyker vi i 1920-talet, en omvälvande tid som på många sätt var början på det moderna samhället."
    },
    {
      id: 1020,
      namn: "Den demokratiska konsten – om genus, klass, normer och maktrelationer",
      typ: "Tillfällig",
      start: "2024-04-06",
      slut: "2024-09-01",
      lokal: "Ystadhuset",
      kommentar: "Elever på gymnasieskolan Spyken har utforskat hur genus, klass och normer påverkar maktrelationer i samhället."
    },
    {
      id: 1021,
      namn: "Formgivna visioner",
      typ: "Tillfällig",
      start: "2024-05-24",
      slut: "2024-09-01",
      lokal: "Ystadhuset",
      kommentar: "Elevutställning där avgångsklassen på det estetiska programmet vid Drottning Blankas gymnasieskola i Lund visar upp resultaten av sina gymnasiearbeten."
    },
    {
      id: 1022,
      namn: "Sinnets landskap – om psykisk ohälsa och hopp",
      typ: "Tillfällig",
      start: "2025-03-15",
      slut: "2025-08-31",
      lokal: "Ystadhuset",
      kommentar: "Elever på gymnasieskolan Spyken har gett liv åt det osynliga landskap som formas av våra tankar och känslor kring psykisk ohälsa."
    },
    {
      id: 1023,
      namn: "Häcken full – Allmogeliv i Skåne för 200 år sedan",
      typ: "Basutställning",
      start: "2025-04-12",
      slut: "åååå-mm-dd",
      lokal: "Allmogehallen",
      kommentar: "Berättar om hur ett dygn i landslivet kunde se ut och om hur bondgårdens år var upplagt; målgrupp för utställningen är primärt skolbarn i åldern 9-12 år."
    },
    {
      id: 1024,
      namn: "Med grund i Lund",
      typ: "Tillfällig",
      start: "2025-05-16",
      slut: "2025-08-31",
      lokal: "Vita huset",
      kommentar: "Elevutställning skapad av avgångsklassen på det estetiska programmet med inriktning bild och formgivning, vid Drottning Blankas Gymnasieskola i Lund."
    },
    {
      id: 1025,
      namn: "Prästbostaden",
      typ: "Basutställning",
      start: "2025-05-16",
      slut: "åååå-mm-dd",
      lokal: "Dekanhuset",
      kommentar: "En ny medeltida miljö på Dekanhusets andra våning, en rekonstruerad prästbostad från 1500-talet inredd med handtillverkade möbler och textilier."
    }
];
