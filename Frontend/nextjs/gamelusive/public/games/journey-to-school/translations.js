// Translations for Journey to School Game
const jtTranslations = {
  en: {
    title: "Journey to School - Educational Game",
    headerTitle: "🎒 Journey to School 🏫",
    headerSubtitle: "Help your character get to school by making good choices!",

    selectLanguage: "Select Language:",

    rollDice: "Roll Dice",
    newGame: "🔄 New Game",
    youRolled: (n) => `You rolled: ${n}`,

    position: "Position:",
    stars: "Stars:",
    money: "Money:",

    scenario: "Scenario",
    continue: "Continue",

    howToPlay: "How to Play:",
    instructions: [
      "🎲 Roll the dice to move forward on the board",
      "🤔 Every square has a different situation or event",
      "💰 Earn or lose money based on your choices",
      "⭐ Collect stars for making good decisions",
      "🏫 Reach school with the highest score possible!",
      "🖱️ Click on squares to preview what's ahead"
    ],

    previewPrefix: "Preview:",
    previewClose: "Click to close preview",

    correctTitle: "✅ Correct!",
    tryAgainTitle: "❌ Try Again Next Time",

    correctMsg: (s, m) => `🎉 Great choice! You earned ${s} stars and $${m}!`,
    wrongMsg: (s, m) => `😔 Not the best choice. You lost $${Math.abs(m)} and ${Math.abs(s)} stars.`,

    rewardMsg: (desc, s, m) => `🎁 ${desc}\n\nYou gained ${s} stars and $${m}!`,
    punishMsg: (desc, s, m) => `⚠️ ${desc}\n\nYou lost $${Math.abs(m)}${s < 0 ? ` and ${Math.abs(s)} stars` : ''}!`,

    winTitles: (grade) => `🏫 Welcome to School! Grade: ${grade}`,
    winTips: "Great job completing your journey! Want to try again and get a better score?",
    gradeMessages: {
      Aplus: (s, m) => `🌟 OUTSTANDING! You're a safety superstar! You earned ${s} stars and have $${m}!`,
      A: (s, m) => `🌟 EXCELLENT! You made great choices! You earned ${s} stars and have $${m}!`,
      B: (s, m) => `👏 GOOD JOB! You reached school safely! You earned ${s} stars and have $${m}!`,
      C: (s, m) => `🎒 You made it to school! Keep practicing to become a safety expert! You earned ${s} stars and have $${m}.`
    },

    tiles: {
      1: { title: 'Home Sweet Home', description: 'Your journey begins! Ready for school?', icon: '🏠' },
      2: { title: 'Morning Rush', description: 'You overslept! What do you do?', icon: '⏰',
        options: [
          'Skip breakfast and run to catch the bus',
          'Take time to eat breakfast and walk calmly',
          'Ask mom to drive you to school'
        ]
      },
      3: { title: 'Good Weather Bonus', description: 'Beautiful sunny day! You feel energized!', icon: '☀️' },
      4: { title: 'Crosswalk Challenge', description: 'You reach a busy crosswalk. The light is red but no cars are coming.', icon: '🚦',
        options: [
          'Wait for the green light',
          'Look both ways and cross quickly',
          'Follow other people crossing'
        ]
      },
      5: { title: 'Puddle Splash', description: 'A car splashed muddy water on you!', icon: '💦' },
      6: { title: 'Lost Wallet', description: 'You find a wallet on the sidewalk with money inside.', icon: '💰',
        options: [
          'Take the money and leave the wallet',
          'Take the wallet to the nearest police station',
          'Leave it where you found it'
        ]
      },
      7: { title: 'Helpful Neighbor', description: 'Mrs. Johnson gives you a cookie for being polite!', icon: '🍪' },
      8: { title: 'Stranger Danger', description: 'A stranger offers you a ride to school in their car.', icon: '🚗',
        options: [
          'Accept the ride to get to school faster',
          'Say "No thank you" and continue walking',
          'Ask them to wait while you call your parents'
        ]
      },
      9: { title: 'Forgot Homework', description: 'Oh no! You forgot your homework at home!', icon: '📝' },
      10: { title: 'Bullying Incident', description: 'You see an older kid taking lunch money from a younger student.', icon: '😠',
        options: [
          'Ignore it and walk away',
          'Tell the bully to stop and get a teacher',
          'Give the younger kid your own lunch money'
        ]
      },
      11: { title: 'Early Bird Bonus', description: "You're ahead of schedule! Time for a quick playground visit.", icon: '🎪' },
      12: { title: 'Lost Friend', description: 'Your friend Tom looks lost and scared near the school.', icon: '😟',
        options: [
          "Continue to class, he'll figure it out",
          'Help him find his classroom',
          'Tell him to ask someone else'
        ]
      },
      13: { title: 'Construction Detour', description: 'Road construction forces you to take a longer route!', icon: '🚧' },
      14: { title: 'Emergency Situation', description: 'You see someone who fell and appears to be hurt.', icon: '🚑',
        options: [
          'Try to help them get up yourself',
          'Call for an adult or emergency services immediately',
          'Take a picture to show your friends later'
        ]
      },
      15: { title: 'Perfect Attendance', description: "You haven't missed a single day this month!", icon: '📅' },
      16: { title: 'Peer Pressure', description: 'Your friends want you to skip first period and hang out.', icon: '😎',
        options: [
          'Go with them because you want to fit in',
          'Suggest doing something fun after school instead',
          'Tell the teacher about their plan'
        ]
      },
      17: { title: 'Forgot Lunch Money', description: 'You left your lunch money at home!', icon: '🍽️' },
      18: { title: 'Online Safety', description: "Someone online asks for your school's name and your class schedule.", icon: '💻',
        options: [
          'Share the information since they seem nice',
          'Never share personal information online',
          'Only tell them your school name'
        ]
      },
      19: { title: 'Almost There!', description: "You can see the school! You're doing great!", icon: '🎯' },
      20: { title: 'Welcome to School!', description: 'Congratulations! You made it safely to school!', icon: '🏫' }
    },

    tips: {
      'Morning Rush': 'Remember: A good breakfast gives you energy for the whole day!',
      'Crosswalk Challenge': 'Traffic lights exist to keep everyone safe. Always follow them!',
      'Lost Wallet': 'Being honest and helpful makes you a better person and builds trust.',
      'Stranger Danger': "Never go with people you don't know, even if they seem nice.",
      'Bullying Incident': 'Standing up for others shows courage and helps create a safe environment.',
      'Lost Friend': "Helping others when they're lost or confused is a sign of true friendship.",
      'Emergency Situation': 'In emergencies, getting adult help is always the safest choice.',
      'Peer Pressure': "Good friends will respect your decisions and won't pressure you to do wrong.",
      'Online Safety': 'Never share personal information online. Your safety is more important than being polite.',
      fallback: 'Every choice you make helps you learn and grow!'
    }
  },

  tr: {
    title: "Okula Yolculuk - Eğitici Oyun",
    headerTitle: "🎒 Okula Yolculuk 🏫",
    headerSubtitle: "İyi seçimler yaparak karakterine okula gitmesinde yardımcı ol!",

    selectLanguage: "Dil Seçin:",

    rollDice: "Zarı At",
    newGame: "🔄 Yeni Oyun",
    youRolled: (n) => `Zar sonucu: ${n}`,

    position: "Konum:",
    stars: "Yıldız:",
    money: "Para:",

    scenario: "Senaryo",
    continue: "Devam",

    howToPlay: "Nasıl Oynanır:",
    instructions: [
      "🎲 Tahtada ilerlemek için zarı at",
      "🤔 Her karede farklı bir durum veya olay var",
      "💰 Seçimlerine göre para kazan ya da kaybet",
      "⭐ İyi kararlar vererek yıldız topla",
      "🏫 Mümkün olan en yüksek puanla okula ulaş!",
      "🖱️ İleriyi görmek için karelere tıkla"
    ],

    previewPrefix: "Önizleme:",
    previewClose: "Kapatmak için tıkla",

    correctTitle: "✅ Doğru!",
    tryAgainTitle: "❌ Bir Sonraki Sefer Dene",

    correctMsg: (s, m) => `🎉 Harika seçim! ${s} yıldız ve $${m} kazandın!`,
    wrongMsg: (s, m) => `😔 Pek iyi bir seçim değildi. $${Math.abs(m)} ve ${Math.abs(s)} yıldız kaybettin.`,

    rewardMsg: (desc, s, m) => `🎁 ${desc}\n\n${s} yıldız ve $${m} kazandın!`,
    punishMsg: (desc, s, m) => `⚠️ ${desc}\n\n$${Math.abs(m)}${s < 0 ? ` ve ${Math.abs(s)} yıldız` : ''} kaybettin!`,

    winTitles: (grade) => `🏫 Okula Hoş Geldin! Not: ${grade}`,
    winTips: "Yolculuğunu tamamladın! Daha iyi puan için tekrar denemek ister misin?",
    gradeMessages: {
      Aplus: (s, m) => `🌟 MÜKEMMEL! Gerçek bir güvenlik yıldızısın! ${s} yıldız ve $${m} ile bitirdin!`,
      A: (s, m) => `🌟 HARİKA! Çok iyi seçimler yaptın! ${s} yıldız ve $${m} ile bitirdin!`,
      B: (s, m) => `👏 GÜZEL İŞ! Okula güvenli şekilde ulaştın! ${s} yıldız ve $${m} elde ettin!`,
      C: (s, m) => `🎒 Okula ulaştın! Bir güvenlik uzmanı olmak için pratik yapmaya devam et! ${s} yıldız ve $${m} ile bitirdin.`
    },

    tiles: {
      1: { title: 'Sıcak Yuva', description: 'Yolculuğun başlıyor! Okula hazır mısın?', icon: '🏠' },
      2: { title: 'Sabah Telaşı', description: 'Uyuyakaldın! Ne yaparsın?', icon: '⏰',
        options: [
          'Kahvaltıyı atla ve otobüse yetişmek için koş',
          'Kahvaltını yap ve sakince yürü',
          'Annemden beni okula götürmesini iste'
        ]
      },
      3: { title: 'Güzel Hava Bonusu', description: 'Güneşli, harika bir gün! Enerjik hissediyorsun!', icon: '☀️' },
      4: { title: 'Yaya Geçidi', description: 'Yoğun bir yaya geçidine geldin. Işık kırmızı ama araba yok.', icon: '🚦',
        options: [
          'Yeşil ışığı bekle',
          'Sağa sola bakıp hızlıca geç',
          'Geçenleri takip et'
        ]
      },
      5: { title: 'Su Birikintisi', description: 'Bir araba üzerini çamurlu suyla ıslattı!', icon: '💦' },
      6: { title: 'Kayıp Cüzdan', description: 'Kaldırımda içinde para olan bir cüzdan buldun.', icon: '💰',
        options: [
          'Parayı al ve cüzdanı bırak',
          'En yakın polis merkezine götür',
          'Bulduğun yere bırak'
        ]
      },
      7: { title: 'Yardımsever Komşu', description: 'Nazik olduğun için komşun sana kurabiye verdi!', icon: '🍪' },
      8: { title: 'Yabancı Tehlikesi', description: 'Bir yabancı seni arabayla okula götürmeyi teklif ediyor.', icon: '🚗',
        options: [
          'Daha hızlı gitmek için arabaya bin',
          '“Hayır teşekkürler” de ve yürümeye devam et',
          'Aileni ararken beklemesini iste'
        ]
      },
      9: { title: 'Ödevi Unuttun', description: 'Eyvah! Ödevini evde unuttun!', icon: '📝' },
      10: { title: 'Zorbalık Olayı', description: 'Büyük bir çocuk küçük bir öğrencinin paraını alıyor.', icon: '😠',
        options: [
          'Görmezden gel ve uzaklaş',
          'Öğretmene haber verip durdur',
          'Küçük öğrenciye kendi paranı ver'
        ]
      },
      11: { title: 'Erken Kuş Bonusu', description: 'Programın ilerisindesin! Hızlı bir oyun parkı molası.', icon: '🎪' },
      12: { title: 'Kayıp Arkadaş', description: 'Arkadaşın Tom okul yakınında kaybolmuş ve korkmuş görünüyor.', icon: '😟',
        options: [
          'Sınıfa devam et, kendi bulur',
          'Sınıfını bulmasına yardım et',
          'Başkasından yardım istemesini söyle'
        ]
      },
      13: { title: 'Yol Çalışması', description: 'Yol çalışması nedeniyle daha uzun bir yola sapıyorsun!', icon: '🚧' },
      14: { title: 'Acil Durum', description: 'Düşmüş ve yaralı görünen biri var.', icon: '🚑',
        options: [
          'Kendin kaldırmaya çalış',
          'Hemen bir yetişkin veya acil yardımı ara',
          'Arkadaşlarına göstermek için fotoğraf çek'
        ]
      },
      15: { title: 'Tam Devamlılık', description: 'Bu ay bir gün bile kaçırmadın!', icon: '📅' },
      16: { title: 'Akran Baskısı', description: 'Arkadaşların ilk derse girmeyip takılmak istiyor.', icon: '😎',
        options: [
          'Uyum sağlamak için onlarla git',
          'Bunun yerine okuldan sonra bir şey öner',
          'Planlarını öğretmene söyle'
        ]
      },
      17: { title: 'Yemek Parası Yok', description: 'Yemek paranı evde unuttun!', icon: '🍽️' },
      18: { title: 'Çevrimiçi Güvenlik', description: 'Birisi çevrimiçi olarak okulunun adını ve ders programını soruyor.', icon: '💻',
        options: [
          'Nazik göründüğü için bilgileri paylaş',
          'Kişisel bilgilerini asla paylaşma',
          'Sadece okul adını söyle'
        ]
      },
      19: { title: 'Neredeyse Geldik!', description: 'Okulu görebiliyorsun! Harika gidiyorsun!', icon: '🎯' },
      20: { title: 'Okula Hoş Geldin!', description: 'Tebrikler! Okula güvenle ulaştın!', icon: '🏫' }
    },

    tips: {
      'Sabah Telaşı': 'Unutma: İyi bir kahvaltı tüm gün enerji verir!',
  'Yaya Geçidi': 'Trafik ışıkları herkesin güvenliği için var. Her zaman uy!',
      'Kayıp Cüzdan': 'Dürüst ve yardımsever olmak güven sağlar.',
      'Yabancı Tehlikesi': 'Tanımadığın kişilerle asla gitme, iyi görünseler bile.',
      'Zorbalık Olayı': 'Başkaları için ayağa kalkmak cesaret ister ve güvenli ortam sağlar.',
      'Kayıp Arkadaş': 'Kaybolan birine yardım etmek gerçek dostluktur.',
      'Acil Durum': 'Acil durumlarda bir yetişkinden yardım istemek en güvenlisidir.',
      'Akran Baskısı': 'İyi arkadaşlar kararlarına saygı duyar ve yanlış baskı yapmaz.',
      'Çevrimiçi Güvenlik': 'Kişisel bilgilerini çevrimiçi paylaşma. Nezaketten önemli olan güvenliğindir.',
      fallback: 'Verdiğin her karar sana bir şey öğretir!'
    }
  },

  pl: {
    title: "Podróż do Szkoły - Gra Edukacyjna",
    headerTitle: "🎒 Podróż do Szkoły 🏫",
    headerSubtitle: "Pomóż swojej postaci dotrzeć do szkoły, dokonując dobrych wyborów!",

    selectLanguage: "Wybierz język:",

    rollDice: "Rzuć kostką",
    newGame: "🔄 Nowa gra",
    youRolled: (n) => `Wyrzuciłeś: ${n}`,

    position: "Pozycja:",
    stars: "Gwiazdy:",
    money: "Pieniądze:",

    scenario: "Scenariusz",
    continue: "Kontynuuj",

    howToPlay: "Jak grać:",
    instructions: [
      "🎲 Rzuć kostką, aby poruszać się po planszy",
      "🤔 Każde pole ma inną sytuację lub wydarzenie",
      "💰 Zarabiaj lub trać pieniądze w zależności od wyborów",
      "⭐ Zbieraj gwiazdki za dobre decyzje",
      "🏫 Dotarcie do szkoły z jak najwyższym wynikiem!",
      "🖱️ Klikaj na pola, aby zobaczyć, co jest dalej"
    ],

    previewPrefix: "Podgląd:",
    previewClose: "Kliknij, aby zamknąć podgląd",

    correctTitle: "✅ Dobrze!",
    tryAgainTitle: "❌ Spróbuj następnym razem",

    correctMsg: (s, m) => `🎉 Świetny wybór! Zdobyłeś ${s} gwiazdek i $${m}!`,
    wrongMsg: (s, m) => `😔 To nie był najlepszy wybór. Straciłeś $${Math.abs(m)} i ${Math.abs(s)} gwiazdek.`,

    rewardMsg: (desc, s, m) => `🎁 ${desc}\n\nZyskałeś ${s} gwiazdek i $${m}!`,
    punishMsg: (desc, s, m) => `⚠️ ${desc}\n\nStraciłeś $${Math.abs(m)}${s < 0 ? ` i ${Math.abs(s)} gwiazdek` : ''}!`,

    winTitles: (grade) => `🏫 Witaj w szkole! Ocena: ${grade}`,
    winTips: "Świetna robota! Chcesz spróbować ponownie i zdobyć lepszy wynik?",
    gradeMessages: {
      Aplus: (s, m) => `🌟 WSPANIALE! Jesteś mistrzem bezpieczeństwa! Zdobyłeś ${s} gwiazdek i masz $${m}!`,
      A: (s, m) => `🌟 DOSKONALE! Dokonałeś świetnych wyborów! Zdobyłeś ${s} gwiazdek i masz $${m}!`,
      B: (s, m) => `👏 DOBRA ROBOTA! Bezpiecznie dotarłeś do szkoły! Zdobyłeś ${s} gwiazdek i masz $${m}!`,
      C: (s, m) => `🎒 Dotarłeś do szkoły! Ćwicz dalej, aby stać się ekspertem! Zdobyłeś ${s} gwiazdek i masz $${m}.`
    },

    tiles: {
      1: { title: 'Przytulny dom', description: 'Twoja podróż się zaczyna! Gotowy do szkoły?', icon: '🏠' },
      2: { title: 'Poranny pośpiech', description: 'Zaspałeś! Co robisz?', icon: '⏰',
        options: [
          'Pomiń śniadanie i biegnij na autobus',
          'Zjedz śniadanie i idź spokojnie',
          'Poproś mamę, aby zawiozła Cię do szkoły'
        ]
      },
      3: { title: 'Bonus za pogodę', description: 'Piękny, słoneczny dzień! Czujesz energię!', icon: '☀️' },
      4: { title: 'Przejście dla pieszych', description: 'Docierasz do ruchliwego przejścia. Światło jest czerwone, ale nie ma samochodów.', icon: '🚦',
        options: [
          'Poczekaj na zielone światło',
          'Spójrz w obie strony i przejdź szybko',
          'Podążaj za innymi przechodzącymi'
        ]
      },
      5: { title: 'Kałuża', description: 'Samochód ochlapał Cię błotnistą wodą!', icon: '💦' },
      6: { title: 'Zgubiony portfel', description: 'Znajdujesz portfel na chodniku z pieniędzmi w środku.', icon: '💰',
        options: [
          'Weź pieniądze i zostaw portfel',
          'Zanieś portfel na najbliższy komisariat',
          'Zostaw go tam, gdzie go znalazłeś'
        ]
      },
      7: { title: 'Pomocny sąsiad', description: 'Pani Johnson daje Ci ciastko za bycie uprzejmym!', icon: '🍪' },
      8: { title: 'Nieznajomy', description: 'Nieznajomy oferuje podwózkę do szkoły.', icon: '🚗',
        options: [
          'Przyjmij podwózkę, żeby szybciej dotrzeć',
          'Powiedz „Nie, dziękuję” i idź dalej',
          'Poproś, by poczekał, aż zadzwonisz do rodziców'
        ]
      },
      9: { title: 'Zapomniana praca domowa', description: 'O nie! Zapomniałeś pracy domowej!', icon: '📝' },
      10: { title: 'Zdarzenie z bullyingiem', description: 'Widzisz starszego ucznia zabierającego pieniądze młodszemu.', icon: '😠',
        options: [
          'Zignoruj i odejdź',
          'Powstrzymaj i powiedz nauczycielowi',
          'Daj młodszemu swoje pieniądze'
        ]
      },
      11: { title: 'Ranny ptaszek', description: 'Jesteś przed czasem! Krótka wizyta na placu zabaw.', icon: '🎪' },
      12: { title: 'Zagubiony przyjaciel', description: 'Twój przyjaciel Tom wygląda na zagubionego i przestraszonego.', icon: '😟',
        options: [
          'Idź na lekcję, poradzi sobie',
          'Pomóż mu znaleźć klasę',
          'Powiedz mu, żeby poprosił kogoś innego'
        ]
      },
      13: { title: 'Objazd', description: 'Remont drogi zmusza Cię do dłuższej trasy!', icon: '🚧' },
      14: { title: 'Sytuacja awaryjna', description: 'Ktoś upadł i wygląda na rannego.', icon: '🚑',
        options: [
          'Spróbuj pomóc mu wstać samemu',
          'Natychmiast wezwij dorosłego lub służby ratunkowe',
          'Zrób zdjęcie, aby pokazać znajomym później'
        ]
      },
      15: { title: 'Wzorowa frekwencja', description: 'Nie opuściłeś ani jednego dnia w tym miesiącu!', icon: '📅' },
      16: { title: 'Presja rówieśnicza', description: 'Twoi znajomi chcą, żebyś opuścił pierwszą lekcję.', icon: '😎',
        options: [
          'Idź z nimi, żeby się dopasować',
          'Zaproponuj coś po szkole',
          'Powiedz nauczycielowi o ich planie'
        ]
      },
      17: { title: 'Zapomniane pieniądze', description: 'Zostawiłeś pieniądze na obiad w domu!', icon: '🍽️' },
      18: { title: 'Bezpieczeństwo online', description: 'Ktoś w internecie pyta o nazwę Twojej szkoły i plan lekcji.', icon: '💻',
        options: [
          'Podziel się informacjami, bo wydaje się miły',
          'Nigdy nie udostępniaj danych osobowych',
          'Podaj tylko nazwę szkoły'
        ]
      },
      19: { title: 'Już prawie!', description: 'Widzisz szkołę! Świetnie Ci idzie!', icon: '🎯' },
      20: { title: 'Witamy w szkole!', description: 'Gratulacje! Bezpiecznie dotarłeś do szkoły!', icon: '🏫' }
    },

    tips: {
      'Poranny pośpiech': 'Pamiętaj: dobre śniadanie daje energię na cały dzień!',
      'Przejście dla pieszych': 'Sygnalizacja świetlna jest dla bezpieczeństwa. Zawsze jej przestrzegaj!',
      'Zgubiony portfel': 'Uczciwość i pomoc innym budują zaufanie.',
      'Nieznajomy': 'Nigdy nie idź z nieznajomymi, nawet jeśli wydają się mili.',
      'Zdarzenie z bullyingiem': 'Wstawianie się za innymi wymaga odwagi i tworzy bezpieczne środowisko.',
      'Zagubiony przyjaciel': 'Pomaganie zagubionym to prawdziwa przyjaźń.',
      'Sytuacja awaryjna': 'W nagłych wypadkach poproś o pomoc dorosłego.',
      'Presja rówieśnicza': 'Dobrzy przyjaciele szanują Twoje decyzje.',
      'Bezpieczeństwo online': 'Nigdy nie podawaj danych osobowych online.',
      fallback: 'Każdy wybór czegoś uczy!'
    }
  },

  nl: {
    title: "Reis naar School - Educatief Spel",
    headerTitle: "🎒 Reis naar School 🏫",
    headerSubtitle: "Help je personage naar school door goede keuzes te maken!",

    selectLanguage: "Selecteer taal:",

    rollDice: "Gooi dobbelsteen",
    newGame: "🔄 Nieuw spel",
    youRolled: (n) => `Je gooide: ${n}`,

    position: "Positie:",
    stars: "Sterren:",
    money: "Geld:",

    scenario: "Scenario",
    continue: "Doorgaan",

    howToPlay: "Hoe te spelen:",
    instructions: [
      "🎲 Gooi de dobbelsteen om vooruit te gaan",
      "🤔 Elk vakje heeft een andere situatie of gebeurtenis",
      "💰 Verdien of verlies geld afhankelijk van je keuzes",
      "⭐ Verzamel sterren voor goede beslissingen",
      "🏫 Bereik de school met de hoogste score!",
      "🖱️ Klik op vakjes om vooruit te kijken"
    ],

    previewPrefix: "Voorbeeld:",
    previewClose: "Klik om te sluiten",

    correctTitle: "✅ Goed!",
    tryAgainTitle: "❌ Probeer later opnieuw",

    correctMsg: (s, m) => `🎉 Goede keuze! Je verdiende ${s} sterren en $${m}!`,
    wrongMsg: (s, m) => `😔 Niet de beste keuze. Je verloor $${Math.abs(m)} en ${Math.abs(s)} sterren.`,

    rewardMsg: (desc, s, m) => `🎁 ${desc}\n\nJe kreeg ${s} sterren en $${m}!`,
    punishMsg: (desc, s, m) => `⚠️ ${desc}\n\nJe verloor $${Math.abs(m)}${s < 0 ? ` en ${Math.abs(s)} sterren` : ''}!`,

    winTitles: (grade) => `🏫 Welkom op school! Cijfer: ${grade}`,
    winTips: "Goed gedaan! Nog een keer proberen voor een betere score?",
    gradeMessages: {
      Aplus: (s, m) => `🌟 UITSTEKEND! Je bent een veiligheidsexpert! Je hebt ${s} sterren en $${m}!`,
      A: (s, m) => `🌟 GEWELDIG! Je maakte goede keuzes! Je hebt ${s} sterren en $${m}!`,
      B: (s, m) => `👏 GOED ZO! Je kwam veilig aan! Je hebt ${s} sterren en $${m}!`,
      C: (s, m) => `🎒 Je bent op school! Blijf oefenen om beter te worden! Je hebt ${s} sterren en $${m}.`
    },

    tiles: {
      1: { title: 'Thuisbasis', description: 'Je reis begint! Klaar voor school?', icon: '🏠' },
      2: { title: 'Ochtendspits', description: 'Je hebt je verslapen! Wat doe je?', icon: '⏰',
        options: [
          'Sla het ontbijt over en ren naar de bus',
          'Neem tijd voor ontbijt en loop rustig',
          'Vraag je moeder om je te brengen'
        ]
      },
      3: { title: 'Mooi Weer Bonus', description: 'Prachtige zonnige dag! Je voelt je energiek!', icon: '☀️' },
      4: { title: 'Zebrapad Uitdaging', description: 'Drukke oversteekplaats. Het licht is rood, maar geen auto’s.', icon: '🚦',
        options: [
          'Wacht op groen licht',
          'Kijk beide kanten op en steek snel over',
          'Volg andere mensen die oversteken'
        ]
      },
      5: { title: 'Plas Spetter', description: 'Een auto spatte modderwater op je!', icon: '💦' },
      6: { title: 'Gevonden Portemonnee', description: 'Je vindt een portemonnee met geld erin.', icon: '💰',
        options: [
          'Neem het geld en laat de portemonnee',
          'Breng de portemonnee naar het politiebureau',
          'Laat het liggen waar je het vond'
        ]
      },
      7: { title: 'Behulpzame Buur', description: 'Mevrouw Johnson geeft je een koekje omdat je beleefd bent!', icon: '🍪' },
      8: { title: 'Gevaarlijke Onbekende', description: 'Een onbekende biedt je een lift aan naar school.', icon: '🚗',
        options: [
          'Accepteer de lift om sneller te gaan',
          'Zeg "Nee, dank je" en loop verder',
          'Vraag te wachten terwijl je je ouders belt'
        ]
      },
      9: { title: 'Huiswerk Vergeten', description: 'O nee! Je bent je huiswerk vergeten!', icon: '📝' },
      10: { title: 'Pestincident', description: 'Je ziet een oudere leerling geld afpakken van een jongere.', icon: '😠',
        options: [
          'Negeer het en loop door',
          'Zeg dat hij moet stoppen en haal een leraar',
          'Geef de jongere je eigen lunchgeld'
        ]
      },
      11: { title: 'Vroege Vogel Bonus', description: 'Je loopt voor op schema! Even naar de speeltuin.', icon: '🎪' },
      12: { title: 'Verdwaalde Vriend', description: 'Je vriend Tom lijkt verdwaald en bang.', icon: '😟',
        options: [
          'Ga door naar de les, hij redt het wel',
          'Help hem zijn klas te vinden',
          'Zeg dat hij iemand anders moet vragen'
        ]
      },
      13: { title: 'Omleiding', description: 'Wegwerkzaamheden dwingen je tot een omweg!', icon: '🚧' },
      14: { title: 'Noodsituatie', description: 'Je ziet iemand gevallen en gewond.', icon: '🚑',
        options: [
          'Probeer zelf te helpen opstaan',
          'Bel meteen een volwassene of hulpdiensten',
          'Maak een foto voor later'
        ]
      },
      15: { title: 'Perfecte Aanwezigheid', description: 'Je hebt geen dag gemist deze maand!', icon: '📅' },
      16: { title: 'Groepsdruk', description: 'Vrienden willen dat je de eerste les overslaat.', icon: '😎',
        options: [
          'Ga mee om erbij te horen',
          'Stel iets na schooltijd voor',
          'Vertel de leraar over hun plan'
        ]
      },
      17: { title: 'Lunchgeld Vergeten', description: 'Je bent je lunchgeld thuis vergeten!', icon: '🍽️' },
      18: { title: 'Online Veiligheid', description: 'Iemand online vraagt naar je school en rooster.', icon: '💻',
        options: [
          'Deel de info, hij lijkt aardig',
          'Deel nooit persoonlijke informatie online',
          'Vertel alleen je schoolnaam'
        ]
      },
      19: { title: 'Bijna daar!', description: 'Je kunt de school zien! Goed bezig!', icon: '🎯' },
      20: { title: 'Welkom op school!', description: 'Gefeliciteerd! Je bent veilig aangekomen!', icon: '🏫' }
    },

    tips: {
      'Ochtendspits': 'Een goed ontbijt geeft energie voor de hele dag!',
      'Zebrapad Uitdaging': 'Verkeerslichten zijn er voor veiligheid. Volg ze altijd!',
      'Gevonden Portemonnee': 'Eerlijk en behulpzaam zijn bouwt vertrouwen op.',
      'Gevaarlijke Onbekende': 'Ga nooit mee met onbekenden, ook niet als ze aardig lijken.',
      'Pestincident': 'Opkomen voor anderen is moedig en helpt een veilige omgeving te maken.',
      'Verdwaalde Vriend': 'Anderen helpen is echte vriendschap.',
      'Noodsituatie': 'Vraag bij noodgevallen direct hulp van een volwassene.',
      'Groepsdruk': 'Goede vrienden respecteren je keuzes.',
      'Online Veiligheid': 'Deel nooit persoonlijke gegevens online.',
      fallback: 'Elke keuze helpt je te leren en groeien!'
    }
  },

  lt: {
    title: "Kelionė į Mokyklą - Mokomasis Žaidimas",
    headerTitle: "🎒 Kelionė į Mokyklą 🏫",
    headerSubtitle: "Padėk veikėjui pasiekti mokyklą priimant gerus sprendimus!",

    selectLanguage: "Pasirinkti kalbą:",

    rollDice: "Mesti kauliuką",
    newGame: "🔄 Naujas žaidimas",
    youRolled: (n) => `Iškrito: ${n}`,

    position: "Pozicija:",
    stars: "Žvaigždės:",
    money: "Pinigai:",

    scenario: "Situacija",
    continue: "Tęsti",

    howToPlay: "Kaip žaisti:",
    instructions: [
      "🎲 Mesk kauliuką, kad judėtum į priekį",
      "🤔 Kiekviename langelyje – vis kita situacija",
      "💰 Už pasirinkimus gausi arba prarasi pinigų",
      "⭐ Rink žvaigždes už gerus sprendimus",
      "🏫 Pasiek mokyklą su kuo didesniu rezultatu!",
      "🖱️ Spausk ant langelių ir pasižiūrėk, kas laukia"
    ],

    previewPrefix: "Peržiūra:",
    previewClose: "Spustelėk, kad uždarytum",

    correctTitle: "✅ Teisingai!",
    tryAgainTitle: "❌ Pabandyk kitą kartą",

    correctMsg: (s, m) => `🎉 Puikus pasirinkimas! Gavai ${s} žvaigždžių ir $${m}!`,
    wrongMsg: (s, m) => `😔 Ne pats geriausias pasirinkimas. Praradai $${Math.abs(m)} ir ${Math.abs(s)} žvaigždžių.`,

    rewardMsg: (desc, s, m) => `🎁 ${desc}\n\nGavai ${s} žvaigždžių ir $${m}!`,
    punishMsg: (desc, s, m) => `⚠️ ${desc}\n\nPraradai $${Math.abs(m)}${s < 0 ? ` ir ${Math.abs(s)} žvaigždžių` : ''}!`,

    winTitles: (grade) => `🏫 Sveikas atvykęs į mokyklą! Pažymys: ${grade}`,
    winTips: "Puikus darbas! Nori pabandyti dar kartą ir pagerinti rezultatą?",
    gradeMessages: {
      Aplus: (s, m) => `🌟 NUOSTABU! Tu – saugumo žvaigždė! Surinkai ${s} žvaigždžių ir turi $${m}!`,
      A: (s, m) => `🌟 PUIKU! Priėmei puikius sprendimus! Surinkai ${s} žvaigždžių ir turi $${m}!`,
      B: (s, m) => `👏 GERAS DARBAS! Saugiai pasiekei mokyklą! Surinkai ${s} žvaigždžių ir turi $${m}!`,
      C: (s, m) => `🎒 Pasiekei mokyklą! Toliau praktikuokis, kad taptum ekspertu! Surinkai ${s} žvaigždžių ir turi $${m}.`
    },

    tiles: {
      1: { title: 'Jaukus namai', description: 'Prasideda tavo kelionė! Pasiruošęs mokyklai?', icon: '🏠' },
      2: { title: 'Rytinis skubėjimas', description: 'Pramiegojai! Ką darai?', icon: '⏰',
        options: [
          'Praleisk pusryčius ir bėk į autobusą',
          'Pavalgęs ramiai eik į mokyklą',
          'Prašyk mamos nuvežti į mokyklą'
        ]
      },
      3: { title: 'Geros oros premija', description: 'Nuostabi saulėta diena! Jauti energiją!', icon: '☀️' },
      4: { title: 'Perėjos iššūkis', description: 'Prieini judrią perėją. Degs raudona, bet mašinų nėra.', icon: '🚦',
        options: [
          'Palauk žalio signalo',
          'Apsižvalgęs greitai pereik',
          'Sek paskui kitus pereinančius'
        ]
      },
      5: { title: 'Balos šuoras', description: 'Mašina aptaškė tave purvinu vandeniu!', icon: '💦' },
      6: { title: 'Pamestas piniginė', description: 'Randi piniginę su pinigais viduje.', icon: '💰',
        options: [
          'Pasiimk pinigus ir palik piniginę',
          'Nunešk į artimiausią policijos nuovadą',
          'Palik ten, kur radai'
        ]
      },
      7: { title: 'Paslaugus kaimynas', description: 'Ponia Johnson duoda tau sausainį už mandagumą!', icon: '🍪' },
      8: { title: 'Svetimas siūlo pavežti', description: 'Svetimas siūlo pavežti į mokyklą.', icon: '🚗',
        options: [
          'Priimk pavežimą, kad greičiau nuvyktum',
          'Pasakyk „Ne, ačiū“ ir eik toliau',
          'Paprašyk palaukti, kol paskambinsi tėvams'
        ]
      },
      9: { title: 'Pamiršti namų darbai', description: 'O ne! Pamiršai namų darbus!', icon: '📝' },
      10: { title: 'Patyčių atvejis', description: 'Matai vyresnį mokinį atiminėjant pinigus iš jaunesnio.', icon: '😠',
        options: [
          'Ignoruok ir eik toliau',
          'Sustabdyt ir iškviesti mokytoją',
          'Duok jaunesniam savo pinigus'
        ]
      },
      11: { title: 'Ankstyvas paukštis', description: 'Esi priekyje grafiko! Trumpa žaidimų aikštelės pauzė.', icon: '🎪' },
      12: { title: 'Pasiklydęs draugas', description: 'Tavo draugas Tomas atrodo pasiklydęs ir išsigandęs.', icon: '😟',
        options: [
          'Eik į pamoką, jis susitvarkys',
          'Padėk jam rasti klasę',
          'Pasakyk jam paprašyti kito pagalbos'
        ]
      },
      13: { title: 'Aplinkkelis', description: 'Kelio darbai priverčia eiti ilgesniu keliu!', icon: '🚧' },
      14: { title: 'Avarinė situacija', description: 'Matai parkritusį ir sužeistą žmogų.', icon: '🚑',
        options: [
          'Bandyk padėti atsikelti pats',
          'Nedelsiant kviesk suaugusį ar pagalbą',
          'Nufotografuok, kad parodytum draugams'
        ]
      },
      15: { title: 'Puikus lankomumas', description: 'Šį mėnesį nepraleidai nė vienos dienos!', icon: '📅' },
      16: { title: 'Bendraamžių spaudimas', description: 'Draugai nori praleisti pirmą pamoką.', icon: '😎',
        options: [
          'Eik su jais, kad pritaptum',
          'Pasiūlyk ką nors po pamokų',
          'Pasakyk mokytojui apie jų planą'
        ]
      },
      17: { title: 'Pamiršti pietų pinigai', description: 'Pietų pinigus palikai namuose!', icon: '🍽️' },
      18: { title: 'Saugumas internete', description: 'Kažkas internete prašo mokyklos pavadinimo ir tvarkaraščio.', icon: '💻',
        options: [
          'Pasidalink informacija, atrodo malonus',
          'Niekada nesidalink asmenine informacija internete',
          'Pasakyk tik mokyklos pavadinimą'
        ]
      },
      19: { title: 'Beveik vietoje!', description: 'Matai mokyklą! Tau puikiai sekasi!', icon: '🎯' },
      20: { title: 'Sveikas atvykęs!', description: 'Sveikiname! Saugiai pasiekei mokyklą!', icon: '🏫' }
    },

    tips: {
      'Rytinis skubėjimas': 'Geri pusryčiai suteikia energijos visai dienai!',
      'Perėjos iššūkis': 'Šviesoforai – saugumui. Visada jų laikykis!',
      'Pamestas piniginė': 'Sąžiningumas ir pagalba kuria pasitikėjimą.',
      'Svetimas siūlo pavežti': 'Niekada neik su nepažįstamais, net jei jie malonūs.',
      'Patyčių atvejis': 'Ginti kitus – drąsu ir kuria saugią aplinką.',
      'Pasiklydęs draugas': 'Padėti kitiems – tikra draugystė.',
      'Avarinė situacija': 'Avarijos atveju kviesk suaugusį ar pagalbą.',
      'Bendraamžių spaudimas': 'Geri draugai gerbia tavo sprendimus.',
      'Saugumas internete': 'Niekada nesidalink asmeniniais duomenimis internete.',
      fallback: 'Kiekvienas pasirinkimas padeda mokytis ir augti!'
    }
  }
};

let jtLang = 'en';

function jtGet(key) {
  const pack = jtTranslations[jtLang] || jtTranslations.en;
  return pack[key] ?? jtTranslations.en[key] ?? key;
}

function jtTiles() {
  const pack = jtTranslations[jtLang] || jtTranslations.en;
  return pack.tiles;
}

function jtTips() {
  const pack = jtTranslations[jtLang] || jtTranslations.en;
  return pack.tips;
}

function applyJTLanguage(lang) {
  if (!jtTranslations[lang]) return;
  jtLang = lang;

  document.title = jtGet('title');

  const h1 = document.querySelector('.game-header h1');
  if (h1) h1.textContent = jtGet('headerTitle');
  const sub = document.querySelector('.game-header p');
  if (sub) sub.textContent = jtGet('headerSubtitle');

  const langH3 = document.querySelector('.language-selector h3');
  if (langH3) langH3.textContent = jtGet('selectLanguage');

  const roll = document.getElementById('roll-dice');
  if (roll) roll.textContent = jtGet('rollDice');

  const instTitle = document.getElementById('instructions-title');
  if (instTitle) instTitle.textContent = jtGet('howToPlay');

  // instruction items
  const items = document.querySelectorAll('.instructions .inst-item');
  const arr = jtGet('instructions');
  items.forEach((li, i) => {
    if (arr[i]) li.textContent = arr[i];
  });

  const posLabel = document.getElementById('position-label');
  if (posLabel) posLabel.textContent = jtGet('position');
  const starsLabel = document.getElementById('stars-label');
  if (starsLabel) starsLabel.textContent = jtGet('stars');
  const moneyLabel = document.getElementById('money-label');
  if (moneyLabel) moneyLabel.textContent = jtGet('money');

  // scenario modal
  const scenTitle = document.getElementById('scenario-title');
  if (scenTitle) scenTitle.textContent = jtGet('scenario');
  const cont = document.getElementById('continue-btn');
  if (cont) cont.textContent = jtGet('continue');
}

function initJTLanguageSelector() {
  const container = document.querySelector('.language-selector');
  if (!container) return;
  // clear previous buttons if any
  container.querySelectorAll('button.language-btn').forEach(b => b.remove());
  const languages = [
    { code: 'en', name: '🇬🇧 English' },
    { code: 'tr', name: '🇹🇷 Türkçe' },
    { code: 'pl', name: '🇵🇱 Polski' },
    { code: 'lt', name: '🇱🇹 Lietuvių' },
    { code: 'nl', name: '🇳🇱 Nederlands' }
  ];
  languages.forEach(lang => {
    const btn = document.createElement('button');
    btn.className = 'language-btn';
    btn.textContent = lang.name;
    btn.onclick = () => {
      document.querySelectorAll('.language-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyJTLanguage(lang.code);
      // also rebuild tiles with translated data if the game exposes a method
      if (window.jtRefreshTiles) window.jtRefreshTiles();
    };
    if (lang.code === jtLang) btn.classList.add('active');
    container.appendChild(btn);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initJTLanguageSelector();
  applyJTLanguage(jtLang);
});
