// Basit Solar System Game - Donmayan Versiyon
class SimpleSolarGame {
    constructor() {
        // Language support
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
        
        this.gameState = {
            currentScreen: 'loading',
            selectedPlanet: null,
            playerLevel: 1,
            experience: 0,
            exploredPlanets: [],
            completedMissions: [],
            unlockedResearch: [],
            achievements: [],
            colonies: {} // planetName: { buildings: [], level: 1, population: 0 }
        };
        
        // Basit building sistemi - süre tabanlı değil
        this.buildingTypes = {
            habitat: {
                name: 'Habitat',
                icon: '🏠',
                cost: { level: 1, experience: 30 }, // Level 1 için uygun
                effect: 'Increases colony population by 10'
            },
            lab: {
                name: 'Laboratory', 
                icon: '🔬',
                cost: { level: 2, experience: 80 }, // Level 2 için uygun (150 XP)
                effect: 'Unlocks new research options'
            },
            greenhouse: {
                name: 'Greenhouse',
                icon: '🌱', 
                cost: { level: 1, experience: 40 }, // Level 1 için uygun
                effect: 'Provides food for 25 colonists'
            },
            factory: {
                name: 'Factory',
                icon: '🏭',
                cost: { level: 3, experience: 200 }, // Level 3 için uygun (400 XP)
                effect: 'Produces advanced materials'
            },
            observatory: {
                name: 'Observatory',
                icon: '🔭',
                cost: { level: 2, experience: 100 }, // Level 2 için uygun
                effect: 'Discovers new planets'
            }
        };
        
        // Basit research sistemi
        this.researchOptions = {
            'basic-life-support': {
                name: 'Basic Life Support',
                icon: '💨',
                cost: { labs: 1 },
                unlocks: ['Advanced habitats'],
                completed: false
            },
            'terraforming': {
                name: 'Terraforming',
                icon: '🌍',
                cost: { labs: 2, observatories: 1 },
                unlocks: ['Planetary transformation'],
                completed: false
            },
            'space-travel': {
                name: 'Advanced Space Travel', 
                icon: '🚀',
                cost: { labs: 3, factories: 1 },
                unlocks: ['Faster planet exploration'],
                completed: false
            }
        };
        
        // Gelişmiş mission sistemi - Oyun akışını yönlendiren aşamalı görevler
        this.missions = {
            'welcome': {
                name: '🚀 Welcome to Space!',
                description: 'Explore your first planet to begin your space journey',
                planet: 'Any planet',
                requirement: { exploredPlanets: 1 },
                reward: { experience: 100 },
                completed: false,
                guide: 'Click on any planet (Mars recommended) to explore it',
                order: 1
            },
            'first-colony': {
                name: '🏠 First Settlement',
                description: 'Build your first habitat on Mars to establish a colony',
                planet: 'Mars',
                requirement: { habitats: 1, onPlanet: 'mars' },
                reward: { experience: 300 },
                completed: false,
                guide: 'Go to Mars → Build Tab → Build Habitat (30 XP, Level 1)',
                order: 2
            },
            'power-up': {
                name: '⚡ Reach Level 2',
                description: 'Gain enough experience to reach Level 2',
                planet: 'Progress',
                requirement: { playerLevel: 2 },
                reward: { experience: 200 },
                completed: false,
                guide: 'Explore more planets and build habitats to gain XP',
                order: 3
            },
            'scientist': {
                name: '🔬 Become a Scientist',
                description: 'Build a laboratory and complete your first research',
                planet: 'Any planet',
                requirement: { labs: 1, research: 1 },
                reward: { experience: 500 },
                completed: false,
                guide: 'Build Lab (80 XP, Level 2) → Research Tab → Complete Basic Life Support',
                order: 4
            },
            'explorer': {
                name: '🌍 Multi-Planet Explorer',
                description: 'Explore 4 different planets to expand your knowledge',
                planet: 'Multiple planets',
                requirement: { exploredPlanets: 4 },
                reward: { experience: 400 },
                completed: false,
                guide: 'Click on Mercury, Venus, Earth, Mars, Jupiter to explore them',
                order: 5
            },
            'level-up': {
                name: '⭐ Reach Level 3',
                description: 'Continue growing to reach Level 3',
                planet: 'Progress',
                requirement: { playerLevel: 3 },
                reward: { experience: 300 },
                completed: false,
                guide: 'Complete missions and build more structures',
                order: 6
            },
            'industrial': {
                name: '🏭 Industrial Growth',
                description: 'Build a factory on Jupiter to start advanced manufacturing',
                planet: 'Jupiter',
                requirement: { factories: 1, onPlanet: 'jupiter' },
                reward: { experience: 800 },
                completed: false,
                guide: 'Reach Level 3 → Go to Jupiter → Build Tab → Build Factory (200 XP, Level 3)',
                order: 7
            },
            'astronomer': {
                name: '🔭 Space Observer',
                description: 'Build an observatory to study distant worlds',
                planet: 'Any planet',
                requirement: { observatories: 1 },
                reward: { experience: 600 },
                completed: false,
                guide: 'Build Observatory (100 XP, Level 2) on any planet',
                order: 8
            },
            'mega-explorer': {
                name: '🌌 Solar System Master',
                description: 'Explore all 8 planets in the solar system',
                planet: 'All planets',
                requirement: { exploredPlanets: 8 },
                reward: { experience: 1000 },
                completed: false,
                guide: 'Visit Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune',
                order: 9
            },
            'empire-builder': {
                name: '🏛️ Space Empire',
                description: 'Build 10 structures across your colonies',
                planet: 'Multiple planets',
                requirement: { totalBuildings: 10 },
                reward: { experience: 1200 },
                completed: false,
                guide: 'Build habitats, labs, factories, observatories on different planets',
                order: 10
            },
            'mars-colonist': {
                name: '🔴 Mars Specialist',
                description: 'Build 3 different types of buildings on Mars',
                planet: 'Mars',
                requirement: { buildingTypesOnPlanet: { mars: 3 } },
                reward: { experience: 700 },
                completed: false,
                guide: 'Build habitat, lab, and factory/observatory on Mars',
                order: 11
            },
            'researcher': {
                name: '🧪 Advanced Researcher',
                description: 'Complete 3 different research projects',
                planet: 'Any planet',
                requirement: { research: 3 },
                reward: { experience: 900 },
                completed: false,
                guide: 'Complete Basic Life Support, Hydroponics, and another research',
                order: 12
            },
            'level-master': {
                name: '🏆 Level 4 Achievement',
                description: 'Reach the challenging Level 4',
                planet: 'Progress',
                requirement: { playerLevel: 4 },
                reward: { experience: 500 },
                completed: false,
                guide: 'Continue building and completing missions to gain 400 XP',
                order: 13
            },
            'earth-guardian': {
                name: '🌍 Earth Guardian',
                description: 'Build 2 habitats on Earth to protect our home planet',
                planet: 'Earth',
                requirement: { habitatsOnPlanet: { earth: 2 } },
                reward: { experience: 600 },
                completed: false,
                guide: 'Go to Earth → Build 2 Habitats',
                order: 14
            },
            'jupiter-industrial': {
                name: '🪐 Jupiter Industrial Complex',
                description: 'Build 2 factories on Jupiter for gas giant mining',
                planet: 'Jupiter',
                requirement: { factoriesOnPlanet: { jupiter: 2 } },
                reward: { experience: 1000 },
                completed: false,
                guide: 'Build 2 Factories on Jupiter (Need Level 3)',
                order: 15
            },
            'venus-explorer': {
                name: '🔥 Venus Pioneer',
                description: 'Establish a research base on Venus with lab and observatory',
                planet: 'Venus',
                requirement: { labsOnPlanet: { venus: 1 }, observatoriesOnPlanet: { venus: 1 } },
                reward: { experience: 800 },
                completed: false,
                guide: 'Build Lab and Observatory on Venus',
                order: 16
            },
            'mercury-miner': {
                name: '☀️ Mercury Solar Harvester',
                description: 'Build 3 habitats on Mercury to harness solar energy',
                planet: 'Mercury',
                requirement: { habitatsOnPlanet: { mercury: 3 } },
                reward: { experience: 900 },
                completed: false,
                guide: 'Build 3 Habitats on Mercury',
                order: 17
            },
            'outer-explorer': {
                name: '🌌 Outer Planets Explorer',
                description: 'Explore all outer planets: Jupiter, Saturn, Uranus, Neptune',
                planet: 'Outer planets',
                requirement: { outerPlanetsExplored: 4 },
                reward: { experience: 800 },
                completed: false,
                guide: 'Visit Jupiter, Saturn, Uranus, and Neptune',
                order: 18
            },
            'level-elite': {
                name: '⚡ Level 5 Elite',
                description: 'Reach the elite Level 5 (1000 XP required)',
                planet: 'Progress',
                requirement: { playerLevel: 5 },
                reward: { experience: 1000 },
                completed: false,
                guide: 'Complete challenging missions and build advanced structures',
                order: 19
            },
            'saturn-rings': {
                name: '💍 Saturn Ring Station',
                description: 'Build an observatory on Saturn to study its rings',
                planet: 'Saturn',
                requirement: { observatoriesOnPlanet: { saturn: 1 } },
                reward: { experience: 700 },
                completed: false,
                guide: 'Build Observatory on Saturn',
                order: 20
            },
            'uranus-research': {
                name: '🧊 Uranus Ice Research',
                description: 'Build lab and factory on Uranus for ice mining research',
                planet: 'Uranus',
                requirement: { labsOnPlanet: { uranus: 1 }, factoriesOnPlanet: { uranus: 1 } },
                reward: { experience: 1100 },
                completed: false,
                guide: 'Build Lab and Factory on Uranus',
                order: 21
            },
            'neptune-outpost': {
                name: '🌊 Neptune Deep Space Outpost',
                description: 'Establish a complete outpost on Neptune with all building types',
                planet: 'Neptune',
                requirement: { buildingTypesOnPlanet: { neptune: 4 } },
                reward: { experience: 1500 },
                completed: false,
                guide: 'Build Habitat, Lab, Factory, and Observatory on Neptune',
                order: 22
            },
            'multi-colony': {
                name: '🌍 Multi-Planet Colonies',
                description: 'Establish colonies (habitats) on 5 different planets',
                planet: 'Multiple planets',
                requirement: { planetsWithHabitats: 5 },
                reward: { experience: 1200 },
                completed: false,
                guide: 'Build at least 1 habitat on 5 different planets',
                order: 23
            },
            'research-network': {
                name: '🔬 Research Network',
                description: 'Build laboratories on 4 different planets',
                planet: 'Multiple planets',
                requirement: { planetsWithLabs: 4 },
                reward: { experience: 1000 },
                completed: false,
                guide: 'Build labs on 4 different planets to create research network',
                order: 24
            },
            'industrial-empire': {
                name: '🏭 Industrial Empire',
                description: 'Build factories on 3 different planets',
                planet: 'Multiple planets',
                requirement: { planetsWithFactories: 3 },
                reward: { experience: 1300 },
                completed: false,
                guide: 'Build factories on 3 different planets (Need Level 3)',
                order: 25
            },
            'observatory-network': {
                name: '🔭 Deep Space Observatory Network',
                description: 'Build observatories on 4 different planets',
                planet: 'Multiple planets',
                requirement: { planetsWithObservatories: 4 },
                reward: { experience: 1100 },
                completed: false,
                guide: 'Build observatories on 4 different planets',
                order: 26
            },
            'mega-builder': {
                name: '🏗️ Mega Builder',
                description: 'Build 25 total structures across all planets',
                planet: 'All planets',
                requirement: { totalBuildings: 25 },
                reward: { experience: 2000 },
                completed: false,
                guide: 'Build 25 structures total across all planets',
                order: 27
            },
            'research-master': {
                name: '🧬 Research Master',
                description: 'Complete 5 different research projects',
                planet: 'Any planet',
                requirement: { research: 5 },
                reward: { experience: 1500 },
                completed: false,
                guide: 'Complete 5 different research projects using labs',
                order: 28
            },
            'solar-system-emperor': {
                name: '👑 Solar System Emperor',
                description: 'Reach Level 6 and truly master space colonization',
                planet: 'Progress',
                requirement: { playerLevel: 6 },
                reward: { experience: 2000 },
                completed: false,
                guide: 'Complete many missions and build extensively to reach Level 6',
                order: 29
            },
            'ultimate-explorer': {
                name: '🌌 Ultimate Space Explorer',
                description: 'Complete 20 missions to become the ultimate explorer',
                planet: 'Achievement',
                requirement: { completedMissions: 20 },
                reward: { experience: 3000 },
                completed: false,
                guide: 'Complete 20 different missions to achieve ultimate explorer status',
                order: 30
            }
        };
        
        this.setupEventListeners();
        this.setupTabs();
        
        // Initialize language system
        setTimeout(() => {
            this.loadLanguagePreference();
        }, 200);
        
        console.log('✅ Simple Solar Game initialized');
    }

    setupEventListeners() {
        // Planet click handlers - TÜM GEZEGENLERİ TıKLANABILIR YAP
        setTimeout(() => {
            const planetConfigs = [
                { name: 'mercury', selector: '.planet.mercury' },
                { name: 'venus', selector: '.planet.venus' },
                { name: 'earth', selector: '.planet.earth' },
                { name: 'mars', selector: '.planet.mars' },
                { name: 'jupiter', selector: '.planet.jupiter' },
                { name: 'saturn', selector: '.planet.saturn' },
                { name: 'uranus', selector: '.planet.uranus' },
                { name: 'neptune', selector: '.planet.neptune' }
            ];
            
            console.log('🔍 Setting up planet click handlers...');
            
            planetConfigs.forEach(config => {
                const planet = document.querySelector(config.selector);
                
                if (planet) {
                    console.log(`Found planet: ${config.name}`, planet);
                    
                    // Planet setup
                    planet.setAttribute('data-planet', config.name);
                    planet.style.cursor = 'pointer';
                    planet.style.pointerEvents = 'auto';
                    planet.style.zIndex = '10'; // Tıklanabilirlik için üstte
                    
                    // Remove existing event listeners
                    planet.onclick = null;
                    
                    // Add click event
                    planet.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        console.log(`🌍 ${config.name.toUpperCase()} gezegeni tıklandı!`);
                        this.explorePlanet(config.name);
                    });
                    
                    // Add hover effect
                    planet.addEventListener('mouseenter', () => {
                        planet.style.transform = 'scale(1.1)';
                        planet.style.transition = 'transform 0.2s ease';
                        planet.style.boxShadow = '0 0 15px rgba(74, 158, 255, 0.8)';
                    });
                    
                    planet.addEventListener('mouseleave', () => {
                        planet.style.transform = 'scale(1)';
                        planet.style.boxShadow = 'none';
                    });
                    
                    // Çocuk elementlere de event delegate et
                    const planetSurface = planet.querySelector('.planet-surface');
                    const planetInfo = planet.querySelector('.planet-info');
                    
                    if (planetSurface) {
                        planetSurface.style.pointerEvents = 'none'; // Parent'a event'i geçir
                    }
                    if (planetInfo) {
                        planetInfo.style.pointerEvents = 'none'; // Parent'a event'i geçir
                    }
                    
                    console.log(`✅ ${config.name} gezegeni tıklanabilir hale getirildi`);
                } else {
                    console.error(`❌ ${config.name} gezegeni bulunamadı! Selector: ${config.selector}`);
                }
            });
            
            console.log('✅ Tüm gezegenler için tıklama kuruldu');
        }, 2000); // Daha uzun bekle DOM'un tam yüklenmesi için
        
        // Planet navigation menu event listeners
        setTimeout(() => {
            const planetNavItems = document.querySelectorAll('.planet-nav-item');
            
            planetNavItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    const planetName = item.getAttribute('data-planet');
                    console.log(`🌍 Navigation: ${planetName.toUpperCase()} clicked!`);
                    this.explorePlanet(planetName);
                });
            });
            
            console.log('✅ Planet navigation menu setup complete');
        }, 2100);
        
        // Close planet view
        const closeBtn = document.getElementById('close-planet-view');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closePlanetView());
        }
        
        // Menu buttons
        const newGameBtn = document.getElementById('new-game-btn');
        if (newGameBtn) {
            newGameBtn.addEventListener('click', () => this.startNewGame());
        }
        
        // Zoom controls
        const zoomInBtn = document.getElementById('zoom-in');
        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', () => this.zoomIn());
        }
        
        const zoomOutBtn = document.getElementById('zoom-out');
        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', () => this.zoomOut());
        }
        
        const resetViewBtn = document.getElementById('reset-view');
        if (resetViewBtn) {
            resetViewBtn.addEventListener('click', () => this.resetView());
        }
        
        // Missions button
        this.createMissionsButton();
    }
    
    startNewGame() {
        this.gameState.currentScreen = 'game_interface';
        this.showScreen('game-interface');
        this.updateUI();
        this.showNotification('🚀 Welcome to Solar System Settlers! Click on planets to explore them.');
    }
    
    explorePlanet(planetName) {
        console.log('🌍 Exploring planet:', planetName);
        
        // Mark as explored
        if (!this.gameState.exploredPlanets.includes(planetName)) {
            this.gameState.exploredPlanets.push(planetName);
            this.addExperience(50); // Increased from 25 to 50
            this.showNotification(`🎉 New planet discovered: ${planetName}! +50 XP`);
        }
        
        // Initialize colony if doesn't exist
        if (!this.gameState.colonies[planetName]) {
            this.gameState.colonies[planetName] = {
                buildings: [],
                level: 1,
                population: 0
            };
        }
        
        this.gameState.selectedPlanet = planetName;
        this.showPlanetView(planetName);
        this.checkMissions();
    }
    
    showPlanetView(planetName) {
        // Update planet info
        const planetData = window.planetsData?.[planetName];
        if (planetData) {
            document.getElementById('planet-name').textContent = planetData.name;
            document.getElementById('planet-diameter').textContent = planetData.diameter;
            document.getElementById('planet-gravity').textContent = planetData.gravity;
            document.getElementById('planet-temperature').textContent = planetData.temperature;
            document.getElementById('planet-atmosphere').textContent = planetData.atmosphere;
        }
        
        // Show views
        document.getElementById('solar-system-view').classList.add('hidden');
        document.getElementById('planet-detail-view').classList.remove('hidden');
        
        // Setup tabs with small delay to ensure DOM is ready
        setTimeout(() => {
            this.setupTabs();
            this.updatePlanetTabs(planetName);
        }, 50);
    }
    
    setupTabs() {
        console.log('🔧 Setting up tabs...');
        const tabButtons = document.querySelectorAll('.tab-btn');
        console.log('📋 Found tab buttons:', tabButtons.length);
        
        tabButtons.forEach(btn => {
            btn.onclick = null;
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const tabName = e.target.getAttribute('data-tab');
                console.log('🔄 Tab clicked:', tabName);
                
                if (tabName) {
                    this.switchTab(tabName);
                }
            });
        });
        
        // İlk tab'ı aktifleştir
        setTimeout(() => {
            this.switchTab('build');
        }, 100);
        
        // Language selector event listener
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
            // Set current language
            languageSelect.value = this.currentLanguage || 'en';
        }
        
        // Load language preference on startup
        this.loadLanguagePreference();
    }
    
    switchTab(tabName) {
        console.log('🔄 Switching to tab:', tabName);
        
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected tab
        const targetTab = document.getElementById(`${tabName}-tab`);
        const targetBtn = document.querySelector(`[data-tab="${tabName}"]`);
        
        if (targetTab) {
            targetTab.classList.add('active');
            console.log('✅ Tab content shown:', `${tabName}-tab`);
        } else {
            console.log('❌ Tab content not found:', `${tabName}-tab`);
        }
        
        if (targetBtn) {
            targetBtn.classList.add('active');
            console.log('✅ Tab button activated');
        } else {
            console.log('❌ Tab button not found');
        }
        
        // Update tab content
        this.updateTabContent(tabName);
    }
    
    updateTabContent(tabName) {
        const planetName = this.gameState.selectedPlanet;
        const colony = this.gameState.colonies[planetName];
        
        if (tabName === 'build') {
            this.updateBuildTab(colony);
        } else if (tabName === 'research') {
            this.updateResearchTab(colony);
        } else if (tabName === 'missions') {
            this.updateMissionsTab();
        }
    }
    
    updateBuildTab(colony) {
        const buildGrid = document.querySelector('.building-grid');
        if (!buildGrid) return;
        
        buildGrid.innerHTML = '';
        
        Object.entries(this.buildingTypes).forEach(([buildingId, building]) => {
            const canBuild = this.canBuildBuilding(buildingId);
            const count = colony.buildings.filter(b => b.type === buildingId).length;
            
            // Artan gereksinimler
            const levelReq = building.cost.level + Math.floor(count / 2);
            const xpReq = building.cost.experience + (count * 50);
            
            const hasLevel = this.gameState.playerLevel >= levelReq;
            const hasXP = this.gameState.experience >= xpReq;
            
            const card = document.createElement('div');
            card.className = `building-card ${canBuild ? '' : 'disabled'}`;
            
            let statusText = '';
            if (!hasLevel) {
                statusText = `❌ Need Level ${levelReq} (Currently ${this.gameState.playerLevel})`;
            } else if (!hasXP) {
                statusText = `❌ Need ${xpReq} XP (Currently ${this.gameState.experience})`;
            } else {
                statusText = '✅ Ready to build!';
            }
            
            card.innerHTML = `
                <div class="building-icon">${building.icon}</div>
                <h4>${building.name}</h4>
                <p class="building-count">Built: ${count}</p>
                <p class="building-cost">Requirements: Level ${levelReq} • ${xpReq} XP</p>
                <p class="building-status" style="color: ${canBuild ? '#4caf50' : '#f44336'}">${statusText}</p>
                <p class="building-effect">${building.effect}</p>
                <button class="build-btn ${canBuild ? '' : 'disabled'}" 
                        onclick="game.buildBuilding('${buildingId}')"
                        ${canBuild ? '' : 'disabled'}>
                    ${canBuild ? 'Build' : 'Locked'}
                </button>
            `;
            buildGrid.appendChild(card);
        });
    }
    
    updateResearchTab(colony) {
        const researchTab = document.getElementById('research-tab');
        if (!researchTab) {
            console.log('❌ Research tab element not found!');
            return;
        }
        
        console.log('🔬 Updating research tab for colony:', colony);
        
        researchTab.innerHTML = '<h3>🔬 Research Projects</h3>';
        
        if (!colony) {
            researchTab.innerHTML += '<p>⚠️ No colony established on this planet!</p>';
            return;
        }
        
        const labCount = colony.buildings.filter(b => b.type === 'lab').length;
        
        if (labCount === 0) {
            researchTab.innerHTML += '<p>🏗️ Build a Laboratory to unlock research options!</p>';
            return;
        }
        
        researchTab.innerHTML += `<p>✅ You have ${labCount} laboratorie(s). Research options available:</p>`;
        
        // Basit research listesi
        const basicResearch = [
            {
                id: 'life-support',
                name: '💨 Basic Life Support',
                description: 'Improve air recycling systems',
                cost: 'Requires: 1 Laboratory',
                completed: this.gameState.unlockedResearch.includes('life-support')
            },
            {
                id: 'hydroponics',
                name: '🌱 Hydroponics',
                description: 'Advanced plant growing techniques',
                cost: 'Requires: 1 Laboratory',
                completed: this.gameState.unlockedResearch.includes('hydroponics')
            },
            {
                id: 'advanced-materials',
                name: '🔧 Advanced Materials',
                description: 'Stronger building materials for harsh environments',
                cost: 'Requires: 1 Laboratory',
                completed: this.gameState.unlockedResearch.includes('advanced-materials')
            },
            {
                id: 'energy-systems',
                name: '⚡ Energy Systems',
                description: 'Improved power generation and storage',
                cost: 'Requires: 1 Laboratory',
                completed: this.gameState.unlockedResearch.includes('energy-systems')
            },
            {
                id: 'terraforming',
                name: '🌍 Terraforming',
                description: 'Technology to transform planetary environments',
                cost: 'Requires: 1 Laboratory',
                completed: this.gameState.unlockedResearch.includes('terraforming')
            }
        ];
        
        basicResearch.forEach(research => {
            const researchDiv = document.createElement('div');
            researchDiv.className = `research-item ${research.completed ? 'completed' : 'available'}`;
            researchDiv.style.cssText = `
                border: 2px solid ${research.completed ? '#4caf50' : '#4a9eff'};
                padding: 15px;
                margin: 10px 0;
                border-radius: 10px;
                background: rgba(255,255,255,0.05);
            `;
            
            researchDiv.innerHTML = `
                <h4>${research.name}</h4>
                <p>${research.description}</p>
                <p><small>${research.cost}</small></p>
                <button onclick="game.doResearch('${research.id}')" 
                        style="background: ${research.completed ? '#4caf50' : '#4a9eff'}; color: white; border: none; padding: 8px 16px; border-radius: 5px; cursor: pointer;"
                        ${research.completed ? 'disabled' : ''}>
                    ${research.completed ? '✅ Completed' : '🔬 Research'}
                </button>
            `;
            
            researchTab.appendChild(researchDiv);
        });
    }
    
    updateMissionsTab() {
        console.log('🎯 Updating missions tab...');
        const missionsTab = document.getElementById('missions-tab');
        if (!missionsTab) {
            console.log('❌ Missions tab element not found!');
            return;
        }
        
        console.log('✅ Missions tab element found, updating content...');
        
        // Get all incomplete missions sorted by order
        const incompleteMissions = Object.entries(this.missions)
            .filter(([id, mission]) => !mission.completed)
            .sort((a, b) => a[1].order - b[1].order);
        
        // Show only first 2 incomplete missions as active
        const activeMissions = incompleteMissions.slice(0, 2);
        
        const completedMissions = Object.entries(this.missions)
            .filter(([id, mission]) => mission.completed)
            .sort((a, b) => a[1].order - b[1].order);
        
        const totalMissions = Object.keys(this.missions).length;
        const completedCount = completedMissions.length;
        
        missionsTab.innerHTML = `
            <h3>🎯 Mission Center</h3>
            <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                <p><strong>📊 Progress:</strong> ${completedCount}/${totalMissions} missions completed</p>
                <p><strong>🎯 Active Missions:</strong> ${activeMissions.length}/2 slots used</p>
            </div>
            <h4>🔥 Active Missions (Maximum 2)</h4>
        `;
        
        console.log('📋 Active missions:', activeMissions.length);
        
        // Display active missions
        activeMissions.forEach(([missionId, mission]) => {
            console.log(`🎯 Processing active mission: ${missionId} - ${mission.name}`);
            const canComplete = this.canCompleteMission(missionId);
            const progress = this.getMissionProgress(missionId);
            
            const missionDiv = document.createElement('div');
            missionDiv.className = `mission-card ${canComplete ? 'available' : 'locked'}`;
            missionDiv.style.cssText = `
                border: 2px solid ${canComplete ? '#ffa726' : '#666'};
                padding: 15px;
                margin: 10px 0;
                border-radius: 10px;
                background: rgba(255,255,255,0.1);
                position: relative;
            `;
            
            missionDiv.innerHTML = `
                <div style="position: absolute; top: 10px; right: 15px; background: #ffa726; color: black; padding: 3px 8px; border-radius: 15px; font-size: 12px; font-weight: bold;">ACTIVE</div>
                <h4>${mission.name}</h4>
                <p><strong>🎯 Goal:</strong> ${mission.description}</p>
                <p><strong>🌍 Location:</strong> ${mission.planet}</p>
                <p><strong>📋 Progress:</strong> ${progress}</p>
                <p><strong>💡 Guide:</strong> ${mission.guide}</p>
                <p><strong>🏆 Reward:</strong> +${mission.reward.experience} XP</p>
                <button class="mission-btn ${canComplete ? '' : 'disabled'}" 
                        onclick="game.completeMission('${missionId}')"
                        style="margin-top: 10px; padding: 10px 20px; border-radius: 5px; border: none; cursor: pointer; background: ${canComplete ? '#ffa726' : '#666'}; color: white;"
                        ${canComplete ? '' : 'disabled'}>
                    ${canComplete ? '✅ Complete Mission' : '🔒 Requirements not met'}
                </button>
            `;
            
            missionsTab.appendChild(missionDiv);
        });
        
        // Show completed missions section
        if (completedMissions.length > 0) {
            const completedHeader = document.createElement('h4');
            completedHeader.innerHTML = `✅ Completed Missions (${completedMissions.length})`;
            completedHeader.style.cssText = 'margin-top: 30px; color: #4caf50;';
            missionsTab.appendChild(completedHeader);
            
            const completedContainer = document.createElement('div');
            completedContainer.style.cssText = 'max-height: 200px; overflow-y: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 10px;';
            
            completedMissions.forEach(([missionId, mission]) => {
                const missionDiv = document.createElement('div');
                missionDiv.style.cssText = `
                    border: 1px solid #4caf50;
                    padding: 10px;
                    margin: 5px 0;
                    border-radius: 8px;
                    background: rgba(76, 175, 80, 0.1);
                    font-size: 14px;
                `;
                
                missionDiv.innerHTML = `
                    <span style="color: #4caf50;">✅</span> <strong>${mission.name}</strong> - ${mission.description}
                `;
                
                completedContainer.appendChild(missionDiv);
            });
            
            missionsTab.appendChild(completedContainer);
        }
        
        // Show next upcoming missions
        if (incompleteMissions.length > 2) {
            const upcomingMissions = incompleteMissions.slice(2, 5); // Show next 3 upcoming
            
            const upcomingHeader = document.createElement('h4');
            upcomingHeader.innerHTML = `🔮 Upcoming Missions`;
            upcomingHeader.style.cssText = 'margin-top: 30px; color: #9e9e9e;';
            missionsTab.appendChild(upcomingHeader);
            
            upcomingMissions.forEach(([missionId, mission]) => {
                const missionDiv = document.createElement('div');
                missionDiv.style.cssText = `
                    border: 1px solid #666;
                    padding: 10px;
                    margin: 5px 0;
                    border-radius: 8px;
                    background: rgba(255,255,255,0.02);
                    opacity: 0.7;
                    font-size: 14px;
                `;
                
                missionDiv.innerHTML = `
                    <span style="color: #9e9e9e;">⏳</span> <strong>${mission.name}</strong> - ${mission.description} 
                    <span style="color: #ffa726;">(+${mission.reward.experience} XP)</span>
                `;
                
                missionsTab.appendChild(missionDiv);
            });
        }
    }
    
    updatePlanetTabs(planetName) {
        const colony = this.gameState.colonies[planetName];
        this.updateBuildTab(colony);
        this.updateResearchTab(colony);
        this.updateMissionsTab();
    }
    
    canBuildBuilding(buildingId) {
        const building = this.buildingTypes[buildingId];
        const planetName = this.gameState.selectedPlanet;
        const colony = this.gameState.colonies[planetName];
        
        // Mevcut bina sayısına göre artan gereksinim
        const currentCount = colony.buildings.filter(b => b.type === buildingId).length;
        const levelRequirement = building.cost.level + Math.floor(currentCount / 2); // Her 2 binada +1 level
        const xpRequirement = building.cost.experience + (currentCount * 50); // Her binada +50 XP
        
        return this.gameState.playerLevel >= levelRequirement && 
               this.gameState.experience >= xpRequirement;
    }
    
    buildBuilding(buildingId) {
        if (!this.canBuildBuilding(buildingId)) return;
        
        const building = this.buildingTypes[buildingId];
        const planetName = this.gameState.selectedPlanet;
        const colony = this.gameState.colonies[planetName];
        
        // XP HARCANMIYOR - sadece gereklilik kontrolü
        // this.gameState.experience -= building.cost.experience; // KALDIRILDI
        
        // Add building
        colony.buildings.push({
            type: buildingId,
            name: building.name,
            built: Date.now()
        });
        
        // Update population based on building type
        if (buildingId === 'habitat') {
            colony.population += 10;
        } else if (buildingId === 'greenhouse') {
            colony.population += 5; // Food for more people
        }
        
        this.addExperience(50); // Increased from 25 to 50 - Building gives XP
        this.showNotification(`🏗️ ${building.name} built successfully! +25 XP`);
        
        this.updateUI();
        this.updatePlanetTabs(planetName);
        this.checkMissions();
    }
    
    canDoResearch(researchId, labs, observatories, factories) {
        const research = this.researchOptions[researchId];
        if (research.completed) return false;
        
        const cost = research.cost;
        return (cost.labs || 0) <= labs && 
               (cost.observatories || 0) <= observatories &&
               (cost.factories || 0) <= factories;
    }
    
    doResearch(researchId) {
        console.log('🔬 Attempting research:', researchId);
        const planetName = this.gameState.selectedPlanet;
        const colony = this.gameState.colonies[planetName];
        
        if (!colony) {
            console.log('❌ No colony found for research');
            return;
        }
        
        const labs = colony.buildings.filter(b => b.type === 'lab').length;
        const obs = colony.buildings.filter(b => b.type === 'observatory').length;
        const fact = colony.buildings.filter(b => b.type === 'factory').length;
        
        console.log(`🏗️ Buildings - Labs: ${labs}, Obs: ${obs}, Fact: ${fact}`);
        
        // Simple requirement: just need 1 lab for basic research
        if (labs < 1) {
            console.log('❌ Need at least 1 laboratory for research');
            this.showNotification('❌ Build a Laboratory first to conduct research!');
            return;
        }
        
        // Check if research already completed
        if (this.gameState.unlockedResearch.includes(researchId)) {
            console.log('❌ Research already completed');
            this.showNotification('❌ This research has already been completed!');
            return;
        }
        
        // Complete the research
        this.gameState.unlockedResearch.push(researchId);
        this.addExperience(150);
        
        console.log('✅ Research completed:', researchId);
        this.showNotification(`🔬 Research completed: ${this.getResearchName(researchId)}! +150 XP`);
        
        this.updateUI();
        this.updatePlanetTabs(planetName);
        this.checkMissions();
    }
    
    getResearchName(researchId) {
        const researchNames = {
            'life-support': '💨 Basic Life Support',
            'hydroponics': '🌱 Hydroponics',
            'advanced-materials': '🔧 Advanced Materials',
            'energy-systems': '⚡ Energy Systems',
            'terraforming': '🌍 Terraforming'
        };
        return researchNames[researchId] || researchId;
    }
    
    getMissionProgress(missionId) {
        const mission = this.missions[missionId];
        const req = mission.requirement;
        let progress = [];
        
        if (req.habitats) {
            const current = Object.values(this.gameState.colonies)
                .reduce((sum, colony) => sum + colony.buildings.filter(b => b.type === 'habitat').length, 0);
            progress.push(`Habitats: ${current}/${req.habitats}`);
        }
        
        if (req.labs) {
            const current = Object.values(this.gameState.colonies)
                .reduce((sum, colony) => sum + colony.buildings.filter(b => b.type === 'lab').length, 0);
            progress.push(`Labs: ${current}/${req.labs}`);
        }
        
        if (req.factories) {
            const current = Object.values(this.gameState.colonies)
                .reduce((sum, colony) => sum + colony.buildings.filter(b => b.type === 'factory').length, 0);
            progress.push(`Factories: ${current}/${req.factories}`);
        }
        
        if (req.observatories) {
            const current = Object.values(this.gameState.colonies)
                .reduce((sum, colony) => sum + colony.buildings.filter(b => b.type === 'observatory').length, 0);
            progress.push(`Observatories: ${current}/${req.observatories}`);
        }
        
        if (req.research) {
            progress.push(`Research: ${this.gameState.unlockedResearch.length}/${req.research}`);
        }
        
        if (req.exploredPlanets) {
            progress.push(`Planets: ${this.gameState.exploredPlanets.length}/${req.exploredPlanets}`);
        }
        
        if (req.playerLevel) {
            progress.push(`Level: ${this.gameState.playerLevel}/${req.playerLevel}`);
        }
        
        if (req.totalBuildings) {
            const current = Object.values(this.gameState.colonies)
                .reduce((sum, colony) => sum + colony.buildings.length, 0);
            progress.push(`Total Buildings: ${current}/${req.totalBuildings}`);
        }
        
        if (req.completedMissions) {
            const current = Object.values(this.missions).filter(m => m.completed).length;
            progress.push(`Completed Missions: ${current}/${req.completedMissions}`);
        }
        
        if (req.outerPlanetsExplored) {
            const outerPlanets = ['jupiter', 'saturn', 'uranus', 'neptune'];
            const current = this.gameState.exploredPlanets.filter(p => outerPlanets.includes(p)).length;
            progress.push(`Outer Planets: ${current}/${req.outerPlanetsExplored}`);
        }
        
        // Planet-specific requirements
        if (req.habitatsOnPlanet) {
            Object.entries(req.habitatsOnPlanet).forEach(([planet, required]) => {
                const colony = this.gameState.colonies[planet];
                const current = colony ? colony.buildings.filter(b => b.type === 'habitat').length : 0;
                progress.push(`${planet.charAt(0).toUpperCase() + planet.slice(1)} Habitats: ${current}/${required}`);
            });
        }
        
        if (req.labsOnPlanet) {
            Object.entries(req.labsOnPlanet).forEach(([planet, required]) => {
                const colony = this.gameState.colonies[planet];
                const current = colony ? colony.buildings.filter(b => b.type === 'lab').length : 0;
                progress.push(`${planet.charAt(0).toUpperCase() + planet.slice(1)} Labs: ${current}/${required}`);
            });
        }
        
        if (req.factoriesOnPlanet) {
            Object.entries(req.factoriesOnPlanet).forEach(([planet, required]) => {
                const colony = this.gameState.colonies[planet];
                const current = colony ? colony.buildings.filter(b => b.type === 'factory').length : 0;
                progress.push(`${planet.charAt(0).toUpperCase() + planet.slice(1)} Factories: ${current}/${required}`);
            });
        }
        
        if (req.observatoriesOnPlanet) {
            Object.entries(req.observatoriesOnPlanet).forEach(([planet, required]) => {
                const colony = this.gameState.colonies[planet];
                const current = colony ? colony.buildings.filter(b => b.type === 'observatory').length : 0;
                progress.push(`${planet.charAt(0).toUpperCase() + planet.slice(1)} Observatories: ${current}/${required}`);
            });
        }
        
        if (req.buildingTypesOnPlanet) {
            Object.entries(req.buildingTypesOnPlanet).forEach(([planet, required]) => {
                const colony = this.gameState.colonies[planet];
                const uniqueTypes = colony ? [...new Set(colony.buildings.map(b => b.type))].length : 0;
                progress.push(`${planet.charAt(0).toUpperCase() + planet.slice(1)} Building Types: ${uniqueTypes}/${required}`);
            });
        }
        
        if (req.planetsWithHabitats) {
            const current = Object.keys(this.gameState.colonies)
                .filter(planet => this.gameState.colonies[planet].buildings.some(b => b.type === 'habitat')).length;
            progress.push(`Planets with Habitats: ${current}/${req.planetsWithHabitats}`);
        }
        
        if (req.planetsWithLabs) {
            const current = Object.keys(this.gameState.colonies)
                .filter(planet => this.gameState.colonies[planet].buildings.some(b => b.type === 'lab')).length;
            progress.push(`Planets with Labs: ${current}/${req.planetsWithLabs}`);
        }
        
        if (req.planetsWithFactories) {
            const current = Object.keys(this.gameState.colonies)
                .filter(planet => this.gameState.colonies[planet].buildings.some(b => b.type === 'factory')).length;
            progress.push(`Planets with Factories: ${current}/${req.planetsWithFactories}`);
        }
        
        if (req.planetsWithObservatories) {
            const current = Object.keys(this.gameState.colonies)
                .filter(planet => this.gameState.colonies[planet].buildings.some(b => b.type === 'observatory')).length;
            progress.push(`Planets with Observatories: ${current}/${req.planetsWithObservatories}`);
        }
        
        if (req.onPlanet) {
            const planetColony = this.gameState.colonies[req.onPlanet];
            const hasBuilding = planetColony && planetColony.buildings.length > 0;
            progress.push(`On ${req.onPlanet.charAt(0).toUpperCase() + req.onPlanet.slice(1)}: ${hasBuilding ? '✅' : '❌'}`);
        }
        
        return progress.join(' • ');
    }
    
    canCompleteMission(missionId) {
        const mission = this.missions[missionId];
        if (mission.completed) return false;
        
        const req = mission.requirement;
        
        // Player level requirement
        if (req.playerLevel && this.gameState.playerLevel < req.playerLevel) {
            return false;
        }
        
        // Explored planets requirement
        if (req.exploredPlanets && this.gameState.exploredPlanets.length < req.exploredPlanets) {
            return false;
        }
        
        // Outer planets explored requirement
        if (req.outerPlanetsExplored) {
            const outerPlanets = ['jupiter', 'saturn', 'uranus', 'neptune'];
            const current = this.gameState.exploredPlanets.filter(p => outerPlanets.includes(p)).length;
            if (current < req.outerPlanetsExplored) return false;
        }
        
        // Completed missions requirement
        if (req.completedMissions) {
            const current = Object.values(this.missions).filter(m => m.completed).length;
            if (current < req.completedMissions) return false;
        }
        
        // Total buildings requirement
        if (req.totalBuildings) {
            const totalBuildings = Object.values(this.gameState.colonies)
                .reduce((sum, colony) => sum + colony.buildings.length, 0);
            if (totalBuildings < req.totalBuildings) return false;
        }
        
        // Research requirement
        if (req.research && this.gameState.unlockedResearch.length < req.research) {
            return false;
        }
        
        // Planet-specific habitat requirements
        if (req.habitatsOnPlanet) {
            for (const [planet, required] of Object.entries(req.habitatsOnPlanet)) {
                const colony = this.gameState.colonies[planet];
                const current = colony ? colony.buildings.filter(b => b.type === 'habitat').length : 0;
                if (current < required) return false;
            }
        }
        
        // Planet-specific lab requirements
        if (req.labsOnPlanet) {
            for (const [planet, required] of Object.entries(req.labsOnPlanet)) {
                const colony = this.gameState.colonies[planet];
                const current = colony ? colony.buildings.filter(b => b.type === 'lab').length : 0;
                if (current < required) return false;
            }
        }
        
        // Planet-specific factory requirements
        if (req.factoriesOnPlanet) {
            for (const [planet, required] of Object.entries(req.factoriesOnPlanet)) {
                const colony = this.gameState.colonies[planet];
                const current = colony ? colony.buildings.filter(b => b.type === 'factory').length : 0;
                if (current < required) return false;
            }
        }
        
        // Planet-specific observatory requirements
        if (req.observatoriesOnPlanet) {
            for (const [planet, required] of Object.entries(req.observatoriesOnPlanet)) {
                const colony = this.gameState.colonies[planet];
                const current = colony ? colony.buildings.filter(b => b.type === 'observatory').length : 0;
                if (current < required) return false;
            }
        }
        
        // Building types on planet requirement
        if (req.buildingTypesOnPlanet) {
            for (const [planet, required] of Object.entries(req.buildingTypesOnPlanet)) {
                const colony = this.gameState.colonies[planet];
                const uniqueTypes = colony ? [...new Set(colony.buildings.map(b => b.type))].length : 0;
                if (uniqueTypes < required) return false;
            }
        }
        
        // Planets with specific building types
        if (req.planetsWithHabitats) {
            const current = Object.keys(this.gameState.colonies)
                .filter(planet => this.gameState.colonies[planet].buildings.some(b => b.type === 'habitat')).length;
            if (current < req.planetsWithHabitats) return false;
        }
        
        if (req.planetsWithLabs) {
            const current = Object.keys(this.gameState.colonies)
                .filter(planet => this.gameState.colonies[planet].buildings.some(b => b.type === 'lab')).length;
            if (current < req.planetsWithLabs) return false;
        }
        
        if (req.planetsWithFactories) {
            const current = Object.keys(this.gameState.colonies)
                .filter(planet => this.gameState.colonies[planet].buildings.some(b => b.type === 'factory')).length;
            if (current < req.planetsWithFactories) return false;
        }
        
        if (req.planetsWithObservatories) {
            const current = Object.keys(this.gameState.colonies)
                .filter(planet => this.gameState.colonies[planet].buildings.some(b => b.type === 'observatory')).length;
            if (current < req.planetsWithObservatories) return false;
        }
        
        // Legacy single building requirements
        if (req.habitats) {
            let totalHabitats = 0;
            if (req.onPlanet) {
                const planetColony = this.gameState.colonies[req.onPlanet];
                totalHabitats = planetColony ? planetColony.buildings.filter(b => b.type === 'habitat').length : 0;
            } else {
                totalHabitats = Object.values(this.gameState.colonies)
                    .reduce((sum, colony) => sum + colony.buildings.filter(b => b.type === 'habitat').length, 0);
            }
            if (totalHabitats < req.habitats) return false;
        }
        
        if (req.labs) {
            let totalLabs = 0;
            if (req.onPlanet) {
                const planetColony = this.gameState.colonies[req.onPlanet];
                totalLabs = planetColony ? planetColony.buildings.filter(b => b.type === 'lab').length : 0;
            } else {
                totalLabs = Object.values(this.gameState.colonies)
                    .reduce((sum, colony) => sum + colony.buildings.filter(b => b.type === 'lab').length, 0);
            }
            if (totalLabs < req.labs) return false;
        }
        
        if (req.factories) {
            let totalFactories = 0;
            if (req.onPlanet) {
                const planetColony = this.gameState.colonies[req.onPlanet];
                totalFactories = planetColony ? planetColony.buildings.filter(b => b.type === 'factory').length : 0;
            } else {
                totalFactories = Object.values(this.gameState.colonies)
                    .reduce((sum, colony) => sum + colony.buildings.filter(b => b.type === 'factory').length, 0);
            }
            if (totalFactories < req.factories) return false;
        }
        
        if (req.observatories) {
            const totalObs = Object.values(this.gameState.colonies)
                .reduce((sum, colony) => sum + colony.buildings.filter(b => b.type === 'observatory').length, 0);
            if (totalObs < req.observatories) return false;
        }
        
        // Labs requirement
        if (req.labs) {
            let totalLabs = 0;
            if (req.onPlanet) {
                const planetColony = this.gameState.colonies[req.onPlanet];
                totalLabs = planetColony ? planetColony.buildings.filter(b => b.type === 'lab').length : 0;
            } else {
                totalLabs = Object.values(this.gameState.colonies)
                    .reduce((sum, colony) => sum + colony.buildings.filter(b => b.type === 'lab').length, 0);
            }
            if (totalLabs < req.labs) return false;
        }
        
        // Factories requirement
        if (req.factories) {
            let totalFactories = 0;
            if (req.onPlanet) {
                const planetColony = this.gameState.colonies[req.onPlanet];
                totalFactories = planetColony ? planetColony.buildings.filter(b => b.type === 'factory').length : 0;
            } else {
                totalFactories = Object.values(this.gameState.colonies)
                    .reduce((sum, colony) => sum + colony.buildings.filter(b => b.type === 'factory').length, 0);
            }
            if (totalFactories < req.factories) return false;
        }
        
        // Observatories requirement
        if (req.observatories) {
            let totalObservatories = 0;
            totalObservatories = Object.values(this.gameState.colonies)
                .reduce((sum, colony) => sum + colony.buildings.filter(b => b.type === 'observatory').length, 0);
            if (totalObservatories < req.observatories) return false;
        }
        
        // Research requirement
        if (req.research) {
            if (this.gameState.unlockedResearch.length < req.research) return false;
        }
        
        return true;
    }
    
    completeMission(missionId) {
        if (!this.canCompleteMission(missionId)) return;
        
        const mission = this.missions[missionId];
        mission.completed = true;
        this.gameState.completedMissions.push(missionId);
        
        this.addExperience(mission.reward.experience);
        this.showNotification(`🎯 Mission completed: ${mission.name}! +${mission.reward.experience} XP`);
        
        this.updateUI();
        this.updateMissionsTab();
    }
    
    addExperience(amount) {
        this.gameState.experience += amount;
        
        // Level progression: Level 1 = 30 XP, her level giderek zorlaşıyor
        const requiredXP = this.getRequiredXPForLevel(this.gameState.playerLevel + 1);
        
        if (this.gameState.experience >= requiredXP) {
            this.gameState.playerLevel++;
            this.showNotification(`🎉 Level Up! You are now Level ${this.gameState.playerLevel}!`);
            
            // Check if there are more levels to reach
            const nextRequiredXP = this.getRequiredXPForLevel(this.gameState.playerLevel + 1);
            if (this.gameState.experience >= nextRequiredXP) {
                // Recursive level up for multiple levels
                this.addExperience(0);
            }
        }
        
        this.updateUI();
    }
    
    // Calculate required XP for a specific level
    getRequiredXPForLevel(level) {
        if (level <= 1) return 0;
        
        // New challenging level progression:
        // Level 1: 0 XP (starting level)
        // Level 2: 50 XP  
        // Level 3: 150 XP
        // Level 4: 400 XP
        // Level 5: 1000 XP
        // Level 6: 1750 XP
        // Level 7: 3000 XP
        // Level 8: 5000 XP
        // Level 9: 8000 XP
        // Level 10: 12000 XP
        
        const levelRequirements = {
            1: 0,
            2: 50,
            3: 150,
            4: 400,
            5: 1000,
            6: 1750,
            7: 3000,
            8: 5000,
            9: 8000,
            10: 12000,
            11: 17000,
            12: 24000,
            13: 33000,
            14: 45000,
            15: 60000
        };
        
        // For levels beyond 15, use exponential growth
        if (level <= 15) {
            return levelRequirements[level];
        } else {
            // Beyond level 15: exponential growth (×1.5 each level)
            let baseXP = 60000;
            for (let i = 16; i <= level; i++) {
                baseXP = Math.floor(baseXP * 1.5);
            }
            return baseXP;
        }
    }
    
    // Get current level progress
    getCurrentLevelProgress() {
        const currentLevelXP = this.getRequiredXPForLevel(this.gameState.playerLevel);
        const nextLevelXP = this.getRequiredXPForLevel(this.gameState.playerLevel + 1);
        const progressXP = this.gameState.experience - currentLevelXP;
        const requiredXP = nextLevelXP - currentLevelXP;
        
        return {
            current: progressXP,
            required: requiredXP,
            percentage: Math.round((progressXP / requiredXP) * 100)
        };
    }
    
    checkMissions() {
        Object.keys(this.missions).forEach(missionId => {
            if (!this.missions[missionId].completed && this.canCompleteMission(missionId)) {
                // Auto-complete available missions
                setTimeout(() => this.completeMission(missionId), 1000);
            }
        });
    }
    
    getResearchCostText(cost) {
        const parts = [];
        if (cost.labs) parts.push(`${cost.labs} Labs`);
        if (cost.observatories) parts.push(`${cost.observatories} Observatories`);
        if (cost.factories) parts.push(`${cost.factories} Factories`);
        return parts.join(', ');
    }
    
    getMissionRequirementText(req) {
        const parts = [];
        if (req.habitats) parts.push(`${req.habitats} Habitats`);
        if (req.labs) parts.push(`${req.labs} Labs`);
        if (req.research) parts.push(`${req.research} Research`);
        if (req.exploredPlanets) parts.push(`${req.exploredPlanets} Planets`);
        return parts.join(', ');
    }
    
    updateUI() {
        // Update player stats
        const levelEl = document.querySelector('.player-level');
        const xpEl = document.querySelector('.player-xp');
        
        if (levelEl) levelEl.textContent = `Level ${this.gameState.playerLevel}`;
        if (xpEl) {
            const progress = this.getCurrentLevelProgress();
            const nextLevelXP = this.getRequiredXPForLevel(this.gameState.playerLevel + 1);
            xpEl.textContent = `${this.gameState.experience} XP (Next level: ${nextLevelXP})`;
        }
        
        // Update top HUD with new info
        this.updateTopHUD();
        
        // Update planet navigation status
        this.updatePlanetNavigation();
    }
    
    updatePlanetNavigation() {
        const planetNames = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
        
        planetNames.forEach(planetName => {
            const statusElement = document.getElementById(`${planetName}-status`);
            const navItem = document.querySelector(`.planet-nav-item[data-planet="${planetName}"]`);
            
            if (statusElement && navItem) {
                if (this.gameState.exploredPlanets.includes(planetName)) {
                    statusElement.textContent = 'Explored';
                    navItem.classList.add('explored');
                } else {
                    statusElement.textContent = 'Not Explored';
                    navItem.classList.remove('explored');
                }
                
                // Colony bilgisi ekle
                const colony = this.gameState.colonies[planetName];
                if (colony && colony.buildings.length > 0) {
                    statusElement.textContent = `${colony.buildings.length} buildings`;
                }
            }
        });
    }
    
    updateTopHUD() {
        const resourcesDiv = document.querySelector('.resources');
        if (!resourcesDiv) return;
        
        const progress = this.getCurrentLevelProgress();
        const nextLevelXP = this.getRequiredXPForLevel(this.gameState.playerLevel + 1);
        
        resourcesDiv.innerHTML = `
            <div class="resource-item">
                <span class="resource-icon">⭐</span>
                <span id="level-count">${this.gameState.playerLevel}</span>
                <span class="resource-label">Level</span>
            </div>
            <div class="resource-item">
                <span class="resource-icon">🎯</span>
                <span id="xp-count">${this.gameState.experience} / ${nextLevelXP}</span>
                <span class="resource-label">XP (${progress.percentage}%)</span>
            </div>
            <div class="resource-item">
                <span class="resource-icon">🌍</span>
                <span id="planets-count">${this.gameState.exploredPlanets.length}</span>
                <span class="resource-label">Planets</span>
            </div>
            <div class="resource-item">
                <span class="resource-icon">🏗️</span>
                <span id="buildings-count">${this.getTotalBuildings()}</span>
                <span class="resource-label">Buildings</span>
            </div>
            <div class="resource-item">
                <span class="resource-icon">👥</span>
                <span id="population-count">${this.getTotalPopulation()}</span>
                <span class="resource-label">Population</span>
            </div>
        `;
    }
    
    getTotalBuildings() {
        return Object.values(this.gameState.colonies)
            .reduce((total, colony) => total + colony.buildings.length, 0);
    }
    
    getTotalPopulation() {
        return Object.values(this.gameState.colonies)
            .reduce((total, colony) => total + colony.population, 0);
    }
    
    closePlanetView() {
        document.getElementById('planet-detail-view').classList.add('hidden');
        document.getElementById('solar-system-view').classList.remove('hidden');
        this.gameState.selectedPlanet = null;
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.loading-screen, .main-menu, .game-interface').forEach(screen => {
            screen.classList.add('hidden');
        });
        document.getElementById(screenId).classList.remove('hidden');
    }
    
    showNotification(message) {
        // Basit notification sistemi - otomatik kapanan
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(74, 158, 255, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            z-index: 10000;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            cursor: pointer;
        `;
        notification.textContent = message;
        
        // Tıklayınca kapat
        notification.addEventListener('click', () => {
            document.body.removeChild(notification);
        });
        
        document.body.appendChild(notification);
        
        // 5 saniye sonra otomatik kapat
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.opacity = '0';
                notification.style.transition = 'opacity 0.5s';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 500);
            }
        }, 5000);
        
        console.log('📢', message);
    }
    
    // Zoom functionality - Improved version from game.js
    zoomIn() {
        const container = document.querySelector('.solar-system-container');
        if (container) {
            const currentScale = parseFloat(container.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
            const newScale = Math.min(currentScale * 1.2, 3);
            container.style.transform = `translate(-50%, -50%) scale(${newScale})`;
        }
    }
    
    zoomOut() {
        const container = document.querySelector('.solar-system-container');
        if (container) {
            const currentScale = parseFloat(container.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
            const newScale = Math.max(currentScale / 1.2, 0.3);
            container.style.transform = `translate(-50%, -50%) scale(${newScale})`;
        }
    }
    
    resetView() {
        const container = document.querySelector('.solar-system-container');
        if (container) {
            container.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    }
    
    createMissionsButton() {
        // Ana oyun ekranına missions butonu ekle
        const gameControls = document.querySelector('.game-controls');
        if (gameControls) {
            const missionsBtn = document.createElement('button');
            missionsBtn.id = 'missions-btn';
            missionsBtn.className = 'control-btn';
            missionsBtn.innerHTML = '🎯';
            missionsBtn.title = 'Show Missions';
            missionsBtn.style.cssText = `
                background: linear-gradient(45deg, #4a9eff, #ffa726);
                border: none;
                color: white;
                font-size: 20px;
                animation: pulse 2s infinite;
            `;
            
            missionsBtn.addEventListener('click', () => this.showMissionsOverlay());
            gameControls.appendChild(missionsBtn);
            
            // Pulse animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(255, 167, 38, 0.7); }
                    70% { box-shadow: 0 0 0 10px rgba(255, 167, 38, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(255, 167, 38, 0); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    showMissionsOverlay() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.8);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
        `;
        
        const modal = document.createElement('div');
        modal.style.cssText = `
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            border-radius: 20px;
            padding: 30px;
            max-width: 80vw;
            max-height: 80vh;
            overflow-y: auto;
            color: white;
            box-shadow: 0 0 30px rgba(74, 158, 255, 0.3);
        `;
        
        // Current active mission
        const activeMission = Object.entries(this.missions).find(([id, mission]) => !mission.completed);
        
        if (activeMission) {
            const [missionId, mission] = activeMission;
            modal.innerHTML = `
                <h2>🌟 CURRENT MISSION</h2>
                <div style="background: linear-gradient(45deg, #4a9eff, #ffa726); padding: 20px; border-radius: 15px; margin: 20px 0;">
                    <h3>${mission.name}</h3>
                    <p><strong>🎯 Goal:</strong> ${mission.description}</p>
                    <p><strong>🌍 Location:</strong> ${mission.planet}</p>
                    <p><strong>💡 How to complete:</strong></p>
                    <p style="background: rgba(255,255,255,0.2); padding: 10px; border-radius: 10px; font-weight: bold;">${mission.guide}</p>
                    <p><strong>📋 Progress:</strong> ${this.getMissionProgress(missionId)}</p>
                    <p><strong>🏆 Reward:</strong> +${mission.reward.experience} XP</p>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #4a9eff; color: white; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer; font-size: 16px;">Got It!</button>
            `;
        } else {
            modal.innerHTML = `
                <h2>🎉 ALL MISSIONS COMPLETED!</h2>
                <p>Congratulations! You've completed all available missions.</p>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #4a9eff; color: white; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer; font-size: 16px;">Awesome!</button>
            `;
        }
        
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        
        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    }
    
    // Language support methods
    changeLanguage(language) {
        console.log('🌐 Changing language to:', language);
        
        this.currentLanguage = language;
        localStorage.setItem('selectedLanguage', language);
        
        // Update global currentLanguage for translations.js
        if (typeof currentLanguage !== 'undefined') {
            currentLanguage = language;
        }
        
        // Update all translatable elements
        this.updateLanguage();
        
        // Update game UI
        this.updateUI();
        
        // Show notification
        this.showNotification(this.getTranslation('languageChanged') || 'Language changed!');
    }
    
    updateLanguage() {
        console.log('🔄 Updating language elements...');
        const elements = document.querySelectorAll('[data-text]');
        console.log(`Found ${elements.length} translatable elements`);
        
        elements.forEach(element => {
            const key = element.getAttribute('data-text');
            const translatedText = this.getTranslation(key);
            if (translatedText) {
                element.textContent = translatedText;
            }
        });
    }
    
    getTranslation(key) {
        if (typeof translations !== 'undefined') {
            return translations[this.currentLanguage]?.[key] || translations['en']?.[key] || key;
        }
        return key;
    }
    
    loadLanguagePreference() {
        console.log('📖 Loading language preference...');
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage && typeof translations !== 'undefined' && translations[savedLanguage]) {
            console.log('✅ Found saved language:', savedLanguage);
            this.currentLanguage = savedLanguage;
            
            // Update language select dropdown
            const languageSelect = document.getElementById('language-select');
            if (languageSelect) {
                languageSelect.value = savedLanguage;
            }
            
            // Update global currentLanguage for translations.js
            if (typeof currentLanguage !== 'undefined') {
                currentLanguage = savedLanguage;
            }
            
            // Update all translatable elements
            setTimeout(() => {
                this.updateLanguage();
            }, 100);
        } else {
            console.log('🔧 Using default language: en');
        }
    }
}

// Global game instance
let game;
