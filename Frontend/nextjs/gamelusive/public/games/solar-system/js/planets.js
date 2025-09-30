// Real astronomical data for planets
const planetsData = {
    mercury: {
        name: "Mercury",
        diameter: "4,879 km",
        gravity: "3.7 m/s²",
        temperature: "-173°C to 427°C",
        atmosphere: "Virtually none",
        distanceFromSun: "57.9 million km",
        orbitalPeriod: "88 Earth days",
        rotationPeriod: "59 Earth days",
        moons: 0,
        composition: "Iron core, silicate mantle",
        facts: [
            "Smallest planet in our solar system",
            "Closest planet to the Sun",
            "Has the most extreme temperature variations",
            "No atmosphere to retain heat"
        ],
        challenges: [
            "Extreme temperature fluctuations",
            "No atmosphere for protection",
            "High solar radiation",
            "Long day-night cycles"
        ],
        resources: {
            metals: 95,
            water: 5,
            organics: 0,
            rare: 30
        }
    },
    
    venus: {
        name: "Venus",
        diameter: "12,104 km",
        gravity: "8.87 m/s²",
        temperature: "462°C (surface)",
        atmosphere: "96% CO₂, 3.5% N₂",
        distanceFromSun: "108.2 million km",
        orbitalPeriod: "225 Earth days",
        rotationPeriod: "243 Earth days (retrograde)",
        moons: 0,
        composition: "Iron core, rocky mantle",
        facts: [
            "Hottest planet in solar system",
            "Rotates backwards (retrograde)",
            "Day longer than year",
            "Thick, toxic atmosphere"
        ],
        challenges: [
            "Extreme greenhouse effect",
            "Crushing atmospheric pressure",
            "Corrosive sulfuric acid clouds",
            "Surface hot enough to melt lead"
        ],
        resources: {
            metals: 80,
            water: 0,
            organics: 0,
            rare: 25
        }
    },
    
    earth: {
        name: "Earth",
        diameter: "12,756 km",
        gravity: "9.8 m/s²",
        temperature: "-89°C to 58°C",
        atmosphere: "78% N₂, 21% O₂, 1% other",
        distanceFromSun: "149.6 million km",
        orbitalPeriod: "365.25 days",
        rotationPeriod: "24 hours",
        moons: 1,
        composition: "Iron core, silicate mantle, water oceans",
        facts: [
            "Only known planet with life",
            "71% of surface covered by water",
            "Protected by magnetic field",
            "Perfect distance from Sun for liquid water"
        ],
        challenges: [
            "Limited space resources",
            "Gravity well for launches",
            "Environmental protection needed",
            "Resource depletion"
        ],
        resources: {
            metals: 60,
            water: 95,
            organics: 90,
            rare: 15
        }
    },
    
    mars: {
        name: "Mars",
        diameter: "6,792 km",
        gravity: "3.71 m/s²",
        temperature: "-87°C to -5°C",
        atmosphere: "95% CO₂, 3% N₂, 2% Ar",
        distanceFromSun: "227.9 million km",
        orbitalPeriod: "687 Earth days",
        rotationPeriod: "24.6 hours",
        moons: 2,
        composition: "Iron core, basaltic rock surface",
        facts: [
            "Known as the Red Planet",
            "Has the largest volcano in solar system",
            "Evidence of ancient water flows",
            "Polar ice caps contain water"
        ],
        challenges: [
            "Thin atmosphere",
            "Cold temperatures",
            "Radiation exposure",
            "Dust storms"
        ],
        resources: {
            metals: 70,
            water: 30,
            organics: 10,
            rare: 40
        }
    },
    
    jupiter: {
        name: "Jupiter",
        diameter: "142,984 km",
        gravity: "24.79 m/s²",
        temperature: "-108°C (cloud tops)",
        atmosphere: "89% H₂, 10% He, 1% other",
        distanceFromSun: "778.5 million km",
        orbitalPeriod: "12 Earth years",
        rotationPeriod: "9.9 hours",
        moons: 95,
        composition: "Gas giant, mostly hydrogen and helium",
        facts: [
            "Largest planet in solar system",
            "Great Red Spot is a giant storm",
            "Acts as 'vacuum cleaner' for asteroids",
            "Has ring system"
        ],
        challenges: [
            "No solid surface",
            "Extreme radiation",
            "Crushing gravity",
            "Violent atmospheric conditions"
        ],
        resources: {
            metals: 20,
            water: 40,
            organics: 60,
            rare: 80
        }
    },
    
    saturn: {
        name: "Saturn",
        diameter: "120,536 km",
        gravity: "10.44 m/s²",
        temperature: "-139°C (cloud tops)",
        atmosphere: "96% H₂, 3% He, 1% other",
        distanceFromSun: "1.43 billion km",
        orbitalPeriod: "29 Earth years",
        rotationPeriod: "10.7 hours",
        moons: 146,
        composition: "Gas giant, less dense than water",
        facts: [
            "Famous for its ring system",
            "Less dense than water",
            "Moon Titan has thick atmosphere",
            "Hexagonal storm at north pole"
        ],
        challenges: [
            "No solid surface",
            "Extreme distance from Sun",
            "Complex ring system navigation",
            "Low temperature"
        ],
        resources: {
            metals: 15,
            water: 50,
            organics: 70,
            rare: 85
        }
    },
    
    uranus: {
        name: "Uranus",
        diameter: "51,118 km",
        gravity: "8.69 m/s²",
        temperature: "-197°C",
        atmosphere: "83% H₂, 15% He, 2% CH₄",
        distanceFromSun: "2.87 billion km",
        orbitalPeriod: "84 Earth years",
        rotationPeriod: "17.2 hours",
        moons: 27,
        composition: "Ice giant, water, methane, ammonia",
        facts: [
            "Rotates on its side",
            "Coldest planetary atmosphere",
            "Faint ring system",
            "Extreme seasonal variations"
        ],
        challenges: [
            "Extreme cold",
            "Sideways rotation",
            "Very distant from Sun",
            "Methane atmosphere"
        ],
        resources: {
            metals: 25,
            water: 60,
            organics: 40,
            rare: 70
        }
    },
    
    neptune: {
        name: "Neptune",
        diameter: "49,528 km",
        gravity: "11.15 m/s²",
        temperature: "-201°C",
        atmosphere: "80% H₂, 19% He, 1% CH₄",
        distanceFromSun: "4.5 billion km",
        orbitalPeriod: "165 Earth years",
        rotationPeriod: "16.1 hours",
        moons: 16,
        composition: "Ice giant, similar to Uranus",
        facts: [
            "Windiest planet in solar system",
            "Deep blue color from methane",
            "Great Dark Spot storm",
            "Discovered through mathematics"
        ],
        challenges: [
            "Fastest winds in solar system",
            "Extremely distant",
            "Very cold temperatures",
            "Complex magnetic field"
        ],
        resources: {
            metals: 30,
            water: 55,
            organics: 35,
            rare: 75
        }
    }
};

// Moon data
const moonData = {
    moon: {
        name: "Moon",
        diameter: "3,475 km",
        gravity: "1.62 m/s²",
        temperature: "-173°C to 127°C",
        atmosphere: "Virtually none",
        composition: "Rocky, similar to Earth's crust",
        facts: [
            "Earth's only natural satellite",
            "Formed from ancient collision",
            "Always shows same face to Earth",
            "Causes Earth's tides"
        ],
        resources: {
            metals: 50,
            water: 20,
            organics: 5,
            rare: 35
        }
    }
};

// Asteroid belt data
const asteroidData = {
    ceres: {
        name: "Ceres",
        diameter: "940 km",
        gravity: "0.27 m/s²",
        temperature: "-105°C",
        atmosphere: "Thin water vapor",
        composition: "Rock and ice",
        resources: {
            metals: 80,
            water: 70,
            organics: 30,
            rare: 60
        }
    }
};

// Calculate orbital positions for realistic distances (scaled)
function calculateOrbitRadius(distanceFromSun) {
    // Scale down astronomical units for display
    const AU = 149.6; // million km
    const scale = 100; // pixels per AU
    return (distanceFromSun / AU) * scale;
}

// Calculate resource availability based on distance and composition
function calculateResourceYield(planet, buildingType) {
    const baseYield = {
        habitat: { oxygen: 10, energy: -5 },
        lab: { research: 5, energy: -3 },
        farm: { food: 15, oxygen: 5, energy: -2 },
        factory: { materials: 8, energy: -10 },
        solar: { energy: 12 },
        mine: { materials: 20, energy: -8 }
    };
    
    const planetModifiers = {
        mercury: { solar: 2.0, mine: 1.5 },
        venus: { solar: 1.5, mine: 1.2 },
        earth: { farm: 1.5, habitat: 1.2 },
        mars: { mine: 1.3, farm: 0.7 },
        jupiter: { lab: 1.5, factory: 1.2 },
        saturn: { lab: 1.4, factory: 1.1 },
        uranus: { lab: 1.2, mine: 0.8 },
        neptune: { lab: 1.3, mine: 0.7 }
    };
    
    const base = baseYield[buildingType] || {};
    const modifier = planetModifiers[planet]?.[buildingType] || 1.0;
    
    const result = {};
    for (const [resource, amount] of Object.entries(base)) {
        result[resource] = Math.round(amount * modifier);
    }
    
    return result;
}

// Get planet scale factor for visual representation
function getPlanetScale(planetName) {
    const scales = {
        mercury: 0.7,
        venus: 0.95,
        earth: 1.0,
        mars: 0.8,
        jupiter: 2.5,
        saturn: 2.2,
        uranus: 1.8,
        neptune: 1.7
    };
    return scales[planetName] || 1.0;
}

// Mission templates based on real space exploration
const missionTemplates = {
    launch: {
        name: "Launch Preparation",
        description: "Prepare your rocket and crew for the journey to space",
        objectives: [
            "Build launch facility",
            "Train astronauts",
            "Calculate trajectory"
        ],
        scienceQuiz: "rocketScience"
    },
    
    earth_orbit: {
        name: "Earth Orbit",
        description: "Establish a space station in Earth orbit",
        objectives: [
            "Achieve stable orbit",
            "Test life support systems",
            "Conduct zero-gravity experiments"
        ],
        scienceQuiz: "orbitalMechanics"
    },
    
    moon_landing: {
        name: "Moon Landing",
        description: "Land on the Moon and establish a lunar base",
        objectives: [
            "Navigate to Moon",
            "Perform lunar landing",
            "Set up moon base"
        ],
        scienceQuiz: "lunarScience"
    },
    
    mars_journey: {
        name: "Mars Journey",
        description: "Travel to Mars using efficient trajectory",
        objectives: [
            "Plan Hohmann transfer",
            "Survive long journey",
            "Enter Mars orbit"
        ],
        scienceQuiz: "interplanetaryTravel"
    },
    
    mars_colony: {
        name: "Mars Colony",
        description: "Establish sustainable colony on Mars",
        objectives: [
            "Land on Mars surface",
            "Build life support systems",
            "Achieve self-sufficiency"
        ],
        scienceQuiz: "planetaryColonization"
    }
};

// Make planetsData globally accessible
window.planetsData = planetsData;
