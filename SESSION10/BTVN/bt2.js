const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
};

let isKeyPlayer;

const showPlayer = (player) => {
    let rate = ((player.goals + player.assists) / player.matchesPlayed).toFixed(2);
    
    if (rate >= 1) {
        isKeyPlayer = true;
    } else {
        isKeyPlayer = false;
    }

    let result = {};
    result = console.log(`
Name: ${player.name}
Position: ${player.position}
Goals: ${player.goals}
Assists: ${player.assists}
Matches Played: ${player.matchesPlayed}
Rate: ${rate}
Is Key Player: ${isKeyPlayer}
    `);
};

showPlayer(player);