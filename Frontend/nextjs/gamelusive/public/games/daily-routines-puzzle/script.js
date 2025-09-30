// Language translations
const translations = {
    en: {
        'game-title': '🌅 Daily Routines Puzzle',
        'game-subtitle': 'Put the daily routines in the correct order!',
        'how-to-play': 'How to Play:',
        'instructions-text': 'Drag and drop the cards below into the correct order according to the flow of the day.',
        'correct-order': 'Correct Order:',
        'daily-activities': 'Daily Activities:',
        'activity-slot': '{position} Activity',
        'wake-up': 'Wake Up',
        'brush-teeth': 'Brush Teeth',
        'breakfast': 'Have Breakfast',
        'get-dressed': 'Get Dressed',
        'go-school': 'Go to School',
        'come-home': 'Come Home',
        'dinner': 'Have Dinner',
        'sleep': 'Go to Sleep',
        'check-btn': 'Check Answer',
        'reset-btn': 'Reset Game',
        'hint-btn': 'Hint',
        'score': 'Score',
        'attempts': 'Attempts',
        'congratulations': '🎉 Congratulations!',
        'success-message': 'You put the daily routines in the correct order!',
        'your-score': 'Your Score',
        'attempts-count': 'Number of Attempts',
        'play-again': 'Play Again',
        'fill-all-positions': 'Please fill all positions!',
        'correct-partial': '{correct}/{total} correct! Wrong positions: {wrong}',
        'perfect-sequence': '🎉 Perfect! You put all routines in the correct order!',
        'all-hints-used': 'You have used all hints!',
        'hint-message': 'Hint: At {time} there should be "{activity}" activity!',
        'game-reset': 'Game has been reset!',
        'ordinal-1': '1st',
        'ordinal-2': '2nd',
        'ordinal-3': '3rd',
        'ordinal-4': '4th',
        'ordinal-5': '5th',
        'ordinal-6': '6th',
        'ordinal-7': '7th',
        'ordinal-8': '8th'
    },
    tr: {
        'game-title': '🌅 Günlük Rutin Puzzle',
        'game-subtitle': 'Günlük rutinleri doğru sıraya koy!',
        'how-to-play': 'Nasıl Oynanır:',
        'instructions-text': 'Aşağıdaki kartları günün akışına göre doğru sıraya sürükleyip bırakın.',
        'correct-order': 'Doğru Sıra:',
        'daily-activities': 'Günlük Aktiviteler:',
        'activity-slot': '{position}. Aktivite',
        'wake-up': 'Uyanmak',
        'brush-teeth': 'Diş Fırçalamak',
        'breakfast': 'Kahvaltı Yapmak',
        'get-dressed': 'Giyinmek',
        'go-school': 'Okula Gitmek',
        'come-home': 'Eve Dönmek',
        'dinner': 'Akşam Yemeği',
        'sleep': 'Uyumak',
        'check-btn': 'Kontrol Et',
        'reset-btn': 'Yeniden Başla',
        'hint-btn': 'İpucu',
        'score': 'Puan',
        'attempts': 'Deneme',
        'congratulations': '🎉 Tebrikler!',
        'success-message': 'Günlük rutinleri doğru sıraya koydun!',
        'your-score': 'Puanın',
        'attempts-count': 'Deneme Sayısı',
        'play-again': 'Tekrar Oyna',
        'fill-all-positions': 'Lütfen tüm pozisyonları doldurun!',
        'correct-partial': '{correct}/{total} doğru! Yanlış pozisyonlar: {wrong}',
        'perfect-sequence': '🎉 Mükemmel! Tüm rutinleri doğru sıraya koydun!',
        'all-hints-used': 'Tüm ipuçlarını kullandın!',
        'hint-message': 'İpucu: {time} zamanında "{activity}" aktivitesi olmalı!',
        'game-reset': 'Oyun yeniden başlatıldı!',
        'ordinal-1': '1.',
        'ordinal-2': '2.',
        'ordinal-3': '3.',
        'ordinal-4': '4.',
        'ordinal-5': '5.',
        'ordinal-6': '6.',
        'ordinal-7': '7.',
        'ordinal-8': '8.'
    },
    pl: {
        'game-title': '🌅 Puzzle Codziennych Czynności',
        'game-subtitle': 'Ułóż codzienne czynności we właściwej kolejności!',
        'how-to-play': 'Jak grać:',
        'instructions-text': 'Przeciągnij i upuść karty poniżej we właściwej kolejności zgodnie z przebiegiem dnia.',
        'correct-order': 'Właściwa Kolejność:',
        'daily-activities': 'Codzienne Czynności:',
        'activity-slot': '{position} Czynność',
        'wake-up': 'Obudzić się',
        'brush-teeth': 'Myć zęby',
        'breakfast': 'Zjeść śniadanie',
        'get-dressed': 'Ubrać się',
        'go-school': 'Iść do szkoły',
        'come-home': 'Wrócić do domu',
        'dinner': 'Zjeść kolację',
        'sleep': 'Iść spać',
        'check-btn': 'Sprawdź odpowiedź',
        'reset-btn': 'Resetuj grę',
        'hint-btn': 'Podpowiedź',
        'score': 'Wynik',
        'attempts': 'Próby',
        'congratulations': '🎉 Gratulacje!',
        'success-message': 'Ułożyłeś codzienne czynności we właściwej kolejności!',
        'your-score': 'Twój wynik',
        'attempts-count': 'Liczba prób',
        'play-again': 'Zagraj ponownie',
        'fill-all-positions': 'Proszę wypełnić wszystkie pozycje!',
        'correct-partial': '{correct}/{total} poprawne! Nieprawidłowe pozycje: {wrong}',
        'perfect-sequence': '🎉 Doskonale! Ułożyłeś wszystkie czynności we właściwej kolejności!',
        'all-hints-used': 'Wykorzystałeś wszystkie podpowiedzi!',
        'hint-message': 'Podpowiedź: O {time} powinna być czynność "{activity}"!',
        'game-reset': 'Gra została zresetowana!',
        'ordinal-1': '1.',
        'ordinal-2': '2.',
        'ordinal-3': '3.',
        'ordinal-4': '4.',
        'ordinal-5': '5.',
        'ordinal-6': '6.',
        'ordinal-7': '7.',
        'ordinal-8': '8.'
    },
    nl: {
        'game-title': '🌅 Dagelijkse Routine Puzzel',
        'game-subtitle': 'Zet de dagelijkse routines in de juiste volgorde!',
        'how-to-play': 'Hoe te spelen:',
        'instructions-text': 'Sleep de kaarten hieronder naar de juiste volgorde volgens de dagindeling.',
        'correct-order': 'Juiste Volgorde:',
        'daily-activities': 'Dagelijkse Activiteiten:',
        'activity-slot': '{position}e Activiteit',
        'wake-up': 'Wakker worden',
        'brush-teeth': 'Tanden poetsen',
        'breakfast': 'Ontbijten',
        'get-dressed': 'Aankleden',
        'go-school': 'Naar school gaan',
        'come-home': 'Thuiskomen',
        'dinner': 'Avondeten',
        'sleep': 'Gaan slapen',
        'check-btn': 'Controleer antwoord',
        'reset-btn': 'Reset spel',
        'hint-btn': 'Hint',
        'score': 'Score',
        'attempts': 'Pogingen',
        'congratulations': '🎉 Gefeliciteerd!',
        'success-message': 'Je hebt de dagelijkse routines in de juiste volgorde gezet!',
        'your-score': 'Jouw score',
        'attempts-count': 'Aantal pogingen',
        'play-again': 'Opnieuw spelen',
        'fill-all-positions': 'Vul alle posities in!',
        'correct-partial': '{correct}/{total} correct! Verkeerde posities: {wrong}',
        'perfect-sequence': '🎉 Perfect! Je hebt alle routines in de juiste volgorde gezet!',
        'all-hints-used': 'Je hebt alle hints gebruikt!',
        'hint-message': 'Hint: Om {time} zou er "{activity}" activiteit moeten zijn!',
        'game-reset': 'Spel is gereset!',
        'ordinal-1': '1e',
        'ordinal-2': '2e',
        'ordinal-3': '3e',
        'ordinal-4': '4e',
        'ordinal-5': '5e',
        'ordinal-6': '6e',
        'ordinal-7': '7e',
        'ordinal-8': '8e'
    },
    lt: {
        'game-title': '🌅 Kasdienės Rutinos Dėlionė',
        'game-subtitle': 'Sudėkite kasdienės rutinos veiklas teisinga tvarka!',
        'how-to-play': 'Kaip žaisti:',
        'instructions-text': 'Nuvilkite korteles žemiau į teisingą tvarką pagal dienos eigą.',
        'correct-order': 'Teisinga Tvarka:',
        'daily-activities': 'Kasdienės Veiklos:',
        'activity-slot': '{position}-a Veikla',
        'wake-up': 'Pabusti',
        'brush-teeth': 'Išsivalyti dantis',
        'breakfast': 'Pusryčiauti',
        'get-dressed': 'Apsirengti',
        'go-school': 'Eiti į mokyklą',
        'come-home': 'Grįžti namo',
        'dinner': 'Vakarieniauti',
        'sleep': 'Eiti miegoti',
        'check-btn': 'Patikrinti atsakymą',
        'reset-btn': 'Pradėti iš naujo',
        'hint-btn': 'Patarimas',
        'score': 'Rezultatas',
        'attempts': 'Bandymai',
        'congratulations': '🎉 Sveikiname!',
        'success-message': 'Sudėjote kasdienės rutinos veiklas teisinga tvarka!',
        'your-score': 'Jūsų rezultatas',
        'attempts-count': 'Bandymų skaičius',
        'play-again': 'Žaisti dar kartą',
        'fill-all-positions': 'Prašome užpildyti visas pozicijas!',
        'correct-partial': '{correct}/{total} teisingos! Neteisingos pozicijos: {wrong}',
        'perfect-sequence': '🎉 Tobula! Sudėjote visas rutinas teisinga tvarka!',
        'all-hints-used': 'Panaudojote visus patarimus!',
        'hint-message': 'Patarimas: {time} laiku turėtų būti "{activity}" veikla!',
        'game-reset': 'Žaidimas buvo atstatytas!',
        'ordinal-1': '1-a',
        'ordinal-2': '2-a',
        'ordinal-3': '3-a',
        'ordinal-4': '4-a',
        'ordinal-5': '5-a',
        'ordinal-6': '6-a',
        'ordinal-7': '7-a',
        'ordinal-8': '8-a'
    }
};

class DailyRoutinesPuzzle {
    constructor() {
        this.score = 0;
        this.attempts = 0;
        this.placedCards = new Map();
        this.correctSequence = [
            'wake-up', 'brush-teeth', 'breakfast', 
            'get-dressed', 'go-school', 'come-home', 
            'dinner', 'sleep'
        ];
        this.hintsUsed = 0;
        this.maxHints = 3;
        this.currentLanguage = 'en'; // Default to English
        
        this.initializeGame();
        this.setupEventListeners();
        this.setupLanguageSelector();
    }

    initializeGame() {
        this.shuffleCards();
        this.updateScore();
        this.updateAttempts();
    }

    shuffleCards() {
        const cardsContainer = document.getElementById('cards-container');
        const cards = Array.from(cardsContainer.children);
        
        // Fisher-Yates shuffle algorithm
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            cardsContainer.appendChild(cards[j]);
        }
    }

    setupEventListeners() {
        // Drag and drop for cards
        this.setupDragAndDrop();
        
        // Button event listeners
        document.getElementById('check-btn').addEventListener('click', () => this.checkSequence());
        document.getElementById('reset-btn').addEventListener('click', () => this.resetGame());
        document.getElementById('hint-btn').addEventListener('click', () => this.showHint());
        document.getElementById('play-again-btn').addEventListener('click', () => this.resetGame());
    }

    setupLanguageSelector() {
        const languageSelect = document.getElementById('language-select');
        languageSelect.addEventListener('change', (e) => {
            this.currentLanguage = e.target.value;
            this.updateLanguage();
        });
        
        // Load saved language preference
        const savedLanguage = localStorage.getItem('daily-routines-language');
        if (savedLanguage && translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
            languageSelect.value = savedLanguage;
        }
        
        this.updateLanguage();
    }

    updateLanguage() {
        // Save language preference
        localStorage.setItem('daily-routines-language', this.currentLanguage);
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            let translation = translations[this.currentLanguage][key];
            
            if (key === 'activity-slot') {
                // Handle ordinal numbers for activity slots
                const position = element.getAttribute('data-position');
                const ordinalKey = `ordinal-${position}`;
                const ordinal = translations[this.currentLanguage][ordinalKey] || `${position}.`;
                translation = translation.replace('{position}', ordinal);
            }
            
            if (translation) {
                element.textContent = translation;
            }
        });
        
        // Update drop areas that might be empty
        this.updateDropAreas();
    }

    updateDropAreas() {
        document.querySelectorAll('.drop-area').forEach((area, index) => {
            if (!this.placedCards.has((index + 1).toString())) {
                const position = index + 1;
                const ordinalKey = `ordinal-${position}`;
                const ordinal = translations[this.currentLanguage][ordinalKey] || `${position}.`;
                const translation = translations[this.currentLanguage]['activity-slot'];
                area.textContent = translation.replace('{position}', ordinal);
            }
        });
    }

    translate(key, params = {}) {
        let translation = translations[this.currentLanguage][key] || key;
        
        // Replace parameters in translation
        Object.keys(params).forEach(param => {
            translation = translation.replace(`{${param}}`, params[param]);
        });
        
        return translation;
    }

    setupDragAndDrop() {
        // Setup drag events for cards
        const cards = document.querySelectorAll('.routine-card');
        cards.forEach(card => {
            card.addEventListener('dragstart', (e) => this.handleDragStart(e));
            card.addEventListener('dragend', (e) => this.handleDragEnd(e));
        });

        // Setup drop events for drop areas
        const dropAreas = document.querySelectorAll('.drop-area');
        dropAreas.forEach(area => {
            area.addEventListener('dragover', (e) => this.handleDragOver(e));
            area.addEventListener('dragenter', (e) => this.handleDragEnter(e));
            area.addEventListener('dragleave', (e) => this.handleDragLeave(e));
            area.addEventListener('drop', (e) => this.handleDrop(e));
        });

        // Also allow dropping back to cards container
        const cardsContainer = document.getElementById('cards-container');
        cardsContainer.addEventListener('dragover', (e) => this.handleDragOver(e));
        cardsContainer.addEventListener('drop', (e) => this.handleDropToContainer(e));
    }

    handleDragStart(e) {
        const card = e.target.closest('.routine-card');
        if (!card) return;

        card.classList.add('dragging');
        e.dataTransfer.setData('text/plain', card.dataset.id);
        e.dataTransfer.effectAllowed = 'move';

        // Add drag feedback
        setTimeout(() => {
            card.style.opacity = '0.5';
        }, 0);
    }

    handleDragEnd(e) {
        const card = e.target.closest('.routine-card');
        if (!card) return;

        card.classList.remove('dragging');
        card.style.opacity = '';
        
        // Remove drag over states
        document.querySelectorAll('.drop-area').forEach(area => {
            area.classList.remove('drag-over');
        });
    }

    handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    handleDragEnter(e) {
        e.preventDefault();
        const dropArea = e.target.closest('.drop-area');
        if (dropArea) {
            dropArea.classList.add('drag-over');
        }
    }

    handleDragLeave(e) {
        const dropArea = e.target.closest('.drop-area');
        if (dropArea && !dropArea.contains(e.relatedTarget)) {
            dropArea.classList.remove('drag-over');
        }
    }

    handleDrop(e) {
        e.preventDefault();
        const dropArea = e.target.closest('.drop-area');
        if (!dropArea) return;

        const cardId = e.dataTransfer.getData('text/plain');
        const card = document.querySelector(`[data-id="${cardId}"]`);
        
        if (!card) return;

        dropArea.classList.remove('drag-over');
        
        // Check if there's already a card in this position
        const position = dropArea.dataset.position;
        const existingCard = this.placedCards.get(position);
        
        if (existingCard) {
            // Move existing card back to container
            this.returnCardToContainer(existingCard);
        }

        // Remove card from any previous position
        this.removeCardFromPlaced(cardId);
        
        // Place the card
        this.placeCardInSequence(card, dropArea, position);
    }

    handleDropToContainer(e) {
        e.preventDefault();
        const cardId = e.dataTransfer.getData('text/plain');
        const card = document.querySelector(`[data-id="${cardId}"]`);
        
        if (!card) return;

        this.returnCardToContainer(card);
    }

    placeCardInSequence(card, dropArea, position) {
        // Remove from cards container
        if (card.parentNode.id === 'cards-container') {
            card.remove();
        }

        // Create a copy of the card for the sequence
        const sequenceCard = card.cloneNode(true);
        sequenceCard.classList.add('in-sequence');
        sequenceCard.draggable = true;
        
        // Setup drag events for the sequence card
        sequenceCard.addEventListener('dragstart', (e) => this.handleDragStart(e));
        sequenceCard.addEventListener('dragend', (e) => this.handleDragEnd(e));

        // Clear drop area and add the card
        dropArea.innerHTML = '';
        dropArea.appendChild(sequenceCard);
        dropArea.classList.add('filled');

        // Update placed cards map
        this.placedCards.set(position, {
            cardId: card.dataset.id,
            element: sequenceCard,
            dropArea: dropArea
        });

        // Add animation
        sequenceCard.classList.add('bounce');
        setTimeout(() => sequenceCard.classList.remove('bounce'), 600);

        this.playSound('place');
    }

    returnCardToContainer(cardOrId) {
        let cardId, cardData;
        
        if (typeof cardOrId === 'string') {
            cardId = cardOrId;
            // Find card in placed cards
            for (let [position, data] of this.placedCards.entries()) {
                if (data.cardId === cardId) {
                    cardData = data;
                    this.placedCards.delete(position);
                    break;
                }
            }
        } else {
            const card = cardOrId;
            cardId = card.dataset.id;
            // Remove from placed cards if exists
            this.removeCardFromPlaced(cardId);
        }

        // Create original card and add to container
        const cardsContainer = document.getElementById('cards-container');
        const originalCard = this.createOriginalCard(cardId);
        cardsContainer.appendChild(originalCard);

        // Clean up drop area if card data exists
        if (cardData) {
            const position = cardData.dropArea.dataset.position;
            const ordinalKey = `ordinal-${position}`;
            const ordinal = translations[this.currentLanguage][ordinalKey] || `${position}.`;
            const translation = translations[this.currentLanguage]['activity-slot'];
            cardData.dropArea.textContent = translation.replace('{position}', ordinal);
            cardData.dropArea.classList.remove('filled');
        }

        this.playSound('return');
    }

    removeCardFromPlaced(cardId) {
        for (let [position, data] of this.placedCards.entries()) {
            if (data.cardId === cardId) {
                const ordinalKey = `ordinal-${position}`;
                const ordinal = translations[this.currentLanguage][ordinalKey] || `${position}.`;
                const translation = translations[this.currentLanguage]['activity-slot'];
                data.dropArea.textContent = translation.replace('{position}', ordinal);
                data.dropArea.classList.remove('filled');
                this.placedCards.delete(position);
                break;
            }
        }
    }

    createOriginalCard(cardId) {
        const cardData = this.getCardData(cardId);
        const card = document.createElement('div');
        card.className = 'routine-card';
        card.draggable = true;
        card.dataset.id = cardId;
        card.dataset.correctOrder = cardData.order;
        
        const cardText = translations[this.currentLanguage][cardId] || cardData.text;
        
        card.innerHTML = `
            <div class="card-icon">${cardData.icon}</div>
            <div class="card-text">${cardText}</div>
        `;

        // Setup drag events
        card.addEventListener('dragstart', (e) => this.handleDragStart(e));
        card.addEventListener('dragend', (e) => this.handleDragEnd(e));

        return card;
    }

    getCardData(cardId) {
        const cardDataMap = {
            'wake-up': { icon: '🛏️', text: 'Wake Up', order: '1' },
            'brush-teeth': { icon: '🦷', text: 'Brush Teeth', order: '2' },
            'breakfast': { icon: '🥞', text: 'Have Breakfast', order: '3' },
            'get-dressed': { icon: '👕', text: 'Get Dressed', order: '4' },
            'go-school': { icon: '🎒', text: 'Go to School', order: '5' },
            'come-home': { icon: '🏠', text: 'Come Home', order: '6' },
            'dinner': { icon: '🍽️', text: 'Have Dinner', order: '7' },
            'sleep': { icon: '🌙', text: 'Go to Sleep', order: '8' }
        };
        return cardDataMap[cardId];
    }

    checkSequence() {
        this.attempts++;
        this.updateAttempts();

        const currentSequence = [];
        const dropAreas = document.querySelectorAll('.drop-area');
        
        // Get current sequence
        dropAreas.forEach((area, index) => {
            const placedCard = this.placedCards.get((index + 1).toString());
            if (placedCard) {
                currentSequence[index] = placedCard.cardId;
            } else {
                currentSequence[index] = null;
            }
        });

        // Check if sequence is complete
        if (currentSequence.includes(null)) {
            this.showFeedback(this.translate('fill-all-positions'), 'error');
            this.playSound('error');
            return;
        }

        // Check if sequence is correct
        let correctCount = 0;
        let incorrectPositions = [];

        for (let i = 0; i < this.correctSequence.length; i++) {
            if (currentSequence[i] === this.correctSequence[i]) {
                correctCount++;
                // Mark correct position
                const position = (i + 1).toString();
                const cardData = this.placedCards.get(position);
                if (cardData) {
                    cardData.element.style.border = '3px solid #00b894';
                }
            } else {
                incorrectPositions.push(i + 1);
                // Mark incorrect position
                const position = (i + 1).toString();
                const cardData = this.placedCards.get(position);
                if (cardData) {
                    cardData.element.style.border = '3px solid #d63031';
                }
            }
        }

        if (correctCount === this.correctSequence.length) {
            // Success!
            this.handleSuccess();
        } else {
            // Partial success
            this.showFeedback(
                this.translate('correct-partial', {
                    correct: correctCount,
                    total: this.correctSequence.length,
                    wrong: incorrectPositions.join(', ')
                }),
                'error'
            );
            this.playSound('error');
            
            // Remove border highlights after 2 seconds
            setTimeout(() => {
                this.clearBorders();
            }, 2000);
        }
    }

    handleSuccess() {
        // Calculate score
        const baseScore = 1000;
        const attemptPenalty = (this.attempts - 1) * 100;
        const hintPenalty = this.hintsUsed * 50;
        this.score = Math.max(100, baseScore - attemptPenalty - hintPenalty);
        
        this.updateScore();
        this.showFeedback(this.translate('perfect-sequence'), 'success');
        this.playSound('success');
        
        // Show success modal after a delay
        setTimeout(() => {
            this.showSuccessModal();
        }, 1500);
    }

    showSuccessModal() {
        const modal = document.getElementById('success-modal');
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('final-attempts').textContent = this.attempts;
        modal.style.display = 'block';
    }

    showHint() {
        if (this.hintsUsed >= this.maxHints) {
            this.showFeedback(this.translate('all-hints-used'), 'error');
            return;
        }

        this.hintsUsed++;
        
        // Find first incorrect or empty position
        for (let i = 0; i < this.correctSequence.length; i++) {
            const position = (i + 1).toString();
            const placedCard = this.placedCards.get(position);
            
            if (!placedCard || placedCard.cardId !== this.correctSequence[i]) {
                const correctCardId = this.correctSequence[i];
                const cardText = translations[this.currentLanguage][correctCardId];
                const timeSlots = ['06:30', '07:00', '07:30', '08:00', '08:30', '15:30', '19:00', '21:00'];
                
                this.showFeedback(
                    this.translate('hint-message', {
                        time: timeSlots[i],
                        activity: cardText
                    }),
                    'hint'
                );
                this.playSound('hint');
                
                // Highlight the correct card if it's in container
                const correctCard = document.querySelector(`[data-id="${correctCardId}"]`);
                if (correctCard && correctCard.parentNode.id === 'cards-container') {
                    correctCard.style.border = '3px solid #fdcb6e';
                    setTimeout(() => {
                        correctCard.style.border = '';
                    }, 3000);
                }
                
                return;
            }
        }
    }

    clearBorders() {
        document.querySelectorAll('.routine-card.in-sequence').forEach(card => {
            card.style.border = '';
        });
    }

    resetGame() {
        // Clear all placed cards
        this.placedCards.clear();
        
        // Reset drop areas
        document.querySelectorAll('.drop-area').forEach((area, index) => {
            const position = index + 1;
            const ordinalKey = `ordinal-${position}`;
            const ordinal = translations[this.currentLanguage][ordinalKey] || `${position}.`;
            const translation = translations[this.currentLanguage]['activity-slot'];
            area.textContent = translation.replace('{position}', ordinal);
            area.classList.remove('filled');
        });

        // Reset cards container
        const cardsContainer = document.getElementById('cards-container');
        cardsContainer.innerHTML = '';
        
        // Recreate all cards
        this.correctSequence.forEach(cardId => {
            const card = this.createOriginalCard(cardId);
            cardsContainer.appendChild(card);
        });

        // Reset game state
        this.score = 0;
        this.attempts = 0;
        this.hintsUsed = 0;
        
        this.updateScore();
        this.updateAttempts();
        this.shuffleCards();
        this.showFeedback(this.translate('game-reset'), 'success');
        
        // Hide modal
        document.getElementById('success-modal').style.display = 'none';
        
        this.playSound('reset');
    }

    showFeedback(message, type) {
        const feedback = document.getElementById('feedback');
        feedback.textContent = message;
        feedback.className = `feedback ${type}`;
        
        // Auto hide after 3 seconds
        setTimeout(() => {
            feedback.textContent = '';
            feedback.className = 'feedback';
        }, 3000);
    }

    updateScore() {
        document.getElementById('score').textContent = this.score;
    }

    updateAttempts() {
        document.getElementById('attempts').textContent = this.attempts;
    }

    playSound(type) {
        // Create audio feedback using Web Audio API or simple beep
        // This is a simple implementation - you can replace with actual sound files
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            let frequency;
            switch (type) {
                case 'place':
                    frequency = 400;
                    break;
                case 'success':
                    frequency = 600;
                    break;
                case 'error':
                    frequency = 200;
                    break;
                case 'hint':
                    frequency = 500;
                    break;
                case 'return':
                    frequency = 300;
                    break;
                case 'reset':
                    frequency = 350;
                    break;
                default:
                    frequency = 400;
            }
            
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        } catch (error) {
            // Fallback for browsers that don't support Web Audio API
            console.log(`Sound: ${type}`);
        }
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    const game = new DailyRoutinesPuzzle();
    
    // Add keyboard support
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'Enter':
                e.preventDefault();
                game.checkSequence();
                break;
            case 'r':
            case 'R':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    game.resetGame();
                }
                break;
            case 'h':
            case 'H':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    game.showHint();
                }
                break;
        }
    });

    // Add touch support for mobile devices
    if ('ontouchstart' in window) {
        document.querySelectorAll('.routine-card').forEach(card => {
            let touchStartTime = 0;
            
            card.addEventListener('touchstart', (e) => {
                touchStartTime = Date.now();
                card.style.transform = 'scale(0.95)';
            });
            
            card.addEventListener('touchend', (e) => {
                card.style.transform = '';
                const touchDuration = Date.now() - touchStartTime;
                
                // If touch was brief, try to auto-place the card
                if (touchDuration < 300) {
                    game.autoPlaceCard(card);
                }
            });
        });
    }
});

// Add auto-place functionality for touch devices
DailyRoutinesPuzzle.prototype.autoPlaceCard = function(card) {
    const cardId = card.dataset.id;
    const correctPosition = this.correctSequence.indexOf(cardId) + 1;
    const dropArea = document.querySelector(`[data-position="${correctPosition}"]`);
    
    if (dropArea && !this.placedCards.has(correctPosition.toString())) {
        // Check if card is already placed somewhere
        this.removeCardFromPlaced(cardId);
        
        // Place in correct position
        this.placeCardInSequence(card, dropArea, correctPosition.toString());
        
        // Show hint about auto-placement
        this.showFeedback(`Otomatik yerleştirme: ${correctPosition}. pozisyon`, 'hint');
    }
};
