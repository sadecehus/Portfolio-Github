// Interface management for Solar System Settlers
class InterfaceManager {
    constructor() {
        this.zoomLevel = 1;
        this.selectedPlanet = null;
        this.activeTab = 'build';
        this.init();
    }
    
    init() {
        this.setupInterfaceAnimations();
        this.setupResponsiveDesign();
        this.setupKeyboardShortcuts();
        this.createStarField();
        this.setupClosePlanetViewHandler();
    }
    
    setupInterfaceAnimations() {
        // Animate planets on hover
        document.querySelectorAll('.planet').forEach(planet => {
            planet.addEventListener('mouseenter', (e) => {
                this.animatePlanetHover(e.target, true);
            });
            
            planet.addEventListener('mouseleave', (e) => {
                this.animatePlanetHover(e.target, false);
            });
        });
        
        // Animate resource counters when they change
        this.setupResourceAnimations();
        
        // Smooth transitions for UI elements
        this.setupUITransitions();
    }
    
    animatePlanetHover(planet, isHover) {
        const info = planet.querySelector('.planet-info');
        const scale = isHover ? '1.5' : '1';
        const opacity = isHover ? '1' : '0';
        
        planet.style.transform = `scale(${scale})`;
        planet.style.zIndex = isHover ? '20' : '1';
        
        if (info) {
            info.style.opacity = opacity;
        }
        
        // Add glow effect for hoverable planets
        if (isHover) {
            planet.style.boxShadow = '0 0 20px rgba(74, 158, 255, 0.8)';
        } else {
            planet.style.boxShadow = 'none';
        }
    }
    
    setupResourceAnimations() {
        const resourceElements = document.querySelectorAll('[id$="-count"]');
        
        resourceElements.forEach(element => {
            this.observeResourceChanges(element);
        });
    }
    
    observeResourceChanges(element) {
        let lastValue = element.textContent;
        
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    const newValue = element.textContent;
                    if (newValue !== lastValue) {
                        this.animateResourceChange(element, lastValue, newValue);
                        lastValue = newValue;
                    }
                }
            });
        });
        
        observer.observe(element, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }
    
    animateResourceChange(element, oldValue, newValue) {
        const oldNum = parseInt(oldValue) || 0;
        const newNum = parseInt(newValue) || 0;
        const isIncrease = newNum > oldNum;
        
        // Color flash animation
        element.style.transition = 'color 0.3s ease';
        element.style.color = isIncrease ? '#4caf50' : '#f44336';
        
        // Counter animation
        const startTime = performance.now();
        const duration = 500;
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentValue = Math.round(oldNum + (newNum - oldNum) * progress);
            element.textContent = currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Reset color
                setTimeout(() => {
                    element.style.color = '';
                }, 300);
            }
        };
        
        requestAnimationFrame(animate);
        
        // Show floating text for significant changes
        const change = newNum - oldNum;
        if (Math.abs(change) > 10) {
            this.showFloatingText(element, change > 0 ? `+${change}` : change.toString(), isIncrease);
        }
    }
    
    showFloatingText(element, text, isPositive) {
        const floatingText = document.createElement('div');
        floatingText.textContent = text;
        floatingText.style.cssText = `
            position: absolute;
            color: ${isPositive ? '#4caf50' : '#f44336'};
            font-weight: bold;
            pointer-events: none;
            z-index: 1000;
            animation: floatUp 2s ease-out forwards;
        `;
        
        const rect = element.getBoundingClientRect();
        floatingText.style.left = rect.left + rect.width / 2 + 'px';
        floatingText.style.top = rect.top + 'px';
        
        document.body.appendChild(floatingText);
        
        // Add animation keyframes if not already added
        if (!document.querySelector('#floating-text-styles')) {
            const style = document.createElement('style');
            style.id = 'floating-text-styles';
            style.textContent = `
                @keyframes floatUp {
                    0% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-50px);
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Remove element after animation
        setTimeout(() => {
            document.body.removeChild(floatingText);
        }, 2000);
    }
    
    setupUITransitions() {
        // Smooth panel transitions
        const panels = document.querySelectorAll('.planet-detail-view, .quiz-modal, .info-panel');
        panels.forEach(panel => {
            panel.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
        
        // Button hover effects
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
            });
        });
    }
    
    setupResponsiveDesign() {
        // Handle window resize
        window.addEventListener('resize', () => {
            this.adjustLayoutForScreenSize();
        });
        
        // Initial adjustment
        this.adjustLayoutForScreenSize();
    }
    
    adjustLayoutForScreenSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        if (width < 768) {
            // Mobile layout adjustments
            this.adjustMobileLayout();
        } else if (width < 1024) {
            // Tablet layout adjustments
            this.adjustTabletLayout();
        } else {
            // Desktop layout
            this.adjustDesktopLayout();
        }
    }
    
    adjustMobileLayout() {
        // Adjust solar system scale for mobile
        const container = document.querySelector('.solar-system-container');
        if (container) {
            container.style.transform = 'translate(-50%, -50%) scale(0.6)';
        }
        
        // Stack resource items vertically
        const resources = document.querySelector('.resources');
        if (resources) {
            resources.style.flexDirection = 'column';
            resources.style.gap = '5px';
        }
    }
    
    adjustTabletLayout() {
        const container = document.querySelector('.solar-system-container');
        if (container) {
            container.style.transform = 'translate(-50%, -50%) scale(0.8)';
        }
    }
    
    adjustDesktopLayout() {
        const container = document.querySelector('.solar-system-container');
        if (container) {
            container.style.transform = 'translate(-50%, -50%) scale(1)';
        }
        
        const resources = document.querySelector('.resources');
        if (resources) {
            resources.style.flexDirection = 'row';
            resources.style.gap = '20px';
        }
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Only handle shortcuts when not in input fields
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }
            
            switch (e.key) {
                case ' ':
                    e.preventDefault();
                    if (game) game.togglePause();
                    break;
                case 'Escape':
                    this.closeAllModals();
                    break;
                case '1':
                    this.switchTab('build');
                    break;
                case '2':
                    this.switchTab('research');
                    break;
                case '3':
                    this.switchTab('missions');
                    break;
                case 's':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        if (game) game.saveGame();
                    }
                    break;
                case '+':
                    if (game) game.zoomIn();
                    break;
                case '-':
                    if (game) game.zoomOut();
                    break;
                case '0':
                    if (game) game.resetView();
                    break;
            }
        });
    }
    
    closeAllModals() {
        document.querySelectorAll('.quiz-modal, .info-panel, .achievement-notification').forEach(modal => {
            modal.classList.add('hidden');
        });
        
        if (game && game.gameState.selectedPlanet) {
            game.closePlanetView();
        }
    }
    
    switchTab(tabName) {
        if (game) {
            game.switchTab(tabName);
        }
    }
    
    createStarField() {
        const starsContainer = document.querySelector('.stars');
        if (!starsContainer) return;
        
        // Create animated starfield
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: white;
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: twinkle ${Math.random() * 3 + 2}s infinite;
                opacity: ${Math.random() * 0.8 + 0.2};
            `;
            starsContainer.appendChild(star);
        }
    }
    
    updatePlanetVisuals() {
        // Update planet appearances based on colonization status
        Object.entries(game.gameState.colonies).forEach(([planetName, colony]) => {
            const planet = document.querySelector(`[data-planet="${planetName}"]`);
            if (planet && colony.established) {
                // Add colony indicator
                this.addColonyIndicator(planet);
            }
        });
    }
    
    addColonyIndicator(planet) {
        if (planet.querySelector('.colony-indicator')) return;
        
        const indicator = document.createElement('div');
        indicator.className = 'colony-indicator';
        indicator.style.cssText = `
            position: absolute;
            top: -5px;
            right: -5px;
            width: 10px;
            height: 10px;
            background: #4caf50;
            border-radius: 50%;
            border: 2px solid #fff;
            animation: pulse 2s infinite;
        `;
        planet.appendChild(indicator);
    }
    
    showLoadingProgress(progress) {
        const progressBar = document.querySelector('.loading-progress');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }
    
    showTooltip(element, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 0.9em;
            pointer-events: none;
            z-index: 1000;
            white-space: nowrap;
            border: 1px solid #4a9eff;
        `;
        
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + rect.width / 2 + 'px';
        tooltip.style.top = rect.top - 10 + 'px';
        tooltip.style.transform = 'translate(-50%, -100%)';
        
        document.body.appendChild(tooltip);
        
        // Remove tooltip when mouse leaves element
        const removeTooltip = () => {
            if (document.body.contains(tooltip)) {
                document.body.removeChild(tooltip);
            }
        };
        
        element.addEventListener('mouseleave', removeTooltip, { once: true });
        
        // Auto-remove after 5 seconds
        setTimeout(removeTooltip, 5000);
    }
    
    addTooltips() {
        // Add tooltips to various UI elements
        document.querySelectorAll('.resource-item').forEach(item => {
            const resourceType = item.querySelector('.resource-label').textContent;
            item.addEventListener('mouseenter', () => {
                this.showTooltip(item, `Current ${resourceType} amount`);
            });
        });
        
        document.querySelectorAll('.planet').forEach(planet => {
            const planetName = planet.getAttribute('data-planet');
            planet.addEventListener('mouseenter', () => {
                this.showTooltip(planet, `Click to explore ${planetName}`);
            });
        });
    }
    
    animateScreenTransition(fromScreen, toScreen) {
        const from = document.getElementById(fromScreen);
        const to = document.getElementById(toScreen);
        
        if (!from || !to) return;
        
        // Fade out current screen
        from.style.transition = 'opacity 0.3s ease';
        from.style.opacity = '0';
        
        setTimeout(() => {
            from.classList.add('hidden');
            to.classList.remove('hidden');
            
            // Fade in new screen
            to.style.opacity = '0';
            to.style.transition = 'opacity 0.3s ease';
            
            requestAnimationFrame(() => {
                to.style.opacity = '1';
            });
        }, 300);
    }
    
    createParticleEffect(x, y, color = '#4a9eff') {
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: ${color};
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 2000;
                animation: particle-burst 1s ease-out forwards;
                transform: translate(-50%, -50%);
            `;
            
            // Random direction for each particle
            const angle = (Math.PI * 2 * i) / 10;
            const velocity = Math.random() * 50 + 30;
            
            particle.style.setProperty('--dx', Math.cos(angle) * velocity + 'px');
            particle.style.setProperty('--dy', Math.sin(angle) * velocity + 'px');
            
            document.body.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (document.body.contains(particle)) {
                    document.body.removeChild(particle);
                }
            }, 1000);
        }
        
        // Add particle animation keyframes if not already added
        if (!document.querySelector('#particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            style.textContent = `
                @keyframes particle-burst {
                    0% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    setupClosePlanetViewHandler() {
        const closePlanetBtn = document.getElementById('close-planet-view');
        if (closePlanetBtn) {
            closePlanetBtn.addEventListener('click', () => {
                if (game && game.closePlanetView) {
                    game.closePlanetView();
                }
            });
        }
    }
}

// Initialize interface manager
let interfaceManager;
