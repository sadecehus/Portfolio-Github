// Sound Match Game - Auditory Processing and Language Development
class SoundMatchGame {
    constructor() {
        this.currentLevel = 1;
        this.playerScore = 0;
        this.streakCount = 0;
        this.livesCount = 3;
        this.currentQuestionIndex = 0;
        this.questionsPerLevel = 10;
        this.currentCategory = null;
        this.currentSound = null;
        this.gameSettings = {
            volume: 0.8,
            speed: 'normal',
            difficulty: 'normal',
            autoReplay: false,
            muted: false
        };
        this.correctAnswers = 0;
        this.totalQuestions = 0;
        this.masteredSounds = new Set();
        this.achievements = new Set();
        
        this.currentLanguage = 'en'; // Default language
        this.translations = this.initializeTranslations();
        this.loadLanguagePreference(); // Load saved language preference
        
        this.soundDatabase = this.initializeSoundDatabase();
        this.audioElements = {}; // Store loaded audio elements
        this.currentlyPlayingAudio = null; // Track currently playing audio
        this.audioTimer = null; // Timer for audio duration limit
        this.initializeAudio();
        this.initializeGame();
        this.setupEventListeners();
    }

    initializeAudio() {
        // Preload all audio files
        this.preloadAllSounds();
    }

    initializeTranslations() {
        return {
            en: {
                // Game UI
                gameTitle: 'Sound Match Game',
                gameSubtitle: 'Auditory Processing and Language Development',
                
                // Navigation & Controls
                playSound: 'Play Sound',
                replaySound: 'Replay',
                hint: 'Hint',
                settings: 'Settings',
                mute: 'Mute',
                unmute: 'Unmute',
                menu: 'Menu',
                
                // Game Progress
                level: 'Level',
                score: 'Score',
                streak: 'Streak',
                lives: 'Lives',
                question: 'Question',
                of: 'of',
                
                // Categories
                animals: 'Animals',
                vehicles: 'Vehicles',
                instruments: 'Musical Instruments',
                household: 'Household Items',
                nature: 'Nature Sounds',
                mixed: 'Mixed Challenge',
                category: 'Category',
                
                // Questions and Feedback
                whatSoundIsThis: 'What sound is this?',
                chooseCorrectPicture: 'Choose the correct picture:',
                correct: 'Correct!',
                tryAgain: 'Try Again!',
                continue: 'Continue',
                listenAgain: 'Listen Again',
                
                // Category Selection
                chooseCategory: 'Choose a Category',
                selectSoundsTopractice: 'Select which sounds you\'d like to practice with:',
                
                // Category Descriptions
                animalsDesc: 'Dogs, cats, cows, birds and more!',
                vehiclesDesc: 'Cars, trains, planes and trucks!',
                instrumentsDesc: 'Piano, guitar, drums and more!',
                householdDesc: 'Kitchen, bathroom and home sounds!',
                natureDesc: 'Rain, wind, ocean and forest!',
                mixedDesc: 'All categories combined!',
                
                // Settings
                volume: 'Volume',
                speed: 'Speed',
                difficulty: 'Difficulty',
                autoReplay: 'Auto Replay',
                easy: 'Easy',
                normal: 'Normal',
                hard: 'Hard',
                expert: 'Expert',
                
                // Results
                excellent: '🏆 Excellent!',
                goodJob: '🌟 Good Job!',
                keepPracticing: '💪 Keep Practicing!',
                finalScore: 'Final Score',
                correctAnswers: 'Correct Answers',
                accuracy: 'Accuracy',
                achievements: 'Achievements',
                masteredSounds: 'Mastered Sounds',
                nextLevel: 'Next Level',
                newCategory: 'New Category',
                replayLevel: 'Replay Level',
                
                // Error Messages
                audioError: '🔊 Audio file could not be loaded. Please ensure files are in the correct location.',
                gameOver: 'Game Over! You ran out of lives. Try again to improve your listening skills!',
                
                // Language
                language: 'Language',
                selectLanguage: 'Select Language',
                
                // Sound Names - Animals
                dog: 'Dog',
                cat: 'Cat',
                cow: 'Cow',
                pig: 'Pig',
                duck: 'Duck',
                horse: 'Horse',
                frog: 'Frog',
                bird: 'Bird',
                wolf: 'Wolf',
                
                // Sound Names - Vehicles
                car: 'Car',
                truck: 'Truck',
                train: 'Train',
                airplane: 'Airplane',
                helicopter: 'Helicopter',
                motorcycle: 'Motorcycle',
                bus: 'Bus',
                boat: 'Boat',
                
                // Sound Names - Instruments
                piano: 'Piano',
                guitar: 'Guitar',
                drums: 'Drums',
                trumpet: 'Trumpet',
                violin: 'Violin',
                saxophone: 'Saxophone',
                banjo: 'Banjo',
                accordion: 'Accordion',
                
                // Sound Names - Household
                doorbell: 'Doorbell',
                phone: 'Phone',
                alarm: 'Alarm Clock',
                shower: 'Shower',
                microwave: 'Microwave',
                vacuum: 'Vacuum',
                television: 'Television',
                cooking: 'Cooking',
                
                // Sound Names - Nature
                rain: 'Rain',
                ocean: 'Ocean',
                wind: 'Wind',
                thunder: 'Thunder',
                fire: 'Fire',
                leaves: 'Leaves',
                snow: 'Snow',
                volcano: 'Volcano',
                
                // Unknown
                unknown: 'Unknown'
            },
            tr: {
                // Game UI
                gameTitle: 'Ses Eşleştirme Oyunu',
                gameSubtitle: 'İşitsel İşleme ve Dil Gelişimi',
                
                // Navigation & Controls
                playSound: 'Sesi Çal',
                replaySound: 'Tekrar Çal',
                hint: 'İpucu',
                settings: 'Ayarlar',
                mute: 'Sessiz',
                unmute: 'Sesli',
                menu: 'Menü',
                
                // Game Progress
                level: 'Seviye',
                score: 'Puan',
                streak: 'Seri',
                lives: 'Can',
                question: 'Soru',
                of: '/',
                
                // Categories
                animals: 'Hayvanlar',
                vehicles: 'Araçlar',
                instruments: 'Müzik Aletleri',
                household: 'Ev Eşyaları',
                nature: 'Doğa Sesleri',
                mixed: 'Karışık Meydan Okuma',
                category: 'Kategori',
                
                // Questions and Feedback
                whatSoundIsThis: 'Bu ne sesi?',
                chooseCorrectPicture: 'Doğru resmi seçin:',
                correct: 'Doğru!',
                tryAgain: 'Tekrar Dene!',
                continue: 'Devam Et',
                listenAgain: 'Tekrar Dinle',
                
                // Category Selection
                chooseCategory: 'Kategori Seçin',
                selectSoundsTopractice: 'Hangi seslerle pratik yapmak istediğinizi seçin:',
                
                // Category Descriptions
                animalsDesc: 'Köpekler, kediler, inekler, kuşlar ve daha fazlası!',
                vehiclesDesc: 'Arabalar, trenler, uçaklar ve kamyonlar!',
                instrumentsDesc: 'Piyano, gitar, davul ve daha fazlası!',
                householdDesc: 'Mutfak, banyo ve ev sesleri!',
                natureDesc: 'Yağmur, rüzgar, okyanus ve orman!',
                mixedDesc: 'Tüm kategoriler bir arada!',
                
                // Settings
                volume: 'Ses Seviyesi',
                speed: 'Hız',
                difficulty: 'Zorluk',
                autoReplay: 'Otomatik Tekrar',
                easy: 'Kolay',
                normal: 'Normal',
                hard: 'Zor',
                expert: 'Uzman',
                
                // Results
                excellent: '🏆 Mükemmel!',
                goodJob: '🌟 Aferin!',
                keepPracticing: '💪 Alıştırma Yapmaya Devam Et!',
                finalScore: 'Final Puan',
                correctAnswers: 'Doğru Cevaplar',
                accuracy: 'Doğruluk',
                achievements: 'Başarılar',
                masteredSounds: 'Öğrenilen Sesler',
                nextLevel: 'Sonraki Seviye',
                newCategory: 'Yeni Kategori',
                replayLevel: 'Seviyeyi Tekrarla',
                
                // Error Messages
                audioError: '🔊 Ses dosyası yüklenemedi. Lütfen dosyaların doğru konumda olduğundan emin olun.',
                gameOver: 'Oyun Bitti! Canlarınız tükendi. Dinleme becerilerinizi geliştirmek için tekrar deneyin!',
                
                // Language
                language: 'Dil',
                selectLanguage: 'Dil Seçin',
                
                // Sound Names - Animals
                dog: 'Köpek',
                cat: 'Kedi',
                cow: 'İnek',
                pig: 'Domuz',
                duck: 'Ördek',
                horse: 'At',
                frog: 'Kurbağa',
                bird: 'Kuş',
                wolf: 'Kurt',
                
                // Sound Names - Vehicles
                car: 'Araba',
                truck: 'Kamyon',
                train: 'Tren',
                airplane: 'Uçak',
                helicopter: 'Helikopter',
                motorcycle: 'Motosiklet',
                bus: 'Otobüs',
                boat: 'Tekne',
                
                // Sound Names - Instruments
                piano: 'Piyano',
                guitar: 'Gitar',
                drums: 'Davul',
                trumpet: 'Trompet',
                violin: 'Keman',
                saxophone: 'Saksafon',
                banjo: 'Banjo',
                accordion: 'Akordiyon',
                
                // Sound Names - Household
                doorbell: 'Kapı Zili',
                phone: 'Telefon',
                alarm: 'Çalar Saat',
                shower: 'Duş',
                microwave: 'Mikrodalga',
                vacuum: 'Elektrik Süpürgesi',
                television: 'Televizyon',
                cooking: 'Yemek Pişirme',
                
                // Sound Names - Nature
                rain: 'Yağmur',
                ocean: 'Okyanus',
                wind: 'Rüzgar',
                thunder: 'Gök Gürültüsü',
                fire: 'Ateş',
                leaves: 'Yapraklar',
                snow: 'Kar',
                volcano: 'Yanardağ',
                
                // Unknown
                unknown: 'Bilinmeyen'
            },
            pl: {
                // Game UI
                gameTitle: 'Gra Dopasowywania Dźwięków',
                gameSubtitle: 'Przetwarzanie Słuchowe i Rozwój Języka',
                
                // Navigation & Controls
                playSound: 'Odtwórz Dźwięk',
                replaySound: 'Powtórz',
                hint: 'Podpowiedź',
                settings: 'Ustawienia',
                mute: 'Wycisz',
                unmute: 'Włącz Dźwięk',
                menu: 'Menu',
                
                // Game Progress
                level: 'Poziom',
                score: 'Wynik',
                streak: 'Seria',
                lives: 'Życia',
                question: 'Pytanie',
                of: 'z',
                
                // Categories
                animals: 'Zwierzęta',
                vehicles: 'Pojazdy',
                instruments: 'Instrumenty Muzyczne',
                household: 'Przedmioty Domowe',
                nature: 'Dźwięki Natury',
                mixed: 'Mieszane Wyzwanie',
                category: 'Kategoria',
                
                // Questions and Feedback
                whatSoundIsThis: 'Co to za dźwięk?',
                chooseCorrectPicture: 'Wybierz właściwy obrazek:',
                correct: 'Poprawnie!',
                tryAgain: 'Spróbuj ponownie!',
                continue: 'Kontynuuj',
                listenAgain: 'Posłuchaj ponownie',
                
                // Category Selection
                chooseCategory: 'Wybierz Kategorię',
                selectSoundsTopractice: 'Wybierz dźwięki, z którymi chcesz ćwiczyć:',
                
                // Category Descriptions
                animalsDesc: 'Psy, koty, krowy, ptaki i więcej!',
                vehiclesDesc: 'Samochody, pociągi, samoloty i ciężarówki!',
                instrumentsDesc: 'Fortepian, gitara, bębny i więcej!',
                householdDesc: 'Dźwięki kuchenne, łazienkowe i domowe!',
                natureDesc: 'Deszcz, wiatr, ocean i las!',
                mixedDesc: 'Wszystkie kategorie razem!',
                
                // Settings
                volume: 'Głośność',
                speed: 'Prędkość',
                difficulty: 'Trudność',
                autoReplay: 'Automatyczne Powtarzanie',
                easy: 'Łatwy',
                normal: 'Normalny',
                hard: 'Trudny',
                expert: 'Ekspert',
                
                // Results
                excellent: '🏆 Doskonale!',
                goodJob: '🌟 Dobra Robota!',
                keepPracticing: '💪 Ćwicz Dalej!',
                finalScore: 'Końcowy Wynik',
                correctAnswers: 'Poprawne Odpowiedzi',
                accuracy: 'Dokładność',
                achievements: 'Osiągnięcia',
                masteredSounds: 'Opanowane Dźwięki',
                nextLevel: 'Następny Poziom',
                newCategory: 'Nowa Kategoria',
                replayLevel: 'Powtórz Poziom',
                
                // Error Messages
                audioError: '🔊 Nie można załadować pliku audio. Upewnij się, że pliki są w odpowiednim miejscu.',
                gameOver: 'Koniec gry! Skończyły się życia. Spróbuj ponownie, aby poprawić swoje umiejętności słuchania!',
                
                // Language
                language: 'Język',
                selectLanguage: 'Wybierz Język',
                
                // Sound Names - Animals
                dog: 'Pies',
                cat: 'Kot',
                cow: 'Krowa',
                pig: 'Świnia',
                duck: 'Kaczka',
                horse: 'Koń',
                frog: 'Żaba',
                bird: 'Ptak',
                wolf: 'Wilk',
                
                // Sound Names - Vehicles
                car: 'Samochód',
                truck: 'Ciężarówka',
                train: 'Pociąg',
                airplane: 'Samolot',
                helicopter: 'Helikopter',
                motorcycle: 'Motocykl',
                bus: 'Autobus',
                boat: 'Łódka',
                
                // Sound Names - Instruments
                piano: 'Fortepian',
                guitar: 'Gitara',
                drums: 'Bębny',
                trumpet: 'Trąbka',
                violin: 'Skrzypce',
                saxophone: 'Saksofon',
                banjo: 'Banjo',
                accordion: 'Akordeon',
                
                // Sound Names - Household
                doorbell: 'Dzwonek',
                phone: 'Telefon',
                alarm: 'Budzik',
                shower: 'Prysznic',
                microwave: 'Mikrofalówka',
                vacuum: 'Odkurzacz',
                television: 'Telewizor',
                cooking: 'Gotowanie',
                
                // Sound Names - Nature
                rain: 'Deszcz',
                ocean: 'Ocean',
                wind: 'Wiatr',
                thunder: 'Grzmot',
                fire: 'Ogień',
                leaves: 'Liście',
                snow: 'Śnieg',
                volcano: 'Wulkan',
                
                // Unknown
                unknown: 'Nieznany'
            },
            nl: {
                // Game UI
                gameTitle: 'Geluid Matching Spel',
                gameSubtitle: 'Auditieve Verwerking en Taalontwikkeling',
                
                // Navigation & Controls
                playSound: 'Geluid Afspelen',
                replaySound: 'Herhalen',
                hint: 'Hint',
                settings: 'Instellingen',
                mute: 'Dempen',
                unmute: 'Geluid Aan',
                menu: 'Menu',
                
                // Game Progress
                level: 'Niveau',
                score: 'Score',
                streak: 'Reeks',
                lives: 'Levens',
                question: 'Vraag',
                of: 'van',
                
                // Categories
                animals: 'Dieren',
                vehicles: 'Voertuigen',
                instruments: 'Muziekinstrumenten',
                household: 'Huishoudelijke Artikelen',
                nature: 'Natuurgeluiden',
                mixed: 'Gemengde Uitdaging',
                category: 'Categorie',
                
                // Questions and Feedback
                whatSoundIsThis: 'Wat is dit voor geluid?',
                chooseCorrectPicture: 'Kies de juiste afbeelding:',
                correct: 'Correct!',
                tryAgain: 'Probeer Opnieuw!',
                continue: 'Doorgaan',
                listenAgain: 'Luister Opnieuw',
                
                // Category Selection
                chooseCategory: 'Kies een Categorie',
                selectSoundsTopractice: 'Selecteer welke geluiden je wilt oefenen:',
                
                // Category Descriptions
                animalsDesc: 'Honden, katten, koeien, vogels en meer!',
                vehiclesDesc: 'Auto\'s, treinen, vliegtuigen en vrachtwagens!',
                instrumentsDesc: 'Piano, gitaar, drums en meer!',
                householdDesc: 'Keuken-, badkamer- en huisgeluiden!',
                natureDesc: 'Regen, wind, oceaan en bos!',
                mixedDesc: 'Alle categorieën gecombineerd!',
                
                // Settings
                volume: 'Volume',
                speed: 'Snelheid',
                difficulty: 'Moeilijkheid',
                autoReplay: 'Automatisch Herhalen',
                easy: 'Makkelijk',
                normal: 'Normaal',
                hard: 'Moeilijk',
                expert: 'Expert',
                
                // Results
                excellent: '🏆 Uitstekend!',
                goodJob: '🌟 Goed Gedaan!',
                keepPracticing: '💪 Blijf Oefenen!',
                finalScore: 'Eindscore',
                correctAnswers: 'Juiste Antwoorden',
                accuracy: 'Nauwkeurigheid',
                achievements: 'Prestaties',
                masteredSounds: 'Beheerste Geluiden',
                nextLevel: 'Volgend Niveau',
                newCategory: 'Nieuwe Categorie',
                replayLevel: 'Niveau Herhalen',
                
                // Error Messages
                audioError: '🔊 Audiobestand kon niet worden geladen. Zorg ervoor dat bestanden op de juiste locatie staan.',
                gameOver: 'Game Over! Je hebt geen levens meer. Probeer opnieuw om je luistervaardigheden te verbeteren!',
                
                // Language
                language: 'Taal',
                selectLanguage: 'Selecteer Taal',
                
                // Sound Names - Animals
                dog: 'Hond',
                cat: 'Kat',
                cow: 'Koe',
                pig: 'Varken',
                duck: 'Eend',
                horse: 'Paard',
                frog: 'Kikker',
                bird: 'Vogel',
                wolf: 'Wolf',
                
                // Sound Names - Vehicles
                car: 'Auto',
                truck: 'Vrachtwagen',
                train: 'Trein',
                airplane: 'Vliegtuig',
                helicopter: 'Helikopter',
                motorcycle: 'Motorfiets',
                bus: 'Bus',
                boat: 'Boot',
                
                // Sound Names - Instruments
                piano: 'Piano',
                guitar: 'Gitaar',
                drums: 'Drums',
                trumpet: 'Trompet',
                violin: 'Viool',
                saxophone: 'Saxofoon',
                banjo: 'Banjo',
                accordion: 'Accordeon',
                
                // Sound Names - Household
                doorbell: 'Deurbel',
                phone: 'Telefoon',
                alarm: 'Wekker',
                shower: 'Douche',
                microwave: 'Magnetron',
                vacuum: 'Stofzuiger',
                television: 'Televisie',
                cooking: 'Koken',
                
                // Sound Names - Nature
                rain: 'Regen',
                ocean: 'Oceaan',
                wind: 'Wind',
                thunder: 'Donder',
                fire: 'Vuur',
                leaves: 'Bladeren',
                snow: 'Sneeuw',
                volcano: 'Vulkaan',
                
                // Unknown
                unknown: 'Onbekend'
            },
            lt: {
                // Game UI
                gameTitle: 'Garsų Atpažinimo Žaidimas',
                gameSubtitle: 'Klausos Apdorojimas ir Kalbos Plėtojimas',
                
                // Navigation & Controls
                playSound: 'Paleisti Garsą',
                replaySound: 'Pakartoti',
                hint: 'Užuomina',
                settings: 'Nustatymai',
                mute: 'Nutildyti',
                unmute: 'Įjungti Garsą',
                menu: 'Meniu',
                
                // Game Progress
                level: 'Lygis',
                score: 'Taškai',
                streak: 'Serija',
                lives: 'Gyvybės',
                question: 'Klausimas',
                of: 'iš',
                
                // Categories
                animals: 'Gyvūnai',
                vehicles: 'Transporto Priemonės',
                instruments: 'Muzikos Instrumentai',
                household: 'Namų Apyvokos Daiktai',
                nature: 'Gamtos Garsai',
                mixed: 'Mišrus Iššūkis',
                category: 'Kategorija',
                
                // Questions and Feedback
                whatSoundIsThis: 'Koks tai garsas?',
                chooseCorrectPicture: 'Pasirinkite teisingą paveikslėlį:',
                correct: 'Teisingai!',
                tryAgain: 'Bandyk Dar Kartą!',
                continue: 'Tęsti',
                listenAgain: 'Klausytis Dar Kartą',
                
                // Category Selection
                chooseCategory: 'Pasirinkite Kategoriją',
                selectSoundsTopractice: 'Pasirinkite garsus, su kuriais norite praktikuotis:',
                
                // Category Descriptions
                animalsDesc: 'Šunys, katės, karvės, paukščiai ir daugiau!',
                vehiclesDesc: 'Automobiliai, traukiniai, lėktuvai ir sunkvežimiai!',
                instrumentsDesc: 'Pianinas, gitara, būgnai ir daugiau!',
                householdDesc: 'Virtuvės, vonios ir namų garsai!',
                natureDesc: 'Lietus, vėjas, vandenynas ir miškas!',
                mixedDesc: 'Visos kategorijos kartu!',
                
                // Settings
                volume: 'Garsumas',
                speed: 'Greitis',
                difficulty: 'Sudėtingumas',
                autoReplay: 'Automatinis Pakartojimas',
                easy: 'Lengvas',
                normal: 'Normalus',
                hard: 'Sunkus',
                expert: 'Ekspertas',
                
                // Results
                excellent: '🏆 Puiku!',
                goodJob: '🌟 Gerai Padaryta!',
                keepPracticing: '💪 Tęsk Pratybas!',
                finalScore: 'Galutinis Rezultatas',
                correctAnswers: 'Teisingi Atsakymai',
                accuracy: 'Tikslumas',
                achievements: 'Pasiekimai',
                masteredSounds: 'Išmokti Garsai',
                nextLevel: 'Kitas Lygis',
                newCategory: 'Nauja Kategorija',
                replayLevel: 'Pakartoti Lygį',
                
                // Error Messages
                audioError: '🔊 Nepavyko įkelti garso failo. Įsitikinkite, kad failai yra tinkamoje vietoje.',
                gameOver: 'Žaidimas Baigtas! Pasibaigė gyvybės. Bandyk dar kartą, kad pagerinti klausymo įgūdžius!',
                
                // Language
                language: 'Kalba',
                selectLanguage: 'Pasirinkti Kalbą',
                
                // Sound Names - Animals
                dog: 'Šuo',
                cat: 'Katė',
                cow: 'Karvė',
                pig: 'Kiaulė',
                duck: 'Antis',
                horse: 'Arklys',
                frog: 'Varlė',
                bird: 'Paukštis',
                wolf: 'Vilkas',
                
                // Sound Names - Vehicles
                car: 'Automobilis',
                truck: 'Sunkvežimis',
                train: 'Traukinys',
                airplane: 'Lėktuvas',
                helicopter: 'Sraigtasparnis',
                motorcycle: 'Motociklas',
                bus: 'Autobusas',
                boat: 'Valtis',
                
                // Sound Names - Instruments
                piano: 'Pianinas',
                guitar: 'Gitara',
                drums: 'Būgnai',
                trumpet: 'Trimitas',
                violin: 'Smuikas',
                saxophone: 'Saksofonas',
                banjo: 'Bendžo',
                accordion: 'Akordeonas',
                
                // Sound Names - Household
                doorbell: 'Durų skambutis',
                phone: 'Telefonas',
                alarm: 'Žadintuvas',
                shower: 'Duša',
                microwave: 'Mikrobangų krosnelė',
                vacuum: 'Dulkių siurblys',
                television: 'Televizorius',
                cooking: 'Maisto gaminimas',
                
                // Sound Names - Nature
                rain: 'Lietus',
                ocean: 'Vandenynas',
                wind: 'Vėjas',
                thunder: 'Griaustinis',
                fire: 'Ugnis',
                leaves: 'Lapai',
                snow: 'Sniegas',
                volcano: 'Ugnikalnis',
                
                // Unknown
                unknown: 'Nežinomas'
            }
        };
    }

    initializeSoundDatabase() {
        return {
            animals: {
                name: 'Animals',
                icon: '🐶',
                sounds: [
                    {
                        id: 'dog',
                        name: 'Dog Barking',
                        nameKey: 'dog',
                        icon: '🐶',
                        soundFile: 'sounds/dog.mp3',
                        fact: 'Dogs bark to communicate with humans and other dogs! They can make over 10 different sounds.',
                        alternatives: ['🐱', '🐮', '🐷', '🐸', '🦆', '🐴', '🐺']
                    },
                    {
                        id: 'cat',
                        name: 'Cat Meowing',
                        nameKey: 'cat',
                        icon: '🐱',
                        soundFile: 'sounds/cat.mp3',
                        fact: 'Cats meow mainly to communicate with humans, not with other cats!',
                        alternatives: ['🐶', '🐮', '🐷', '🐸', '🦆', '🐴', '🐺']
                    },
                    {
                        id: 'cow',
                        name: 'Cow Mooing',
                        nameKey: 'cow',
                        icon: '🐮',
                        soundFile: 'sounds/cow.mp3',
                        fact: 'Cows moo to communicate with their calves and other cows in the herd.',
                        alternatives: ['🐶', '🐱', '🐷', '🐸', '🦆', '🐴', '🐺']
                    },
                    {
                        id: 'pig',
                        name: 'Pig Oinking',
                        nameKey: 'pig',
                        icon: '🐷',
                        soundFile: 'sounds/pig.mp3',
                        fact: 'Pigs are very intelligent and can learn their names just like dogs!',
                        alternatives: ['🐶', '🐱', '🐮', '🐸', '🦆', '🐴', '🐺']
                    },
                    {
                        id: 'duck',
                        name: 'Duck Quacking',
                        nameKey: 'duck',
                        icon: '🦆',
                        soundFile: 'sounds/duck.mp3',
                        fact: 'Duck quacks can echo, despite the popular myth that they can\'t!',
                        alternatives: ['🐶', '🐱', '🐮', '🐷', '🐸', '🐴', '🐺']
                    },
                    {
                        id: 'horse',
                        name: 'Horse Neighing',
                        nameKey: 'horse',
                        icon: '🐴',
                        soundFile: 'sounds/horse.mp3',
                        fact: 'Horses neigh to greet each other and show excitement or alert others to danger.',
                        alternatives: ['🐶', '🐱', '🐮', '🐷', '🐸', '🦆', '🐺']
                    },
                    {
                        id: 'frog',
                        name: 'Frog Croaking',
                        nameKey: 'frog',
                        icon: '🐸',
                        soundFile: 'sounds/frog.mp3',
                        fact: 'Frogs croak louder when it\'s about to rain! They can predict weather changes.',
                        alternatives: ['🐶', '🐱', '🐮', '🐷', '🦆', '🐴', '🐺']
                    },
                    {
                        id: 'bird',
                        name: 'Bird Chirping',
                        nameKey: 'bird',
                        icon: '🐦',
                        soundFile: 'sounds/bird.mp3',
                        fact: 'Birds chirp to communicate, mark territory, and attract mates.',
                        alternatives: ['🐶', '🐱', '🐮', '🐷', '🐸', '🦆', '🐴']
                    }
                ]
            },
            vehicles: {
                name: 'Vehicles',
                icon: '🚗',
                sounds: [
                    {
                        id: 'car',
                        name: 'Car Engine',
                        nameKey: 'car',
                        icon: '🚗',
                        soundFile: 'sounds/car.mp3',
                        fact: 'Car engines make different sounds depending on their size and type!',
                        alternatives: ['🚌', '🚁', '✈️', '🚂', '🚤', '🏍️', '🚚']
                    },
                    {
                        id: 'truck',
                        name: 'Truck Horn',
                        nameKey: 'truck',
                        icon: '🚚',
                        soundFile: 'sounds/truck.mp3',
                        fact: 'Truck horns are louder than car horns to warn other vehicles on the highway.',
                        alternatives: ['🚗', '🚌', '🚁', '✈️', '🚂', '🚤', '🏍️']
                    },
                    {
                        id: 'train',
                        name: 'Train Whistle',
                        nameKey: 'train',
                        icon: '🚂',
                        soundFile: 'sounds/train.mp3',
                        fact: 'Train whistles use different patterns to communicate different messages to railway workers.',
                        alternatives: ['🚗', '🚌', '🚁', '✈️', '🚤', '🏍️', '🚚']
                    },
                    {
                        id: 'airplane',
                        name: 'Airplane Engine',
                        nameKey: 'airplane',
                        icon: '✈️',
                        soundFile: 'sounds/airplane.mp3',
                        fact: 'Airplane engines are designed to be as quiet as possible while still being powerful.',
                        alternatives: ['🚗', '🚌', '🚁', '🚂', '🚤', '🏍️', '🚚']
                    },
                    {
                        id: 'helicopter',
                        name: 'Helicopter Rotors',
                        nameKey: 'helicopter',
                        icon: '🚁',
                        soundFile: 'sounds/helicopter.mp3',
                        fact: 'The distinctive "whop whop" sound comes from the helicopter\'s spinning rotor blades.',
                        alternatives: ['🚗', '🚌', '✈️', '🚂', '🚤', '🏍️', '🚚']
                    },
                    {
                        id: 'motorcycle',
                        name: 'Motorcycle Engine',
                        nameKey: 'motorcycle',
                        icon: '🏍️',
                        soundFile: 'sounds/motorcycle.mp3',
                        fact: 'Motorcycles sound different because they usually have fewer cylinders than cars.',
                        alternatives: ['🚗', '🚌', '🚁', '✈️', '🚂', '🚤', '🚚']
                    }
                ]
            },
            instruments: {
                name: 'Musical Instruments',
                icon: '🎹',
                sounds: [
                    {
                        id: 'piano',
                        name: 'Piano',
                        nameKey: 'piano',
                        icon: '🎹',
                        soundFile: 'sounds/piano.mp3',
                        fact: 'A piano has 88 keys and over 200 strings inside!',
                        alternatives: ['🎸', '🥁', '🎺', '🎻', '🪕', '🎷', '🪗']
                    },
                    {
                        id: 'guitar',
                        name: 'Guitar',
                        nameKey: 'guitar',
                        icon: '🎸',
                        soundFile: 'sounds/guitar.mp3',
                        fact: 'Guitars make sound when strings vibrate over a hollow wooden body.',
                        alternatives: ['🎹', '🥁', '🎺', '🎻', '🪕', '🎷', '🪗']
                    },
                    {
                        id: 'drums',
                        name: 'Drums',
                        nameKey: 'drums',
                        icon: '🥁',
                        soundFile: 'sounds/drum.mp3',
                        fact: 'Drums are some of the oldest musical instruments in the world!',
                        alternatives: ['🎹', '🎸', '🎺', '🎻', '🪕', '🎷', '🪗']
                    },
                    {
                        id: 'trumpet',
                        name: 'Trumpet',
                        nameKey: 'trumpet',
                        icon: '🎺',
                        soundFile: 'sounds/trumpet.mp3',
                        fact: 'Trumpets are made of brass and can play very high, bright notes.',
                        alternatives: ['🎹', '🎸', '🥁', '🎻', '🪕', '🎷', '🪗']
                    },
                    {
                        id: 'violin',
                        name: 'Violin',
                        nameKey: 'violin',
                        icon: '🎻',
                        soundFile: 'sounds/violin.mp3',
                        fact: 'Violins are played with a bow made from horsehair!',
                        alternatives: ['🎹', '🎸', '🥁', '🎺', '🪕', '🎷', '🪗']
                    },
                    {
                        id: 'saxophone',
                        name: 'Saxophone',
                        nameKey: 'saxophone',
                        icon: '🎷',
                        soundFile: 'sounds/saxophone.mp3',
                        fact: 'The saxophone was invented in the 1840s and is popular in jazz music.',
                        alternatives: ['🎹', '🎸', '🥁', '🎺', '🎻', '🪕', '🪗']
                    }
                ]
            },
            household: {
                name: 'Household Items',
                icon: '🏠',
                sounds: [
                    {
                        id: 'doorbell',
                        name: 'Doorbell',
                        nameKey: 'doorbell',
                        icon: '🔔',
                        soundFile: 'sounds/doorbell.mp3',
                        fact: 'Doorbells help us know when someone wants to visit our home.',
                        alternatives: ['📞', '⏰', '🚿', '🔥', '📺', '🍳', '🌪️']
                    },
                    {
                        id: 'phone',
                        name: 'Phone Ringing',
                        nameKey: 'phone',
                        icon: '📞',
                        soundFile: 'sounds/phone.mp3',
                        fact: 'Phones ring to let us know someone wants to talk to us.',
                        alternatives: ['🔔', '⏰', '🚿', '🔥', '📺', '🍳', '🌪️']
                    },
                    {
                        id: 'alarm',
                        name: 'Alarm Clock',
                        nameKey: 'alarm',
                        icon: '⏰',
                        soundFile: 'sounds/alarm.mp3',
                        fact: 'Alarm clocks help us wake up on time for school and work.',
                        alternatives: ['🔔', '📞', '🚿', '🔥', '📺', '🍳', '🌪️']
                    },
                    {
                        id: 'shower',
                        name: 'Shower Running',
                        nameKey: 'shower',
                        icon: '🚿',
                        soundFile: 'sounds/shower.mp3',
                        fact: 'The sound of running water can be very relaxing and calming.',
                        alternatives: ['🔔', '📞', '⏰', '🔥', '📺', '🍳', '🌪️']
                    },
                    {
                        id: 'microwave',
                        name: 'Microwave Beeping',
                        nameKey: 'microwave',
                        icon: '📱',
                        soundFile: 'sounds/microwave.mp3',
                        fact: 'Microwaves beep to let us know our food is ready to eat.',
                        alternatives: ['🔔', '📞', '⏰', '🚿', '🔥', '📺', '🍳']
                    },
                    {
                        id: 'vacuum',
                        name: 'Vacuum Cleaner',
                        nameKey: 'vacuum',
                        icon: '🌪️',
                        soundFile: 'sounds/vacuum.mp3',
                        fact: 'Vacuum cleaners use suction to pick up dirt and dust from carpets.',
                        alternatives: ['🔔', '📞', '⏰', '🚿', '🔥', '📺', '🍳']
                    }
                ]
            },
            nature: {
                name: 'Nature Sounds',
                icon: '🌊',
                sounds: [
                    {
                        id: 'rain',
                        name: 'Rain Falling',
                        nameKey: 'rain',
                        icon: '🌧️',
                        soundFile: 'sounds/rain.mp3',
                        fact: 'The sound of rain is called petrichor, and many people find it very peaceful.',
                        alternatives: ['🌊', '💨', '⛈️', '🔥', '🍃', '❄️', '🌋']
                    },
                    {
                        id: 'ocean',
                        name: 'Ocean Waves',
                        nameKey: 'ocean',
                        icon: '🌊',
                        soundFile: 'sounds/ocean.mp3',
                        fact: 'Ocean waves make sound when water crashes against the shore.',
                        alternatives: ['🌧️', '💨', '⛈️', '🔥', '🍃', '❄️', '🌋']
                    },
                    {
                        id: 'wind',
                        name: 'Wind Blowing',
                        nameKey: 'wind',
                        icon: '💨',
                        soundFile: 'sounds/wind.mp3',
                        fact: 'Wind makes different sounds depending on what it blows through - trees, buildings, or open spaces.',
                        alternatives: ['🌧️', '🌊', '⛈️', '🔥', '🍃', '❄️', '🌋']
                    },
                    {
                        id: 'thunder',
                        name: 'Thunder',
                        nameKey: 'thunder',
                        icon: '⛈️',
                        soundFile: 'sounds/thunder.mp3',
                        fact: 'Thunder is the sound that lightning makes when it heats up the air very quickly.',
                        alternatives: ['🌧️', '🌊', '💨', '🔥', '🍃', '❄️', '🌋']
                    },
                    {
                        id: 'fire',
                        name: 'Fire Crackling',
                        nameKey: 'fire',
                        icon: '🔥',
                        soundFile: 'sounds/fire.mp3',
                        fact: 'Fire crackles because water inside the wood turns to steam and escapes.',
                        alternatives: ['🌧️', '🌊', '💨', '⛈️', '🍃', '❄️', '🌋']
                    },
                    {
                        id: 'leaves',
                        name: 'Leaves Rustling',
                        nameKey: 'leaves',
                        icon: '🍃',
                        soundFile: 'sounds/leaves.mp3',
                        fact: 'Leaves rustle when wind moves through trees, creating a gentle whispering sound.',
                        alternatives: ['🌧️', '🌊', '💨', '⛈️', '🔥', '❄️', '🌋']
                    }
                ]
            }
        };
    }

    initializeGame() {
        this.updateUILanguage(); // Initialize UI with current language
        this.updateDisplay();
        this.showCategoryModal();
        this.preloadSounds();
    }

    setupEventListeners() {
        // Category selection
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                this.selectCategory(category);
            });
        });

        // Sound controls
        document.getElementById('play-sound-btn').addEventListener('click', () => this.playCurrentSound());
        document.getElementById('replay-sound-btn').addEventListener('click', () => this.playCurrentSound());
        document.getElementById('listen-again-btn').addEventListener('click', () => this.playCurrentSound());

        // Game controls
        document.getElementById('hint-btn').addEventListener('click', () => this.showHint());
        document.getElementById('settings-btn').addEventListener('click', () => this.showSettings());
        document.getElementById('mute-btn').addEventListener('click', () => this.toggleMute());
        document.getElementById('menu-btn').addEventListener('click', () => this.showCategoryModal());

        // Modal controls
        document.getElementById('continue-btn').addEventListener('click', () => this.hideFeedback());
        document.getElementById('close-settings').addEventListener('click', () => this.hideSettings());
        document.getElementById('next-level-btn').addEventListener('click', () => this.nextLevel());
        document.getElementById('new-category-btn').addEventListener('click', () => this.showCategoryModal());
        document.getElementById('replay-level-btn').addEventListener('click', () => this.replayLevel());

        // Settings
        this.setupSettingsListeners();
        
        // Language selector
        this.setupLanguageSelector();
    }

    setupLanguageSelector() {
        const languageBtn = document.getElementById('language-btn');
        const languageDropdown = document.querySelector('.language-dropdown');
        const languageOptions = document.querySelectorAll('.language-option');
        
        // Toggle dropdown
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageDropdown.contains(e.target)) {
                languageDropdown.classList.remove('active');
            }
        });
        
        // Language option selection
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = option.getAttribute('data-lang');
                this.changeLanguage(selectedLang);
                
                // Update active state
                languageOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Update button text
                const flag = option.querySelector('.flag').textContent;
                const name = option.querySelector('span:last-child').textContent;
                languageBtn.innerHTML = `
                    <span class="flag">${flag}</span>
                    <span>${name}</span>
                    <i class="fas fa-chevron-down"></i>
                `;
                
                // Close dropdown
                languageDropdown.classList.remove('active');
            });
        });
        
        // Set initial language
        const currentLangOption = document.querySelector(`[data-lang="${this.currentLanguage}"]`);
        if (currentLangOption) {
            currentLangOption.classList.add('active');
            const flag = currentLangOption.querySelector('.flag').textContent;
            const name = currentLangOption.querySelector('span:last-child').textContent;
            languageBtn.innerHTML = `
                <span class="flag">${flag}</span>
                <span>${name}</span>
                <i class="fas fa-chevron-down"></i>
            `;
        }
    }

    setupSettingsListeners() {
        const volumeSlider = document.getElementById('volume-slider');
        const volumeValue = document.getElementById('volume-value');
        
        volumeSlider.addEventListener('input', (e) => {
            this.gameSettings.volume = e.target.value / 100;
            volumeValue.textContent = e.target.value + '%';
        });

        document.getElementById('speed-select').addEventListener('change', (e) => {
            this.gameSettings.speed = e.target.value;
        });

        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.gameSettings.difficulty = btn.dataset.difficulty;
            });
        });

        document.getElementById('auto-replay').addEventListener('change', (e) => {
            this.gameSettings.autoReplay = e.target.checked;
        });
    }

    selectCategory(categoryName) {
        this.currentCategory = categoryName;
        this.hideCategoryModal();
        
        if (categoryName === 'mixed') {
            this.currentSounds = this.getMixedSounds();
        } else {
            this.currentSounds = [...this.soundDatabase[categoryName].sounds];
        }
        
        this.shuffleArray(this.currentSounds);
        this.startGame();
    }

    getMixedSounds() {
        const allSounds = [];
        Object.values(this.soundDatabase).forEach(category => {
            allSounds.push(...category.sounds);
        });
        return allSounds;
    }

    startGame() {
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 0;
        this.loadQuestion();
    }

    loadQuestion() {
        if (this.currentQuestionIndex >= this.questionsPerLevel || !this.currentSounds || this.currentSounds.length === 0) {
            this.showResults();
            return;
        }

        const soundIndex = this.currentQuestionIndex % this.currentSounds.length;
        this.currentSound = this.currentSounds[soundIndex];
        
        // Update UI
        document.getElementById('sound-question').textContent = this.translate('whatSoundIsThis');
        document.getElementById('question-counter').textContent = `${this.translate('question')} ${this.currentQuestionIndex + 1} ${this.translate('of')} ${this.questionsPerLevel}`;
        
        const categoryName = this.currentCategory === 'mixed' ? 
            this.translate('mixed') : 
            (this.soundDatabase[this.currentCategory]?.name || 'Unknown');
        document.getElementById('category-info').textContent = `${this.translate('category')}: ${categoryName}`;
        
        this.generateOptions();
        this.updateProgress();
        
        // Auto-play if enabled
        if (this.gameSettings.autoReplay && this.currentQuestionIndex > 0) {
            setTimeout(() => this.playCurrentSound(), 1000);
        }
    }

    generateOptions() {
        const container = document.getElementById('picture-options');
        container.innerHTML = '';
        
        const numOptions = this.getNumOptions();
        const correctOption = this.currentSound;
        const wrongOptions = this.getRandomWrongOptions(correctOption, numOptions - 1);
        const allOptions = [correctOption, ...wrongOptions];
        
        this.shuffleArray(allOptions);
        
        allOptions.forEach(sound => {
            const option = document.createElement('div');
            option.className = 'picture-option';
            
            // Use translated name if nameKey exists, otherwise use original name
            const displayName = sound.nameKey ? this.translate(sound.nameKey) : sound.name;
            
            option.innerHTML = `
                <span class="picture-icon">${sound.icon}</span>
                <span class="picture-label">${displayName}</span>
            `;
            option.addEventListener('click', () => this.selectOption(option, sound));
            container.appendChild(option);
        });
    }

    getNumOptions() {
        switch (this.gameSettings.difficulty) {
            case 'easy': return 4;
            case 'normal': return 6;
            case 'hard': return 8;
            default: return 6;
        }
    }

    getRandomWrongOptions(correctSound, count) {
        let availableOptions = [];
        
        if (this.currentCategory === 'mixed') {
            // Get options from all categories
            Object.values(this.soundDatabase).forEach(category => {
                availableOptions.push(...category.sounds);
            });
        } else {
            // Get options from current category and alternatives
            const currentCategoryData = this.soundDatabase[this.currentCategory];
            availableOptions = [...currentCategoryData.sounds];
            
            // Add alternatives from the correct sound
            if (correctSound.alternatives) {
                correctSound.alternatives.forEach(altIcon => {
                    availableOptions.push({
                        id: `alt_${altIcon}`,
                        name: this.getNameFromIcon(altIcon),
                        icon: altIcon,
                        soundFile: 'unknown'
                    });
                });
            }
        }
        
        // Remove the correct answer
        availableOptions = availableOptions.filter(sound => sound.id !== correctSound.id);
        
        // Shuffle and take the required count
        this.shuffleArray(availableOptions);
        return availableOptions.slice(0, count);
    }

    getNameFromIcon(icon) {
        const iconMap = {
            '🐶': 'dog', '🐱': 'cat', '🐮': 'cow', '🐷': 'pig', '🐸': 'frog',
            '🦆': 'duck', '🐴': 'horse', '🐺': 'wolf', '🐦': 'bird',
            '🚗': 'car', '🚌': 'bus', '🚁': 'helicopter', '✈️': 'airplane',
            '🚂': 'train', '🚤': 'boat', '🏍️': 'motorcycle', '🚚': 'truck',
            '🎹': 'piano', '🎸': 'guitar', '🥁': 'drums', '🎺': 'trumpet',
            '🎻': 'violin', '🪕': 'banjo', '🎷': 'saxophone', '🪗': 'accordion',
            '🔔': 'doorbell', '📞': 'phone', '⏰': 'alarm', '🚿': 'shower',
            '🔥': 'fire', '📺': 'television', '🍳': 'cooking', '🌪️': 'vacuum',
            '🌧️': 'rain', '🌊': 'ocean', '💨': 'wind', '⛈️': 'thunder',
            '🍃': 'leaves', '❄️': 'snow', '🌋': 'volcano'
        };
        const translationKey = iconMap[icon] || 'unknown';
        return this.translate(translationKey);
    }

    selectOption(optionElement, selectedSound) {
        // Disable all options
        document.querySelectorAll('.picture-option').forEach(opt => {
            opt.style.pointerEvents = 'none';
        });
        
        const isCorrect = selectedSound.id === this.currentSound.id;
        
        // Visual feedback
        if (isCorrect) {
            optionElement.classList.add('correct');
            this.handleCorrectAnswer();
        } else {
            optionElement.classList.add('incorrect');
            this.handleIncorrectAnswer();
            
            // Highlight correct answer
            document.querySelectorAll('.picture-option').forEach(opt => {
                const optionIcon = opt.querySelector('.picture-icon').textContent;
                if (optionIcon === this.currentSound.icon) {
                    opt.classList.add('correct');
                }
            });
        }
        
        setTimeout(() => {
            this.showFeedback(isCorrect);
        }, 1500);
    }

    handleCorrectAnswer() {
        // Stop the currently playing sound when user answers correctly
        this.stopCurrentSound();
        
        this.playerScore += this.calculateScore();
        this.streakCount++;
        this.correctAnswers++;
        this.masteredSounds.add(this.currentSound.id);
        this.checkAchievements();
        this.playSuccessSound();
        this.updateDisplay();
    }

    handleIncorrectAnswer() {
        this.streakCount = 0;
        this.livesCount = Math.max(0, this.livesCount - 1);
        this.playErrorSound();
        this.updateDisplay();
        
        if (this.livesCount === 0) {
            setTimeout(() => {
                this.showGameOver();
            }, 2000);
        }
    }

    calculateScore() {
        let baseScore = 100;
        
        // Streak bonus
        if (this.streakCount >= 5) baseScore += 50;
        else if (this.streakCount >= 3) baseScore += 25;
        
        // Speed bonus
        if (this.gameSettings.speed === 'fast') baseScore += 20;
        
        // Difficulty bonus
        if (this.gameSettings.difficulty === 'hard') baseScore += 30;
        else if (this.gameSettings.difficulty === 'normal') baseScore += 15;
        
        return baseScore;
    }

    showFeedback(isCorrect) {
        const modal = document.getElementById('feedback-modal');
        const icon = document.getElementById('feedback-icon');
        const title = document.getElementById('feedback-title');
        const picture = document.getElementById('correct-picture');
        const soundName = document.getElementById('sound-name');
        const soundFact = document.getElementById('sound-fact');
        
        if (isCorrect) {
            icon.textContent = '✅';
            title.textContent = this.translate('correct');
            title.style.color = '#4CAF50';
        } else {
            icon.textContent = '❌';
            title.textContent = this.translate('tryAgain');
            title.style.color = '#f44336';
        }
        
        picture.textContent = this.currentSound.icon;
        soundName.textContent = this.currentSound.name;
        soundFact.textContent = this.currentSound.fact;
        
        modal.classList.add('active');
    }

    hideFeedback() {
        document.getElementById('feedback-modal').classList.remove('active');
        this.totalQuestions++;
        this.currentQuestionIndex++;
        
        // Reset options
        document.querySelectorAll('.picture-option').forEach(opt => {
            opt.style.pointerEvents = 'auto';
            opt.classList.remove('correct', 'incorrect', 'selected');
        });
        
        this.loadQuestion();
    }

    playCurrentSound() {
        if (this.gameSettings.muted || !this.currentSound) return;
        
        const audio = this.audioElements[this.currentSound.id];
        if (!audio) {
            console.warn(`Audio element not found for sound: ${this.currentSound.id}`);
            this.showAudioError();
            return;
        }
        
        // Visual feedback
        const soundWave = document.getElementById('sound-wave');
        const playBtn = document.getElementById('play-sound-btn');
        const soundIcon = document.getElementById('sound-icon');
        
        soundWave.classList.add('playing');
        playBtn.disabled = true;
        soundIcon.textContent = '🔊';
        
        // Set volume and play
        audio.volume = this.gameSettings.volume;
        audio.currentTime = 0; // Reset to beginning
        
        // Stop any currently playing audio
        if (this.currentlyPlayingAudio) {
            this.currentlyPlayingAudio.pause();
            this.currentlyPlayingAudio.currentTime = 0;
        }
        
        this.currentlyPlayingAudio = audio;
        
        // Play the audio
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Audio started successfully
                console.log(`Playing sound: ${this.currentSound.name}`);
            }).catch(error => {
                console.warn(`Failed to play sound: ${this.currentSound.name}`, error);
                this.showAudioError();
            });
        }
        
        // Maximum 10 seconds or actual duration, whichever is shorter
        const maxDuration = 10000; // 10 seconds in milliseconds
        const actualDuration = (audio.duration && !isNaN(audio.duration)) ? 
                              Math.min(audio.duration * 1000, maxDuration) : 
                              Math.min(this.getSoundDuration(), maxDuration);
        
        // Set up timer to stop audio after maximum duration
        this.audioTimer = setTimeout(() => {
            if (this.currentlyPlayingAudio === audio) {
                audio.pause();
                audio.currentTime = 0;
                this.currentlyPlayingAudio = null;
            }
            
            soundWave.classList.remove('playing');
            playBtn.disabled = false;
            soundIcon.textContent = '🔇';
        }, actualDuration);
        
        // Also listen for natural end of audio
        const handleAudioEnd = () => {
            if (this.audioTimer) {
                clearTimeout(this.audioTimer);
                this.audioTimer = null;
            }
            
            soundWave.classList.remove('playing');
            playBtn.disabled = false;
            soundIcon.textContent = '🔇';
            this.currentlyPlayingAudio = null;
            
            audio.removeEventListener('ended', handleAudioEnd);
        };
        
        audio.addEventListener('ended', handleAudioEnd);
    }

    stopCurrentSound() {
        if (this.currentlyPlayingAudio) {
            this.currentlyPlayingAudio.pause();
            this.currentlyPlayingAudio.currentTime = 0;
            this.currentlyPlayingAudio = null;
        }
        
        if (this.audioTimer) {
            clearTimeout(this.audioTimer);
            this.audioTimer = null;
        }
        
        // Reset visual elements
        const soundWave = document.getElementById('sound-wave');
        const playBtn = document.getElementById('play-sound-btn');
        const soundIcon = document.getElementById('sound-icon');
        
        if (soundWave) soundWave.classList.remove('playing');
        if (playBtn) playBtn.disabled = false;
        if (soundIcon) soundIcon.textContent = '🔇';
    }

    showAudioError() {
        const errorMsg = document.createElement('div');
        errorMsg.className = 'audio-error';
        errorMsg.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #ff4444;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 10000;
        `;
        errorMsg.textContent = this.translate('audioError');
        
        document.body.appendChild(errorMsg);
        
        setTimeout(() => {
            if (errorMsg.parentNode) {
                errorMsg.parentNode.removeChild(errorMsg);
            }
        }, 3000);
    }

    playSuccessSound() {
        if (this.gameSettings.muted) return;
        
        // Create a simple success beep using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Success melody: C-E-G chord progression
            const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
            
            gainNode.gain.setValueAtTime(this.gameSettings.volume * 0.2, audioContext.currentTime);
            
            notes.forEach((frequency, index) => {
                const noteTime = audioContext.currentTime + (index * 0.2);
                oscillator.frequency.setValueAtTime(frequency, noteTime);
                
                // Volume envelope for each note
                gainNode.gain.setValueAtTime(this.gameSettings.volume * 0.2, noteTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, noteTime + 0.18);
            });
            
            oscillator.type = 'sine';
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.8);
        } catch (e) {
            console.log('Could not play success sound:', e);
        }
    }

    playErrorSound() {
        if (this.gameSettings.muted) return;
        
        // Create a simple error beep using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Error sound: Lower frequency with slight discord
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(180, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(160, audioContext.currentTime + 0.2);
            
            oscillator.type = 'sawtooth';
            
            gainNode.gain.setValueAtTime(this.gameSettings.volume * 0.15, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (e) {
            console.log('Could not play error sound:', e);
        }
    }

    getSoundDuration() {
        // Default duration for audio feedback (used when actual duration is not available)
        return 2000; // 2 seconds default
    }

    // Translation methods
    translate(key) {
        return this.translations[this.currentLanguage][key] || this.translations['en'][key] || key;
    }

    changeLanguage(languageCode) {
        if (this.translations[languageCode]) {
            this.currentLanguage = languageCode;
            this.updateUILanguage();
            // Save language preference
            localStorage.setItem('soundMatchGameLanguage', languageCode);
        }
    }

    updateUILanguage() {
        // Update all UI elements with current language
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.translate(key);
        });

        // Update placeholders
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.translate(key);
        });

        // Update specific elements that might need special handling
        this.updateSpecificUIElements();
    }

    updateSpecificUIElements() {
        // Update mute button text
        const muteBtn = document.getElementById('mute-btn');
        if (muteBtn) {
            muteBtn.textContent = this.gameSettings.muted ? 
                `🔇 ${this.translate('unmute')}` : 
                `🔊 ${this.translate('mute')}`;
        }

        // Update category info if game is running
        if (this.currentCategory) {
            const categoryInfo = document.getElementById('category-info');
            if (categoryInfo) {
                const categoryKey = this.currentCategory === 'mixed' ? 'mixed' : this.currentCategory;
                categoryInfo.textContent = `${this.translate('category')}: ${this.translate(categoryKey)}`;
            }
        }

        // Update question text if game is running
        const soundQuestion = document.getElementById('sound-question');
        if (soundQuestion) {
            soundQuestion.textContent = this.translate('whatSoundIsThis');
        }
    }

    loadLanguagePreference() {
        const savedLanguage = localStorage.getItem('soundMatchGameLanguage');
        if (savedLanguage && this.translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        }
    }

    showHint() {
        if (this.currentSound) {
            const hints = [
                `This sound comes from a ${this.currentSound.name.toLowerCase()}.`,
                `Look for the ${this.currentSound.icon} icon!`,
                `${this.currentSound.fact.split('.')[0]}.`
            ];
            const randomHint = hints[Math.floor(Math.random() * hints.length)];
            alert(`💡 Hint: ${randomHint}`);
        }
    }

    toggleMute() {
        this.gameSettings.muted = !this.gameSettings.muted;
        const muteBtn = document.getElementById('mute-btn');
        muteBtn.textContent = this.gameSettings.muted ? 
            `🔇 ${this.translate('unmute')}` : 
            `🔊 ${this.translate('mute')}`;
        muteBtn.classList.toggle('muted', this.gameSettings.muted);
    }

    showSettings() {
        document.getElementById('settings-modal').classList.add('active');
    }

    hideSettings() {
        document.getElementById('settings-modal').classList.remove('active');
    }

    showCategoryModal() {
        document.getElementById('category-modal').classList.add('active');
    }

    hideCategoryModal() {
        document.getElementById('category-modal').classList.remove('active');
    }

    checkAchievements() {
        const newAchievements = [];
        
        if (this.streakCount === 5 && !this.achievements.has('streak5')) {
            newAchievements.push('🔥 Hot Streak!');
            this.achievements.add('streak5');
        }
        
        if (this.correctAnswers === 10 && !this.achievements.has('perfect10')) {
            newAchievements.push('🎯 Perfect Score!');
            this.achievements.add('perfect10');
        }
        
        if (this.masteredSounds.size >= 20 && !this.achievements.has('soundMaster')) {
            newAchievements.push('🎵 Sound Master!');
            this.achievements.add('soundMaster');
        }
        
        if (this.currentLevel >= 5 && !this.achievements.has('levelUp5')) {
            newAchievements.push('⭐ Level 5 Reached!');
            this.achievements.add('levelUp5');
        }
        
        return newAchievements;
    }

    showResults() {
        const modal = document.getElementById('results-modal');
        const title = document.getElementById('results-title');
        const finalScore = document.getElementById('final-score');
        const correctAnswersSpan = document.getElementById('correct-answers');
        const accuracy = document.getElementById('accuracy');
        const achievementsContainer = document.getElementById('achievements');
        const masteredContainer = document.getElementById('mastered-sounds');
        
        const accuracyPercent = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        
        title.textContent = accuracyPercent >= 80 ? this.translate('excellent') : 
                           accuracyPercent >= 60 ? this.translate('goodJob') : 
                           this.translate('keepPracticing');
        finalScore.textContent = this.playerScore;
        correctAnswersSpan.textContent = this.correctAnswers;
        accuracy.textContent = accuracyPercent + '%';
        
        // Display achievements
        achievementsContainer.innerHTML = '';
        this.achievements.forEach(achievement => {
            const achievementEl = document.createElement('div');
            achievementEl.className = 'achievement';
            achievementEl.textContent = achievement;
            achievementsContainer.appendChild(achievementEl);
        });
        
        // Display mastered sounds
        masteredContainer.innerHTML = '';
        this.masteredSounds.forEach(soundId => {
            const sound = this.findSoundById(soundId);
            if (sound) {
                const masteredEl = document.createElement('div');
                masteredEl.className = 'mastered-sound';
                masteredEl.innerHTML = `
                    <span class="mastered-sound-icon">${sound.icon}</span>
                    <span>${sound.name}</span>
                `;
                masteredContainer.appendChild(masteredEl);
            }
        });
        
        modal.classList.add('active');
    }

    findSoundById(soundId) {
        for (const category of Object.values(this.soundDatabase)) {
            const sound = category.sounds.find(s => s.id === soundId);
            if (sound) return sound;
        }
        return null;
    }

    nextLevel() {
        this.currentLevel++;
        this.livesCount = Math.min(5, this.livesCount + 1); // Restore one life
        this.questionsPerLevel = Math.min(15, this.questionsPerLevel + 1); // Increase difficulty
        
        document.getElementById('results-modal').classList.remove('active');
        this.startGame();
    }

    replayLevel() {
        document.getElementById('results-modal').classList.remove('active');
        this.startGame();
    }

    showGameOver() {
        alert(this.translate('gameOver'));
        this.livesCount = 3;
        this.showCategoryModal();
    }

    updateDisplay() {
        document.getElementById('current-level').textContent = this.currentLevel;
        document.getElementById('player-score').textContent = this.playerScore;
        document.getElementById('streak-count').textContent = this.streakCount;
        document.getElementById('lives-count').textContent = this.livesCount;
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questionsPerLevel) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    preloadSounds() {
        // Audio files are already preloaded in preloadAllSounds
        console.log('Audio files loaded and ready...');
    }

    preloadAllSounds() {
        // Preload all sound files
        Object.values(this.soundDatabase).forEach(category => {
            category.sounds.forEach(sound => {
                if (sound.soundFile) {
                    const audio = new Audio();
                    audio.preload = 'auto';
                    audio.src = sound.soundFile;
                    
                    // Add error handling
                    audio.addEventListener('error', (e) => {
                        console.warn(`Failed to load sound: ${sound.soundFile}`, e);
                    });
                    
                    // Store the audio element
                    this.audioElements[sound.id] = audio;
                }
            });
        });
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    new SoundMatchGame();
});

// Add keyboard shortcuts
document.addEventListener('keydown', (event) => {
    switch(event.key.toLowerCase()) {
        case ' ':
        case 'p':
            event.preventDefault();
            document.getElementById('play-sound-btn').click();
            break;
        case 'r':
            document.getElementById('replay-sound-btn').click();
            break;
        case 'h':
            document.getElementById('hint-btn').click();
            break;
        case 'm':
            document.getElementById('mute-btn').click();
            break;
        case 's':
            document.getElementById('settings-btn').click();
            break;
        case 'escape':
            // Close any open modals
            document.querySelectorAll('.modal').forEach(modal => {
                if (modal.style.display === 'flex') {
                    modal.style.display = 'none';
                }
            });
            break;
    }
});
