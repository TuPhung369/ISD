function calculateProfit(){
    // Make a loop which is executed as many times as was set through the input field.
    let rounds = Number(document.getElementById("rounds").value);
    let totalBets = rounds; // Assuming 1 euro bet per round.
    let wins = 0; // Let win counter cumulating during every round of the loop.

    for (let i = 0; i < rounds; i++) {
        // Randomize pips between 1-6 calling Math.round((Math.random() * 5) + 1);
        let pips = Math.round((Math.random() * 5) + 1);

        // If the randomized pips is 1, 3 or 5, no pay
        if (pips === 1 || pips === 3 || pips === 5) {
            continue; // No action needed, move to the next iteration
        } else if (pips === 2 || pips === 4) {
            // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
            wins += 1.25;
        } else if (pips === 6) {
            // Otherwise the pips 6 returns the inserted bet 150%
            wins += 1.5;
        }
    }

    // Calculate the profit (euros) of the company by subtracting the win counter (euros) from the bets (euros)
    let profit = totalBets - wins;

    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById("answer").innerHTML = `Bets were altogether ${totalBets.toFixed(2)} euros<br>` +
                                                   `Wins were ${wins.toFixed(2)} euros<br>` +
                                                   `Profit was ${profit.toFixed(2)} euros`;
}
