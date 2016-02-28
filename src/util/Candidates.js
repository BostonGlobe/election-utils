import orderBy from 'lodash.orderby';

/**
 * Various Candidates helper functions.
 * @module Candidates
 * @example
 * import { Candidates } from 'election-utils'
 */
const Candidates = {

	/**
	 * Map candidates to color classes.
	 * Useful for coloring choropleths.
	 *
	 * @param {Array} $0.candidates an array of Candidates
	 * @param {String} $1.party the Candidates' party
	 * @param {Array} $2.mainCandidates an array of main Candidates
	 * @returns {Array} an array of objects containing `colorClass` and `candidateID`
	 * @example
	 * const m = Candidates.makeColorMappings({ candidates, party, mainCandidates })
	 * m[0] //=> { colorClass: 'democratic-0', candidateID: '123' }
	 */
	makeColorMappings: ({ candidates, party, mainCandidates }) => {

		// this will take a list of state-level candidates.
		// we then sort the list by main status, vote count and ballot order.
		// we then assign color classes based on this.
		// finally we return a hash, { candidateID: 123, colorClass: 'red' }

		// get lowercase party - we'll use it quite a bit
		const partyL = party.toLowerCase()

		// get a list of this party's candidate last names
		const partyCandidatesNames = mainCandidates
			.filter(x => x.party === partyL)
			.map(x => x.last)

		// add 'mainCandidate' boolean flag
		const enhancedCandidates = candidates.map(c => ({
			...c,
			mainCandidate: partyCandidatesNames.indexOf(c.last.toLowerCase()) > -1
		}))

		// sort by main, votecount, ballotorder (in that order
		const mapping = orderBy(enhancedCandidates,
			['mainCandidate', 'voteCount', 'ballotOrder'],
			['desc', 'desc', 'asc'])
			// and return a candidate/color class hash
			.map((c, i) => ({

				colorClass: c.mainCandidate ? `${partyL}-${i}` : `${partyL}-other`,
				candidateID: c.candidateID

			}))

		return mapping

	},

	/**
	 * Get the candidates' total vote count.
	 *
	 * @param {Array} candidates an array of Candidates
	 * @returns {Number} the total vote count
	 * @example
	 * Candidates.getVoteCount(myCandidates) //=> 123
	 */
	getVoteCount: (candidates) => candidates.map(x => x.voteCount).reduce((x, y) => x + y, 0),

	/**
	 * Sort candidates by vote count and ballot order, in that order.
	 *
	 * @param {Array} candidates an array of Candidates
	 * @returns {Array} a new array of Candidates, sorted. Does not mutate original array.
	 * @example
	 * Candidates.sort(myCandidates) //=> mySortedCandidates
	 */
	sort: (candidates) => orderBy(candidates, ['voteCount', 'ballotOrder'], ['desc', 'asc'])

};

export default Candidates;
