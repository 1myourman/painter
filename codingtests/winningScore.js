const getTotalScore = (games) => {
	let totalScore = 0;
	games.forEach((game) => {
		const [a, b] = game.split(":");

		if (a > b) {
			totalScore += 3;
		}

		if (a === b) {
			totalScore += 1;
		}
	});
	return totalScore;
};
