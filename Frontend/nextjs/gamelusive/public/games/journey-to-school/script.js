// Journey to School Game - Educational Board Game (Monopoly Style)
class JourneyToSchoolGame {
    constructor() {
        this.boardSize = 20;
        this.playerPosition = 1;
        this.playerScore = 0;
        this.playerMoney = 100; // Starting money like Monopoly
        this.gameBoard = [];
        this.baseTileMeta = this.getBaseTileMeta();
        this.tileEvents = this.initializeTileEvents();
        this.currentDialog = null;
        
        this.initializeGame();
        this.setupEventListeners();
    }

    getBaseTileMeta() {
        return {
            1: { type: 'start', effect: { money: 0, stars: 0 } },
            2: { type: 'situation', options: [
                { correct: false, effect: { money: -10, stars: 0 } },
                { correct: true,  effect: { money: 10,  stars: 1 } },
                { correct: false, effect: { money: -5,  stars: 0 } }
            ]},
            3: { type: 'reward', effect: { money: 15, stars: 1 } },
            4: { type: 'situation', options: [
                { correct: true,  effect: { money: 20, stars: 2 } },
                { correct: false, effect: { money: -15, stars: 0 } },
                { correct: false, effect: { money: -10, stars: 0 } }
            ]},
            5: { type: 'punishment', effect: { money: -10, stars: 0 } },
            6: { type: 'situation', options: [
                { correct: false, effect: { money: -20, stars: -1 } },
                { correct: true,  effect: { money: 25,  stars: 2 } },
                { correct: false, effect: { money: 5,   stars: 0 } }
            ]},
            7: { type: 'reward', effect: { money: 10, stars: 1 } },
            8: { type: 'situation', options: [
                { correct: false, effect: { money: -30, stars: -2 } },
                { correct: true,  effect: { money: 20,  stars: 2 } },
                { correct: false, effect: { money: 0,   stars: 0 } }
            ]},
            9: { type: 'punishment', effect: { money: -15, stars: -1 } },
            10: { type: 'situation', options: [
                { correct: false, effect: { money: -10, stars: -1 } },
                { correct: true,  effect: { money: 30,  stars: 3 } },
                { correct: false, effect: { money: -5,  stars: 1 } }
            ]},
            11: { type: 'reward', effect: { money: 15, stars: 1 } },
            12: { type: 'situation', options: [
                { correct: false, effect: { money: -10, stars: -1 } },
                { correct: true,  effect: { money: 20,  stars: 2 } },
                { correct: false, effect: { money: -5,  stars: 0 } }
            ]},
            13: { type: 'punishment', effect: { money: -10, stars: 0 } },
            14: { type: 'situation', options: [
                { correct: false, effect: { money: -5,  stars: 0 } },
                { correct: true,  effect: { money: 25,  stars: 3 } },
                { correct: false, effect: { money: -20, stars: -2 } }
            ]},
            15: { type: 'reward', effect: { money: 20, stars: 2 } },
            16: { type: 'situation', options: [
                { correct: false, effect: { money: -15, stars: -1 } },
                { correct: true,  effect: { money: 15,  stars: 2 } },
                { correct: false, effect: { money: -5,  stars: 0 } }
            ]},
            17: { type: 'punishment', effect: { money: -10, stars: 0 } },
            18: { type: 'situation', options: [
                { correct: false, effect: { money: -25, stars: -2 } },
                { correct: true,  effect: { money: 20,  stars: 2 } },
                { correct: false, effect: { money: -10, stars: -1 } }
            ]},
            19: { type: 'reward', effect: { money: 10, stars: 1 } },
            20: { type: 'finish', effect: { money: 50, stars: 5 } }
        };
    }

    initializeTileEvents() {
        const localized = typeof jtTiles === 'function' ? jtTiles() : {};
        const events = {};
        for (let i = 1; i <= this.boardSize; i++) {
            const meta = this.baseTileMeta[i] || {};
            const loc = localized[i] || {};
            const entry = {
                type: meta.type || 'situation',
                title: loc.title || '',
                description: loc.description || '',
                icon: loc.icon || '�'
            };
            if (meta.type === 'situation' && Array.isArray(meta.options)) {
                const locOptions = Array.isArray(loc.options) ? loc.options : [];
                entry.options = meta.options.map((opt, idx) => ({
                    text: locOptions[idx] || '',
                    correct: opt.correct,
                    effect: { ...opt.effect }
                }));
            } else if (meta.effect) {
                entry.effect = { ...meta.effect };
            }
            events[i] = entry;
        }
        return events;
    }

    initializeGame() {
        this.createGameBoard();
        this.updateDisplay();
    }

    createGameBoard() {
        const board = document.getElementById('game-board');
        board.innerHTML = '';
        
        for (let i = 1; i <= this.boardSize; i++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${i}`;
            
            const tileEvent = this.tileEvents[i];
            
            const tileNumber = document.createElement('div');
            tileNumber.className = 'tile-number';
            tileNumber.textContent = i;
            
            const tileIcon = document.createElement('div');
            tileIcon.className = 'tile-icon';
            tileIcon.textContent = tileEvent.icon;
            
            const tileTitle = document.createElement('div');
            tileTitle.className = 'tile-title';
            tileTitle.textContent = tileEvent.title;
            
            // Add type-specific styling
            if (tileEvent.type === 'start') {
                tile.classList.add('start');
            } else if (tileEvent.type === 'finish') {
                tile.classList.add('finish');
            } else if (tileEvent.type === 'reward') {
                tile.classList.add('reward');
            } else if (tileEvent.type === 'punishment') {
                tile.classList.add('punishment');
            } else if (tileEvent.type === 'situation') {
                tile.classList.add('situation');
            }
            
            tile.appendChild(tileNumber);
            tile.appendChild(tileIcon);
            tile.appendChild(tileTitle);
            
            // Add click event for tile preview
            tile.addEventListener('click', () => {
                if (i !== this.playerPosition) {
                    this.previewTile(i);
                }
            });
            
            board.appendChild(tile);
            this.gameBoard.push(tile);
        }
        
        this.updatePlayerPosition();
    }

    setupEventListeners() {
        const rollBtn = document.getElementById('roll-dice');
        const continueBtn = document.getElementById('continue-btn');
        
        rollBtn.addEventListener('click', () => this.rollDice());
        continueBtn.addEventListener('click', () => this.hideMessage());
    }

    rollDice() {
    const rollBtn = document.getElementById('roll-dice');
    const dice = document.getElementById('dice');
    const diceResult = document.getElementById('dice-result');
        
        rollBtn.disabled = true;
        
        // Animate dice roll
        let rollCount = 0;
        const rollAnimation = setInterval(() => {
            dice.textContent = Math.floor(Math.random() * 6) + 1;
            rollCount++;
            
            if (rollCount > 10) {
                clearInterval(rollAnimation);
                const finalRoll = Math.floor(Math.random() * 6) + 1;
                dice.textContent = finalRoll;
                try {
                    const formatter = typeof jtGet === 'function' ? jtGet('youRolled') : null;
                    diceResult.textContent = typeof formatter === 'function' ? formatter(finalRoll) : `You rolled: ${finalRoll}`;
                } catch {
                    diceResult.textContent = `You rolled: ${finalRoll}`;
                }
                
                setTimeout(() => {
                    this.movePlayer(finalRoll);
                    rollBtn.disabled = false;
                }, 1000);
            }
        }, 100);
    }

    movePlayer(steps) {
        const newPosition = Math.min(this.playerPosition + steps, this.boardSize);
        
        // Animate movement
        let currentStep = 0;
        const moveAnimation = setInterval(() => {
            if (currentStep < steps && this.playerPosition < this.boardSize) {
                this.playerPosition++;
                this.updatePlayerPosition();
                currentStep++;
            } else {
                clearInterval(moveAnimation);
                this.handleTileEvent(this.playerPosition);
            }
        }, 500);
    }

    updatePlayerPosition() {
        // Remove player class from all tiles
        this.gameBoard.forEach(tile => tile.classList.remove('player'));
        
        // Add player class to current position
        if (this.playerPosition <= this.boardSize) {
            this.gameBoard[this.playerPosition - 1].classList.add('player');
        }
        
        document.getElementById('player-position').textContent = this.playerPosition;
    }

    handleTileEvent(position) {
        const tileEvent = this.tileEvents[position];
        
        if (tileEvent.type === 'finish') {
            this.showWinDialog();
        } else if (tileEvent.type === 'situation') {
            this.showSituationDialog(tileEvent);
        } else if (tileEvent.type === 'reward' || tileEvent.type === 'punishment') {
            this.showEventDialog(tileEvent);
        }
    }

    showSituationDialog(tileEvent) {
        const modal = document.getElementById('scenario-modal');
        const title = document.getElementById('scenario-title');
        const text = document.getElementById('scenario-text');
        const options = document.getElementById('scenario-options');
        
    title.textContent = tileEvent.title;
        text.textContent = tileEvent.description;
        options.innerHTML = '';
        
        tileEvent.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = `${String.fromCharCode(65 + index)}. ${option.text}`;
            btn.addEventListener('click', () => this.handleAnswer(option, tileEvent));
            options.appendChild(btn);
        });
        
        modal.style.display = 'block';
    }

    handleAnswer(selectedOption, tileEvent) {
        const modal = document.getElementById('scenario-modal');
        const options = document.querySelectorAll('.option-btn');
        
        options.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent.includes(selectedOption.text)) {
                btn.classList.add(selectedOption.correct ? 'correct' : 'incorrect');
            }
        });
        
        // Apply effects
        this.playerScore += selectedOption.effect.stars;
        this.playerMoney += selectedOption.effect.money;
        this.updateDisplay();
        
        // Create dialog message
        let dialogText = '';
        if (selectedOption.correct) {
            const fmt = typeof jtGet === 'function' ? jtGet('correctMsg') : null;
            dialogText = typeof fmt === 'function' ? fmt(selectedOption.effect.stars, selectedOption.effect.money) : `🎉 Great choice! You earned ${selectedOption.effect.stars} stars and $${selectedOption.effect.money}!`;
        } else {
            const fmt = typeof jtGet === 'function' ? jtGet('wrongMsg') : null;
            dialogText = typeof fmt === 'function' ? fmt(selectedOption.effect.stars, selectedOption.effect.money) : `😔 Not the best choice. You lost $${Math.abs(selectedOption.effect.money)} and ${Math.abs(selectedOption.effect.stars)} stars.`;
        }
        
        setTimeout(() => {
            modal.style.display = 'none';
            this.showDialog(
                selectedOption.correct ? (typeof jtGet === 'function' ? jtGet('correctTitle') : '✅ Correct!') : (typeof jtGet === 'function' ? jtGet('tryAgainTitle') : '❌ Try Again Next Time'),
                dialogText,
                this.getEducationalTip(tileEvent)
            );
        }, 2000);
    }

    showEventDialog(tileEvent) {
        // Apply effects immediately
        this.playerScore += tileEvent.effect.stars;
        this.playerMoney += tileEvent.effect.money;
        this.updateDisplay();
        
        let message = '';
        if (tileEvent.type === 'reward') {
            const fmt = typeof jtGet === 'function' ? jtGet('rewardMsg') : null;
            message = typeof fmt === 'function' ? fmt(tileEvent.description, tileEvent.effect.stars, tileEvent.effect.money) : `🎁 ${tileEvent.description}\n\nYou gained ${tileEvent.effect.stars} stars and $${tileEvent.effect.money}!`;
        } else {
            const fmt = typeof jtGet === 'function' ? jtGet('punishMsg') : null;
            message = typeof fmt === 'function' ? fmt(tileEvent.description, tileEvent.effect.stars, tileEvent.effect.money) : `⚠️ ${tileEvent.description}\n\nYou lost $${Math.abs(tileEvent.effect.money)} ${tileEvent.effect.stars < 0 ? `and ${Math.abs(tileEvent.effect.stars)} stars` : ''}!`;
        }
        
        this.showDialog(tileEvent.title, message);
    }

    previewTile(position) {
        const tileEvent = this.tileEvents[position];
        const prefix = typeof jtGet === 'function' ? jtGet('previewPrefix') : 'Preview:';
        const closeTxt = typeof jtGet === 'function' ? jtGet('previewClose') : 'Click to close preview';
        this.showDialog(
            `${prefix} ${tileEvent.title}`,
            tileEvent.description,
            closeTxt
        );
    }

    getEducationalTip(tileEvent) {
        try {
            const tipsPack = typeof jtTips === 'function' ? jtTips() : {};
            return tipsPack[tileEvent.title] || tipsPack.fallback || 'Every choice you make helps you learn and grow!';
        } catch {
            return 'Every choice you make helps you learn and grow!';
        }
    }

    showDialog(title, text, tip = '') {
        const messageEl = document.getElementById('game-message');
        const messageText = document.getElementById('message-text');
        
        let content = `<div class="dialog-content">
            <div class="dialog-avatar">👦</div>
            <div class="dialog-bubble">
                <h3>${title}</h3>
                <p>${text}</p>
                ${tip ? `<div class="dialog-tip">💡 <em>${tip}</em></div>` : ''}
            </div>
        </div>`;
        
        messageText.innerHTML = content;
        messageEl.style.display = 'block';
    }

    hideMessage() {
        document.getElementById('game-message').style.display = 'none';
    }

    showWinDialog() {
        const starsEarned = this.playerScore;
        const moneyEarned = this.playerMoney;
        let message = '';
        let grade = '';
        
        if (starsEarned >= 15 && moneyEarned >= 150) {
            grade = 'A+';
        } else if (starsEarned >= 10 && moneyEarned >= 100) {
            grade = 'A';
        } else if (starsEarned >= 5 && moneyEarned >= 50) {
            grade = 'B';
        } else {
            grade = 'C';
        }
        try {
            const gm = typeof jtGet === 'function' ? jtGet('gradeMessages') : null;
            if (gm && typeof gm === 'object') {
                const key = grade === 'A+' ? 'Aplus' : grade;
                message = typeof gm[key] === 'function' ? gm[key](starsEarned, moneyEarned) : message;
            } else {
                message = `🌟 Great job! You earned ${starsEarned} stars and have $${moneyEarned}!`;
            }
        } catch {
            message = `� Great job! You earned ${starsEarned} stars and have $${moneyEarned}!`;
        }
        
        const title = (() => {
            try {
                const t = typeof jtGet === 'function' ? jtGet('winTitles') : null;
                return typeof t === 'function' ? t(grade) : `🏫 Welcome to School! Grade: ${grade}`;
            } catch { return `🏫 Welcome to School! Grade: ${grade}`; }
        })();
        const tip = (() => {
            try { return typeof jtGet === 'function' ? jtGet('winTips') : 'Great job completing your journey! Want to try again and get a better score?'; }
            catch { return 'Great job completing your journey! Want to try again and get a better score?'; }
        })();

        this.showDialog(
            title,
            message,
            tip
        );
        
        // Add confetti effect
        this.createConfetti();
    }

    createConfetti() {
        const confettiColors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                confetti.style.zIndex = '9999';
                confetti.style.pointerEvents = 'none';
                confetti.style.borderRadius = '50%';
                
                document.body.appendChild(confetti);
                
                // Animate falling
                let position = -10;
                const fallInterval = setInterval(() => {
                    position += 5;
                    confetti.style.top = position + 'px';
                    
                    if (position > window.innerHeight) {
                        clearInterval(fallInterval);
                        document.body.removeChild(confetti);
                    }
                }, 50);
            }, i * 100);
        }
    }

    updateDisplay() {
        document.getElementById('player-score').textContent = this.playerScore;
        document.getElementById('player-position').textContent = this.playerPosition;
        document.getElementById('player-money').textContent = this.playerMoney;
    }

    resetGame() {
        this.playerPosition = 1;
        this.playerScore = 0;
        this.playerMoney = 100;
        this.updateDisplay();
        this.updatePlayerPosition();
        this.hideMessage();
        document.getElementById('scenario-modal').style.display = 'none';
        document.getElementById('dice-result').textContent = '';
        document.getElementById('dice').textContent = '🎲';
    }

    refreshForLanguage() {
        this.tileEvents = this.initializeTileEvents();
        this.createGameBoard();
        this.updateDisplay();
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    const game = new JourneyToSchoolGame();
    
    // Add reset button functionality
    const resetBtn = document.createElement('button');
    try {
        resetBtn.textContent = typeof jtGet === 'function' ? jtGet('newGame') : '🔄 New Game';
    } catch { resetBtn.textContent = '🔄 New Game'; }
    resetBtn.className = 'roll-btn';
    resetBtn.style.marginLeft = '10px';
    resetBtn.addEventListener('click', () => game.resetGame());
    
    const diceContainer = document.querySelector('.dice-container');
    diceContainer.appendChild(resetBtn);

    // Expose refresh function for translations module
    window.jtRefreshTiles = () => game.refreshForLanguage();
});

// Add keyboard support
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        const rollBtn = document.getElementById('roll-dice');
        if (!rollBtn.disabled) {
            rollBtn.click();
        }
    }
});
