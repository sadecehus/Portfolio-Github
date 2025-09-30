// Educational quiz system for Solar System Settlers
class QuizManager {
    constructor() {
        this.currentQuiz = null;
        this.quizHistory = [];
        this.correctAnswers = 0;
        this.totalQuestions = 0;
        this.init();
    }
    
    init() {
        this.setupQuizEventListeners();
        this.loadQuizProgress();
    }
    
    setupQuizEventListeners() {
        document.getElementById('close-quiz').addEventListener('click', () => {
            this.closeQuiz();
        });
        
        document.getElementById('quiz-continue').addEventListener('click', () => {
            this.closeQuiz();
        });
        
        // ESC key to close quiz
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !document.getElementById('quiz-modal').classList.contains('hidden')) {
                this.closeQuiz();
            }
        });
    }
    
    showRandomQuiz(planetName = null) {
        const questions = this.getAvailableQuestions(planetName);
        if (questions.length === 0) return;
        
        const randomIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomIndex];
        
        this.currentQuiz = {
            ...question,
            planetContext: planetName,
            startTime: Date.now()
        };
        
        this.displayQuiz(question);
    }
    
    getAvailableQuestions(planetName) {
        const allQuestions = translations[currentLanguage].quizQuestions || [];
        let contextQuestions = this.getContextualQuestions(planetName);
        
        // Combine general questions with contextual ones
        let availableQuestions = [...allQuestions, ...contextQuestions];
        
        // Filter out recently asked questions
        const recentQuestions = this.quizHistory.slice(-5);
        availableQuestions = availableQuestions.filter(q => 
            !recentQuestions.some(recent => recent.question === q.question)
        );
        
        return availableQuestions;
    }
    
    getContextualQuestions(planetName) {
        const contextualQuestions = {
            mercury: [
                {
                    question: "Why does Mercury have such extreme temperature variations?",
                    answers: [
                        "It's very close to the Sun",
                        "It has no atmosphere to regulate temperature",
                        "It rotates very slowly",
                        "All of the above"
                    ],
                    correct: 3,
                    explanation: "Mercury's extreme temperatures are due to its proximity to the Sun, lack of atmosphere, and slow rotation causing long days and nights."
                },
                {
                    question: "How long is a day on Mercury compared to its year?",
                    answers: [
                        "A day is shorter than a year",
                        "A day is longer than a year",
                        "They are about the same",
                        "A day is twice as long as a year"
                    ],
                    correct: 1,
                    explanation: "A day on Mercury (59 Earth days) is actually longer than its year (88 Earth days) due to its slow rotation."
                }
            ],
            
            venus: [
                {
                    question: "What makes Venus the hottest planet despite not being closest to the Sun?",
                    answers: [
                        "It's made of hot rock",
                        "Extreme greenhouse effect from thick CO₂ atmosphere",
                        "It's closer to the Sun than Mercury",
                        "Nuclear reactions in its core"
                    ],
                    correct: 1,
                    explanation: "Venus's thick CO₂ atmosphere creates an extreme greenhouse effect, trapping heat and making it hotter than Mercury."
                },
                {
                    question: "In which direction does Venus rotate?",
                    answers: [
                        "Same as Earth (west to east)",
                        "Opposite to Earth (east to west)",
                        "It doesn't rotate",
                        "It changes direction periodically"
                    ],
                    correct: 1,
                    explanation: "Venus has retrograde rotation, spinning east to west, opposite to most other planets."
                }
            ],
            
            mars: [
                {
                    question: "What evidence suggests Mars once had liquid water?",
                    answers: [
                        "Current rivers and lakes",
                        "Ancient riverbeds and mineral deposits",
                        "Ice caps at the poles",
                        "Clouds in the atmosphere"
                    ],
                    correct: 1,
                    explanation: "Scientists have found ancient riverbeds, mineral deposits that form in water, and other geological evidence of past liquid water on Mars."
                },
                {
                    question: "Why is Mars red?",
                    answers: [
                        "Copper oxide on the surface",
                        "Iron oxide (rust) on the surface",
                        "Red rocks from volcanoes",
                        "Reflection from its atmosphere"
                    ],
                    correct: 1,
                    explanation: "Mars appears red due to iron oxide (rust) covering much of its surface, giving it the nickname 'Red Planet'."
                }
            ],
            
            jupiter: [
                {
                    question: "What is Jupiter's Great Red Spot?",
                    answers: [
                        "A giant volcano",
                        "A massive storm larger than Earth",
                        "A moon casting a shadow",
                        "A crater from an asteroid impact"
                    ],
                    correct: 1,
                    explanation: "The Great Red Spot is a giant anticyclonic storm that has been raging for hundreds of years and is larger than Earth."
                },
                {
                    question: "How does Jupiter protect inner planets?",
                    answers: [
                        "It reflects sunlight",
                        "It creates a magnetic shield",
                        "Its gravity attracts asteroids and comets",
                        "It blocks solar wind"
                    ],
                    correct: 2,
                    explanation: "Jupiter's massive gravity acts like a 'cosmic vacuum cleaner', attracting asteroids and comets that might otherwise hit inner planets."
                }
            ],
            
            saturn: [
                {
                    question: "What are Saturn's rings made of?",
                    answers: [
                        "Solid rock",
                        "Gas and dust",
                        "Ice and rock particles",
                        "Liquid water"
                    ],
                    correct: 2,
                    explanation: "Saturn's rings are made primarily of ice particles ranging from tiny grains to house-sized chunks, along with some rocky material."
                },
                {
                    question: "Which of Saturn's moons has a thick atmosphere?",
                    answers: [
                        "Enceladus",
                        "Titan",
                        "Mimas",
                        "Iapetus"
                    ],
                    correct: 1,
                    explanation: "Titan has a thick atmosphere composed mainly of nitrogen, and it's the only moon in our solar system with a substantial atmosphere."
                }
            ]
        };
        
        return contextualQuestions[planetName] || [];
    }
    
    displayQuiz(question) {
        document.getElementById('quiz-question').textContent = question.question;
        
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((option, index) => {
            option.textContent = question.answers[index];
            option.className = 'quiz-option';
            option.onclick = () => this.answerQuiz(index);
            option.disabled = false;
        });
        
        // Reset quiz display
        document.querySelector('.question-container').classList.remove('hidden');
        document.querySelector('.quiz-result').classList.add('hidden');
        document.getElementById('quiz-modal').classList.remove('hidden');
    }
    
    answerQuiz(selectedAnswer) {
        const isCorrect = selectedAnswer === this.currentQuiz.correct;
        const timeSpent = Date.now() - this.currentQuiz.startTime;
        
        // Update statistics
        this.totalQuestions++;
        if (isCorrect) {
            this.correctAnswers++;
        }
        
        // Record in history
        this.quizHistory.push({
            question: this.currentQuiz.question,
            correct: isCorrect,
            timeSpent: timeSpent,
            planetContext: this.currentQuiz.planetContext
        });
        
        // Visual feedback on options
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((option, index) => {
            option.disabled = true;
            option.onclick = null;
            
            if (index === this.currentQuiz.correct) {
                option.classList.add('correct');
            } else if (index === selectedAnswer && !isCorrect) {
                option.classList.add('incorrect');
            }
        });
        
        // Show result after a brief delay
        setTimeout(() => {
            this.showQuizResult(isCorrect);
        }, 1500);
        
        // Award rewards
        this.awardQuizRewards(isCorrect, timeSpent);
        
        // Save progress
        this.saveQuizProgress();
    }
    
    showQuizResult(isCorrect) {
        document.querySelector('.question-container').classList.add('hidden');
        document.querySelector('.quiz-result').classList.remove('hidden');
        
        const resultTitle = document.getElementById('quiz-result-title');
        const explanation = document.getElementById('quiz-explanation');
        
        if (isCorrect) {
            resultTitle.textContent = getText('correct') || 'Correct!';
            resultTitle.style.color = '#4caf50';
        } else {
            resultTitle.textContent = getText('incorrect') || 'Incorrect';
            resultTitle.style.color = '#f44336';
        }
        
        explanation.textContent = this.currentQuiz.explanation;
        
        // Show accuracy statistics
        const accuracy = ((this.correctAnswers / this.totalQuestions) * 100).toFixed(1);
        const statsText = `Overall accuracy: ${accuracy}% (${this.correctAnswers}/${this.totalQuestions})`;
        
        if (!document.getElementById('quiz-stats')) {
            const stats = document.createElement('p');
            stats.id = 'quiz-stats';
            stats.style.fontSize = '0.9em';
            stats.style.opacity = '0.8';
            stats.style.marginTop = '10px';
            explanation.parentNode.appendChild(stats);
        }
        
        document.getElementById('quiz-stats').textContent = statsText;
    }
    
    awardQuizRewards(isCorrect, timeSpent) {
        if (!game) return;
        
        let researchPoints = 0;
        let bonusMultiplier = 1;
        
        if (isCorrect) {
            researchPoints = 5;
            
            // Time bonus (answered quickly)
            if (timeSpent < 10000) { // Less than 10 seconds
                bonusMultiplier = 1.5;
                researchPoints = Math.round(researchPoints * bonusMultiplier);
            }
            
            // Streak bonus
            const recentCorrect = this.quizHistory.slice(-5).filter(q => q.correct).length;
            if (recentCorrect >= 3) {
                bonusMultiplier = 2;
                researchPoints = Math.round(researchPoints * bonusMultiplier);
            }
        } else {
            // Small consolation prize for wrong answers
            researchPoints = 1;
        }
        
        // Award the points
        game.gameState.resources.research += researchPoints;
        
        // Show floating reward text
        if (interfaceManager) {
            const quizModal = document.getElementById('quiz-modal');
            const rect = quizModal.getBoundingClientRect();
            interfaceManager.createParticleEffect(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2,
                isCorrect ? '#4caf50' : '#ff9800'
            );
        }
        
        // Check for quiz-related achievements
        this.checkQuizAchievements();
    }
    
    checkQuizAchievements() {
        if (!game) return;
        
        // First quiz completed
        if (this.totalQuestions === 1) {
            game.unlockAchievement('quiz-novice');
        }
        
        // 10 quizzes completed
        if (this.totalQuestions === 10) {
            game.unlockAchievement('quiz-student');
        }
        
        // 50 quizzes completed
        if (this.totalQuestions === 50) {
            game.unlockAchievement('quiz-expert');
        }
        
        // Perfect accuracy on 5 consecutive quizzes
        const recentQuizzes = this.quizHistory.slice(-5);
        if (recentQuizzes.length === 5 && recentQuizzes.every(q => q.correct)) {
            game.unlockAchievement('quiz-perfectionist');
        }
        
        // High overall accuracy
        const accuracy = this.correctAnswers / this.totalQuestions;
        if (this.totalQuestions >= 20 && accuracy >= 0.9) {
            game.unlockAchievement('quiz-scholar');
        }
    }
    
    closeQuiz() {
        document.getElementById('quiz-modal').classList.add('hidden');
        this.currentQuiz = null;
    }
    
    saveQuizProgress() {
        const progressData = {
            totalQuestions: this.totalQuestions,
            correctAnswers: this.correctAnswers,
            quizHistory: this.quizHistory.slice(-50) // Keep last 50 quizzes
        };
        
        localStorage.setItem('solarSystemQuizProgress', JSON.stringify(progressData));
    }
    
    loadQuizProgress() {
        const saved = localStorage.getItem('solarSystemQuizProgress');
        if (saved) {
            const data = JSON.parse(saved);
            this.totalQuestions = data.totalQuestions || 0;
            this.correctAnswers = data.correctAnswers || 0;
            this.quizHistory = data.quizHistory || [];
        }
    }
    
    getQuizStats() {
        const accuracy = this.totalQuestions > 0 ? (this.correctAnswers / this.totalQuestions) * 100 : 0;
        
        // Calculate average time per question
        const totalTime = this.quizHistory.reduce((sum, quiz) => sum + quiz.timeSpent, 0);
        const avgTime = this.totalQuestions > 0 ? totalTime / this.totalQuestions / 1000 : 0;
        
        // Find favorite topic (planet with most quizzes)
        const topicCounts = {};
        this.quizHistory.forEach(quiz => {
            if (quiz.planetContext) {
                topicCounts[quiz.planetContext] = (topicCounts[quiz.planetContext] || 0) + 1;
            }
        });
        
        const favoriteTopic = Object.keys(topicCounts).reduce((a, b) => 
            topicCounts[a] > topicCounts[b] ? a : b, null);
        
        return {
            totalQuestions: this.totalQuestions,
            correctAnswers: this.correctAnswers,
            accuracy: accuracy.toFixed(1),
            averageTime: avgTime.toFixed(1),
            favoriteTopic: favoriteTopic
        };
    }
    
    generatePersonalizedQuiz(difficulty = 'medium') {
        // Analyze player's weak areas
        const topicPerformance = {};
        
        this.quizHistory.forEach(quiz => {
            if (quiz.planetContext) {
                if (!topicPerformance[quiz.planetContext]) {
                    topicPerformance[quiz.planetContext] = { correct: 0, total: 0 };
                }
                topicPerformance[quiz.planetContext].total++;
                if (quiz.correct) {
                    topicPerformance[quiz.planetContext].correct++;
                }
            }
        });
        
        // Find topics that need improvement
        const weakTopics = Object.keys(topicPerformance).filter(topic => {
            const performance = topicPerformance[topic];
            return performance.total >= 3 && (performance.correct / performance.total) < 0.7;
        });
        
        // Prioritize questions from weak topics
        if (weakTopics.length > 0) {
            const randomWeakTopic = weakTopics[Math.floor(Math.random() * weakTopics.length)];
            this.showRandomQuiz(randomWeakTopic);
        } else {
            this.showRandomQuiz();
        }
    }
    
    createCustomQuiz(questions) {
        // Allow for custom quiz creation with specific questions
        if (!Array.isArray(questions) || questions.length === 0) return;
        
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        this.currentQuiz = {
            ...randomQuestion,
            startTime: Date.now(),
            isCustom: true
        };
        
        this.displayQuiz(randomQuestion);
    }
    
    showQuizStats() {
        const stats = this.getQuizStats();
        const message = `
            Quiz Statistics:
            Total Questions: ${stats.totalQuestions}
            Correct Answers: ${stats.correctAnswers}
            Accuracy: ${stats.accuracy}%
            Average Time: ${stats.averageTime}s
            ${stats.favoriteTopic ? `Favorite Topic: ${stats.favoriteTopic}` : ''}
        `;
        
        if (game) {
            game.showNotification(message);
        }
    }
}

// Initialize quiz manager
let quizManager;
