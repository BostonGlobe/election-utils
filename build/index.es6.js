import orderBy from 'lodash.orderby';
import unitedStates from 'united-states';

const raceTypes = ['Caucuses', 'Primary'];

const parties = [{
	abbr: 'DEM',
	name: 'Democratic'
}, {
	abbr: 'GOP',
	name: 'Republican'
}];

const standardize = {

	expand: {

		state: function (abbr) {
			return unitedStates.filter(state => state.abbr === abbr.toUpperCase())[0].name;
		},

		party: function (abbr) {
			return parties.filter(party => party.abbr === abbr.toUpperCase())[0].name;
		}

	},

	collapse: {

		state: function (name) {
			return unitedStates.filter(state => state.name.toLowerCase() === name.toLowerCase())[0].abbr;
		},

		party: function (name) {
			return parties.filter(party => party.name.toLowerCase() === name.toLowerCase())[0].abbr;
		}

	},

	raceType: function (x, undo) {
		return undo ? x.replace(/aucuses$/, 'aucus') : x.replace(/aucus$/, 'aucuses');
	},

	percent: function (x, shorten) {

		var decimalPlaces = shorten ? 0 : 1;

		if (x === 1) {
			return '100';
		} else if (x === 0) {
			return '0';
		} else {
			return (100 * x).toFixed(decimalPlaces).toString();
		}
	}

};

const Candidate = {

	/**
  * This function adds one to its input.
  * @param {Object} candidate any number
  * @returns {Boolean} that number, plus one.
  */
	isWinner: candidate => {

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

};

const Candidates = {

	getVoteCount: cs => cs.map(x => x.voteCount).reduce((x, y) => x + y, 0),

	// sort candidates by vote count and ballot order
	sort: cs => orderBy(cs, ['voteCount', 'ballotOrder'], ['desc', 'asc'])

};

export { Candidates, Candidate, standardize, parties, raceTypes };