// Main game logic for Solar System Settlers
class SolarSystemGame {
    constructor() {
        this.gameState = {
            currentScreen: 'loading',
            selectedPlanet: null,
            resources: {
                oxygen: 1000,
                food: 800,
                energy: 1200,
                materials: 50,
                research: 10
            },
            colonies: {},
            research: {
                completed: [],
                available: ['life-support'],
                locked: ['terraforming', 'fusion-power']
            },
            missions: {
                current: 'launch-preparation',
                completed: [],
                progress: 25
            },
            achievements: [],
            gameSpeed: 1,
            isPaused: false
        };
        
        this.buildingCosts = {
            habitat: { oxygen: 100, energy: 50, materials: 10 },
            lab: { energy: 80, materials: 15, research: 5 },
            farm: { oxygen: 50, energy: 30, food: 20 },
            factory: { energy: 100, materials: 25, research: 10 },
            solar: { materials: 20, research: 5 },
            mine: { energy: 60, materials: 30 }
        };
        
        this.currentLanguage = localStorage.getItem('gameLanguage') || 'en';
        this.currentLanguage = localStorage.getItem('gameLanguage') || 'en';
        
        this.buildingCosts = {
            habitat: { oxygen: 100, energy: 50, materials: 10 },
            lab: { energy: 80, materials: 15, research: 5 },
            farm: { oxygen: 50, energy: 30, food: 20 },
            factory: { energy: 100, materials: 25, research: 10 },
            solar: { materials: 20, research: 5 },
            mine: { energy: 60, materials: 30 }
        };
        
        this.researchCosts = {
            'life-support': { research: 20 },
            'terraforming': { research: 100 },
            'fusion-power': { research: 150 }
        };
        
        this.setupUIEventListeners();
        
        // Game loop'u başlatma - sadece gerektiğinde çalışacak
        // this.startGameLoop();
    }
    
    setupUIEventListeners() {
        // Language selector
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                changeLanguage(e.target.value);
            });
        }
        
        // Menu buttons
        const newGameBtn = document.getElementById('new-game-btn');
        if (newGameBtn) {
            newGameBtn.addEventListener('click', () => {
                this.startNewGame();
            });
        }
        
        const loadGameBtn = document.getElementById('load-game-btn');
        if (loadGameBtn) {
            loadGameBtn.addEventListener('click', () => {
                this.loadGame();
            });
        }
        
        const tutorialBtn = document.getElementById('tutorial-btn');
        if (tutorialBtn) {
            tutorialBtn.addEventListener('click', () => {
                this.startTutorial();
            });
        }
        
        // Game controls
        const pauseBtn = document.getElementById('pause-btn');
        if (pauseBtn) {
            pauseBtn.addEventListener('click', () => {
                this.togglePause();
            });
        }
        
        const speedBtn = document.getElementById('speed-btn');
        if (speedBtn) {
            speedBtn.addEventListener('click', () => {
                this.changeGameSpeed();
            });
        }
        
        const saveBtn = document.getElementById('save-btn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                this.saveGame();
            });
        }
        
        const menuBtn = document.getElementById('menu-btn');
        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                this.returnToMenu();
            });
        }

        // Planet interactions - geliştirilmiş versiyon
        this.setupPlanetClickHandlers();
        
        // Close buttons
        const closePlanetBtn = document.getElementById('close-planet-view');
        if (closePlanetBtn) {
            closePlanetBtn.addEventListener('click', () => {
                this.closePlanetView();
            });
        }
        
        // Zoom controls
        const zoomInBtn = document.getElementById('zoom-in');
        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', () => {
                this.zoomIn();
            });
        }
        
        const zoomOutBtn = document.getElementById('zoom-out');
        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', () => {
                this.zoomOut();
            });
        }
        
        const resetViewBtn = document.getElementById('reset-view');
        if (resetViewBtn) {
            resetViewBtn.addEventListener('click', () => {
                this.resetView();
            });
        }
        
        // Tab switching - geliştirilmiş
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const tabName = e.target.getAttribute('data-tab');
                console.log('🔄 Tab button clicked:', tabName);
                
                if (tabName) {
                    this.switchTab(tabName);
                } else {
                    console.log('❌ Tab name not found');
                }
            });
        });
        
        // Building buttons - basitleştirilmiş
        document.querySelectorAll('.build-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('🏗️ Build button clicked!');
                
                const buildingCard = e.target.closest('.building-card');
                if (!buildingCard) {
                    console.log('❌ Building card not found');
                    return;
                }
                
                const buildingType = buildingCard.getAttribute('data-building');
                console.log('🏗️ Building type:', buildingType);
                
                if (!buildingType) {
                    console.log('❌ Building type not found');
                    return;
                }
                
                if (!this.gameState || !this.gameState.selectedPlanet) {
                    console.log('❌ No planet selected');
                    this.showNotification('Please select a planet first!');
                    return;
                }
                
                console.log('✅ Calling buildStructure...');
                this.buildStructure(buildingType);
            });
        });
        
        // Research buttons
        document.querySelectorAll('.research-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const researchType = e.target.closest('.research-node').getAttribute('data-research');
                this.startResearch(researchType);
            });
        });
    }
    
    setupPlanetClickHandlers() {
        // Gezegenlere tıklama özelliğini ayarla
        const planets = document.querySelectorAll('.planet');
        console.log('Bulunan gezegen sayısı:', planets.length);
        
        planets.forEach((planet, index) => {
            const planetName = planet.getAttribute('data-planet');
            console.log(`Gezegen ${index + 1}: ${planetName}`);
            
            // Önceki event listener'ları temizle
            planet.replaceWith(planet.cloneNode(true));
            const newPlanet = document.querySelectorAll('.planet')[index];
            
            newPlanet.style.cursor = 'pointer';
            newPlanet.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const clickedPlanetName = newPlanet.getAttribute('data-planet');
                console.log('Gezegene tıklandı:', clickedPlanetName);
                
                if (clickedPlanetName && this.gameState && (this.gameState.currentScreen === 'game' || this.gameState.currentScreen === 'game_interface')) {
                    this.selectPlanet(clickedPlanetName);
                } else {
                    console.log('Tıklama başarısız - Durum:', {
                        planetName: clickedPlanetName,
                        gameState: this.gameState,
                        currentScreen: this.gameState?.currentScreen
                    });
                }
            });
            
            // Hover efektleri
            newPlanet.addEventListener('mouseenter', () => {
                newPlanet.style.transform = 'scale(1.2)';
                newPlanet.style.zIndex = '10';
            });
            
            newPlanet.addEventListener('mouseleave', () => {
                newPlanet.style.transform = 'scale(1)';
                newPlanet.style.zIndex = '5';
            });
        });
        
        // Tab button handler'larını da yeniden kur
        console.log('🔄 Setting up tab handlers...');
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.onclick = null; // Önceki handler'ları temizle
            
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const tabName = e.target.getAttribute('data-tab');
                console.log('🔄 Tab clicked:', tabName);
                
                if (tabName && this.switchTab) {
                    this.switchTab(tabName);
                }
            });
        });
        console.log('✅ Tab handlers setup complete');
    }
    
    startNewGame() {
        console.log('Starting new game...');
        
        this.gameState = {
            currentScreen: 'game_interface',
            selectedPlanet: null,
            resources: {
                oxygen: 1000,
                food: 800,
                energy: 1200,
                materials: 50,
                research: 10
            },
            colonies: {},
            research: {
                completed: [],
                available: ['life-support'],
                locked: ['terraforming', 'fusion-power']
            },
            missions: {
                current: 'launch-preparation',
                completed: [],
                progress: 25
            },
            achievements: [],
            gameSpeed: 1,
            isPaused: false
        };
        
        console.log('Game state initialized:', this.gameState);
        
        this.showScreen('game-interface');
        this.updateUI();
        
        // Gezegen click handler'larını kur
        setTimeout(() => {
            this.setupPlanetClickHandlers();
        }, 200);
        
        this.showNotification('Görev başladı! Gezegenlere tıklayarak keşfet!');
        
        console.log('New game started successfully');
    }
    
    loadGame() {
        const savedGame = localStorage.getItem('solarSystemGame');
        if (savedGame) {
            this.gameState = JSON.parse(savedGame);
            this.showScreen('game-interface');
            this.updateUI();
            this.showNotification('Game loaded successfully!');
        } else {
            this.showNotification('No saved game found!');
        }
    }
    
    saveGame() {
        localStorage.setItem('solarSystemGame', JSON.stringify(this.gameState));
        this.showNotification('Game saved successfully!');
    }
    
    startTutorial() {
        // Show interactive tutorial
        this.showNotification('Tutorial mode coming soon!');
    }
    
    selectPlanet(planetName) {
        console.log('🚀 selectPlanet called with:', planetName);
        
        if (!planetName) {
            console.error('❌ No planet name provided');
            return;
        }
        
        // Check if we're in game mode
        if (this.gameState.currentScreen !== 'game' && this.gameState.currentScreen !== 'game_interface') {
            console.log('❌ Not in game mode, current screen:', this.gameState.currentScreen);
            return;
        }
        
        console.log('✅ Game state valid, proceeding with planet selection');
        this.gameState.selectedPlanet = planetName;
        this.showPlanetDetailView(planetName);
        
        // Show notification
        this.showNotification(`Exploring ${planetName}...`);
        console.log('🔍 Planet selection complete');
    }
    
    showPlanetDetailView(planetName) {
        console.log('🔍 showPlanetDetailView called with:', planetName);
        
        const planetData = planetsData[planetName];
        if (!planetData) {
            console.error('❌ Planet data not found for:', planetName);
            this.showNotification('Planet data not available!');
            return;
        }
        
        console.log('✅ Planet data found:', planetData.name);
        
        // Update planet information
        const planetNameEl = document.getElementById('planet-name');
        const planetDiameterEl = document.getElementById('planet-diameter');
        const planetGravityEl = document.getElementById('planet-gravity');
        const planetTemperatureEl = document.getElementById('planet-temperature');
        const planetAtmosphereEl = document.getElementById('planet-atmosphere');
        
        if (planetNameEl) {
            planetNameEl.textContent = planetData.name;
            console.log('✅ Planet name updated:', planetData.name);
        }
        if (planetDiameterEl) planetDiameterEl.textContent = planetData.diameter;
        if (planetGravityEl) planetGravityEl.textContent = planetData.gravity;
        if (planetTemperatureEl) planetTemperatureEl.textContent = planetData.temperature;
        if (planetAtmosphereEl) planetAtmosphereEl.textContent = planetData.atmosphere;
        
        // Update planet visual
        const planetRender = document.getElementById('planet-render');
        if (planetRender) {
            planetRender.className = `planet-render ${planetName}`;
            console.log('✅ Planet render updated');
        }
        
        // Show/hide planet detail view
        const solarSystemView = document.getElementById('solar-system-view');
        const planetDetailView = document.getElementById('planet-detail-view');
        
        console.log('🔍 Views found:', {
            solarSystemView: !!solarSystemView,
            planetDetailView: !!planetDetailView
        });
        
        if (solarSystemView) {
            solarSystemView.classList.add('hidden');
            console.log('✅ Solar system view hidden');
        }
        if (planetDetailView) {
            planetDetailView.classList.remove('hidden');
            console.log('✅ Planet detail view shown');
        }
        
        this.updateColonyInterface(planetName);
        console.log('🔍 Planet detail view setup complete');
    }
    
    closePlanetView() {
        document.getElementById('planet-detail-view').classList.add('hidden');
        document.getElementById('solar-system-view').classList.remove('hidden');
        this.gameState.selectedPlanet = null;
    }
    
    updateColonyInterface(planetName) {
        const colony = this.gameState.colonies[planetName] || {
            buildings: {},
            population: 0,
            established: false
        };
        
        // Update building availability based on research
        this.updateBuildingAvailability();
        
        // Update research tree
        this.updateResearchTree();
        
        // Update missions
        this.updateMissionList();
    }
    
    buildStructure(buildingType) {
        console.log('🏗️ buildStructure called with:', buildingType);
        
        const planetName = this.gameState.selectedPlanet;
        console.log('🏗️ Selected planet:', planetName);
        
        if (!planetName) {
            console.log('❌ No planet selected');
            return;
        }
        
        const cost = this.buildingCosts[buildingType];
        console.log('🏗️ Building cost:', cost);
        
        if (!this.canAfford(cost)) {
            console.log('❌ Cannot afford building');
            this.showNotification('Insufficient resources!');
            return;
        }
        
        console.log('✅ Can afford building, proceeding...');
        
        // Deduct resources
        this.spendResources(cost);
        
        // Add building to colony
        if (!this.gameState.colonies[planetName]) {
            this.gameState.colonies[planetName] = {
                buildings: {},
                population: 0,
                established: false
            };
            console.log('✅ New colony created for', planetName);
        }
        
        const colony = this.gameState.colonies[planetName];
        if (!colony.buildings[buildingType]) {
            colony.buildings[buildingType] = 0;
        }
        colony.buildings[buildingType]++;
        
        console.log(`✅ Built ${buildingType} on ${planetName}. Total: ${colony.buildings[buildingType]}`);
        
        if (!colony.established) {
            colony.established = true;
            this.unlockAchievement('first-colony');
        }
        
        // Tek seferlik kaynak hesaplama - sürekli loop yok
        try {
            console.log('🔄 Calculating one-time resource bonus...');
            const production = calculateResourceYield(planetName, buildingType);
            console.log('✅ Production calculated:', production);
            
            // Sadece tek seferlik bonus ver, sürekli üretim yok
            Object.entries(production).forEach(([resource, amount]) => {
                if (amount > 0) {
                    this.gameState.resources[resource] += Math.floor(amount / 4); // Sadece %25'i tek seferlik bonus
                }
            });
            console.log('✅ One-time bonus applied');
        } catch (error) {
            console.error('❌ Error in resource calculation:', error);
        }
        
        try {
            console.log('🔄 Updating UI...');
            // Sadece temel kaynak güncellemesi
            Object.keys(this.gameState.resources).forEach(resource => {
                const element = document.getElementById(`${resource}-count`);
                if (element) {
                    element.textContent = Math.floor(this.gameState.resources[resource]);
                }
            });
            console.log('✅ UI updated');
        } catch (error) {
            console.error('❌ Error updating UI:', error);
        }
        
        this.showNotification(`${buildingType} built successfully!`);
        console.log('✅ Build process complete');
        
        // Check mission progress
        this.checkMissionProgress();
        
        // Show educational quiz occasionally
        if (Math.random() < 0.3) {
            this.showEducationalQuiz(planetName);
        }
    }
    
    startResearch(researchType) {
        if (!this.gameState.research.available.includes(researchType)) {
            this.showNotification('Research not available!');
            return;
        }
        
        const cost = this.researchCosts[researchType];
        if (!this.canAfford(cost)) {
            this.showNotification('Insufficient research points!');
            return;
        }
        
        this.spendResources(cost);
        
        // Complete research
        this.gameState.research.completed.push(researchType);
        this.gameState.research.available = this.gameState.research.available.filter(r => r !== researchType);
        
        // Unlock new research
        this.unlockNewResearch(researchType);
        
        this.updateUI();
        this.showNotification(`Research completed: ${researchType}!`);
        this.unlockAchievement('researcher');
    }
    
    unlockNewResearch(completedResearch) {
        const unlockMap = {
            'life-support': ['terraforming'],
            'terraforming': ['fusion-power']
        };
        
        const toUnlock = unlockMap[completedResearch];
        if (toUnlock) {
            toUnlock.forEach(research => {
                if (this.gameState.research.locked.includes(research)) {
                    this.gameState.research.locked = this.gameState.research.locked.filter(r => r !== research);
                    this.gameState.research.available.push(research);
                }
            });
        }
    }
    
    canAfford(cost) {
        for (const [resource, amount] of Object.entries(cost)) {
            if (this.gameState.resources[resource] < amount) {
                return false;
            }
        }
        return true;
    }
    
    spendResources(cost) {
        for (const [resource, amount] of Object.entries(cost)) {
            this.gameState.resources[resource] -= amount;
        }
    }
    
    applyResourceProduction(production) {
        for (const [resource, amount] of Object.entries(production)) {
            this.gameState.resources[resource] += amount;
        }
    }
    
    updateUI() {
        // Update resource counters
        Object.keys(this.gameState.resources).forEach(resource => {
            const element = document.getElementById(`${resource}-count`);
            if (element) {
                element.textContent = this.gameState.resources[resource];
            }
        });
        
        // Update mission progress
        const progressBar = document.getElementById('mission-progress-fill');
        if (progressBar) {
            progressBar.style.width = `${this.gameState.missions.progress}%`;
        }
        
        // Update current mission text
        const missionElement = document.getElementById('current-mission');
        if (missionElement) {
            missionElement.textContent = `Current Mission: ${this.gameState.missions.current}`;
        }
    }
    
    updateBuildingAvailability() {
        // Enable/disable building buttons based on resources and research
        document.querySelectorAll('.building-card').forEach(card => {
            const buildingType = card.getAttribute('data-building');
            const cost = this.buildingCosts[buildingType];
            const canAfford = this.canAfford(cost);
            
            const button = card.querySelector('.build-btn');
            button.disabled = !canAfford;
            button.classList.toggle('disabled', !canAfford);
        });
    }
    
    updateResearchTree() {
        document.querySelectorAll('.research-node').forEach(node => {
            const researchType = node.getAttribute('data-research');
            const isAvailable = this.gameState.research.available.includes(researchType);
            const isCompleted = this.gameState.research.completed.includes(researchType);
            const isLocked = this.gameState.research.locked.includes(researchType);
            
            node.classList.toggle('available', isAvailable);
            node.classList.toggle('completed', isCompleted);
            node.classList.toggle('locked', isLocked);
            
            const button = node.querySelector('.research-btn');
            button.disabled = !isAvailable || isCompleted;
            button.textContent = isCompleted ? 'Completed' : isLocked ? 'Locked' : 'Research';
        });
    }
    
    updateMissionList() {
        // Update mission cards based on current progress
        document.querySelectorAll('.mission-card').forEach(card => {
            const missionType = card.getAttribute('data-mission');
            // Add mission update logic here
        });
    }
    
    zoomIn() {
        const container = document.querySelector('.solar-system-container');
        const currentScale = parseFloat(container.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
        const newScale = Math.min(currentScale * 1.2, 3);
        container.style.transform = `translate(-50%, -50%) scale(${newScale})`;
    }
    
    zoomOut() {
        const container = document.querySelector('.solar-system-container');
        const currentScale = parseFloat(container.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
        const newScale = Math.max(currentScale / 1.2, 0.3);
        container.style.transform = `translate(-50%, -50%) scale(${newScale})`;
    }
    
    resetView() {
        const container = document.querySelector('.solar-system-container');
        container.style.transform = 'translate(-50%, -50%) scale(1)';
    }
    
    switchTab(tabName) {
        console.log('🔄 Switching to tab:', tabName);
        
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Remove active class from all tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected tab content
        const targetTab = document.getElementById(`${tabName}-tab`);
        if (targetTab) {
            targetTab.classList.add('active');
            console.log('✅ Tab content shown:', `${tabName}-tab`);
        } else {
            console.log('❌ Tab content not found:', `${tabName}-tab`);
        }
        
        // Add active class to selected tab button
        const targetBtn = document.querySelector(`[data-tab="${tabName}"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
            console.log('✅ Tab button activated');
        } else {
            console.log('❌ Tab button not found');
        }
    }
    
    togglePause() {
        this.gameState.isPaused = !this.gameState.isPaused;
        const pauseBtn = document.getElementById('pause-btn');
        pauseBtn.textContent = this.gameState.isPaused ? '▶️' : '⏸️';
        this.showNotification(this.gameState.isPaused ? 'Game paused' : 'Game resumed');
    }
    
    changeGameSpeed() {
        const speeds = [1, 2, 4];
        const currentIndex = speeds.indexOf(this.gameState.gameSpeed);
        const nextIndex = (currentIndex + 1) % speeds.length;
        this.gameState.gameSpeed = speeds[nextIndex];
        
        const speedBtn = document.getElementById('speed-btn');
        speedBtn.textContent = `${this.gameState.gameSpeed}x`;
        this.showNotification(`Game speed: ${this.gameState.gameSpeed}x`);
    }
    
    returnToMenu() {
        this.saveGame();
        this.showScreen('main-menu');
    }
    
    showScreen(screenId) {
        console.log('Switching to screen:', screenId);
        
        // Hide all screens
        const screens = document.querySelectorAll('.loading-screen, .main-menu, .game-interface');
        screens.forEach(screen => {
            screen.classList.add('hidden');
        });
        
        // Show selected screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.remove('hidden');
            console.log('Screen shown:', screenId);
        } else {
            console.error('Screen not found:', screenId);
        }
        
        this.gameState.currentScreen = screenId.replace('-', '_');
        
        // Eğer game interface gösteriliyorsa, gezegen click handler'larını tekrar kur
        if (screenId === 'game-interface') {
            setTimeout(() => {
                this.setupPlanetClickHandlers();
                console.log('Planet click handlers reinitialized for game interface');
            }, 100);
        }
    }
    
    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            border: 2px solid #4a9eff;
            border-radius: 10px;
            padding: 15px 20px;
            color: white;
            z-index: 2000;
            animation: slideInDown 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutUp 0.3s ease-in forwards';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    unlockAchievement(achievementId) {
        if (!this.gameState.achievements.includes(achievementId)) {
            this.gameState.achievements.push(achievementId);
            this.showAchievementNotification(achievementId);
        }
    }
    
    showAchievementNotification(achievementId) {
        const achievements = {
            'first-colony': {
                title: 'First Steps',
                description: 'Established your first colony'
            },
            'researcher': {
                title: 'Scientist',
                description: 'Completed your first research'
            },
            'explorer': {
                title: 'Explorer',
                description: 'Visited 3 different planets'
            }
        };
        
        const achievement = achievements[achievementId];
        if (!achievement) return;
        
        const notification = document.getElementById('achievement-notification');
        document.getElementById('achievement-title').textContent = achievement.title;
        document.getElementById('achievement-description').textContent = achievement.description;
        
        notification.classList.remove('hidden');
        
        // Hide after 5 seconds
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 5000);
    }
    
    showEducationalQuiz(planetName) {
        const questions = translations[currentLanguage].quizQuestions;
        if (!questions || questions.length === 0) return;
        
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        this.currentQuiz = randomQuestion;
        
        document.getElementById('quiz-question').textContent = randomQuestion.question;
        
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((option, index) => {
            option.textContent = randomQuestion.answers[index];
            option.className = 'quiz-option';
            option.onclick = () => this.answerQuiz(index);
        });
        
        document.getElementById('quiz-modal').classList.remove('hidden');
        document.querySelector('.quiz-result').classList.add('hidden');
        document.querySelector('.question-container').classList.remove('hidden');
    }
    
    answerQuiz(selectedAnswer) {
        const isCorrect = selectedAnswer === this.currentQuiz.correct;
        
        // Show result
        document.querySelector('.question-container').classList.add('hidden');
        document.querySelector('.quiz-result').classList.remove('hidden');
        
        const resultTitle = document.getElementById('quiz-result-title');
        const explanation = document.getElementById('quiz-explanation');
        
        if (isCorrect) {
            resultTitle.textContent = 'Correct!';
            resultTitle.style.color = '#4caf50';
            // Award bonus research points
            this.gameState.resources.research += 5;
        } else {
            resultTitle.textContent = 'Incorrect';
            resultTitle.style.color = '#f44336';
        }
        
        explanation.textContent = this.currentQuiz.explanation;
        this.updateUI();
    }
    
    checkMissionProgress() {
        // Check if current mission objectives are met
        const currentMission = this.gameState.missions.current;
        
        if (currentMission === 'launch-preparation') {
            // Count total buildings across all colonies
            let totalBuildings = 0;
            Object.values(this.gameState.colonies).forEach(colony => {
                Object.values(colony.buildings).forEach(count => {
                    totalBuildings += count;
                });
            });
            
            this.gameState.missions.progress = Math.min(totalBuildings * 25, 100);
            
            if (totalBuildings >= 4) {
                this.completeMission('launch-preparation');
                this.startMission('mars-journey');
            }
        }
    }
    
    completeMission(missionId) {
        this.gameState.missions.completed.push(missionId);
        this.gameState.missions.progress = 0;
        
        // Award mission rewards
        this.gameState.resources.research += 50;
        this.gameState.resources.materials += 100;
        
        this.unlockAchievement('mission-complete');
        this.showNotification(`Mission completed: ${missionId}!`);
    }
    
    startMission(missionId) {
        this.gameState.missions.current = missionId;
        this.showNotification(`New mission started: ${missionId}!`);
    }
    
    startGameLoop() {
        // Game loop'u devre dışı bırak - çok fazla CPU kullanıyor
        console.log('Game loop disabled to prevent freezing');
        
        /* 
        setInterval(() => {
            if (!this.gameState.isPaused && (this.gameState.currentScreen === 'game' || this.gameState.currentScreen === 'game_interface')) {
                this.gameLoop();
            }
        }, 1000 / this.gameState.gameSpeed);
        */
    }
    
    gameLoop() {
        // Resource generation from buildings
        Object.entries(this.gameState.colonies).forEach(([planetName, colony]) => {
            Object.entries(colony.buildings).forEach(([buildingType, count]) => {
                const production = calculateResourceYield(planetName, buildingType);
                Object.entries(production).forEach(([resource, amount]) => {
                    this.gameState.resources[resource] += (amount * count) / 60; // Per second
                });
            });
        });
        
        // Ensure resources don't go negative
        Object.keys(this.gameState.resources).forEach(resource => {
            this.gameState.resources[resource] = Math.max(0, this.gameState.resources[resource]);
        });
        
        this.updateUI();
    }
    
    loadGameData() {
        loadLanguagePreference();
        
        // Load saved game if exists
        const savedGame = localStorage.getItem('solarSystemGame');
        if (savedGame) {
            this.gameState = JSON.parse(savedGame);
        }
    }
    
    changeLanguage(language) {
        console.log('Changing language to:', language);
        
        this.currentLanguage = language;
        
        // Sayfayı yeniden çevir
        this.translatePage();
        
        // UI'yi güncelle  
        this.updateUI();
        
        // Planet handler'larını yeniden kur
        setTimeout(() => {
            this.setupPlanetClickHandlers();
        }, 100);
        
        this.showNotification(this.getTranslation('languageChanged') || 'Language changed!');
    }
}

// Initialize the game when DOM is loaded
let game;
