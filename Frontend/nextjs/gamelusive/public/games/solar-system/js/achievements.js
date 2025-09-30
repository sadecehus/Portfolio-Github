// Achievement system for Solar System Settlers
class AchievementManager {
    constructor() {
        this.achievements = {
            // Exploration Achievements
            'first-colony': {
                id: 'first-colony',
                title: 'First Steps',
                description: 'Established your first colony',
                icon: '🏠',
                category: 'exploration',
                rarity: 'common',
                points: 10,
                unlocked: false
            },
            
            'explorer': {
                id: 'explorer',
                title: 'Space Explorer',
                description: 'Visited 3 different planets',
                icon: '🚀',
                category: 'exploration',
                rarity: 'common',
                points: 15,
                unlocked: false
            },
            
            'pioneer': {
                id: 'pioneer',
                title: 'Pioneer',
                description: 'Established colonies on 5 different planets',
                icon: '🌍',
                category: 'exploration',
                rarity: 'rare',
                points: 50,
                unlocked: false
            },
            
            // Research Achievements
            'researcher': {
                id: 'researcher',
                title: 'Scientist',
                description: 'Completed your first research',
                icon: '🔬',
                category: 'research',
                rarity: 'common',
                points: 10,
                unlocked: false
            },
            
            'tech-master': {
                id: 'tech-master',
                title: 'Technology Master',
                description: 'Completed all research projects',
                icon: '⚛️',
                category: 'research',
                rarity: 'legendary',
                points: 100,
                unlocked: false
            },
            
            // Building Achievements
            'builder': {
                id: 'builder',
                title: 'Builder',
                description: 'Constructed 10 buildings',
                icon: '🏗️',
                category: 'building',
                rarity: 'common',
                points: 20,
                unlocked: false
            },
            
            'architect': {
                id: 'architect',
                title: 'Architect',
                description: 'Built one of every building type',
                icon: '🏛️',
                category: 'building',
                rarity: 'rare',
                points: 40,
                unlocked: false
            },
            
            'mega-builder': {
                id: 'mega-builder',
                title: 'Mega Builder',
                description: 'Constructed 100 buildings across all colonies',
                icon: '🏙️',
                category: 'building',
                rarity: 'epic',
                points: 75,
                unlocked: false
            },
            
            // Resource Achievements
            'resource-manager': {
                id: 'resource-manager',
                title: 'Resource Manager',
                description: 'Accumulated 10,000 of any resource',
                icon: '💎',
                category: 'resource',
                rarity: 'rare',
                points: 30,
                unlocked: false
            },
            
            'energy-baron': {
                id: 'energy-baron',
                title: 'Energy Baron',
                description: 'Generated 50,000 total energy',
                icon: '⚡',
                category: 'resource',
                rarity: 'epic',
                points: 60,
                unlocked: false
            },
            
            // Quiz Achievements
            'quiz-novice': {
                id: 'quiz-novice',
                title: 'Quiz Novice',
                description: 'Answered your first quiz question',
                icon: '📚',
                category: 'education',
                rarity: 'common',
                points: 5,
                unlocked: false
            },
            
            'quiz-student': {
                id: 'quiz-student',
                title: 'Space Student',
                description: 'Answered 10 quiz questions',
                icon: '🎓',
                category: 'education',
                rarity: 'common',
                points: 15,
                unlocked: false
            },
            
            'quiz-expert': {
                id: 'quiz-expert',
                title: 'Space Expert',
                description: 'Answered 50 quiz questions',
                icon: '👨‍🔬',
                category: 'education',
                rarity: 'rare',
                points: 40,
                unlocked: false
            },
            
            'quiz-perfectionist': {
                id: 'quiz-perfectionist',
                title: 'Perfectionist',
                description: 'Got 5 quiz answers correct in a row',
                icon: '⭐',
                category: 'education',
                rarity: 'epic',
                points: 50,
                unlocked: false
            },
            
            'quiz-scholar': {
                id: 'quiz-scholar',
                title: 'Space Scholar',
                description: 'Maintained 90%+ quiz accuracy over 20 questions',
                icon: '🏆',
                category: 'education',
                rarity: 'legendary',
                points: 80,
                unlocked: false
            },
            
            // Mission Achievements
            'mission-complete': {
                id: 'mission-complete',
                title: 'Mission Accomplished',
                description: 'Completed your first mission',
                icon: '✅',
                category: 'mission',
                rarity: 'common',
                points: 25,
                unlocked: false
            },
            
            'mars-colonist': {
                id: 'mars-colonist',
                title: 'Mars Colonist',
                description: 'Successfully established a colony on Mars',
                icon: '🔴',
                category: 'mission',
                rarity: 'rare',
                points: 45,
                unlocked: false
            },
            
            'gas-giant-explorer': {
                id: 'gas-giant-explorer',
                title: 'Gas Giant Explorer',
                description: 'Explored Jupiter or Saturn system',
                icon: '🪐',
                category: 'mission',
                rarity: 'epic',
                points: 65,
                unlocked: false
            },
            
            // Special Achievements
            'speed-runner': {
                id: 'speed-runner',
                title: 'Speed Runner',
                description: 'Completed first mission in under 30 minutes',
                icon: '⏱️',
                category: 'special',
                rarity: 'epic',
                points: 70,
                unlocked: false
            },
            
            'completionist': {
                id: 'completionist',
                title: 'Completionist',
                description: 'Unlocked all other achievements',
                icon: '👑',
                category: 'special',
                rarity: 'legendary',
                points: 200,
                unlocked: false
            },
            
            'solar-emperor': {
                id: 'solar-emperor',
                title: 'Solar System Emperor',
                description: 'Established colonies on all planets',
                icon: '👑',
                category: 'special',
                rarity: 'legendary',
                points: 500,
                unlocked: false
            }
        };
        
        this.totalPoints = 0;
        this.init();
    }
    
    init() {
        this.loadAchievementProgress();
        this.setupAchievementTracking();
    }
    
    unlockAchievement(achievementId) {
        const achievement = this.achievements[achievementId];
        if (!achievement || achievement.unlocked) return false;
        
        achievement.unlocked = true;
        this.totalPoints += achievement.points;
        
        this.showAchievementNotification(achievement);
        this.saveAchievementProgress();
        
        // Check for meta-achievements
        this.checkMetaAchievements();
        
        // Trigger particle effects
        if (interfaceManager) {
            const notification = document.getElementById('achievement-notification');
            const rect = notification.getBoundingClientRect();
            interfaceManager.createParticleEffect(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2,
                '#ffd700'
            );
        }
        
        return true;
    }
    
    showAchievementNotification(achievement) {
        const notification = document.getElementById('achievement-notification');
        const icon = notification.querySelector('.achievement-icon');
        const title = document.getElementById('achievement-title');
        const description = document.getElementById('achievement-description');
        
        icon.textContent = achievement.icon;
        title.textContent = achievement.title;
        description.textContent = achievement.description;
        
        // Add rarity styling
        notification.className = `achievement-notification ${achievement.rarity}`;
        
        notification.classList.remove('hidden');
        
        // Auto-hide after delay based on rarity
        const hideDelay = {
            common: 3000,
            rare: 4000,
            epic: 5000,
            legendary: 7000
        };
        
        setTimeout(() => {
            notification.classList.add('hidden');
        }, hideDelay[achievement.rarity] || 3000);
        
        // Play achievement sound (if available)
        this.playAchievementSound(achievement.rarity);
        
        // Log achievement
        console.log(`🏆 Achievement Unlocked: ${achievement.title} (+${achievement.points} points)`);
    }
    
    playAchievementSound(rarity) {
        // Create audio context for achievement sounds
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Different tones for different rarities
            const frequencies = {
                common: [440, 550],
                rare: [440, 550, 660],
                epic: [440, 550, 660, 880],
                legendary: [440, 550, 660, 880, 1100]
            };
            
            const sequence = frequencies[rarity] || frequencies.common;
            
            let currentTime = audioContext.currentTime;
            sequence.forEach((freq, index) => {
                oscillator.frequency.setValueAtTime(freq, currentTime + index * 0.15);
            });
            
            gainNode.gain.setValueAtTime(0.1, currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + sequence.length * 0.15);
            
            oscillator.start(currentTime);
            oscillator.stop(currentTime + sequence.length * 0.15);
        } catch (error) {
            // Silently fail if audio context not available
        }
    }
    
    checkMetaAchievements() {
        // Completionist achievement
        const totalAchievements = Object.keys(this.achievements).length;
        const unlockedAchievements = Object.values(this.achievements).filter(a => a.unlocked).length;
        
        if (unlockedAchievements === totalAchievements - 1) { // -1 for completionist itself
            this.unlockAchievement('completionist');
        }
        
        // Category-based meta achievements
        this.checkCategoryAchievements();
    }
    
    checkCategoryAchievements() {
        const categories = ['exploration', 'research', 'building', 'resource', 'education', 'mission'];
        
        categories.forEach(category => {
            const categoryAchievements = Object.values(this.achievements).filter(a => a.category === category);
            const unlockedInCategory = categoryAchievements.filter(a => a.unlocked).length;
            
            // If all achievements in category are unlocked, award special recognition
            if (unlockedInCategory === categoryAchievements.length) {
                this.awardCategoryMastery(category);
            }
        });
    }
    
    awardCategoryMastery(category) {
        const categoryTitles = {
            exploration: 'Master Explorer',
            research: 'Chief Scientist',
            building: 'Grand Architect',
            resource: 'Resource Mogul',
            education: 'Professor',
            mission: 'Mission Commander'
        };
        
        const title = categoryTitles[category] || 'Category Master';
        
        if (game) {
            game.showNotification(`🏅 Category Mastery: ${title}!`);
        }
    }
    
    setupAchievementTracking() {
        // Set up tracking for various game events
        if (typeof game !== 'undefined') {
            this.trackGameEvents();
        }
    }
    
    trackGameEvents() {
        // Track building construction
        this.trackBuildingAchievements();
        
        // Track resource milestones
        this.trackResourceAchievements();
        
        // Track exploration
        this.trackExplorationAchievements();
        
        // Track research progress
        this.trackResearchAchievements();
    }
    
    trackBuildingAchievements() {
        // Override building method to track achievements
        const originalBuildStructure = game.buildStructure;
        game.buildStructure = (buildingType) => {
            const result = originalBuildStructure.call(game, buildingType);
            
            if (result !== false) {
                this.checkBuildingMilestones();
            }
            
            return result;
        };
    }
    
    checkBuildingMilestones() {
        if (!game) return;
        
        let totalBuildings = 0;
        const buildingTypes = new Set();
        
        Object.values(game.gameState.colonies).forEach(colony => {
            Object.entries(colony.buildings).forEach(([type, count]) => {
                totalBuildings += count;
                if (count > 0) buildingTypes.add(type);
            });
        });
        
        // Check building count milestones
        if (totalBuildings >= 10 && !this.achievements['builder'].unlocked) {
            this.unlockAchievement('builder');
        }
        
        if (totalBuildings >= 100 && !this.achievements['mega-builder'].unlocked) {
            this.unlockAchievement('mega-builder');
        }
        
        // Check building variety
        const expectedBuildingTypes = ['habitat', 'lab', 'farm', 'factory', 'solar', 'mine'];
        if (expectedBuildingTypes.every(type => buildingTypes.has(type))) {
            this.unlockAchievement('architect');
        }
    }
    
    trackResourceAchievements() {
        const originalUpdateUI = game.updateUI;
        game.updateUI = () => {
            originalUpdateUI.call(game);
            this.checkResourceMilestones();
        };
    }
    
    checkResourceMilestones() {
        if (!game) return;
        
        const resources = game.gameState.resources;
        
        // Check for 10,000 of any resource
        Object.values(resources).forEach(amount => {
            if (amount >= 10000 && !this.achievements['resource-manager'].unlocked) {
                this.unlockAchievement('resource-manager');
            }
        });
        
        // Check total energy generated (would need to track this separately)
        // This is a simplified version
        if (resources.energy >= 50000 && !this.achievements['energy-baron'].unlocked) {
            this.unlockAchievement('energy-baron');
        }
    }
    
    trackExplorationAchievements() {
        const originalSelectPlanet = game.selectPlanet;
        game.selectPlanet = (planetName) => {
            originalSelectPlanet.call(game, planetName);
            this.checkExplorationMilestones();
        };
    }
    
    checkExplorationMilestones() {
        if (!game) return;
        
        const visitedPlanets = Object.keys(game.gameState.colonies);
        const establishedColonies = Object.values(game.gameState.colonies).filter(c => c.established);
        
        // Check visited planets
        if (visitedPlanets.length >= 3 && !this.achievements['explorer'].unlocked) {
            this.unlockAchievement('explorer');
        }
        
        // Check established colonies
        if (establishedColonies.length >= 5 && !this.achievements['pioneer'].unlocked) {
            this.unlockAchievement('pioneer');
        }
        
        // Check for Mars colony
        if (game.gameState.colonies.mars && game.gameState.colonies.mars.established) {
            this.unlockAchievement('mars-colonist');
        }
        
        // Check for gas giant exploration
        if ((game.gameState.colonies.jupiter || game.gameState.colonies.saturn) && 
            !this.achievements['gas-giant-explorer'].unlocked) {
            this.unlockAchievement('gas-giant-explorer');
        }
        
        // Check for all planets colonized
        const allPlanets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
        const colonizedPlanets = allPlanets.filter(planet => 
            game.gameState.colonies[planet] && game.gameState.colonies[planet].established);
        
        if (colonizedPlanets.length === allPlanets.length) {
            this.unlockAchievement('solar-emperor');
        }
    }
    
    trackResearchAchievements() {
        const originalStartResearch = game.startResearch;
        game.startResearch = (researchType) => {
            const result = originalStartResearch.call(game, researchType);
            
            if (result !== false) {
                this.checkResearchMilestones();
            }
            
            return result;
        };
    }
    
    checkResearchMilestones() {
        if (!game) return;
        
        const completedResearch = game.gameState.research.completed;
        
        // First research
        if (completedResearch.length >= 1 && !this.achievements['researcher'].unlocked) {
            this.unlockAchievement('researcher');
        }
        
        // All research completed
        const allResearch = ['life-support', 'terraforming', 'fusion-power'];
        if (allResearch.every(research => completedResearch.includes(research))) {
            this.unlockAchievement('tech-master');
        }
    }
    
    getAchievementProgress() {
        const total = Object.keys(this.achievements).length;
        const unlocked = Object.values(this.achievements).filter(a => a.unlocked).length;
        const percentage = ((unlocked / total) * 100).toFixed(1);
        
        return {
            total,
            unlocked,
            percentage,
            points: this.totalPoints
        };
    }
    
    getAchievementsByCategory() {
        const categories = {};
        
        Object.values(this.achievements).forEach(achievement => {
            if (!categories[achievement.category]) {
                categories[achievement.category] = [];
            }
            categories[achievement.category].push(achievement);
        });
        
        return categories;
    }
    
    getRarityStats() {
        const rarities = { common: 0, rare: 0, epic: 0, legendary: 0 };
        const unlockedRarities = { common: 0, rare: 0, epic: 0, legendary: 0 };
        
        Object.values(this.achievements).forEach(achievement => {
            rarities[achievement.rarity]++;
            if (achievement.unlocked) {
                unlockedRarities[achievement.rarity]++;
            }
        });
        
        return { total: rarities, unlocked: unlockedRarities };
    }
    
    saveAchievementProgress() {
        const progressData = {
            achievements: this.achievements,
            totalPoints: this.totalPoints,
            lastUpdated: Date.now()
        };
        
        localStorage.setItem('solarSystemAchievements', JSON.stringify(progressData));
    }
    
    loadAchievementProgress() {
        const saved = localStorage.getItem('solarSystemAchievements');
        if (saved) {
            const data = JSON.parse(saved);
            
            // Merge saved achievements with current structure
            Object.keys(data.achievements).forEach(id => {
                if (this.achievements[id]) {
                    this.achievements[id].unlocked = data.achievements[id].unlocked;
                }
            });
            
            this.totalPoints = data.totalPoints || 0;
        }
    }
    
    resetAchievements() {
        Object.values(this.achievements).forEach(achievement => {
            achievement.unlocked = false;
        });
        this.totalPoints = 0;
        this.saveAchievementProgress();
    }
    
    // Debug function to unlock all achievements
    unlockAllAchievements() {
        Object.keys(this.achievements).forEach(id => {
            if (id !== 'completionist') { // Let this unlock naturally
                this.unlockAchievement(id);
            }
        });
    }
}

// Initialize achievement manager
let achievementManager;
