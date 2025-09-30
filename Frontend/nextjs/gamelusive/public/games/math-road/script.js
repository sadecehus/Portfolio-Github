// Dil çevirileri
const translations = {
    en: {
        gameTitle: "Math Road",
        questionTitle: "Math Question",
        gameOverTitle: "Game Over!",
        finalScoreLabel: "Final Score:",
        finalStepsLabel: "Steps Taken:",
        finalLevelLabel: "Level Reached:",
        restartBtn: "Play Again",
        startBtn: "Start Game",
        pauseBtn: "Pause",
        continueBtn: "Continue",
        instructionsTitle: "How to Play?",
        levelsTitle: "Level Descriptions:",
        level1Title: "Level 1:",
        level1Desc: "Addition and Subtraction",
        level2Title: "Level 2:",
        level2Desc: "Multiplication and Division",
        level3Title: "Level 3:",
        level3Desc: "Powers and Square Roots",
        level4Title: "Level 4:",
        level4Desc: "Simple Equations (find x)",
        levelInfo: {
            1: "Level 1: Addition and Subtraction",
            2: "Level 2: Multiplication and Division",
            3: "Level 3: Powers and Square Roots",
            4: "Level 4: Simple Equations"
        },
        instructions: [
            "Your character moves step by step",
            "A math question appears at each step",
            "Answer correctly to move to the next step",
            "Wrong answers cost you a life",
            "Questions get harder at each step",
            "Game ends after losing 3 lives"
        ]
    },
    tr: {
        gameTitle: "Matematik Yolu",
        questionTitle: "Matematik Sorusu",
        gameOverTitle: "Oyun Bitti!",
        finalScoreLabel: "Final Skorunuz:",
        finalStepsLabel: "Attığınız Adım:",
        finalLevelLabel: "Ulaştığınız Seviye:",
        restartBtn: "Tekrar Oyna",
        startBtn: "Oyunu Başlat",
        pauseBtn: "Duraklat",
        continueBtn: "Devam Et",
        instructionsTitle: "Nasıl Oynanır?",
        levelsTitle: "Seviye Açıklamaları:",
        level1Title: "Seviye 1:",
        level1Desc: "Toplama ve Çıkarma İşlemleri",
        level2Title: "Seviye 2:",
        level2Desc: "Çarpma ve Bölme İşlemleri",
        level3Title: "Seviye 3:",
        level3Desc: "Üslü Sayılar ve Karekök",
        level4Title: "Seviye 4:",
        level4Desc: "Basit Denklemler (x bulma)",
        levelInfo: {
            1: "Seviye 1: Toplama ve Çıkarma",
            2: "Seviye 2: Çarpma ve Bölme",
            3: "Seviye 3: Üslü Sayılar ve Karekök",
            4: "Seviye 4: Basit Denklemler"
        },
        instructions: [
            "Karakteriniz adım adım ilerler",
            "Her adımda bir matematik sorusu çıkar",
            "Doğru cevap verirseniz bir sonraki adıma geçersiniz",
            "Yanlış cevap verirseniz bir can kaybedersiniz",
            "Her adımda sorular daha da zorlaşır",
            "3 can kaybettikten sonra oyun biter"
        ]
    },
    pl: {
        gameTitle: "Droga Matematyczna",
        questionTitle: "Pytanie Matematyczne",
        gameOverTitle: "Koniec Gry!",
        finalScoreLabel: "Wynik Końcowy:",
        finalStepsLabel: "Wykonane Kroki:",
        finalLevelLabel: "Osiągnięty Poziom:",
        restartBtn: "Zagraj Ponownie",
        startBtn: "Rozpocznij Grę",
        pauseBtn: "Pauza",
        continueBtn: "Kontynuuj",
        instructionsTitle: "Jak Grać?",
        levelsTitle: "Opisy Poziomów:",
        level1Title: "Poziom 1:",
        level1Desc: "Dodawanie i Odejmowanie",
        level2Title: "Poziom 2:",
        level2Desc: "Mnożenie i Dzielenie",
        level3Title: "Poziom 3:",
        level3Desc: "Potęgi i Pierwiastki Kwadratowe",
        level4Title: "Poziom 4:",
        level4Desc: "Proste Równania (znajdź x)",
        levelInfo: {
            1: "Poziom 1: Dodawanie i Odejmowanie",
            2: "Poziom 2: Mnożenie i Dzielenie",
            3: "Poziom 3: Potęgi i Pierwiastki",
            4: "Poziom 4: Proste Równania"
        },
        instructions: [
            "Twoja postać porusza się krok po kroku",
            "Na każdym kroku pojawia się pytanie matematyczne",
            "Odpowiedz poprawnie, aby przejść do następnego kroku",
            "Złe odpowiedzi kosztują Cię życie",
            "Pytania stają się trudniejsze z każdym krokiem",
            "Gra kończy się po utracie 3 żyć"
        ]
    },
    nl: {
        gameTitle: "Wiskundeweg",
        questionTitle: "Wiskundevraag",
        gameOverTitle: "Spel Afgelopen!",
        finalScoreLabel: "Eindscore:",
        finalStepsLabel: "Genomen Stappen:",
        finalLevelLabel: "Behaald Niveau:",
        restartBtn: "Opnieuw Spelen",
        startBtn: "Start Spel",
        pauseBtn: "Pauzeren",
        continueBtn: "Doorgaan",
        instructionsTitle: "Hoe Spelen?",
        levelsTitle: "Niveau Beschrijvingen:",
        level1Title: "Niveau 1:",
        level1Desc: "Optellen en Aftrekken",
        level2Title: "Niveau 2:",
        level2Desc: "Vermenigvuldigen en Delen",
        level3Title: "Niveau 3:",
        level3Desc: "Machten en Vierkantswortels",
        level4Title: "Niveau 4:",
        level4Desc: "Eenvoudige Vergelijkingen (vind x)",
        levelInfo: {
            1: "Niveau 1: Optellen en Aftrekken",
            2: "Niveau 2: Vermenigvuldigen en Delen",
            3: "Niveau 3: Machten en Vierkantswortels",
            4: "Niveau 4: Eenvoudige Vergelijkingen"
        },
        instructions: [
            "Je karakter beweegt stap voor stap",
            "Bij elke stap verschijnt een wiskundevraag",
            "Beantwoord correct om naar de volgende stap te gaan",
            "Foute antwoorden kosten je een leven",
            "Vragen worden moeilijker bij elke stap",
            "Spel eindigt na het verliezen van 3 levens"
        ]
    },
    lt: {
        gameTitle: "Matematikos Kelias",
        questionTitle: "Matematikos Klausimas",
        gameOverTitle: "Žaidimas Baigtas!",
        finalScoreLabel: "Galutinis Rezultatas:",
        finalStepsLabel: "Žengti Žingsniai:",
        finalLevelLabel: "Pasiektas Lygis:",
        restartBtn: "Žaisti Vėl",
        startBtn: "Pradėti Žaidimą",
        pauseBtn: "Pauzė",
        continueBtn: "Tęsti",
        instructionsTitle: "Kaip Žaisti?",
        levelsTitle: "Lygių Aprašymai:",
        level1Title: "1 Lygis:",
        level1Desc: "Sudėtis ir Atimtis",
        level2Title: "2 Lygis:",
        level2Desc: "Daugyba ir Dalyba",
        level3Title: "3 Lygis:",
        level3Desc: "Laipsniai ir Kvadratinės Šaknys",
        level4Title: "4 Lygis:",
        level4Desc: "Paprastos Lygtys (rask x)",
        levelInfo: {
            1: "1 Lygis: Sudėtis ir Atimtis",
            2: "2 Lygis: Daugyba ir Dalyba",
            3: "3 Lygis: Laipsniai ir Šaknys",
            4: "4 Lygis: Paprastos Lygtys"
        },
        instructions: [
            "Tavo veikėjas juda žingsnis po žingsnio",
            "Kiekviename žingsnyje atsiranda matematikos klausimas",
            "Atsakyk teisingai, kad pereitum į kitą žingsnį",
            "Neteisingi atsakymai kainuoja gyvybę",
            "Klausimai darosi sunkesni su kiekvienu žingsniu",
            "Žaidimas baigiasi praradus 3 gyvybes"
        ]
    }
};

let currentLanguage = 'en'; // Default İngilizce

function changeLanguage() {
    const select = document.getElementById('languageSelect');
    currentLanguage = select.value;
    updateLanguage();
    localStorage.setItem('mathRoadLanguage', currentLanguage);
}

function updateLanguage() {
    const t = translations[currentLanguage];
    
    // Başlık ve UI elementleri
    document.getElementById('gameTitle').textContent = t.gameTitle;
    document.getElementById('questionTitle').textContent = t.questionTitle;
    document.getElementById('gameOverTitle').textContent = t.gameOverTitle;
    document.getElementById('finalScoreLabel').textContent = t.finalScoreLabel;
    document.getElementById('finalStepsLabel').textContent = t.finalStepsLabel;
    document.getElementById('finalLevelLabel').textContent = t.finalLevelLabel;
    document.getElementById('restartBtn').textContent = t.restartBtn;
    document.getElementById('startBtn').textContent = t.startBtn;
    document.getElementById('instructionsTitle').textContent = t.instructionsTitle;
    document.getElementById('levelsTitle').textContent = t.levelsTitle;
    
    // Seviye açıklamaları
    document.getElementById('level1Title').textContent = t.level1Title;
    document.getElementById('level1Desc').textContent = t.level1Desc;
    document.getElementById('level2Title').textContent = t.level2Title;
    document.getElementById('level2Desc').textContent = t.level2Desc;
    document.getElementById('level3Title').textContent = t.level3Title;
    document.getElementById('level3Desc').textContent = t.level3Desc;
    document.getElementById('level4Title').textContent = t.level4Title;
    document.getElementById('level4Desc').textContent = t.level4Desc;
    
    // Talimatları güncelle
    const instructionsList = document.getElementById('instructionsList');
    instructionsList.innerHTML = '';
    t.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
    
    // Oyun durumu güncellemeleri
    if (game && game.level) {
        const levelInfo = document.getElementById('levelInfo');
        if (levelInfo) {
            levelInfo.textContent = t.levelInfo[game.level] || t.levelInfo[1];
        }
    }
}

class MathRoadGame {
    constructor() {
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.maxLevel = 4; // Maksimum seviye
        this.currentStep = 1; // 1'den başla
        this.totalSteps = 10; // Her seviyede 10 adım
        this.isGameRunning = false;
        this.isPaused = false;
        this.currentQuestion = null;
        this.questionTimer = null;
        
        this.initializeElements();
        this.setupSteps();
    }

    initializeElements() {
        this.gameArea = document.getElementById('gameArea');
        this.character = document.getElementById('character');
        this.questionPanel = document.getElementById('questionPanel');
        this.questionText = document.getElementById('questionText');
        this.answerOptions = document.getElementById('answerOptions');
        this.gameOver = document.getElementById('gameOver');
        this.livesCount = document.getElementById('livesCount');
        this.scoreCount = document.getElementById('scoreCount');
        this.levelCount = document.getElementById('levelCount');
        this.stepCount = document.getElementById('stepCount');
        this.finalScore = document.getElementById('finalScore');
        this.finalLevel = document.getElementById('finalLevel');
        this.finalSteps = document.getElementById('finalSteps');
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.timerBar = document.getElementById('timerBar');
        this.stepsContainer = document.getElementById('steps');
        this.progressBar = document.getElementById('progress');
        this.levelInfo = document.getElementById('levelInfo');
        
        // Element kontrolü
        if (!this.gameArea || !this.character) {
            console.error('Gerekli HTML elementleri bulunamadı!');
            return false;
        }
        return true;
    }

    setupSteps() {
        if (!this.stepsContainer) return; // Element yoksa çık
        
        this.stepsContainer.innerHTML = '';
        for (let i = 1; i <= this.totalSteps; i++) {
            const stepMarker = document.createElement('div');
            stepMarker.className = 'step-marker upcoming';
            stepMarker.textContent = i;
            stepMarker.id = `step-${i}`;
            this.stepsContainer.appendChild(stepMarker);
        }
        this.updateStepMarkers();
    }

    updateStepMarkers() {
        for (let i = 1; i <= this.totalSteps; i++) {
            const marker = document.getElementById(`step-${i}`);
            if (!marker) continue; // Element yoksa atla
            
            if (i < this.currentStep) {
                marker.className = 'step-marker completed';
            } else if (i === this.currentStep) {
                marker.className = 'step-marker current';
            } else {
                marker.className = 'step-marker upcoming';
            }
        }
        
        // Progress bar güncelle
        if (this.progressBar) {
            const progress = ((this.currentStep - 1) / this.totalSteps) * 100;
            this.progressBar.style.width = Math.max(0, Math.min(100, progress)) + '%';
        }
    }

    startGame() {
        console.log('Oyun başlatılıyor...');
        
        // Önceki timer'ları temizle
        if (this.questionTimer) {
            clearTimeout(this.questionTimer);
            this.questionTimer = null;
        }
        
        this.isGameRunning = true;
        this.isPaused = false;
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.currentStep = 1;
        this.currentQuestion = null;
        
        this.setupSteps();
        this.updateUI();
        this.startBtn.style.display = 'none';
        this.pauseBtn.style.display = 'inline-block';
        this.gameOver.style.display = 'none';
        this.questionPanel.style.display = 'none';
        
        // Karakteri başlangıç pozisyonuna getir
        this.character.style.left = '50px';
        
        // İlk soruyu göster
        setTimeout(() => {
            if (this.isGameRunning) {
                this.showQuestion();
            }
        }, 1000);
    }

    pauseGame() {
        this.isPaused = !this.isPaused;
        const t = translations[currentLanguage];
        
        if (this.isPaused) {
            this.pauseBtn.textContent = t.continueBtn;
            if (this.questionTimer) {
                clearTimeout(this.questionTimer);
            }
        } else {
            this.pauseBtn.textContent = t.pauseBtn;
            if (this.questionPanel.style.display === 'flex') {
                this.startQuestionTimer();
            }
        }
    }

    generateQuestion() {
        try {
            let num1, num2, operation, answer, question;
            
            console.log(`Soru üretiliyor - Seviye: ${this.level}, Adım: ${this.currentStep}`);
            
            switch(this.level) {
                case 1: // Toplama ve Çıkarma
                    if (Math.random() < 0.6) {
                        // Toplama
                        num1 = Math.floor(Math.random() * (10 + this.currentStep * 2)) + 1;
                        num2 = Math.floor(Math.random() * (10 + this.currentStep * 2)) + 1;
                        operation = '+';
                        answer = num1 + num2;
                        question = `${num1} + ${num2}`;
                    } else {
                        // Çıkarma
                        num1 = Math.floor(Math.random() * (20 + this.currentStep * 3)) + 15;
                        num2 = Math.floor(Math.random() * (num1 - 5)) + 1;
                        operation = '-';
                        answer = num1 - num2;
                        question = `${num1} - ${num2}`;
                    }
                    break;
                    
                case 2: // Çarpma ve Bölme
                    if (Math.random() < 0.6) {
                        // Çarpma
                        num1 = Math.floor(Math.random() * Math.min(8 + this.currentStep, 12)) + 1;
                        num2 = Math.floor(Math.random() * Math.min(8 + this.currentStep, 12)) + 1;
                        operation = '×';
                        answer = num1 * num2;
                        question = `${num1} × ${num2}`;
                    } else {
                        // Bölme
                        answer = Math.floor(Math.random() * Math.min(10 + this.currentStep, 15)) + 1;
                        num2 = Math.floor(Math.random() * Math.min(8 + this.currentStep, 12)) + 1;
                        num1 = answer * num2;
                        operation = '÷';
                        question = `${num1} ÷ ${num2}`;
                    }
                    break;
                    
                case 3: // Üslü Sayılar ve Karekök
                    if (Math.random() < 0.7) {
                        // Üslü sayılar
                        const base = Math.floor(Math.random() * 6) + 2; // 2-7 arası
                        const exponent = Math.floor(Math.random() * 4) + 2; // 2-5 arası
                        answer = Math.pow(base, exponent);
                        question = `${base}<span class="superscript">${exponent}</span>`;
                    } else {
                        // Karekök
                        const perfectSquares = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225];
                        const maxIndex = Math.min(perfectSquares.length - 1, Math.max(5, 8 + this.currentStep));
                        const randomSquare = perfectSquares[Math.floor(Math.random() * maxIndex)];
                        answer = Math.sqrt(randomSquare);
                        question = `√${randomSquare}`;
                    }
                    break;
                    
                case 4: // Basit Denklemler
                    const solutions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18, 20];
                    const x = solutions[Math.floor(Math.random() * Math.min(solutions.length, 10 + this.currentStep))];
                    
                    if (Math.random() < 0.4) {
                        // x + a = b tipinde
                        const constant = Math.floor(Math.random() * (15 + this.currentStep)) + 1;
                        const result = x + constant;
                        answer = x;
                        question = `<span class="variable">x</span> + ${constant} = ${result}`;
                    } else if (Math.random() < 0.7) {
                        // a × x = b tipinde
                        const multiplier = Math.floor(Math.random() * 8) + 2;
                        const result = x * multiplier;
                        answer = x;
                        question = `${multiplier} × <span class="variable">x</span> = ${result}`;
                    } else {
                        // x - a = b tipinde
                        const constant = Math.floor(Math.random() * Math.max(x - 1, 1)) + 1;
                        const result = x - constant;
                        answer = x;
                        question = `<span class="variable">x</span> - ${constant} = ${result}`;
                    }
                    break;
                    
                default:
                    // Varsayılan olarak Seviye 1
                    console.warn('Bilinmeyen seviye, varsayılan soru üretiliyor');
                    num1 = Math.floor(Math.random() * 10) + 1;
                    num2 = Math.floor(Math.random() * 10) + 1;
                    answer = num1 + num2;
                    question = `${num1} + ${num2}`;
            }
            
            // Cevabın geçerli olduğunu kontrol et
            if (answer === undefined || answer === null || isNaN(answer)) {
                console.error('Geçersiz cevap üretildi:', answer);
                // Basit bir fallback soru üret
                answer = 5;
                question = '2 + 3';
            }
            
            // Yanlış cevaplar üret
            const wrongAnswers = [];
            let attempts = 0;
            while (wrongAnswers.length < 3 && attempts < 20) {
                attempts++;
                let wrongAnswer;
                const variation = Math.max(1, Math.floor(answer * 0.4));
                wrongAnswer = answer + Math.floor(Math.random() * variation * 2) - variation;
                
                // Karekök ve üslü sayılar için özel kontrol
                if (this.level === 3 && wrongAnswer < 1) {
                    wrongAnswer = Math.floor(Math.random() * 5) + 1;
                }
                
                if (wrongAnswer !== answer && wrongAnswer > 0 && !wrongAnswers.includes(wrongAnswer)) {
                    wrongAnswers.push(wrongAnswer);
                }
            }
            
            // Yeterli yanlış cevap üretilemediyse basit alternatifler ekle
            while (wrongAnswers.length < 3) {
                const altAnswer = answer + (wrongAnswers.length + 1) * (Math.random() > 0.5 ? 1 : -1);
                if (altAnswer > 0 && !wrongAnswers.includes(altAnswer)) {
                    wrongAnswers.push(altAnswer);
                }
            }
            
            const result = {
                question: question,
                correctAnswer: answer,
                options: [answer, ...wrongAnswers].sort(() => Math.random() - 0.5)
            };
            
            console.log('Üretilen soru:', result);
            return result;
            
        } catch (error) {
            console.error('Soru üretme hatası:', error);
            // Fallback soru döndür
            return {
                question: '2 + 3',
                correctAnswer: 5,
                options: [5, 4, 6, 7].sort(() => Math.random() - 0.5)
            };
        }
    }

    showQuestion() {
        if (!this.isGameRunning || this.isPaused) {
            console.log('Oyun durmuş, soru gösterilmiyor');
            return;
        }
        
        // Önceki timer'ı temizle
        if (this.questionTimer) {
            clearTimeout(this.questionTimer);
            this.questionTimer = null;
        }
        
        console.log(`Soru gösteriliyor - Seviye: ${this.level}, Adım: ${this.currentStep}`);
        
        try {
            this.currentQuestion = this.generateQuestion();
            if (!this.currentQuestion) {
                console.error('Soru üretilemedi!');
                this.endGame();
                return;
            }
            
            this.questionText.innerHTML = `${this.currentQuestion.question} = ?`;
            
            // Seviye bilgisini güncelle
            const t = translations[currentLanguage];
            if (this.levelInfo && t.levelInfo[this.level]) {
                this.levelInfo.textContent = t.levelInfo[this.level];
            }
            
            // Cevap seçeneklerini oluştur
            this.answerOptions.innerHTML = '';
            this.currentQuestion.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'answer-option';
                button.textContent = option;
                button.onclick = () => this.checkAnswer(option, button);
                this.answerOptions.appendChild(button);
            });
            
            this.questionPanel.style.display = 'flex';
            this.startQuestionTimer();
            
        } catch (error) {
            console.error('Soru gösterme hatası:', error);
            this.endGame();
        }
    }

    startQuestionTimer() {
        // Önceki timer'ı temizle
        if (this.questionTimer) {
            clearTimeout(this.questionTimer);
            this.questionTimer = null;
        }
        
        this.timerBar.style.animation = 'none';
        setTimeout(() => {
            if (this.timerBar) {
                this.timerBar.style.animation = 'timerCountdown 15s linear';
            }
        }, 10);
        
        this.questionTimer = setTimeout(() => {
            if (!this.isPaused && this.isGameRunning && this.currentQuestion) {
                console.log('Zaman aşımı, otomatik yanlış cevap');
                this.checkAnswer(-1, null); // Zaman aşımı
            }
        }, 15000);
    }

    checkAnswer(selectedAnswer, button) {
        console.log(`Cevap kontrol ediliyor: ${selectedAnswer}`);
        
        // Timer'ı temizle
        if (this.questionTimer) {
            clearTimeout(this.questionTimer);
            this.questionTimer = null;
        }
        this.timerBar.style.animation = 'none';
        
        // Çift tıklamayı önle
        if (!this.currentQuestion) {
            console.log('Çift tıklama önlendi');
            return;
        }
        
        const isCorrect = selectedAnswer === this.currentQuestion.correctAnswer;
        console.log(`Cevap ${isCorrect ? 'doğru' : 'yanlış'}`);
        
        // Soruyu temizle
        const question = this.currentQuestion;
        this.currentQuestion = null;
        
        if (isCorrect) {
            if (button) button.classList.add('correct');
            const points = this.level * (this.currentStep + 5);
            this.score += points;
            this.showFloatingScore('+' + points);
            
            // Karakteri ilerlet
            setTimeout(() => {
                if (this.isGameRunning) {
                    this.moveCharacterForward();
                }
            }, 1000);
            
        } else {
            if (button) button.classList.add('wrong');
            this.lives--;
            this.animateCharacterHit();
            
            // Doğru cevabı göster
            const correctButton = Array.from(this.answerOptions.children)
                .find(btn => parseInt(btn.textContent) === question.correctAnswer);
            if (correctButton) correctButton.classList.add('correct');
        }
        
        this.updateUI();
        
        setTimeout(() => {
            this.questionPanel.style.display = 'none';
            
            if (this.lives <= 0) {
                console.log('Canlar bitti, oyun bitiyor');
                this.endGame();
            } else if (!isCorrect && this.lives > 0) {
                // Yanlış cevap verdiyse aynı adımda kal
                console.log('Yanlış cevap, aynı adımda kalıyor');
                setTimeout(() => {
                    if (this.isGameRunning && !this.isPaused) {
                        this.showQuestion();
                    }
                }, 500);
            }
            // Doğru cevap verdiyse moveCharacterForward sonraki soruyu otomatik gösterecek
        }, 2000);
    }

    moveCharacterForward() {
        console.log(`Karakter ilerliyor - Mevcut adım: ${this.currentStep}`);
        
        this.currentStep++;
        this.character.classList.add('walking');
        
        // Karakteri ileri hareket ettir
        const newPosition = 50 + (this.currentStep - 1) * 70;
        this.character.style.left = Math.min(newPosition, this.gameArea.offsetWidth - 100) + 'px';
        
        setTimeout(() => {
            this.character.classList.remove('walking');
        }, 500);
        
        this.updateStepMarkers();
        
        // Seviye kontrolü - 10 adım tamamlandığında
        if (this.currentStep > this.totalSteps) {
            console.log(`Seviye ${this.level} tamamlandı, sonraki seviyeye geçiliyor`);
            setTimeout(() => {
                this.nextLevel();
            }, 1000);
        } else {
            // Aynı seviyede sonraki soruya geç
            console.log(`Sonraki soruya geçiliyor - Adım: ${this.currentStep}`);
            setTimeout(() => {
                if (this.isGameRunning && !this.isPaused) {
                    this.showQuestion();
                }
            }, 1000);
        }
    }

    nextLevel() {
        console.log(`Seviye geçişi: ${this.level} -> ${this.level + 1}`);
        
        if (this.level >= this.maxLevel) {
            // Oyun tamamlandı!
            setTimeout(() => {
                this.gameCompleted();
            }, 500);
            return;
        }
        
        this.level++;
        this.currentStep = 1;
        this.character.style.left = '50px';
        
        // Seviye atlama animasyonu
        const t = translations[currentLanguage];
        const levelName = t.levelInfo[this.level] || `Level ${this.level}`;
        this.showFloatingScore(levelName);
        
        // UI güncelle
        this.updateUI();
        
        setTimeout(() => {
            try {
                this.setupSteps();
                setTimeout(() => {
                    this.showQuestion();
                }, 500);
            } catch (error) {
                console.error('Seviye geçiş hatası:', error);
                this.endGame();
            }
        }, 2000);
    }
    
    gameCompleted() {
        this.isGameRunning = false;
        
        // Tebrikler mesajı
        const t = translations[currentLanguage];
        this.showFloatingScore(t.gameTitle + ' - ' + (t.gameOverTitle || 'Completed!'));
        
        setTimeout(() => {
            this.endGame();
        }, 3000);
    }

    showFloatingScore(text) {
        const floatingScore = document.createElement('div');
        floatingScore.className = 'floating-score';
        floatingScore.textContent = text;
        floatingScore.style.left = this.character.style.left || '50px';
        floatingScore.style.bottom = '200px';
        
        this.gameArea.appendChild(floatingScore);
        
        setTimeout(() => {
            if (floatingScore.parentNode) {
                floatingScore.parentNode.removeChild(floatingScore);
            }
        }, 1500);
    }

    animateCharacterHit() {
        this.character.style.animation = 'none';
        this.character.style.color = '#FF6B6B';
        this.character.style.transform = 'scale(1.2)';
        
        setTimeout(() => {
            this.character.style.animation = 'idle 3s infinite';
            this.character.style.color = '';
            this.character.style.transform = '';
        }, 800);
    }

    updateUI() {
        if (this.scoreCount) this.scoreCount.textContent = this.score;
        if (this.livesCount) this.livesCount.textContent = this.lives;
        if (this.levelCount) this.levelCount.textContent = this.level;
        if (this.stepCount) this.stepCount.textContent = this.currentStep;
    }

    endGame() {
        this.isGameRunning = false;
        
        this.finalScore.textContent = this.score;
        this.finalLevel.textContent = this.level;
        this.finalSteps.textContent = (this.level - 1) * this.totalSteps + (this.currentStep - 1);
        this.gameOver.style.display = 'flex';
        
        this.startBtn.style.display = 'inline-block';
        this.pauseBtn.style.display = 'none';
        this.startBtn.textContent = 'Tekrar Oyna';
    }
}

// Global functions
let game;

// Sayfa yüklendikten sonra game nesnesini oluştur
function initializeGame() {
    try {
        game = new MathRoadGame();
        console.log('Oyun başarıyla oluşturuldu');
        return true;
    } catch (error) {
        console.error('Oyun oluşturulurken hata:', error);
        return false;
    }
}

function startGame() {
    if (!game) {
        initializeGame();
    }
    if (game && game.startGame) {
        game.startGame();
    }
}

function pauseGame() {
    if (game && game.pauseGame) {
        game.pauseGame();
    }
}

function restartGame() {
    try {
        game = new MathRoadGame();
        game.startGame();
    } catch (error) {
        console.error('Oyun yeniden başlatılırken hata:', error);
    }
}

// Klavye kontrolleri
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !game.isGameRunning) {
        startGame();
        event.preventDefault();
    } else if (event.code === 'KeyP' && game.isGameRunning) {
        pauseGame();
        event.preventDefault();
    }
});

// Soru panelinde sayı tuşları ile cevap verme
document.addEventListener('keydown', (event) => {
    if (game.questionPanel.style.display === 'flex' && !game.isPaused) {
        const num = parseInt(event.key);
        if (!isNaN(num) && num >= 1 && num <= 4) {
            const buttons = game.answerOptions.querySelectorAll('.answer-option');
            if (buttons[num - 1]) {
                buttons[num - 1].click();
            }
        }
    }
});

// Sayfa yüklendiğinde başlangıç durumu
document.addEventListener('DOMContentLoaded', () => {
    // Kaydedilmiş dili yükle veya varsayılan İngilizce kullan
    const savedLanguage = localStorage.getItem('mathRoadLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    } else {
        currentLanguage = 'en'; // Varsayılan İngilizce
    }
    
    // Dil seçicisini güncelle
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }
    
    // Dili güncelle
    updateLanguage();
    
    // Game nesnesini oluştur
    initializeGame();
    
    // Game nesnesinin düzgün oluşturulduğunu kontrol et
    try {
        if (game && game.updateUI) {
            game.updateUI();
        }
        
        // Giriş animasyonu
        const container = document.querySelector('.game-container');
        if (container) {
            container.style.opacity = '0';
            container.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                container.style.transition = 'all 0.5s ease';
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 100);
        }
    } catch (error) {
        console.error('Oyun başlatılırken hata:', error);
    }
});

// Sayfa yenilenirken uyarı
window.addEventListener('beforeunload', (event) => {
    if (game.isGameRunning) {
        event.preventDefault();
        event.returnValue = 'Oyun devam ediyor. Çıkmak istediğinizden emin misiniz?';
    }
});
