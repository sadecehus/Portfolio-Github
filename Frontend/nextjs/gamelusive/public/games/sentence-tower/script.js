// Game State
let gameState = {
    currentLevel: 1,
    score: 0,
    lives: 3,
    maxLevel: 10,
    currentSentence: [],
    availableWords: [],
    usedWords: new Set(),
    hintUsed: false,
    requiredWords: { min: 2, max: 3 }
};

// Game Data - Progressive difficulty levels with random words
const gameLevels = [
    // Level 1: Simple words for basic sentences
    {
        level: 1,
        instruction: "Use 2-3 words to make a simple sentence!",
        minWords: 2,
        maxWords: 3,
        wordPool: ["cat", "dog", "bird", "runs", "flies", "sleeps", "big", "small", "red", "blue"]
    },
    // Level 2: More words for longer sentences
    {
        level: 2,
        instruction: "Make a sentence with 3-4 words!",
        minWords: 3,
        maxWords: 4,
        wordPool: ["children", "play", "school", "happy", "books", "read", "games", "outside", "together", "fun"]
    },
    // Level 3: Adding descriptive words
    {
        level: 3,
        instruction: "Create a descriptive sentence with 4-5 words!",
        minWords: 4,
        maxWords: 5,
        wordPool: ["beautiful", "birds", "sing", "sweetly", "morning", "flowers", "bloom", "garden", "bright", "sunshine", "every", "day"]
    },
    // Level 4: More complex vocabulary
    {
        level: 4,
        instruction: "Build a complete sentence with 4-6 words!",
        minWords: 4,
        maxWords: 6,
        wordPool: ["students", "study", "carefully", "library", "teachers", "explain", "lessons", "clearly", "always", "homework", "finished", "quickly"]
    },
    // Level 5: Time and place words
    {
        level: 5,
        instruction: "Include when or where something happens (5-6 words)!",
        minWords: 5,
        maxWords: 6,
        wordPool: ["yesterday", "children", "played", "park", "tomorrow", "family", "visits", "museum", "afternoon", "friends", "meet", "cafe", "evening"]
    },
    // Level 6: Action and description
    {
        level: 6,
        instruction: "Describe an action with details (5-7 words)!",
        minWords: 5,
        maxWords: 7,
        wordPool: ["athletes", "run", "fast", "track", "musicians", "play", "instruments", "beautifully", "artists", "paint", "colorful", "pictures", "carefully", "stage"]
    },
    // Level 7: Complex sentences
    {
        level: 7,
        instruction: "Create a detailed sentence (6-8 words)!",
        minWords: 6,
        maxWords: 8,
        wordPool: ["during", "winter", "snow", "falls", "gently", "ground", "spring", "flowers", "bloom", "everywhere", "summer", "people", "swim", "ocean", "mountains", "hiking", "trails"]
    },
    // Level 8: Advanced vocabulary
    {
        level: 8,
        instruction: "Build an advanced sentence (6-8 words)!",
        minWords: 6,
        maxWords: 8,
        wordPool: ["scientists", "discover", "amazing", "creatures", "ocean", "doctors", "help", "patients", "recover", "quickly", "engineers", "design", "innovative", "buildings", "cities"]
    },
    // Level 9: Very complex sentences
    {
        level: 9,
        instruction: "Create a sophisticated sentence (7-9 words)!",
        minWords: 7,
        maxWords: 9,
        wordPool: ["throughout", "history", "humans", "invented", "remarkable", "technologies", "ancient", "civilizations", "built", "magnificent", "monuments", "modern", "computers", "process", "information", "instantly"]
    },
    // Level 10: Master level
    {
        level: 10,
        instruction: "Master challenge: Build a complex sentence (8-10 words)!",
        minWords: 8,
        maxWords: 10,
        wordPool: ["environmental", "scientists", "study", "climate", "changes", "carefully", "researchers", "develop", "sustainable", "solutions", "protecting", "natural", "resources", "future", "generations", "benefit", "everyone"]
    }
];

// Common sentence patterns for validation
const sentencePatterns = [
    // Basic patterns
    { pattern: ["noun", "verb"], example: "Birds fly" },
    { pattern: ["adjective", "noun", "verb"], example: "Big dogs run" },
    { pattern: ["noun", "verb", "adverb"], example: "Children play happily" },
    { pattern: ["noun", "verb", "noun"], example: "Students read books" },
    
    // More complex patterns
    { pattern: ["adjective", "noun", "verb", "adverb"], example: "Smart students work carefully" },
    { pattern: ["noun", "verb", "adjective", "noun"], example: "Artists paint beautiful pictures" },
    { pattern: ["adverb", "noun", "verb", "noun"], example: "Yesterday children played games" },
    
    // Advanced patterns
    { pattern: ["preposition", "noun", "noun", "verb", "adverb"], example: "During winter snow falls gently" },
    { pattern: ["adjective", "noun", "verb", "adjective", "noun", "adverb"], example: "Young scientists study complex problems carefully" }
];

// Word types for validation
const wordTypes = {
    // Nouns (subjects and objects)
    nouns: ["cat", "dog", "bird", "children", "students", "teachers", "birds", "flowers", "family", "friends", "athletes", "musicians", "artists", "scientists", "doctors", "engineers", "humans", "researchers", "snow", "ground", "ocean", "mountains", "books", "games", "school", "library", "park", "museum", "cafe", "track", "instruments", "pictures", "stage", "creatures", "patients", "buildings", "cities", "history", "technologies", "civilizations", "monuments", "computers", "information", "changes", "solutions", "resources", "generations"],
    
    // Verbs (actions)
    verbs: ["runs", "flies", "sleeps", "play", "read", "sing", "bloom", "study", "explain", "finished", "played", "visits", "meet", "run", "paint", "falls", "swim", "discover", "help", "recover", "design", "invented", "built", "process", "develop", "protecting", "benefit"],
    
    // Adjectives (descriptive)
    adjectives: ["big", "small", "red", "blue", "happy", "beautiful", "bright", "careful", "fast", "colorful", "amazing", "innovative", "remarkable", "magnificent", "modern", "sustainable", "natural", "environmental", "complex", "young"],
    
    // Adverbs (how)
    adverbs: ["sweetly", "carefully", "clearly", "always", "quickly", "beautifully", "gently", "everywhere", "instantly"],
    
    // Time/Place words
    timePlace: ["yesterday", "tomorrow", "morning", "afternoon", "evening", "during", "winter", "spring", "summer", "outside", "together", "library", "park", "museum", "cafe", "track", "stage", "ground", "ocean", "mountains", "cities", "throughout", "ancient", "modern", "future"],
    
    // Prepositions and connectors
    connectors: ["during", "throughout", "every", "always"]
};

// DOM Elements
const currentLevelEl = document.getElementById('current-level');
const scoreEl = document.getElementById('score');
const livesEl = document.getElementById('lives');
const instructionEl = document.getElementById('instruction-text');
const sentenceSlotsEl = document.getElementById('sentence-slots');
const sentenceInfoEl = document.getElementById('sentence-info');
const wordCardsEl = document.getElementById('word-cards');
const checkBtn = document.getElementById('check-btn');
const hintBtn = document.getElementById('hint-btn');
const resetBtn = document.getElementById('reset-btn');
const nextBtn = document.getElementById('next-btn');
const feedbackEl = document.getElementById('feedback');

// Modal elements
const levelCompleteModal = document.getElementById('level-complete-modal');
const gameOverModal = document.getElementById('game-over-modal');
const levelCompleteMessage = document.getElementById('level-complete-message');
const gameOverMessage = document.getElementById('game-over-message');
const continueBtn = document.getElementById('continue-btn');
const restartBtn = document.getElementById('restart-btn');

// Initialize game
function initGame() {
    updateUI();
    loadLevel();
    setupEventListeners();
}

// Update UI elements
function updateUI() {
    currentLevelEl.textContent = gameState.currentLevel;
    scoreEl.textContent = gameState.score;
    livesEl.textContent = gameState.lives;
}

// Load current level
function loadLevel() {
    if (gameState.currentLevel > gameState.maxLevel) {
        showGameComplete();
        return;
    }

    const levelData = gameLevels[gameState.currentLevel - 1];
    
    // Set word requirements for this level
    gameState.requiredWords.min = levelData.minWords;
    gameState.requiredWords.max = levelData.maxWords;
    
    // Randomly select words from the word pool
    const shuffledWords = shuffleArray([...levelData.wordPool]);
    gameState.availableWords = shuffledWords.slice(0, Math.min(12, shuffledWords.length));
    
    gameState.currentSentence = [];
    gameState.usedWords.clear();
    gameState.hintUsed = false;
    
    // Instruction from levelData is in English; we keep structure but show localized base instruction
    if (typeof stGet === 'function') {
        instructionEl.textContent = stGet('instruction');
    } else {
        instructionEl.textContent = levelData.instruction;
    }
    
    createSentenceSlots();
    createWordCards();
    updateButtons();
    clearFeedback();
}

// Create sentence building slots
function createSentenceSlots() {
    sentenceSlotsEl.innerHTML = '';
    
    // Create flexible slots (more than minimum required)
    const maxSlots = gameState.requiredWords.max + 2;
    for (let i = 0; i < maxSlots; i++) {
        const slot = document.createElement('div');
        slot.className = 'sentence-slot';
        slot.dataset.index = i;
        slot.addEventListener('dragover', handleDragOver);
        slot.addEventListener('drop', handleDrop);
        slot.addEventListener('click', handleSlotClick);
        sentenceSlotsEl.appendChild(slot);
    }
}

// Create word cards
function createWordCards() {
    wordCardsEl.innerHTML = '';
    
    // Shuffle words
    const shuffledWords = shuffleArray([...gameState.availableWords]);
    
    shuffledWords.forEach((word, index) => {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.textContent = (typeof stTranslateWord === 'function') ? stTranslateWord(word) : word;
        card.draggable = true;
        card.dataset.word = word;
        card.dataset.index = index;
        
        // Add word type class for styling
        card.classList.add(getWordType(word));
        
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
        card.addEventListener('click', handleWordClick);
        
        wordCardsEl.appendChild(card);
    });
}

// Get word type for styling
function getWordType(word) {
    const subjects = ['Children', 'Birds', 'Dogs', 'Students', 'Families'];
    const verbs = ['play', 'fly', 'bark', 'read', 'sing', 'build', 'write', 'chase', 'solve', 'work', 'travel', 'study', 'learn', 'played', 'built', 'finished', 'will'];
    const adjectives = ['Happy', 'Big', 'Smart', 'Beautiful', 'new', 'exciting', 'beautiful'];
    const adverbs = ['happily', 'beautifully', 'quietly', 'carefully', 'sweetly', 'completely'];
    const prepositions = ['in', 'at', 'on', 'over', 'under', 'to'];
    
    if (subjects.includes(word)) return 'subject';
    if (verbs.includes(word)) return 'verb';
    if (adjectives.includes(word)) return 'adjective';
    if (adverbs.includes(word)) return 'adverb';
    if (prepositions.includes(word)) return 'preposition';
    return 'object';
}

// Shuffle array utility
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Drag and drop handlers
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.word);
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('highlight');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('highlight');
    
    const word = e.dataTransfer.getData('text/plain');
    const slotIndex = parseInt(e.currentTarget.dataset.index);
    
    placeWordInSlot(word, slotIndex);
}

// Click handlers for mobile/touch support
function handleWordClick(e) {
    const word = e.target.dataset.word;
    const emptySlot = findFirstEmptySlot();
    
    if (emptySlot !== -1) {
        placeWordInSlot(word, emptySlot);
    }
}

function handleSlotClick(e) {
    const slotIndex = parseInt(e.currentTarget.dataset.index);
    const word = gameState.currentSentence[slotIndex];
    
    if (word) {
        removeWordFromSlot(slotIndex);
    }
}

// Find first empty slot
function findFirstEmptySlot() {
    for (let i = 0; i < gameState.currentSentence.length; i++) {
        if (!gameState.currentSentence[i]) {
            return i;
        }
    }
    return -1;
}

// Place word in slot
function placeWordInSlot(word, slotIndex) {
    if (gameState.usedWords.has(word)) {
        const msg = typeof stGet === 'function' ? stGet('wordUsed') : 'This word is already used!';
        showFeedback(msg, 'error');
        return;
    }
    
    // Extend sentence array if needed
    while (gameState.currentSentence.length <= slotIndex) {
        gameState.currentSentence.push(null);
    }
    
    // Remove word from previous slot if it exists
    const prevIndex = gameState.currentSentence.indexOf(word);
    if (prevIndex !== -1) {
        gameState.currentSentence[prevIndex] = null;
        updateSlotDisplay(prevIndex);
    }
    
    // Place word in new slot
    gameState.currentSentence[slotIndex] = word;
    gameState.usedWords.add(word);
    
    updateSlotDisplay(slotIndex);
    updateWordCardDisplay(word);
    updateButtons();
    createParticleEffect(document.querySelector(`[data-index="${slotIndex}"]`));
}

// Remove word from slot
function removeWordFromSlot(slotIndex) {
    const word = gameState.currentSentence[slotIndex];
    if (word) {
        gameState.currentSentence[slotIndex] = null;
        gameState.usedWords.delete(word);
        updateSlotDisplay(slotIndex);
        updateWordCardDisplay(word);
        updateButtons();
    }
}

// Update slot display
function updateSlotDisplay(slotIndex) {
    const slot = document.querySelector(`[data-index="${slotIndex}"]`);
    const word = gameState.currentSentence[slotIndex];
    
    if (word) {
        slot.textContent = (typeof stTranslateWord === 'function') ? stTranslateWord(word) : word;
        slot.classList.add('filled');
    } else {
        slot.textContent = '';
        slot.classList.remove('filled');
    }
}

// Update word card display
function updateWordCardDisplay(word) {
    const card = document.querySelector(`[data-word="${word}"]`);
    if (card) {
        if (gameState.usedWords.has(word)) {
            card.classList.add('used');
        } else {
            card.classList.remove('used');
        }
    }
}

// Update button states
function updateButtons() {
    const userWords = gameState.currentSentence.filter(word => word !== null);
    const hasMinWords = userWords.length >= gameState.requiredWords.min;
    
    checkBtn.disabled = !hasMinWords;
    
    if (hasMinWords) {
        checkBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
        checkBtn.style.animation = 'successPulse 1s infinite';
    } else {
        checkBtn.style.background = '';
        checkBtn.style.animation = '';
    }
}

// Check sentence
function checkSentence() {
    const userWords = gameState.currentSentence.filter(word => word !== null);
    
    // Check minimum word requirement
    if (userWords.length < gameState.requiredWords.min) {
        const fmt = typeof stGet === 'function' ? stGet('needMinWords') : null;
        const msg = typeof fmt === 'function' ? fmt(gameState.requiredWords.min) : `You need at least ${gameState.requiredWords.min} words to make a sentence!`;
        showFeedback(msg, 'error');
        return;
    }
    
    // Check if it's a meaningful sentence
    const isValid = validateSentence(userWords);
    
    if (isValid) {
        handleCorrectAnswer();
    } else {
        handleIncorrectAnswer();
    }
}

// Validate if the sentence makes sense
function validateSentence(words) {
    // Basic validation rules
    const sentence = words.join(' ').toLowerCase();
    
    // Must have at least one noun and one verb
    const hasNoun = words.some(word => 
        wordTypes.nouns.includes(word.toLowerCase())
    );
    
    const hasVerb = words.some(word => 
        wordTypes.verbs.includes(word.toLowerCase())
    );
    
    // Basic grammar check
    if (!hasNoun || !hasVerb) {
        return false;
    }
    
    // Check for basic sentence structure
    // Simple rules: should not start with verb (unless question), 
    // should not have repeated words
    const lowerWords = words.map(w => w.toLowerCase());
    const uniqueWords = new Set(lowerWords);
    
    if (uniqueWords.size !== lowerWords.length) {
        return false; // No repeated words
    }
    
    // Additional advanced checks for higher levels
    if (gameState.currentLevel >= 5) {
        // For higher levels, encourage more complex sentences
        if (words.length < gameState.requiredWords.min + 1) {
            return false;
        }
    }
    
    return true;
}

// Handle correct answer
function handleCorrectAnswer() {
    const baseScore = 100;
    const levelBonus = gameState.currentLevel * 10;
    const hintPenalty = gameState.hintUsed ? 20 : 0;
    const scoreGained = baseScore + levelBonus - hintPenalty;
    
    gameState.score += scoreGained;
    updateUI();
    
    {
        const fmt = typeof stGet === 'function' ? stGet('excellent') : null;
        const msg = typeof fmt === 'function' ? fmt(scoreGained) : `🎉 Excellent! +${scoreGained} points`;
        showFeedback(msg, 'success');
    }
    
    // Show completion effects
    createMultipleParticles();
    
    setTimeout(() => {
        if (gameState.currentLevel < gameState.maxLevel) {
            showLevelComplete(scoreGained);
        } else {
            showGameComplete();
        }
    }, 1500);
}

// Handle incorrect answer
function handleIncorrectAnswer() {
    gameState.lives--;
    updateUI();
    
    if (gameState.lives <= 0) {
        showGameOver();
    } else {
        const userWords = gameState.currentSentence.filter(word => word !== null);
        let errorMessage = '';
        
        if (userWords.length < gameState.requiredWords.min) {
            const fmt = typeof stGet === 'function' ? stGet('tooShort') : null;
            errorMessage = typeof fmt === 'function' ? fmt(gameState.requiredWords.min, gameState.lives) : `❌ Too short! You need at least ${gameState.requiredWords.min} words. Lives left: ${gameState.lives}`;
        } else {
            const fmt = typeof stGet === 'function' ? stGet('notComplete') : null;
            errorMessage = typeof fmt === 'function' ? fmt(gameState.lives) : `❌ This doesn't make a complete sentence. Try again! Lives left: ${gameState.lives}`;
        }
        
        showFeedback(errorMessage, 'error');
    }
}

// Reset level
function resetLevel() {
    gameState.currentSentence = [];
    gameState.usedWords.clear();
    
    // Reset all slots
    document.querySelectorAll('.sentence-slot').forEach(slot => {
        slot.textContent = '';
        slot.classList.remove('filled');
    });
    
    // Reset all word cards
    document.querySelectorAll('.word-card').forEach(card => {
        card.classList.remove('used');
    });
    
    updateButtons();
    clearFeedback();
}

// Show hint
function showHint() {
    if (gameState.hintUsed) {
        const msg = typeof stGet === 'function' ? stGet('hintUsed') : 'Hint already used for this level!';
        showFeedback(msg, 'error');
        return;
    }
    
    gameState.hintUsed = true;
    
    const userWords = gameState.currentSentence.filter(word => word !== null);
    const currentLevel = gameState.currentLevel;
    
    let hintMessage = '';
    
    // Level-specific hints
    switch (currentLevel) {
        case 1:
            if (userWords.length === 0) {
                hintMessage = '💡 Level 1 Hint: Start with an animal or thing (like "cat", "dog", "bird")';
            } else if (userWords.length === 1) {
                hintMessage = '💡 Level 1 Hint: Add what the animal does (like "runs", "flies", "sleeps")';
            } else {
                hintMessage = '💡 Level 1 Hint: Simple sentences need just 2 words: who + what they do';
            }
            break;
            
        case 2:
            if (userWords.length === 0) {
                hintMessage = '💡 Level 2 Hint: Start with people or animals (like "children", "birds")';
            } else if (userWords.length === 1) {
                hintMessage = '💡 Level 2 Hint: Add an action word (like "play", "read", "sing")';
            } else if (userWords.length === 2) {
                hintMessage = '💡 Level 2 Hint: Add what they do it with (like "books", "games")';
            } else {
                hintMessage = '💡 Level 2 Hint: Try: Someone + does + something (3 words total)';
            }
            break;
            
        case 3:
            if (userWords.length < 2) {
                hintMessage = '💡 Level 3 Hint: Start with a describing word like "happy", "big", "beautiful"';
            } else if (userWords.length < 4) {
                hintMessage = '💡 Level 3 Hint: Use describing words! Try: Happy + children + play + games';
            } else {
                hintMessage = '💡 Level 3 Hint: Adjectives make sentences more interesting! Use words like "happy", "smart", "big"';
            }
            break;
            
        case 4:
            if (userWords.length < 3) {
                hintMessage = '💡 Level 4 Hint: Build a basic sentence first: someone + does + something';
            } else {
                hintMessage = '💡 Level 4 Hint: Add HOW they do it! Use words like "carefully", "quickly", "beautifully"';
            }
            break;
            
        case 5:
            if (userWords.length < 3) {
                hintMessage = '💡 Level 5 Hint: Start with WHEN words like "yesterday", "tomorrow", "morning"';
            } else {
                hintMessage = '💡 Level 5 Hint: Tell WHEN something happens! Use time words at the beginning or end';
            }
            break;
            
        case 6:
            if (userWords.length < 3) {
                hintMessage = '💡 Level 6 Hint: Build your basic sentence first, then add WHERE it happens';
            } else {
                hintMessage = '💡 Level 6 Hint: Add WHERE! Use words like "in", "at", "over" + place names';
            }
            break;
            
        case 7:
            if (userWords.length < 4) {
                hintMessage = '💡 Level 7 Hint: This level needs longer sentences! Combine describing words + actions + places';
            } else {
                hintMessage = '💡 Level 7 Hint: Make it detailed! Use adjectives + adverbs + place words together';
            }
            break;
            
        case 8:
            if (userWords.length < 4) {
                hintMessage = '💡 Level 8 Hint: For questions, start with question words like "Where", "When", "Why"';
            } else {
                hintMessage = '💡 Level 8 Hint: Questions need: Question word + do + someone + action + something';
            }
            break;
            
        case 9:
            if (userWords.length < 4) {
                hintMessage = '💡 Level 9 Hint: Past tense! Start with time words like "yesterday", "earlier"';
            } else {
                hintMessage = '💡 Level 9 Hint: Use past tense verbs like "played", "built", "finished"';
            }
            break;
            
        case 10:
            if (userWords.length < 5) {
                hintMessage = '💡 Level 10 Hint: Future sentences need "will" + action word. Start with time like "tomorrow"';
            } else {
                hintMessage = '💡 Level 10 Hint: Master level! Combine time + someone + will + action + details';
            }
            break;
            
        default:
            // Fallback general hints
            if (userWords.length === 0) {
                hintMessage = '💡 Hint: Start with a noun (person, animal, or thing)!';
            } else if (userWords.length === 1) {
                const hasNoun = userWords.some(word => wordTypes.nouns.includes(word.toLowerCase()));
                if (hasNoun) {
                    hintMessage = '💡 Hint: Add a verb (action word) next!';
                } else {
                    hintMessage = '💡 Hint: Try starting with a noun first!';
                }
            } else if (userWords.length < gameState.requiredWords.min) {
                hintMessage = `💡 Hint: Add more words! You need at least ${gameState.requiredWords.min} words.`;
            } else {
                hintMessage = '💡 Hint: Make sure your sentence has both a noun and a verb!';
            }
    }
    
    showFeedback(hintMessage, 'hint');
}

// Show feedback
function showFeedback(message, type) {
    feedbackEl.textContent = message;
    feedbackEl.className = `feedback ${type}`;
    
    setTimeout(() => {
        if (type !== 'success') {
            clearFeedback();
        }
    }, 3000);
}

// Clear feedback
function clearFeedback() {
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback';
}

// Show level complete modal
function showLevelComplete(scoreGained) {
    {
        const fmt = typeof stGet === 'function' ? stGet('levelCompleteMsg') : null;
        levelCompleteMessage.textContent = typeof fmt === 'function' ? fmt(scoreGained, gameState.currentLevel + 1) : `Great job! You earned ${scoreGained} points. Ready for level ${gameState.currentLevel + 1}?`;
    }
    levelCompleteModal.style.display = 'flex';
}

// Show game complete
function showGameComplete() {
    {
        const fmt = typeof stGet === 'function' ? stGet('gameCompleteMsg') : null;
        levelCompleteMessage.textContent = typeof fmt === 'function' ? fmt(gameState.score) : `🎉 Congratulations! You've completed all levels! Final score: ${gameState.score}`;
    }
    levelCompleteModal.style.display = 'flex';
    if (typeof stGet === 'function') continueBtn.textContent = stGet('playAgain');
}

// Show game over
function showGameOver() {
    {
        const fmt = typeof stGet === 'function' ? stGet('gameOverMsg') : null;
        gameOverMessage.textContent = typeof fmt === 'function' ? fmt(gameState.currentLevel, gameState.score) : `Game Over! You reached level ${gameState.currentLevel} with ${gameState.score} points. Try again!`;
    }
    gameOverModal.style.display = 'flex';
}

// Continue to next level
function continueGame() {
    levelCompleteModal.style.display = 'none';
    
    if (gameState.currentLevel >= gameState.maxLevel) {
        restartGame();
    } else {
        gameState.currentLevel++;
        loadLevel();
        updateUI();
    }
}

// Restart game
function restartGame() {
    gameState.currentLevel = 1;
    gameState.score = 0;
    gameState.lives = 3;
    gameState.currentSentence = [];
    gameState.usedWords.clear();
    gameState.hintUsed = false;
    
    levelCompleteModal.style.display = 'none';
    gameOverModal.style.display = 'none';
    
    updateUI();
    loadLevel();
}

// Create particle effect
function createParticleEffect(element) {
    const rect = element.getBoundingClientRect();
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = (rect.left + rect.width / 2) + 'px';
    particle.style.top = (rect.top + rect.height / 2) + 'px';
    particle.style.width = '8px';
    particle.style.height = '8px';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        document.body.removeChild(particle);
    }, 2000);
}

// Create multiple particles for success
function createMultipleParticles() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = (Math.random() * window.innerWidth) + 'px';
            particle.style.top = (window.innerHeight / 2) + 'px';
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.background = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1'][Math.floor(Math.random() * 4)];
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (document.body.contains(particle)) {
                    document.body.removeChild(particle);
                }
            }, 2000);
        }, i * 100);
    }
}

// Setup event listeners
function setupEventListeners() {
    if (checkBtn) {
        checkBtn.addEventListener('click', checkSentence);
    }
    
    if (hintBtn) {
        hintBtn.addEventListener('click', showHint);
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', resetLevel);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', continueGame);
    }
    if (continueBtn) {
        continueBtn.addEventListener('click', continueGame);
    }
    if (restartBtn) {
        restartBtn.addEventListener('click', restartGame);
    }
    
    // Prevent default drag behaviors
    document.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    
    // Remove highlight on drag leave
    document.querySelectorAll('.sentence-slot').forEach(slot => {
        slot.addEventListener('dragleave', (e) => {
            e.currentTarget.classList.remove('highlight');
        });
    });
    
    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !checkBtn.disabled) {
            checkSentence();
        } else if (e.key === 'Escape') {
            resetLevel();
        } else if (e.key === 'h' || e.key === 'H') {
            showHint();
        }
    });
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    // expose refresh hook for language changes (static UI only)
    window.stRefreshTexts = () => {
        if (typeof applySTLanguage === 'function') {
            applySTLanguage(typeof stLang !== 'undefined' ? stLang : 'en');
        }
        updateUI();
        updateButtons();
        // Refresh word cards and slots with translated text
        createWordCards();
        // Update any filled slots with translated text
        gameState.currentSentence.forEach((word, index) => {
            if (word) {
                updateSlotDisplay(index);
            }
        });
    };
});
