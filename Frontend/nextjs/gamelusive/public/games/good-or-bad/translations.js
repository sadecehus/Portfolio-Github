// Translation data for Good or Bad Game
const translations = {
  en: {
    // Meta and headers
    title: "Good or Bad? - Decision Making Game",
    gameTitle: "Good or Bad?",
    gameSubtitle: "Make the right choice!",

    // Language selector
    selectLanguage: "Select Language:",

    // Home screen
    homeTitle: "Welcome to the Good or Bad Game!",
    homeDescription: "Learn about making good choices in different situations!",
    chooseLevel: "Choose your grade level:",
    grades12: "Grades 1-2",
    grades34: "Grades 3-4",

    // In-game labels
    questionLabel: "Question",
    scoreLabel: "Score",
    loadingScenario: "Loading scenario...",
    feedbackTitle: "Feedback",
    nextQuestion: "Next Question",
    imagePlaceholder: "[Welcome to Good and Bad Game]",

    // Results
    gameComplete: "Game Complete!",
    youScoredLabel: "You scored",
    outOfLabel: "out of",
    resultMessageDefault: "Great job making good choices!",
    resultMessagePerfect: "Perfect score! You're amazing at making good choices!",
    resultMessageGreat: "Great job! You know how to make good choices!",
    resultMessageGood: "Good effort! Keep practicing to make even better choices!",
    resultMessageKeepLearning: "Keep learning! Try again to improve your decision-making skills!",
    playAgain: "Play Again",
    home: "Home",

    // Feedback titles during play
    feedbackCorrectTitle: "Great job! 🌟",
    feedbackIncorrectTitle: "Try again next time! 🤔",

    // Scenarios (used as fallback for all languages)
    youngerScenarios: [
      {
        text: "Sarah sees a classmate drop their pencil case. What should she do?",
        options: [
          { text: "Pick it up and return it to her classmate", isGood: true, feedback: "Great choice! Helping others is always a good thing to do." },
          { text: "Ignore it and continue walking", isGood: false, feedback: "It would be better to help your classmate by picking up their pencil case." },
          { text: "Pick it up and keep it for herself", isGood: false, feedback: "Taking something that belongs to someone else isn't right. It's better to return it." }
        ]
      },
      {
        text: "Max sees another student sitting alone at lunch. What should he do?",
        options: [
          { text: "Ask the student if they want to join him and his friends", isGood: true, feedback: "Excellent! Including others helps everyone feel welcome." },
          { text: "Ignore the student and continue eating with his friends", isGood: false, feedback: "When someone is alone, it's nice to invite them to join you." },
          { text: "Tell his friends to laugh at the student sitting alone", isGood: false, feedback: "Making fun of others can hurt their feelings. It's better to be kind." }
        ]
      },
      {
        text: "Jamie broke a classroom toy by accident. What should he do?",
        options: [
          { text: "Tell the teacher what happened and apologize", isGood: true, feedback: "Being honest when you make a mistake is the right thing to do!" },
          { text: "Hide the broken toy so no one will know", isGood: false, feedback: "Hiding mistakes doesn't solve problems. It's better to be honest." },
          { text: "Blame another student for breaking it", isGood: false, feedback: "Blaming others for your mistakes isn't honest or fair." }
        ]
      },
      {
        text: "Emma notices her friend doesn't understand how to do something. What should she do?",
        options: [
          { text: "Offer to help explain it", isGood: true, feedback: "Helping friends learn is a kind and supportive thing to do!" },
          { text: "Tell her friend they're not smart enough", isGood: false, feedback: "Saying hurtful things doesn't help anyone. Supporting friends is better." },
          { text: "Walk away and leave her friend confused", isGood: false, feedback: "Friends help each other when they need it. Walking away isn't helpful." }
        ]
      },
      {
        text: "Noah sees someone pushing other kids on the playground. What should he do?",
        options: [
          { text: "Tell a teacher about what's happening", isGood: true, feedback: "Good job! Getting help from an adult is the right thing to do when someone might get hurt." },
          { text: "Join in and start pushing kids too", isGood: false, feedback: "Pushing others can hurt them and isn't a safe way to play." },
          { text: "Watch and do nothing about it", isGood: false, feedback: "When others might get hurt, it's important to get help instead of doing nothing." }
        ]
      },
      {
        text: "Lily finds a toy in the school hallway. What should she do?",
        options: [
          { text: "Take it to the teacher right away", isGood: true, feedback: "Perfect! Turning in lost items is honest and helps the person who lost it." },
          { text: "Keep the toy for herself", isGood: false, feedback: "Taking something that isn't yours isn't honest. It's best to turn it in." },
          { text: "Hide it in someone else's desk", isGood: false, feedback: "Hiding things in other people's desks can get them in trouble for something they didn't do." }
        ]
      },
      {
        text: "Ben forgot to bring his lunch to school. What should he do?",
        options: [
          { text: "Ask an adult for help", isGood: true, feedback: "Asking for help when you need it is a smart choice!" },
          { text: "Take another student's lunch when they aren't looking", isGood: false, feedback: "Taking something without permission isn't right, even if you're hungry." },
          { text: "Not eat anything and stay hungry all day", isGood: false, feedback: "It's important to ask for help when you need it rather than staying hungry." }
        ]
      },
      {
        text: "Sofia sees a new student who looks nervous on their first day. What should she do?",
        options: [
          { text: "Introduce herself and offer to be their friend", isGood: true, feedback: "Wonderful! Being friendly to new students helps them feel welcome." },
          { text: "Ignore the new student", isGood: false, feedback: "Starting at a new school can be scary. Being friendly helps new students feel welcome." },
          { text: "Tell other students not to talk to the new kid", isGood: false, feedback: "Excluding others can hurt their feelings. Being welcoming is a better choice." }
        ]
      }
    ],

    olderScenarios: [
      {
        text: "Tyler accidentally breaks his friend's new pencil. What should he do?",
        options: [
          { text: "Apologize and offer to replace it", isGood: true, feedback: "Taking responsibility and making things right shows you care about others!" },
          { text: "Hide the broken pencil", isGood: false, feedback: "Hiding mistakes doesn't fix them. Apologizing and making it right is better." },
          { text: "Tell his friend to be more careful with his things", isGood: false, feedback: "Blaming others for accidents isn't kind. Apologizing is a better choice." }
        ]
      },
      {
        text: "Olivia hears her friends saying mean things about another student. What should she do?",
        options: [
          { text: "Tell her friends that saying mean things isn't nice", isGood: true, feedback: "Standing up for others is brave and kind. Great choice!" },
          { text: "Join in and say mean things too", isGood: false, feedback: "Saying mean things about others can hurt their feelings. It's better to be kind." },
          { text: "Say nothing and continue listening", isGood: false, feedback: "When you hear unkind words, speaking up can help stop hurtful behavior." }
        ]
      },
      {
        text: "Miguel finds $5 on the classroom floor and no one sees him pick it up. What should he do?",
        options: [
          { text: "Give it to the teacher in case someone is looking for it", isGood: true, feedback: "Turning in found money is honest and shows integrity!" },
          { text: "Keep it and use it to buy candy after school", isGood: false, feedback: "Even if no one saw you find it, keeping found money that might belong to someone else isn't honest." },
          { text: "Tell everyone he earned the money himself", isGood: false, feedback: "Making up stories about how you got something isn't truthful." }
        ]
      },
      {
        text: "Zoe has a lot of homework and her friend offers to let her copy their answers. What should she do?",
        options: [
          { text: "Decline and do her own work, even if it takes longer", isGood: true, feedback: "Doing your own work helps you learn and is the honest thing to do!" },
          { text: "Copy the answers so she can finish quickly", isGood: false, feedback: "Copying someone else's work doesn't help you learn and isn't honest." },
          { text: "Copy just a few answers and change the rest", isGood: false, feedback: "Even copying some answers isn't your own work. It's best to do it yourself." }
        ]
      },
      {
        text: "During a test, Alex notices another student looking at his answers. What should he do?",
        options: [
          { text: "Cover his paper and tell the teacher after the test", isGood: true, feedback: "Good choice! Protecting your work and reporting problems to an adult is responsible." },
          { text: "Show the student his answers on purpose", isGood: false, feedback: "Helping someone cheat doesn't help them learn and isn't honest." },
          { text: "Yell at the student during the test", isGood: false, feedback: "Disrupting the class isn't helpful. Quietly protecting your work and telling the teacher later is better." }
        ]
      },
      {
        text: "Isabella sees that someone wrote on the bathroom wall. What should she do?",
        options: [
          { text: "Tell a teacher or staff member about it", isGood: true, feedback: "Reporting damage helps keep the school clean and nice for everyone!" },
          { text: "Add her own drawing next to it", isGood: false, feedback: "Adding to graffiti damages school property even more." },
          { text: "Tell other students to come see the funny writing", isGood: false, feedback: "Drawing attention to vandalism might encourage more students to do it." }
        ]
      },
      {
        text: "Nathan's team loses a game and he feels upset. What should he do?",
        options: [
          { text: "Congratulate the other team and practice more for next time", isGood: true, feedback: "Being a good sport when you lose shows character and respect!" },
          { text: "Refuse to shake hands with the other team", isGood: false, feedback: "Good sportsmanship means being respectful even when you lose." },
          { text: "Blame his teammates for the loss", isGood: false, feedback: "Blaming others doesn't help the team. Supporting each other and practicing is better." }
        ]
      },
      {
        text: "Ava's friend asks her to keep a secret that involves breaking a school rule. What should she do?",
        options: [
          { text: "Tell her friend she can't keep secrets about breaking rules", isGood: true, feedback: "Good choice! Some secrets shouldn't be kept, especially if rules are being broken." },
          { text: "Promise to keep the secret no matter what", isGood: false, feedback: "Some secrets can be harmful and shouldn't be kept, especially about breaking rules." },
          { text: "Tell everyone at school about the secret", isGood: false, feedback: "Telling everyone would betray your friend's trust. It's better to just tell an adult if needed." }
        ]
      }
    ]
  },

  tr: {
    title: "İyi mi Kötü mü? - Karar Verme Oyunu",
    gameTitle: "İyi mi Kötü mü?",
    gameSubtitle: "Doğru seçimi yap!",
    selectLanguage: "Dil Seçin:",
    homeTitle: "İyi mi Kötü mü Oyununa Hoş Geldiniz!",
    homeDescription: "Farklı durumlarda iyi seçimler yapmayı öğrenin!",
    chooseLevel: "Sınıf seviyeni seç:",
    grades12: "1-2. Sınıflar",
    grades34: "3-4. Sınıflar",
    questionLabel: "Soru",
    scoreLabel: "Puan",
    loadingScenario: "Senaryo yükleniyor...",
    feedbackTitle: "Geri Bildirim",
    nextQuestion: "Sonraki Soru",
    imagePlaceholder: "[İyi ve Kötü Oyununa Hoş Geldiniz]",
    gameComplete: "Oyun Tamamlandı!",
    youScoredLabel: "Skorun",
    outOfLabel: "üzerinden",
    resultMessageDefault: "İyi seçimler yaptığın için harika!",
    resultMessagePerfect: "Mükemmel skor! İyi seçimler yapmada harikasın!",
    resultMessageGreat: "Harika! İyi seçimler yapmayı biliyorsun!",
    resultMessageGood: "Güzel çaba! Daha da iyi olmak için pratik yap!",
    resultMessageKeepLearning: "Öğrenmeye devam! Karar verme becerilerini geliştirmek için tekrar dene!",
    playAgain: "Tekrar Oyna",
    home: "Ana Sayfa",
    feedbackCorrectTitle: "Harika iş! 🌟",
    feedbackIncorrectTitle: "Bir dahaki sefere dene! 🤔",
    youngerScenarios: [
      {
        text: "Sarah bir sınıf arkadaşının kalem kutusunu düşürdüğünü görüyor. Ne yapmalı?",
        options: [
          { text: "Onu alıp sınıf arkadaşına geri vermek", isGood: true, feedback: "Harika seçim! Başkalarına yardım etmek her zaman iyidir." },
          { text: "Görmezden gelip yürümeye devam etmek", isGood: false, feedback: "Kalem kutusunu alıp sınıf arkadaşına vermek daha iyi olurdu." },
          { text: "Onu alıp kendine saklamak", isGood: false, feedback: "Başkalarına ait bir şeyi almak doğru değildir. Geri vermek daha iyidir." }
        ]
      },
      {
        text: "Max öğle yemeğinde yalnız oturan bir öğrenci görüyor. Ne yapmalı?",
        options: [
          { text: "Öğrenciye gelip kendisine ve arkadaşlarına katılmak isteyip istemediğini sormak", isGood: true, feedback: "Mükemmel! İnsanları dahil etmek herkesin hoş karşılanmasına yardımcı olur." },
          { text: "Öğrenciyi görmezden gelip arkadaşlarıyla yemeye devam etmek", isGood: false, feedback: "Biri yalnızsa onu yanına davet etmek güzel olur." },
          { text: "Arkadaşlarına yalnız oturan öğrenciyle dalga geçmelerini söylemek", isGood: false, feedback: "Başkalarıyla alay etmek duygularını incitebilir. Nazik olmak daha iyidir." }
        ]
      },
      {
        text: "Jamie yanlışlıkla sınıftaki bir oyuncağı kırdı. Ne yapmalı?",
        options: [
          { text: "Ne olduğunu öğretmene söyleyip özür dilemek", isGood: true, feedback: "Hata yaptığında dürüst olmak doğru olandır!" },
          { text: "Kimse bilmesin diye kırık oyuncağı saklamak", isGood: false, feedback: "Hataları saklamak sorunları çözmez. Dürüst olmak daha iyidir." },
          { text: "Başka bir öğrenciyi kırdı diye suçlamak", isGood: false, feedback: "Hataların için başkalarını suçlamak dürüst ve adil değildir." }
        ]
      },
      {
        text: "Emma, arkadaşının bir şeyi nasıl yapacağını anlamadığını fark ediyor. Ne yapmalı?",
        options: [
          { text: "Açıklamaya yardım etmeyi teklif etmek", isGood: true, feedback: "Arkadaşlarına öğrenmelerinde yardımcı olmak nazik ve destekleyicidir!" },
          { text: "Arkadaşına yeterince zeki olmadığını söylemek", isGood: false, feedback: "Kırıcı sözler kimseye yardımcı olmaz. Destek olmak daha iyidir." },
          { text: "Uzaklaşıp arkadaşını kafası karışık bırakmak", isGood: false, feedback: "Arkadaşlar ihtiyaç duyduğunda birbirine yardım eder. Uzaklaşmak yardımcı olmaz." }
        ]
      },
      {
        text: "Noah, oyun alanında birinin diğer çocukları ittiğini görüyor. Ne yapmalı?",
        options: [
          { text: "Olanları bir öğretmene söylemek", isGood: true, feedback: "Aferin! Biri incinebilecekse bir yetişkinden yardım istemek doğrudur." },
          { text: "Katılıp çocukları itmeye başlamak", isGood: false, feedback: "Başkalarını itmek onları incitebilir ve güvenli bir oyun değildir." },
          { text: "İzlemek ve hiçbir şey yapmamak", isGood: false, feedback: "Başkaları incinebilirken yardım almak önemlidir, hiçbir şey yapmamak değil." }
        ]
      },
      {
        text: "Lily okul koridorunda bir oyuncak buluyor. Ne yapmalı?",
        options: [
          { text: "Hemen öğretmene götürmek", isGood: true, feedback: "Harika! Kayıp eşyaları teslim etmek dürüstlüktür ve sahibine yardım eder." },
          { text: "Oyuncağı kendine saklamak", isGood: false, feedback: "Sana ait olmayan bir şeyi almak dürüst değildir. En iyisi teslim etmektir." },
          { text: "Başkasının sırasına saklamak", isGood: false, feedback: "Eşyaları başkasının sırasına saklamak, yapmadıkları bir şey için zor durumda kalmalarına yol açabilir." }
        ]
      },
      {
        text: "Ben okula öğle yemeğini getirmeyi unuttu. Ne yapmalı?",
        options: [
          { text: "Bir yetişkinden yardım istemek", isGood: true, feedback: "İhtiyacın olduğunda yardım istemek akıllıca bir seçimdir!" },
          { text: "Başka bir öğrencinin yemeğini bakmıyorken almak", isGood: false, feedback: "İzinsiz bir şeyi almak doğru değildir, aç olsan bile." },
          { text: "Hiçbir şey yememek ve bütün gün aç kalmak", isGood: false, feedback: "Aç kalmak yerine ihtiyaç duyduğunda yardım istemek önemlidir." }
        ]
      },
      {
        text: "Sofia, ilk gününde gergin görünen yeni bir öğrenci görüyor. Ne yapmalı?",
        options: [
          { text: "Kendini tanıtıp arkadaş olmayı teklif etmek", isGood: true, feedback: "Harika! Yeni öğrencilere dostça davranmak onların hoş karşılanmasını sağlar." },
          { text: "Yeni öğrenciyi görmezden gelmek", isGood: false, feedback: "Yeni bir okula başlamak korkutucu olabilir. Dostça davranmak yeni öğrencilerin iyi hissetmesine yardımcı olur." },
          { text: "Diğer öğrencilere yeni çocukla konuşmamalarını söylemek", isGood: false, feedback: "İnsanları dışlamak duygularını incitebilir. Hoş karşılamak daha iyi bir seçimdir." }
        ]
      }
    ],
    olderScenarios: [
      {
        text: "Tyler yanlışlıkla arkadaşının yeni kalemini kırdı. Ne yapmalı?",
        options: [
          { text: "Özür dileyip yerine yenisini almayı teklif etmek", isGood: true, feedback: "Sorumluluk almak ve telafi etmek başkalarını önemsediğini gösterir!" },
          { text: "Kırık kalemi saklamak", isGood: false, feedback: "Hataları saklamak onları düzeltmez. Özür dileyip telafi etmek daha iyidir." },
          { text: "Arkadaşına eşyalarına daha dikkatli olmasını söylemek", isGood: false, feedback: "Kazalar için başkalarını suçlamak nazik değildir. Özür dilemek daha iyi bir seçimdir." }
        ]
      },
      {
        text: "Olivia, arkadaşlarının başka bir öğrenci hakkında kaba şeyler söylediğini duyuyor. Ne yapmalı?",
        options: [
          { text: "Arkadaşlarına kaba sözler söylemenin doğru olmadığını söylemek", isGood: true, feedback: "Başkaları için ayağa kalkmak cesur ve naziktir. Harika seçim!" },
          { text: "Katılıp o da kaba şeyler söylemek", isGood: false, feedback: "Başkaları hakkında kaba sözler söylemek duygularını incitebilir. Nazik olmak daha iyidir." },
          { text: "Hiçbir şey söylemeden dinlemeye devam etmek", isGood: false, feedback: "Kırıcı sözler duyduğunda konuşmak, incitici davranışı durdurmaya yardımcı olabilir." }
        ]
      },
      {
        text: "Miguel sınıfın zemininde 5 dolar buluyor ve kimse onu alırken görmüyor. Ne yapmalı?",
        options: [
          { text: "Birisi arıyor olabilir diye öğretmene vermek", isGood: true, feedback: "Bulunan parayı teslim etmek dürüstlüktür ve bütünlük gösterir!" },
          { text: "Saklayıp okuldan sonra şeker almak için kullanmak", isGood: false, feedback: "Kimse görmese bile, bir başkasına ait olabilecek parayı tutmak dürüst değildir." },
          { text: "Parayı kendisinin kazandığını söylemek", isGood: false, feedback: "Bir şeyi nasıl aldığın hakkında hikaye uydurmak doğru değildir." }
        ]
      },
      {
        text: "Zoe'nin çok ödevi var ve arkadaşı cevaplarını kopya etmesine izin etmeyi teklif ediyor. Ne yapmalı?",
        options: [
          { text: "Reddedip daha uzun sürse bile kendi işini yapmak", isGood: true, feedback: "Kendi işini yapmak öğrenmene yardımcı olur ve dürüst olandır!" },
          { text: "Hızlı bitirmek için cevapları kopyalamak", isGood: false, feedback: "Başkasının işini kopyalamak öğrenmene yardımcı olmaz ve dürüst değildir." },
          { text: "Sadece birkaç cevabı kopyalayıp geri kalanını değiştirmek", isGood: false, feedback: "Birkaç cevabı kopyalamak bile kendi çalışman değildir. En iyisi kendin yapmaktır." }
        ]
      },
      {
        text: "Bir sınav sırasında Alex başka bir öğrencinin cevaplarına baktığını fark ediyor. Ne yapmalı?",
        options: [
          { text: "Kağıdını kapatıp sınavdan sonra öğretmene söylemek", isGood: true, feedback: "İyi seçim! Çalışmanı korumak ve bir yetişkine bildirmek sorumluluktur." },
          { text: "Öğrenciye bilerek cevaplarını göstermek", isGood: false, feedback: "Birine kopya çekmesine yardım etmek öğrenmesine yardımcı olmaz ve dürüst değildir." },
          { text: "Sınav sırasında öğrenciye bağırmak", isGood: false, feedback: "Dersi bölmek yardımcı olmaz. Sessizce çalışmanı korumak ve sonra öğretmene söylemek daha iyidir." }
        ]
      },
      {
        text: "Isabella birinin tuvalet duvarına yazı yazdığını görüyor. Ne yapmalı?",
        options: [
          { text: "Bir öğretmene veya görevliye haber vermek", isGood: true, feedback: "Zararı bildirmek okulu herkes için temiz ve güzel tutmaya yardımcı olur!" },
          { text: "Yanına kendi çizimini eklemek", isGood: false, feedback: "Grafitiye ekleme yapmak okul eşyalarına daha fazla zarar verir." },
          { text: "Diğer öğrencilere komik yazıyı gelin görün demek", isGood: false, feedback: "Vandallığı yaymak daha fazla öğrenciyi bunu yapmaya teşvik edebilir." }
        ]
      },
      {
        text: "Nathan'ın takımı bir maçı kaybediyor ve o üzgün hissediyor. Ne yapmalı?",
        options: [
          { text: "Diğer takımı tebrik etmek ve bir dahaki sefere daha çok çalışmak", isGood: true, feedback: "Kaybettiğinde centilmen olmak karakter ve saygı gösterir!" },
          { text: "Diğer takımla el sıkışmayı reddetmek", isGood: false, feedback: "İyi sporculuk kaybetsen bile saygılı olmayı gerektirir." },
          { text: "Kaybetmekten takım arkadaşlarını suçlamak", isGood: false, feedback: "Başkalarını suçlamak takıma yardımcı olmaz. Birbirinizi desteklemek ve pratik yapmak daha iyidir." }
        ]
      },
      {
        text: "Ava'nın arkadaşı, okul kuralını çiğnemekle ilgili bir sırrı saklamasını istiyor. Ne yapmalı?",
        options: [
          { text: "Kuralları çiğnemekle ilgili sırları saklayamayacağını söylemek", isGood: true, feedback: "İyi seçim! Bazı sırlar saklanmamalıdır, özellikle kurallar çiğneniyorsa." },
          { text: "Ne olursa olsun sırrı saklayacağına söz vermek", isGood: false, feedback: "Bazı sırlar zararlı olabilir ve özellikle kuralları çiğnemekle ilgiliyse saklanmamalıdır." },
          { text: "Okuldaki herkese sırrı anlatmak", isGood: false, feedback: "Herkese anlatmak arkadaşının güvenini bozar. Gerekirse sadece bir yetişkine söylemek daha iyidir." }
        ]
      }
    ]
  },

  pl: {
    title: "Dobry czy Zły? - Gra Decyzyjna",
    gameTitle: "Dobry czy Zły?",
    gameSubtitle: "Wybierz właściwą opcję!",
    selectLanguage: "Wybierz język:",
    homeTitle: "Witamy w grze Dobry czy Zły!",
    homeDescription: "Ucz się podejmować dobre decyzje w różnych sytuacjach!",
    chooseLevel: "Wybierz swój poziom klasy:",
    grades12: "Klasy 1-2",
    grades34: "Klasy 3-4",
    questionLabel: "Pytanie",
    scoreLabel: "Wynik",
    loadingScenario: "Ładowanie scenariusza...",
    feedbackTitle: "Informacja zwrotna",
    nextQuestion: "Następne pytanie",
    imagePlaceholder: "[Witamy w grze Dobry i Zły]",
    gameComplete: "Koniec gry!",
    youScoredLabel: "Zdobyłeś",
    outOfLabel: "z",
    resultMessageDefault: "Świetna robota przy podejmowaniu dobrych decyzji!",
    resultMessagePerfect: "Perfekcyjny wynik! Jesteś świetny w podejmowaniu dobrych decyzji!",
    resultMessageGreat: "Brawo! Wiesz, jak podejmować dobre decyzje!",
    resultMessageGood: "Dobra robota! Ćwicz dalej, by być jeszcze lepszym!",
    resultMessageKeepLearning: "Ucz się dalej! Spróbuj ponownie, aby poprawić umiejętność podejmowania decyzji!",
    playAgain: "Zagraj ponownie",
    home: "Strona główna",
    feedbackCorrectTitle: "Świetna robota! 🌟",
    feedbackIncorrectTitle: "Spróbuj następnym razem! 🤔",
    youngerScenarios: [
      {
        text: "Sarah widzi, jak kolega z klasy upuszcza piórnik. Co powinna zrobić?",
        options: [
          { text: "Podnieść go i oddać koledze z klasy", isGood: true, feedback: "Świetny wybór! Pomaganie innym to zawsze dobra rzecz." },
          { text: "Zignorować i iść dalej", isGood: false, feedback: "Lepiej byłoby pomóc koledze, podnosząc jego piórnik." },
          { text: "Podnieść i zatrzymać dla siebie", isGood: false, feedback: "Branie rzeczy należących do innych nie jest w porządku. Lepiej oddać." }
        ]
      },
      {
        text: "Max widzi ucznia siedzącego samotnie podczas obiadu. Co powinien zrobić?",
        options: [
          { text: "Zapytać, czy chce dołączyć do niego i jego przyjaciół", isGood: true, feedback: "Wspaniale! Włączanie innych sprawia, że każdy czuje się mile widziany." },
          { text: "Zignorować ucznia i jeść dalej z przyjaciółmi", isGood: false, feedback: "Gdy ktoś jest sam, miło jest zaprosić go do siebie." },
          { text: "Kazać przyjaciołom śmiać się z samotnego ucznia", isGood: false, feedback: "Wyśmiewanie innych może zranić ich uczucia. Lepiej być życzliwym." }
        ]
      },
      {
        text: "Jamie przypadkowo zepsuł zabawkę w klasie. Co powinien zrobić?",
        options: [
          { text: "Powiedzieć nauczycielowi, co się stało, i przeprosić", isGood: true, feedback: "Bycie szczerym, gdy popełniasz błąd, jest właściwe!" },
          { text: "Schować zepsutą zabawkę, żeby nikt się nie dowiedział", isGood: false, feedback: "Ukrywanie błędów nie rozwiązuje problemów. Lepiej być szczerym." },
          { text: "Obwinić innego ucznia za jej zepsucie", isGood: false, feedback: "Obwinianie innych za własne błędy nie jest uczciwe ani sprawiedliwe." }
        ]
      },
      {
        text: "Emma zauważa, że jej koleżanka nie rozumie, jak coś zrobić. Co powinna zrobić?",
        options: [
          { text: "Zaproponować pomoc w wytłumaczeniu", isGood: true, feedback: "Pomaganie przyjaciołom w nauce jest miłe i wspierające!" },
          { text: "Powiedzieć koleżance, że nie jest wystarczająco mądra", isGood: false, feedback: "Raniące słowa nikomu nie pomagają. Lepiej wspierać." },
          { text: "Odejść i zostawić koleżankę zdezorientowaną", isGood: false, feedback: "Przyjaciele pomagają sobie, gdy tego potrzebują. Odejście nie pomaga." }
        ]
      },
      {
        text: "Noah widzi kogoś, kto popycha inne dzieci na placu zabaw. Co powinien zrobić?",
        options: [
          { text: "Powiedzieć o tym nauczycielowi", isGood: true, feedback: "Dobra robota! Gdy ktoś może zostać zraniony, trzeba poprosić dorosłego o pomoc." },
          { text: "Dołączyć i samemu zacząć popychać", isGood: false, feedback: "Popychanie może zranić i nie jest bezpieczną zabawą." },
          { text: "Patrzeć i nic nie robić", isGood: false, feedback: "Gdy inni mogą zostać zranieni, ważne jest, by poprosić o pomoc, a nie nic nie robić." }
        ]
      },
      {
        text: "Lily znajduje zabawkę na szkolnym korytarzu. Co powinna zrobić?",
        options: [
          { text: "Oddać ją od razu nauczycielowi", isGood: true, feedback: "Świetnie! Oddawanie znalezionych rzeczy jest uczciwe i pomaga właścicielowi." },
          { text: "Zatrzymać zabawkę dla siebie", isGood: false, feedback: "Zabieranie czegoś, co nie należy do ciebie, nie jest uczciwe. Najlepiej oddać." },
          { text: "Schować ją w cudzej ławce", isGood: false, feedback: "Chowanie rzeczy w cudzej ławce może wplątać tę osobę w kłopoty bez winy." }
        ]
      },
      {
        text: "Ben zapomniał przynieść śniadanie do szkoły. Co powinien zrobić?",
        options: [
          { text: "Poprosić dorosłego o pomoc", isGood: true, feedback: "Proszenie o pomoc, gdy jej potrzebujesz, to mądry wybór!" },
          { text: "Wziąć śniadanie innego ucznia, gdy nie patrzy", isGood: false, feedback: "Branie czegoś bez pozwolenia nie jest w porządku, nawet jeśli jesteś głodny." },
          { text: "Nic nie jeść i być głodnym przez cały dzień", isGood: false, feedback: "Zamiast głodować, ważne jest, by poprosić o pomoc, gdy jej potrzebujesz." }
        ]
      },
      {
        text: "Sofia widzi nowego ucznia, który wygląda na zdenerwowanego pierwszego dnia. Co powinna zrobić?",
        options: [
          { text: "Przedstawić się i zaproponować, że zostanie przyjaciółką", isGood: true, feedback: "Wspaniale! Bycie życzliwym dla nowych uczniów sprawia, że czują się mile widziani." },
          { text: "Zignorować nowego ucznia", isGood: false, feedback: "Rozpoczęcie nauki w nowej szkole bywa straszne. Życzliwość pomaga nowym czuć się lepiej." },
          { text: "Powiedzieć innym, aby nie rozmawiali z nowym", isGood: false, feedback: "Wykluczanie innych może zranić ich uczucia. Lepiej być gościnnym." }
        ]
      }
    ],
    olderScenarios: [
      {
        text: "Tyler przypadkowo złamał nowy ołówek kolegi. Co powinien zrobić?",
        options: [
          { text: "Przeprosić i zaproponować, że go zastąpi", isGood: true, feedback: "Branie odpowiedzialności i naprawianie szkody pokazuje, że dbasz o innych!" },
          { text: "Schować złamany ołówek", isGood: false, feedback: "Ukrywanie błędów ich nie naprawia. Lepiej przeprosić i to naprawić." },
          { text: "Powiedzieć koledze, żeby bardziej uważał na swoje rzeczy", isGood: false, feedback: "Obwinianie innych za wypadki nie jest miłe. Lepiej przeprosić." }
        ]
      },
      {
        text: "Olivia słyszy, jak jej przyjaciółki mówią niemiłe rzeczy o innym uczniu. Co powinna zrobić?",
        options: [
          { text: "Powiedzieć im, że mówienie niemiłych rzeczy nie jest w porządku", isGood: true, feedback: "Wstawianie się za innymi jest odważne i życzliwe. Świetny wybór!" },
          { text: "Dołączyć i też mówić niemiłe rzeczy", isGood: false, feedback: "Mówienie źle o innych może zranić ich uczucia. Lepiej być miłym." },
          { text: "Nic nie mówić i dalej słuchać", isGood: false, feedback: "Gdy słyszysz niemiłe słowa, zabranie głosu może pomóc zatrzymać krzywdzące zachowanie." }
        ]
      },
      {
        text: "Miguel znajduje 5 dolarów na podłodze w klasie i nikt nie widzi, jak je podnosi. Co powinien zrobić?",
        options: [
          { text: "Oddać je nauczycielowi na wypadek, gdyby ktoś ich szukał", isGood: true, feedback: "Oddanie znalezionych pieniędzy jest uczciwe i pokazuje prawość!" },
          { text: "Zatrzymać i kupić za nie słodycze po szkole", isGood: false, feedback: "Nawet jeśli nikt nie widział, zatrzymywanie pieniędzy, które mogą należeć do kogoś innego, nie jest uczciwe." },
          { text: "Powiedzieć wszystkim, że sam zarobił te pieniądze", isGood: false, feedback: "Wymyślanie historii o tym, skąd coś masz, nie jest prawdziwe." }
        ]
      },
      {
        text: "Zoe ma dużo pracy domowej, a koleżanka proponuje, że pozwoli jej skopiować odpowiedzi. Co powinna zrobić?",
        options: [
          { text: "Odmówić i zrobić własną pracę, nawet jeśli zajmie to dłużej", isGood: true, feedback: "Robienie własnej pracy pomaga się uczyć i jest uczciwe!" },
          { text: "Skopiować odpowiedzi, żeby szybciej skończyć", isGood: false, feedback: "Kopiowanie cudzej pracy nie pomaga się uczyć i nie jest uczciwe." },
          { text: "Skopiować tylko kilka odpowiedzi i resztę zmienić", isGood: false, feedback: "Nawet kopiowanie kilku odpowiedzi to nie jest twoja praca. Najlepiej zrobić ją samodzielnie." }
        ]
      },
      {
        text: "Podczas testu Alex zauważa, że inny uczeń patrzy na jego odpowiedzi. Co powinien zrobić?",
        options: [
          { text: "Zasłonić swoją kartkę i powiedzieć o tym nauczycielowi po teście", isGood: true, feedback: "Dobry wybór! Chronienie swojej pracy i zgłoszenie problemu dorosłemu jest odpowiedzialne." },
          { text: "Celowo pokazać uczniowi swoje odpowiedzi", isGood: false, feedback: "Pomaganie komuś w oszukiwaniu nie pomaga mu się uczyć i nie jest uczciwe." },
          { text: "Krzyczeć na ucznia podczas testu", isGood: false, feedback: "Przerywanie lekcji nie pomaga. Lepiej spokojnie ochronić swoją pracę i powiedzieć nauczycielowi później." }
        ]
      },
      {
        text: "Isabella widzi, że ktoś napisał na ścianie w toalecie. Co powinna zrobić?",
        options: [
          { text: "Powiedzieć o tym nauczycielowi lub pracownikowi szkoły", isGood: true, feedback: "Zgłaszanie szkód pomaga utrzymać szkołę czystą i ładną dla wszystkich!" },
          { text: "Dodać obok własny rysunek", isGood: false, feedback: "Dodawanie graffiti jeszcze bardziej niszczy mienie szkoły." },
          { text: "Powiedzieć innym uczniom, żeby przyszli zobaczyć zabawny napis", isGood: false, feedback: "Rozsławianie wandalizmu może zachęcić innych do podobnych działań." }
        ]
      },
      {
        text: "Drużyna Nathana przegrywa mecz i on jest smutny. Co powinien zrobić?",
        options: [
          { text: "Pogratulować drugiej drużynie i więcej trenować na następny raz", isGood: true, feedback: "Bycie fair play po porażce pokazuje charakter i szacunek!" },
          { text: "Odmówić podania ręki drugiej drużynie", isGood: false, feedback: "Dobre wychowanie w sporcie oznacza bycie uprzejmym nawet po przegranej." },
          { text: "Obwinić kolegów z drużyny za porażkę", isGood: false, feedback: "Obwinianie innych nie pomaga drużynie. Lepiej wspierać się i trenować." }
        ]
      },
      {
        text: "Przyjaciółka Avy prosi ją o zachowanie tajemnicy, która dotyczy złamania szkolnej zasady. Co powinna zrobić?",
        options: [
          { text: "Powiedzieć, że nie może trzymać w tajemnicy łamania zasad", isGood: true, feedback: "Dobry wybór! Niektórych tajemnic nie powinno się zachowywać, zwłaszcza gdy łamane są zasady." },
          { text: "Obiecać, że zachowa tajemnicę bez względu na wszystko", isGood: false, feedback: "Niektóre tajemnice mogą być szkodliwe i nie powinny być zachowywane, zwłaszcza o łamaniu zasad." },
          { text: "Powiedzieć o tej tajemnicy wszystkim w szkole", isGood: false, feedback: "Mówienie wszystkim zawiódłoby zaufanie przyjaciółki. Lepiej powiedzieć tylko dorosłemu, jeśli to konieczne." }
        ]
      }
    ]
  },

  nl: {
    title: "Goed of Fout? - Beslissingsspel",
    gameTitle: "Goed of Fout?",
    gameSubtitle: "Maak de juiste keuze!",
    selectLanguage: "Selecteer taal:",
    homeTitle: "Welkom bij het spel Goed of Fout!",
    homeDescription: "Leer goede keuzes maken in verschillende situaties!",
    chooseLevel: "Kies je leerjaar:",
    grades12: "Groep 3-4",
    grades34: "Groep 5-6",
    questionLabel: "Vraag",
    scoreLabel: "Score",
    loadingScenario: "Scenario laden...",
    feedbackTitle: "Feedback",
    nextQuestion: "Volgende vraag",
    imagePlaceholder: "[Welkom bij Goed en Fout Spel]",
    gameComplete: "Spel voltooid!",
    youScoredLabel: "Je hebt",
    outOfLabel: "van de",
    resultMessageDefault: "Goed gedaan met het maken van goede keuzes!",
    resultMessagePerfect: "Perfecte score! Je bent geweldig in goede keuzes maken!",
    resultMessageGreat: "Goed gedaan! Je weet hoe je goede keuzes maakt!",
    resultMessageGood: "Goede poging! Blijf oefenen om nog beter te worden!",
    resultMessageKeepLearning: "Blijf leren! Probeer opnieuw om je besluitvaardigheid te verbeteren!",
    playAgain: "Speel opnieuw",
    home: "Home",
    feedbackCorrectTitle: "Goed gedaan! 🌟",
    feedbackIncorrectTitle: "Probeer het de volgende keer! 🤔",
    youngerScenarios: [
      {
        text: "Sarah ziet dat een klasgenoot haar etui laat vallen. Wat moet ze doen?",
        options: [
          { text: "Het oppakken en teruggeven aan haar klasgenoot", isGood: true, feedback: "Topkeuze! Anderen helpen is altijd goed." },
          { text: "Negeer het en loop door", isGood: false, feedback: "Het is beter om te helpen door het etui op te rapen en terug te geven." },
          { text: "Oppakken en zelf houden", isGood: false, feedback: "Iets van iemand anders afpakken is niet juist. Teruggeven is beter." }
        ]
      },
      {
        text: "Max ziet tijdens de lunch een leerling alleen zitten. Wat moet hij doen?",
        options: [
          { text: "Vragen of de leerling bij hem en zijn vrienden wil zitten", isGood: true, feedback: "Geweldig! Anderen betrekken zorgt dat iedereen zich welkom voelt." },
          { text: "De leerling negeren en met zijn vrienden verder eten", isGood: false, feedback: "Als iemand alleen is, is het fijn om hem of haar uit te nodigen." },
          { text: "Zijn vrienden vragen om die leerling uit te lachen", isGood: false, feedback: "Iemand uitlachen kan gevoelens kwetsen. Vriendelijk zijn is beter." }
        ]
      },
      {
        text: "Jamie breekt per ongeluk een speelgoed in de klas. Wat moet hij doen?",
        options: [
          { text: "De juf of meester vertellen wat er gebeurde en excuses aanbieden", isGood: true, feedback: "Eerlijk zijn als je een fout maakt is het juiste om te doen!" },
          { text: "Het kapotte speelgoed verstoppen zodat niemand het weet", isGood: false, feedback: "Fouten verbergen lost niets op. Eerlijk zijn is beter." },
          { text: "Een andere leerling de schuld geven", isGood: false, feedback: "Anderen de schuld geven voor jouw fouten is niet eerlijk." }
        ]
      },
      {
        text: "Emma merkt dat haar vriendin iets niet begrijpt. Wat moet ze doen?",
        options: [
          { text: "Aanbieden om het uit te leggen", isGood: true, feedback: "Vrienden helpen leren is vriendelijk en ondersteunend!" },
          { text: "Zeggen dat haar vriendin niet slim genoeg is", isGood: false, feedback: "Krenkende woorden helpen niemand. Steunen is beter." },
          { text: "Weglopen en haar vriendin in verwarring achterlaten", isGood: false, feedback: "Vrienden helpen elkaar als het nodig is. Weglopen helpt niet." }
        ]
      },
      {
        text: "Noah ziet iemand andere kinderen duwen op het schoolplein. Wat moet hij doen?",
        options: [
          { text: "Een leerkracht vertellen wat er gebeurt", isGood: true, feedback: "Goed gedaan! Een volwassene om hulp vragen is juist als iemand pijn kan doen." },
          { text: "Meedoen en ook kinderen gaan duwen", isGood: false, feedback: "Duwen kan pijn doen en is geen veilige manier van spelen." },
          { text: "Kijken en niets doen", isGood: false, feedback: "Als anderen pijn kunnen doen, is het belangrijk om hulp te halen in plaats van niets te doen." }
        ]
      },
      {
        text: "Lily vindt een speelgoed in de schoolgang. Wat moet ze doen?",
        options: [
          { text: "Het meteen naar de leerkracht brengen", isGood: true, feedback: "Perfect! Gevonden spullen inleveren is eerlijk en helpt degene die het kwijt is." },
          { text: "Het speelgoed zelf houden", isGood: false, feedback: "Iets houden dat niet van jou is, is niet eerlijk. Inleveren is het beste." },
          { text: "Het in iemands anders lade verstoppen", isGood: false, feedback: "Iets in andermans lade verstoppen kan hen onterecht in de problemen brengen." }
        ]
      },
      {
        text: "Ben is zijn lunch vergeten mee te nemen. Wat moet hij doen?",
        options: [
          { text: "Een volwassene om hulp vragen", isGood: true, feedback: "Om hulp vragen wanneer je die nodig hebt is een slimme keuze!" },
          { text: "De lunch van een andere leerling pakken als die niet kijkt", isGood: false, feedback: "Iets zonder toestemming pakken is niet goed, ook niet als je honger hebt." },
          { text: "Niets eten en de hele dag honger hebben", isGood: false, feedback: "Het is belangrijk om om hulp te vragen in plaats van honger te lijden." }
        ]
      },
      {
        text: "Sofia ziet een nieuwe leerling die zenuwachtig lijkt op de eerste dag. Wat moet ze doen?",
        options: [
          { text: "Zich voorstellen en aanbieden om vriend te zijn", isGood: true, feedback: "Geweldig! Vriendelijk zijn tegen nieuwe leerlingen helpt hen welkom te voelen." },
          { text: "De nieuwe leerling negeren", isGood: false, feedback: "Beginnen op een nieuwe school kan spannend zijn. Vriendelijk zijn helpt." },
          { text: "Andere leerlingen zeggen niet met de nieuwe te praten", isGood: false, feedback: "Mensen buitensluiten kan hun gevoelens kwetsen. Gastvrij zijn is beter." }
        ]
      }
    ],
    olderScenarios: [
      {
        text: "Tyler breekt per ongeluk de nieuwe potlood van zijn vriend. Wat moet hij doen?",
        options: [
          { text: "Excuses aanbieden en aanbieden om het te vervangen", isGood: true, feedback: "Verantwoordelijkheid nemen en het goedmaken laat zien dat je om anderen geeft!" },
          { text: "Het kapotte potlood verstoppen", isGood: false, feedback: "Fouten verbergen lost ze niet op. Excuses maken en het goedmaken is beter." },
          { text: "Zijn vriend vertellen voorzichtiger te zijn met zijn spullen", isGood: false, feedback: "Anderen de schuld geven van ongelukken is niet aardig. Excuses maken is beter." }
        ]
      },
      {
        text: "Olivia hoort haar vrienden gemene dingen zeggen over een andere leerling. Wat moet ze doen?",
        options: [
          { text: "Haar vrienden vertellen dat gemene dingen zeggen niet oké is", isGood: true, feedback: "Voor anderen opkomen is moedig en vriendelijk. Goede keuze!" },
          { text: "Meedoen en ook gemene dingen zeggen", isGood: false, feedback: "Gemene dingen zeggen kan gevoelens kwetsen. Vriendelijk zijn is beter." },
          { text: "Niets zeggen en blijven luisteren", isGood: false, feedback: "Als je gemene woorden hoort, kan iets zeggen helpen om het te stoppen." }
        ]
      },
      {
        text: "Miguel vindt 5 dollar op de klasvloer en niemand ziet hem het oppakken. Wat moet hij doen?",
        options: [
          { text: "Het aan de leerkracht geven voor het geval iemand het zoekt", isGood: true, feedback: "Gevonden geld inleveren is eerlijk en toont integriteit!" },
          { text: "Het houden en na school snoep kopen", isGood: false, feedback: "Zelfs als niemand het zag, is geld houden dat van iemand anders kan zijn niet eerlijk." },
          { text: "Iedereen vertellen dat hij het geld samengeverd heeft", isGood: false, feedback: "Verhalen verzinnen over hoe je iets kreeg is niet waar." }
        ]
      },
      {
        text: "Zoe heeft veel huiswerk en haar vriendin biedt aan dat ze haar antwoorden mag overschrijven. Wat moet ze doen?",
        options: [
          { text: "Weigeren en haar eigen werk doen, zelfs als het langer duurt", isGood: true, feedback: "Je eigen werk doen helpt je leren en is eerlijk!" },
          { text: "De antwoorden overschrijven om snel klaar te zijn", isGood: false, feedback: "Andermans werk kopiëren helpt je niet leren en is niet eerlijk." },
          { text: "Alleen een paar antwoorden overschrijven en de rest veranderen", isGood: false, feedback: "Zelfs een paar antwoorden kopiëren is niet je eigen werk. Doe het beter zelf." }
        ]
      },
      {
        text: "Tijdens een toets ziet Alex dat een andere leerling naar zijn antwoorden kijkt. Wat moet hij doen?",
        options: [
          { text: "Zijn papier afdekken en het na de toets aan de leerkracht vertellen", isGood: true, feedback: "Goede keuze! Je werk beschermen en het melden aan een volwassene is verantwoordelijk." },
          { text: "Opzettelijk zijn antwoorden laten zien", isGood: false, feedback: "Iemand helpen spieken helpt niet met leren en is niet eerlijk." },
          { text: "Tijdens de toets tegen de leerling schreeuwen", isGood: false, feedback: "De klas verstoren helpt niet. Bescherm rustig je werk en vertel het later." }
        ]
      },
      {
        text: "Isabella ziet dat iemand op de badkamerwand heeft geschreven. Wat moet ze doen?",
        options: [
          { text: "Een leerkracht of medewerker erover vertellen", isGood: true, feedback: "Schade melden helpt de school schoon en netjes te houden voor iedereen!" },
          { text: "Ernaast haar eigen tekening maken", isGood: false, feedback: "Meer graffiti maakt het eigendom van de school verder kapot." },
          { text: "Andere leerlingen vragen om de grappige tekst te komen bekijken", isGood: false, feedback: "Er aandacht aan geven kan anderen aanmoedigen hetzelfde te doen." }
        ]
      },
      {
        text: "Het team van Nathan verliest een wedstrijd en hij is verdrietig. Wat moet hij doen?",
        options: [
          { text: "Het andere team feliciteren en extra oefenen voor de volgende keer", isGood: true, feedback: "Sportief blijven bij verlies toont karakter en respect!" },
          { text: "Weigeren om handen te schudden met het andere team", isGood: false, feedback: "Goed sportmanschap betekent respectvol blijven, zelfs bij verlies." },
          { text: "Zijn teamgenoten de schuld geven van het verlies", isGood: false, feedback: "Anderen de schuld geven helpt het team niet. Steun elkaar en oefen." }
        ]
      },
      {
        text: "De vriendin van Ava vraagt haar een geheim te bewaren dat een schoolregel breekt. Wat moet ze doen?",
        options: [
          { text: "Zeggen dat ze geen geheimen kan bewaren over het breken van regels", isGood: true, feedback: "Goede keuze! Sommige geheimen moet je niet bewaren, zeker niet als regels worden gebroken." },
          { text: "Beloven het geheim hoe dan ook te bewaren", isGood: false, feedback: "Sommige geheimen kunnen schadelijk zijn en moet je niet bewaren, zeker niet over regels." },
          { text: "Iedereen op school over het geheim vertellen", isGood: false, feedback: "Iedereen vertellen schaadt het vertrouwen. Vertel het alleen aan een volwassene als het nodig is." }
        ]
      }
    ]
  },

  lt: {
    title: "Gera ar Bloga? - Sprendimų priėmimo žaidimas",
    gameTitle: "Gera ar Bloga?",
    gameSubtitle: "Pasirink teisingai!",
    selectLanguage: "Pasirinkti kalbą:",
    homeTitle: "Sveiki atvykę į „Gera ar Bloga“ žaidimą!",
    homeDescription: "Išmok gerų pasirinkimų įvairiose situacijose!",
    chooseLevel: "Pasirink savo klasę:",
    grades12: "1–2 klasės",
    grades34: "3–4 klasės",
    questionLabel: "Klausimas",
    scoreLabel: "Taškai",
    loadingScenario: "Įkeliama situacija...",
    feedbackTitle: "Atsiliepimas",
    nextQuestion: "Kitas klausimas",
    imagePlaceholder: "[Sveiki atvykę į Gero ir Blogo žaidimą]",
    gameComplete: "Žaidimas baigtas!",
    youScoredLabel: "Surinkai",
    outOfLabel: "iš",
    resultMessageDefault: "Puikus darbas darant gerus pasirinkimus!",
    resultMessagePerfect: "Tobulas rezultatas! Puikiai moki daryti gerus pasirinkimus!",
    resultMessageGreat: "Šaunu! Žinai, kaip daryti gerus pasirinkimus!",
    resultMessageGood: "Gerai padirbėta! Toliau praktikuokis ir būsi dar geresnis!",
    resultMessageKeepLearning: "Tęsk mokymąsi! Bandyk dar kartą, kad pagerintum sprendimų priėmimo įgūdžius!",
    playAgain: "Žaisti dar kartą",
    home: "Pradžia",
    feedbackCorrectTitle: "Puiku! 🌟",
    feedbackIncorrectTitle: "Kitą kartą pavyks! 🤔",
    youngerScenarios: [
      {
        text: "Sara pamato, kad klasės draugas numetė penalą. Ką ji turėtų daryti?",
        options: [
          { text: "Pakelti ir grąžinti klasės draugui", isGood: true, feedback: "Puikus pasirinkimas! Padėti kitiems visada yra gerai." },
          { text: "Nepaisyti ir eiti toliau", isGood: false, feedback: "Geriau būtų padėti – pakelti penalą ir grąžinti." },
          { text: "Pakelti ir pasilikti sau", isGood: false, feedback: "Imti tai, kas priklauso kitam, nėra teisinga. Geriau grąžinti." }
        ]
      },
      {
        text: "Per pietus Maxas pamato mokinį, sėdintį vieną. Ką jis turėtų daryti?",
        options: [
          { text: "Paklausti, ar nori prisijungti prie jo ir draugų", isGood: true, feedback: "Nuostabu! Įtraukdami kitus, visi jaučiasi laukiami." },
          { text: "Nepaisyti mokinio ir toliau valgyti su draugais", isGood: false, feedback: "Kai kas nors vienas, malonu pakviesti prisijungti." },
          { text: "Liepti draugams juoktis iš vienišo mokinio", isGood: false, feedback: "Pašaipos gali įskaudinti jausmus. Geriau būti maloniam." }
        ]
      },
      {
        text: "Džeimis netyčia sulaužė klasės žaislą. Ką jis turėtų daryti?",
        options: [
          { text: "Pap asakoti mokytojui, kas nutiko, ir atsiprašyti", isGood: true, feedback: "Būti sąžiningam, kai suklysti, yra teisinga!" },
          { text: "Paslėpti sulaužytą žaislą, kad niekas nesužinotų", isGood: false, feedback: "Slėpti klaidas problemų neišsprendžia. Geriau būti sąžiningam." },
          { text: "Apk altinti kitą mokinį, kad jis sulaužė", isGood: false, feedback: "Kaltinti kitus dėl savo klaidų nėra sąžininga." }
        ]
      },
      {
        text: "Ema pastebi, kad jos draugė nesupranta, kaip kažką padaryti. Ką ji turėtų daryti?",
        options: [
          { text: "Pasiūlyti padėti paaiškinti", isGood: true, feedback: "Padėti draugams mokytis yra malonu ir palaikoma!" },
          { text: "Pasakyti draugei, kad ji nepakankamai protinga", isGood: false, feedback: "Įžeidžiantys žodžiai niekam nepadeda. Geriau palaikyti." },
          { text: "Nueiti ir palikti draugę sutrikusią", isGood: false, feedback: "Draugai padeda vieni kitiems, kai to reikia. Išeiti nepadeda." }
        ]
      },
      {
        text: "Nojus mato, kad kažkas stumdo vaikus kieme. Ką jis turėtų daryti?",
        options: [
          { text: "Pasakyti apie tai mokytojui", isGood: true, feedback: "Puiku! Kai kas nors gali nukentėti, reikia kreiptis pagalbos į suaugusį." },
          { text: "Prisijungti ir taip pat stumdyti vaikus", isGood: false, feedback: "Stumdymasis gali sužeisti ir nėra saugus žaidimas." },
          { text: "Žiūrėti ir nieko nedaryti", isGood: false, feedback: "Kai kiti gali nukentėti, svarbu kreiptis pagalbos, o ne nieko nedaryti." }
        ]
      },
      {
        text: "Lily koridoriuje randa žaislą. Ką ji turėtų daryti?",
        options: [
          { text: "Tuoj pat nunešti mokytojui", isGood: true, feedback: "Puiku! Radinius perduoti yra sąžininga ir padeda savininkui." },
          { text: "Pasilikti žaislą sau", isGood: false, feedback: "Pasiimti tai, kas ne tavo, nėra sąžininga. Geriausia atiduoti." },
          { text: "Paslėpti jį kito mokinio suole", isGood: false, feedback: "Slėpti daiktus kito suole gali neteisingai įklampinti tą mokinį į bėdą." }
        ]
      },
      {
        text: "Ben pamiršo atsinešti pietus į mokyklą. Ką jis turėtų daryti?",
        options: [
          { text: "Paprašyti suaugusiojo pagalbos", isGood: true, feedback: "Prašyti pagalbos, kai jos reikia, – protingas pasirinkimas!" },
          { text: "Paimti kito mokinio pietus, kai jis nežiūri", isGood: false, feedback: "Imti be leidimo nėra teisinga, net jei esi alkanas." },
          { text: "Nieko nevalgyti ir visą dieną likti alkanam", isGood: false, feedback: "Svarbu prašyti pagalbos, o ne likti alkanam." }
        ]
      },
      {
        text: "Sofija pamato naują mokinį, kuris pirmą dieną atrodo nervingas. Ką ji turėtų daryti?",
        options: [
          { text: "Prisistatyti ir pasiūlyti draugystę", isGood: true, feedback: "Nuostabu! Būti draugiškam naujiems mokiniams padeda jiems jaustis laukiamiems." },
          { text: "Ignoruoti naują mokinį", isGood: false, feedback: "Pradėti mokslus naujoje mokykloje gali būti baisu. Draugiškumas padeda." },
          { text: "Liepti kitiems su nauju mokiniu nekalbėti", isGood: false, feedback: "Atstumti kitus gali įskaudinti. Geriau būti svetingam." }
        ]
      }
    ],
    olderScenarios: [
      {
        text: "Taileris netyčia sulaužo draugo naują pieštuką. Ką jis turėtų daryti?",
        options: [
          { text: "Atsiprašyti ir pasiūlyti jį pakeisti", isGood: true, feedback: "Prisiimti atsakomybę ir ištaisyti klaidą rodo, kad tau rūpi kiti!" },
          { text: "Paslėpti sulaužytą pieštuką", isGood: false, feedback: "Klaidas slėpti – tai jų neištaisyti. Geriau atsiprašyti ir ištaisyti." },
          { text: "Pasakyti draugui būti atsargesniam su savo daiktais", isGood: false, feedback: "Kaltinti kitus dėl nelaimių nėra malonu. Geriau atsiprašyti." }
        ]
      },
      {
        text: "Olivia girdi, kaip draugai sako piktus žodžius apie kitą mokinį. Ką ji turėtų daryti?",
        options: [
          { text: "Pasakyti draugams, kad sakyti piktus žodžius nėra gerai", isGood: true, feedback: "Ginti kitus yra drąsu ir malonu. Puikus pasirinkimas!" },
          { text: "Prisijungti ir taip pat sakyti piktus žodžius", isGood: false, feedback: "Pikti žodžiai gali įskaudinti. Geriau būti maloniai." },
          { text: "Nieko nesakyti ir toliau klausytis", isGood: false, feedback: "Kai girdi nemalonius žodžius, pasakyti ką nors gali padėti tai sustabdyti." }
        ]
      },
      {
        text: "Miguelis randa 5 dolerius klasėje ant grindų ir niekas nemato, kaip jis juos pakelia. Ką jis turėtų daryti?",
        options: [
          { text: "Atiduoti mokytojui, jei kas jų ieško", isGood: true, feedback: "Rastus pinigus atiduoti – sąžininga ir rodo dorą!" },
          { text: "Pasilikti ir po pamokų nusipirkti saldainių", isGood: false, feedback: "Net jei niekas nematė, pasilikti pinigus, kurie gali priklausyti kitam, nėra sąžininga." },
          { text: "Pasakyti visiems, kad jis pats užsidirbo tuos pinigus", isGood: false, feedback: "Kurti istorijas apie tai, kaip kažką gavai, nėra tiesa." }
        ]
      },
      {
        text: "Zoe turi daug namų darbų, o draugė siūlo leisti nukopijuoti atsakymus. Ką ji turėtų daryti?",
        options: [
          { text: "Atsisakyti ir atlikti savo darbą, net jei užtruks ilgiau", isGood: true, feedback: "Daryti savo darbą padeda mokytis ir yra sąžininga!" },
          { text: "Nukopijuoti atsakymus, kad greičiau baigtų", isGood: false, feedback: "Kopijuoti kito darbą nepadeda mokytis ir nėra sąžininga." },
          { text: "Nukopijuoti tik kelis atsakymus ir likusius pakeisti", isGood: false, feedback: "Net kelių atsakymų kopijavimas – tai ne tavo darbas. Geriausia atlikti pačiai." }
        ]
      },
      {
        text: "Per testą Aleksas pastebi, kad kitas mokinys žiūri į jo atsakymus. Ką jis turėtų daryti?",
        options: [
          { text: "Uždengti savo lapą ir po testo pasakyti mokytojui", isGood: true, feedback: "Geras pasirinkimas! Saugoti savo darbą ir pranešti suaugusiajam yra atsakinga." },
          { text: "Tyčia parodyti mokiniui savo atsakymus", isGood: false, feedback: "Padėti kam nors sukčiauti nepadeda mokytis ir nėra sąžininga." },
          { text: "Rėkti ant mokinio per testą", isGood: false, feedback: "Trukdyti klasei nepadeda. Geriau tyliai apsaugoti savo darbą ir pranešti vėliau." }
        ]
      },
      {
        text: "Izabelė pamato, kad kas nors parašė ant tualeto sienos. Ką ji turėtų daryti?",
        options: [
          { text: "Pranešti mokytojui ar darbuotojui", isGood: true, feedback: "Pranešimas apie žalą padeda mokyklą išlaikyti švarią ir tvarkingą visiems!" },
          { text: "Šalia nupiešti savo piešinį", isGood: false, feedback: "Papildoma grafiti dar labiau niokoja mokyklos turtą." },
          { text: "Kviesti kitus mokinius ateiti pažiūrėti juokingo užrašo", isGood: false, feedback: "Dėmesio skyrimas vandalizmui gali paskatinti kitus taip elgtis." }
        ]
      },
      {
        text: "Nathano komanda pralaimi rungtynes ir jis nusimena. Ką jis turėtų daryti?",
        options: [
          { text: "Pasveikinti kitą komandą ir daugiau treniruotis kitam kartui", isGood: true, feedback: "Būti draugiškam pralaimėjus rodo charakterį ir pagarbą!" },
          { text: "Atsisakyti paspausti ranką kitai komandai", isGood: false, feedback: "Geras sportiškumas reiškia pagarbą net ir pralaimėjus." },
          { text: "Kaltinti komandos draugus dėl pralaimėjimo", isGood: false, feedback: "Kaltinimai nepadeda komandai. Geriau palaikyti vieni kitus ir treniruotis." }
        ]
      },
      {
        text: "Avos draugė prašo išlaikyti paslaptį, susijusią su mokyklos taisyklių pažeidimu. Ką ji turėtų daryti?",
        options: [
          { text: "Pasakyti, kad negali laikyti paslapčių apie taisyklių laužymą", isGood: true, feedback: "Geras pasirinkimas! Kai kurios paslaptys neturėtų būti saugomos, ypač apie taisyklių pažeidimus." },
          { text: "Pažadėti saugoti paslaptį, kad ir kas nutiktų", isGood: false, feedback: "Kai kurios paslaptys gali būti žalingos ir neturėtų būti saugomos, ypač apie taisykles." },
          { text: "Pap asakoti apie paslaptį visiems mokykloje", isGood: false, feedback: "Pasakoti visiems – tai išduoti draugės pasitikėjimą. Jei reikia, pasakyk tik suaugusiajam." }
        ]
      }
    ]
  }
};

// Current language
let currentLanguage = 'en';

// Function to get translated text with fallback to English
function getText(key) {
  const langTable = translations[currentLanguage] || translations['en'];
  if (key in langTable) return langTable[key];
  return translations['en'][key];
}

// Function to change language
function changeLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;
    updateUI();
    if (typeof window.initGame === 'function') {
      window.initGame(window.currentLevel || 'younger');
    }
  }
}

// Function to update UI text for Good or Bad game
function updateUI() {
  document.title = getText('title');

  const headerTitle = document.querySelector('header h1');
  if (headerTitle) headerTitle.textContent = getText('gameTitle');
  const headerSub = document.querySelector('header .subtitle');
  if (headerSub) headerSub.textContent = getText('gameSubtitle');

  const langHeader = document.querySelector('.language-selector h3');
  if (langHeader) langHeader.textContent = getText('selectLanguage');

  const homeTitle = document.getElementById('home-title');
  if (homeTitle) homeTitle.textContent = getText('homeTitle');
  const homeDesc = document.getElementById('home-description');
  if (homeDesc) homeDesc.textContent = getText('homeDescription');
  const chooseLevel = document.getElementById('choose-level');
  if (chooseLevel) chooseLevel.textContent = getText('chooseLevel');
  const youngerBtn = document.getElementById('younger-btn');
  if (youngerBtn) youngerBtn.textContent = getText('grades12');
  const olderBtn = document.getElementById('older-btn');
  if (olderBtn) olderBtn.textContent = getText('grades34');

  const youngerLevelBtn = document.getElementById('younger-level-btn');
  if (youngerLevelBtn) youngerLevelBtn.textContent = getText('grades12');
  const olderLevelBtn = document.getElementById('older-level-btn');
  if (olderLevelBtn) olderLevelBtn.textContent = getText('grades34');

  const questionLabel = document.getElementById('question-label');
  if (questionLabel) questionLabel.textContent = getText('questionLabel');
  const scoreLabel = document.getElementById('score-label');
  if (scoreLabel) scoreLabel.textContent = getText('scoreLabel');

  const scenarioText = document.getElementById('scenario-text');
  if (scenarioText && !scenarioText.dataset.hasContent) {
    scenarioText.textContent = getText('loadingScenario');
  }
  const feedbackTitle = document.getElementById('feedback-title');
  if (feedbackTitle) feedbackTitle.textContent = getText('feedbackTitle');
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) nextBtn.textContent = getText('nextQuestion');

  const gameCompleteTitle = document.getElementById('game-complete-title');
  if (gameCompleteTitle) gameCompleteTitle.textContent = getText('gameComplete');
  const youScoredLabel = document.getElementById('you-scored-label');
  if (youScoredLabel) youScoredLabel.textContent = getText('youScoredLabel');
  const outOfLabel = document.getElementById('out-of-label');
  if (outOfLabel) outOfLabel.textContent = getText('outOfLabel');
  const resultMessage = document.getElementById('result-message');
  if (resultMessage) resultMessage.textContent = getText('resultMessageDefault');
  const playAgainBtn = document.getElementById('play-again-btn');
  if (playAgainBtn) playAgainBtn.textContent = getText('playAgain');
  const homeBtn = document.getElementById('home-btn');
  if (homeBtn) homeBtn.textContent = getText('home');

  const scenarioImg = document.getElementById('scenario-image');
  if (scenarioImg) scenarioImg.textContent = getText('imagePlaceholder');
}

// Initialize language selector
function initLanguageSelector() {
  const languageSelector = document.querySelector('.language-selector');
  if (!languageSelector) return;
  // Avoid duplicating buttons
  if (languageSelector.querySelector('.language-btn')) return;

  const languages = [
    { code: 'en', name: ' 🇬🇧 English' },
    { code: 'tr', name: ' 🇹🇷 Türkçe' },
    { code: 'pl', name: ' 🇵🇱 Polski' },
    { code: 'nl', name: ' 🇳🇱 Nederlands' },
    { code: 'lt', name: ' 🇱🇹 Lietuvių' }
  ];

  languages.forEach(lang => {
    const btn = document.createElement('button');
    btn.className = 'language-btn';
    btn.textContent = lang.name;
    btn.onclick = () => {
      document.querySelectorAll('.language-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      changeLanguage(lang.code);
    };
    if (lang.code === currentLanguage) btn.classList.add('active');
    languageSelector.appendChild(btn);
  });
}
