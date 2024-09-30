function showComparisonScores() {
    const totalVotes = Number(document.getElementById("votes").value);
    const numberOfCandidates = Number(document.getElementById("candidates").value);
    const resultsDiv = document.getElementById("answer");
    let resultsHTML = "";

    for (let i = 1; i <= numberOfCandidates; i++) {
        const score = (totalVotes / i).toFixed(0);
        resultsHTML += `${i}. candidate: ${score}<br>`;
    }

    resultsDiv.innerHTML = resultsHTML;
}