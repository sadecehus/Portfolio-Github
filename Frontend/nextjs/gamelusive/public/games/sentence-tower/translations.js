// Translations for Sentence Tower
const stTranslations = {
  en: {
    title: 'Sentence Tower - Build Amazing Sentences!',
    headerTitle: '🏗️ Sentence Tower',
    selectLanguage: 'Select Language:',
    level: 'Level:',
    score: 'Score:',
    lives: 'Lives:',
    instruction: 'Drag the words to build a correct sentence!',
    instructionSub: "💡 You don't need to fill all slots - just make a meaningful sentence!",
    sentenceInfo: 'Build a meaningful sentence using the words below!',
    sentenceTip: "💡 Tip: You don't need to fill all the slots - just make a complete sentence!",
    wordCards: 'Word Cards',
    check: 'Check Sentence',
    hint: '💡 Hint',
    reset: '🔄 Reset',
    next: 'Next Level ➡️',
    levelCompleteTitle: '🎉 Level Complete!',
    continue: 'Continue',
    gameOverTitle: 'Game Over',
    playAgain: 'Play Again',

    // dynamic messages
    needMinWords: (n) => `You need at least ${n} words to make a sentence!`,
    excellent: (pts) => `🎉 Excellent! +${pts} points`,
    levelCompleteMsg: (pts, nextLvl) => `Great job! You earned ${pts} points. Ready for level ${nextLvl}?`,
    gameCompleteMsg: (score) => `🎉 Congratulations! You've completed all levels! Final score: ${score}`,
    gameOverMsg: (lvl, score) => `Game Over! You reached level ${lvl} with ${score} points. Try again!`,
    tooShort: (n, lives) => `❌ Too short! You need at least ${n} words. Lives left: ${lives}`,
    notComplete: (lives) => `❌ This doesn't make a complete sentence. Try again! Lives left: ${lives}`,
    wordUsed: 'This word is already used!',
    hintUsed: 'Hint already used for this level!',
    wordMap: {
      // identity mapping for reference
    },
  },
  tr: {
    title: 'Cümle Kulesi - Harika Cümleler Kur!',
    headerTitle: '🏗️ Cümle Kulesi',
    selectLanguage: 'Dil Seçin:',
    level: 'Seviye:',
    score: 'Puan:',
    lives: 'Can:',
    instruction: 'Doğru bir cümle kurmak için kelimeleri sürükle!',
    instructionSub: '💡 Tüm boşlukları doldurman gerekmiyor - anlamlı bir cümle kurman yeterli!',
    sentenceInfo: 'Aşağıdaki kelimelerle anlamlı bir cümle kur!',
    sentenceTip: '💡 İpucu: Tüm boşlukları doldurmak zorunda değilsin - tam bir cümle oluşturman yeterli!',
    wordCards: 'Kelime Kartları',
    check: 'Cümleyi Kontrol Et',
    hint: '💡 İpucu',
    reset: '🔄 Sıfırla',
    next: 'Sonraki Seviye ➡️',
    levelCompleteTitle: '🎉 Seviye Tamamlandı!',
    continue: 'Devam',
    gameOverTitle: 'Oyun Bitti',
    playAgain: 'Tekrar Oyna',

    needMinWords: (n) => `Bir cümle için en az ${n} kelime gerekli!`,
    excellent: (pts) => `🎉 Harika! +${pts} puan`,
    levelCompleteMsg: (pts, nextLvl) => `Aferin! ${pts} puan kazandın. ${nextLvl}. seviyeye hazır mısın?`,
    gameCompleteMsg: (score) => `🎉 Tebrikler! Tüm seviyeleri bitirdin! Son puan: ${score}`,
    gameOverMsg: (lvl, score) => `Oyun Bitti! ${lvl}. seviyeye ulaştın ve puanın ${score}. Tekrar dene!`,
    tooShort: (n, lives) => `❌ Çok kısa! En az ${n} kelime gerekli. Kalan can: ${lives}`,
    notComplete: (lives) => `❌ Bu tam bir cümle değil. Tekrar dene! Kalan can: ${lives}`,
    wordUsed: 'Bu kelime zaten kullanıldı!',
    hintUsed: 'Bu seviyede ipucunu zaten kullandın!',
    wordMap: {
      'cat':'kedi','dog':'köpek','bird':'kuş','runs':'koşar','flies':'uçar','sleeps':'uyur','big':'büyük','small':'küçük','red':'kırmızı','blue':'mavi',
      'children':'çocuklar','play':'oynar','school':'okul','happy':'mutlu','books':'kitaplar','read':'okur','games':'oyunlar','outside':'dışarıda','together':'birlikte','fun':'eğlence',
      'beautiful':'güzel','birds':'kuşlar','sing':'şarkı söyler','sweetly':'tatlı tatlı','morning':'sabah','flowers':'çiçekler','bloom':'çiçek açar','garden':'bahçe','bright':'parlak','sunshine':'güneş ışığı','every':'her','day':'gün',
      'students':'öğrenciler','study':'çalışır','carefully':'dikkatlice','library':'kütüphane','teachers':'öğretmenler','explain':'açıklar','lessons':'dersler','clearly':'net bir şekilde','always':'her zaman','homework':'ödev','finished':'bitirdi','quickly':'hızlıca',
      'yesterday':'dün','played':'oynadı','park':'park','tomorrow':'yarın','family':'aile','visits':'ziyaret eder','museum':'müze','afternoon':'öğleden sonra','friends':'arkadaşlar','meet':'buluşur','cafe':'kafe','evening':'akşam',
      'athletes':'sporcular','run':'koşar','fast':'hızlı','track':'pist','musicians':'müzisyenler','instruments':'enstrümanlar','beautifully':'güzelce','artists':'sanatçılar','paint':'boyar','colorful':'renkli','pictures':'resimler','stage':'sahne',
      'during':'sırasında','winter':'kış','snow':'kar','falls':'düşer','gently':'yumuşakça','ground':'yer','spring':'ilkbahar','everywhere':'her yerde','summer':'yaz','people':'insanlar','swim':'yüzer','ocean':'okyanus','mountains':'dağlar','hiking':'doğa yürüyüşü','trails':'patikalar',
      'scientists':'bilim insanları','discover':'keşfeder','amazing':'şaşırtıcı','creatures':'canlılar','doctors':'doktorlar','help':'yardım eder','patients':'hastalar','recover':'iyileşir','engineers':'mühendisler','design':'tasarlar','innovative':'yenilikçi','buildings':'binalar','cities':'şehirler',
      'throughout':'boyunca','history':'tarih','humans':'insanlar','invented':'icat etti','remarkable':'dikkat çekici','technologies':'teknolojiler','ancient':'antik','civilizations':'uygarlıklar','built':'inşa etti','magnificent':'muhteşem','monuments':'anıtlar','modern':'modern','computers':'bilgisayarlar','process':'işler','information':'bilgi','instantly':'anında',
      'environmental':'çevresel','climate':'iklim','changes':'değişimler','researchers':'araştırmacılar','develop':'geliştirir','sustainable':'sürdürülebilir','solutions':'çözümler','protecting':'koruma','natural':'doğal','resources':'kaynaklar','future':'gelecek','generations':'nesiller','benefit':'fayda sağlar','everyone':'herkes'
    },
  },
  pl: {
    title: 'Wieża Zdań - Buduj Wspaniałe Zdania!',
    headerTitle: '🏗️ Wieża Zdań',
    selectLanguage: 'Wybierz język:',
    level: 'Poziom:',
    score: 'Wynik:',
    lives: 'Życia:',
    instruction: 'Przeciągnij słowa, aby zbudować poprawne zdanie!',
    instructionSub: '💡 Nie musisz wypełniać wszystkich miejsc - stwórz sensowne zdanie!',
    sentenceInfo: 'Zbuduj sensowne zdanie używając poniższych słów!',
    sentenceTip: '💡 Wskazówka: Nie musisz wypełniać wszystkich pól - stwórz pełne zdanie!',
    wordCards: 'Karty Słów',
    check: 'Sprawdź zdanie',
    hint: '💡 Wskazówka',
    reset: '🔄 Reset',
    next: 'Następny poziom ➡️',
    levelCompleteTitle: '🎉 Poziom ukończony!',
    continue: 'Kontynuuj',
    gameOverTitle: 'Koniec gry',
    playAgain: 'Zagraj ponownie',

    needMinWords: (n) => `Potrzebujesz co najmniej ${n} słów, aby stworzyć zdanie!`,
    excellent: (pts) => `🎉 Świetnie! +${pts} punktów`,
    levelCompleteMsg: (pts, nextLvl) => `Dobra robota! Zdobyłeś ${pts} punktów. Gotowy na poziom ${nextLvl}?`,
    gameCompleteMsg: (score) => `🎉 Gratulacje! Ukończyłeś wszystkie poziomy! Końcowy wynik: ${score}`,
    gameOverMsg: (lvl, score) => `Koniec gry! Dotarłeś do poziomu ${lvl} z wynikiem ${score}. Spróbuj ponownie!`,
    tooShort: (n, lives) => `❌ Za krótko! Potrzebujesz co najmniej ${n} słów. Pozostałe życia: ${lives}`,
    notComplete: (lives) => `❌ To nie jest pełne zdanie. Spróbuj ponownie! Pozostałe życia: ${lives}`,
    wordUsed: 'To słowo jest już użyte!',
    hintUsed: 'Wskazówka została już użyta na tym poziomie!',
    wordMap: {
      'cat':'kot','dog':'pies','bird':'ptak','runs':'biega','flies':'leci','sleeps':'śpi','big':'duży','small':'mały','red':'czerwony','blue':'niebieski',
      'children':'dzieci','play':'grają','school':'szkoła','happy':'szczęśliwy','books':'książki','read':'czytają','games':'gry','outside':'na zewnątrz','together':'razem','fun':'zabawa',
      'beautiful':'piękny','birds':'ptaki','sing':'śpiewają','sweetly':'słodko','morning':'poranek','flowers':'kwiaty','bloom':'kwitną','garden':'ogród','bright':'jasny','sunshine':'słońce','every':'każdy','day':'dzień',
      'students':'uczniowie','study':'uczą się','carefully':'ostrożnie','library':'biblioteka','teachers':'nauczyciele','explain':'wyjaśniają','lessons':'lekcje','clearly':'wyraźnie','always':'zawsze','homework':'praca domowa','finished':'skończone','quickly':'szybko',
      'yesterday':'wczoraj','played':'grali','park':'park','tomorrow':'jutro','family':'rodzina','visits':'odwiedza','museum':'muzeum','afternoon':'popołudnie','friends':'przyjaciele','meet':'spotykają się','cafe':'kawiarnia','evening':'wieczór',
      'athletes':'sportowcy','run':'biegają','fast':'szybko','track':'tor','musicians':'muzycy','instruments':'instrumenty','beautifully':'pięknie','artists':'artyści','paint':'malują','colorful':'kolorowe','pictures':'obrazy','stage':'scena',
      'during':'podczas','winter':'zima','snow':'śnieg','falls':'pada','gently':'delikatnie','ground':'ziemia','spring':'wiosna','everywhere':'wszędzie','summer':'lato','people':'ludzie','swim':'pływają','ocean':'ocean','mountains':'góry','hiking':'piesze wędrówki','trails':'szlaki',
      'scientists':'naukowcy','discover':'odkrywają','amazing':'niesamowite','creatures':'stworzenia','doctors':'lekarze','help':'pomagają','patients':'pacjenci','recover':'wracają do zdrowia','engineers':'inżynierowie','design':'projektują','innovative':'innowacyjne','buildings':'budynki','cities':'miasta',
      'throughout':'przez','history':'historia','humans':'ludzie','invented':'wynaleźli','remarkable':'znakomite','technologies':'technologie','ancient':'starożytne','civilizations':'cywilizacje','built':'zbudowali','magnificent':'wspaniałe','monuments':'monumenty','modern':'nowoczesne','computers':'komputery','process':'przetwarzają','information':'informacje','instantly':'natychmiast',
      'environmental':'środowiskowe','climate':'klimat','changes':'zmiany','researchers':'badacze','develop':'rozwijają','sustainable':'zrównoważone','solutions':'rozwiązania','protecting':'ochrona','natural':'naturalne','resources':'zasoby','future':'przyszłość','generations':'pokolenia','benefit':'przynoszą korzyść','everyone':'wszyscy'
    },
  },
  lt: {
    title: 'Sakinių Bokštas - Kurk Nuostabius Sakinius!',
    headerTitle: '🏗️ Sakinių Bokštas',
    selectLanguage: 'Pasirinkti kalbą:',
    level: 'Lygis:',
    score: 'Taškai:',
    lives: 'Gyvybės:',
    instruction: 'Vilkite žodžius, kad sudarytumėte taisyklingą sakinį!',
    instructionSub: '💡 Nebūtina užpildyti visų vietų - sukurkite prasmingą sakinį!',
    sentenceInfo: 'Sukurkite prasmingą sakinį, naudodami žemiau pateiktus žodžius!',
    sentenceTip: '💡 Patarimas: Nebūtina užpildyti visų vietų - svarbu, kad sakinys būtų pilnas!',
    wordCards: 'Žodžių kortelės',
    check: 'Tikrinti sakinį',
    hint: '💡 Užuomina',
    reset: '🔄 Atstatyti',
    next: 'Kitas lygis ➡️',
    levelCompleteTitle: '🎉 Lygis įveiktas!',
    continue: 'Tęsti',
    gameOverTitle: 'Žaidimo pabaiga',
    playAgain: 'Žaisti dar kartą',

    needMinWords: (n) => `Reikia bent ${n} žodžių, kad sudarytumėte sakinį!`,
    excellent: (pts) => `🎉 Puiku! +${pts} taškų`,
    levelCompleteMsg: (pts, nextLvl) => `Šaunu! Uždirbote ${pts} taškų. Pasiruošę ${nextLvl} lygiui?`,
    gameCompleteMsg: (score) => `🎉 Sveikiname! Baigėte visus lygius! Galutinis taškų skaičius: ${score}`,
    gameOverMsg: (lvl, score) => `Žaidimo pabaiga! Pasiekėte ${lvl} lygį su ${score} taškais. Bandykite dar kartą!`,
    tooShort: (n, lives) => `❌ Per trumpa! Reikia bent ${n} žodžių. Likusios gyvybės: ${lives}`,
    notComplete: (lives) => `❌ Tai nėra pilnas sakinys. Bandykite dar kartą! Likusios gyvybės: ${lives}`,
    wordUsed: 'Šis žodis jau panaudotas!',
    hintUsed: 'Užuomina šiame lygyje jau panaudota!',
    wordMap: {
      'cat':'katė','dog':'šuo','bird':'paukštis','runs':'bėga','flies':'skrenda','sleeps':'miega','big':'didelis','small':'mažas','red':'raudonas','blue':'mėlynas',
      'children':'vaikai','play':'žaidžia','school':'mokykla','happy':'laimingas','books':'knygos','read':'skaito','games':'žaidimai','outside':'lauke','together':'kartu','fun':'smagu',
      'beautiful':'gražus','birds':'paukščiai','sing':'dainuoja','sweetly':'švelniai','morning':'rytas','flowers':'gėlės','bloom':'žydi','garden':'sodas','bright':'šviesus','sunshine':'saulė','every':'kiekvieną','day':'dieną',
      'students':'mokiniai','study':'mokosi','carefully':'atsargiai','library':'biblioteka','teachers':'mokytojai','explain':'paaiškina','lessons':'pamokos','clearly':'aiškiai','always':'visada','homework':'namų darbai','finished':'baigė','quickly':'greitai',
      'yesterday':'vakar','played':'žaidė','park':'parkas','tomorrow':'rytoj','family':'šeima','visits':'apsilanko','museum':'muziejus','afternoon':'popietė','friends':'draugai','meet':'susitinka','cafe':'kavinė','evening':'vakaras',
      'athletes':'sportininkai','run':'bėga','fast':'greitai','track':'takelis','musicians':'muzikantai','instruments':'instrumentai','beautifully':'gražiai','artists':'menininkai','paint':'tapo','colorful':'spalvingi','pictures':'paveikslai','stage':'scena',
      'during':'per','winter':'žiema','snow':'sniegas','falls':'krenta','gently':'švelniai','ground':'žemė','spring':'pavasaris','everywhere':'visur','summer':'vasara','people':'žmonės','swim':'plaukia','ocean':'vandenynas','mountains':'kalnai','hiking':'žygiuoja','trails':'takas',
      'scientists':'mokslininkai','discover':'atranda','amazing':'nuostabūs','creatures':'padarai','doctors':'gydytojai','help':'padeda','patients':'pacientai','recover':'atsigauna','engineers':'inžinieriai','design':'projektuoja','innovative':'novatoriški','buildings':'pastatai','cities':'miestai',
      'throughout':'visoje','history':'istorija','humans':'žmonės','invented':'išrado','remarkable':'įspūdingos','technologies':'technologijos','ancient':'senovės','civilizations':'civilizacijos','built':'pastatė','magnificent':'didūs','monuments':'monumentai','modern':'modernūs','computers':'kompiuteriai','process':'apdoroja','information':'informacija','instantly':'akimirksniu',
      'environmental':'aplinkos','climate':'klimatas','changes':'pokyčiai','researchers':'tyrėjai','develop':'kuria','sustainable':'tvarūs','solutions':'sprendimai','protecting':'apsauga','natural':'natūralūs','resources':'ištekliai','future':'ateitis','generations':'kartos','benefit':'nauda','everyone':'visi'
    },
  },
  nl: {
    title: 'Zin Toren - Bouw Geweldige Zinnen!',
    headerTitle: '🏗️ Zin Toren',
    selectLanguage: 'Selecteer taal:',
    level: 'Niveau:',
    score: 'Score:',
    lives: 'Levens:',
    instruction: 'Sleep de woorden om een correcte zin te maken!',
    instructionSub: '💡 Je hoeft niet alle vakjes te vullen - maak gewoon een zin met betekenis!',
    sentenceInfo: 'Maak een zin met betekenis met de onderstaande woorden!',
    sentenceTip: '💡 Tip: Je hoeft niet alle vakjes te vullen - maak gewoon een volledige zin!',
    wordCards: 'Woordkaarten',
    check: 'Controleer zin',
    hint: '💡 Hint',
    reset: '🔄 Reset',
    next: 'Volgend niveau ➡️',
    levelCompleteTitle: '🎉 Niveau voltooid!',
    continue: 'Doorgaan',
    gameOverTitle: 'Game Over',
    playAgain: 'Opnieuw spelen',

    needMinWords: (n) => `Je hebt minimaal ${n} woorden nodig om een zin te maken!`,
    excellent: (pts) => `🎉 Goed zo! +${pts} punten`,
    levelCompleteMsg: (pts, nextLvl) => `Goed gedaan! Je verdiende ${pts} punten. Klaar voor niveau ${nextLvl}?`,
    gameCompleteMsg: (score) => `🎉 Gefeliciteerd! Je hebt alle niveaus voltooid! Eindscore: ${score}`,
    gameOverMsg: (lvl, score) => `Game Over! Je bereikte niveau ${lvl} met ${score} punten. Probeer het opnieuw!`,
    tooShort: (n, lives) => `❌ Te kort! Je hebt minimaal ${n} woorden nodig. Resterende levens: ${lives}`,
    notComplete: (lives) => `❌ Dit is geen volledige zin. Probeer opnieuw! Resterende levens: ${lives}`,
    wordUsed: 'Dit woord is al gebruikt!',
    hintUsed: 'Hint is al gebruikt voor dit niveau!',
    wordMap: {
      'cat':'kat','dog':'hond','bird':'vogel','runs':'rent','flies':'vliegt','sleeps':'slaapt','big':'groot','small':'klein','red':'rood','blue':'blauw',
      'children':'kinderen','play':'spelen','school':'school','happy':'blij','books':'boeken','read':'lezen','games':'spellen','outside':'buiten','together':'samen','fun':'plezier',
      'beautiful':'mooi','birds':'vogels','sing':'zingen','sweetly':'zoet','morning':'ochtend','flowers':'bloemen','bloom':'bloeien','garden':'tuin','bright':'helder','sunshine':'zonneschijn','every':'elke','day':'dag',
      'students':'leerlingen','study':'leren','carefully':'zorgvuldig','library':'bibliotheek','teachers':'leraren','explain':'leggen uit','lessons':'lessen','clearly':'duidelijk','always':'altijd','homework':'huiswerk','finished':'klaar','quickly':'snel',
      'yesterday':'gisteren','played':'speelden','park':'park','tomorrow':'morgen','family':'familie','visits':'bezoekt','museum':'museum','afternoon':'middag','friends':'vrienden','meet':'ontmoeten','cafe':'café','evening':'avond',
      'athletes':'atleten','run':'rennen','fast':'snel','track':'baan','musicians':'musici','instruments':'instrumenten','beautifully':'prachtig','artists':'kunstenaars','paint':'schilderen','colorful':'kleurrijk','pictures':'afbeeldingen','stage':'podium',
      'during':'tijdens','winter':'winter','snow':'sneeuw','falls':'valt','gently':'zachtjes','ground':'grond','spring':'lente','everywhere':'overal','summer':'zomer','people':'mensen','swim':'zwemmen','ocean':'oceaan','mountains':'bergen','hiking':'wandelen','trails':'paden',
      'scientists':'wetenschappers','discover':'ontdekken','amazing':'geweldig','creatures':'wezens','doctors':'dokters','help':'helpen','patients':'patiënten','recover':'herstellen','engineers':'ingenieurs','design':'ontwerpen','innovative':'innovatieve','buildings':'gebouwen','cities':'steden',
      'throughout':'door','history':'geschiedenis','humans':'mensen','invented':'uitgevonden','remarkable':'opmerkelijke','technologies':'technologieën','ancient':'antieke','civilizations':'beschavingen','built':'gebouwd','magnificent':'prachtige','monuments':'monumenten','modern':'moderne','computers':'computers','process':'verwerken','information':'informatie','instantly':'onmiddellijk',
      'environmental':'milieu','climate':'klimaat','changes':'veranderingen','researchers':'onderzoekers','develop':'ontwikkelen','sustainable':'duurzame','solutions':'oplossingen','protecting':'beschermen','natural':'natuurlijke','resources':'bronnen','future':'toekomst','generations':'generaties','benefit':'profiteren','everyone':'iedereen'
    },
  }
};

let stLang = 'en';

function stGet(key) {
  const pack = stTranslations[stLang] || stTranslations.en;
  return pack[key] ?? stTranslations.en[key] ?? key;
}

function applySTLanguage(lang) {
  if (!stTranslations[lang]) return;
  stLang = lang;
  document.title = stGet('title');
  const h1 = document.getElementById('header-title');
  if (h1) h1.textContent = stGet('headerTitle');
  const langH3 = document.querySelector('.language-selector h3');
  if (langH3) langH3.textContent = stGet('selectLanguage');
  const labelLevel = document.getElementById('label-level');
  if (labelLevel) labelLevel.textContent = stGet('level');
  const labelScore = document.getElementById('label-score');
  if (labelScore) labelScore.textContent = stGet('score');
  const labelLives = document.getElementById('label-lives');
  if (labelLives) labelLives.textContent = stGet('lives');
  const instr = document.getElementById('instruction-text');
  if (instr) instr.textContent = stGet('instruction');
  const instrSub = document.getElementById('instruction-sub');
  if (instrSub) instrSub.textContent = stGet('instructionSub');
  const sInfo = document.getElementById('sentence-info-text');
  if (sInfo) sInfo.textContent = stGet('sentenceInfo');
  const sTip = document.getElementById('sentence-info-tip');
  if (sTip) sTip.textContent = stGet('sentenceTip');
  const wcTitle = document.getElementById('word-cards-title');
  if (wcTitle) wcTitle.textContent = stGet('wordCards');
  const check = document.getElementById('check-btn');
  if (check) check.textContent = stGet('check');
  const hint = document.getElementById('hint-btn');
  if (hint) hint.textContent = stGet('hint');
  const reset = document.getElementById('reset-btn');
  if (reset) reset.textContent = stGet('reset');
  const next = document.getElementById('next-btn');
  if (next) next.textContent = stGet('next');
  const lct = document.getElementById('level-complete-title');
  if (lct) lct.textContent = stGet('levelCompleteTitle');
  const cont = document.getElementById('continue-btn');
  if (cont) cont.textContent = stGet('continue');
  const got = document.getElementById('game-over-title');
  if (got) got.textContent = stGet('gameOverTitle');
  const rest = document.getElementById('restart-btn');
  if (rest) rest.textContent = stGet('playAgain');
}

function initSTLanguageSelector() {
  const container = document.querySelector('.language-selector');
  if (!container) return;
  
  // Clear any existing buttons
  container.querySelectorAll('button.language-btn').forEach(b => b.remove());
  
  // Get or create buttons container
  let buttonsContainer = container.querySelector('.language-buttons');
  if (!buttonsContainer) {
    buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'language-buttons';
    container.appendChild(buttonsContainer);
  } else {
    // Clear existing buttons from container
    buttonsContainer.innerHTML = '';
  }
  
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
      applySTLanguage(lang.code);
      if (window.stRefreshTexts) window.stRefreshTexts();
    };
    if (lang.code === stLang) btn.classList.add('active');
    buttonsContainer.appendChild(btn);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSTLanguageSelector();
  applySTLanguage(stLang);
});

function stTranslateWord(word) {
  if (!word) return word;
  const pack = stTranslations[stLang] || stTranslations.en;
  const map = pack.wordMap || {};
  const key = String(word).toLowerCase();
  return map[key] || word;
}
