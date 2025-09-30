// CodeCraft Chronicles - JavaScript Game Logic
class CodeCraftGame {
    constructor() {
        this.currentLanguage = 'en';
        this.currentLevel = 1;
        this.totalLevels = 20;
        this.unlockedLevels = 1;
        this.achievements = [];
        this.codeBlocks = [];
        this.robot = {
            x: 0,
            y: 0,
            direction: 'right', // right, down, left, up
            gemsCollected: 0
        };
        this.gameState = 'idle'; // idle, running, paused, completed
        this.executionSpeed = 500; // milliseconds between steps
        this.currentStep = 0;
        this.totalSteps = 0;
        this.startTime = null;
        this.draggedElement = null;
        this.achievements = new Set();
        this.isDropHandled = false; // Flag to prevent duplicate drops
        
        // Game grid data
        this.gridData = [];
        this.gridSize = { width: 8, height: 6 };
        
        // Level definitions
        this.levels = this.initializeLevels();
        
        // Translations
        this.translations = this.initializeTranslations();
        
        // Initialize game
        this.init();
    }

    init() {
        console.log('Initializing CodeCraft Chronicles...');
        this.setupEventListeners();
        this.setupDragAndDrop();
        this.loadLevel(this.currentLevel);
        this.updateDisplay();
        this.showTutorial();
    }

    initializeTranslations() {
        return {
            en: {
                // Header
                gameTitle: "🏰 CodeCraft Chronicles",
                currentLevelText: "Level",
                progressText: "Levels",
                
                // Categories
                movementText: "Movement",
                loopsText: "Loops", 
                logicText: "Logic",
                functionsText: "Functions",
                
                // Code blocks
                moveForwardText: "Move Forward",
                turnLeftText: "Turn Left", 
                turnRightText: "Turn Right",
                collectText: "Collect",
                repeatText: "Repeat",
                timesText: "times",
                whileText: "While",
                ifText: "If",
                ifElseText: "If-Else",
                elseText: "Else",
                functionText: "Create Function",
                callFunctionText: "Call Function",
                
                // Conditions
                pathClearOption: "path is clear",
                gemNearOption: "gem nearby", 
                wallAheadOption: "wall ahead",
                
                // Controls
                runCodeText: "Run Code",
                resetText: "Reset",
                stepText: "Step",
                clearCodeText: "Clear",
                saveCodeText: "Save",
                
                // Panel titles
                codeBlocksTitle: "Code Blocks",
                gameWorldTitle: "Game World", 
                codeAreaTitle: "Your Code",
                
                // Status
                gemsText: "Gems",
                stepsText: "Steps",
                
                // Messages
                dragBlocksText: "Drag code blocks here to create your program!",
                errorsFoundText: "Errors Found:",
                hintText: "Hint:",
                
                // Modal titles
                levelCompleteTitle: "🎉 Level Complete!",
                tutorialTitle: "🎓 Welcome to CodeCraft Chronicles!",
                levelSelectTitle: "📍 Choose Your Adventure",
                
                // Tutorial steps
                tutorialStep1Title: "Welcome, Young Coder!",
                tutorialStep1Text: "Embark on an epic adventure through the magical world of programming! Help our robot knight navigate through castles, collect treasures, and learn the art of coding.",
                tutorialStep2Title: "Drag & Drop Code Blocks", 
                tutorialStep2Text: "Programming is like building with blocks! Drag code blocks from the left panel to create your program. Each block represents an action the robot can perform.",
                tutorialStep3Title: "Run Your Code",
                tutorialStep3Text: "Once you've arranged your blocks, click the 'Run Code' button to see your robot follow your instructions. Watch as your code comes to life!",
                tutorialStep4Title: "Learn & Achieve",
                tutorialStep4Text: "Complete levels to unlock new programming concepts and earn achievements. From simple movements to complex loops and conditions - master them all!",
                
                // Buttons
                nextLevelText: "Next Level",
                retryLevelText: "Retry Level", 
                nextText: "Next",
                prevText: "Previous",
                levelSelectText: "Level Select",
                tutorialBtnText: "Tutorial",
                achievementsBtnText: "Achievements", 
                settingsBtnText: "Settings",
                
                // Stats
                stepsUsedText: "steps used",
                blocksUsedText: "blocks used",
                achievementsEarnedTitle: "Achievements Earned:",
                conceptLearnedTitle: "Concept Learned:",
                
                // Level names and concepts
                levelNames: [
                    "First Steps", "Basic Movement", "Turn Around", "Collect Gems", "Simple Path",
                    "Loop Basics", "Repeat Actions", "While Loops", "Conditional Logic", "If Statements",
                    "If-Else Logic", "Complex Paths", "Nested Loops", "Advanced Logic", "Function Basics",
                    "Custom Functions", "Function Calls", "Master Challenge", "Expert Puzzles", "Grand Finale"
                ],
                concepts: [
                    "Sequential Programming", "Basic Commands", "Directional Control", "Object Interaction", "Path Planning",
                    "Loop Concepts", "Repetition", "Conditional Loops", "Decision Making", "Boolean Logic",
                    "Branching Logic", "Problem Solving", "Nested Structures", "Complex Logic", "Function Definition",
                    "Code Reusability", "Function Execution", "Advanced Programming", "Optimization", "Master Programming"
                ],
                conceptDescriptions: [
                    "You learned how to create a sequence of instructions that the computer follows step by step!",
                    "You mastered the basic movement commands that control the robot's actions!",
                    "You learned how to change the robot's direction using turn commands!",
                    "You discovered how to interact with objects in the game world!",
                    "You learned to plan a path from start to finish!",
                    "You discovered the power of loops to repeat actions efficiently!",
                    "You learned how to repeat a set of actions multiple times!",
                    "You mastered conditional loops that continue while a condition is true!",
                    "You learned how to make decisions in your code using conditions!",
                    "You discovered how to use true/false logic in programming!",
                    "You learned to create different paths based on conditions!",
                    "You developed problem-solving skills for complex challenges!",
                    "You learned to put loops inside other loops for complex patterns!",
                    "You mastered combining multiple programming concepts!",
                    "You learned to create reusable pieces of code called functions!",
                    "You discovered how functions make your code more organized!",
                    "You learned to call and execute custom functions!",
                    "You mastered advanced programming techniques!",
                    "You learned to write efficient and optimized code!",
                    "Congratulations! You've mastered the art of programming!"
                ],
                
                // Achievements
                achievementNames: [
                    "First Program", "Speed Runner", "Gem Collector", "Efficient Coder", "Loop Master",
                    "Logic Expert", "Function Guru", "Problem Solver", "Perfect Run", "Code Artist"
                ],
                achievementDescriptions: [
                    "Completed your first level!",
                    "Completed a level in under 30 seconds!",
                    "Collected all gems in a level!",
                    "Completed a level with minimum blocks!",
                    "Mastered loop concepts!",
                    "Solved complex logic puzzles!",
                    "Created and used functions!",
                    "Solved 10 levels!",
                    "Completed a level without errors!",
                    "Used all types of code blocks!"
                ],
                
                // Hints
                hints: [
                    "Try dragging a 'Move Forward' block to start!",
                    "Remember to turn before moving in a new direction!",
                    "Use the 'Collect' block when you're next to a gem!",
                    "Loops can help you repeat actions without writing them multiple times!",
                    "If statements help you make decisions based on conditions!",
                    "Check if the path is clear before moving forward!",
                    "Functions help you organize and reuse your code!",
                    "Try breaking complex problems into smaller steps!",
                    "Use the Step button to debug your code one action at a time!",
                    "Experiment with different combinations of blocks!"
                ]
            },
            tr: {
                // Header
                gameTitle: "🏰 CodeCraft Maceraları",
                currentLevelText: "Seviye",
                progressText: "Seviye",
                
                // Categories
                movementText: "Hareket",
                loopsText: "Döngüler",
                logicText: "Mantık",
                functionsText: "Fonksiyonlar",
                
                // Code blocks
                moveForwardText: "İleri Git",
                turnLeftText: "Sola Dön",
                turnRightText: "Sağa Dön", 
                collectText: "Topla",
                repeatText: "Tekrarla",
                timesText: "kez",
                whileText: "Şu sürece",
                ifText: "Eğer",
                ifElseText: "Eğer-Değilse",
                elseText: "Değilse",
                functionText: "Fonksiyon Oluştur",
                callFunctionText: "Fonksiyon Çağır",
                
                // Conditions
                pathClearOption: "yol açık",
                gemNearOption: "mücevher yakında",
                wallAheadOption: "önde duvar",
                
                // Controls
                runCodeText: "Kodu Çalıştır",
                resetText: "Sıfırla",
                stepText: "Adım",
                clearCodeText: "Temizle",
                saveCodeText: "Kaydet",
                
                // Panel titles
                codeBlocksTitle: "Kod Blokları",
                gameWorldTitle: "Oyun Dünyası",
                codeAreaTitle: "Kodunuz",
                
                // Status
                gemsText: "Mücevher",
                stepsText: "Adım",
                
                // Messages
                dragBlocksText: "Programınızı oluşturmak için kod bloklarını buraya sürükleyin!",
                errorsFoundText: "Bulunan Hatalar:",
                hintText: "İpucu:",
                
                // Modal titles
                levelCompleteTitle: "🎉 Seviye Tamamlandı!",
                tutorialTitle: "🎓 CodeCraft Maceraları'na Hoş Geldiniz!",
                levelSelectTitle: "📍 Maceranızı Seçin",
                
                // Tutorial steps
                tutorialStep1Title: "Hoş Geldin Genç Kodlayıcı!",
                tutorialStep1Text: "Programlamanın büyülü dünyasında destansı bir maceraya atıl! Robot şövalyemizin kaleler arasında gezinmesine, hazineler toplamasına yardım et ve kodlama sanatını öğren.",
                tutorialStep2Title: "Kod Bloklarını Sürükle & Bırak",
                tutorialStep2Text: "Programlama bloklar ile inşa etmek gibidir! Sol panelden kod bloklarını sürükleyerek programınızı oluşturun. Her blok robotun yapabileceği bir eylemi temsil eder.",
                tutorialStep3Title: "Kodunuzu Çalıştırın",
                tutorialStep3Text: "Bloklarınızı düzenledikten sonra, robotun talimatlarınızı takip etmesini görmek için 'Kodu Çalıştır' düğmesine tıklayın. Kodunuzun canlanmasını izleyin!",
                tutorialStep4Title: "Öğren & Başar",
                tutorialStep4Text: "Yeni programlama kavramlarının kilidini açmak ve başarılar kazanmak için seviyeleri tamamlayın. Basit hareketlerden karmaşık döngülere ve koşullara - hepsinde ustalaşın!",
                
                // Level names and concepts (truncated for space)
                levelNames: [
                    "İlk Adımlar", "Temel Hareket", "Dön", "Mücevher Topla", "Basit Yol",
                    "Döngü Temelleri", "Eylemleri Tekrarla", "While Döngüleri", "Koşullu Mantık", "If İfadeleri",
                    "If-Else Mantığı", "Karmaşık Yollar", "İç İçe Döngüler", "Gelişmiş Mantık", "Fonksiyon Temelleri",
                    "Özel Fonksiyonlar", "Fonksiyon Çağırma", "Master Meydan Okuma", "Uzman Bulmacalar", "Büyük Final"
                ]
            },
            pl: {
                gameTitle: "🏰 Kroniki CodeCraft",
                currentLevelText: "Poziom",
                progressText: "Poziomy",
                movementText: "Ruch",
                loopsText: "Pętle",
                logicText: "Logika", 
                functionsText: "Funkcje",
                moveForwardText: "Idź Naprzód",
                turnLeftText: "Skręć w Lewo",
                turnRightText: "Skręć w Prawo",
                collectText: "Zbierz",
                runCodeText: "Uruchom Kod",
                resetText: "Reset",
                levelCompleteTitle: "🎉 Poziom Ukończony!"
            },
            lt: {
                gameTitle: "🏰 CodeCraft Kronikos", 
                currentLevelText: "Lygis",
                progressText: "Lygiai",
                movementText: "Judėjimas",
                loopsText: "Ciklai",
                logicText: "Logika",
                functionsText: "Funkcijos",
                moveForwardText: "Eiti Pirmyn",
                turnLeftText: "Sukti Kairėn",
                turnRightText: "Sukti Dešinėn", 
                collectText: "Rinkti",
                runCodeText: "Paleisti Kodą",
                resetText: "Atstatyti",
                levelCompleteTitle: "🎉 Lygis Baigtas!"
            },
            nl: {
                gameTitle: "🏰 CodeCraft Kronieken",
                currentLevelText: "Niveau",
                progressText: "Niveaus", 
                movementText: "Beweging",
                loopsText: "Lussen",
                logicText: "Logica",
                functionsText: "Functies",
                moveForwardText: "Ga Vooruit",
                turnLeftText: "Draai Links",
                turnRightText: "Draai Rechts",
                collectText: "Verzamel",
                runCodeText: "Code Uitvoeren",
                resetText: "Reset",
                levelCompleteTitle: "🎉 Niveau Voltooid!"
            }
        };
    }

    initializeLevels() {
        return [
            // Level 1: First Steps
            {
                id: 1,
                name: "First Steps",
                concept: "Sequential Programming",
                grid: [
                    ['start', 'path', 'path', 'goal', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
                ],
                robotStart: {x: 0, y: 0, direction: 'right'},
                goals: [{x: 3, y: 0}],
                gems: [],
                availableBlocks: ['moveForward'],
                maxBlocks: 5,
                hint: "Try dragging a 'Move Forward' block to start!"
            },
            // Level 2: Basic Movement
            {
                id: 2,
                name: "Basic Movement", 
                concept: "Basic Commands",
                grid: [
                    ['start', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['path', 'path', 'path', 'goal', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
                ],
                robotStart: {x: 0, y: 0, direction: 'right'},
                goals: [{x: 3, y: 2}],
                gems: [],
                availableBlocks: ['moveForward', 'turnLeft', 'turnRight'],
                maxBlocks: 8,
                hint: "Remember to turn before moving in a new direction!"
            },
            // Level 3: Turn Around
            {
                id: 3,
                name: "Turn Around",
                concept: "Directional Control", 
                grid: [
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'start', 'path', 'path', 'path', 'wall', 'wall', 'wall'],
                    ['wall', 'path', 'wall', 'wall', 'path', 'wall', 'wall', 'wall'],
                    ['wall', 'path', 'wall', 'wall', 'path', 'wall', 'wall', 'wall'],
                    ['wall', 'goal', 'path', 'path', 'path', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
                ],
                robotStart: {x: 1, y: 1, direction: 'right'},
                goals: [{x: 1, y: 4}],
                gems: [],
                availableBlocks: ['moveForward', 'turnLeft', 'turnRight'],
                maxBlocks: 12,
                hint: "You'll need to turn multiple times to reach the goal!"
            },
            // Level 4: Collect Gems
            {
                id: 4,
                name: "Collect Gems",
                concept: "Object Interaction",
                grid: [
                    ['start', 'gem', 'path', 'gem', 'goal', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
                ],
                robotStart: {x: 0, y: 0, direction: 'right'},
                goals: [{x: 4, y: 0}],
                gems: [{x: 1, y: 0}, {x: 3, y: 0}],
                availableBlocks: ['moveForward', 'collect'],
                maxBlocks: 8,
                hint: "Use the 'Collect' block when you're next to a gem!"
            },
            // Level 5: Simple Path
            {
                id: 5,
                name: "Simple Path",
                concept: "Path Planning",
                grid: [
                    ['start', 'path', 'gem', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'path', 'path', 'gem', 'wall', 'wall', 'wall'],
                    ['wall', 'wall', 'wall', 'path', 'path', 'path', 'goal', 'wall'],
                    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
                ],
                robotStart: {x: 0, y: 0, direction: 'right'},
                goals: [{x: 6, y: 4}],
                gems: [{x: 2, y: 0}, {x: 4, y: 3}],
                availableBlocks: ['moveForward', 'turnLeft', 'turnRight', 'collect'],
                maxBlocks: 15,
                hint: "Plan your path to collect all gems before reaching the goal!"
            }
            // Add more levels here (6-20)...
        ];
    }

    setupEventListeners() {
        // Language selector
        const languageSelect = document.getElementById('languageSelect');
        languageSelect.addEventListener('change', (e) => {
            this.currentLanguage = e.target.value;
            this.updateDisplay();
        });

        // Category tabs
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchCategory(e.target.dataset.category);
            });
        });

        // Control buttons
        document.getElementById('runCodeBtn').addEventListener('click', () => this.runCode());
        document.getElementById('resetBtn').addEventListener('click', () => this.resetLevel());
        document.getElementById('stepBtn').addEventListener('click', () => this.stepCode());
        document.getElementById('clearCodeBtn').addEventListener('click', () => this.clearCode());
        document.getElementById('saveCodeBtn').addEventListener('click', () => this.saveCode());

        // Modal controls
        document.getElementById('closeModalBtn').addEventListener('click', () => this.hideModal('levelCompleteModal'));
        document.getElementById('closeTutorialBtn').addEventListener('click', () => this.hideModal('tutorialModal'));
        document.getElementById('closeLevelSelectBtn').addEventListener('click', () => this.hideModal('levelSelectModal'));
        document.getElementById('nextLevelBtn').addEventListener('click', () => this.nextLevel());
        document.getElementById('retryLevelBtn').addEventListener('click', () => this.retryLevel());

        // Tutorial navigation
        document.getElementById('nextTutorialBtn').addEventListener('click', () => this.nextTutorialStep());
        document.getElementById('prevTutorialBtn').addEventListener('click', () => this.prevTutorialStep());

        // Bottom controls
        document.getElementById('levelSelectBtn').addEventListener('click', () => this.showLevelSelect());
        document.getElementById('tutorialBtn').addEventListener('click', () => this.showTutorial());
        document.getElementById('achievementsBtn').addEventListener('click', () => this.showAchievements());
        document.getElementById('settingsBtn').addEventListener('click', () => this.showSettings());

        // Help button
        document.getElementById('helpBtn').addEventListener('click', () => this.showHelp());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && !e.target.matches('input, select, textarea')) {
                e.preventDefault();
                this.runCode();
            } else if (e.code === 'KeyR' && e.ctrlKey) {
                e.preventDefault();
                this.resetLevel();
            }
        });
    }

    setupDragAndDrop() {
        // Make code blocks draggable
        document.querySelectorAll('.code-block[draggable="true"]').forEach(block => {
            block.addEventListener('dragstart', (e) => this.handleDragStart(e));
            block.addEventListener('dragend', (e) => this.handleDragEnd(e));
        });

        // Setup drop zones
        const codeArea = document.getElementById('codeArea');
        codeArea.addEventListener('dragover', (e) => this.handleDragOver(e));
        codeArea.addEventListener('drop', (e) => this.handleDrop(e));
        codeArea.addEventListener('dragenter', (e) => this.handleDragEnter(e));
        codeArea.addEventListener('dragleave', (e) => this.handleDragLeave(e));
    }

    handleDragStart(e) {
        this.draggedElement = e.target;
        e.target.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'copy';
        
        // Store block data
        const blockData = {
            action: e.target.dataset.action,
            blockType: e.target.dataset.action,
            isFromPalette: !e.target.closest('.code-area')
        };
        e.dataTransfer.setData('text/plain', JSON.stringify(blockData));
    }

    handleDragEnd(e) {
        e.target.classList.remove('dragging');
        this.draggedElement = null;
    }

    handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }

    handleDragEnter(e) {
        if (e.target.classList.contains('drop-zone')) {
            e.target.classList.add('drop-over');
        }
    }

    handleDragLeave(e) {
        if (e.target.classList.contains('drop-zone') && !e.target.contains(e.relatedTarget)) {
            e.target.classList.remove('drop-over');
        }
    }

    handleDrop(e) {
        e.preventDefault();
        e.target.classList.remove('drop-over');
        
        try {
            const blockData = JSON.parse(e.dataTransfer.getData('text/plain'));
            
            console.log('Drop attempted:', blockData);
            
            // Only allow dropping from palette
            if (blockData.isFromPalette) {
                this.addCodeBlock(blockData);
            } else {
                console.log('Drop rejected: not from palette');
            }
        } catch (error) {
            console.error('Error parsing dropped data:', error);
        }
    }

    handleContainerDrop(e) {
        e.preventDefault();
        e.target.classList.remove('drop-over');
        
        try {
            const blockData = JSON.parse(e.dataTransfer.getData('text/plain'));
            
            // Only allow dropping from palette, not from existing code blocks
            if (!blockData.isFromPalette) {
                return;
            }
            
            this.addCodeBlockToContainer(e.target, blockData);
        } catch (error) {
            console.error('Error parsing dropped data:', error);
        }
    }

    addCodeBlock(blockData) {
        console.log('Adding block:', blockData);
        
        const codeArea = document.getElementById('codeArea');
        
        // Clear empty message if it exists
        const emptyMessage = codeArea.querySelector('.empty-code-message');
        if (emptyMessage) {
            emptyMessage.remove();
        }
        
        // Create unique block
        const blockElement = this.createPlacedBlock(blockData);
        
        codeArea.appendChild(blockElement);
        codeArea.classList.add('has-blocks');
        
        // Add to tracking array with unique ID
        this.codeBlocks.push({
            id: Date.now() + Math.random(), // Ensure unique ID
            action: blockData.action,
            element: blockElement
        });
        
        this.validateCode();
        
        console.log('Block added successfully:', blockData.action, 'Total blocks:', this.codeBlocks.length);
    }

    addCodeBlockToContainer(container, blockData) {
        console.log('Adding block to container:', blockData);
        
        const blockElement = this.createPlacedBlock(blockData, true);
        container.appendChild(blockElement);
        container.classList.remove('drop-over');
        this.validateCode();
        
        console.log('Block added to container successfully:', blockData.action);
    }

    createPlacedBlock(blockData, isNested = false) {
        const div = document.createElement('div');
        div.className = 'placed-block';
        
        // Get the original block template and clone its content
        const originalBlock = document.querySelector(`[data-action="${blockData.action}"]`);
        if (originalBlock) {
            // Clone only the inner content, not the entire element
            const blockContent = originalBlock.cloneNode(true);
            div.innerHTML = blockContent.innerHTML;
        }
        
        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '×';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.removeCodeBlock(div);
        });
        div.appendChild(deleteBtn);
        
        // Handle container blocks
        if (blockData.action === 'repeat' || blockData.action === 'while' || 
            blockData.action === 'if' || blockData.action === 'ifElse') {
            this.setupContainerBlock(div);
        }
        
        return div;
    }

    setupContainerBlock(blockElement) {
        const dropZones = blockElement.querySelectorAll('.drop-zone');
        dropZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'copy';
            });
            
            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                
                try {
                    const blockData = JSON.parse(e.dataTransfer.getData('text/plain'));
                    
                    console.log('Container drop attempted:', blockData);
                    
                    // Only allow dropping from palette
                    if (blockData.isFromPalette) {
                        this.addCodeBlockToContainer(zone, blockData);
                    } else {
                        console.log('Container drop rejected: not from palette');
                    }
                } catch (error) {
                    console.error('Error parsing dropped data:', error);
                }
            });
            
            zone.addEventListener('dragenter', (e) => {
                e.preventDefault();
                e.target.classList.add('drop-over');
            });
            
            zone.addEventListener('dragleave', (e) => {
                if (!e.target.contains(e.relatedTarget)) {
                    e.target.classList.remove('drop-over');
                }
            });
        });
    }

    removeCodeBlock(blockElement) {
        const index = this.codeBlocks.findIndex(block => block.element === blockElement);
        if (index !== -1) {
            this.codeBlocks.splice(index, 1);
        }
        
        blockElement.remove();
        
        const codeArea = document.getElementById('codeArea');
        if (codeArea.children.length === 0) {
            codeArea.classList.remove('has-blocks');
        }
        
        this.validateCode();
    }

    switchCategory(category) {
        // Update active tab
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        // Show corresponding blocks
        document.querySelectorAll('.blocks-category').forEach(cat => {
            cat.classList.add('hidden');
        });
        document.getElementById(`${category}-blocks`).classList.remove('hidden');
    }

    loadLevel(levelNum) {
        const level = this.levels[levelNum - 1];
        if (!level) return;
        
        this.currentLevel = levelNum;
        this.robot = { ...level.robotStart, gemsCollected: 0 };
        this.gridData = level.grid.map(row => [...row]);
        this.currentStep = 0;
        this.totalSteps = 0;
        this.startTime = null;
        this.gameState = 'idle';
        
        this.renderGrid();
        this.updateRobotPosition();
        this.updateAvailableBlocks(level.availableBlocks);
        this.clearCode();
        this.updateDisplay();
        
        // Show hint if available
        if (level.hint) {
            this.showHint(level.hint);
        }
    }

    renderGrid() {
        const gameGrid = document.getElementById('gameGrid');
        gameGrid.innerHTML = '';
        
        this.gridData.forEach((row, y) => {
            row.forEach((cell, x) => {
                const cellElement = document.createElement('div');
                cellElement.className = `grid-cell ${cell}`;
                cellElement.dataset.x = x;
                cellElement.dataset.y = y;
                
                // Add cell content
                if (cell === 'gem') {
                    cellElement.innerHTML = '💎';
                } else if (cell === 'goal') {
                    cellElement.innerHTML = '🏰';
                } else if (cell === 'start') {
                    cellElement.innerHTML = '🌟';
                } else if (cell === 'wall') {
                    cellElement.innerHTML = '🧱';
                }
                
                gameGrid.appendChild(cellElement);
            });
        });
    }

    updateRobotPosition() {
        // Remove robot from previous position
        document.querySelectorAll('.robot').forEach(robot => robot.remove());
        
        // Add robot to current position
        const cell = document.querySelector(`[data-x="${this.robot.x}"][data-y="${this.robot.y}"]`);
        if (cell) {
            const robotElement = document.createElement('div');
            robotElement.className = 'robot';
            robotElement.innerHTML = this.getRobotEmoji();
            cell.appendChild(robotElement);
        }
    }

    getRobotEmoji() {
        const directions = {
            'right': '🤖',
            'down': '🤖',
            'left': '🤖', 
            'up': '🤖'
        };
        return directions[this.robot.direction] || '🤖';
    }

    updateAvailableBlocks(availableBlocks) {
        // Hide all blocks first
        document.querySelectorAll('.code-block').forEach(block => {
            block.style.display = 'none';
        });
        
        // Show only available blocks
        availableBlocks.forEach(blockType => {
            const block = document.querySelector(`[data-action="${blockType}"]`);
            if (block) {
                block.style.display = 'flex';
            }
        });
    }

    runCode() {
        if (this.gameState === 'running') return;
        
        this.gameState = 'running';
        this.currentStep = 0;
        this.startTime = Date.now();
        
        // Disable run button
        const runBtn = document.getElementById('runCodeBtn');
        runBtn.disabled = true;
        runBtn.innerHTML = '<span class="btn-icon">⏸️</span><span>Running...</span>';
        
        this.executeCode();
    }

    async executeCode() {
        const blocks = this.getExecutableBlocks();
        
        for (let i = 0; i < blocks.length; i++) {
            if (this.gameState !== 'running') break;
            
            // Highlight current block
            this.highlightExecutingBlock(blocks[i]);
            
            // Execute block action
            const success = await this.executeBlock(blocks[i]);
            
            // Remove highlight
            this.removeBlockHighlight(blocks[i]);
            
            if (!success) {
                this.handleExecutionError(blocks[i]);
                break;
            }
            
            // Check if level is complete
            if (this.checkLevelComplete()) {
                this.completeLevelLevel();
                break;
            }
            
            // Wait before next step
            await this.sleep(this.executionSpeed);
        }
        
        // Re-enable run button
        const runBtn = document.getElementById('runCodeBtn');
        runBtn.disabled = false;
        runBtn.innerHTML = '<span class="btn-icon">▶️</span><span id="runCodeText">Run Code</span>';
        
        this.gameState = 'idle';
    }

    getExecutableBlocks() {
        const codeArea = document.getElementById('codeArea');
        const blocks = [];
        
        Array.from(codeArea.children).forEach(child => {
            if (child.classList.contains('placed-block')) {
                blocks.push(this.parseBlock(child));
            }
        });
        
        return blocks;
    }

    parseBlock(blockElement) {
        const action = blockElement.querySelector('[data-action]')?.dataset.action ||
                     this.getBlockActionFromClass(blockElement);
        
        const block = { action, element: blockElement };
        
        // Handle container blocks
        if (action === 'repeat') {
            block.count = parseInt(blockElement.querySelector('.repeat-input')?.value) || 1;
            block.children = this.parseContainerChildren(blockElement.querySelector('.drop-zone'));
        } else if (action === 'while' || action === 'if' || action === 'ifElse') {
            block.condition = blockElement.querySelector('.condition-select')?.value || 'pathClear';
            block.children = this.parseContainerChildren(blockElement.querySelector('.drop-zone'));
            
            if (action === 'ifElse') {
                block.elseChildren = this.parseContainerChildren(blockElement.querySelectorAll('.drop-zone')[1]);
            }
        }
        
        return block;
    }

    parseContainerChildren(container) {
        if (!container) return [];
        
        const children = [];
        Array.from(container.children).forEach(child => {
            if (child.classList.contains('placed-block')) {
                children.push(this.parseBlock(child));
            }
        });
        return children;
    }

    getBlockActionFromClass(element) {
        // Extract action from element content or class
        const text = element.textContent.toLowerCase();
        if (text.includes('move forward')) return 'moveForward';
        if (text.includes('turn left')) return 'turnLeft';
        if (text.includes('turn right')) return 'turnRight';
        if (text.includes('collect')) return 'collect';
        if (text.includes('repeat')) return 'repeat';
        if (text.includes('while')) return 'while';
        if (text.includes('if')) return element.textContent.includes('else') ? 'ifElse' : 'if';
        return 'unknown';
    }

    async executeBlock(block) {
        this.totalSteps++;
        this.updateStepsCounter();
        
        switch (block.action) {
            case 'moveForward':
                return this.executeMoveForward();
            case 'turnLeft':
                return this.executeTurnLeft();
            case 'turnRight':
                return this.executeTurnRight();
            case 'collect':
                return this.executeCollect();
            case 'repeat':
                return this.executeRepeat(block);
            case 'while':
                return this.executeWhile(block);
            case 'if':
                return this.executeIf(block);
            case 'ifElse':
                return this.executeIfElse(block);
            default:
                return false;
        }
    }

    executeMoveForward() {
        const newPos = this.getNewPosition();
        
        if (this.isValidPosition(newPos.x, newPos.y)) {
            this.robot.x = newPos.x;
            this.robot.y = newPos.y;
            this.updateRobotPosition();
            this.animateRobotMove();
            return true;
        }
        
        return false;
    }

    executeTurnLeft() {
        const directions = ['up', 'left', 'down', 'right'];
        const currentIndex = directions.indexOf(this.robot.direction);
        this.robot.direction = directions[(currentIndex + 1) % 4];
        this.updateRobotPosition();
        this.animateRobotTurn();
        return true;
    }

    executeTurnRight() {
        const directions = ['up', 'right', 'down', 'left'];
        const currentIndex = directions.indexOf(this.robot.direction);
        this.robot.direction = directions[(currentIndex + 1) % 4];
        this.updateRobotPosition();
        this.animateRobotTurn();
        return true;
    }

    executeCollect() {
        const currentCell = this.gridData[this.robot.y][this.robot.x];
        if (currentCell === 'gem') {
            this.gridData[this.robot.y][this.robot.x] = 'path';
            this.robot.gemsCollected++;
            this.updateGemsCounter();
            this.animateRobotCollect();
            
            // Remove gem from visual grid
            const cell = document.querySelector(`[data-x="${this.robot.x}"][data-y="${this.robot.y}"]`);
            const gem = cell.querySelector(':not(.robot)');
            if (gem) gem.remove();
            
            return true;
        }
        return false;
    }

    async executeRepeat(block) {
        for (let i = 0; i < block.count; i++) {
            for (const childBlock of block.children) {
                const success = await this.executeBlock(childBlock);
                if (!success) return false;
                await this.sleep(this.executionSpeed);
            }
        }
        return true;
    }

    async executeWhile(block) {
        let iterations = 0;
        const maxIterations = 100; // Prevent infinite loops
        
        while (this.evaluateCondition(block.condition) && iterations < maxIterations) {
            for (const childBlock of block.children) {
                const success = await this.executeBlock(childBlock);
                if (!success) return false;
                await this.sleep(this.executionSpeed);
            }
            iterations++;
        }
        
        return iterations < maxIterations;
    }

    async executeIf(block) {
        if (this.evaluateCondition(block.condition)) {
            for (const childBlock of block.children) {
                const success = await this.executeBlock(childBlock);
                if (!success) return false;
                await this.sleep(this.executionSpeed);
            }
        }
        return true;
    }

    async executeIfElse(block) {
        const condition = this.evaluateCondition(block.condition);
        const children = condition ? block.children : block.elseChildren;
        
        for (const childBlock of children) {
            const success = await this.executeBlock(childBlock);
            if (!success) return false;
            await this.sleep(this.executionSpeed);
        }
        return true;
    }

    evaluateCondition(condition) {
        switch (condition) {
            case 'pathClear':
                const newPos = this.getNewPosition();
                return this.isValidPosition(newPos.x, newPos.y);
            case 'gemNear':
                return this.gridData[this.robot.y][this.robot.x] === 'gem';
            case 'wallAhead':
                const frontPos = this.getNewPosition();
                return !this.isValidPosition(frontPos.x, frontPos.y);
            default:
                return false;
        }
    }

    getNewPosition() {
        let { x, y } = this.robot;
        
        switch (this.robot.direction) {
            case 'right': x++; break;
            case 'down': y++; break;
            case 'left': x--; break;
            case 'up': y--; break;
        }
        
        return { x, y };
    }

    isValidPosition(x, y) {
        if (x < 0 || x >= this.gridSize.width || y < 0 || y >= this.gridSize.height) {
            return false;
        }
        
        const cell = this.gridData[y][x];
        return cell !== 'wall';
    }

    checkLevelComplete() {
        const currentLevel = this.levels[this.currentLevel - 1];
        const currentCell = this.gridData[this.robot.y][this.robot.x];
        
        // Check if robot reached goal
        const atGoal = currentLevel.goals.some(goal => 
            goal.x === this.robot.x && goal.y === this.robot.y
        );
        
        // Check if all gems collected
        const allGemsCollected = this.robot.gemsCollected >= currentLevel.gems.length;
        
        return atGoal && allGemsCollected;
    }

    completeLevelLevel() {
        this.gameState = 'completed';
        const completionTime = Math.floor((Date.now() - this.startTime) / 1000);
        
        // Check for achievements
        this.checkAchievements(completionTime);
        
        // Update progress
        if (this.currentLevel === this.unlockedLevels) {
            this.unlockedLevels = Math.min(this.unlockedLevels + 1, this.totalLevels);
        }
        
        // Show completion modal
        this.showLevelComplete(completionTime);
    }

    checkAchievements(completionTime) {
        const level = this.levels[this.currentLevel - 1];
        
        // First Program
        if (this.currentLevel === 1 && !this.achievements.has('firstProgram')) {
            this.earnAchievement('firstProgram');
        }
        
        // Speed Runner
        if (completionTime < 30 && !this.achievements.has('speedRunner')) {
            this.earnAchievement('speedRunner');
        }
        
        // Gem Collector
        if (this.robot.gemsCollected === level.gems.length && level.gems.length > 0 && !this.achievements.has('gemCollector')) {
            this.earnAchievement('gemCollector');
        }
        
        // Problem Solver
        if (this.unlockedLevels >= 10 && !this.achievements.has('problemSolver')) {
            this.earnAchievement('problemSolver');
        }
    }

    earnAchievement(achievementId) {
        this.achievements.add(achievementId);
        const achievement = this.getAchievementData(achievementId);
        
        // Show achievement notification
        this.showAchievementNotification(achievement);
        
        // Update achievement counter
        document.getElementById('achievementCount').textContent = this.achievements.size;
    }

    getAchievementData(achievementId) {
        const achievements = {
            firstProgram: { icon: '🎉', name: 'First Program', description: 'Completed your first level!' },
            speedRunner: { icon: '⚡', name: 'Speed Runner', description: 'Completed a level in under 30 seconds!' },
            gemCollector: { icon: '💎', name: 'Gem Collector', description: 'Collected all gems in a level!' },
            problemSolver: { icon: '🧩', name: 'Problem Solver', description: 'Solved 10 levels!' }
        };
        return achievements[achievementId];
    }

    showAchievementNotification(achievement) {
        // Create and show achievement popup
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-content">
                <span class="achievement-icon">${achievement.icon}</span>
                <div class="achievement-info">
                    <h4>${achievement.name}</h4>
                    <p>${achievement.description}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Remove after animation
        setTimeout(() => notification.remove(), 3000);
    }

    // Animation methods
    animateRobotMove() {
        const robot = document.querySelector('.robot');
        if (robot) {
            robot.classList.add('moving');
            setTimeout(() => robot.classList.remove('moving'), 500);
        }
    }

    animateRobotTurn() {
        const robot = document.querySelector('.robot');
        if (robot) {
            robot.classList.add('turning');
            setTimeout(() => robot.classList.remove('turning'), 300);
        }
    }

    animateRobotCollect() {
        const robot = document.querySelector('.robot');
        if (robot) {
            robot.classList.add('collecting');
            setTimeout(() => robot.classList.remove('collecting'), 600);
        }
    }

    highlightExecutingBlock(block) {
        if (block.element) {
            block.element.classList.add('executing');
        }
    }

    removeBlockHighlight(block) {
        if (block.element) {
            block.element.classList.remove('executing');
        }
    }

    handleExecutionError(block) {
        this.gameState = 'error';
        if (block.element) {
            block.element.classList.add('error');
            setTimeout(() => block.element.classList.remove('error'), 1000);
        }
        
        this.showError('Execution failed! Check your code and try again.');
    }

    // UI Update methods
    updateDisplay() {
        const t = this.translations[this.currentLanguage];
        
        // Update text content
        document.getElementById('gameTitle').textContent = t.gameTitle;
        document.getElementById('currentLevelText').textContent = t.currentLevelText;
        document.getElementById('progressText').textContent = `${this.currentLevel}/${this.totalLevels} ${t.progressText}`;
        document.getElementById('currentLevel').textContent = this.currentLevel;
        
        // Update category tabs
        document.getElementById('movementText').textContent = t.movementText;
        document.getElementById('loopsText').textContent = t.loopsText;
        document.getElementById('logicText').textContent = t.logicText;
        document.getElementById('functionsText').textContent = t.functionsText;
        
        // Update code block text
        document.getElementById('moveForwardText').textContent = t.moveForwardText;
        document.getElementById('turnLeftText').textContent = t.turnLeftText;
        document.getElementById('turnRightText').textContent = t.turnRightText;
        document.getElementById('collectText').textContent = t.collectText;
        
        // Update control buttons
        const runBtn = document.getElementById('runCodeBtn');
        if (!runBtn.disabled) {
            runBtn.querySelector('span:last-child').textContent = t.runCodeText;
        }
        document.getElementById('resetText').textContent = t.resetText;
        document.getElementById('stepText').textContent = t.stepText;
        
        // Update level info
        const level = this.levels[this.currentLevel - 1];
        if (level) {
            document.getElementById('levelTitle').textContent = t.levelNames?.[this.currentLevel - 1] || level.name;
        }
        
        // Update progress bar
        const progressFill = document.getElementById('progressFill');
        const progressPercent = (this.currentLevel / this.totalLevels) * 100;
        progressFill.style.width = `${progressPercent}%`;
    }

    updateStepsCounter() {
        document.getElementById('stepsCount').textContent = this.totalSteps;
    }

    updateGemsCounter() {
        document.getElementById('gemsCollected').textContent = this.robot.gemsCollected;
        const level = this.levels[this.currentLevel - 1];
        document.getElementById('totalGems').textContent = level.gems.length;
    }

    // Modal methods
    showModal(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
    }

    hideModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
    }

    showLevelComplete(completionTime) {
        // Update completion stats
        document.getElementById('completionTime').textContent = completionTime;
        document.getElementById('completionSteps').textContent = this.totalSteps;
        document.getElementById('blocksUsed').textContent = this.codeBlocks.length;
        
        // Update concept learned
        const level = this.levels[this.currentLevel - 1];
        const t = this.translations[this.currentLanguage];
        document.getElementById('conceptName').textContent = t.concepts?.[this.currentLevel - 1] || level.concept;
        document.getElementById('conceptDescription').textContent = t.conceptDescriptions?.[this.currentLevel - 1] || 'Great job learning this concept!';
        
        this.showModal('levelCompleteModal');
    }

    showTutorial() {
        this.currentTutorialStep = 1;
        this.updateTutorialStep();
        this.showModal('tutorialModal');
    }

    updateTutorialStep() {
        // Hide all steps
        document.querySelectorAll('.tutorial-step').forEach(step => {
            step.classList.remove('active');
        });
        
        // Show current step
        document.querySelector(`[data-step="${this.currentTutorialStep}"]`).classList.add('active');
        
        // Update dots
        document.querySelectorAll('.dot').forEach(dot => {
            dot.classList.remove('active');
        });
        document.querySelector(`.dot[data-step="${this.currentTutorialStep}"]`).classList.add('active');
        
        // Update buttons
        document.getElementById('prevTutorialBtn').disabled = this.currentTutorialStep === 1;
        const nextBtn = document.getElementById('nextTutorialBtn');
        if (this.currentTutorialStep === 4) {
            nextBtn.innerHTML = '<span>Start Playing!</span>';
        } else {
            nextBtn.innerHTML = '<span id="nextText">Next</span><span class="btn-icon">➡️</span>';
        }
    }

    nextTutorialStep() {
        if (this.currentTutorialStep < 4) {
            this.currentTutorialStep++;
            this.updateTutorialStep();
        } else {
            this.hideModal('tutorialModal');
        }
    }

    prevTutorialStep() {
        if (this.currentTutorialStep > 1) {
            this.currentTutorialStep--;
            this.updateTutorialStep();
        }
    }

    showLevelSelect() {
        this.populateLevelGrid();
        this.showModal('levelSelectModal');
    }

    populateLevelGrid() {
        const levelGrid = document.getElementById('levelGrid');
        levelGrid.innerHTML = '';
        
        this.levels.forEach((level, index) => {
            const levelCard = document.createElement('div');
            levelCard.className = 'level-card';
            
            const isUnlocked = index + 1 <= this.unlockedLevels;
            const isCompleted = index + 1 < this.unlockedLevels;
            
            if (!isUnlocked) levelCard.classList.add('locked');
            if (isCompleted) levelCard.classList.add('completed');
            
            levelCard.innerHTML = `
                <div class="level-number">${index + 1}</div>
                <div class="level-name">${level.name}</div>
                <div class="level-concept">${level.concept}</div>
                <div class="level-status">${isCompleted ? '✅' : isUnlocked ? '🔓' : '🔒'}</div>
            `;
            
            if (isUnlocked) {
                levelCard.addEventListener('click', () => {
                    this.loadLevel(index + 1);
                    this.hideModal('levelSelectModal');
                });
            }
            
            levelGrid.appendChild(levelCard);
        });
    }

    // Game control methods
    resetLevel() {
        this.gameState = 'idle';
        this.loadLevel(this.currentLevel);
    }

    nextLevel() {
        this.hideModal('levelCompleteModal');
        if (this.currentLevel < this.totalLevels) {
            this.loadLevel(this.currentLevel + 1);
        }
    }

    retryLevel() {
        this.hideModal('levelCompleteModal');
        this.resetLevel();
    }

    clearCode() {
        const codeArea = document.getElementById('codeArea');
        codeArea.innerHTML = `
            <div class="empty-code-message">
                <div class="empty-icon">📝</div>
                <p id="dragBlocksText">Drag code blocks here to create your program!</p>
            </div>
        `;
        codeArea.classList.remove('has-blocks');
        this.codeBlocks = [];
        this.validateCode();
    }

    saveCode() {
        const blocks = this.getExecutableBlocks();
        localStorage.setItem(`codecraft_level_${this.currentLevel}`, JSON.stringify(blocks));
        this.showSuccess('Code saved successfully!');
    }

    validateCode() {
        const errors = [];
        const codeArea = document.getElementById('codeArea');
        
        // Check if code area is empty
        if (this.codeBlocks.length === 0) {
            this.hideErrors();
            return;
        }
        
        // Validate block sequence
        const blocks = this.getExecutableBlocks();
        
        // Add more validation rules here
        
        if (errors.length > 0) {
            this.showErrors(errors);
        } else {
            this.hideErrors();
        }
    }

    showErrors(errors) {
        const errorContainer = document.getElementById('codeErrors');
        const errorsList = document.getElementById('errorsList');
        
        errorsList.innerHTML = '';
        errors.forEach(error => {
            const li = document.createElement('li');
            li.textContent = error;
            errorsList.appendChild(li);
        });
        
        errorContainer.classList.remove('hidden');
    }

    hideErrors() {
        document.getElementById('codeErrors').classList.add('hidden');
    }

    showHint(hintText) {
        const hintContainer = document.getElementById('codeHints');
        const hintContent = document.getElementById('hintContent');
        
        hintContent.textContent = hintText;
        hintContainer.classList.remove('hidden');
        
        // Auto-hide hint after 10 seconds
        setTimeout(() => {
            hintContainer.classList.add('hidden');
        }, 10000);
    }

    showSuccess(message) {
        // Create success notification
        console.log('Success:', message);
    }

    showError(message) {
        // Create error notification
        console.error('Error:', message);
    }

    // Utility methods
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Placeholder methods for future features
    showAchievements() {
        console.log('Show achievements modal');
    }

    showSettings() {
        console.log('Show settings modal');
    }

    showHelp() {
        this.showTutorial();
    }

    stepCode() {
        console.log('Step through code');
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing CodeCraft Chronicles...');
    window.codeCraftGame = new CodeCraftGame();
});
