// Game state
let currentLanguage = 'en';
let currentLevel = 1;
let currentWeatherIndex = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let totalAttempts = 0;
let correctAttempts = 0;
let selectedClothes = {
    head: null,
    body: null,
    feet: null
};

// Multilingual content
const gameContent = {
    en: {
        gameTitle: "Weather Wizard",
        languageLabel: "Language:",
        instructionsTitle: "Instructions",
        instructionsText: "Look at the weather and drag the right clothes to dress up for that weather!",
        scoreLabel: "Score:",
        levelLabel: "Level:",
        streakLabel: "Streak:",
        weatherTitle: "Today's Weather",
        characterTitle: "Dress Me Up!",
        clothingTitle: "Choose Clothes",
        headLabel: "Head",
        bodyLabel: "Body",
        feetLabel: "Feet",
        checkBtn: "Check Outfit",
        clearBtn: "Clear All",
        nextBtn: "Next Weather",
        hintBtn: "Hint",
        hintTitle: "Weather Tips",
        closeHint: "Close",
        modalTitle: "Excellent!",
        modalText: "You've mastered this level!",
        finalScoreLabel: "Final Score:",
        accuracyLabel: "Accuracy:",
        bestStreakLabel: "Best Streak:",
        nextLevelBtn: "Next Level",
        restartBtn: "Play Again",
        perfectOutfit: "Perfect outfit! Great job! 🎉",
        goodOutfit: "Good outfit! Almost perfect! 👍",
        wrongOutfit: "Not quite right. Try different clothes! 🤔",
        selectMoreClothes: "Please select clothes for the weather!",
        levelComplete: "Level completed! Moving to next level! 🎊",
        weatherTypes: {
            sunny: {
                name: "Sunny",
                temp: "25°C",
                description: "Perfect for outdoor activities!",
                icon: "☀️",
                tips: "Sunny weather tips:\n• Wear light clothes\n• Don't forget sunglasses\n• T-shirt and shorts are perfect\n• Light shoes work best"
            },
            rainy: {
                name: "Rainy",
                temp: "15°C",
                description: "Don't forget your umbrella!",
                icon: "🌧️",
                tips: "Rainy weather tips:\n• Wear waterproof clothes\n• Boots keep feet dry\n• Jacket or raincoat is essential\n• Hat or hood protects head"
            },
            snowy: {
                name: "Snowy",
                temp: "-5°C",
                description: "Bundle up and stay warm!",
                icon: "❄️",
                tips: "Snowy weather tips:\n• Dress in warm layers\n• Warm hat is important\n• Winter boots are essential\n• Thick coat keeps you warm"
            },
            windy: {
                name: "Windy",
                temp: "18°C",
                description: "Hold onto your hat!",
                icon: "💨",
                tips: "Windy weather tips:\n• Secure clothing is important\n• Avoid loose items\n• Light jacket helps\n• Comfortable shoes"
            },
            cloudy: {
                name: "Cloudy",
                temp: "20°C",
                description: "Might rain later!",
                icon: "☁️",
                tips: "Cloudy weather tips:\n• Medium-weight clothes work\n• Light jacket just in case\n• Regular shoes are fine\n• Prepare for weather changes"
            },
            hot: {
                name: "Very Hot",
                temp: "35°C",
                description: "Stay cool and hydrated!",
                icon: "🔥",
                tips: "Very hot weather tips:\n• Wear minimal clothing\n• Sun hat protects head\n• Light breathable fabrics\n• Sandals are comfortable"
            }
        },
        clothes: {
            head: {
                sunhat: { name: "Sun Hat", icon: "👒", weather: ["sunny", "hot"] },
                winterhat: { name: "Winter Hat", icon: "🧢", weather: ["snowy", "windy"] },
                cap: { name: "Baseball Cap", icon: "🧢", weather: ["cloudy", "windy"] },
                hood: { name: "Hood", icon: "🎭", weather: ["rainy"] },
                sunglasses: { name: "Sunglasses", icon: "🕶️", weather: ["sunny", "hot"] }
            },
            body: {
                tshirt: { name: "T-Shirt", icon: "👕", weather: ["sunny", "hot"] },
                jacket: { name: "Jacket", icon: "🧥", weather: ["windy", "cloudy"] },
                raincoat: { name: "Raincoat", icon: "🧥", weather: ["rainy"] },
                wintercoat: { name: "Winter Coat", icon: "🧥", weather: ["snowy"] },
                sweater: { name: "Sweater", icon: "👔", weather: ["cloudy", "windy"] },
                tanktop: { name: "Tank Top", icon: "👕", weather: ["hot"] }
            },
            feet: {
                sandals: { name: "Sandals", icon: "👡", weather: ["sunny", "hot"] },
                boots: { name: "Boots", icon: "👢", weather: ["rainy", "snowy"] },
                sneakers: { name: "Sneakers", icon: "👟", weather: ["cloudy", "windy"] },
                flipflops: { name: "Flip Flops", icon: "🩴", weather: ["hot"] },
                winterboots: { name: "Winter Boots", icon: "👢", weather: ["snowy"] }
            }
        }
    },
    tr: {
        gameTitle: "Hava Durumu Sihirbazı",
        languageLabel: "Dil:",
        instructionsTitle: "Talimatlar",
        instructionsText: "Hava durumuna bakın ve o havaya uygun kıyafetleri sürükleyerek giydirin!",
        scoreLabel: "Puan:",
        levelLabel: "Seviye:",
        streakLabel: "Seri:",
        weatherTitle: "Bugünün Havası",
        characterTitle: "Beni Giydirin!",
        clothingTitle: "Kıyafet Seçin",
        headLabel: "Baş",
        bodyLabel: "Vücut",
        feetLabel: "Ayak",
        checkBtn: "Kıyafeti Kontrol Et",
        clearBtn: "Hepsini Temizle",
        nextBtn: "Sonraki Hava",
        hintBtn: "İpucu",
        hintTitle: "Hava Durumu İpuçları",
        closeHint: "Kapat",
        modalTitle: "Mükemmel!",
        modalText: "Bu seviyeyi ustaca tamamladınız!",
        finalScoreLabel: "Son Puan:",
        accuracyLabel: "Doğruluk:",
        bestStreakLabel: "En İyi Seri:",
        nextLevelBtn: "Sonraki Seviye",
        restartBtn: "Tekrar Oyna",
        perfectOutfit: "Mükemmel kıyafet! Harika iş! 🎉",
        goodOutfit: "İyi kıyafet! Neredeyse mükemmel! 👍",
        wrongOutfit: "Tam doğru değil. Farklı kıyafetler deneyin! 🤔",
        selectMoreClothes: "Lütfen hava durumu için kıyafet seçin!",
        levelComplete: "Seviye tamamlandı! Sonraki seviyeye geçiliyor! 🎊",
        weatherTypes: {
            sunny: {
                name: "Güneşli",
                temp: "25°C",
                description: "Açık hava aktiviteleri için mükemmel!",
                icon: "☀️",
                tips: "Güneşli hava ipuçları:\n• Hafif kıyafetler giyin\n• Güneş gözlüğünü unutmayın\n• Tişört ve şort mükemmel\n• Hafif ayakkabılar en iyisi"
            },
            rainy: {
                name: "Yağmurlu",
                temp: "15°C",
                description: "Şemsiyenizi unutmayın!",
                icon: "🌧️",
                tips: "Yağmurlu hava ipuçları:\n• Su geçirmez kıyafetler giyin\n• Çizmeler ayakları kuru tutar\n• Ceket veya yağmurluk şart\n• Şapka veya kapüşon başı korur"
            },
            snowy: {
                name: "Karlı",
                temp: "-5°C",
                description: "Sıcak giyinin ve ısınmayı unutmayın!",
                icon: "❄️",
                tips: "Karlı hava ipuçları:\n• Sıcak katmanlar halinde giyin\n• Sıcak şapka önemli\n• Kış çizmeleri şart\n• Kalın mont sizi sıcak tutar"
            },
            windy: {
                name: "Rüzgarlı",
                temp: "18°C",
                description: "Şapkanızı sıkı tutun!",
                icon: "💨",
                tips: "Rüzgarlı hava ipuçları:\n• Sabit kıyafetler önemli\n• Gevşek eşyalardan kaçının\n• Hafif ceket yardımcı olur\n• Rahat ayakkabılar"
            },
            cloudy: {
                name: "Bulutlu",
                temp: "20°C",
                description: "Sonra yağmur yağabilir!",
                icon: "☁️",
                tips: "Bulutlu hava ipuçları:\n• Orta ağırlıkta kıyafetler uygun\n• İhtiyaten hafif ceket\n• Normal ayakkabılar uygun\n• Hava değişikliğine hazırlıklı olun"
            },
            hot: {
                name: "Çok Sıcak",
                temp: "35°C",
                description: "Serin kalın ve su için!",
                icon: "🔥",
                tips: "Çok sıcak hava ipuçları:\n• Minimum kıyafet giyin\n• Güneş şapkası başı korur\n• Hafif nefes alabilir kumaşlar\n• Sandaletler rahat"
            }
        },
        clothes: {
            head: {
                sunhat: { name: "Güneş Şapkası", icon: "👒", weather: ["sunny", "hot"] },
                winterhat: { name: "Kış Şapkası", icon: "🧢", weather: ["snowy", "windy"] },
                cap: { name: "Kep", icon: "🧢", weather: ["cloudy", "windy"] },
                hood: { name: "Kapüşon", icon: "🎭", weather: ["rainy"] },
                sunglasses: { name: "Güneş Gözlüğü", icon: "🕶️", weather: ["sunny", "hot"] }
            },
            body: {
                tshirt: { name: "Tişört", icon: "👕", weather: ["sunny", "hot"] },
                jacket: { name: "Ceket", icon: "🧥", weather: ["windy", "cloudy"] },
                raincoat: { name: "Yağmurluk", icon: "🧥", weather: ["rainy"] },
                wintercoat: { name: "Kış Montu", icon: "🧥", weather: ["snowy"] },
                sweater: { name: "Kazak", icon: "👔", weather: ["cloudy", "windy"] },
                tanktop: { name: "Atlet", icon: "👕", weather: ["hot"] }
            },
            feet: {
                sandals: { name: "Sandalet", icon: "👡", weather: ["sunny", "hot"] },
                boots: { name: "Çizme", icon: "👢", weather: ["rainy", "snowy"] },
                sneakers: { name: "Spor Ayakkabı", icon: "👟", weather: ["cloudy", "windy"] },
                flipflops: { name: "Parmak Arası", icon: "🩴", weather: ["hot"] },
                winterboots: { name: "Kış Çizmesi", icon: "👢", weather: ["snowy"] }
            }
        }
    },
    nl: {
        gameTitle: "Weer Tovenaar",
        languageLabel: "Taal:",
        instructionsTitle: "Instructies",
        instructionsText: "Kijk naar het weer en sleep de juiste kleren om je aan te kleden voor dat weer!",
        scoreLabel: "Score:",
        levelLabel: "Niveau:",
        streakLabel: "Reeks:",
        weatherTitle: "Vandaag's Weer",
        characterTitle: "Kleed Mij Aan!",
        clothingTitle: "Kies Kleding",
        headLabel: "Hoofd",
        bodyLabel: "Lichaam",
        feetLabel: "Voeten",
        checkBtn: "Controleer Outfit",
        clearBtn: "Alles Wissen",
        nextBtn: "Volgend Weer",
        hintBtn: "Hint",
        hintTitle: "Weer Tips",
        closeHint: "Sluiten",
        modalTitle: "Uitstekend!",
        modalText: "Je hebt dit niveau gemeesterd!",
        finalScoreLabel: "Eindscore:",
        accuracyLabel: "Nauwkeurigheid:",
        bestStreakLabel: "Beste Reeks:",
        nextLevelBtn: "Volgend Niveau",
        restartBtn: "Opnieuw Spelen",
        perfectOutfit: "Perfecte outfit! Geweldig gedaan! 🎉",
        goodOutfit: "Goede outfit! Bijna perfect! 👍",
        wrongOutfit: "Niet helemaal goed. Probeer andere kleren! 🤔",
        selectMoreClothes: "Selecteer alsjeblieft kleren voor het weer!",
        levelComplete: "Niveau voltooid! Naar het volgende niveau! 🎊",
        weatherTypes: {
            sunny: {
                name: "Zonnig",
                temp: "25°C",
                description: "Perfect voor buitenactiviteiten!",
                icon: "☀️",
                tips: "Zonnig weer tips:\n• Draag lichte kleding\n• Vergeet zonnebril niet\n• T-shirt en korte broek zijn perfect\n• Lichte schoenen werken het best"
            },
            rainy: {
                name: "Regenachtig",
                temp: "15°C",
                description: "Vergeet je paraplu niet!",
                icon: "🌧️",
                tips: "Regenachtig weer tips:\n• Draag waterdichte kleding\n• Laarzen houden voeten droog\n• Jas of regenjas is essentieel\n• Hoed of capuchon beschermt hoofd"
            },
            snowy: {
                name: "Sneeuw",
                temp: "-5°C",
                description: "Kleed je warm aan en blijf warm!",
                icon: "❄️",
                tips: "Sneeuw weer tips:\n• Kleed in warme lagen\n• Warme muts is belangrijk\n• Winterlaarzen zijn essentieel\n• Dikke jas houdt je warm"
            },
            windy: {
                name: "Winderig",
                temp: "18°C",
                description: "Houd je hoed vast!",
                icon: "💨",
                tips: "Winderig weer tips:\n• Veilige kleding is belangrijk\n• Vermijd losse items\n• Lichte jas helpt\n• Comfortabele schoenen"
            },
            cloudy: {
                name: "Bewolkt",
                temp: "20°C",
                description: "Misschien regent het later!",
                icon: "☁️",
                tips: "Bewolkt weer tips:\n• Middelzware kleding werkt\n• Lichte jas voor het geval dat\n• Gewone schoenen zijn prima\n• Bereid je voor op weerveranderingen"
            },
            hot: {
                name: "Erg Heet",
                temp: "35°C",
                description: "Blijf koel en drink water!",
                icon: "🔥",
                tips: "Erg heet weer tips:\n• Draag minimale kleding\n• Zonnehoed beschermt hoofd\n• Lichte ademende stoffen\n• Sandalen zijn comfortabel"
            }
        },
        clothes: {
            head: {
                sunhat: { name: "Zonnehoed", icon: "👒", weather: ["sunny", "hot"] },
                winterhat: { name: "Wintermuts", icon: "🧢", weather: ["snowy", "windy"] },
                cap: { name: "Pet", icon: "🧢", weather: ["cloudy", "windy"] },
                hood: { name: "Capuchon", icon: "🎭", weather: ["rainy"] },
                sunglasses: { name: "Zonnebril", icon: "🕶️", weather: ["sunny", "hot"] }
            },
            body: {
                tshirt: { name: "T-shirt", icon: "👕", weather: ["sunny", "hot"] },
                jacket: { name: "Jas", icon: "🧥", weather: ["windy", "cloudy"] },
                raincoat: { name: "Regenjas", icon: "🧥", weather: ["rainy"] },
                wintercoat: { name: "Winterjas", icon: "🧥", weather: ["snowy"] },
                sweater: { name: "Trui", icon: "👔", weather: ["cloudy", "windy"] },
                tanktop: { name: "Hemd", icon: "👕", weather: ["hot"] }
            },
            feet: {
                sandals: { name: "Sandalen", icon: "👡", weather: ["sunny", "hot"] },
                boots: { name: "Laarzen", icon: "👢", weather: ["rainy", "snowy"] },
                sneakers: { name: "Sneakers", icon: "👟", weather: ["cloudy", "windy"] },
                flipflops: { name: "Slippers", icon: "🩴", weather: ["hot"] },
                winterboots: { name: "Winterlaarzen", icon: "👢", weather: ["snowy"] }
            }
        }
    },
    lt: {
        gameTitle: "Oro Burtininkas",
        languageLabel: "Kalba:",
        instructionsTitle: "Instrukcijos",
        instructionsText: "Pažiūrėkite į orą ir nuvilkite tinkamus drabužius apsirengti tam orui!",
        scoreLabel: "Taškai:",
        levelLabel: "Lygis:",
        streakLabel: "Serija:",
        weatherTitle: "Šiandienos Oras",
        characterTitle: "Aprengkite Mane!",
        clothingTitle: "Pasirinkite Drabužius",
        headLabel: "Galva",
        bodyLabel: "Kūnas",
        feetLabel: "Kojos",
        checkBtn: "Patikrinti Aprangą",
        clearBtn: "Išvalyti Viską",
        nextBtn: "Kitas Oras",
        hintBtn: "Patarimas",
        hintTitle: "Oro Patarimai",
        closeHint: "Uždaryti",
        modalTitle: "Puiku!",
        modalText: "Jūs įvaldėte šį lygį!",
        finalScoreLabel: "Galutinis rezultatas:",
        accuracyLabel: "Tikslumas:",
        bestStreakLabel: "Geriausia serija:",
        nextLevelBtn: "Kitas lygis",
        restartBtn: "Žaisti dar kartą",
        perfectOutfit: "Tobula apranga! Puikus darbas! 🎉",
        goodOutfit: "Gera apranga! Beveik tobula! 👍",
        wrongOutfit: "Ne visai teisingai. Išbandykite kitus drabužius! 🤔",
        selectMoreClothes: "Prašome pasirinkti drabužius orui!",
        levelComplete: "Lygis baigtas! Pereiname į kitą lygį! 🎊",
        weatherTypes: {
            sunny: {
                name: "Saulėtas",
                temp: "25°C",
                description: "Puiku lauko veikloms!",
                icon: "☀️",
                tips: "Saulėto oro patarimai:\n• Dėvėkite lengvus drabužius\n• Neužmirškite akinių nuo saulės\n• Marškinėliai ir šortai tobuli\n• Lengvi batai geriausi"
            },
            rainy: {
                name: "Lietingas",
                temp: "15°C",
                description: "Neužmirškite skėčio!",
                icon: "🌧️",
                tips: "Lietingo oro patarimai:\n• Dėvėkite vandeniui atspalius drabužius\n• Batai išlaiko kojas sausas\n• Striukė ar lietpaltis būtinas\n• Kepurė ar kapišonas saugo galvą"
            },
            snowy: {
                name: "Snieginga",
                temp: "-5°C",
                description: "Apsirenkite šiltai ir šilkitės!",
                icon: "❄️",
                tips: "Sniegingo oro patarimai:\n• Renkitės šiltais sluoksniais\n• Šilta kepurė svarbu\n• Žiemos batai būtini\n• Storas paltas išlaikys šilumą"
            },
            windy: {
                name: "Vėjuotas",
                temp: "18°C",
                description: "Laikykite kepurę!",
                icon: "💨",
                tips: "Vėjuoto oro patarimai:\n• Saugūs drabužiai svarbūs\n• Venkite laisvų daiktų\n• Lengva striukė padės\n• Patogūs batai"
            },
            cloudy: {
                name: "Debesuotas",
                temp: "20°C",
                description: "Gali vėliau lyti!",
                icon: "☁️",
                tips: "Debesuoto oro patarimai:\n• Vidutinio svorio drabužiai tinka\n• Lengva striukė atsargumo dėlei\n• Įprasti batai tinka\n• Pasiruoškite oro pokyčiams"
            },
            hot: {
                name: "Labai Karšta",
                temp: "35°C",
                description: "Išlikite vėsūs ir gerkite vandenį!",
                icon: "🔥",
                tips: "Labai karšto oro patarimai:\n• Dėvėkite minimalius drabužius\n• Saulės kepurė saugo galvą\n• Lengvi kvėpuojantys audiniai\n• Sandalai patogūs"
            }
        },
        clothes: {
            head: {
                sunhat: { name: "Saulės Kepurė", icon: "👒", weather: ["sunny", "hot"] },
                winterhat: { name: "Žiemos Kepurė", icon: "🧢", weather: ["snowy", "windy"] },
                cap: { name: "Kepuraitė", icon: "🧢", weather: ["cloudy", "windy"] },
                hood: { name: "Kapišonas", icon: "🎭", weather: ["rainy"] },
                sunglasses: { name: "Akiniai nuo Saulės", icon: "🕶️", weather: ["sunny", "hot"] }
            },
            body: {
                tshirt: { name: "Marškinėliai", icon: "👕", weather: ["sunny", "hot"] },
                jacket: { name: "Striukė", icon: "🧥", weather: ["windy", "cloudy"] },
                raincoat: { name: "Lietpaltis", icon: "🧥", weather: ["rainy"] },
                wintercoat: { name: "Žiemos Paltas", icon: "🧥", weather: ["snowy"] },
                sweater: { name: "Megztinis", icon: "👔", weather: ["cloudy", "windy"] },
                tanktop: { name: "Palaidinė", icon: "👕", weather: ["hot"] }
            },
            feet: {
                sandals: { name: "Sandalai", icon: "👡", weather: ["sunny", "hot"] },
                boots: { name: "Batai", icon: "👢", weather: ["rainy", "snowy"] },
                sneakers: { name: "Sportbačiai", icon: "👟", weather: ["cloudy", "windy"] },
                flipflops: { name: "Šlepetės", icon: "🩴", weather: ["hot"] },
                winterboots: { name: "Žiemos Batai", icon: "👢", weather: ["snowy"] }
            }
        }
    },
    pl: {
        gameTitle: "Czarodziej Pogody",
        languageLabel: "Język:",
        instructionsTitle: "Instrukcje",
        instructionsText: "Spójrz na pogodę i przeciągnij odpowiednie ubrania, aby ubrać się na tę pogodę!",
        scoreLabel: "Punkty:",
        levelLabel: "Poziom:",
        streakLabel: "Seria:",
        weatherTitle: "Dzisiejsza Pogoda",
        characterTitle: "Ubierz Mnie!",
        clothingTitle: "Wybierz Ubrania",
        headLabel: "Głowa",
        bodyLabel: "Ciało",
        feetLabel: "Stopy",
        checkBtn: "Sprawdź Strój",
        clearBtn: "Wyczyść Wszystko",
        nextBtn: "Następna Pogoda",
        hintBtn: "Podpowiedź",
        hintTitle: "Wskazówki Pogodowe",
        closeHint: "Zamknij",
        modalTitle: "Doskonale!",
        modalText: "Opanowałeś ten poziom!",
        finalScoreLabel: "Końcowy wynik:",
        accuracyLabel: "Dokładność:",
        bestStreakLabel: "Najlepsza seria:",
        nextLevelBtn: "Następny poziom",
        restartBtn: "Zagraj ponownie",
        perfectOutfit: "Idealny strój! Świetna robota! 🎉",
        goodOutfit: "Dobry strój! Prawie idealny! 👍",
        wrongOutfit: "Nie całkiem dobrze. Spróbuj innych ubrań! 🤔",
        selectMoreClothes: "Proszę wybierz ubrania na pogodę!",
        levelComplete: "Poziom ukończony! Przechodzenie do następnego poziomu! 🎊",
        weatherTypes: {
            sunny: {
                name: "Słonecznie",
                temp: "25°C",
                description: "Idealne na aktywności na świeżym powietrzu!",
                icon: "☀️",
                tips: "Wskazówki słonecznej pogody:\n• Noś lekkie ubrania\n• Nie zapomnij okularów przeciwsłonecznych\n• T-shirt i szorty są idealne\n• Lekkie buty najlepsze"
            },
            rainy: {
                name: "Deszczowo",
                temp: "15°C",
                description: "Nie zapomnij parasola!",
                icon: "🌧️",
                tips: "Wskazówki deszczowej pogody:\n• Noś wodoodporne ubrania\n• Buty utrzymują stopy suche\n• Kurtka lub płaszcz przeciwdeszczowy konieczny\n• Kapelusz lub kaptur chroni głowę"
            },
            snowy: {
                name: "Śnieżnie",
                temp: "-5°C",
                description: "Ubierz się ciepło i zostań w cieple!",
                icon: "❄️",
                tips: "Wskazówki śnieżnej pogody:\n• Ubieraj się w ciepłe warstwy\n• Ciepła czapka ważna\n• Zimowe buty konieczne\n• Gruby płaszcz utrzyma ciepło"
            },
            windy: {
                name: "Wietrznie",
                temp: "18°C",
                description: "Trzymaj kapelusz!",
                icon: "💨",
                tips: "Wskazówki wietrznej pogody:\n• Bezpieczne ubrania ważne\n• Unikaj luźnych przedmiotów\n• Lekka kurtka pomoże\n• Wygodne buty"
            },
            cloudy: {
                name: "Pochmurno",
                temp: "20°C",
                description: "Może później padać!",
                icon: "☁️",
                tips: "Wskazówki pochmurnej pogody:\n• Średniej wagi ubrania działają\n• Lekka kurtka na wszelki wypadek\n• Zwykłe buty są w porządku\n• Przygotuj się na zmiany pogody"
            },
            hot: {
                name: "Bardzo Gorąco",
                temp: "35°C",
                description: "Zostań chłodny i pij wodę!",
                icon: "🔥",
                tips: "Wskazówki bardzo gorącej pogody:\n• Noś minimalne ubrania\n• Kapelusz słoneczny chroni głowę\n• Lekkie oddychające tkaniny\n• Sandały są wygodne"
            }
        },
        clothes: {
            head: {
                sunhat: { name: "Kapelusz Słoneczny", icon: "👒", weather: ["sunny", "hot"] },
                winterhat: { name: "Czapka Zimowa", icon: "🧢", weather: ["snowy", "windy"] },
                cap: { name: "Czapka z Daszkiem", icon: "🧢", weather: ["cloudy", "windy"] },
                hood: { name: "Kaptur", icon: "🎭", weather: ["rainy"] },
                sunglasses: { name: "Okulary Słoneczne", icon: "🕶️", weather: ["sunny", "hot"] }
            },
            body: {
                tshirt: { name: "T-shirt", icon: "👕", weather: ["sunny", "hot"] },
                jacket: { name: "Kurtka", icon: "🧥", weather: ["windy", "cloudy"] },
                raincoat: { name: "Płaszcz Przeciwdeszczowy", icon: "🧥", weather: ["rainy"] },
                wintercoat: { name: "Płaszcz Zimowy", icon: "🧥", weather: ["snowy"] },
                sweater: { name: "Sweter", icon: "👔", weather: ["cloudy", "windy"] },
                tanktop: { name: "Podkoszulek", icon: "👕", weather: ["hot"] }
            },
            feet: {
                sandals: { name: "Sandały", icon: "👡", weather: ["sunny", "hot"] },
                boots: { name: "Buty", icon: "👢", weather: ["rainy", "snowy"] },
                sneakers: { name: "Buty Sportowe", icon: "👟", weather: ["cloudy", "windy"] },
                flipflops: { name: "Japonki", icon: "🩴", weather: ["hot"] },
                winterboots: { name: "Buty Zimowe", icon: "👢", weather: ["snowy"] }
            }
        }
    }
};

// Game levels with weather patterns
const gameLevels = [
    // Level 1 - Basic weather types
    ["sunny", "rainy", "snowy"],
    // Level 2 - More variety
    ["sunny", "rainy", "snowy", "windy"],
    // Level 3 - All weather types
    ["sunny", "rainy", "snowy", "windy", "cloudy"],
    // Level 4 - Including extreme weather
    ["sunny", "rainy", "snowy", "windy", "cloudy", "hot"],
    // Level 5 - Random mix with repeats
    ["sunny", "hot", "rainy", "snowy", "windy", "cloudy", "sunny", "rainy"]
];

let currentWeathers = [];

// Initialize the game
function initGame() {
    loadLevel();
    updateUI();
    createWeatherEffects();
}

// Change language
function changeLanguage() {
    const languageSelect = document.getElementById('language');
    currentLanguage = languageSelect.value;
    currentLevel = 1;
    currentWeatherIndex = 0;
    score = 0;
    streak = 0;
    bestStreak = 0;
    totalAttempts = 0;
    correctAttempts = 0;
    clearOutfit();
    loadLevel();
    updateUI();
    closeFeedback();
}

// Update UI with current language content
function updateUI() {
    const content = gameContent[currentLanguage];
    
    document.getElementById('game-title').textContent = content.gameTitle;
    document.getElementById('language-label').textContent = content.languageLabel;
    document.getElementById('instructions-title').textContent = content.instructionsTitle;
    document.getElementById('instructions-text').textContent = content.instructionsText;
    document.getElementById('score-label').textContent = content.scoreLabel;
    document.getElementById('level-label').textContent = content.levelLabel;
    document.getElementById('streak-label').textContent = content.streakLabel;
    document.getElementById('weather-title').textContent = content.weatherTitle;
    document.getElementById('character-title').textContent = content.characterTitle;
    document.getElementById('clothing-title').textContent = content.clothingTitle;
    document.getElementById('head-label').textContent = content.headLabel;
    document.getElementById('body-label').textContent = content.bodyLabel;
    document.getElementById('feet-label').textContent = content.feetLabel;
    document.getElementById('check-btn').textContent = content.checkBtn;
    document.getElementById('clear-btn').textContent = content.clearBtn;
    document.getElementById('next-btn').textContent = content.nextBtn;
    document.getElementById('hint-btn').textContent = content.hintBtn;
    document.getElementById('hint-title').textContent = content.hintTitle;
    document.getElementById('close-hint').textContent = content.closeHint;
    document.getElementById('modal-title').textContent = content.modalTitle;
    document.getElementById('modal-text').textContent = content.modalText;
    document.getElementById('final-score-label').textContent = content.finalScoreLabel;
    document.getElementById('accuracy-label').textContent = content.accuracyLabel;
    document.getElementById('best-streak-label').textContent = content.bestStreakLabel;
    document.getElementById('next-level-btn').textContent = content.nextLevelBtn;
    document.getElementById('restart-btn').textContent = content.restartBtn;
    
    // Update stats
    document.getElementById('score').textContent = score;
    document.getElementById('level').textContent = currentLevel;
    document.getElementById('streak').textContent = streak;
    
    // Load current weather and clothes
    loadWeather();
    loadClothes();
}

// Load current level
function loadLevel() {
    if (currentLevel <= gameLevels.length) {
        currentWeathers = [...gameLevels[currentLevel - 1]];
        currentWeatherIndex = 0;
        clearOutfit();
    }
}

// Load current weather
function loadWeather() {
    if (currentWeatherIndex < currentWeathers.length) {
        const weatherType = currentWeathers[currentWeatherIndex];
        const content = gameContent[currentLanguage];
        const weather = content.weatherTypes[weatherType];
        
        document.getElementById('weather-icon').textContent = weather.icon;
        document.getElementById('weather-name').textContent = weather.name;
        document.getElementById('weather-temp').textContent = weather.temp;
        document.getElementById('weather-description').textContent = weather.description;
        
        // Update weather effects
        updateWeatherEffects(weatherType);
        
        // Reset buttons
        document.getElementById('check-btn').disabled = true;
        document.getElementById('next-btn').disabled = true;
    }
}

// Load available clothes
function loadClothes() {
    const content = gameContent[currentLanguage];
    const clothingContainer = document.getElementById('clothing-container');
    clothingContainer.innerHTML = '';
    
    // Get all clothes for current level
    const availableClothes = [];
    
    // Add appropriate clothes for current weather
    const currentWeather = currentWeathers[currentWeatherIndex];
    Object.keys(content.clothes).forEach(category => {
        Object.keys(content.clothes[category]).forEach(itemKey => {
            const item = content.clothes[category][itemKey];
            if (item.weather.includes(currentWeather)) {
                availableClothes.push({
                    key: itemKey,
                    category: category,
                    ...item
                });
            }
        });
    });
    
    // Add some random wrong clothes to make it challenging
    const wrongClothes = [];
    Object.keys(content.clothes).forEach(category => {
        Object.keys(content.clothes[category]).forEach(itemKey => {
            const item = content.clothes[category][itemKey];
            if (!item.weather.includes(currentWeather)) {
                wrongClothes.push({
                    key: itemKey,
                    category: category,
                    ...item
                });
            }
        });
    });
    
    // Add 2-3 wrong items per category
    ['head', 'body', 'feet'].forEach(category => {
        const categoryWrong = wrongClothes.filter(item => item.category === category);
        const randomWrong = categoryWrong.sort(() => 0.5 - Math.random()).slice(0, 2);
        availableClothes.push(...randomWrong);
    });
    
    // Shuffle and display
    availableClothes.sort(() => 0.5 - Math.random());
    
    availableClothes.forEach(item => {
        const clothingItem = document.createElement('div');
        clothingItem.className = 'clothing-item';
        clothingItem.draggable = true;
        clothingItem.dataset.key = item.key;
        clothingItem.dataset.category = item.category;
        
        clothingItem.innerHTML = `
            <span class="clothing-icon">${item.icon}</span>
            <span class="clothing-name">${item.name}</span>
        `;
        
        // Add drag events
        clothingItem.addEventListener('dragstart', handleDragStart);
        clothingItem.addEventListener('dragend', handleDragEnd);
        clothingItem.addEventListener('click', () => selectClothing(item.key, item.category));
        
        clothingContainer.appendChild(clothingItem);
    });
}

// Drag and drop handlers
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', JSON.stringify({
        key: e.target.dataset.key,
        category: e.target.dataset.category
    }));
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

// Setup drop zones
document.addEventListener('DOMContentLoaded', function() {
    const dropZones = document.querySelectorAll('.drop-zone');
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault();
            zone.classList.add('highlight');
        });
        
        zone.addEventListener('dragleave', e => {
            zone.classList.remove('highlight');
        });
        
        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.classList.remove('highlight');
            
            const data = JSON.parse(e.dataTransfer.getData('text/plain'));
            const zoneType = zone.dataset.type;
            
            if (data.category === zoneType) {
                selectClothing(data.key, data.category);
            }
        });
    });
});

// Select clothing item
function selectClothing(itemKey, category) {
    // Remove previous selection in this category
    if (selectedClothes[category]) {
        const prevItem = document.querySelector(`[data-key="${selectedClothes[category]}"]`);
        if (prevItem) prevItem.classList.remove('used');
    }
    
    // Add new selection
    selectedClothes[category] = itemKey;
    const item = document.querySelector(`[data-key="${itemKey}"]`);
    if (item) item.classList.add('used');
    
    // Update character display
    updateCharacterDisplay();
    
    // Enable check button if at least one item selected
    const hasSelection = Object.values(selectedClothes).some(item => item !== null);
    document.getElementById('check-btn').disabled = !hasSelection;
}

// Update character display
function updateCharacterDisplay() {
    const outfitContainer = document.getElementById('character-outfit');
    outfitContainer.innerHTML = '';
    
    const content = gameContent[currentLanguage];
    
    ['head', 'body', 'feet'].forEach(category => {
        if (selectedClothes[category]) {
            const item = content.clothes[category][selectedClothes[category]];
            if (item) {
                const outfitItem = document.createElement('div');
                outfitItem.className = 'outfit-item';
                outfitItem.textContent = item.icon;
                outfitContainer.appendChild(outfitItem);
            }
        }
    });
}

// Check outfit
function checkOutfit() {
    const currentWeather = currentWeathers[currentWeatherIndex];
    const content = gameContent[currentLanguage];
    
    totalAttempts++;
    let correctItems = 0;
    let totalSelectedItems = 0;
    
    Object.keys(selectedClothes).forEach(category => {
        if (selectedClothes[category]) {
            totalSelectedItems++;
            const item = content.clothes[category][selectedClothes[category]];
            if (item && item.weather.includes(currentWeather)) {
                correctItems++;
            }
        }
    });
    
    console.log(`Check outfit: Weather=${currentWeather}, Selected=${totalSelectedItems}, Correct=${correctItems}`);
    
    if (totalSelectedItems === 0) {
        // No clothes selected
        showFeedback(content.selectMoreClothes, 'error');
        console.log('No clothes selected, button stays disabled');
    } else {
        // Any clothes selected - enable next button
        console.log('Enabling next button - clothes were selected');
        document.getElementById('next-btn').disabled = false;
        
        // Update score and streak based on correctness
        if (correctItems > 0) {
            correctAttempts++;
            streak++;
            bestStreak = Math.max(bestStreak, streak);
            
            if (correctItems === totalSelectedItems) {
                // Perfect outfit
                score += 20 + (streak * 5);
                showFeedback(content.perfectOutfit, 'success');
                console.log('Perfect outfit!');
            } else {
                // Good outfit (some correct items)
                score += 10;
                showFeedback(content.goodOutfit, 'success');
                console.log('Good outfit!');
            }
        } else {
            // Wrong outfit but still allow to continue
            streak = 0;
            score = Math.max(0, score - 5);
            showFeedback(content.wrongOutfit, 'error');
            console.log('Wrong outfit but can continue');
        }
    }
    
    updateUI();
    document.getElementById('check-btn').disabled = true;
    
    // Ensure next button stays enabled if we enabled it
    if (totalSelectedItems > 0) {
        document.getElementById('next-btn').disabled = false;
    }
    
    console.log('Next button final status:', document.getElementById('next-btn').disabled);
}

// Clear outfit
function clearOutfit() {
    selectedClothes = { head: null, body: null, feet: null };
    
    // Remove used class from all items
    document.querySelectorAll('.clothing-item.used').forEach(item => {
        item.classList.remove('used');
    });
    
    // Clear character display
    document.getElementById('character-outfit').innerHTML = '';
    
    // Disable check button
    document.getElementById('check-btn').disabled = true;
    document.getElementById('next-btn').disabled = true;
}

// Next weather
function nextWeather() {
    currentWeatherIndex++;
    
    if (currentWeatherIndex < currentWeathers.length) {
        clearOutfit();
        loadWeather();
        loadClothes();
        closeFeedback();
    } else {
        // Level completed
        showLevelComplete();
    }
}

// Show level completion
function showLevelComplete() {
    const accuracy = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('accuracy').textContent = accuracy + '%';
    document.getElementById('best-streak').textContent = bestStreak;
    
    const modal = document.getElementById('completion-modal');
    modal.classList.add('show');
    
    showFeedback(gameContent[currentLanguage].levelComplete, 'success');
}

// Next level
function nextLevel() {
    currentLevel++;
    
    if (currentLevel <= gameLevels.length) {
        loadLevel();
        closeModal();
        closeFeedback();
        updateUI();
    } else {
        // Game completed
        restartGame();
    }
}

// Restart game
function restartGame() {
    currentLevel = 1;
    currentWeatherIndex = 0;
    score = 0;
    streak = 0;
    bestStreak = 0;
    totalAttempts = 0;
    correctAttempts = 0;
    clearOutfit();
    loadLevel();
    closeModal();
    closeFeedback();
    updateUI();
}

// Show feedback
function showFeedback(message, type) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = `feedback ${type}`;
}

// Close feedback
function closeFeedback() {
    const feedback = document.getElementById('feedback');
    feedback.textContent = '';
    feedback.className = 'feedback';
}

// Show hint
function showHint() {
    const currentWeather = currentWeathers[currentWeatherIndex];
    const content = gameContent[currentLanguage];
    const weather = content.weatherTypes[currentWeather];
    
    document.getElementById('hint-content').innerHTML = `<p>${weather.tips}</p>`;
    document.getElementById('hint-panel').classList.add('show');
}

// Close hint
function closeHint() {
    document.getElementById('hint-panel').classList.remove('show');
}

// Close modal
function closeModal() {
    document.getElementById('completion-modal').classList.remove('show');
}

// Weather effects
function createWeatherEffects() {
    const effectsContainer = document.getElementById('weather-effects');
    effectsContainer.innerHTML = '';
}

function updateWeatherEffects(weatherType) {
    const effectsContainer = document.getElementById('weather-effects');
    effectsContainer.innerHTML = '';
    
    if (weatherType === 'rainy') {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const drop = document.createElement('div');
                drop.className = 'rain-drop';
                drop.textContent = '💧';
                drop.style.left = Math.random() * 100 + 'vw';
                drop.style.animationDuration = (Math.random() * 1 + 1) + 's';
                effectsContainer.appendChild(drop);
                
                setTimeout(() => drop.remove(), 2000);
            }, i * 200);
        }
    } else if (weatherType === 'snowy') {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const flake = document.createElement('div');
                flake.className = 'snow-flake';
                flake.textContent = '❄️';
                flake.style.left = Math.random() * 100 + 'vw';
                flake.style.animationDuration = (Math.random() * 3 + 2) + 's';
                effectsContainer.appendChild(flake);
                
                setTimeout(() => flake.remove(), 4000);
            }, i * 300);
        }
    } else if (weatherType === 'sunny' || weatherType === 'hot') {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const ray = document.createElement('div');
                ray.className = 'sun-ray';
                ray.textContent = '✨';
                ray.style.left = Math.random() * 100 + 'vw';
                ray.style.top = Math.random() * 100 + 'vh';
                ray.style.animationDuration = (Math.random() * 2 + 2) + 's';
                effectsContainer.appendChild(ray);
                
                setTimeout(() => ray.remove(), 3000);
            }, i * 400);
        }
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('completion-modal');
    const hintPanel = document.getElementById('hint-panel');
    
    if (event.target === modal) {
        closeModal();
    }
    
    if (event.target === hintPanel) {
        closeHint();
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', initGame);
