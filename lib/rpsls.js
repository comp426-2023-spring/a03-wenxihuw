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
    if (playerShot === undefined) {
        return {"player": randomItem(rpsRules)};
    }

    const lowerCaseShot = playerShot.toLowerCase();
    if (!(lowerCaseShot in rpsRules)) {
        console.log(
            `Invalid Shot
            Rules for Rock Paper Scissors:

                - Scissors CUTS Paper
                - Paper COVERS Rock
                - Rock CRUSHES Scissors
            `
        );
        process.exit(1);
    }

    const opponentShot = randomItem(rpsRules);
    const result = rpsRules[lowerCaseShot].includes(opponentShot.toLowerCase()) ? "lose" : "win";
    if (lowerCaseShot == opponentShot) result = "tie";

    return {"player": playerShot, "opponent": opponentShot, "result": result};
}

const rpslsRules = {
    "rock": ["paper", "spock"],
    "paper": ["scissors", "lizard"],
    "scissors": ["rock", "spock"],
    "spock": ["lizard", "paper"],
    "lizard": ["rock", "scissors"]
};

export function playRPSLS(playerShot) {
    if (playerShot === undefined) {
        return {"player": randomItem(rpslsRules)};
    }

    const lowerCaseShot = playerShot.toLowerCase();
    if (!(lowerCaseShot in rpslsRules)) {
        console.log(
            `Invalid Shot
            Rules for the Lizard-Spock Espansion of Rock Paper Scissors:
                - Scissors CUTS Paper
                - Paper COVERS Rock
                - Rock SMOOSHES Lizard
                - Lizard POISONS Spock
                - Spock SMASHES Scissors
                - Scissors DECAPITATES Lizard
                - Lizard EATS Paper
                - Paper DISPROVES Spock
                - Spock VAPORIZES Rock
                - Rock CRUSHES Scissors
            `
        );
        process.exit(1);
    }

    const opponentShot = randomItem(rpslsRules);
    const result = rpslsRules[lowerCaseShot].includes(opponentShot.toLowerCase()) ? "lose" : "win";
    if (lowerCaseShot == opponentShot) result = "tie";

    return {"player": playerShot, "opponent": opponentShot, "result": result};
}
