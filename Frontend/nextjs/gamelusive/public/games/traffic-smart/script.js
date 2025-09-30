// Traffic Smart Game - Multilingual Traffic Safety Education
class TrafficSmartGame {
    constructor() {
        this.currentLanguage = 'en';
        this.currentLevel = 1;
        this.maxLevel = 3;
        this.playerScore = 0;
        this.playerLives = 3;
        this.streakCount = 0;
        this.currentQuestionIndex = 0;
        this.questionsPerLevel = 5;
        this.learnedSkills = new Set();
        
        this.translations = this.initializeTranslations();
        this.trafficSituations = this.initializeTrafficSituations();
        this.safetyTips = this.initializeSafetyTips();
        
        this.initializeGame();
        this.setupEventListeners();
    }

    initializeTranslations() {
        return {
            en: {
                game_title: "🚦 Traffic Smart! 🚗",
                game_subtitle: "Learn traffic safety rules and make smart choices!",
                level_label: "Level:",
                score_label: "Score:",
                lives_label: "Lives:",
                streak_label: "Streak:",
                situation_title: "🚦 Traffic Situation",
                situation_subtitle: "Look at the situation and choose the SAFE action!",
                what_should_you_do: "What should you do?",
                safety_tips_title: "💡 Safety Tips",
                safety_tips_subtitle: "Learn important traffic safety rules!",
                tip_crosswalk_title: "Use Crosswalks",
                tip_crosswalk_text: "Always cross the street at crosswalks or intersections. Look both ways before crossing!",
                tip_look_title: "Look Both Ways",
                tip_look_text: "Before crossing any street, look left, then right, then left again to make sure no cars are coming.",
                tip_stop_title: "Stop at Red Lights",
                tip_stop_text: "Red means STOP! Never cross when the light is red, even if you don't see cars.",
                tip_bike_title: "Bike Safety",
                tip_bike_text: "When riding a bike, always wear a helmet and follow the same rules as cars.",
                start_game: "Start Game",
                continue: "Continue",
                next_level: "Next Level",
                play_again: "Play Again",
                learn_more: "Learn More Tips",
                hint: "💡 Hint",
                safety_tips: "📚 Safety Tips",
                restart: "🔄 Restart",
                how_to_play: "How to Play:",
                instruction_1: "🚦 Look at each traffic situation carefully",
                instruction_2: "🤔 Think about what the SAFE choice would be",
                instruction_3: "✅ Click on the safest option",
                instruction_4: "⭐ Earn points for making safe choices",
                instruction_5: "🏅 Complete all levels to become a Traffic Safety Champion!",
                safety_learned: "🛡️ Safety Skills Learned:",
                safety_champion: "Safety Champion!",
                badge_earned: "You've earned the Traffic Safety Badge!",
                safety_tip: "Remember: Safety first, always!",
                excellent_work: "🏆 Excellent Work!",
                great_choice: "Great Choice!",
                safe_decision: "That's a safe decision!",
                be_careful: "Be Careful!",
                dangerous_choice: "That could be dangerous!",
                think_safety: "Always think about safety first!",
                hint_general: "💡 Think about what would keep you safe!",
                game_over: "Game Over",
                try_again: "Don't worry, try again and remember the safety rules!",
                level_complete: "Level Complete!",
                amazing_job: "Amazing job staying safe!",
                final_completion_title: "🎉 Congratulations! You're a Traffic Safety Champion!",
                final_completion_message: "You have successfully completed all 3 levels of Traffic Smart!",
                traffic_expert: "You are now a traffic safety expert!",
                final_score: "Final Score:",
                skills_learned: "Skills mastered:",
                play_again: "Play Again",
                level_1_complete: "Level 1 Complete! Basic safety skills mastered!",
                level_2_complete: "Level 2 Complete! Advanced situations handled!",
                level_3_complete: "Level 3 Complete! You're a safety expert!"
            },
            tr: {
                game_title: "🚦 Trafik Akıllısı! 🚗",
                game_subtitle: "Trafik güvenlik kurallarını öğren ve akıllı seçimler yap!",
                level_label: "Seviye:",
                score_label: "Puan:",
                lives_label: "Can:",
                streak_label: "Seri:",
                situation_title: "🚦 Trafik Durumu",
                situation_subtitle: "Duruma bak ve GÜVENLİ eylemi seç!",
                what_should_you_do: "Ne yapmalısın?",
                safety_tips_title: "💡 Güvenlik İpuçları",
                safety_tips_subtitle: "Önemli trafik güvenlik kurallarını öğren!",
                tip_crosswalk_title: "Yaya Geçidi Kullan",
                tip_crosswalk_text: "Sokağı geçerken her zaman yaya geçidi veya kavşak kullan. Geçmeden önce iki tarafa da bak!",
                tip_look_title: "İki Tarafa Bak",
                tip_look_text: "Herhangi bir sokağı geçmeden önce, sol, sonra sağ, sonra tekrar sola bak ve araba gelmediğinden emin ol.",
                tip_stop_title: "Kırmızı Işıkta Dur",
                tip_stop_text: "Kırmızı DUR demektir! Işık kırmızıyken, araba görmesen bile asla geçme.",
                tip_bike_title: "Bisiklet Güvenliği",
                tip_bike_text: "Bisiklet sürerken her zaman kask tak ve arabalarla aynı kuralları takip et.",
                start_game: "Oyunu Başlat",
                continue: "Devam Et",
                next_level: "Sonraki Seviye",
                play_again: "Tekrar Oyna",
                learn_more: "Daha Fazla İpucu Öğren",
                hint: "💡 İpucu",
                safety_tips: "📚 Güvenlik İpuçları",
                restart: "🔄 Yeniden Başlat",
                how_to_play: "Nasıl Oynanır:",
                instruction_1: "🚦 Her trafik durumunu dikkatli incele",
                instruction_2: "🤔 GÜVENLİ seçeneğin ne olacağını düşün",
                instruction_3: "✅ En güvenli seçeneğe tıkla",
                instruction_4: "⭐ Güvenli seçimler yaparak puan kazan",
                instruction_5: "🏅 Tüm seviyeleri tamamlayarak Trafik Güvenliği Şampiyonu ol!",
                safety_learned: "🛡️ Öğrenilen Güvenlik Becerileri:",
                safety_champion: "Güvenlik Şampiyonu!",
                badge_earned: "Trafik Güvenliği Rozeti kazandın!",
                safety_tip: "Unutma: Güvenlik her zaman önce!",
                excellent_work: "🏆 Mükemmel Çalışma!",
                great_choice: "Harika Seçim!",
                safe_decision: "Bu güvenli bir karar!",
                be_careful: "Dikkatli Ol!",
                dangerous_choice: "Bu tehlikeli olabilir!",
                think_safety: "Her zaman önce güvenliği düşün!",
                hint_general: "💡 Seni güvende tutacak şeyi düşün!",
                game_over: "Oyun Bitti",
                try_again: "Merak etme, tekrar dene ve güvenlik kurallarını hatırla!",
                level_complete: "Seviye Tamamlandı!",
                amazing_job: "Güvende kalmakta harika iş!",
                final_completion_title: "🎉 Tebrikler! Sen bir Trafik Güvenliği Şampiyonusun!",
                final_completion_message: "Traffic Smart'ın 3 seviyesini de başarıyla tamamladın!",
                traffic_expert: "Artık bir trafik güvenliği uzmanısın!",
                final_score: "Final Puanı:",
                skills_learned: "Öğrenilen beceriler:",
                play_again: "Tekrar Oyna",
                level_1_complete: "Seviye 1 Tamamlandı! Temel güvenlik becerileri öğrenildi!",
                level_2_complete: "Seviye 2 Tamamlandı! İleri seviye durumlar halledildi!",
                level_3_complete: "Seviye 3 Tamamlandı! Sen bir güvenlik uzmanısın!"
            },
            lt: {
                game_title: "🚦 Eismo Protingas! 🚗",
                game_subtitle: "Išmokite saugaus eismo taisykles ir darykite protingus sprendimus!",
                level_label: "Lygis:",
                score_label: "Taškai:",
                lives_label: "Gyvybės:",
                streak_label: "Serija:",
                situation_title: "🚦 Eismo Situacija",
                situation_subtitle: "Pažvelkite į situaciją ir pasirinkite SAUGŲ veiksmą!",
                what_should_you_do: "Ką turėtumėte daryti?",
                safety_tips_title: "💡 Saugumo Patarimai",
                safety_tips_subtitle: "Išmokite svarbias eismo saugumo taisykles!",
                tip_crosswalk_title: "Naudokite Pėsčiųjų Perėjas",
                tip_crosswalk_text: "Visada keiskite gatvę pėsčiųjų perėjose arba sankryžose. Žiūrėkite į abi puses prieš pereidami!",
                tip_look_title: "Žiūrėkite Į Abi Puses",
                tip_look_text: "Prieš pereidami bet kurią gatvę, žiūrėkite į kairę, paskui į dešinę, tada vėl į kairę, kad įsitikintumėte, jog nevažiuoja automobiliai.",
                tip_stop_title: "Sustokite Prie Raudonų Šviesų",
                tip_stop_text: "Raudona reiškia STOP! Niekada neiti, kai šviesa raudona, net jei nematote automobilių.",
                tip_bike_title: "Dviračio Saugumas",
                tip_bike_text: "Važiuodami dviračiu visada dėvėkite šalmą ir laikykitės tų pačių taisyklių kaip automobiliai.",
                start_game: "Pradėti Žaidimą",
                continue: "Tęsti",
                next_level: "Kitas Lygis",
                play_again: "Žaisti Vėl",
                learn_more: "Sužinoti Daugiau Patarimų",
                hint: "💡 Užuomina",
                safety_tips: "📚 Saugumo Patarimai",
                restart: "🔄 Pradėti Iš Naujo",
                how_to_play: "Kaip Žaisti:",
                instruction_1: "🚦 Atidžiai žiūrėkite į kiekvieną eismo situaciją",
                instruction_2: "🤔 Pagalvokite, koks būtų SAUGUS pasirinkimas",
                instruction_3: "✅ Spustelėkite saugiausią variantą",
                instruction_4: "⭐ Gaukite taškus už saugius sprendimus",
                instruction_5: "🏅 Užbaikite visus lygius, kad taptumėte Eismo Saugumo Čempionu!",
                safety_learned: "🛡️ Išmokti Saugumo Įgūdžiai:",
                safety_champion: "Saugumo Čempionas!",
                badge_earned: "Jūs pelnėte Eismo Saugumo Ženklą!",
                safety_tip: "Prisiminkite: Saugumas visada pirmoje vietoje!",
                excellent_work: "🏆 Puikus Darbas!",
                great_choice: "Puikus Pasirinkimas!",
                safe_decision: "Tai saugus sprendimas!",
                be_careful: "Būkite Atsargūs!",
                dangerous_choice: "Tai gali būti pavojinga!",
                think_safety: "Visada pirmiausia galvokite apie saugumą!",
                hint_general: "💡 Pagalvokite, kas jus išlaikytų saugius!",
                game_over: "Žaidimas Baigtas",
                try_again: "Nesijaudinkite, bandykite dar kartą ir prisiminkite saugumo taisykles!",
                level_complete: "Lygis Užbaigtas!",
                amazing_job: "Nuostabus darbas išlikti saugiems!"
            },
            nl: {
                game_title: "🚦 Verkeer Slim! 🚗",
                game_subtitle: "Leer verkeersregels en maak slimme keuzes!",
                level_label: "Niveau:",
                score_label: "Score:",
                lives_label: "Levens:",
                streak_label: "Reeks:",
                situation_title: "🚦 Verkeerssituatie",
                situation_subtitle: "Kijk naar de situatie en kies de VEILIGE actie!",
                what_should_you_do: "Wat moet je doen?",
                safety_tips_title: "💡 Veiligheidstips",
                safety_tips_subtitle: "Leer belangrijke verkeersveiligheidsregels!",
                tip_crosswalk_title: "Gebruik Zebrapaden",
                tip_crosswalk_text: "Steek altijd de straat over bij zebrapaden of kruispunten. Kijk beide kanten op voordat je oversteekt!",
                tip_look_title: "Kijk Beide Kanten Op",
                tip_look_text: "Voordat je een straat oversteekt, kijk links, dan rechts, dan weer links om zeker te weten dat er geen auto's aankomen.",
                tip_stop_title: "Stop bij Rode Lichten",
                tip_stop_text: "Rood betekent STOP! Steek nooit over als het licht rood is, zelfs als je geen auto's ziet.",
                tip_bike_title: "Fietsveiligheid",
                tip_bike_text: "Draag altijd een helm als je fietst en volg dezelfde regels als auto's.",
                start_game: "Start Spel",
                continue: "Doorgaan",
                next_level: "Volgend Niveau",
                play_again: "Opnieuw Spelen",
                learn_more: "Meer Tips Leren",
                hint: "💡 Hint",
                safety_tips: "📚 Veiligheidstips",
                restart: "🔄 Opnieuw Beginnen",
                how_to_play: "Hoe Te Spelen:",
                instruction_1: "🚦 Kijk zorgvuldig naar elke verkeerssituatie",
                instruction_2: "🤔 Denk na over wat de VEILIGE keuze zou zijn",
                instruction_3: "✅ Klik op de veiligste optie",
                instruction_4: "⭐ Verdien punten voor het maken van veilige keuzes",
                instruction_5: "🏅 Voltooi alle levels om een Verkeersveiligheid Kampioen te worden!",
                safety_learned: "🛡️ Geleerde Veiligheidsvaardigheden:",
                safety_champion: "Veiligheid Kampioen!",
                badge_earned: "Je hebt de Verkeersveiligheid Badge verdiend!",
                safety_tip: "Onthoud: Veiligheid komt altijd eerst!",
                excellent_work: "🏆 Uitstekend Werk!",
                great_choice: "Geweldige Keuze!",
                safe_decision: "Dat is een veilige beslissing!",
                be_careful: "Wees Voorzichtig!",
                dangerous_choice: "Dat kan gevaarlijk zijn!",
                think_safety: "Denk altijd eerst aan veiligheid!",
                hint_general: "💡 Denk aan wat je veilig zou houden!",
                game_over: "Spel Over",
                try_again: "Maak je geen zorgen, probeer opnieuw en onthoud de veiligheidsregels!",
                level_complete: "Niveau Voltooid!",
                amazing_job: "Geweldig werk om veilig te blijven!"
            },
            pl: {
                game_title: "🚦 Ruch Mądry! 🚗",
                game_subtitle: "Naucz się zasad bezpieczeństwa ruchu i podejmuj mądre decyzje!",
                level_label: "Poziom:",
                score_label: "Wynik:",
                lives_label: "Życia:",
                streak_label: "Seria:",
                situation_title: "🚦 Sytuacja Drogowa",
                situation_subtitle: "Spójrz na sytuację i wybierz BEZPIECZNE działanie!",
                what_should_you_do: "Co powinieneś zrobić?",
                safety_tips_title: "💡 Wskazówki Bezpieczeństwa",
                safety_tips_subtitle: "Naucz się ważnych zasad bezpieczeństwa ruchu drogowego!",
                tip_crosswalk_title: "Używaj Przejść dla Pieszych",
                tip_crosswalk_text: "Zawsze przechodź przez ulicę na przejściach dla pieszych lub skrzyżowaniach. Spójrz w obie strony przed przejściem!",
                tip_look_title: "Spójrz w Obie Strony",
                tip_look_text: "Przed przejściem przez jakąkolwiek ulicę, spójrz w lewo, potem w prawo, potem znów w lewo, aby upewnić się, że nie jadą samochody.",
                tip_stop_title: "Zatrzymaj się na Czerwonym Świetle",
                tip_stop_text: "Czerwone oznacza STOP! Nigdy nie przechodź, gdy światło jest czerwone, nawet jeśli nie widzisz samochodów.",
                tip_bike_title: "Bezpieczeństwo Roweru",
                tip_bike_text: "Podczas jazdy na rowerze zawsze noś kask i przestrzegaj tych samych zasad co samochody.",
                start_game: "Rozpocznij Grę",
                continue: "Kontynuuj",
                next_level: "Następny Poziom",
                play_again: "Graj Ponownie",
                learn_more: "Naucz się Więcej Wskazówek",
                hint: "💡 Wskazówka",
                safety_tips: "📚 Wskazówki Bezpieczeństwa",
                restart: "🔄 Restart",
                how_to_play: "Jak Grać:",
                instruction_1: "🚦 Uważnie przyglądaj się każdej sytuacji drogowej",
                instruction_2: "🤔 Pomyśl o tym, jaki byłby BEZPIECZNY wybór",
                instruction_3: "✅ Kliknij najbezpieczniejszą opcję",
                instruction_4: "⭐ Zdobywaj punkty za podejmowanie bezpiecznych wyborów",
                instruction_5: "🏅 Ukończ wszystkie poziomy, aby zostać Mistrzem Bezpieczeństwa Drogowego!",
                safety_learned: "🛡️ Nauczone Umiejętności Bezpieczeństwa:",
                safety_champion: "Mistrz Bezpieczeństwa!",
                badge_earned: "Zdobyłeś Odznakę Bezpieczeństwa Drogowego!",
                safety_tip: "Pamiętaj: Bezpieczeństwo zawsze na pierwszym miejscu!",
                excellent_work: "🏆 Doskonała Praca!",
                great_choice: "Świetny Wybór!",
                safe_decision: "To bezpieczna decyzja!",
                be_careful: "Bądź Ostrożny!",
                dangerous_choice: "To może być niebezpieczne!",
                think_safety: "Zawsze myśl najpierw o bezpieczeństwie!",
                hint_general: "💡 Pomyśl o tym, co utrzymałoby cię w bezpieczeństwie!",
                game_over: "Koniec Gry",
                try_again: "Nie martw się, spróbuj ponownie i pamiętaj o zasadach bezpieczeństwa!",
                level_complete: "Poziom Ukończony!",
                amazing_job: "Niesamowita praca w zachowaniu bezpieczeństwa!"
            }
        };
    }

    initializeTrafficSituations() {
        return {
            en: {
                level1: [ // Kolay - Temel güvenlik kuralları
                    {
                        emoji: "🚸",
                        scene: ["🚗", "🚗", "👦", "🏫"],
                        description: "You want to cross the street to get to school, but there are cars coming from both directions.",
                        choices: [
                            { text: "Wait for the cars to pass, then cross at the crosswalk", safe: true },
                            { text: "Run quickly between the cars", safe: false },
                            { text: "Cross wherever you want", safe: false },
                            { text: "Ask an adult to help you cross safely", safe: true }
                        ],
                        explanation: {
                            safe: "Great! Always wait for cars to pass and use crosswalks. Safety first!",
                            dangerous: "That's dangerous! Cars can't stop quickly. Always wait and use crosswalks."
                        },
                        skill: "crosswalk_safety"
                    },
                    {
                        emoji: "🚦",
                        scene: ["🚥", "🔴", "🚗", "👧"],
                        description: "You're at a traffic light and it's red. You can see the playground across the street.",
                        choices: [
                            { text: "Wait for the green light", safe: true },
                            { text: "Look both ways and cross anyway", safe: false },
                            { text: "Cross if no cars are coming", safe: false },
                            { text: "Follow the traffic signals", safe: true }
                        ],
                        explanation: {
                            safe: "Perfect! Red light means stop for everyone. Always follow traffic signals!",
                            dangerous: "Never cross on red! Traffic lights keep everyone safe - cars and people!"
                        },
                        skill: "traffic_lights"
                    },
                    {
                        emoji: "🚌",
                        scene: ["🚌", "🛑", "👦", "🏠"],
                        description: "The school bus stops near your house. You need to get on safely.",
                        choices: [
                            { text: "Wait until the bus completely stops", safe: true },
                            { text: "Run to the bus while it's coming", safe: false },
                            { text: "Wait in line and don't push", safe: true },
                            { text: "Walk behind the bus", safe: false }
                        ],
                        explanation: {
                            safe: "Correct! When the bus stop signs are out, other cars must stop too.",
                            dangerous: "Running around buses is dangerous! Always wait patiently."
                        },
                        skill: "bus_safety"
                    },
                    {
                        emoji: "👀",
                        scene: ["👦", "🚗", "👀", "🛣️"],
                        description: "You need to cross a quiet street. There are no traffic lights or crosswalks.",
                        choices: [
                            { text: "Look left, right, then left again before crossing", safe: true },
                            { text: "Just cross quickly", safe: false },
                            { text: "Listen for cars and look both ways", safe: true },
                            { text: "Cross while looking at your phone", safe: false }
                        ],
                        explanation: {
                            safe: "Excellent! Always look both ways, even on quiet streets!",
                            dangerous: "Never cross without looking! Cars can come suddenly from any direction."
                        },
                        skill: "basic_awareness"
                    },
                    {
                        emoji: "�‍♀️",
                        scene: ["👧", "🚗", "🌙", "🦺"],
                        description: "It's getting dark and you're walking home. Cars need to see you clearly.",
                        choices: [
                            { text: "Wear bright or reflective clothing", safe: true },
                            { text: "Wear dark clothes", safe: false },
                            { text: "Carry a flashlight or wear reflective gear", safe: true },
                            { text: "Stay close to parked cars", safe: false }
                        ],
                        explanation: {
                            safe: "Great! Being visible in the dark keeps you safe!",
                            dangerous: "Dark clothes make you invisible to drivers! Always be visible."
                        },
                        skill: "visibility"
                    }
                ],
                level2: [ // Orta - Daha karmaşık durumlar
                    {
                        emoji: "�🚴",
                        scene: ["🚴‍♂️", "🪖", "🛣️", "🚗"],
                        description: "You want to ride your bike to the park. The street is busy with cars and there's construction ahead.",
                        choices: [
                            { text: "Wear a helmet and follow traffic rules", safe: true },
                            { text: "Ride on the sidewalk fast", safe: false },
                            { text: "Signal your turns and stay visible", safe: true },
                            { text: "Ride between cars to go faster", safe: false }
                        ],
                        explanation: {
                            safe: "Excellent! Helmets protect your head and following rules keeps everyone safe!",
                            dangerous: "Riding between cars is very dangerous! Always follow bike safety rules."
                        },
                        skill: "bike_safety"
                    },
                    {
                        emoji: "🌧️",
                        scene: ["🌧️", "👦", "☂️", "🚗"],
                        description: "It's raining heavily and the roads are slippery. You need to get to the library.",
                        choices: [
                            { text: "Wear bright colors and walk extra slowly", safe: true },
                            { text: "Run fast to get there quickly", safe: false },
                            { text: "Use an umbrella and avoid puddles", safe: true },
                            { text: "Take shortcuts through parking lots", safe: false }
                        ],
                        explanation: {
                            safe: "Perfect! Wet roads are dangerous for everyone. Being careful is smart!",
                            dangerous: "Running in rain is very slippery! Slow and careful is always better."
                        },
                        skill: "weather_safety"
                    },
                    {
                        emoji: "�",
                        scene: ["�", "�‍♂️", "�", "👦"],
                        description: "There's construction on your usual route to school. Workers and machinery are everywhere.",
                        choices: [
                            { text: "Follow the detour signs and temporary walkways", safe: true },
                            { text: "Walk through the construction area", safe: false },
                            { text: "Ask a construction worker for the safe path", safe: true },
                            { text: "Climb over the barriers", safe: false }
                        ],
                        explanation: {
                            safe: "Smart choice! Construction zones have special safety rules for everyone.",
                            dangerous: "Construction zones are very dangerous! Always follow official detours."
                        },
                        skill: "construction_awareness"
                    },
                    {
                        emoji: "🚙",
                        scene: ["🚙", "🅿️", "👧", "🏬"],
                        description: "You're walking through a busy parking lot to get to the store. Cars are backing out and moving around.",
                        choices: [
                            { text: "Walk in designated walkways and stay alert", safe: true },
                            { text: "Walk between parked cars", safe: false },
                            { text: "Make eye contact with drivers and stay visible", safe: true },
                            { text: "Run quickly to avoid cars", safe: false }
                        ],
                        explanation: {
                            safe: "Excellent! Parking lots can be tricky. Staying visible and alert is key!",
                            dangerous: "Parking lots are full of moving cars! Never hide between vehicles."
                        },
                        skill: "parking_safety"
                    },
                    {
                        emoji: "🚨",
                        scene: ["🚨", "🚑", "🚗", "👦"],
                        description: "An ambulance with flashing lights and sirens is coming down the street while you're crossing.",
                        choices: [
                            { text: "Quickly and safely get out of the way", safe: true },
                            { text: "Continue crossing normally", safe: false },
                            { text: "Stop and let the ambulance pass first", safe: true },
                            { text: "Wave at the ambulance", safe: false }
                        ],
                        explanation: {
                            safe: "Perfect! Emergency vehicles always have the right of way!",
                            dangerous: "Emergency vehicles need to get through quickly! Always make way safely."
                        },
                        skill: "emergency_awareness"
                    }
                ],
                level3: [ // Zor - Kompleks senaryolar ve karar verme
                    {
                        emoji: "🌆",
                        scene: ["🌆", "🚗", "🚶‍♂️", "🚦"],
                        description: "You're in a busy city center with multiple traffic lights, crosswalks, and lots of pedestrians. Some people are not following the rules.",
                        choices: [
                            { text: "Follow all traffic signals even if others don't", safe: true },
                            { text: "Do what everyone else is doing", safe: false },
                            { text: "Wait for the proper signals and use crosswalks", safe: true },
                            { text: "Cross when there's a gap in traffic", safe: false }
                        ],
                        explanation: {
                            safe: "Outstanding! Being a good example and following rules keeps everyone safer!",
                            dangerous: "Following the crowd can be dangerous! Always stick to traffic rules."
                        },
                        skill: "complex_navigation"
                    },
                    {
                        emoji: "�️",
                        scene: ["�️", "�", "👦", "�"],
                        description: "It's very foggy and visibility is extremely poor. Cars have their headlights on and are moving slowly.",
                        choices: [
                            { text: "Stay extra visible and move very carefully", safe: true },
                            { text: "Walk normally since cars are going slow", safe: false },
                            { text: "Use reflective items and avoid unnecessary crossings", safe: true },
                            { text: "Stay close to cars so they can see you", safe: false }
                        ],
                        explanation: {
                            safe: "Brilliant! In fog, everyone needs to be extra careful and visible!",
                            dangerous: "Poor visibility is dangerous for everyone! Extra caution is always needed."
                        },
                        skill: "adverse_conditions"
                    },
                    {
                        emoji: "🚓",
                        scene: ["🚓", "🚗", "👮‍♂️", "👧"],
                        description: "There's a police officer directing traffic at a busy intersection because the traffic lights are broken. Different signals are being given.",
                        choices: [
                            { text: "Follow the police officer's directions carefully", safe: true },
                            { text: "Follow the broken traffic light instead", safe: false },
                            { text: "Wait and watch the officer's signals", safe: true },
                            { text: "Cross when cars are stopped", safe: false }
                        ],
                        explanation: {
                            safe: "Perfect! When police direct traffic, they override all other signals!",
                            dangerous: "Police officers controlling traffic always take priority over lights!"
                        },
                        skill: "authority_awareness"
                    },
                    {
                        emoji: "🏃‍♂️",
                        scene: ["🏃‍♂️", "⏰", "🚗", "🏫"],
                        description: "You're running late for an important test at school. There's heavy traffic and you feel pressured to take risks to get there faster.",
                        choices: [
                            { text: "Stay calm and stick to all safety rules", safe: true },
                            { text: "Take shortcuts through dangerous areas", safe: false },
                            { text: "Accept being late rather than being unsafe", safe: true },
                            { text: "Run across streets without looking properly", safe: false }
                        ],
                        explanation: {
                            safe: "Excellent decision! No test is worth risking your safety!",
                            dangerous: "Being late is never worth risking your life! Safety always comes first."
                        },
                        skill: "pressure_management"
                    },
                    {
                        emoji: "📱",
                        scene: ["📱", "👦", "🚗", "🎧"],
                        description: "Your friend is calling you on your phone while you're walking near a busy road with headphones on. The call seems urgent.",
                        choices: [
                            { text: "Stop in a safe place away from traffic to take the call", safe: true },
                            { text: "Answer while walking and crossing streets", safe: false },
                            { text: "Remove headphones and focus on traffic safety first", safe: true },
                            { text: "Keep walking while talking and listening to music", safe: false }
                        ],
                        explanation: {
                            safe: "Smart! Distractions near traffic are extremely dangerous!",
                            dangerous: "Phones and headphones near traffic can be deadly! Always stay focused."
                        },
                        skill: "distraction_management"
                    }
                ]
            },
            tr: {
                level1: [
                    {
                        emoji: "🚸",
                        scene: ["🚗", "🚗", "👦", "🏫"],
                        description: "Okula gitmek için karşıdan karşıya geçmek istiyorsun, ama her iki yönden de arabalar geliyor.",
                        choices: [
                            { text: "Arabaların geçmesini bekle, sonra yaya geçidinden geç", safe: true },
                            { text: "Arabaların arasından hızlıca koş", safe: false },
                            { text: "İstediğin yerden geç", safe: false },
                            { text: "Bir yetişkinden güvenli geçmen için yardım iste", safe: true }
                        ],
                        explanation: {
                            safe: "Harika! Her zaman arabaların geçmesini bekle ve yaya geçidi kullan. Güvenlik önce!",
                            dangerous: "Bu tehlikeli! Arabalar hızlı duramazlar. Her zaman bekle ve yaya geçidi kullan."
                        },
                        skill: "crosswalk_safety"
                    },
                    {
                        emoji: "🚦",
                        scene: ["🚥", "🔴", "🚗", "👧"],
                        description: "Trafik ışığında duruyorsun ve kırmızı yanıyor. Karşıda oyun alanını görebiliyorsun.",
                        choices: [
                            { text: "Yeşil ışığı bekle", safe: true },
                            { text: "İki tarafa bak ve yine de geç", safe: false },
                            { text: "Araba gelmiyorsa geç", safe: false },
                            { text: "Trafik işaretlerini takip et", safe: true }
                        ],
                        explanation: {
                            safe: "Mükemmel! Kırmızı ışık herkes için dur demektir. Her zaman trafik işaretlerini takip et!",
                            dangerous: "Kırmızıkta asla geçme! Trafik ışıkları herkesi güvende tutar - arabaları ve insanları!"
                        },
                        skill: "traffic_lights"
                    },
                    {
                        emoji: "�",
                        scene: ["�", "🛑", "�", "🏠"],
                        description: "Okul otobüsü evinin yakınında duruyor. Güvenli bir şekilde binmen gerek.",
                        choices: [
                            { text: "Otobüs tamamen durana kadar bekle", safe: true },
                            { text: "Otobüs gelirken koş", safe: false },
                            { text: "Sırada bekle ve itme", safe: true },
                            { text: "Otobüsün arkasından geç", safe: false }
                        ],
                        explanation: {
                            safe: "Doğru! Otobüs durma işaretleri açıkken diğer arabalar da durmalı.",
                            dangerous: "Otobüslerin etrafında koşmak tehlikelidir! Her zaman sabırla bekle."
                        },
                        skill: "bus_safety"
                    },
                    {
                        emoji: "�",
                        scene: ["�", "�", "�", "🛣️"],
                        description: "Sessiz bir caddeden geçmen gerekiyor. Trafik ışığı veya yaya geçidi yok.",
                        choices: [
                            { text: "Geçmeden önce sola, sağa, sonra tekrar sola bak", safe: true },
                            { text: "Hızlıca geç", safe: false },
                            { text: "Arabaları dinle ve iki tarafa da bak", safe: true },
                            { text: "Telefonuna bakarken geç", safe: false }
                        ],
                        explanation: {
                            safe: "Mükemmel! Sessiz caddelerde bile her zaman iki tarafa bak!",
                            dangerous: "Bakmadan asla geçme! Arabalar herhangi bir yönden aniden gelebilir."
                        },
                        skill: "basic_awareness"
                    },
                    {
                        emoji: "🚶‍♀️",
                        scene: ["👧", "�", "🌙", "🦺"],
                        description: "Hava kararıyor ve eve yürüyorsun. Arabaların seni net görmesi gerekiyor.",
                        choices: [
                            { text: "Parlak veya yansıtıcı kıyafet giy", safe: true },
                            { text: "Koyu renkli kıyafet giy", safe: false },
                            { text: "El feneri taşı veya yansıtıcı ekipman kullan", safe: true },
                            { text: "Park edilmiş arabaların yanında dur", safe: false }
                        ],
                        explanation: {
                            safe: "Harika! Karanlıkta görünür olmak seni güvende tutar!",
                            dangerous: "Koyu kıyafetler seni sürücülere karşı görünmez yapar! Her zaman görünür ol."
                        },
                        skill: "visibility"
                    }
                ]
            },
            lt: [
                {
                    emoji: "🚸",
                    scene: ["🚗", "🚗", "👦", "🏫"],
                    description: "Norite pereiti gatvę, kad pasiektumėte mokyklą, bet iš abiejų pusių važiuoja automobiliai.",
                    choices: [
                        { text: "Palaukite, kol praeis automobiliai, tada eikite per pėsčiųjų perėją", safe: true },
                        { text: "Greitai bėkite tarp automobilių", safe: false },
                        { text: "Eikite kur norite", safe: false },
                        { text: "Paprašykite suaugusiojo padėti saugiai pereiti", safe: true }
                    ],
                    explanation: {
                        safe: "Puiku! Visada palaukite, kol praeis automobiliai ir naudokite pėsčiųjų perėjas. Sauga pirmiausiai!",
                        dangerous: "Tai pavojinga! Automobiliai negali greitai sustoti. Visada palaukite ir naudokite pėsčiųjų perėjas."
                    },
                    skill: "crosswalk_safety"
                }
            ],
            nl: [
                {
                    emoji: "🚸",
                    scene: ["🚗", "🚗", "👦", "🏫"],
                    description: "Je wilt de straat oversteken om naar school te gaan, maar er komen auto's van beide kanten.",
                    choices: [
                        { text: "Wacht tot de auto's zijn gepasseerd, steek dan over bij het zebrapad", safe: true },
                        { text: "Ren snel tussen de auto's door", safe: false },
                        { text: "Steek over waar je maar wilt", safe: false },
                        { text: "Vraag een volwassene om je veilig te helpen oversteken", safe: true }
                    ],
                    explanation: {
                        safe: "Geweldig! Wacht altijd tot auto's zijn gepasseerd en gebruik zebrapaden. Veiligheid eerst!",
                        dangerous: "Dat is gevaarlijk! Auto's kunnen niet snel stoppen. Wacht altijd en gebruik zebrapaden."
                    },
                    skill: "crosswalk_safety"
                }
            ],
            pl: [
                {
                    emoji: "🚸",
                    scene: ["🚗", "🚗", "👦", "🏫"],
                    description: "Chcesz przejść przez ulicę, żeby dostać się do szkoły, ale samochody jadą z obu stron.",
                    choices: [
                        { text: "Poczekaj, aż samochody przejadą, potem przejdź na przejściu dla pieszych", safe: true },
                        { text: "Przebiegnij szybko między samochodami", safe: false },
                        { text: "Przejdź tam, gdzie chcesz", safe: false },
                        { text: "Poproś dorosłego o pomoc w bezpiecznym przejściu", safe: true }
                    ],
                    explanation: {
                        safe: "Świetnie! Zawsze czekaj, aż samochody przejadą i używaj przejść dla pieszych. Bezpieczeństwo przede wszystkim!",
                        dangerous: "To niebezpieczne! Samochody nie mogą szybko się zatrzymać. Zawsze czekaj i używaj przejść dla pieszych."
                    },
                    skill: "crosswalk_safety"
                }
            ]
        };
    }

    initializeSafetyTips() {
        return [
            'crosswalk_safety',
            'traffic_lights', 
            'bike_safety',
            'bus_safety',
            'weather_safety'
        ];
    }

    initializeGame() {
        console.log('Initializing Traffic Smart Game...');
        this.loadLanguage(this.currentLanguage);
        this.updateDisplay();
        this.showPhase('tips-phase');
        console.log('Game initialized successfully');
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Language selector
        const langSelect = document.getElementById('language-select');
        if (langSelect) {
            langSelect.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
            console.log('Language selector event listener added');
        } else {
            console.error('Language selector not found!');
        }
        
        // Game control buttons
        const startBtn = document.getElementById('start-game-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                console.log('Start game button clicked!');
                this.startGame();
            });
            console.log('Start game button event listener added');
        } else {
            console.error('Start game button not found!');
        }
        
        const hintBtn = document.getElementById('hint-btn');
        if (hintBtn) {
            hintBtn.addEventListener('click', () => this.showHint());
            console.log('Hint button event listener added');
        }
        
        const tipsBtn = document.getElementById('tips-btn');
        if (tipsBtn) {
            tipsBtn.addEventListener('click', () => this.showSafetyTips());
            console.log('Tips button event listener added');
        }
        
        const restartBtn = document.getElementById('restart-btn');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => this.restartGame());
            console.log('Restart button event listener added');
        }
        
        // Modal buttons
        const continueBtn = document.getElementById('continue-btn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => this.hideFeedback());
        }
        
        const nextLevelBtn = document.getElementById('next-level-btn');
        if (nextLevelBtn) {
            nextLevelBtn.addEventListener('click', () => this.nextLevel());
        }
        
        const replayBtn = document.getElementById('replay-btn');
        if (replayBtn) {
            replayBtn.addEventListener('click', () => this.restartGame());
        }
        
        const learnMoreBtn = document.getElementById('learn-more-btn');
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', () => this.showSafetyTips());
        }
        
        console.log('All event listeners setup complete');
    }

    changeLanguage(langCode) {
        console.log('Changing language to:', langCode);
        this.currentLanguage = langCode;
        this.loadLanguage(langCode);
        // Restart current question to apply language changes
        if (this.currentQuestionIndex >= 0 && document.getElementById('game-phase').classList.contains('active')) {
            this.loadCurrentSituation();
        }
    }

    loadLanguage(langCode) {
        console.log('Loading language:', langCode);
        const t = this.translations[langCode];
        if (!t) {
            console.error('Translation not found for language:', langCode);
            return;
        }
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (t[key]) {
                element.textContent = t[key];
            } else {
                console.warn('Translation key not found:', key, 'for language:', langCode);
            }
        });
        console.log('Language loaded successfully');
    }

    translate(key, replacements = {}) {
        let text = this.translations[this.currentLanguage][key] || key;
        Object.keys(replacements).forEach(placeholder => {
            text = text.replace(`{${placeholder}}`, replacements[placeholder]);
        });
        return text;
    }

    startGame() {
        console.log('Starting game! Current state:', {
            currentQuestionIndex: this.currentQuestionIndex,
            currentLevel: this.currentLevel,
            currentLanguage: this.currentLanguage
        });
        
        this.currentQuestionIndex = 0;
        this.showPhase('game-phase');
        this.loadCurrentSituation();
        
        console.log('Game started successfully, showing game phase');
    }

    loadCurrentSituation() {
        const levelKey = `level${this.currentLevel}`;
        const situations = this.trafficSituations[this.currentLanguage][levelKey] || 
                         this.trafficSituations[this.currentLanguage]['level1']; // Fallback to level1
        
        console.log('Loading situation', this.currentQuestionIndex, 'of', situations.length, 'for level', this.currentLevel);
        
        if (this.currentQuestionIndex >= situations.length) {
            this.showResults();
            return;
        }
        
        const situation = situations[this.currentQuestionIndex];
        console.log('Current situation:', situation);
        
        // Update situation display
        document.getElementById('situation-emoji').textContent = situation.emoji;
        document.getElementById('situation-text').textContent = situation.description;
        
        // Update scene elements
        const sceneContainer = document.getElementById('situation-scene');
        sceneContainer.innerHTML = '';
        situation.scene.forEach(element => {
            const span = document.createElement('span');
            span.className = 'scene-element';
            span.textContent = element;
            sceneContainer.appendChild(span);
        });
        
        // Create choice buttons
        this.displayChoices(situation.choices, situation);
        this.updateProgress();
    }

    displayChoices(choices, situation) {
        const container = document.getElementById('choice-options');
        container.innerHTML = '';
        
        // Şıkları karıştır (shuffle)
        const shuffledChoices = [...choices].sort(() => Math.random() - 0.5);
        
        shuffledChoices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.addEventListener('click', () => this.handleChoice(choice, situation, btn));
            container.appendChild(btn);
        });
    }

    handleChoice(choice, situation, button) {
        // Disable all buttons
        document.querySelectorAll('.choice-btn').forEach(btn => btn.disabled = true);
        
        // Visual feedback
        if (choice.safe) {
            button.classList.add('safe');
            button.classList.add('bounce');
            this.playerScore += 100;
            this.streakCount++;
            this.learnedSkills.add(situation.skill);
        } else {
            button.classList.add('dangerous');
            button.classList.add('shake');
            this.playerLives--;
            this.streakCount = 0;
            
            if (this.playerLives <= 0) {
                setTimeout(() => this.gameOver(), 1500);
                return;
            }
        }
        
        this.updateDisplay();
        
        // Show feedback after animation
        setTimeout(() => {
            this.showFeedback(choice.safe, situation);
        }, 1000);
    }

    showFeedback(isCorrect, situation) {
        const modal = document.getElementById('feedback-modal');
        const icon = document.getElementById('feedback-icon');
        const title = document.getElementById('feedback-title');
        const text = document.getElementById('feedback-text');
        
        if (isCorrect) {
            icon.textContent = '✅';
            title.textContent = this.translate('great_choice');
            text.textContent = situation.explanation.safe;
        } else {
            icon.textContent = '⚠️';
            title.textContent = this.translate('be_careful');
            text.textContent = situation.explanation.dangerous;
        }
        
        modal.style.display = 'block';
    }

    hideFeedback() {
        document.getElementById('feedback-modal').style.display = 'none';
        this.nextQuestion();
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex >= this.questionsPerLevel) {
            this.showResults();
        } else {
            this.loadCurrentSituation();
        }
    }

    showResults() {
        const modal = document.getElementById('results-modal');
        const title = document.getElementById('results-title');
        const score = document.getElementById('results-score');
        const learnedContainer = document.getElementById('learned-skills');
        const nextLevelBtn = document.getElementById('next-level-btn');
        
        const maxScore = this.questionsPerLevel * 100;
        const percentage = Math.round((this.playerScore / maxScore) * 100);
        
        // Level-specific title
        let levelCompleteKey = `level_${this.currentLevel}_complete`;
        let levelTitle = this.getTranslation(levelCompleteKey);
        
        if (!levelTitle) {
            levelTitle = percentage >= 80 ? this.getTranslation('excellent_work') : 
                        percentage >= 60 ? this.getTranslation('level_complete') : 
                        this.getTranslation('amazing_job');
        }
        
        title.textContent = levelTitle;
        score.textContent = `${this.getTranslation('score_label')} ${this.playerScore}/${maxScore}`;
        
        // Display learned skills
        learnedContainer.innerHTML = '';
        this.learnedSkills.forEach(skill => {
            const div = document.createElement('div');
            div.className = 'learned-skill';
            div.textContent = this.getTranslation(skill) || skill.replace('_', ' ');
            learnedContainer.appendChild(div);
        });
        
        // Show/hide next level button based on current level
        if (this.currentLevel < this.maxLevel) {
            nextLevelBtn.style.display = 'inline-block';
            nextLevelBtn.textContent = this.getTranslation('next_level');
        } else {
            nextLevelBtn.style.display = 'none';
        }
        
        modal.style.display = 'block';
    }

    gameOver() {
        alert(this.translate('game_over') + '\n' + this.translate('try_again'));
        this.restartGame();
    }

    showHint() {
        alert(this.translate('hint_general'));
    }

    showSafetyTips() {
        this.showPhase('tips-phase');
    }

    nextLevel() {
        if (this.currentLevel < this.maxLevel) {
            this.currentLevel++;
            console.log('Advancing to level', this.currentLevel);
            document.getElementById('results-modal').style.display = 'none';
            this.startGame();
        } else {
            console.log('Maximum level reached! Showing final completion.');
            // Oyun tamamlandı - final congratulations göster
            this.showFinalCompletion();
        }
    }

    showFinalCompletion() {
        const modal = document.getElementById('results-modal');
        const title = modal.querySelector('.modal-title');
        const content = modal.querySelector('.modal-content p');
        const nextLevelBtn = document.getElementById('next-level-btn');
        const replayBtn = document.getElementById('replay-btn');
        
        title.textContent = this.getTranslation('final_completion_title') || 'Congratulations! 🎉';
        content.innerHTML = `
            <p>${this.getTranslation('final_completion_message') || 'You have completed all 3 levels of Traffic Smart!'}</p>
            <p>${this.getTranslation('traffic_expert') || 'You are now a traffic safety expert!'}</p>
            <p><strong>${this.getTranslation('final_score') || 'Final Score:'} ${this.playerScore}</strong></p>
            <p>${this.getTranslation('skills_learned') || 'Skills mastered:'} ${this.learnedSkills.size}</p>
        `;
        
        // Hide next level button, show only replay
        nextLevelBtn.style.display = 'none';
        replayBtn.style.display = 'inline-block';
        replayBtn.textContent = this.getTranslation('play_again') || 'Play Again';
        
        modal.style.display = 'block';
    }

    restartGame() {
        this.currentLevel = 1;
        this.playerScore = 0;
        this.playerLives = 3;
        this.streakCount = 0;
        this.currentQuestionIndex = 0;
        this.questionsPerLevel = 5;
        this.learnedSkills.clear();
        
        // Hide modals
        document.getElementById('feedback-modal').style.display = 'none';
        document.getElementById('results-modal').style.display = 'none';
        
        this.updateDisplay();
        this.showPhase('tips-phase');
    }

    showPhase(phaseId) {
        console.log('Showing phase:', phaseId);
        document.querySelectorAll('.game-phase').forEach(phase => {
            phase.classList.remove('active');
        });
        const targetPhase = document.getElementById(phaseId);
        if (targetPhase) {
            targetPhase.classList.add('active');
            console.log('Phase shown successfully:', phaseId);
        } else {
            console.error('Phase element not found:', phaseId);
        }
    }

    updateDisplay() {
        document.getElementById('current-level').textContent = this.currentLevel;
        document.getElementById('player-score').textContent = this.playerScore;
        document.getElementById('player-lives').textContent = this.playerLives;
        document.getElementById('streak_count').textContent = this.streakCount;
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questionsPerLevel) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${this.currentQuestionIndex + 1} / ${this.questionsPerLevel}`;
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded, initializing Traffic Smart Game...');
    try {
        const game = new TrafficSmartGame();
        console.log('Game instance created successfully:', game);
        window.trafficGame = game; // Global access for debugging
    } catch (error) {
        console.error('Error creating game instance:', error);
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', (event) => {
    if (event.key === 'h' || event.key === 'H') {
        document.getElementById('hint-btn').click();
    } else if (event.key === 't' || event.key === 'T') {
        document.getElementById('tips-btn').click();
    } else if (event.key === 'r' || event.key === 'R') {
        document.getElementById('restart-btn').click();
    }
});
