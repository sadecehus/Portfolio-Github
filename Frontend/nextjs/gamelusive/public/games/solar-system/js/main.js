// Main initialization file for Solar System Settlers
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all game systems
    initializeGame();
});

function initializeGame() {
    // Show loading screen
    showLoadingScreen();
    
    // Initialize managers in sequence
    const initSequence = [
        { name: 'Language System', init: initializeLanguageSystem },
        { name: 'Interface Manager', init: initializeInterfaceManager },
        { name: 'Achievement Manager', init: initializeAchievementManager },
        { name: 'Quiz Manager', init: initializeQuizManager },
        { name: 'Game Engine', init: initializeGameEngine },
        { name: 'Event Listeners', init: setupEventListeners },
        { name: 'Final Setup', init: finalizeSetup }
    ];
    
    let currentStep = 0;
    
    function executeNextStep() {
        if (currentStep >= initSequence.length) {
            completeInitialization();
            return;
        }
        
        const step = initSequence[currentStep];
        updateLoadingProgress(step.name, (currentStep / initSequence.length) * 100);
        
        // Execute step with delay for visual feedback
        setTimeout(() => {
            try {
                step.init();
                currentStep++;
                executeNextStep();
            } catch (error) {
                console.error(`Error initializing ${step.name}:`, error);
                currentStep++;
                executeNextStep();
            }
        }, 200);
    }
    
    executeNextStep();
}

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const gameInterface = document.getElementById('game-interface');
    const mainMenu = document.getElementById('main-menu');
    
    loadingScreen.classList.remove('hidden');
    gameInterface.classList.add('hidden');
    mainMenu.classList.add('hidden');
    
    // Start loading animation
    startLoadingAnimation();
}

function startLoadingAnimation() {
    const rocket = document.querySelector('.rocket');
    const exhaust = document.querySelector('.exhaust');
    const stars = document.querySelector('.stars');
    
    // Animate rocket movement
    let position = 0;
    const rocketAnimation = setInterval(() => {
        position += 0.5;
        if (rocket) {
            rocket.style.transform = `translateY(${Math.sin(position) * 5}px) rotate(${position * 2}deg)`;
        }
        if (exhaust) {
            exhaust.style.height = `${40 + Math.sin(position * 3) * 10}px`;
        }
    }, 50);
    
    // Store animation for cleanup
    window.loadingAnimation = rocketAnimation;
}

function updateLoadingProgress(stepName, progress) {
    const progressBar = document.querySelector('.loading-progress');
    const loadingText = document.querySelector('[data-text="loadingText"]');
    
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
    
    if (loadingText) {
        loadingText.textContent = `Loading ${stepName}...`;
    }
}

function initializeLanguageSystem() {
    // Load language preference
    loadLanguagePreference();
    
    // Set up language change listener
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            if (game && game.changeLanguage) {
                game.changeLanguage(e.target.value);
            } else {
                // Fallback for when game is not yet initialized
                const newLang = e.target.value;
                localStorage.setItem('gameLanguage', newLang);
                
                // Reload if necessary
                if (confirm('Language will change after page reload. Reload now?')) {
                    location.reload();
                }
            }
        });
    }
    
    console.log('✅ Language system initialized');
}

function initializeInterfaceManager() {
    interfaceManager = new InterfaceManager();
    console.log('✅ Interface manager initialized');
}

function initializeAchievementManager() {
    achievementManager = new AchievementManager();
    console.log('✅ Achievement manager initialized');
}

function initializeQuizManager() {
    quizManager = new QuizManager();
    console.log('✅ Quiz manager initialized');
}

function initializeGameEngine() {
    game = new SolarSystemGame();
    
    // Make game globally accessible for debugging
    window.game = game;
    
    // Game tam olarak yüklendikten sonra gezegen click handler'larını tekrar kur
    setTimeout(() => {
        if (game && game.setupPlanetClickHandlers) {
            game.setupPlanetClickHandlers();
            console.log('✅ Planet click handlers re-initialized');
        }
    }, 500);
    
    console.log('✅ Game engine initialized');
}

function setupEventListeners() {
    // Global event listeners
    setupGlobalKeyboardShortcuts();
    setupWindowEventListeners();
    setupTouchEventListeners();
    
    console.log('✅ Event listeners set up');
}

function setupGlobalKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Global shortcuts that work anywhere
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 's':
                    e.preventDefault();
                    if (game) game.saveGame();
                    break;
                case 'l':
                    e.preventDefault();
                    if (game) game.loadGame();
                    break;
            }
        }
        
        // Function keys
        switch (e.key) {
            case 'F1':
                e.preventDefault();
                showHelpDialog();
                break;
            case 'F11':
                e.preventDefault();
                toggleFullscreen();
                break;
        }
    });
}

function setupWindowEventListeners() {
    // Handle window resize
    window.addEventListener('resize', () => {
        if (interfaceManager) {
            interfaceManager.adjustLayoutForScreenSize();
        }
    });
    
    // Handle window focus/blur for game pause
    document.addEventListener('visibilitychange', () => {
        if (game && game.gameState.currentScreen === 'game') {
            if (document.hidden) {
                // Pause game when window is not visible
                game.gameState.wasPlayingBeforeHidden = !game.gameState.isPaused;
                if (!game.gameState.isPaused) {
                    game.togglePause();
                }
            } else {
                // Resume game if it was playing before
                if (game.gameState.wasPlayingBeforeHidden && game.gameState.isPaused) {
                    game.togglePause();
                }
            }
        }
    });
    
    // Handle before unload to save game
    window.addEventListener('beforeunload', (e) => {
        if (game) {
            game.saveGame();
        }
    });
}

function setupTouchEventListeners() {
    // Touch support for mobile devices
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Handle swipe gestures
        if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
            handleSwipeGesture(deltaX, deltaY);
        }
    }, { passive: true });
}

function handleSwipeGesture(deltaX, deltaY) {
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 0) {
            // Swipe right
            handleSwipeRight();
        } else {
            // Swipe left
            handleSwipeLeft();
        }
    } else {
        // Vertical swipe
        if (deltaY > 0) {
            // Swipe down
            handleSwipeDown();
        } else {
            // Swipe up
            handleSwipeUp();
        }
    }
}

function handleSwipeRight() {
    // Switch to next tab if in planet view
    if (game && game.gameState.selectedPlanet) {
        const tabs = ['build', 'research', 'missions'];
        const currentTab = interfaceManager.activeTab || 'build';
        const currentIndex = tabs.indexOf(currentTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        game.switchTab(tabs[nextIndex]);
    }
}

function handleSwipeLeft() {
    // Switch to previous tab if in planet view
    if (game && game.gameState.selectedPlanet) {
        const tabs = ['build', 'research', 'missions'];
        const currentTab = interfaceManager.activeTab || 'build';
        const currentIndex = tabs.indexOf(currentTab);
        const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        game.switchTab(tabs[prevIndex]);
    }
}

function handleSwipeDown() {
    // Close current modal or return to previous view
    if (game && game.gameState.selectedPlanet) {
        game.closePlanetView();
    }
}

function handleSwipeUp() {
    // Open help or info panel
    showHelpDialog();
}

function finalizeSetup() {
    // Add tooltips to UI elements
    if (interfaceManager) {
        interfaceManager.addTooltips();
    }
    
    // Set up additional planet click handlers as backup
    setupPlanetClickHandlers();
    
    // Set up periodic auto-save
    setInterval(() => {
        if (game && game.gameState.currentScreen === 'game') {
            game.saveGame();
        }
    }, 60000); // Auto-save every minute
    
    console.log('✅ Final setup completed');
}

function setupPlanetClickHandlers() {
    // Backup planet click handlers
    setTimeout(() => {
        const planets = document.querySelectorAll('.planet');
        console.log('Setting up planet click handlers for', planets.length, 'planets');
        
        planets.forEach((planet, index) => {
            planet.style.cursor = 'pointer';
            
            // Remove existing listeners to avoid duplicates
            planet.onclick = null;
            
            // Ana click handler
            planet.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Planet clicked (backup handler):', e.target);
                
                let planetName = e.target.getAttribute('data-planet');
                if (!planetName) {
                    const planetElement = e.target.closest('[data-planet]');
                    if (planetElement) {
                        planetName = planetElement.getAttribute('data-planet');
                    }
                }
                
                console.log('Planet name found:', planetName);
                
                if (planetName && game && game.gameState && (game.gameState.currentScreen === 'game' || game.gameState.currentScreen === 'game_interface')) {
                    console.log('Calling selectPlanet with:', planetName);
                    try {
                        game.selectPlanet(planetName);
                    } catch (error) {
                        console.error('Error selecting planet:', error);
                        // Alternatif yöntem - direkt olarak gezegen görünümünü aç
                        if (game.showPlanetDetailView) {
                            game.showPlanetDetailView(planetName);
                        }
                    }
                } else {
                    console.log('Planet click failed:', { 
                        planetName, 
                        gameExists: !!game, 
                        gameState: !!game?.gameState,
                        currentScreen: game?.gameState?.currentScreen 
                    });
                    
                    // Acil durum handler - oyun state'i doğru değilse yeniden başlat
                    if (game && !game.gameState) {
                        console.log('Game state missing, reinitializing...');
                        game.startNewGame();
                    }
                }
            });
            
            // Hover effects
            planet.addEventListener('mouseenter', () => {
                planet.style.transform = 'scale(1.1)';
                planet.style.transition = 'transform 0.2s ease';
                planet.style.zIndex = '10';
                planet.style.filter = 'brightness(1.2)';
            });
            
            planet.addEventListener('mouseleave', () => {
                planet.style.transform = 'scale(1)';
                planet.style.zIndex = '5';
                planet.style.filter = 'brightness(1)';
            });
        });
        
        console.log('✅ Planet click handlers set up for', planets.length, 'planets');
    }, 1000);
}

function completeInitialization() {
    // Stop loading animation
    if (window.loadingAnimation) {
        clearInterval(window.loadingAnimation);
    }
    
    // Update loading to 100%
    updateLoadingProgress('Complete', 100);
    
    // Show completion message
    setTimeout(() => {
        const loadingText = document.querySelector('[data-text="loadingText"]');
        if (loadingText) {
            loadingText.textContent = 'Ready for launch!';
        }
        
        // Transition to main menu after brief delay
        setTimeout(() => {
            showMainMenu();
        }, 1000);
    }, 500);
    
    console.log('🚀 Solar System Settlers initialized successfully!');
}

function showMainMenu() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainMenu = document.getElementById('main-menu');
    
    if (interfaceManager) {
        interfaceManager.animateScreenTransition('loading-screen', 'main-menu');
    } else {
        loadingScreen.classList.add('hidden');
        mainMenu.classList.remove('hidden');
    }
    
    // Start background animations
    startBackgroundAnimations();
}

function startBackgroundAnimations() {
    // Animate planets in menu background
    const planets = document.querySelectorAll('.planet');
    planets.forEach((planet, index) => {
        planet.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Create shooting stars
    createShootingStars();
}

function createShootingStars() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every interval
            createShootingStar();
        }
    }, 3000);
}

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 50}%;
        animation: shootingStar 2s linear forwards;
        box-shadow: 0 0 6px #fff;
    `;
    
    const container = document.querySelector('.stars') || document.body;
    container.appendChild(star);
    
    // Add shooting star animation if not already added
    if (!document.querySelector('#shooting-star-styles')) {
        const style = document.createElement('style');
        style.id = 'shooting-star-styles';
        style.textContent = `
            @keyframes shootingStar {
                0% {
                    opacity: 0;
                    transform: translateX(0) translateY(0);
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                    transform: translateX(300px) translateY(150px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove star after animation
    setTimeout(() => {
        if (container.contains(star)) {
            container.removeChild(star);
        }
    }, 2000);
}

function showHelpDialog() {
    // Create help modal if it doesn't exist
    if (!document.getElementById('help-modal')) {
        createHelpModal();
    }
    
    document.getElementById('help-modal').classList.remove('hidden');
}

function createHelpModal() {
    const helpModal = document.createElement('div');
    helpModal.id = 'help-modal';
    helpModal.className = 'quiz-modal';
    helpModal.innerHTML = `
        <div class="quiz-content">
            <div class="quiz-header">
                <h3>Game Help</h3>
                <button id="close-help" class="close-btn">✖</button>
            </div>
            <div class="quiz-body">
                <h4>🎮 Controls</h4>
                <ul>
                    <li><strong>Space:</strong> Pause/Resume game</li>
                    <li><strong>1-3:</strong> Switch tabs in planet view</li>
                    <li><strong>+/-:</strong> Zoom in/out</li>
                    <li><strong>0:</strong> Reset zoom</li>
                    <li><strong>Ctrl+S:</strong> Save game</li>
                    <li><strong>ESC:</strong> Close modals</li>
                </ul>
                
                <h4>🚀 Getting Started</h4>
                <ol>
                    <li>Click on planets to explore them</li>
                    <li>Build habitats and labs to establish colonies</li>
                    <li>Research new technologies</li>
                    <li>Complete missions to progress</li>
                    <li>Answer quizzes to learn about space!</li>
                </ol>
                
                <h4>📚 Learning Tips</h4>
                <ul>
                    <li>Quiz questions teach real space science</li>
                    <li>Planet data is based on NASA information</li>
                    <li>Each planet has unique challenges</li>
                    <li>Research unlocks new possibilities</li>
                </ul>
            </div>
        </div>
    `;
    
    document.body.appendChild(helpModal);
    
    // Add close event listener
    document.getElementById('close-help').addEventListener('click', () => {
        helpModal.classList.add('hidden');
    });
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Global error handler
window.addEventListener('error', (e) => {
    console.error('Game Error:', e.error);
    
    // Show user-friendly error message
    if (game) {
        game.showNotification('An error occurred. Progress has been saved.');
        game.saveGame();
    }
});

// Debug functions for development
window.debugFunctions = {
    unlockAllAchievements: () => {
        if (achievementManager) {
            achievementManager.unlockAllAchievements();
        }
    },
    
    addResources: (amount = 1000) => {
        if (game) {
            Object.keys(game.gameState.resources).forEach(resource => {
                game.gameState.resources[resource] += amount;
            });
            game.updateUI();
        }
    },
    
    showQuiz: (planetName) => {
        if (quizManager) {
            quizManager.showRandomQuiz(planetName);
        }
    },
    
    resetGame: () => {
        localStorage.removeItem('solarSystemGame');
        localStorage.removeItem('solarSystemAchievements');
        localStorage.removeItem('solarSystemQuizProgress');
        location.reload();
    }
};

console.log('🌟 Solar System Settlers - Educational Space Game');
console.log('Debug functions available in window.debugFunctions');
console.log('Press F1 for help, F11 for fullscreen');
