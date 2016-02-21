const Candidate = {

	/**
	 * This function adds one to its input.
	 * @param {Object} candidate any number
	 * @returns {Boolean} that number, plus one.
	 */
	isWinner: (candidate) => {

		const { winner, winnerOverride } = candidate;
		let isWinner;

		// if there is no winner override, do whatever AP gives us
		if (!winnerOverride) {

			isWinner = winner === 'X';

		}
		// we do have a winner override
		else {

			isWinner = winnerOverride === 'Y';

		}

		return isWinner;
	}

}

export default Candidate;
