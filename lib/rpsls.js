// Generate random shot
function randomItem(obj) {
    const items = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

const rpsRules = {
    "rock": ["paper"],
    "paper": ["scissors"],
    "scissors": ["rock"]
};

export function playRPS(playerShot) {
}

const rpslsRules = {
    "rock": ["paper", "spock"],
    "paper": ["scissors", "lizard"],
    "scissors": ["rock", "spock"],
    "spock": ["lizard", "paper"],
    "lizard": ["rock", "scissors"]
};

export function playRPSLS(playerShot) {
    
}
