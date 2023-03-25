// Generate random shot
function randomItem(obj) {
    const items = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[~~randomIndex];
}

const rpsRules = {
    "rock": ["paper"],
    "paper": ["scissors"],
    "scissors": ["rock"]
};

export function rps(playerShot) {
    if (playerShot === undefined) {
        return {"player": randomItem(rpsRules)};
    }

    const lowerCaseShot = playerShot.toLowerCase();
    if (!(lowerCaseShot in rpsRules)) {
        console.log(
            `Rules for Rock Paper Scissors:

                - Scissors CUTS Paper
                - Paper COVERS Rock
                - Rock CRUSHES Scissors
            `
        );
        process.exit(1);
    }

    let opponentShot = randomItem(rpsRules);
    let result = rpsRules[lowerCaseShot].includes(opponentShot.toLowerCase()) ? "lose" : "win";
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

export function rpsls(playerShot) {
    if (playerShot === undefined) {
        return {"player": randomItem(rpslsRules)};
    }

    const lowerCaseShot = playerShot.toLowerCase();
    if (!(lowerCaseShot in rpslsRules)) {
        console.log('Rules for the Lizard-Spock Espansion of Rock Paper Scissors:' +
        '\n\n\t- Scissors CUTS Paper' +
        '\n\t- Paper COVERS Rock' +
        '\n\t- Rock SMOOSHES Lizard' +
        '\n\t- Lizard POISONS Spock' +
        '\n\t- Spock SMASHES Scissors' +
        '\n\t- Scissors DECAPITATES Lizard' +
        '\n\t- Lizard EATS Paper' +
        '\n\t- Paper DISPROVES Spock' +
        '\n\t- Spock VAPORIZES Rock' +
        '\n\t- Rock CRUSHES Scissors');
        process.exit(1);
    }

    let opponentShot = randomItem(rpslsRules);
    let result = rpslsRules[lowerCaseShot].includes(opponentShot.toLowerCase()) ? "lose" : "win";
    if (lowerCaseShot == opponentShot) result = "tie";

    return {"player": playerShot, "opponent": opponentShot, "result": result};
}
