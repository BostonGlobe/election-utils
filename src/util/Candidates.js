import orderBy from 'lodash.orderby';

/**
 * Various Candidates helper functions.
 * @module Candidates
 * @example
 * import { Candidates } from 'election-utils'
 */
const Candidates = {

	/**
	 * Get the candidates' total vote count.
	 *
	 * @param {Object} candidates an array of Candidates
	 * @returns {Number} the total vote count
	 * @example
	 * Candidates.getVoteCount(myCandidates) //=> 123
	 */
	getVoteCount: (cs) => cs.map(x => x.voteCount).reduce((x, y) => x + y, 0),

	/**
	 * Sort candidates by vote count and ballot order, in that order.
	 *
	 * @param {Object} candidates an array of Candidates
	 * @returns {Array} a new array of Candidates, sorted. Does not mutate original array.
	 * @example
	 * Candidates.sort(myCandidates) //=> mySortedCandidates
	 */
	sort: (cs) => orderBy(cs, ['voteCount', 'ballotOrder'], ['desc', 'asc'])

};

export default Candidates;
