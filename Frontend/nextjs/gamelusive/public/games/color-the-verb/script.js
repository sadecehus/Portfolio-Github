// Game state
let currentLanguage = 'en';
let currentLevel = 1;
let currentSentenceIndex = 0;
let score = 0;
let totalClicks = 0;
let correctClicks = 0;
let levelSentences = [];
let completedVerbs = new Set();

// Multilingual content
const gameContent = {
    en: {
        gameTitle: "Color the Verb",
        languageLabel: "Language:",
        instructionsTitle: "Instructions",
        instructionsText: "Click on the verbs (action words) in the sentences below to color them!",
        scoreLabel: "Score:",
        levelLabel: "Level:",
        progressLabel: "Progress:",
        sentenceTitle: "Find the verbs in this sentence:",
        nextBtn: "Next Sentence",
        resetBtn: "Reset Level",
        hintBtn: "Hint",
        hintTitle: "Hint",
        hintText: "Verbs are action words that tell us what someone or something is doing. Examples: run, jump, eat, sleep, play.",
        closeHint: "Close",
        modalTitle: "Congratulations!",
        modalText: "You completed all sentences in this level!",
        finalScoreLabel: "Final Score:",
        accuracyLabel: "Accuracy:",
        nextLevelBtn: "Next Level",
        restartBtn: "Restart Game",
        correctFeedback: "Excellent! That's a verb!",
        incorrectFeedback: "Not a verb. Try again!",
        levelCompleteFeedback: "Level complete! Well done!",
        allVerbsFound: "Great! You found all the verbs in this sentence!",
        sentences: [
            // Level 1 - Simple verbs
            [
                { text: "The cat runs quickly.", verbs: ["runs"] },
                { text: "She eats an apple.", verbs: ["eats"] },
                { text: "They play in the park.", verbs: ["play"] },
                { text: "He sleeps peacefully.", verbs: ["sleeps"] },
                { text: "We walk to school.", verbs: ["walk"] }
            ],
            // Level 2 - Two verbs per sentence
            [
                { text: "The dog barks and runs around.", verbs: ["barks", "runs"] },
                { text: "She sings and dances beautifully.", verbs: ["sings", "dances"] },
                { text: "They jump and laugh together.", verbs: ["jump", "laugh"] },
                { text: "He reads and writes stories.", verbs: ["reads", "writes"] },
                { text: "We cook and eat dinner.", verbs: ["cook", "eat"] }
            ],
            // Level 3 - Paragraphs with multiple verbs
            [
                { text: "Sarah wakes up early every morning. She brushes her teeth and combs her hair. Then she goes downstairs and prepares breakfast for her family.", verbs: ["wakes", "brushes", "combs", "goes", "prepares"] },
                { text: "The little bird sits on the branch and chirps happily. It flies from tree to tree, looking for food. When it finds some seeds, it pecks at them quickly.", verbs: ["sits", "chirps", "flies", "looking", "finds", "pecks"] },
                { text: "Tom loves to play soccer with his friends. They meet at the park every weekend. They run, kick the ball, and score many goals together.", verbs: ["loves", "play", "meet", "run", "kick", "score"] }
            ],
            // Level 4 - Complex sentences with past and present
            [
                { text: "Yesterday, Maria walked to the store and bought some groceries.", verbs: ["walked", "bought"] },
                { text: "The teacher explains the lesson while students listen carefully.", verbs: ["explains", "listen"] },
                { text: "My brother studied all night and passed his exam successfully.", verbs: ["studied", "passed"] },
                { text: "The rain falls gently while birds sing in the trees.", verbs: ["falls", "sing"] },
                { text: "She painted a beautiful picture and hung it on the wall.", verbs: ["painted", "hung"] }
            ],
            // Level 5 - Mixed tenses and complex structures
            [
                { text: "When the alarm rings, I wake up and start my daily routine.", verbs: ["rings", "wake", "start"] },
                { text: "The chef was cooking dinner when the guests arrived at the restaurant.", verbs: ["cooking", "arrived"] },
                { text: "Children were playing outside while their parents watched from the window.", verbs: ["playing", "watched"] },
                { text: "She has written three books and published them last year.", verbs: ["written", "published"] },
                { text: "We will travel to Paris and visit all the famous museums there.", verbs: ["travel", "visit"] }
            ],
            // Level 6 - Long paragraphs with many verbs
            [
                { text: "Every morning, John wakes up at six o'clock. He gets out of bed, stretches his arms, and walks to the bathroom. After he brushes his teeth and washes his face, he goes to the kitchen. There, he prepares a healthy breakfast, drinks orange juice, and reads the newspaper. Before leaving for work, he feeds his cat and waters the plants in his garden.", verbs: ["wakes", "gets", "stretches", "walks", "brushes", "washes", "goes", "prepares", "drinks", "reads", "leaving", "feeds", "waters"] },
                { text: "The forest was quiet and peaceful. Birds were singing in the tall trees while squirrels jumped from branch to branch. A small stream flowed through the woods, and fish swam in the clear water. Suddenly, a deer appeared and walked gracefully to the stream. It lowered its head and drank the cool water, then lifted its ears and listened for any danger before disappearing into the thick bushes.", verbs: ["singing", "jumped", "flowed", "swam", "appeared", "walked", "lowered", "drank", "lifted", "listened", "disappearing"] }
            ]
        ]
    },
    tr: {
        gameTitle: "Fiili Boya",
        languageLabel: "Dil:",
        instructionsTitle: "Talimatlar",
        instructionsText: "Aşağıdaki cümlelerdeki fiilleri (eylem kelimelerini) tıklayarak boyayın!",
        scoreLabel: "Puan:",
        levelLabel: "Seviye:",
        progressLabel: "İlerleme:",
        sentenceTitle: "Bu cümledeki fiilleri bulun:",
        nextBtn: "Sonraki Cümle",
        resetBtn: "Seviyeyi Sıfırla",
        hintBtn: "İpucu",
        hintTitle: "İpucu",
        hintText: "Fiiller, birinin veya bir şeyin ne yaptığını anlatan eylem kelimeleridir. Örnekler: koş, atla, ye, uyu, oyna.",
        closeHint: "Kapat",
        modalTitle: "Tebrikler!",
        modalText: "Bu seviyedeki tüm cümleleri tamamladınız!",
        finalScoreLabel: "Son Puan:",
        accuracyLabel: "Doğruluk:",
        nextLevelBtn: "Sonraki Seviye",
        restartBtn: "Oyunu Yeniden Başlat",
        correctFeedback: "Mükemmel! Bu bir fiil!",
        incorrectFeedback: "Bu bir fiil değil. Tekrar deneyin!",
        levelCompleteFeedback: "Seviye tamamlandı! Aferin!",
        allVerbsFound: "Harika! Bu cümledeki tüm fiilleri buldunuz!",
        sentences: [
            // Level 1
            [
                { text: "Kedi hızla koşar.", verbs: ["koşar"] },
                { text: "O bir elma yer.", verbs: ["yer"] },
                { text: "Onlar parkta oynar.", verbs: ["oynar"] },
                { text: "O huzurla uyur.", verbs: ["uyur"] },
                { text: "Biz okula yürürüz.", verbs: ["yürürüz"] }
            ],
            // Level 2 - İki fiil
            [
                { text: "Köpek havlar ve etrafta koşar.", verbs: ["havlar", "koşar"] },
                { text: "O güzelce şarkı söyler ve dans eder.", verbs: ["söyler", "eder"] },
                { text: "Onlar birlikte zıplar ve güler.", verbs: ["zıplar", "güler"] },
                { text: "O hikayeler okur ve yazar.", verbs: ["okur", "yazar"] },
                { text: "Biz yemek pişirir ve yeriz.", verbs: ["pişirir", "yeriz"] }
            ],
            // Level 3 - Paragraflar
            [
                { text: "Sara her sabah erken kalkar. Dişlerini fırçalar ve saçlarını tarar. Sonra aşağı iner ve ailesi için kahvaltı hazırlar.", verbs: ["kalkar", "fırçalar", "tarar", "iner", "hazırlar"] },
                { text: "Küçük kuş dalda oturur ve mutluca öter. Ağaçtan ağaca uçar, yiyecek arar. Tohum bulduğunda hızlıca gagalar.", verbs: ["oturur", "öter", "uçar", "arar", "bulduğunda", "gagalar"] },
                { text: "Ahmet arkadaşlarıyla futbol oynamayı sever. Her hafta sonu parkta buluşurlar. Koşar, topu tekme atar ve birlikte gol atarlar.", verbs: ["sever", "buluşurlar", "Koşar", "atar", "atarlar"] }
            ],
            // Level 4 - Karmaşık cümleler
            [
                { text: "Dün Ayşe mağazaya yürüdü ve alışveriş yaptı.", verbs: ["yürüdü", "yaptı"] },
                { text: "Öğretmen dersi anlatırken öğrenciler dikkatle dinler.", verbs: ["anlatırken", "dinler"] },
                { text: "Kardeşim bütün gece çalıştı ve sınavını başarıyla geçti.", verbs: ["çalıştı", "geçti"] },
                { text: "Yağmur yavaşça yağarken kuşlar ağaçlarda öter.", verbs: ["yağarken", "öter"] },
                { text: "O güzel bir resim çizdi ve duvara astı.", verbs: ["çizdi", "astı"] }
            ],
            // Level 5 - Karışık zamanlar
            [
                { text: "Alarm çaldığında uyanırım ve günlük rutinime başlarım.", verbs: ["çaldığında", "uyanırım", "başlarım"] },
                { text: "Aşçı yemek pişirirken misafirler restorana geldi.", verbs: ["pişirirken", "geldi"] },
                { text: "Çocuklar dışarıda oynarken ebeveynleri pencereden izliyordu.", verbs: ["oynarken", "izliyordu"] },
                { text: "O üç kitap yazmış ve geçen yıl yayımlamış.", verbs: ["yazmış", "yayımlamış"] },
                { text: "Paris'e seyahat edeceğiz ve oradaki ünlü müzeleri ziyaret edeceğiz.", verbs: ["edeceğiz", "ziyaret"] }
            ],
            // Level 6 - Uzun paragraflar
            [
                { text: "Her sabah Mehmet altıda uyanır. Yataktan kalkar, kollarını gerip banyoya yürür. Dişlerini fırçalar ve yüzünü yıkadıktan sonra mutfağa gider. Orada sağlıklı kahvaltı hazırlar, portakal suyu içer ve gazete okur. İşe gitmeden önce kedisini besler ve bahçedeki çiçekleri sular.", verbs: ["uyanır", "kalkar", "gerip", "yürür", "fırçalar", "yıkadıktan", "gider", "hazırlar", "içer", "okur", "gitmeden", "besler", "sular"] },
                { text: "Orman sessiz ve huzurluydu. Kuşlar yüksek ağaçlarda öterken sincaplar daldan dala zıplıyordu. Küçük bir dere ormanın içinden akıyor, berrak suda balıklar yüzüyordu. Aniden bir geyik belirdi ve dereye doğru zarifçe yürüdü. Başını eğip serin suyu içti, sonra kulaklarını dikti ve tehlike dinledikten sonra kalın çalıların arasında kayboldu.", verbs: ["öterken", "zıplıyordu", "akıyor", "yüzüyordu", "belirdi", "yürüdü", "eğip", "içti", "dikti", "dinledikten", "kayboldu"] }
            ]
        ]
    },
    nl: {
        gameTitle: "Kleur het Werkwoord",
        languageLabel: "Taal:",
        instructionsTitle: "Instructies",
        instructionsText: "Klik op de werkwoorden (actiewoorden) in de onderstaande zinnen om ze te kleuren!",
        scoreLabel: "Score:",
        levelLabel: "Niveau:",
        progressLabel: "Voortgang:",
        sentenceTitle: "Vind de werkwoorden in deze zin:",
        nextBtn: "Volgende Zin",
        resetBtn: "Niveau Resetten",
        hintBtn: "Hint",
        hintTitle: "Hint",
        hintText: "Werkwoorden zijn actiewoorden die ons vertellen wat iemand of iets doet. Voorbeelden: rennen, springen, eten, slapen, spelen.",
        closeHint: "Sluiten",
        modalTitle: "Gefeliciteerd!",
        modalText: "Je hebt alle zinnen in dit niveau voltooid!",
        finalScoreLabel: "Eindscore:",
        accuracyLabel: "Nauwkeurigheid:",
        nextLevelBtn: "Volgend Niveau",
        restartBtn: "Spel Herstarten",
        correctFeedback: "Uitstekend! Dat is een werkwoord!",
        incorrectFeedback: "Geen werkwoord. Probeer opnieuw!",
        levelCompleteFeedback: "Niveau voltooid! Goed gedaan!",
        allVerbsFound: "Geweldig! Je hebt alle werkwoorden in deze zin gevonden!",
        sentences: [
            // Level 1
            [
                { text: "De kat rent snel.", verbs: ["rent"] },
                { text: "Zij eet een appel.", verbs: ["eet"] },
                { text: "Zij spelen in het park.", verbs: ["spelen"] },
                { text: "Hij slaapt rustig.", verbs: ["slaapt"] },
                { text: "Wij lopen naar school.", verbs: ["lopen"] }
            ],
            // Level 2 - Twee werkwoorden
            [
                { text: "De hond blaft en rent rond.", verbs: ["blaft", "rent"] },
                { text: "Zij zingt en danst prachtig.", verbs: ["zingt", "danst"] },
                { text: "Zij springen en lachen samen.", verbs: ["springen", "lachen"] },
                { text: "Hij leest en schrijft verhalen.", verbs: ["leest", "schrijft"] },
                { text: "Wij koken en eten diner.", verbs: ["koken", "eten"] }
            ],
            // Level 3 - Paragrafen
            [
                { text: "Sara staat elke ochtend vroeg op. Ze poetst haar tanden en kamt haar haar. Daarna gaat ze naar beneden en bereidt ontbijt voor haar familie.", verbs: ["staat", "poetst", "kamt", "gaat", "bereidt"] },
                { text: "Het kleine vogeltje zit op de tak en zingt vrolijk. Het vliegt van boom tot boom en zoekt naar voedsel. Wanneer het zaden vindt, pikt het er snel op.", verbs: ["zit", "zingt", "vliegt", "zoekt", "vindt", "pikt"] },
                { text: "Tom houdt van voetballen met zijn vrienden. Ze ontmoeten elkaar elk weekend in het park. Ze rennen, trappen de bal en scoren samen veel doelpunten.", verbs: ["houdt", "ontmoeten", "rennen", "trappen", "scoren"] }
            ],
            // Level 4 - Complexe zinnen
            [
                { text: "Gisteren liep Maria naar de winkel en kocht boodschappen.", verbs: ["liep", "kocht"] },
                { text: "De leraar legt de les uit terwijl studenten aandachtig luisteren.", verbs: ["legt", "luisteren"] },
                { text: "Mijn broer studeerde de hele nacht en slaagde voor zijn examen.", verbs: ["studeerde", "slaagde"] },
                { text: "De regen valt zachtjes terwijl vogels zingen in de bomen.", verbs: ["valt", "zingen"] },
                { text: "Ze schilderde een mooi schilderij en hing het aan de muur.", verbs: ["schilderde", "hing"] }
            ],
            // Level 5 - Gemengde tijden
            [
                { text: "Wanneer de wekker gaat, word ik wakker en begin mijn dagelijkse routine.", verbs: ["gaat", "word", "begin"] },
                { text: "De chef was aan het koken toen de gasten in het restaurant aankwamen.", verbs: ["koken", "aankwamen"] },
                { text: "Kinderen waren aan het spelen terwijl hun ouders vanuit het raam keken.", verbs: ["spelen", "keken"] },
                { text: "Ze heeft drie boeken geschreven en ze vorig jaar gepubliceerd.", verbs: ["geschreven", "gepubliceerd"] },
                { text: "We zullen naar Parijs reizen en alle beroemde musea daar bezoeken.", verbs: ["reizen", "bezoeken"] }
            ],
            // Level 6 - Lange paragrafen
            [
                { text: "Elke ochtend wordt Jan om zes uur wakker. Hij stapt uit bed, rekt zijn armen en loopt naar de badkamer. Nadat hij zijn tanden heeft gepoetst en zijn gezicht heeft gewassen, gaat hij naar de keuken. Daar bereidt hij een gezond ontbijt, drinkt sinaasappelsap en leest de krant. Voordat hij naar zijn werk vertrekt, voedt hij zijn kat en geeft water aan de planten in zijn tuin.", verbs: ["wordt", "stapt", "rekt", "loopt", "gepoetst", "gewassen", "gaat", "bereidt", "drinkt", "leest", "vertrekt", "voedt", "geeft"] },
                { text: "Het bos was stil en vredig. Vogels zongen in de hoge bomen terwijl eekhoorns van tak tot tak sprongen. Een kleine beek stroomde door het bos en vissen zwommen in het heldere water. Plotseling verscheen een hert en liep gracieus naar de beek. Het boog zijn hoofd en dronk het koele water, toen spitste het zijn oren en luisterde naar gevaar voordat het in de dikke struiken verdween.", verbs: ["zongen", "sprongen", "stroomde", "zwommen", "verscheen", "liep", "boog", "dronk", "spitste", "luisterde", "verdween"] }
            ]
        ]
    },
    lt: {
        gameTitle: "Nuspalvink Veiksmažodį",
        languageLabel: "Kalba:",
        instructionsTitle: "Instrukcijos",
        instructionsText: "Spustelėkite veiksmažodžius (veiksmo žodžius) sakiniuose žemiau, kad juos nuspalvintumėte!",
        scoreLabel: "Taškai:",
        levelLabel: "Lygis:",
        progressLabel: "Progresas:",
        sentenceTitle: "Raskite veiksmažodžius šiame sakinyje:",
        nextBtn: "Kitas sakinys",
        resetBtn: "Atstatyti lygį",
        hintBtn: "Patarimas",
        hintTitle: "Patarimas",
        hintText: "Veiksmažodžiai yra veiksmo žodžiai, kurie mums sako, ką kas nors daro. Pavyzdžiai: bėga, šoka, valgo, miega, žaidžia.",
        closeHint: "Uždaryti",
        modalTitle: "Sveikiname!",
        modalText: "Jūs baigėte visus šio lygio sakinius!",
        finalScoreLabel: "Galutinis rezultatas:",
        accuracyLabel: "Tikslumas:",
        nextLevelBtn: "Kitas lygis",
        restartBtn: "Pradėti iš naujo",
        correctFeedback: "Puiku! Tai veiksmažodis!",
        incorrectFeedback: "Ne veiksmažodis. Bandykite dar kartą!",
        levelCompleteFeedback: "Lygis baigtas! Puikiai!",
        allVerbsFound: "Puiku! Radote visus veiksmažodžius šiame sakinyje!",
        sentences: [
            // Level 1
            [
                { text: "Katė greitai bėga.", verbs: ["bėga"] },
                { text: "Ji valgo obuolį.", verbs: ["valgo"] },
                { text: "Jie žaidžia parke.", verbs: ["žaidžia"] },
                { text: "Jis ramiai miega.", verbs: ["miega"] },
                { text: "Mes einame į mokyklą.", verbs: ["einame"] }
            ],
            // Level 2 - Du veiksmažodžiai
            [
                { text: "Šuo loja ir bėgioja aplinkui.", verbs: ["loja", "bėgioja"] },
                { text: "Ji gražiai dainuoja ir šoka.", verbs: ["dainuoja", "šoka"] },
                { text: "Jie kartu šokinėja ir juokiasi.", verbs: ["šokinėja", "juokiasi"] },
                { text: "Jis skaito ir rašo istorijas.", verbs: ["skaito", "rašo"] },
                { text: "Mes gaminame ir valgome vakarienę.", verbs: ["gaminame", "valgome"] }
            ],
            // Level 3 - Paragrafai
            [
                { text: "Lina kiekvieną rytą anksti keliasi. Ji išsivalo dantis ir susišukuoja plaukus. Paskui ji eina žemyn ir ruošia pusryčius savo šeimai.", verbs: ["keliasi", "išsivalo", "susišukuoja", "eina", "ruošia"] },
                { text: "Mažas paukštukas tupi ant šakos ir linksmai čiulba. Jis skraido nuo medžio prie medžio, ieškodamas maisto. Kai suranda sėklų, greitai jas lesa.", verbs: ["tupi", "čiulba", "skraido", "ieškodamas", "suranda", "lesa"] },
                { text: "Tomas mėgsta žaisti futbolą su draugais. Jie susitinka parke kiekvieną savaitgalį. Jie bėga, spardo kamuolį ir kartu pelno daug įvarčių.", verbs: ["mėgsta", "žaisti", "susitinka", "bėga", "spardo", "pelno"] }
            ],
            // Level 4 - Sudėtingi sakiniai
            [
                { text: "Vakar Marija nuėjo į parduotuvę ir nusipirko maisto.", verbs: ["nuėjo", "nusipirko"] },
                { text: "Mokytoja aiškina pamoką, o mokiniai atidžiai klausosi.", verbs: ["aiškina", "klausosi"] },
                { text: "Mano brolis mokėsi visą naktį ir sėkmingai išlaikė egzaminą.", verbs: ["mokėsi", "išlaikė"] },
                { text: "Lietus švelniai krinta, o paukščiai gieda medžiuose.", verbs: ["krinta", "gieda"] },
                { text: "Ji nutapė gražų paveikslą ir pakabino jį ant sienos.", verbs: ["nutapė", "pakabino"] }
            ],
            // Level 5 - Mišrūs laikai
            [
                { text: "Kai skamba žadintuvas, aš pabundu ir pradedu savo kasdienę rutiną.", verbs: ["skamba", "pabundu", "pradedu"] },
                { text: "Virėjas gamino vakarienę, kai svečiai atvyko į restoraną.", verbs: ["gamino", "atvyko"] },
                { text: "Vaikai žaidė lauke, kol tėvai stebėjo pro langą.", verbs: ["žaidė", "stebėjo"] },
                { text: "Ji parašė tris knygas ir išleido jas praėjusiais metais.", verbs: ["parašė", "išleido"] },
                { text: "Mes keliausime į Paryžių ir aplankysime visus garsius muziejus.", verbs: ["keliausime", "aplankysime"] }
            ],
            // Level 6 - Ilgi paragrafai
            [
                { text: "Kiekvieną rytą Jonas pabunda šeštą valandą. Jis atsikelia iš lovos, ištiesia rankas ir eina į vonią. Išsivalęs dantis ir nusiprausę veidą, jis eina į virtuvę. Ten jis paruošia sveikus pusryčius, geria apelsinų sultis ir skaito laikraštį. Prieš išvykdamas į darbą, jis pamaitina katę ir palaisto gėles savo sode.", verbs: ["pabunda", "atsikelia", "ištiesia", "eina", "išsivalęs", "nusiprausę", "paruošia", "geria", "skaito", "išvykdamas", "pamaitina", "palaisto"] },
                { text: "Miškas buvo tylus ir ramus. Paukščiai giedojo aukštuose medžiuose, o voverės šokinėjo nuo šakos iki šakos. Mažas upelis tekėjo per mišką, o žuvys plaukė skaidriame vandenyje. Staiga pasirodė stirna ir grakščiai nuėjo prie upelio. Ji plenė galvą ir gėrė vėsų vandenį, paskui pakėlė ausis ir klausėsi pavojaus, kol neišnyko tankiuose krūmuose.", verbs: ["giedojo", "šokinėjo", "tekėjo", "plaukė", "pasirodė", "nuėjo", "plenė", "gėrė", "pakėlė", "klausėsi", "neišnyko"] }
            ]
        ]
    },
    pl: {
        gameTitle: "Pokoloruj Czasownik",
        languageLabel: "Język:",
        instructionsTitle: "Instrukcje",
        instructionsText: "Kliknij na czasowniki (słowa czynności) w zdaniach poniżej, aby je pokolorować!",
        scoreLabel: "Punkty:",
        levelLabel: "Poziom:",
        progressLabel: "Postęp:",
        sentenceTitle: "Znajdź czasowniki w tym zdaniu:",
        nextBtn: "Następne zdanie",
        resetBtn: "Resetuj poziom",
        hintBtn: "Podpowiedź",
        hintTitle: "Podpowiedź",
        hintText: "Czasowniki to słowa czynności, które mówią nam, co ktoś lub coś robi. Przykłady: biegać, skakać, jeść, spać, grać.",
        closeHint: "Zamknij",
        modalTitle: "Gratulacje!",
        modalText: "Ukończyłeś wszystkie zdania na tym poziomie!",
        finalScoreLabel: "Końcowy wynik:",
        accuracyLabel: "Dokładność:",
        nextLevelBtn: "Następny poziom",
        restartBtn: "Rozpocznij grę ponownie",
        correctFeedback: "Doskonale! To jest czasownik!",
        incorrectFeedback: "To nie jest czasownik. Spróbuj ponownie!",
        levelCompleteFeedback: "Poziom ukończony! Świetnie!",
        allVerbsFound: "Wspaniale! Znalazłeś wszystkie czasowniki w tym zdaniu!",
        sentences: [
            // Level 1
            [
                { text: "Kot szybko biega.", verbs: ["biega"] },
                { text: "Ona je jabłko.", verbs: ["je"] },
                { text: "Oni grają w parku.", verbs: ["grają"] },
                { text: "On spokojnie śpi.", verbs: ["śpi"] },
                { text: "Idziemy do szkoły.", verbs: ["Idziemy"] }
            ],
            // Level 2 - Dwa czasowniki
            [
                { text: "Pies szczeka i biega dookoła.", verbs: ["szczeka", "biega"] },
                { text: "Ona pięknie śpiewa i tańczy.", verbs: ["śpiewa", "tańczy"] },
                { text: "Oni skaczą i śmieją się razem.", verbs: ["skaczą", "śmieją"] },
                { text: "On czyta i pisze opowiadania.", verbs: ["czyta", "pisze"] },
                { text: "Gotujemy i jemy obiad.", verbs: ["Gotujemy", "jemy"] }
            ],
            // Level 3 - Paragrafy
            [
                { text: "Anna wstaje wcześnie każdego ranka. Myje zęby i czesze włosy. Potem schodzi na dół i przygotowuje śniadanie dla rodziny.", verbs: ["wstaje", "Myje", "czesze", "schodzi", "przygotowuje"] },
                { text: "Mały ptaszek siedzi na gałęzi i wesoło ćwierka. Lata z drzewa na drzewo, szukając pożywienia. Gdy znajduje ziarna, szybko je dzioba.", verbs: ["siedzi", "ćwierka", "Lata", "szukając", "znajduje", "dzioba"] },
                { text: "Tomek lubi grać w piłkę z przyjaciółmi. Spotykają się w parku każdy weekend. Biegają, kopią piłkę i strzelają razem wiele bramek.", verbs: ["lubi", "grać", "Spotykają", "Biegają", "kopią", "strzelają"] }
            ],
            // Level 4 - Złożone zdania
            [
                { text: "Wczoraj Maria poszła do sklepu i kupiła zakupy.", verbs: ["poszła", "kupiła"] },
                { text: "Nauczyciel tłumaczy lekcję, a uczniowie uważnie słuchają.", verbs: ["tłumaczy", "słuchają"] },
                { text: "Mój brat uczył się całą noc i zdał egzamin pomyślnie.", verbs: ["uczył", "zdał"] },
                { text: "Deszcz pada delikatnie, a ptaki śpiewają w drzewach.", verbs: ["pada", "śpiewają"] },
                { text: "Ona namalowała piękny obraz i powiesiła go na ścianie.", verbs: ["namalowała", "powiesiła"] }
            ],
            // Level 5 - Mieszane czasy
            [
                { text: "Kiedy dzwoni budzik, budzę się i zaczynam codzienną rutynę.", verbs: ["dzwoni", "budzę", "zaczynam"] },
                { text: "Szef kuchni gotował obiad, gdy goście przybyli do restauracji.", verbs: ["gotował", "przybyli"] },
                { text: "Dzieci bawiły się na zewnątrz, podczas gdy rodzice obserwowali z okna.", verbs: ["bawiły", "obserwowali"] },
                { text: "Ona napisała trzy książki i opublikowała je w zeszłym roku.", verbs: ["napisała", "opublikowała"] },
                { text: "Pojedziemy do Paryża i zwiedzamy wszystkie słynne muzea.", verbs: ["Pojedziemy", "zwiedzamy"] }
            ],
            // Level 6 - Długie paragrafy
            [
                { text: "Każdego ranka Jan budzi się o szóstej. Wstaje z łóżka, przeciąga ręce i idzie do łazienki. Po umyciu zębów i obmyciu twarzy idzie do kuchni. Tam przygotowuje zdrowe śniadanie, pije sok pomarańczowy i czyta gazetę. Przed wyjściem do pracy karmi kota i podlewa rośliny w ogrodzie.", verbs: ["budzi", "Wstaje", "przeciąga", "idzie", "umyciu", "obmyciu", "przygotowuje", "pije", "czyta", "wyjściem", "karmi", "podlewa"] },
                { text: "Las był cichy i spokojny. Ptaki śpiewały w wysokich drzewach, podczas gdy wiewiórki skakały z gałęzi na gałąź. Mały strumyk płynął przez las, a ryby pływały w czystej wodzie. Nagle pojawiła się sarna i gracjalnie podeszła do strumyka. Pochyliła głowę i piła chłodną wodę, potem podniosła uszy i nasłuchiwała niebezpieczeństwa, zanim zniknęła w gęstych krzakach.", verbs: ["śpiewały", "skakały", "płynął", "pływały", "pojawiła", "podeszła", "Pochyliła", "piła", "podniosła", "nasłuchiwała", "zniknęła"] }
            ]
        ]
    }
};

// Initialize the game
function initGame() {
    loadLevel();
    updateUI();
}

// Change language
function changeLanguage() {
    const languageSelect = document.getElementById('language');
    currentLanguage = languageSelect.value;
    currentLevel = 1;
    currentSentenceIndex = 0;
    score = 0;
    totalClicks = 0;
    correctClicks = 0;
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
    document.getElementById('progress-label').textContent = content.progressLabel;
    document.getElementById('sentence-title').textContent = content.sentenceTitle;
    document.getElementById('next-btn').textContent = content.nextBtn;
    document.getElementById('reset-btn').textContent = content.resetBtn;
    document.getElementById('hint-btn').textContent = content.hintBtn;
    document.getElementById('hint-title').textContent = content.hintTitle;
    document.getElementById('hint-text').textContent = content.hintText;
    document.getElementById('close-hint').textContent = content.closeHint;
    document.getElementById('modal-title').textContent = content.modalTitle;
    document.getElementById('modal-text').textContent = content.modalText;
    document.getElementById('final-score-label').textContent = content.finalScoreLabel;
    document.getElementById('accuracy-label').textContent = content.accuracyLabel;
    document.getElementById('next-level-btn').textContent = content.nextLevelBtn;
    document.getElementById('restart-btn').textContent = content.restartBtn;
    
    // Update stats
    document.getElementById('score').textContent = score;
    document.getElementById('level').textContent = currentLevel;
    updateProgress();
}

// Load current level
function loadLevel() {
    const content = gameContent[currentLanguage];
    if (currentLevel <= content.sentences.length) {
        levelSentences = content.sentences[currentLevel - 1];
        currentSentenceIndex = 0;
        completedVerbs.clear();
        loadSentence();
    }
}

// Load current sentence
function loadSentence() {
    if (currentSentenceIndex < levelSentences.length) {
        const sentence = levelSentences[currentSentenceIndex];
        const sentenceContainer = document.getElementById('current-sentence');
        
        // Split sentence into words and create clickable elements
        const words = sentence.text.split(/(\s+|[.,!?;:])/).filter(word => word.trim() !== '');
        sentenceContainer.innerHTML = '';
        
        words.forEach((word, index) => {
            if (word.trim() === '') {
                sentenceContainer.appendChild(document.createTextNode(word));
            } else if (/[.,!?;:]/.test(word)) {
                sentenceContainer.appendChild(document.createTextNode(word));
            } else {
                const wordElement = document.createElement('span');
                wordElement.className = 'word';
                wordElement.textContent = word;
                wordElement.onclick = () => checkWord(word, wordElement, sentence.verbs);
                sentenceContainer.appendChild(wordElement);
            }
        });
        
        completedVerbs.clear();
        document.getElementById('next-btn').disabled = true;
        updateProgress();
    }
}

// Check if clicked word is a verb
function checkWord(word, element, verbs) {
    if (element.classList.contains('correct') || element.classList.contains('verb')) {
        return; // Already selected
    }
    
    totalClicks++;
    const cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, '');
    const isVerb = verbs.some(verb => verb.toLowerCase() === cleanWord);
    
    if (isVerb) {
        element.classList.add('verb', 'correct');
        completedVerbs.add(cleanWord);
        correctClicks++;
        score += 10;
        showFeedback(gameContent[currentLanguage].correctFeedback, 'success');
        
        // Check if all verbs found
        if (completedVerbs.size === verbs.length) {
            setTimeout(() => {
                showFeedback(gameContent[currentLanguage].allVerbsFound, 'success');
                document.getElementById('next-btn').disabled = false;
            }, 1000);
        }
    } else {
        element.classList.add('incorrect');
        showFeedback(gameContent[currentLanguage].incorrectFeedback, 'error');
        
        // Remove incorrect class after animation
        setTimeout(() => {
            element.classList.remove('incorrect');
        }, 1000);
    }
    
    updateUI();
}

// Show feedback message
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

// Next sentence
function nextSentence() {
    currentSentenceIndex++;
    
    if (currentSentenceIndex < levelSentences.length) {
        loadSentence();
        closeFeedback();
    } else {
        // Level completed
        showLevelComplete();
    }
}

// Show level completion
function showLevelComplete() {
    const accuracy = totalClicks > 0 ? Math.round((correctClicks / totalClicks) * 100) : 0;
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('accuracy').textContent = accuracy + '%';
    
    const modal = document.getElementById('completion-modal');
    modal.classList.add('show');
    
    showFeedback(gameContent[currentLanguage].levelCompleteFeedback, 'success');
}

// Next level
function nextLevel() {
    currentLevel++;
    const content = gameContent[currentLanguage];
    
    if (currentLevel <= content.sentences.length) {
        loadLevel();
        closeModal();
        closeFeedback();
    } else {
        // Game completed
        restartGame();
    }
}

// Reset current level
function resetLevel() {
    currentSentenceIndex = 0;
    score = Math.max(0, score - 20); // Small penalty for reset
    loadSentence();
    closeFeedback();
}

// Restart game
function restartGame() {
    currentLevel = 1;
    currentSentenceIndex = 0;
    score = 0;
    totalClicks = 0;
    correctClicks = 0;
    loadLevel();
    closeModal();
    closeFeedback();
}

// Close modal
function closeModal() {
    const modal = document.getElementById('completion-modal');
    modal.classList.remove('show');
}

// Show hint
function showHint() {
    const hintPanel = document.getElementById('hint-panel');
    hintPanel.classList.add('show');
}

// Close hint
function closeHint() {
    const hintPanel = document.getElementById('hint-panel');
    hintPanel.classList.remove('show');
}

// Update progress display
function updateProgress() {
    const progressText = `${currentSentenceIndex + 1}/${levelSentences.length}`;
    document.getElementById('progress').textContent = progressText;
}

// Close modal when clicking outside
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
