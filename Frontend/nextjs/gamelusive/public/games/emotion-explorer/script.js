// Emotion Explorer Game - Multilingual Emotional Intelligence Development
class EmotionExplorerGame {
    constructor() {
        this.currentLanguage = 'en';
        this.currentLevel = 1;
        this.playerScore = 0;
        this.streakCount = 0;
        this.currentPhase = 'recognition';
        this.currentQuestionIndex = 0;
        this.questionsPerPhase = 5;
        this.learnedEmotions = new Set();
        
        this.translations = this.initializeTranslations();
        this.emotions = this.initializeEmotions();
        this.situations = this.initializeSituations();
        this.scenarios = this.initializeScenarios();
        
        this.initializeGame();
        this.setupEventListeners();
    }

    initializeTranslations() {
        return {
            en: {
                game_title: "🎭 Emotion Explorer 💫",
                game_subtitle: "Discover and learn about different emotions and feelings!",
                level_label: "Level:",
                score_label: "Score:",
                streak_label: "Streak:",
                recognition_title: "🎯 Emotion Recognition",
                recognition_subtitle: "Look at the face and choose the correct emotion!",
                reflection_title: "🤔 How Would You Feel?",
                reflection_subtitle: "In this situation, how would you feel?",
                scenario_title: "🎬 Emotion Scenarios",
                scenario_subtitle: "Help the character understand their emotions!",
                tell_us_more: "💭 Tell us more:",
                feeling_placeholder: "Why would you feel this way? What would you think about?",
                share_feeling: "Share Your Feeling",
                coping_strategies: "💡 What could help {name} feel better?",
                what_you_learned: "🧠 What You Learned:",
                next_level: "Next Level",
                play_again: "Play Again",
                continue: "Continue",
                hint: "💡 Hint",
                skip: "⏭️ Skip",
                restart: "🔄 Restart",
                how_to_play: "How to Play:",
                instruction_1: "🎯 **Phase 1:** Look at faces and identify emotions",
                instruction_2: "🤔 **Phase 2:** Think about how you would feel in different situations",
                instruction_3: "🎬 **Phase 3:** Help characters understand and cope with their emotions",
                instruction_4: "⭐ Earn stars for correct answers and thoughtful responses",
                instruction_5: "🔥 Build streaks for bonus points!",
                great_choice: "Great Choice! ✨",
                good_try: "Good Try! 💭",
                outstanding: "🏆 Outstanding!",
                great_job: "🌟 Great Job!",
                good_effort: "👏 Good Effort!",
                encouragement_1: "You're becoming an emotion expert! 🧠",
                encouragement_2: "Your emotional intelligence is growing! 🌱",
                encouragement_3: "Great job understanding feelings! 💝",
                encouragement_4: "You're learning to be emotionally smart! 🎓",
                hint_emotion: "Hint: This emotion is {description}",
                hint_general: "💡 Think about how you would feel if this happened to you!",
                skip_confirm: "Are you sure you want to skip this question?",
                select_emotion_first: "Please select how you would feel first!",
                thank_you_sharing: "Thank you for sharing your feelings!",
                understanding_emotions: "Understanding your own emotions is an important skill that helps you make better decisions.",
                feels_understood: "{name} feels understood",
                recognized_correctly: "You recognized the emotion correctly!",
                emotions_valid: "Every emotion is valid, and understanding takes practice.",
                helping_others: "Helping others understand their emotions builds empathy and stronger friendships."
            },
            tr: {
                game_title: "🎭 Duygu Kaşifi 💫",
                game_subtitle: "Farklı duygular ve hisleri keşfedin ve öğrenin!",
                level_label: "Seviye:",
                score_label: "Puan:",
                streak_label: "Seri:",
                recognition_title: "🎯 Duygu Tanıma",
                recognition_subtitle: "Yüze bakın ve doğru duyguyu seçin!",
                reflection_title: "🤔 Sen Nasıl Hissederdin?",
                reflection_subtitle: "Bu durumda sen nasıl hissederdin?",
                scenario_title: "🎬 Duygu Senaryoları",
                scenario_subtitle: "Karakterin duygularını anlamasına yardım edin!",
                tell_us_more: "💭 Daha fazla anlat:",
                feeling_placeholder: "Neden böyle hissederdin? Ne düşünürdün?",
                share_feeling: "Duygunu Paylaş",
                coping_strategies: "💡 {name}'in daha iyi hissetmesine ne yardımcı olabilir?",
                what_you_learned: "🧠 Öğrendiklerin:",
                next_level: "Sonraki Seviye",
                play_again: "Tekrar Oyna",
                continue: "Devam Et",
                hint: "💡 İpucu",
                skip: "⏭️ Atla",
                restart: "🔄 Yeniden Başlat",
                how_to_play: "Nasıl Oynanır:",
                instruction_1: "🎯 **1. Aşama:** Yüzlere bakın ve duyguları tanımlayın",
                instruction_2: "🤔 **2. Aşama:** Farklı durumlarda nasıl hissedeceğinizi düşünün",
                instruction_3: "🎬 **3. Aşama:** Karakterlerin duygularını anlamalarına ve baş etmelerine yardım edin",
                instruction_4: "⭐ Doğru cevaplar ve düşünceli yanıtlar için yıldız kazanın",
                instruction_5: "🔥 Bonus puanlar için seri oluşturun!",
                great_choice: "Harika Seçim! ✨",
                good_try: "İyi Deneme! 💭",
                outstanding: "🏆 Mükemmel!",
                great_job: "🌟 Harika İş!",
                good_effort: "👏 İyi Çaba!",
                encouragement_1: "Duygu uzmanı oluyorsun! 🧠",
                encouragement_2: "Duygusal zekan gelişiyor! 🌱",
                encouragement_3: "Duyguları anlamada harikasın! 💝",
                encouragement_4: "Duygusal olarak akıllı olmayı öğreniyorsun! 🎓",
                hint_emotion: "İpucu: Bu duygu {description}",
                hint_general: "💡 Bu sana olsaydı nasıl hissederdin düşün!",
                skip_confirm: "Bu soruyu atlamak istediğinden emin misin?",
                select_emotion_first: "Lütfen önce nasıl hissedeceğini seç!",
                thank_you_sharing: "Duygularını paylaştığın için teşekkürler!",
                understanding_emotions: "Kendi duygularını anlamak, daha iyi kararlar vermene yardımcı olan önemli bir beceridir.",
                feels_understood: "{name} anlaşıldığını hissediyor",
                recognized_correctly: "Duyguyu doğru tanıdın!",
                emotions_valid: "Her duygu geçerlidir ve anlamak pratik gerektirir.",
                helping_others: "Başkalarının duygularını anlamalarına yardım etmek empati ve güçlü dostluklar kurar."
            },
            lt: {
                game_title: "🎭 Emocijų Tyrinėtojas 💫",
                game_subtitle: "Atraskite ir išmokite apie skirtingas emocijas ir jausmus!",
                level_label: "Lygis:",
                score_label: "Rezultatas:",
                streak_label: "Serija:",
                recognition_title: "🎯 Emocijų Atpažinimas",
                recognition_subtitle: "Pažiūrėkite į veidą ir pasirinkite teisingą emociją!",
                reflection_title: "🤔 Kaip Tu Jaustumeis?",
                reflection_subtitle: "Šioje situacijoje, kaip tu jaustumeis?",
                scenario_title: "🎬 Emocijų Scenarijai",
                scenario_subtitle: "Padėkite personažui suprasti savo emocijas!",
                tell_us_more: "💭 Papasakokite daugiau:",
                feeling_placeholder: "Kodėl jaustumeis taip? Ką galvotum?",
                share_feeling: "Pasidalinti Jausmu",
                coping_strategies: "💡 Kas galėtų padėti {name} jaustis geriau?",
                what_you_learned: "🧠 Ką Išmokote:",
                next_level: "Kitas Lygis",
                play_again: "Žaisti Vėl",
                continue: "Tęsti",
                hint: "💡 Užuomina",
                skip: "⏭️ Praleisti",
                restart: "🔄 Pradėti Iš Naujo",
                how_to_play: "Kaip Žaisti:",
                instruction_1: "🎯 **1 Etapas:** Žiūrėkite į veidus ir atpažinkite emocijas",
                instruction_2: "🤔 **2 Etapas:** Pagalvokite, kaip jaustumėtės skirtingose situacijose",
                instruction_3: "🎬 **3 Etapas:** Padėkite personažams suprasti ir susidoroti su emocijomis",
                instruction_4: "⭐ Gaukite žvaigždutes už teisingus atsakymus ir apgalvotus atsiliepimus",
                instruction_5: "🔥 Sukurkite serijas papildomiems taškams!",
                great_choice: "Puikus Pasirinkimas! ✨",
                good_try: "Geras Bandymas! 💭",
                outstanding: "🏆 Puiku!",
                great_job: "🌟 Puikus Darbas!",
                good_effort: "👏 Geras Pastangas!",
                encouragement_1: "Tampate emocijų ekspertu! 🧠",
                encouragement_2: "Jūsų emocinis intelektas auga! 🌱",
                encouragement_3: "Puikiai suprantate jausmus! 💝",
                encouragement_4: "Mokotės būti emociškai protingi! 🎓",
                hint_emotion: "Užuomina: Ši emocija yra {description}",
                hint_general: "💡 Pagalvokite, kaip jaustumėtės, jei tai atsitiktų jums!",
                skip_confirm: "Ar tikrai norite praleisti šį klausimą?",
                select_emotion_first: "Pirmiausia pasirinkite, kaip jaustumėtės!",
                thank_you_sharing: "Ačiū, kad pasidalijote savo jausmais!",
                understanding_emotions: "Savo emocijų supratimas yra svarbus įgūdis, padedantis priimti geresnius sprendimus.",
                feels_understood: "{name} jaučiasi suprastas",
                recognized_correctly: "Teisingai atpažinote emociją!",
                emotions_valid: "Kiekviena emocija yra galiojanti, o supratimas reikalauja praktikos.",
                helping_others: "Padėjimas kitiems suprasti savo emocijas formuoja empatiją ir stiprius draugystės ryšius."
            },
            nl: {
                game_title: "🎭 Emotie Verkenner 💫",
                game_subtitle: "Ontdek en leer over verschillende emoties en gevoelens!",
                level_label: "Niveau:",
                score_label: "Score:",
                streak_label: "Reeks:",
                recognition_title: "🎯 Emotie Herkenning",
                recognition_subtitle: "Kijk naar het gezicht en kies de juiste emotie!",
                reflection_title: "🤔 Hoe Zou Jij Je Voelen?",
                reflection_subtitle: "Hoe zou jij je voelen in deze situatie?",
                scenario_title: "🎬 Emotie Scenario's",
                scenario_subtitle: "Help het personage hun emoties te begrijpen!",
                tell_us_more: "💭 Vertel ons meer:",
                feeling_placeholder: "Waarom zou je je zo voelen? Waar zou je aan denken?",
                share_feeling: "Deel Je Gevoel",
                coping_strategies: "💡 Wat zou {name} kunnen helpen zich beter te voelen?",
                what_you_learned: "🧠 Wat Je Hebt Geleerd:",
                next_level: "Volgend Niveau",
                play_again: "Opnieuw Spelen",
                continue: "Doorgaan",
                hint: "💡 Hint",
                skip: "⏭️ Overslaan",
                restart: "🔄 Opnieuw Beginnen",
                how_to_play: "Hoe Te Spelen:",
                instruction_1: "🎯 **Fase 1:** Kijk naar gezichten en identificeer emoties",
                instruction_2: "🤔 **Fase 2:** Denk na over hoe je je zou voelen in verschillende situaties",
                instruction_3: "🎬 **Fase 3:** Help personages hun emoties te begrijpen en ermee om te gaan",
                instruction_4: "⭐ Verdien sterren voor juiste antwoorden en doordachte reacties",
                instruction_5: "🔥 Bouw reeksen voor bonuspunten!",
                great_choice: "Geweldige Keuze! ✨",
                good_try: "Goede Poging! 💭",
                outstanding: "🏆 Uitstekend!",
                great_job: "🌟 Geweldig Werk!",
                good_effort: "👏 Goede Inspanning!",
                encouragement_1: "Je wordt een emotie-expert! 🧠",
                encouragement_2: "Je emotionele intelligentie groeit! 🌱",
                encouragement_3: "Geweldig werk bij het begrijpen van gevoelens! 💝",
                encouragement_4: "Je leert emotioneel slim te zijn! 🎓",
                hint_emotion: "Hint: Deze emotie is {description}",
                hint_general: "💡 Denk na over hoe je je zou voelen als dit jou zou overkomen!",
                skip_confirm: "Weet je zeker dat je deze vraag wilt overslaan?",
                select_emotion_first: "Selecteer eerst hoe je je zou voelen!",
                thank_you_sharing: "Bedankt voor het delen van je gevoelens!",
                understanding_emotions: "Het begrijpen van je eigen emoties is een belangrijke vaardigheid die je helpt betere beslissingen te nemen.",
                feels_understood: "{name} voelt zich begrepen",
                recognized_correctly: "Je hebt de emotie correct herkend!",
                emotions_valid: "Elke emotie is geldig, en begrip vereist oefening.",
                helping_others: "Anderen helpen hun emoties te begrijpen bouwt empathie en sterke vriendschappen op."
            },
            pl: {
                game_title: "🎭 Odkrywca Emocji 💫",
                game_subtitle: "Odkryj i naucz się o różnych emocjach i uczuciach!",
                level_label: "Poziom:",
                score_label: "Wynik:",
                streak_label: "Seria:",
                recognition_title: "🎯 Rozpoznawanie Emocji",
                recognition_subtitle: "Spójrz na twarz i wybierz właściwą emocję!",
                reflection_title: "🤔 Jak Byś Się Czuł?",
                reflection_subtitle: "Jak byś się czuł w tej sytuacji?",
                scenario_title: "🎬 Scenariusze Emocji",
                scenario_subtitle: "Pomóż postaci zrozumieć swoje emocje!",
                tell_us_more: "💭 Powiedz nam więcej:",
                feeling_placeholder: "Dlaczego czułbyś się w ten sposób? O czym byś myślał?",
                share_feeling: "Podziel Się Uczuciem",
                coping_strategies: "💡 Co mogłoby pomóc {name} poczuć się lepiej?",
                what_you_learned: "🧠 Czego Się Nauczyłeś:",
                next_level: "Następny Poziom",
                play_again: "Graj Ponownie",
                continue: "Kontynuuj",
                hint: "💡 Wskazówka",
                skip: "⏭️ Pomiń",
                restart: "🔄 Restart",
                how_to_play: "Jak Grać:",
                instruction_1: "🎯 **Faza 1:** Spójrz na twarze i zidentyfikuj emocje",
                instruction_2: "🤔 **Faza 2:** Pomyśl o tym, jak czułbyś się w różnych sytuacjach",
                instruction_3: "🎬 **Faza 3:** Pomóż postaciom zrozumieć i poradzić sobie z emocjami",
                instruction_4: "⭐ Zdobywaj gwiazdki za poprawne odpowiedzi i przemyślane reakcje",
                instruction_5: "🔥 Buduj serie dla dodatkowych punktów!",
                great_choice: "Świetny Wybór! ✨",
                good_try: "Dobra Próba! 💭",
                outstanding: "🏆 Wybitnie!",
                great_job: "🌟 Świetna Robota!",
                good_effort: "👏 Dobry Wysiłek!",
                encouragement_1: "Stajesz się ekspertem od emocji! 🧠",
                encouragement_2: "Twoja inteligencja emocjonalna rośnie! 🌱",
                encouragement_3: "Świetna robota w rozumieniu uczuć! 💝",
                encouragement_4: "Uczysz się być emocjonalnie mądrym! 🎓",
                hint_emotion: "Wskazówka: Ta emocja to {description}",
                hint_general: "💡 Pomyśl o tym, jak byś się czuł, gdyby to ci się przydarzyło!",
                skip_confirm: "Czy na pewno chcesz pominąć to pytanie?",
                select_emotion_first: "Najpierw wybierz, jak byś się czuł!",
                thank_you_sharing: "Dziękujemy za podzielenie się swoimi uczuciami!",
                understanding_emotions: "Zrozumienie własnych emocji to ważna umiejętność, która pomaga podejmować lepsze decyzje.",
                feels_understood: "{name} czuje się zrozumiany",
                recognized_correctly: "Poprawnie rozpoznałeś emocję!",
                emotions_valid: "Każda emocja jest ważna, a zrozumienie wymaga praktyki.",
                helping_others: "Pomaganie innym w zrozumieniu ich emocji buduje empatię i silne przyjaźnie."
            }
        };
    }

    initializeEmotions() {
        return {
            en: {
                happy: {
                    emoji: '😊',
                    name: 'Happy',
                    description: 'feeling joyful, pleased, or delighted',
                    situations: ['It\'s your birthday!', 'You got an A+ on your test!', 'Your friend shared their toy with you!'],
                    tips: 'When you feel happy, your mouth turns up in a smile and your eyes might sparkle!'
                },
                sad: {
                    emoji: '😢',
                    name: 'Sad',
                    description: 'feeling unhappy, sorrowful, or disappointed',
                    situations: ['Your pet is sick', 'You lost your favorite toy', 'It\'s raining and you can\'t play outside'],
                    tips: 'When you feel sad, it\'s okay to cry. Talking to someone you trust can help you feel better.'
                },
                angry: {
                    emoji: '😠',
                    name: 'Angry',
                    description: 'feeling mad, upset, or frustrated',
                    situations: ['Someone took your turn', 'Your sibling broke your project', 'You were blamed for something you didn\'t do'],
                    tips: 'When you feel angry, take deep breaths and count to ten. It\'s important to use words, not fists.'
                },
                surprised: {
                    emoji: '😲',
                    name: 'Surprised',
                    description: 'feeling amazed or shocked by something unexpected',
                    situations: ['Someone jumped out and scared you', 'You found a gift under your bed', 'Your teacher announced a field trip'],
                    tips: 'Surprises can be good or bad. Your eyes get wide and your mouth might open when you\'re surprised.'
                },
                scared: {
                    emoji: '😨',
                    name: 'Scared',
                    description: 'feeling afraid or worried about something',
                    situations: ['There\'s a loud thunderstorm', 'You\'re watching a scary movie', 'You have to give a speech'],
                    tips: 'Everyone feels scared sometimes. It\'s brave to ask for help when you\'re afraid.'
                },
                excited: {
                    emoji: '🤩',
                    name: 'Excited',
                    description: 'feeling very happy and energetic about something',
                    situations: ['You\'re going to the amusement park', 'It\'s Christmas morning', 'Your best friend is coming over'],
                    tips: 'When you\'re excited, you might feel bouncy and want to jump around!'
                },
                confused: {
                    emoji: '😕',
                    name: 'Confused',
                    description: 'feeling puzzled or not understanding something',
                    situations: ['You don\'t understand your homework', 'Someone told you a riddle', 'You got lost in a new place'],
                    tips: 'It\'s okay to feel confused. Asking questions helps you understand better.'
                },
                proud: {
                    emoji: '😌',
                    name: 'Proud',
                    description: 'feeling good about something you accomplished',
                    situations: ['You helped someone in need', 'You learned to ride a bike', 'You finished a difficult puzzle'],
                    tips: 'Feeling proud of your achievements is wonderful! It shows you worked hard.'
                }
            },
            tr: {
                happy: {
                    emoji: '😊',
                    name: 'Mutlu',
                    description: 'neşeli, memnun veya keyifli hissetmek',
                    situations: ['Doğum günün!', 'Sınavından A+ aldın!', 'Arkadaşın oyuncağını seninle paylaştı!'],
                    tips: 'Mutlu hissettiğinde ağzın gülümser ve gözlerin parlar!'
                },
                sad: {
                    emoji: '😢',
                    name: 'Üzgün',
                    description: 'mutsuz, kederli veya hayal kırıklığına uğramış hissetmek',
                    situations: ['Evcil hayvanın hasta', 'En sevdiğin oyuncağını kaybettin', 'Yağmur yağıyor ve dışarıda oyun oynayamıyorsun'],
                    tips: 'Üzgün hissettiğinde ağlamak normal. Güvendiğin biriyle konuşmak daha iyi hissetmeni sağlar.'
                },
                angry: {
                    emoji: '😠',
                    name: 'Kızgın',
                    description: 'öfkeli, sinirli veya rahatsız hissetmek',
                    situations: ['Birisi sıranı aldı', 'Kardeşin projenı bozdu', 'Yapmadığın bir şey için suçlandın'],
                    tips: 'Kızgın hissettiğinde derin nefes al ve ona kadar say. Kelimeler kullanmak önemli, yumruklar değil.'
                },
                surprised: {
                    emoji: '😲',
                    name: 'Şaşırmış',
                    description: 'beklenmedik bir şey karşısında hayret veya şok hissetmek',
                    situations: ['Birisi çıkıp seni korkuttu', 'Yatağının altında hediye buldun', 'Öğretmenin gezi duyurdu'],
                    tips: 'Sürprizler iyi veya kötü olabilir. Şaşırdığında gözlerin büyür ve ağzın açılabilir.'
                },
                scared: {
                    emoji: '😨',
                    name: 'Korkmuş',
                    description: 'bir şeyden korkmuş veya endişeli hissetmek',
                    situations: ['Gürültülü bir fırtına var', 'Korku filmi izliyorsun', 'Konuşma yapman gerekiyor'],
                    tips: 'Herkes bazen korkar. Korktuğunda yardım istemek cesurca bir davranıştır.'
                },
                excited: {
                    emoji: '🤩',
                    name: 'Heyecanlı',
                    description: 'bir şey hakkında çok mutlu ve enerjik hissetmek',
                    situations: ['Lunaparka gidiyorsun', 'Noel sabahı', 'En iyi arkadaşın geliyor'],
                    tips: 'Heyecanlı olduğunda zıplamak isteyebilir ve çok enerjik hissedebilirsin!'
                },
                confused: {
                    emoji: '😕',
                    name: 'Şaşkın',
                    description: 'kafası karışmış veya bir şeyi anlamamış hissetmek',
                    situations: ['Ödevini anlamıyorsun', 'Birisi sana bilmece sordu', 'Yeni bir yerde kayboldin'],
                    tips: 'Şaşkın hissetmek normal. Soru sormak daha iyi anlamamı sağlar.'
                },
                proud: {
                    emoji: '😌',
                    name: 'Gururlu',
                    description: 'başardığın bir şey hakkında iyi hissetmek',
                    situations: ['İhtiyacı olan birine yardım ettin', 'Bisiklet sürmeyi öğrendin', 'Zor bir yapbozu tamamladın'],
                    tips: 'Başarılarınla gurur duymak harika! Bu çok çalıştığını gösterir.'
                }
            },
            lt: {
                happy: {
                    emoji: '😊',
                    name: 'Laimingas',
                    description: 'Jaučiant džiaugsmą, pasitenkinimą ar malonumą.',
                    situations: ['Tavo gimtadienis!', 'Gavai puikų pažymį!', 'Draugas pasidalijo savo žaislu!'],
                    tips: 'Kai jautiesi laimingas, tavo burnos kampučiai pakyla ir akys gali spindėti!'
                },
                sad: {
                    emoji: '😢',
                    name: 'Liūdnas',
                    description: 'jaučia nelaimingas, nuliūdęs ar nusivylęs žmogus.',
                    situations: ['Tavo gyvūnėlis serga', 'Praradai mėgstamiausią žaislą', 'Lyja ir negali žaisti lauke'],
                    tips: 'Kai jautiesi liūdnas, verkti yra normalu. Kalbėjimas su patikimu žmogumi gali padėti jaustis geriau.'
                },
                angry: {
                    emoji: '😠',
                    name: 'Piktas',
                    description: 'jaučiantis supykęs, susierzinęs ar nusivylęs',
                    situations: ['Kažkas paėmė tavo eilę', 'Brolis ar sesuo sugadino tavo projektą', 'Buvai apkaltintas kuo nors, ko nedarei'],
                    tips: 'Kai jautiesi piktas, giliai kvėpuok ir suskaičiuok iki dešimties. Svarbu naudoti žodžius, o ne kumščius.'
                },
                surprised: {
                    emoji: '😲',
                    name: 'Nustebęs',
                    description: 'jaučiantis stebimasis ar šokiruotas dėl ko nors netikėto',
                    situations: ['Kažkas iššoko ir išgąsdino', 'Radai dovaną po lova', 'Mokytojas paskelbė ekskursiją'],
                    tips: 'Staigmenos gali būti geros ar blogos. Nustebęs tavo akys išsiplečia ir burna gali atsidaryt.'
                },
                scared: {
                    emoji: '😨',
                    name: 'Išsigandęs',
                    description: 'Jaučiasi išsigandęs ar susirūpinęs dėl ko nors',
                    situations: ['Yra garsus perkūnas', 'Žiūri baisų filmą', 'Turi pasakyti kalbą'],
                    tips: 'Visi kartais bijo. Normalu prašyti pagalbos, kai bijai.'
                },
                excited: {
                    emoji: '🤩',
                    name: 'Susijaudinęs',
                    description: 'jaučiantis labai laimingas ir energingas dėl ko nors',
                    situations: ['Vyksti į pramogų parką', 'Kalėdų rytas', 'Ateina geriausias draugas'],
                    tips: 'Kai esi susijaudinęs, gali jaustis šokinėjantis ir norėti šuoliuoti!'
                },
                confused: {
                    emoji: '😕',
                    name: 'Sutrikęs',
                    description: 'jaučiantis suglumęs ar nesuprantantis ko nors',
                    situations: ['Nesupranti namų darbų', 'Kažkas pasakė mįslę', 'Pasiklydai naujoje vietoje'],
                    tips: 'Jaustis sutrikusiam yra normalu. Klausimų užduoti padeda geriau suprasti.'
                },
                proud: {
                    emoji: '😌',
                    name: 'Didžiuojantis',
                    description: 'jaučiantis gerai dėl ko nors, ką pasiekei',
                    situations: ['Padėjai kam nors, kam reikėjo pagalbos', 'Išmokai važiuoti dviračiu', 'Baigei sunkų dėlionę'],
                    tips: 'Didžiuotis savo pasiekimais yra nuostabu! Tai rodo, kad sunkiai dirbai.'
                }
            },
            nl: {
                happy: {
                    emoji: '😊',
                    name: 'Blij',
                    description: 'zich vreugdevol, tevreden of verheugd voelen',
                    situations: ['Het is je verjaardag!', 'Je hebt een A+ voor je toets!', 'Je vriend deelde zijn speelgoed met je!'],
                    tips: 'Als je blij bent, gaat je mond omhoog in een glimlach en kunnen je ogen fonkelen!'
                },
                sad: {
                    emoji: '😢',
                    name: 'Verdrietig',
                    description: 'zich ongelukkig, bedroefd of teleurgesteld voelen',
                    situations: ['Je huisdier is ziek', 'Je verloor je favoriete speelgoed', 'Het regent en je kunt niet buiten spelen'],
                    tips: 'Als je verdrietig bent, is het oké om te huilen. Praten met iemand die je vertrouwt kan helpen je beter te voelen.'
                },
                angry: {
                    emoji: '😠',
                    name: 'Boos',
                    description: 'zich kwaad, overstuur of gefrustreerd voelen',
                    situations: ['Iemand nam je beurt', 'Je broer of zus maakte je project kapot', 'Je werd beschuldigd van iets wat je niet deed'],
                    tips: 'Als je boos bent, adem diep en tel tot tien. Het is belangrijk om woorden te gebruiken, geen vuisten.'
                },
                surprised: {
                    emoji: '😲',
                    name: 'Verrast',
                    description: 'zich verbaasd of geschokt voelen door iets onverwachts',
                    situations: ['Iemand sprong naar voren en maakte je bang', 'Je vond een cadeau onder je bed', 'Je leraar kondigde een schoolreisje aan'],
                    tips: 'Verrassingen kunnen goed of slecht zijn. Je ogen worden groot en je mond kan openvallen als je verrast bent.'
                },
                scared: {
                    emoji: '😨',
                    name: 'Bang',
                    description: 'zich angstig of bezorgd voelen over iets',
                    situations: ['Er is een luide onweersbui', 'Je kijkt naar een enge film', 'Je moet een toespraak houden'],
                    tips: 'Iedereen is soms bang. Het is moedig om hulp te vragen als je bang bent.'
                },
                excited: {
                    emoji: '🤩',
                    name: 'Opgewonden',
                    description: 'zich heel blij en energiek voelen over iets',
                    situations: ['Je gaat naar het pretpark', 'Het is kerst ochtend', 'Je beste vriend komt langs'],
                    tips: 'Als je opgewonden bent, voel je je misschien springerig en wil je rond springen!'
                },
                confused: {
                    emoji: '😕',
                    name: 'Verward',
                    description: 'zich puzzled of niet begrijpend voelen over iets',
                    situations: ['Je begrijpt je huiswerk niet', 'Iemand vertelde je een raadsel', 'Je verdwaalde op een nieuwe plek'],
                    tips: 'Het is oké om verward te voelen. Vragen stellen helpt je beter te begrijpen.'
                },
                proud: {
                    emoji: '😌',
                    name: 'Trots',
                    description: 'zich goed voelen over iets wat je hebt bereikt',
                    situations: ['Je hielp iemand in nood', 'Je leerde fietsen', 'Je voltooide een moeilijke puzzel'],
                    tips: 'Trots zijn op je prestaties is geweldig! Het toont dat je hard hebt gewerkt.'
                }
            },
            pl: {
                happy: {
                    emoji: '😊',
                    name: 'Szczęśliwy',
                    description: 'czującą się radosną, zadowoloną lub zachwycona',
                    situations: ['To twoje urodziny!', 'Dostałeś celującą z testu!', 'Twój przyjaciel podzielił się zabawką!'],
                    tips: 'Kiedy jesteś szczęśliwy, twoje usta unoszą się w uśmiechu i oczy mogą błyszczeć!'
                },
                sad: {
                    emoji: '😢',
                    name: 'Smutny',
                    description: 'czującą się nieszczęśliwie, żałośnie lub rozczarowante',
                    situations: ['Twoje zwierzątko jest chore', 'Zgubiłeś ulubioną zabawkę', 'Pada deszcz i nie możesz bawić się na zewnątrz'],
                    tips: 'Kiedy jesteś smutny, płakanie jest w porządku. Rozmowa z kimś, komu ufasz, może pomóc ci poczuć się lepiej.'
                },
                angry: {
                    emoji: '😠',
                    name: 'Zły',
                    description: 'czującą się wściekły, zdenerwowany lub sfrustrowany',
                    situations: ['Ktoś wziął twoją kolejkę', 'Twoje rodzeństwo zniszczyło twój projekt', 'Zostałeś oskarżony o coś, czego nie zrobiłeś'],
                    tips: 'Kiedy jesteś zły, weź głęboki oddech i policz do dziesięciu. Ważne jest używanie słów, a nie pięści.'
                },
                surprised: {
                    emoji: '😲',
                    name: 'Zaskoczony',
                    description: 'czującą się zdumiona lub wstrząśnięta czymś niespodziewanym',
                    situations: ['Ktoś wyskoczył i cię przestraszył', 'Znalazłeś prezent pod łóżkiem', 'Twój nauczyciel ogłosił wycieczkę'],
                    tips: 'Niespodzianki mogą być dobre lub złe. Twoje oczy się rozszerzają i usta mogą się otworzyć, gdy jesteś zaskoczony.'
                },
                scared: {
                    emoji: '😨',
                    name: 'Przestraszony',
                    description: 'czującą się przestraszona lub zmartwiona o coś',
                    situations: ['Jest głośna burza', 'Oglądasz straszny film', 'Musisz wygłosić przemówienie'],
                    tips: 'Każdy czasami się boi. To odważne prosić o pomoc, gdy się boisz.'
                },
                excited: {
                    emoji: '🤩',
                    name: 'Podekscytowany',
                    description: 'czującą się bardzo szczęśliwy i energiczny o coś',
                    situations: ['Idziesz do parku rozrywki', 'To poranek Bożego Narodzenia', 'Twój najlepszy przyjaciel przychodzi'],
                    tips: 'Kiedy jesteś podekscytowany, możesz czuć się energicznie i chcieć skakać!'
                },
                confused: {
                    emoji: '😕',
                    name: 'Zdezorientowany',
                    description: 'czującą się zagubiona lub nie rozumiejąca czegoś',
                    situations: ['Nie rozumiesz swojej pracy domowej', 'Ktoś powiedział ci zagadkę', 'Zgubiłeś się w nowym miejscu'],
                    tips: 'To w porządku czuć się zdezorientowanym. Zadawanie pytań pomaga lepiej zrozumieć.'
                },
                proud: {
                    emoji: '😌',
                    name: 'Dumny',
                    description: 'czującą się dobrze z powodu czegoś, co osiągnąłeś',
                    situations: ['Pomogłeś komuś w potrzebie', 'Nauczyłeś się jeździć na rowerze', 'Ukończyłeś trudną układankę'],
                    tips: 'Bycie dumnym ze swoich osiągnięć jest wspaniałe! To pokazuje, że ciężko pracowałeś.'
                }
            }
        };
    }

    initializeSituations() {
        return {
            en: [
                {
                    image: '🎂',
                    description: 'It\'s your birthday and your friends threw you a surprise party!',
                    correctEmotion: 'happy',
                    emotions: ['happy', 'surprised', 'excited']
                },
                {
                    image: '🌧️',
                    description: 'It\'s raining and you can\'t go to the playground like you planned.',
                    correctEmotion: 'sad',
                    emotions: ['sad', 'angry', 'disappointed']
                },
                {
                    image: '🎢',
                    description: 'You\'re about to go on the biggest roller coaster for the first time!',
                    correctEmotion: 'excited',
                    emotions: ['excited', 'scared', 'nervous']
                },
                {
                    image: '🏆',
                    description: 'You won first place in the school science fair!',
                    correctEmotion: 'proud',
                    emotions: ['proud', 'happy', 'excited']
                },
                {
                    image: '👻',
                    description: 'You hear strange noises in your room at night.',
                    correctEmotion: 'scared',
                    emotions: ['scared', 'worried', 'confused']
                },
                {
                    image: '🧩',
                    description: 'You\'re trying to solve a very difficult math problem.',
                    correctEmotion: 'confused',
                    emotions: ['confused', 'frustrated', 'determined']
                },
                {
                    image: '😤',
                    description: 'Someone cut in line in front of you at lunch.',
                    correctEmotion: 'angry',
                    emotions: ['angry', 'frustrated', 'upset']
                },
                {
                    image: '🎁',
                    description: 'You opened a present and found exactly what you wanted!',
                    correctEmotion: 'happy',
                    emotions: ['happy', 'surprised', 'grateful']
                }
            ],
            tr: [
                {
                    image: '🎂',
                    description: 'Doğum günün ve arkadaşların sana sürpriz parti yaptı!',
                    correctEmotion: 'happy',
                    emotions: ['happy', 'surprised', 'excited']
                },
                {
                    image: '🌧️',
                    description: 'Yağmur yağıyor ve planladığın gibi parka gidemiyorsun.',
                    correctEmotion: 'sad',
                    emotions: ['sad', 'angry', 'disappointed']
                },
                {
                    image: '🎢',
                    description: 'En büyük hız trenine ilk kez binmek üzeresin!',
                    correctEmotion: 'excited',
                    emotions: ['excited', 'scared', 'nervous']
                },
                {
                    image: '🏆',
                    description: 'Okul bilim fuarında birinci oldun!',
                    correctEmotion: 'proud',
                    emotions: ['proud', 'happy', 'excited']
                },
                {
                    image: '👻',
                    description: 'Gece odanda garip sesler duyuyorsun.',
                    correctEmotion: 'scared',
                    emotions: ['scared', 'worried', 'confused']
                },
                {
                    image: '🧩',
                    description: 'Çok zor bir matematik problemini çözmeye çalışıyorsun.',
                    correctEmotion: 'confused',
                    emotions: ['confused', 'frustrated', 'determined']
                },
                {
                    image: '😤',
                    description: 'Birisi öğle yemeği sırasında önüne geçti.',
                    correctEmotion: 'angry',
                    emotions: ['angry', 'frustrated', 'upset']
                },
                {
                    image: '🎁',
                    description: 'Hediyeni açtın ve tam istediğin şeyi buldun!',
                    correctEmotion: 'happy',
                    emotions: ['happy', 'surprised', 'grateful']
                }
            ],
            lt: [
                {
                    image: '🎂',
                    description: 'Tavo gimtadienis ir draugai surengė tau staigmeną!',
                    correctEmotion: 'happy',
                    emotions: ['happy', 'surprised', 'excited']
                },
                {
                    image: '🌧️',
                    description: 'Lyja ir negali eiti į žaidimų aikštelę kaip planavai.',
                    correctEmotion: 'sad',
                    emotions: ['sad', 'angry', 'disappointed']
                },
                {
                    image: '🎢',
                    description: 'Ruošiesi pirmą kartą važiuoti didžiausiu atrakcionu!',
                    correctEmotion: 'excited',
                    emotions: ['excited', 'scared', 'nervous']
                },
                {
                    image: '🏆',
                    description: 'Laimėjai pirmą vietą mokyklos mokslo mugėje!',
                    correctEmotion: 'proud',
                    emotions: ['proud', 'happy', 'excited']
                },
                {
                    image: '👻',
                    description: 'Naktį savo kambaryje girdi keistus garsus.',
                    correctEmotion: 'scared',
                    emotions: ['scared', 'worried', 'confused']
                },
                {
                    image: '🧩',
                    description: 'Bandai išspręsti labai sunkią matematikos problemą.',
                    correctEmotion: 'confused',
                    emotions: ['confused', 'frustrated', 'determined']
                },
                {
                    image: '😤',
                    description: 'Kažkas įsikišo prieš tave pietų eilėje.',
                    correctEmotion: 'angry',
                    emotions: ['angry', 'frustrated', 'upset']
                },
                {
                    image: '🎁',
                    description: 'Atidarei dovaną ir radai tiksliai tai, ko norėjai!',
                    correctEmotion: 'happy',
                    emotions: ['happy', 'surprised', 'grateful']
                }
            ],
            nl: [
                {
                    image: '🎂',
                    description: 'Het is je verjaardag en je vrienden hebben een verrassingsfeestje voor je georganiseerd!',
                    correctEmotion: 'happy',
                    emotions: ['happy', 'surprised', 'excited']
                },
                {
                    image: '🌧️',
                    description: 'Het regent en je kunt niet naar de speeltuin zoals gepland.',
                    correctEmotion: 'sad',
                    emotions: ['sad', 'angry', 'disappointed']
                },
                {
                    image: '🎢',
                    description: 'Je gaat voor het eerst in de grootste achtbaan!',
                    correctEmotion: 'excited',
                    emotions: ['excited', 'scared', 'nervous']
                },
                {
                    image: '🏆',
                    description: 'Je won de eerste plaats op de school wetenschapsbeurs!',
                    correctEmotion: 'proud',
                    emotions: ['proud', 'happy', 'excited']
                },
                {
                    image: '👻',
                    description: 'Je hoort \'s nachts vreemde geluiden in je kamer.',
                    correctEmotion: 'scared',
                    emotions: ['scared', 'worried', 'confused']
                },
                {
                    image: '🧩',
                    description: 'Je probeert een heel moeilijk wiskundeprobleem op te lossen.',
                    correctEmotion: 'confused',
                    emotions: ['confused', 'frustrated', 'determined']
                },
                {
                    image: '😤',
                    description: 'Iemand drong voor je in de rij bij de lunch.',
                    correctEmotion: 'angry',
                    emotions: ['angry', 'frustrated', 'upset']
                },
                {
                    image: '🎁',
                    description: 'Je opende een cadeau en vond precies wat je wilde!',
                    correctEmotion: 'happy',
                    emotions: ['happy', 'surprised', 'grateful']
                }
            ],
            pl: [
                {
                    image: '🎂',
                    description: 'Masz urodziny i twoi przyjaciele zrobili ci przyjęcie niespodziankę!',
                    correctEmotion: 'happy',
                    emotions: ['happy', 'surprised', 'excited']
                },
                {
                    image: '🌧️',
                    description: 'Pada deszcz i nie możesz iść na plac zabaw jak planowałeś.',
                    correctEmotion: 'sad',
                    emotions: ['sad', 'angry', 'disappointed']
                },
                {
                    image: '🎢',
                    description: 'Masz jechać na największej kolejce górskiej po raz pierwszy!',
                    correctEmotion: 'excited',
                    emotions: ['excited', 'scared', 'nervous']
                },
                {
                    image: '🏆',
                    description: 'Wygrałeś pierwsze miejsce w szkolnych targach naukowych!',
                    correctEmotion: 'proud',
                    emotions: ['proud', 'happy', 'excited']
                },
                {
                    image: '👻',
                    description: 'W nocy słyszysz dziwne dźwięki w swoim pokoju.',
                    correctEmotion: 'scared',
                    emotions: ['scared', 'worried', 'confused']
                },
                {
                    image: '🧩',
                    description: 'Próbujesz rozwiązać bardzo trudny problem matematyczny.',
                    correctEmotion: 'confused',
                    emotions: ['confused', 'frustrated', 'determined']
                },
                {
                    image: '😤',
                    description: 'Ktoś wcisnął się przed ciebie w kolejce na lunch.',
                    correctEmotion: 'angry',
                    emotions: ['angry', 'frustrated', 'upset']
                },
                {
                    image: '🎁',
                    description: 'Otworzyłeś prezent i znalazłeś dokładnie to, czego chciałeś!',
                    correctEmotion: 'happy',
                    emotions: ['happy', 'surprised', 'grateful']
                }
            ]
        };
    }

    initializeScenarios() {
        return {
            en: [
                {
                    character: '👦',
                    name: 'Alex',
                    situation: 'Alex just moved to a new school and doesn\'t know anyone. It\'s lunchtime and Alex is sitting alone.',
                    emotion: 'lonely',
                    question: 'How do you think Alex feels?',
                    options: ['Lonely and nervous', 'Excited to meet new people', 'Angry at having to move'],
                    correctIndex: 0,
                    strategies: [
                        'Ask a teacher to help introduce Alex to other students',
                        'Invite Alex to sit with you at lunch',
                        'Show Alex around the school',
                        'Include Alex in playground games'
                    ]
                }
            ],
            tr: [
                {
                    character: '�',
                    name: 'Ali',
                    situation: 'Ali yeni bir okula taşındı ve kimseyi tanımıyor. Öğle yemeği zamanı ve Ali tek başına oturuyor.',
                    emotion: 'lonely',
                    question: 'Ali nasıl hissediyor?',
                    options: ['Yalnız ve gergin', 'Yeni insanlarla tanışmaktan heyecanlı', 'Taşınmak zorunda kaldığı için kızgın'],
                    correctIndex: 0,
                    strategies: [
                        'Öğretmenden Ali\'yi diğer öğrencilerle tanıştırmasını iste',
                        'Ali\'yi öğle yemeğinde seninle oturmaya davet et',
                        'Ali\'ye okulu gezdirin',
                        'Ali\'yi oyun alanı oyunlarına dahil et'
                    ]
                }
            ],
            lt: [
                {
                    character: '👦',
                    name: 'Aleksas',
                    situation: 'Aleksas ką tik persikėlė į naują mokyklą ir nepažįsta nė vieno. Pietų metas ir Aleksas sėdi vienas.',
                    emotion: 'lonely',
                    question: 'Kaip manote, Aleksas jaučiasi?',
                    options: ['Vienišas ir nervuojasi', 'Susijaudinęs susipažinti su naujais žmonėmis', 'Piktas dėl to, kad teko kraustytis'],
                    correctIndex: 0,
                    strategies: [
                        'Paprašyk mokytojo padėti supažindinti Aleksą su kitais mokiniais',
                        'Pakvieskite Aleksą pietų metu atsisėsti su jumis',
                        'Parodyk Aleksui mokyklą',
                        'Įtraukite Aleksą į žaidimų aikštelės žaidimus'
                    ]
                }
            ],
            nl: [
                {
                    character: '👦',
                    name: 'Alex',
                    situation: 'Alex is net verhuisd naar een nieuwe school en kent niemand. Het is lunchtijd en Alex zit alleen.',
                    emotion: 'lonely',
                    question: 'Hoe denk je dat Alex zich voelt?',
                    options: ['Eenzaam en nerveus', 'Opgewonden om nieuwe mensen te ontmoeten', 'Boos dat hij moest verhuizen'],
                    correctIndex: 0,
                    strategies: [
                        'Vraag een leraar om Alex voor te stellen aan andere leerlingen',
                        'Nodig Alex uit om bij jou te komen zitten tijdens de lunch',
                        'Laat Alex de school zien',
                        'Betrek Alex bij speelplaatsspellen'
                    ]
                }
            ],
            pl: [
                {
                    character: '�',
                    name: 'Alek',
                    situation: 'Alek właśnie przeniósł się do nowej szkoły i nikogo nie zna. Jest pora lunchu i Alek siedzi sam.',
                    emotion: 'lonely',
                    question: 'Jak myślisz, co czuje Alek?',
                    options: ['Samotny i zdenerwowany', 'Podekscytowany poznaniem nowych ludzi', 'Zły na to, że musiał się przeprowadzić'],
                    correctIndex: 0,
                    strategies: [
                        'Poproś nauczyciela o pomoc w przedstawieniu Alka innym uczniom',
                        'Zaproś Alka, żeby usiadł z tobą na lunch',
                        'Pokaż Alkowi szkołę',
                        'Włącz Alka do gier na placu zabaw'
                    ]
                }
            ]
        };
    }

    initializeGame() {
        this.loadLanguage(this.currentLanguage);
        this.updateDisplay();
        this.startRecognitionPhase();
    }

    setupEventListeners() {
        // Language selector
        document.getElementById('language-select').addEventListener('change', (e) => {
            this.changeLanguage(e.target.value);
        });
        
        // Control buttons
        document.getElementById('hint-btn').addEventListener('click', () => this.showHint());
        document.getElementById('skip-btn').addEventListener('click', () => this.skipQuestion());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartGame());
        
        // Modal buttons
        document.getElementById('continue-feedback').addEventListener('click', () => this.hideFeedback());
        document.getElementById('next-level-btn').addEventListener('click', () => this.nextLevel());
        document.getElementById('replay-btn').addEventListener('click', () => this.restartGame());
        document.getElementById('share-feeling').addEventListener('click', () => this.shareFeelings());
    }

    changeLanguage(langCode) {
        this.currentLanguage = langCode;
        this.loadLanguage(langCode);
        // Restart current phase to apply language changes
        if (this.currentPhase === 'recognition') {
            this.loadRecognitionQuestion();
        } else if (this.currentPhase === 'reflection') {
            this.loadReflectionQuestion();
        } else if (this.currentPhase === 'scenario') {
            this.loadScenarioQuestion();
        }
    }

    loadLanguage(langCode) {
        const t = this.translations[langCode];
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (t[key]) {
                element.textContent = t[key];
            }
        });
        
        // Handle placeholder translation
        const textareas = document.querySelectorAll('[data-translate-placeholder]');
        textareas.forEach(textarea => {
            const key = textarea.getAttribute('data-translate-placeholder');
            if (t[key]) {
                textarea.placeholder = t[key];
            }
        });
    }

    translate(key, replacements = {}) {
        let text = this.translations[this.currentLanguage][key] || key;
        Object.keys(replacements).forEach(placeholder => {
            text = text.replace(`{${placeholder}}`, replacements[placeholder]);
        });
        return text;
    }

    // Phase 1: Emotion Recognition
    startRecognitionPhase() {
        this.currentPhase = 'recognition';
        this.currentQuestionIndex = 0;
        this.showPhase('recognition-phase');
        this.loadRecognitionQuestion();
    }

    loadRecognitionQuestion() {
        const emotionKeys = Object.keys(this.emotions[this.currentLanguage]);
        const currentEmotion = emotionKeys[this.currentQuestionIndex % emotionKeys.length];
        const emotion = this.emotions[this.currentLanguage][currentEmotion];
        
        // Display emotion face
        document.getElementById('emotion-face').textContent = emotion.emoji;
        
        // Show situation context
        const situationIndex = Math.floor(Math.random() * emotion.situations.length);
        document.getElementById('situation-context').textContent = emotion.situations[situationIndex];
        
        // Create options (correct answer + 3 random wrong answers)
        const allEmotionNames = Object.values(this.emotions[this.currentLanguage]).map(e => e.name);
        const wrongOptions = allEmotionNames.filter(name => name !== emotion.name);
        const shuffledWrong = this.shuffleArray(wrongOptions).slice(0, 3);
        const options = [emotion.name, ...shuffledWrong];
        const shuffledOptions = this.shuffleArray(options);
        
        this.displayEmotionOptions(shuffledOptions, emotion.name, currentEmotion);
        this.updateProgress();
    }

    displayEmotionOptions(options, correctAnswer, emotionKey) {
        const container = document.getElementById('emotion-options');
        container.innerHTML = '';
        
        options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'emotion-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => this.handleEmotionAnswer(option, correctAnswer, emotionKey));
            container.appendChild(btn);
        });
    }

    handleEmotionAnswer(selected, correct, emotionKey) {
        const buttons = document.querySelectorAll('.emotion-btn');
        buttons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === correct) {
                btn.classList.add('correct');
            } else if (btn.textContent === selected && selected !== correct) {
                btn.classList.add('incorrect');
            }
        });
        
        const isCorrect = selected === correct;
        if (isCorrect) {
            this.playerScore += 10;
            this.streakCount++;
            this.learnedEmotions.add(emotionKey);
        } else {
            this.streakCount = 0;
        }
        
        this.updateDisplay();
        
        setTimeout(() => {
            this.showFeedback(isCorrect, this.emotions[this.currentLanguage][emotionKey]);
        }, 1500);
    }

    // Phase 2: Personal Reflection
    startReflectionPhase() {
        this.currentPhase = 'reflection';
        this.currentQuestionIndex = 0;
        this.showPhase('reflection-phase');
        this.loadReflectionQuestion();
    }

    loadReflectionQuestion() {
        const situation = this.situations[this.currentLanguage][this.currentQuestionIndex % this.situations[this.currentLanguage].length];
        
        document.getElementById('situation-image').textContent = situation.image;
        document.getElementById('situation-description').textContent = situation.description;
        document.getElementById('reflection-prompt').textContent = this.translate('reflection_subtitle');
        
        this.displayReflectionOptions(situation.emotions);
    }

    displayReflectionOptions(emotions) {
        const container = document.getElementById('reflection-options');
        container.innerHTML = '';
        
        emotions.forEach(emotion => {
            const btn = document.createElement('button');
            btn.className = 'reflection-btn';
            btn.textContent = this.capitalizeFirst(this.emotions[this.currentLanguage][emotion]?.name || emotion);
            btn.addEventListener('click', () => this.selectReflectionEmotion(btn, emotion));
            container.appendChild(btn);
        });
    }

    selectReflectionEmotion(button, emotion) {
        // Remove selection from other buttons
        document.querySelectorAll('.reflection-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Select this button
        button.classList.add('selected');
        this.selectedReflectionEmotion = emotion;
    }

    shareFeelings() {
        const description = document.getElementById('feeling-description').value.trim();
        
        if (!this.selectedReflectionEmotion) {
            alert(this.translate('select_emotion_first'));
            return;
        }
        
        // Award points for sharing
        this.playerScore += 15;
        if (description.length > 10) {
            this.playerScore += 10; // Bonus for detailed response
        }
        
        this.updateDisplay();
        
        this.showFeedback(true, {
            name: this.capitalizeFirst(this.selectedReflectionEmotion),
            description: this.translate('thank_you_sharing'),
            tips: this.translate('understanding_emotions')
        });
        
        // Clear inputs
        document.getElementById('feeling-description').value = '';
        document.querySelectorAll('.reflection-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        setTimeout(() => {
            this.nextReflectionQuestion();
        }, 3000);
    }

    nextReflectionQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex >= this.questionsPerPhase) {
            this.startScenarioPhase();
        } else {
            this.loadReflectionQuestion();
        }
    }

    // Phase 3: Emotion Scenarios
    startScenarioPhase() {
        this.currentPhase = 'scenario';
        this.currentQuestionIndex = 0;
        this.showPhase('scenario-phase');
        this.loadScenarioQuestion();
    }

    loadScenarioQuestion() {
        const scenario = this.scenarios[this.currentLanguage][this.currentQuestionIndex % this.scenarios[this.currentLanguage].length];
        
        document.getElementById('scenario-character').textContent = scenario.character;
        document.getElementById('scenario-text').textContent = scenario.situation;
        document.getElementById('scenario-question-text').textContent = scenario.question;
        
        this.displayScenarioOptions(scenario.options, scenario.correctIndex, scenario);
        document.getElementById('coping-strategies').classList.remove('active');
    }

    displayScenarioOptions(options, correctIndex, scenario) {
        const container = document.getElementById('scenario-options');
        container.innerHTML = '';
        
        options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'scenario-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => this.handleScenarioAnswer(index, correctIndex, scenario));
            container.appendChild(btn);
        });
    }

    handleScenarioAnswer(selectedIndex, correctIndex, scenario) {
        const buttons = document.querySelectorAll('.scenario-btn');
        buttons.forEach(btn => btn.disabled = true);
        
        const isCorrect = selectedIndex === correctIndex;
        if (isCorrect) {
            this.playerScore += 20;
            this.streakCount++;
        } else {
            this.streakCount = 0;
        }
        
        this.updateDisplay();
        
        // Show coping strategies
        this.displayCopingStrategies(scenario.strategies, scenario.name);
        
        setTimeout(() => {
            this.showFeedback(isCorrect, {
                name: this.translate('feels_understood', { name: scenario.name }),
                description: isCorrect ? this.translate('recognized_correctly') : this.translate('emotions_valid'),
                tips: this.translate('helping_others')
            });
        }, 2000);
    }

    displayCopingStrategies(strategies, characterName) {
        const container = document.getElementById('strategy-options');
        container.innerHTML = '';
        
        // Update the title with character name
        const title = document.querySelector('[data-translate="coping_strategies"]');
        if (title) {
            title.textContent = this.translate('coping_strategies', { name: characterName });
        }
        
        strategies.forEach(strategy => {
            const btn = document.createElement('button');
            btn.className = 'strategy-btn';
            btn.textContent = strategy;
            btn.addEventListener('click', () => this.selectStrategy(btn));
            container.appendChild(btn);
        });
        
        document.getElementById('coping-strategies').classList.add('active');
    }

    selectStrategy(button) {
        // Award points for selecting a strategy
        this.playerScore += 5;
        this.updateDisplay();
        
        button.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
        button.style.color = '#8B4513';
        button.disabled = true;
        
        setTimeout(() => {
            this.nextScenarioQuestion();
        }, 1500);
    }

    nextScenarioQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex >= this.questionsPerPhase) {
            this.showResults();
        } else {
            this.loadScenarioQuestion();
        }
    }

    // Utility Methods
    showPhase(phaseId) {
        document.querySelectorAll('.game-phase').forEach(phase => {
            phase.classList.remove('active');
        });
        document.getElementById(phaseId).classList.add('active');
    }

    showFeedback(isCorrect, emotion) {
        const modal = document.getElementById('feedback-modal');
        const title = document.getElementById('feedback-title');
        const text = document.getElementById('feedback-text');
        const tip = document.getElementById('feedback-tip');
        
        title.textContent = isCorrect ? this.translate('great_choice') : this.translate('good_try');
        text.textContent = emotion.description;
        tip.innerHTML = `💡 <em>${emotion.tips}</em>`;
        
        modal.style.display = 'block';
    }

    hideFeedback() {
        document.getElementById('feedback-modal').style.display = 'none';
        
        if (this.currentPhase === 'recognition') {
            this.nextRecognitionQuestion();
        } else if (this.currentPhase === 'scenario') {
            // Scenario phase continues after strategy selection
        }
    }

    nextRecognitionQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex >= this.questionsPerPhase) {
            this.startReflectionPhase();
        } else {
            this.loadRecognitionQuestion();
        }
    }

    showResults() {
        const modal = document.getElementById('results-modal');
        const title = document.getElementById('results-title');
        const score = document.getElementById('results-score');
        const encouragement = document.getElementById('encouragement-text');
        const learnedContainer = document.getElementById('learned-emotions');
        
        const maxScore = (this.questionsPerPhase * 10) + (this.questionsPerPhase * 25) + (this.questionsPerPhase * 25);
        const percentage = Math.round((this.playerScore / maxScore) * 100);
        
        title.textContent = percentage >= 80 ? this.translate('outstanding') : 
                           percentage >= 60 ? this.translate('great_job') : 
                           this.translate('good_effort');
        score.textContent = `${this.translate('score_label')} ${this.playerScore} (${percentage}%)`;
        
        // Display learned emotions
        learnedContainer.innerHTML = '';
        this.learnedEmotions.forEach(emotionKey => {
            const emotion = this.emotions[this.currentLanguage][emotionKey];
            if (emotion) {
                const div = document.createElement('div');
                div.className = 'learned-emotion';
                div.innerHTML = `${emotion.emoji}<br>${emotion.name}`;
                learnedContainer.appendChild(div);
            }
        });
        
        // Encouragement message
        const encouragementKeys = ['encouragement_1', 'encouragement_2', 'encouragement_3', 'encouragement_4'];
        const randomKey = encouragementKeys[Math.floor(Math.random() * encouragementKeys.length)];
        encouragement.textContent = this.translate(randomKey);
        
        modal.style.display = 'block';
    }

    showHint() {
        if (this.currentPhase === 'recognition') {
            const emotionKeys = Object.keys(this.emotions[this.currentLanguage]);
            const currentEmotion = emotionKeys[this.currentQuestionIndex % emotionKeys.length];
            const emotion = this.emotions[this.currentLanguage][currentEmotion];
            alert(this.translate('hint_emotion', { description: emotion.description }));
        } else {
            alert(this.translate('hint_general'));
        }
    }

    skipQuestion() {
        if (confirm(this.translate('skip_confirm'))) {
            this.streakCount = 0;
            this.updateDisplay();
            
            if (this.currentPhase === 'recognition') {
                this.nextRecognitionQuestion();
            } else if (this.currentPhase === 'reflection') {
                this.nextReflectionQuestion();
            } else if (this.currentPhase === 'scenario') {
                this.nextScenarioQuestion();
            }
        }
    }

    nextLevel() {
        this.currentLevel++;
        this.questionsPerPhase = Math.min(this.questionsPerPhase + 1, 8); // Increase difficulty
        document.getElementById('results-modal').style.display = 'none';
        this.startRecognitionPhase();
    }

    restartGame() {
        this.currentLevel = 1;
        this.playerScore = 0;
        this.streakCount = 0;
        this.currentQuestionIndex = 0;
        this.questionsPerPhase = 5;
        this.learnedEmotions.clear();
        
        // Hide all modals
        document.getElementById('results-modal').style.display = 'none';
        document.getElementById('feedback-modal').style.display = 'none';
        
        this.updateDisplay();
        this.startRecognitionPhase();
    }

    updateDisplay() {
        document.getElementById('current-level').textContent = this.currentLevel;
        document.getElementById('player-score').textContent = this.playerScore;
        document.getElementById('streak-count').textContent = this.streakCount;
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questionsPerPhase) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${this.currentQuestionIndex + 1} / ${this.questionsPerPhase}`;
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    new EmotionExplorerGame();
});

// Add keyboard shortcuts
document.addEventListener('keydown', (event) => {
    if (event.key === 'h' || event.key === 'H') {
        document.getElementById('hint-btn').click();
    } else if (event.key === 's' || event.key === 'S') {
        document.getElementById('skip-btn').click();
    } else if (event.key === 'r' || event.key === 'R') {
        document.getElementById('restart-btn').click();
    }
});
