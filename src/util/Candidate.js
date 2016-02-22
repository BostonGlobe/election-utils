/**
 * Various Candidate helper functions.
 * @module Candidate
 * @example
 * import { Candidate } from 'election-utils'
 */
const Candidate = {

	/**
	 * Determine if this candidate is the winner.
	 * Will respect winnerOverride if present.
	 *
	 * @param {Object} candidate the candidate
	 * @returns {Boolean} whether candidate is winner
	 * @example
	 * Candidate.isWinner(winningCandidate) //=> true
	 * Candidate.isWinner(winningCandidate) //=> true
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
