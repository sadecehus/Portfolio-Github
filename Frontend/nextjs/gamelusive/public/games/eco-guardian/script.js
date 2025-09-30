// Eco Guardian - Sustainability Education Game
class EcoGuardianGame {
    constructor() {
        this.currentLanguage = 'en';
        this.level = 1;
        this.score = 0;
        this.correctAnswers = 0;
        this.totalAnswers = 0;
        this.items = [];
        this.challengeMode = false;
        this.challengeTimer = null;
        this.gameStarted = false;
        this.draggedItem = null;
        this.levelTargets = { 1: 5, 2: 8, 3: 12, 4: 15 };
        this.levelCompleted = 0;
        
        this.translations = {
            en: {
                title: "Eco Guardian - Save Our Planet!",
                score: "Score",
                level: "Level",
                correct: "Correct",
                startGame: "Start Game",
                nextLevel: "Next Level",
                restart: "Restart",
                instructions: "Instructions",
                close: "Close",
                timeUp: "Time's up!",
                wellDone: "Well Done!",
                levelComplete: "Level Complete!",
                gameComplete: "Game Complete!",
                gameOver: "Game Over",
                tryAgain: "Try Again",
                bins: {
                    plastic: "Plastic",
                    paper: "Paper", 
                    glass: "Glass",
                    organic: "Organic"
                },
                wasteTypes: {
                    plastic: ["🥤", "🧴", "🛍️", "🥄", "🪥"],
                    paper: ["📰", "📄", "📦", "📚", "🗞️"],
                    glass: ["🍷", "🍺", "🥃", "🪟", "💡"],
                    organic: ["🍎", "🍌", "🥕", "🍃", "🌿"]
                },
                challenges: {
                    q1: {
                        question: "How long does it take for a plastic bottle to decompose in nature?",
                        options: ["1 year", "50 years", "450 years", "1000 years"],
                        correct: 2,
                        explanation: "Plastic bottles can take up to 450 years to decompose completely!"
                    },
                    q2: {
                        question: "Which action saves the most water?",
                        options: ["Shorter showers", "Turn off tap while brushing", "Fix leaks", "All of the above"],
                        correct: 3,
                        explanation: "All these actions combined make a significant impact on water conservation!"
                    },
                    q3: {
                        question: "What percentage of the Earth's water is drinkable?",
                        options: ["10%", "5%", "1%", "15%"],
                        correct: 2,
                        explanation: "Only about 1% of Earth's water is fresh and accessible for drinking!"
                    },
                    q4: {
                        question: "Which transportation method produces the least carbon emissions?",
                        options: ["Car", "Bus", "Bicycle", "Airplane"],
                        correct: 2,
                        explanation: "Bicycles produce zero emissions and are the most eco-friendly transportation!"
                    },
                    q5: {
                        question: "How much energy can recycling one aluminum can save?",
                        options: ["Enough to power a TV for 1 hour", "Enough to power a TV for 3 hours", "Enough to power a TV for 6 hours", "No energy savings"],
                        correct: 1,
                        explanation: "Recycling one aluminum can saves enough energy to power a TV for 3 hours!"
                    },
                    q6: {
                        question: "What is the main cause of ocean pollution?",
                        options: ["Oil spills", "Plastic waste", "Chemical runoff", "All of the above"],
                        correct: 3,
                        explanation: "Ocean pollution comes from multiple sources, with plastic waste being a major contributor!"
                    },
                    q7: {
                        question: "How many trees are needed to produce 1 ton of paper?",
                        options: ["5 trees", "12 trees", "17 trees", "24 trees"],
                        correct: 2,
                        explanation: "It takes about 17 trees to produce 1 ton of paper - that's why recycling is so important!"
                    },
                    q8: {
                        question: "Which renewable energy source is most widely used globally?",
                        options: ["Solar", "Wind", "Hydroelectric", "Geothermal"],
                        correct: 2,
                        explanation: "Hydroelectric power is currently the most widely used renewable energy source worldwide!"
                    },
                    q9: {
                        question: "How much of household waste can typically be recycled?",
                        options: ["20%", "40%", "60%", "80%"],
                        correct: 2,
                        explanation: "About 60% of household waste can be recycled if properly sorted!"
                    },
                    q10: {
                        question: "What is the most effective way to reduce your carbon footprint?",
                        options: ["Use less electricity", "Drive less", "Eat less meat", "Reduce, reuse, recycle"],
                        correct: 3,
                        explanation: "Following the 3 R's (Reduce, Reuse, Recycle) is the most comprehensive approach!"
                    },
                    q11: {
                        question: "How long does it take for a glass bottle to decompose?",
                        options: ["100 years", "500 years", "1,000 years", "Never completely"],
                        correct: 3,
                        explanation: "Glass bottles can take over 1 million years to decompose, but they're 100% recyclable!"
                    },
                    q12: {
                        question: "Which appliance uses the most energy in a typical home?",
                        options: ["Refrigerator", "Air conditioning", "Water heater", "Television"],
                        correct: 1,
                        explanation: "Air conditioning systems typically consume the most energy in homes!"
                    }
                },
                instructionsText: {
                    title: "How to Play Eco Guardian",
                    goal: "Help save our planet by correctly sorting waste and learning about sustainability!",
                    howToPlay: "How to Play:",
                    rules: [
                        "Drag waste items to the correct recycling bins",
                        "Answer sustainability questions to earn bonus points",
                        "Complete each level by sorting the required number of items",
                        "Learn interesting facts about environmental protection"
                    ],
                    bins: "Recycling Bins:",
                    levels: "Levels:",
                    levelDescriptions: [
                        "Level 1: Basic sorting - 5 items to sort",
                        "Level 2: Mixed waste - 8 items to sort", 
                        "Level 3: Advanced sorting - 12 items to sort",
                        "Level 4: Expert level - 15 items to sort"
                    ]
                }
            },
            tr: {
                title: "Eko Koruyucu - Gezegenimizi Kurtar!",
                score: "Puan",
                level: "Seviye",
                correct: "Doğru",
                startGame: "Oyunu Başlat",
                nextLevel: "Sonraki Seviye",
                restart: "Yeniden Başla",
                instructions: "Talimatlar",
                close: "Kapat",
                timeUp: "Süre bitti!",
                wellDone: "Aferin!",
                levelComplete: "Seviye Tamamlandı!",
                gameComplete: "Oyun Tamamlandı!",
                gameOver: "Oyun Bitti",
                tryAgain: "Tekrar Dene",
                bins: {
                    plastic: "Plastik",
                    paper: "Kağıt",
                    glass: "Cam", 
                    organic: "Organik"
                },
                wasteTypes: {
                    plastic: ["🥤", "🧴", "🛍️", "🥄", "🪥"],
                    paper: ["📰", "📄", "📦", "📚", "🗞️"],
                    glass: ["🍷", "🍺", "🥃", "🪟", "💡"],
                    organic: ["🍎", "🍌", "🥕", "🍃", "🌿"]
                },
                challenges: {
                    q1: {
                        question: "Bir plastik şişenin doğada çürümesi ne kadar sürer?",
                        options: ["1 yıl", "50 yıl", "450 yıl", "1000 yıl"],
                        correct: 2,
                        explanation: "Plastik şişeler tamamen çürümek için 450 yıla kadar sürebilir!"
                    },
                    q2: {
                        question: "En çok suyu hangi eylem tasarruf eder?",
                        options: ["Kısa duş", "Diş fırçalarken musluğu kapatmak", "Sızıntıları tamir etmek", "Hepsi"],
                        correct: 3,
                        explanation: "Tüm bu eylemler birlikte su tasarrufunda önemli etki yaratır!"
                    },
                    q3: {
                        question: "Dünya suyunun yüzde kaçı içilebilir?",
                        options: ["%10", "%5", "%1", "%15"],
                        correct: 2,
                        explanation: "Dünya suyunun sadece yaklaşık %1'i tatlı ve içmek için erişilebilir!"
                    },
                    q4: {
                        question: "Hangi ulaşım yöntemi en az karbon emisyonu üretir?",
                        options: ["Araba", "Otobüs", "Bisiklet", "Uçak"],
                        correct: 2,
                        explanation: "Bisikletler sıfır emisyon üretir ve en çevre dostu ulaşım aracıdır!"
                    },
                    q5: {
                        question: "Bir alüminyum kutuyu geri dönüştürmek ne kadar enerji tasarrufu sağlar?",
                        options: ["1 saat TV çalıştıracak kadar", "3 saat TV çalıştıracak kadar", "6 saat TV çalıştıracak kadar", "Enerji tasarrufu yok"],
                        correct: 1,
                        explanation: "Bir alüminyum kutuyu geri dönüştürmek 3 saat TV çalıştıracak kadar enerji tasarrufu sağlar!"
                    },
                    q6: {
                        question: "Okyanus kirliliğinin ana nedeni nedir?",
                        options: ["Petrol sızıntıları", "Plastik atıklar", "Kimyasal atıklar", "Hepsi"],
                        correct: 3,
                        explanation: "Okyanus kirliliği birçok kaynaktan gelir ve plastik atıklar büyük bir katkıda bulunur!"
                    },
                    q7: {
                        question: "1 ton kağıt üretmek için kaç ağaç kesilir?",
                        options: ["5 ağaç", "12 ağaç", "17 ağaç", "24 ağaç"],
                        correct: 2,
                        explanation: "1 ton kağıt için yaklaşık 17 ağaç kesilir - bu yüzden geri dönüşüm çok önemli!"
                    },
                    q8: {
                        question: "Dünyada en yaygın kullanılan yenilenebilir enerji kaynağı hangisidir?",
                        options: ["Güneş", "Rüzgar", "Hidroelektrik", "Jeotermal"],
                        correct: 2,
                        explanation: "Hidroelektrik enerji şu anda dünyada en yaygın kullanılan yenilenebilir enerji kaynağıdır!"
                    },
                    q9: {
                        question: "Ev atıklarının yüzde kaçı geri dönüştürülebilir?",
                        options: ["%20", "%40", "%60", "%80"],
                        correct: 2,
                        explanation: "Doğru şekilde ayrıştırıldığında ev atıklarının yaklaşık %60'ı geri dönüştürülebilir!"
                    },
                    q10: {
                        question: "Karbon ayak izini azaltmanın en etkili yolu nedir?",
                        options: ["Daha az elektrik kullanmak", "Daha az araç kullanmak", "Daha az et yemek", "Azalt, yeniden kullan, geri dönüştür"],
                        correct: 3,
                        explanation: "3R kuralını (Azalt, Yeniden kullan, Geri dönüştür) takip etmek en kapsamlı yaklaşımdır!"
                    },
                    q11: {
                        question: "Bir cam şişenin doğada çürümesi ne kadar sürer?",
                        options: ["100 yıl", "500 yıl", "1.000 yıl", "Hiçbir zaman tamamen"],
                        correct: 3,
                        explanation: "Cam şişeler 1 milyon yıldan fazla sürede çürür, ancak %100 geri dönüştürülebilir!"
                    },
                    q12: {
                        question: "Evde en çok enerji hangi cihaz tüketir?",
                        options: ["Buzdolabı", "Klima", "Su ısıtıcısı", "Televizyon"],
                        correct: 1,
                        explanation: "Klima sistemleri genellikle evlerde en fazla enerji tüketen cihazlardır!"
                    }
                },
                instructionsText: {
                    title: "Eko Koruyucu Nasıl Oynanır",
                    goal: "Atıkları doğru bir şekilde ayırarak ve sürdürülebilirlik hakkında öğrenerek gezegenimizi kurtarmaya yardım et!",
                    howToPlay: "Nasıl Oynanır:",
                    rules: [
                        "Atık öğelerini doğru geri dönüşüm kutularına sürükle",
                        "Bonus puan kazanmak için sürdürülebilirlik sorularını yanıtla",
                        "Gerekli sayıda öğeyi sıralayarak her seviyeyi tamamla",
                        "Çevre koruma hakkında ilginç gerçekleri öğren"
                    ],
                    bins: "Geri Dönüşüm Kutuları:",
                    levels: "Seviyeler:",
                    levelDescriptions: [
                        "Seviye 1: Temel sıralama - 5 öğe",
                        "Seviye 2: Karışık atık - 8 öğe",
                        "Seviye 3: Gelişmiş sıralama - 12 öğe", 
                        "Seviye 4: Uzman seviye - 15 öğe"
                    ]
                }
            },
            pl: {
                title: "Eko Strażnik - Uratuj Naszą Planetę!",
                score: "Wynik",
                level: "Poziom",
                correct: "Poprawne",
                startGame: "Rozpocznij Grę",
                nextLevel: "Następny Poziom",
                restart: "Restart",
                instructions: "Instrukcje",
                close: "Zamknij",
                timeUp: "Czas minął!",
                wellDone: "Dobrze zrobione!",
                levelComplete: "Poziom Ukończony!",
                gameComplete: "Gra Ukończona!",
                gameOver: "Koniec Gry",
                tryAgain: "Spróbuj Ponownie",
                bins: {
                    plastic: "Plastik",
                    paper: "Papier",
                    glass: "Szkło",
                    organic: "Organiczne"
                },
                wasteTypes: {
                    plastic: ["🥤", "🧴", "🛍️", "🥄", "🪥"],
                    paper: ["📰", "📄", "📦", "📚", "🗞️"],
                    glass: ["🍷", "🍺", "🥃", "🪟", "💡"],
                    organic: ["🍎", "🍌", "🥕", "🍃", "🌿"]
                },
                challenges: {
                    q1: {
                        question: "Ile czasu potrzeba plastikowej butelce na rozkład w naturze?",
                        options: ["1 rok", "50 lat", "450 lat", "1000 lat"],
                        correct: 2,
                        explanation: "Plastikowe butelki mogą rozkładać się nawet do 450 lat!"
                    },
                    q2: {
                        question: "Które działanie oszczędza najwięcej wody?",
                        options: ["Krótsze prysznice", "Zakręcanie kranu podczas mycia zębów", "Naprawa przecieków", "Wszystkie powyższe"],
                        correct: 3,
                        explanation: "Wszystkie te działania razem mają znaczący wpływ na oszczędzanie wody!"
                    },
                    q3: {
                        question: "Jaki procent wody na Ziemi nadaje się do picia?",
                        options: ["10%", "5%", "1%", "15%"],
                        correct: 2,
                        explanation: "Tylko około 1% wody na Ziemi jest słodka i dostępna do picia!"
                    },
                    q4: {
                        question: "Który środek transportu produkuje najmniej emisji węgla?",
                        options: ["Samochód", "Autobus", "Rower", "Samolot"],
                        correct: 2,
                        explanation: "Rowery nie produkują emisji i są najbardziej ekologicznym transportem!"
                    },
                    q5: {
                        question: "Ile energii można zaoszczędzić przez recykling jednej puszki aluminiowej?",
                        options: ["Wystarczy na 1 godzinę TV", "Wystarczy na 3 godziny TV", "Wystarczy na 6 godzin TV", "Brak oszczędności"],
                        correct: 1,
                        explanation: "Recykling jednej puszki aluminiowej oszczędza energię na 3 godziny oglądania TV!"
                    },
                    q6: {
                        question: "Co jest główną przyczyną zanieczyszczenia oceanów?",
                        options: ["Wycieki ropy", "Odpady plastikowe", "Odpływ chemiczny", "Wszystkie powyższe"],
                        correct: 3,
                        explanation: "Zanieczyszczenie oceanów pochodzi z wielu źródeł, a odpady plastikowe są głównym czynnikiem!"
                    },
                    q7: {
                        question: "Ile drzew potrzeba do wyprodukowania 1 tony papieru?",
                        options: ["5 drzew", "12 drzew", "17 drzew", "24 drzewa"],
                        correct: 2,
                        explanation: "Potrzeba około 17 drzew do wyprodukowania 1 tony papieru - dlatego recykling jest tak ważny!"
                    },
                    q8: {
                        question: "Które źródło energii odnawialnej jest najszerzej używane na świecie?",
                        options: ["Słoneczna", "Wiatrowa", "Hydroelektryczna", "Geotermalna"],
                        correct: 2,
                        explanation: "Energia hydroelektryczna jest obecnie najszerzej używanym źródłem energii odnawialnej na świecie!"
                    },
                    q9: {
                        question: "Ile procent odpadów domowych można zazwyczaj poddać recyklingowi?",
                        options: ["20%", "40%", "60%", "80%"],
                        correct: 2,
                        explanation: "Około 60% odpadów domowych można poddać recyklingowi, jeśli są odpowiednio posortowane!"
                    },
                    q10: {
                        question: "Jaki jest najskuteczniejszy sposób na zmniejszenie śladu węglowego?",
                        options: ["Używać mniej elektryczności", "Jeździć mniej", "Jeść mniej mięsa", "Redukuj, używaj ponownie, przetwarzaj"],
                        correct: 3,
                        explanation: "Przestrzeganie zasady 3R (Redukuj, Używaj ponownie, Przetwarzaj) to najbardziej kompleksowe podejście!"
                    },
                    q11: {
                        question: "Ile czasu potrzeba szklanej butelce na rozkład?",
                        options: ["100 lat", "500 lat", "1000 lat", "Nigdy całkowicie"],
                        correct: 3,
                        explanation: "Szklane butelki mogą rozkładać się ponad milion lat, ale są w 100% recyclable!"
                    },
                    q12: {
                        question: "Które urządzenie zużywa najwięcej energii w typowym domu?",
                        options: ["Lodówka", "Klimatyzacja", "Podgrzewacz wody", "Telewizor"],
                        correct: 1,
                        explanation: "Systemy klimatyzacji zazwyczaj zużywają najwięcej energii w domach!"
                    }
                },
                instructionsText: {
                    title: "Jak Grać w Eko Strażnika",
                    goal: "Pomóż uratować naszą planetę poprzez prawidłowe sortowanie odpadów i naukę o zrównoważonym rozwoju!",
                    howToPlay: "Jak Grać:",
                    rules: [
                        "Przeciągnij odpady do odpowiednich pojemników na recykling",
                        "Odpowiadaj na pytania o zrównoważonym rozwoju aby zdobyć punkty bonusowe",
                        "Ukończ każdy poziom sortując wymaganą liczbę przedmiotów",
                        "Naucz się interesujących faktów o ochronie środowiska"
                    ],
                    bins: "Pojemniki na Recykling:",
                    levels: "Poziomy:",
                    levelDescriptions: [
                        "Poziom 1: Podstawowe sortowanie - 5 przedmiotów",
                        "Poziom 2: Mieszane odpady - 8 przedmiotów",
                        "Poziom 3: Zaawansowane sortowanie - 12 przedmiotów",
                        "Poziom 4: Poziom eksperta - 15 przedmiotów"
                    ]
                }
            },
            nl: {
                title: "Eco Bewaker - Red Onze Planeet!",
                score: "Score",
                level: "Niveau",
                correct: "Correct",
                startGame: "Start Spel",
                nextLevel: "Volgend Niveau",
                restart: "Herstart",
                instructions: "Instructies",
                close: "Sluiten",
                timeUp: "Tijd is om!",
                wellDone: "Goed gedaan!",
                levelComplete: "Niveau Voltooid!",
                gameComplete: "Spel Voltooid!",
                gameOver: "Game Over",
                tryAgain: "Probeer Opnieuw",
                bins: {
                    plastic: "Plastic",
                    paper: "Papier",
                    glass: "Glas",
                    organic: "Organisch"
                },
                wasteTypes: {
                    plastic: ["🥤", "🧴", "🛍️", "🥄", "🪥"],
                    paper: ["📰", "📄", "📦", "📚", "🗞️"],
                    glass: ["🍷", "🍺", "🥃", "🪟", "💡"],
                    organic: ["🍎", "🍌", "🥕", "🍃", "🌿"]
                },
                challenges: {
                    q1: {
                        question: "Hoe lang duurt het voordat een plastic fles vergaat in de natuur?",
                        options: ["1 jaar", "50 jaar", "450 jaar", "1000 jaar"],
                        correct: 2,
                        explanation: "Plastic flessen kunnen tot 450 jaar duren om volledig te vergaan!"
                    },
                    q2: {
                        question: "Welke actie bespaart het meeste water?",
                        options: ["Kortere douches", "Kraan dichtdraaien tijdens tandenpoetsen", "Lekken repareren", "Alle bovenstaande"],
                        correct: 3,
                        explanation: "Al deze acties samen hebben een grote impact op waterbesparing!"
                    },
                    q3: {
                        question: "Hoeveel procent van het aardwater is drinkbaar?",
                        options: ["10%", "5%", "1%", "15%"],
                        correct: 2,
                        explanation: "Slechts ongeveer 1% van het aardwater is zoet en beschikbaar voor drinkwater!"
                    },
                    q4: {
                        question: "Welke vervoersmethode produceert de minste koolstofuitstoot?",
                        options: ["Auto", "Bus", "Fiets", "Vliegtuig"],
                        correct: 2,
                        explanation: "Fietsen produceren geen uitstoot en zijn het meest milieuvriendelijke vervoer!"
                    },
                    q5: {
                        question: "Hoeveel energie bespaart het recyclen van één aluminium blikje?",
                        options: ["Genoeg om 1 uur TV te kijken", "Genoeg om 3 uur TV te kijken", "Genoeg om 6 uur TV te kijken", "Geen energiebesparing"],
                        correct: 1,
                        explanation: "Het recyclen van één aluminium blikje bespaart genoeg energie om 3 uur TV te kijken!"
                    },
                    q6: {
                        question: "Wat is de hoofdoorzaak van oceaanvervuiling?",
                        options: ["Olielekken", "Plastic afval", "Chemische afvoer", "Alle bovenstaande"],
                        correct: 3,
                        explanation: "Oceaanvervuiling komt van meerdere bronnen, waarbij plastic afval een grote bijdrage levert!"
                    },
                    q7: {
                        question: "Hoeveel bomen zijn nodig om 1 ton papier te produceren?",
                        options: ["5 bomen", "12 bomen", "17 bomen", "24 bomen"],
                        correct: 2,
                        explanation: "Er zijn ongeveer 17 bomen nodig om 1 ton papier te produceren - daarom is recycling zo belangrijk!"
                    },
                    q8: {
                        question: "Welke hernieuwbare energiebron wordt wereldwijd het meest gebruikt?",
                        options: ["Zonne-energie", "Windenergie", "Waterkracht", "Geothermische energie"],
                        correct: 2,
                        explanation: "Waterkracht is momenteel de meest gebruikte hernieuwbare energiebron wereldwijd!"
                    }
                },
                instructionsText: {
                    title: "Hoe Eco Bewaker Te Spelen",
                    goal: "Help onze planeet redden door afval correct te sorteren en te leren over duurzaamheid!",
                    howToPlay: "Hoe Te Spelen:",
                    rules: [
                        "Sleep afvalitems naar de juiste recyclingbakken",
                        "Beantwoord duurzaamheidsvragen om bonuspunten te verdienen",
                        "Voltooi elk niveau door het vereiste aantal items te sorteren",
                        "Leer interessante feiten over milieubescherming"
                    ],
                    bins: "Recyclingbakken:",
                    levels: "Niveaus:",
                    levelDescriptions: [
                        "Niveau 1: Basis sorteren - 5 items",
                        "Niveau 2: Gemengd afval - 8 items",
                        "Niveau 3: Geavanceerd sorteren - 12 items",
                        "Niveau 4: Expert niveau - 15 items"
                    ]
                }
            },
            lt: {
                title: "Eko Sargybinis - Išgelbėk Mūsų Planetą!",
                score: "Taškai",
                level: "Lygis",
                correct: "Teisingai",
                startGame: "Pradėti Žaidimą",
                nextLevel: "Kitas Lygis",
                restart: "Pradėti iš naujo",
                instructions: "Instrukcijos",
                close: "Uždaryti",
                timeUp: "Laikas baigėsi!",
                wellDone: "Puiku!",
                levelComplete: "Lygis Baigtas!",
                gameComplete: "Žaidimas Baigtas!",
                gameOver: "Žaidimas Baigtas",
                tryAgain: "Bandyti Vėl",
                bins: {
                    plastic: "Plastikas",
                    paper: "Popierius",
                    glass: "Stiklas",
                    organic: "Organinis"
                },
                wasteTypes: {
                    plastic: ["🥤", "🧴", "🛍️", "🥄", "🪥"],
                    paper: ["📰", "📄", "📦", "📚", "🗞️"],
                    glass: ["🍷", "🍺", "🥃", "🪟", "💡"],
                    organic: ["🍎", "🍌", "🥕", "🍃", "🌿"]
                },
                challenges: {
                    q1: {
                        question: "Kiek laiko reikia plastiko buteliui suyti gamtoje?",
                        options: ["1 metai", "50 metų", "450 metų", "1000 metų"],
                        correct: 2,
                        explanation: "Plastiko buteliai gali irsti iki 450 metų!"
                    },
                    q2: {
                        question: "Kuris veiksmas taupo daugiausiai vandens?",
                        options: ["Trumpesni dušai", "Čiaupo užsukimas valant dantis", "Nutekėjimų taisymas", "Visi aukščiau"],
                        correct: 3,
                        explanation: "Visi šie veiksmai kartu daro didelį poveikį vandens taupymui!"
                    },
                    q3: {
                        question: "Kiek procentų Žemės vandens yra geriamo?",
                        options: ["10%", "5%", "1%", "15%"],
                        correct: 2,
                        explanation: "Tik apie 1% Žemės vandens yra gėlas ir prieinamas gėrimui!"
                    },
                    q4: {
                        question: "Kuris transporto būdas gamina mažiausiai anglies dioksido išmetimų?",
                        options: ["Automobilis", "Autobusas", "Dviratis", "Lėktuvas"],
                        correct: 2,
                        explanation: "Dviračiai negamina išmetimų ir yra ekologiškiausias transportas!"
                    },
                    q5: {
                        question: "Kiek energijos galima sutaupyti perdirbant vieną aliuminio skardinę?",
                        options: ["Užtenka 1 valandai TV", "Užtenka 3 valandoms TV", "Užtenka 6 valandoms TV", "Jokio taupymo"],
                        correct: 1,
                        explanation: "Vienos aliuminio skardinės perdirbimas sutaupo energijos 3 valandoms TV žiūrėti!"
                    },
                    q6: {
                        question: "Kas yra pagrindinė vandenynų taršos priežastis?",
                        options: ["Naftos išsiliejimai", "Plastiko atliekos", "Cheminiai nuotėkiai", "Visi aukščiau"],
                        correct: 3,
                        explanation: "Vandenynų tarša ateina iš daugelio šaltinių, o plastiko atliekos yra didelis veiksnys!"
                    },
                    q7: {
                        question: "Kiek medžių reikia 1 tonai popieriaus pagaminti?",
                        options: ["5 medžiai", "12 medžių", "17 medžių", "24 medžiai"],
                        correct: 2,
                        explanation: "Reikia apie 17 medžių 1 tonai popieriaus pagaminti - todėl perdirbimas taip svarbus!"
                    },
                    q8: {
                        question: "Kuris atsinaujinantis energijos šaltinis yra plačiausiai naudojamas pasaulyje?",
                        options: ["Saulės", "Vėjo", "Hidroelektrinė", "Geoterminė"],
                        correct: 2,
                        explanation: "Hidroelektrinė energija šiuo metu yra plačiausiai naudojamas atsinaujinantis energijos šaltinis pasaulyje!"
                    }
                },
                instructionsText: {
                    title: "Kaip Žaisti Eko Sargybinį",
                    goal: "Padėk išgelbėti mūsų planetą teisingai rūšiuodamas atliekas ir mokydamasis apie tvarumą!",
                    howToPlay: "Kaip Žaisti:",
                    rules: [
                        "Tempk atliekų elementus į teisingus perdirbimo konteinerius",
                        "Atsakyk į tvarumo klausimus ir gauk papildomų taškų",
                        "Užbaigk kiekvieną lygį surūšiuodamas reikiamą kiekį elementų",
                        "Išmok įdomių faktų apie aplinkos apsaugą"
                    ],
                    bins: "Perdirbimo Konteineriai:",
                    levels: "Lygiai:",
                    levelDescriptions: [
                        "Lygis 1: Pagrindinis rūšiavimas - 5 elementai",
                        "Lygis 2: Mišrios atliekos - 8 elementai",
                        "Lygis 3: Išplėstinis rūšiavimas - 12 elementų",
                        "Lygis 4: Eksperto lygis - 15 elementų"
                    ]
                }
            }
        };

        this.init();
    }

    init() {
        console.log('Initializing Eco Guardian Game...');
        this.setupEventListeners();
        this.updateDisplay();
        this.createEnvironment();
        this.hideAllPanels();
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Language selector
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            console.log('Language selector found');
            languageSelect.addEventListener('change', (e) => {
                console.log('Language changed to:', e.target.value);
                this.currentLanguage = e.target.value;
                this.updateDisplay();
            });
        } else {
            console.error('Language selector not found!');
        }

        // Control buttons
        const startBtn = document.getElementById('startGame');
        const nextBtn = document.getElementById('nextLevel');
        const restartBtn = document.getElementById('restart');
        const instructionsBtn = document.getElementById('instructions');

        if (startBtn) {
            console.log('Start button found');
            startBtn.addEventListener('click', () => {
                console.log('Start button clicked');
                this.startGame();
            });
        } else {
            console.error('Start button not found!');
        }
        
        if (nextBtn) {
            console.log('Next button found');
            nextBtn.addEventListener('click', () => {
                console.log('Next button clicked');
                this.nextLevel();
            });
        }
        
        if (restartBtn) {
            console.log('Restart button found');
            restartBtn.addEventListener('click', () => {
                console.log('Restart button clicked');
                this.restart();
            });
        }
        
        if (instructionsBtn) {
            console.log('Instructions button found');
            instructionsBtn.addEventListener('click', () => {
                console.log('Instructions button clicked');
                this.showInstructions();
            });
        }

        // Close buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('close-btn')) {
                this.hideAllPanels();
            }
        });

        // Challenge answer buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('challenge-option')) {
                this.answerChallenge(parseInt(e.target.dataset.answer));
            }
        });

        // Drag and drop events
        document.addEventListener('dragstart', (e) => this.handleDragStart(e));
        document.addEventListener('dragover', (e) => this.handleDragOver(e));
        document.addEventListener('drop', (e) => this.handleDrop(e));
        document.addEventListener('dragend', (e) => this.handleDragEnd(e));

        // Touch events for mobile
        document.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        document.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        document.addEventListener('touchend', (e) => this.handleTouchEnd(e));
    }

    updateDisplay() {
        console.log('Updating display for language:', this.currentLanguage);
        const t = this.translations[this.currentLanguage];
        
        // Update title and UI elements
        const gameTitle = document.getElementById('gameTitle');
        const scoreLabel = document.getElementById('scoreLabel');
        const levelLabel = document.getElementById('levelLabel');
        const correctLabel = document.getElementById('correctLabel');
        
        if (gameTitle) gameTitle.textContent = t.title;
        if (scoreLabel) scoreLabel.textContent = t.score + ':';
        if (levelLabel) levelLabel.textContent = t.level + ':';
        if (correctLabel) correctLabel.textContent = t.correct + ':';
        
        // Update button text
        const startBtn = document.getElementById('startGame');
        const nextBtn = document.getElementById('nextLevel');
        const restartBtn = document.getElementById('restart');
        const instructionsBtn = document.getElementById('instructions');
        
        if (startBtn) startBtn.textContent = t.startGame;
        if (nextBtn) nextBtn.textContent = t.nextLevel;
        if (restartBtn) restartBtn.textContent = t.restart;
        if (instructionsBtn) instructionsBtn.textContent = t.instructions;

        // Update bin labels
        const plasticBin = document.querySelector('[data-bin="plastic"] .bin-label');
        const paperBin = document.querySelector('[data-bin="paper"] .bin-label');
        const glassBin = document.querySelector('[data-bin="glass"] .bin-label');
        const organicBin = document.querySelector('[data-bin="organic"] .bin-label');
        
        if (plasticBin) plasticBin.textContent = t.bins.plastic;
        if (paperBin) paperBin.textContent = t.bins.paper;
        if (glassBin) glassBin.textContent = t.bins.glass;
        if (organicBin) organicBin.textContent = t.bins.organic;

        // Update stats
        const scoreValue = document.getElementById('scoreValue');
        const levelValue = document.getElementById('levelValue');
        const correctValue = document.getElementById('correctValue');
        
        if (scoreValue) scoreValue.textContent = this.score;
        if (levelValue) levelValue.textContent = this.level;
        if (correctValue) correctValue.textContent = this.correctAnswers;
        
        console.log('Display updated successfully');
    }

    createEnvironment() {
        // Create animated clouds
        this.createClouds();
        
        // Create buildings with windows
        this.createBuildings();
        
        // Create trees
        this.createTrees();
    }

    createClouds() {
        const cloudsContainer = document.querySelector('.clouds');
        const cloudEmojis = ['☁️', '⛅', '🌤️'];
        
        for (let i = 0; i < 3; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud';
            cloud.textContent = cloudEmojis[Math.floor(Math.random() * cloudEmojis.length)];
            cloud.style.top = Math.random() * 30 + 10 + '%';
            cloud.style.animationDelay = Math.random() * 10 + 's';
            cloud.style.animationDuration = (15 + Math.random() * 10) + 's';
            cloudsContainer.appendChild(cloud);
        }
    }

    createBuildings() {
        const buildingsContainer = document.querySelector('.buildings');
        const buildingCount = 4;
        
        for (let i = 0; i < buildingCount; i++) {
            const building = document.createElement('div');
            building.className = 'building';
            building.style.width = (40 + Math.random() * 30) + 'px';
            building.style.height = (80 + Math.random() * 60) + 'px';
            building.style.animationDelay = (i * 0.2) + 's';
            
            // Add windows
            const windowCount = Math.floor(Math.random() * 6) + 2;
            for (let j = 0; j < windowCount; j++) {
                const window = document.createElement('div');
                window.className = 'building-window';
                window.style.width = '8px';
                window.style.height = '8px';
                window.style.left = (5 + (j % 2) * 15) + 'px';
                window.style.top = (10 + Math.floor(j / 2) * 15) + 'px';
                window.style.animationDelay = Math.random() * 2 + 's';
                building.appendChild(window);
            }
            
            buildingsContainer.appendChild(building);
        }
    }

    createTrees() {
        const treesContainer = document.querySelector('.trees');
        const treeEmojis = ['🌲', '🌳', '🌴', '🎄'];
        
        for (let i = 0; i < 5; i++) {
            const tree = document.createElement('div');
            tree.className = 'tree';
            tree.textContent = treeEmojis[Math.floor(Math.random() * treeEmojis.length)];
            tree.style.animationDelay = (i * 0.3) + 's';
            tree.addEventListener('click', () => this.treeClick(tree));
            treesContainer.appendChild(tree);
        }
    }

    treeClick(tree) {
        tree.style.animation = 'treeGrow 0.5s ease-out';
        this.createParticles(tree.getBoundingClientRect());
    }

    startGame() {
        console.log('Starting Eco Guardian game...');
        this.gameStarted = true;
        this.level = 1;
        this.score = 0;
        this.correctAnswers = 0;
        this.totalAnswers = 0;
        this.levelCompleted = 0;
        this.hideAllPanels();
        this.updateDisplay();
        this.spawnWasteItems();
        
        // Show first challenge after a delay
        setTimeout(() => {
            this.showChallenge();
        }, 2000);
    }

    spawnWasteItems() {
        console.log('Spawning waste items for level:', this.level);
        const wasteContainer = document.querySelector('.waste-items');
        if (!wasteContainer) {
            console.error('Waste container not found!');
            return;
        }
        
        wasteContainer.innerHTML = '';
        
        const itemsNeeded = this.levelTargets[this.level];
        const wasteTypes = ['plastic', 'paper', 'glass', 'organic'];
        console.log('Items needed for this level:', itemsNeeded);
        
        for (let i = 0; i < itemsNeeded; i++) {
            const wasteType = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
            const wasteItems = this.translations[this.currentLanguage].wasteTypes[wasteType];
            const wasteEmoji = wasteItems[Math.floor(Math.random() * wasteItems.length)];
            
            const wasteItem = document.createElement('div');
            wasteItem.className = 'waste-item';
            wasteItem.textContent = wasteEmoji;
            wasteItem.dataset.type = wasteType;
            wasteItem.draggable = true;
            wasteItem.id = 'waste-' + i;
            
            // Random position - keep items in the upper area to avoid overlapping with bins
            wasteItem.style.left = Math.random() * 80 + 10 + '%';
            wasteItem.style.top = Math.random() * 40 + 10 + '%'; // Keep in upper 50% of the area
            wasteItem.style.animationDelay = (i * 0.1) + 's';
            
            wasteContainer.appendChild(wasteItem);
            console.log('Created waste item:', wasteEmoji, 'type:', wasteType);
        }
        
        console.log('Waste items spawned successfully');
    }

    handleDragStart(e) {
        if (e.target.classList.contains('waste-item')) {
            this.draggedItem = e.target;
            e.target.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        }
    }

    handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        
        if (e.target.closest('.bin')) {
            e.target.closest('.bin').classList.add('highlight');
        }
    }

    handleDrop(e) {
        e.preventDefault();
        const bin = e.target.closest('.bin');
        
        if (bin && this.draggedItem) {
            const binType = bin.dataset.bin;
            const itemType = this.draggedItem.dataset.type;
            
            if (binType === itemType) {
                this.correctSort(bin, this.draggedItem);
            } else {
                this.wrongSort(bin, this.draggedItem);
            }
        }
        
        this.clearHighlights();
    }

    handleDragEnd(e) {
        if (e.target.classList.contains('waste-item')) {
            e.target.classList.remove('dragging');
        }
        this.clearHighlights();
        this.draggedItem = null;
    }

    // Touch events for mobile support
    handleTouchStart(e) {
        if (e.target.classList.contains('waste-item')) {
            this.draggedItem = e.target;
            e.target.classList.add('dragging');
            e.preventDefault();
        }
    }

    handleTouchMove(e) {
        if (this.draggedItem) {
            e.preventDefault();
            const touch = e.touches[0];
            this.draggedItem.style.position = 'fixed';
            this.draggedItem.style.left = touch.clientX - 30 + 'px';
            this.draggedItem.style.top = touch.clientY - 30 + 'px';
            this.draggedItem.style.zIndex = '1001';
        }
    }

    handleTouchEnd(e) {
        if (this.draggedItem) {
            const touch = e.changedTouches[0];
            const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
            const bin = elementBelow?.closest('.bin');
            
            if (bin) {
                const binType = bin.dataset.bin;
                const itemType = this.draggedItem.dataset.type;
                
                if (binType === itemType) {
                    this.correctSort(bin, this.draggedItem);
                } else {
                    this.wrongSort(bin, this.draggedItem);
                }
            } else {
                // Return to original position
                this.draggedItem.style.position = '';
                this.draggedItem.style.left = '';
                this.draggedItem.style.top = '';
                this.draggedItem.style.zIndex = '';
            }
            
            this.draggedItem.classList.remove('dragging');
            this.draggedItem = null;
        }
    }

    correctSort(bin, item) {
        console.log('Correct sort!');
        this.score += 10;
        this.correctAnswers++;
        this.levelCompleted++;
        
        // Remove item
        item.remove();
        
        // Show points animation
        this.showFloatingPoints(bin, '+10');
        
        // Create particles
        this.createParticles(bin.getBoundingClientRect());
        
        // Update display
        this.updateDisplay();
        
        // Check level completion
        if (this.levelCompleted >= this.levelTargets[this.level]) {
            setTimeout(() => {
                this.levelComplete();
            }, 500);
        } else {
            // Random chance to show challenge
            if (Math.random() < 0.3) {
                setTimeout(() => {
                    this.showChallenge();
                }, 1000);
            }
        }
    }

    wrongSort(bin, item) {
        console.log('Wrong sort!');
        this.score = Math.max(0, this.score - 5);
        
        // Show negative points
        this.showFloatingPoints(bin, '-5');
        
        // Shake animation
        bin.style.animation = 'wrongShake 0.6s ease';
        setTimeout(() => {
            bin.style.animation = '';
        }, 600);
        
        // Return item to original position
        item.style.position = '';
        item.style.left = '';
        item.style.top = '';
        item.style.zIndex = '';
        
        this.updateDisplay();
    }

    clearHighlights() {
        document.querySelectorAll('.bin').forEach(bin => {
            bin.classList.remove('highlight');
        });
    }

    showFloatingPoints(element, points) {
        const rect = element.getBoundingClientRect();
        const floatingDiv = document.createElement('div');
        floatingDiv.className = 'floating-points';
        floatingDiv.textContent = points;
        floatingDiv.style.left = rect.left + rect.width / 2 + 'px';
        floatingDiv.style.top = rect.top + 'px';
        document.body.appendChild(floatingDiv);
        
        setTimeout(() => {
            floatingDiv.remove();
        }, 1500);
    }

    createParticles(rect) {
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = rect.left + rect.width / 2 + (Math.random() - 0.5) * 50 + 'px';
            particle.style.top = rect.top + rect.height / 2 + 'px';
            particle.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 2000);
        }
    }

    showChallenge() {
        if (this.challengeMode) return;
        
        this.challengeMode = true;
        const challengePanel = document.getElementById('challengePanel');
        const challenges = this.translations[this.currentLanguage].challenges;
        const challengeKeys = Object.keys(challenges);
        const randomChallenge = challenges[challengeKeys[Math.floor(Math.random() * challengeKeys.length)]];
        
        // Update challenge content
        document.getElementById('challengeQuestion').textContent = randomChallenge.question;
        
        const optionsContainer = document.querySelector('.challenge-options');
        optionsContainer.innerHTML = '';
        
        randomChallenge.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'challenge-option';
            button.textContent = option;
            button.dataset.answer = index;
            optionsContainer.appendChild(button);
        });
        
        this.currentChallenge = randomChallenge;
        challengePanel.style.display = 'flex';
        
        // Start timer
        this.startChallengeTimer();
    }

    startChallengeTimer() {
        const timerBar = document.querySelector('.timer-bar::before');
        
        this.challengeTimer = setTimeout(() => {
            this.answerChallenge(-1); // Time's up
        }, 30000);
    }

    answerChallenge(answerIndex) {
        if (!this.challengeMode) return;
        
        this.challengeMode = false;
        clearTimeout(this.challengeTimer);
        
        const options = document.querySelectorAll('.challenge-option');
        const t = this.translations[this.currentLanguage];
        
        if (answerIndex === this.currentChallenge.correct) {
            // Correct answer
            options[answerIndex].classList.add('correct');
            this.score += 20;
            this.correctAnswers++;
            
            setTimeout(() => {
                alert(t.wellDone + '\n\n' + this.currentChallenge.explanation);
                this.hideChallengePanel();
            }, 1000);
        } else {
            // Wrong answer or time's up
            if (answerIndex >= 0) {
                options[answerIndex].classList.add('wrong');
            }
            options[this.currentChallenge.correct].classList.add('correct');
            
            setTimeout(() => {
                const message = answerIndex >= 0 ? 
                    this.currentChallenge.explanation : 
                    t.timeUp + '\n\n' + this.currentChallenge.explanation;
                alert(message);
                this.hideChallengePanel();
            }, 1000);
        }
        
        this.totalAnswers++;
        this.updateDisplay();
    }

    hideChallengePanel() {
        document.getElementById('challengePanel').style.display = 'none';
    }

    levelComplete() {
        const t = this.translations[this.currentLanguage];
        
        if (this.level >= 4) {
            this.gameComplete();
            return;
        }
        
        // Show level complete panel
        const levelCompletePanel = document.getElementById('levelComplete');
        document.getElementById('levelCompleteTitle').textContent = t.levelComplete;
        
        // Show stats
        const statsContainer = document.querySelector('.level-stats');
        statsContainer.innerHTML = `
            <p>${t.score}: ${this.score}</p>
            <p>${t.correct}: ${this.correctAnswers}/${this.totalAnswers}</p>
            <p>Items Sorted: ${this.levelCompleted}</p>
        `;
        
        levelCompletePanel.style.display = 'flex';
    }

    gameComplete() {
        const t = this.translations[this.currentLanguage];
        
        // Show game complete panel
        const gameOverPanel = document.getElementById('gameOver');
        document.getElementById('gameOverTitle').textContent = t.gameComplete;
        document.getElementById('gameOverMessage').textContent = 
            `${t.wellDone} You've completed all levels and learned valuable lessons about sustainability!`;
        
        // Show final stats
        const finalStatsContainer = document.querySelector('.final-stats');
        finalStatsContainer.innerHTML = `
            <p>Final ${t.score}: ${this.score}</p>
            <p>Total ${t.correct}: ${this.correctAnswers}/${this.totalAnswers}</p>
            <p>Levels Completed: ${this.level}</p>
            <p>Eco-Guardian Level: ${this.getEcoGuardianLevel()}</p>
        `;
        
        gameOverPanel.style.display = 'flex';
    }

    getEcoGuardianLevel() {
        const accuracy = this.totalAnswers > 0 ? (this.correctAnswers / this.totalAnswers) * 100 : 0;
        
        if (accuracy >= 90) return "🌟 Eco Master";
        if (accuracy >= 80) return "🌿 Green Expert";
        if (accuracy >= 70) return "♻️ Recycling Pro";
        if (accuracy >= 60) return "🌱 Eco Apprentice";
        return "🌍 Earth Friend";
    }

    nextLevel() {
        this.level++;
        this.levelCompleted = 0;
        this.hideAllPanels();
        this.spawnWasteItems();
        this.updateDisplay();
        
        // Show level introduction challenge
        setTimeout(() => {
            this.showChallenge();
        }, 1500);
    }

    restart() {
        this.level = 1;
        this.score = 0;
        this.correctAnswers = 0;
        this.totalAnswers = 0;
        this.levelCompleted = 0;
        this.gameStarted = false;
        this.challengeMode = false;
        
        // Clear waste items
        document.querySelector('.waste-items').innerHTML = '';
        
        this.hideAllPanels();
        this.updateDisplay();
    }

    showInstructions() {
        const t = this.translations[this.currentLanguage];
        const instructionsPanel = document.getElementById('instructionsPanel');
        
        // Update instructions content
        document.getElementById('instructionsTitle').textContent = t.instructionsText.title;
        
        const instructionsContent = document.querySelector('.instructions');
        instructionsContent.innerHTML = `
            <h3>${t.instructionsText.title}</h3>
            <p>${t.instructionsText.goal}</p>
            
            <h4>${t.instructionsText.howToPlay}</h4>
            <ul>
                ${t.instructionsText.rules.map(rule => `<li>${rule}</li>`).join('')}
            </ul>
            
            <h4>${t.instructionsText.bins}</h4>
            <ul>
                <li>🧴 ${t.bins.plastic} - Bottles, bags, utensils</li>
                <li>📰 ${t.bins.paper} - Newspapers, books, cardboard</li>
                <li>🍷 ${t.bins.glass} - Bottles, jars, windows</li>
                <li>🍎 ${t.bins.organic} - Food waste, leaves, plants</li>
            </ul>
            
            <h4>${t.instructionsText.levels}</h4>
            <div class="level-info">
                ${t.instructionsText.levelDescriptions.map((desc, index) => 
                    `<div class="level-desc"><strong>Level ${index + 1}:</strong> ${desc}</div>`
                ).join('')}
            </div>
        `;
        
        instructionsPanel.style.display = 'flex';
    }

    hideAllPanels() {
        document.getElementById('challengePanel').style.display = 'none';
        document.getElementById('levelComplete').style.display = 'none';
        document.getElementById('gameOver').style.display = 'none';
        document.getElementById('instructionsPanel').style.display = 'none';
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, creating Eco Guardian game...');
    window.ecoGame = new EcoGuardianGame();
});
