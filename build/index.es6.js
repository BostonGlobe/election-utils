import orderBy from 'lodash.orderby';
import unitedStates from 'united-states';

/**
 * An array of 2016 primaries dates, each with `stateAbbr`, `party`, `date` and `raceType` properties.
 * Only contains state presidential primaries.
 * @module primaries2016Dates
 * @example
 * import { primaries2016Dates } from 'election-utils'
 * primaries2016Dates[0] //=> { stateAbbr: 'IA', party: 'Democratic', date: '2016-02-01', ... }
 */
var primaries2016Dates = [{
	"stateAbbr": "IA",
	"party": "Democratic",
	"date": "2016-02-01",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "IA",
	"party": "Republican",
	"date": "2016-02-01",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "NH",
	"party": "Democratic",
	"date": "2016-02-09",
	"raceType": "Primary"
}, {
	"stateAbbr": "NH",
	"party": "Republican",
	"date": "2016-02-09",
	"raceType": "Primary"
}, {
	"stateAbbr": "NV",
	"party": "Democratic",
	"date": "2016-02-20",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "SC",
	"party": "Republican",
	"date": "2016-02-20",
	"raceType": "Primary"
}, {
	"stateAbbr": "NV",
	"party": "Republican",
	"date": "2016-02-23",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "SC",
	"party": "Democratic",
	"date": "2016-02-27",
	"raceType": "Primary"
}, {
	"stateAbbr": "AL",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "AL",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "AK",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "AR",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "AR",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "CO",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "GA",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "GA",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "MA",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "MA",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "MN",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "MN",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "OK",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "OK",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "TN",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "TN",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "TX",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "TX",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "VT",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "VT",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "VA",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "VA",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary"
}, {
	"stateAbbr": "KS",
	"party": "Democratic",
	"date": "2016-03-05",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "KS",
	"party": "Republican",
	"date": "2016-03-05",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "KY",
	"party": "Republican",
	"date": "2016-03-05",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "LA",
	"party": "Democratic",
	"date": "2016-03-05",
	"raceType": "Primary"
}, {
	"stateAbbr": "LA",
	"party": "Republican",
	"date": "2016-03-05",
	"raceType": "Primary"
}, {
	"stateAbbr": "ME",
	"party": "Republican",
	"date": "2016-03-05",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "NE",
	"party": "Democratic",
	"date": "2016-03-05",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "ME",
	"party": "Democratic",
	"date": "2016-03-06",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "PR",
	"party": "Republican",
	"date": "2016-03-06",
	"raceType": "Primary"
}, {
	"stateAbbr": "HI",
	"party": "Republican",
	"date": "2016-03-08",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "ID",
	"party": "Republican",
	"date": "2016-03-08",
	"raceType": "Primary"
}, {
	"stateAbbr": "MI",
	"party": "Democratic",
	"date": "2016-03-08",
	"raceType": "Primary"
}, {
	"stateAbbr": "MI",
	"party": "Republican",
	"date": "2016-03-08",
	"raceType": "Primary"
}, {
	"stateAbbr": "MS",
	"party": "Democratic",
	"date": "2016-03-08",
	"raceType": "Primary"
}, {
	"stateAbbr": "MS",
	"party": "Republican",
	"date": "2016-03-08",
	"raceType": "Primary"
}, {
	"stateAbbr": "FL",
	"party": "Democratic",
	"date": "2016-03-15",
	"raceType": "Primary"
}, {
	"stateAbbr": "FL",
	"party": "Republican",
	"date": "2016-03-15",
	"raceType": "Primary"
}, {
	"stateAbbr": "IL",
	"party": "Democratic",
	"date": "2016-03-15",
	"raceType": "Primary"
}, {
	"stateAbbr": "IL",
	"party": "Republican",
	"date": "2016-03-15",
	"raceType": "Primary"
}, {
	"stateAbbr": "MO",
	"party": "Democratic",
	"date": "2016-03-15",
	"raceType": "Primary"
}, {
	"stateAbbr": "MO",
	"party": "Republican",
	"date": "2016-03-15",
	"raceType": "Primary"
}, {
	"stateAbbr": "NC",
	"party": "Democratic",
	"date": "2016-03-15",
	"raceType": "Primary"
}, {
	"stateAbbr": "NC",
	"party": "Republican",
	"date": "2016-03-15",
	"raceType": "Primary"
}, {
	"stateAbbr": "OH",
	"party": "Democratic",
	"date": "2016-03-15",
	"raceType": "Primary"
}, {
	"stateAbbr": "OH",
	"party": "Republican",
	"date": "2016-03-15",
	"raceType": "Primary"
}, {
	"stateAbbr": "AZ",
	"party": "Democratic",
	"date": "2016-03-22",
	"raceType": "Primary"
}, {
	"stateAbbr": "AZ",
	"party": "Republican",
	"date": "2016-03-22",
	"raceType": "Primary"
}, {
	"stateAbbr": "ID",
	"party": "Democratic",
	"date": "2016-03-22",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "UT",
	"party": "Democratic",
	"date": "2016-03-22",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "UT",
	"party": "Republican",
	"date": "2016-03-22",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "AK",
	"party": "Democratic",
	"date": "2016-03-26",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "HI",
	"party": "Democratic",
	"date": "2016-03-26",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "WA",
	"party": "Democratic",
	"date": "2016-03-26",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "WI",
	"party": "Democratic",
	"date": "2016-04-05",
	"raceType": "Primary"
}, {
	"stateAbbr": "WI",
	"party": "Republican",
	"date": "2016-04-05",
	"raceType": "Primary"
}, {
	"stateAbbr": "WY",
	"party": "Democratic",
	"date": "2016-04-09",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "NY",
	"party": "Democratic",
	"date": "2016-04-19",
	"raceType": "Primary"
}, {
	"stateAbbr": "NY",
	"party": "Republican",
	"date": "2016-04-19",
	"raceType": "Primary"
}, {
	"stateAbbr": "CT",
	"party": "Democratic",
	"date": "2016-04-26",
	"raceType": "Primary"
}, {
	"stateAbbr": "CT",
	"party": "Republican",
	"date": "2016-04-26",
	"raceType": "Primary"
}, {
	"stateAbbr": "DE",
	"party": "Democratic",
	"date": "2016-04-26",
	"raceType": "Primary"
}, {
	"stateAbbr": "DE",
	"party": "Republican",
	"date": "2016-04-26",
	"raceType": "Primary"
}, {
	"stateAbbr": "MD",
	"party": "Democratic",
	"date": "2016-04-26",
	"raceType": "Primary"
}, {
	"stateAbbr": "MD",
	"party": "Republican",
	"date": "2016-04-26",
	"raceType": "Primary"
}, {
	"stateAbbr": "PA",
	"party": "Democratic",
	"date": "2016-04-26",
	"raceType": "Primary"
}, {
	"stateAbbr": "PA",
	"party": "Republican",
	"date": "2016-04-26",
	"raceType": "Primary"
}, {
	"stateAbbr": "RI",
	"party": "Democratic",
	"date": "2016-04-26",
	"raceType": "Primary"
}, {
	"stateAbbr": "RI",
	"party": "Republican",
	"date": "2016-04-26",
	"raceType": "Primary"
}, {
	"stateAbbr": "IN",
	"party": "Democratic",
	"date": "2016-05-03",
	"raceType": "Primary"
}, {
	"stateAbbr": "IN",
	"party": "Republican",
	"date": "2016-05-03",
	"raceType": "Primary"
}, {
	"stateAbbr": "NE",
	"party": "Republican",
	"date": "2016-05-10",
	"raceType": "Primary"
}, {
	"stateAbbr": "WV",
	"party": "Democratic",
	"date": "2016-05-10",
	"raceType": "Primary"
}, {
	"stateAbbr": "WV",
	"party": "Republican",
	"date": "2016-05-10",
	"raceType": "Primary"
}, {
	"stateAbbr": "KY",
	"party": "Democratic",
	"date": "2016-05-17",
	"raceType": "Primary"
}, {
	"stateAbbr": "OR",
	"party": "Democratic",
	"date": "2016-05-17",
	"raceType": "Primary"
}, {
	"stateAbbr": "OR",
	"party": "Republican",
	"date": "2016-05-17",
	"raceType": "Primary"
}, {
	"stateAbbr": "WA",
	"party": "Republican",
	"date": "2016-05-24",
	"raceType": "Primary"
}, {
	"stateAbbr": "PR",
	"party": "Democratic",
	"date": "2016-06-05",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "CA",
	"party": "Democratic",
	"date": "2016-06-07",
	"raceType": "Primary"
}, {
	"stateAbbr": "CA",
	"party": "Republican",
	"date": "2016-06-07",
	"raceType": "Primary"
}, {
	"stateAbbr": "MT",
	"party": "Democratic",
	"date": "2016-06-07",
	"raceType": "Primary"
}, {
	"stateAbbr": "MT",
	"party": "Republican",
	"date": "2016-06-07",
	"raceType": "Primary"
}, {
	"stateAbbr": "NJ",
	"party": "Democratic",
	"date": "2016-06-07",
	"raceType": "Primary"
}, {
	"stateAbbr": "NJ",
	"party": "Republican",
	"date": "2016-06-07",
	"raceType": "Primary"
}, {
	"stateAbbr": "NM",
	"party": "Democratic",
	"date": "2016-06-07",
	"raceType": "Primary"
}, {
	"stateAbbr": "NM",
	"party": "Republican",
	"date": "2016-06-07",
	"raceType": "Primary"
}, {
	"stateAbbr": "ND",
	"party": "Democratic",
	"date": "2016-06-07",
	"raceType": "Caucuses"
}, {
	"stateAbbr": "SD",
	"party": "Democratic",
	"date": "2016-06-07",
	"raceType": "Primary"
}, {
	"stateAbbr": "SD",
	"party": "Republican",
	"date": "2016-06-07",
	"raceType": "Primary"
}, {
	"stateAbbr": "DC",
	"party": "Democratic",
	"date": "2016-06-14",
	"raceType": "Primary"
}];

/**
 * An array of race types.
 * @module raceTypes
 * @example
 * import { raceTypes } from 'election-utils'
 * raceTypes[0] //=> 'Caucuses'
 */
var raceTypes = ['Caucuses', 'Primary'];

/**
 * An array of parties, each with an `abbr` and `name` property.
 * @module parties
 * @example
 * import { parties } from 'election-utils'
 * parties[0] //=> { abbr: 'DEM', name: 'Democratic' }
 */
var parties = [{
	abbr: 'DEM',
	name: 'Democratic'
}, {
	abbr: 'GOP',
	name: 'Republican'
}];

/**
 * Provides various functions to standardize AP data.
 * @module standardize
 * @example
 * import { standardize } from 'election-utils'
 */
var standardize = {

	/**
  * Expands a state abbreviation to its title-case name.
  *
  * @param {String} abbr state abbreviation. Case insensitive.
  * @returns {String} the state's title-case name.
  * @example
  * standardize.expandState('ia') //=> 'Iowa'
  */
	expandState: function expandState(abbr) {
		return unitedStates.filter(function (state) {
			return state.abbr === abbr.toUpperCase();
		})[0].name;
	},

	/**
  * Expands a party abbreviation to its title-case name.
  *
  * @param {String} abbr party abbreviation. Case insensitive.
  * @returns {String} the party's title-case name.
  * @example
  * standardize.expandParty('dem') //=> 'Democratic'
  */
	expandParty: function expandParty(abbr) {
		return parties.filter(function (party) {
			return party.abbr === abbr.toUpperCase();
		})[0].name;
	},

	/**
  * Collapses a state name to its upper-case abbreviation.
  *
  * @param {String} name state name. Case insensitive.
  * @returns {String} the state's upper-case abbreviation.
  * @example
  * standardize.collapseState('iowa') //=> 'IA'
  */
	collapseState: function collapseState(name) {
		return unitedStates.filter(function (state) {
			return state.name.toLowerCase() === name.toLowerCase();
		})[0].abbr;
	},

	/**
  * Collapses a party name to its upper-case abbreviation.
  *
  * @param {String} name party name. Case insensitive.
  * @returns {String} the party's upper-case abbreviation.
  * @example
  * standardize.collapseParty('democratic') //=> 'DEM'
  */
	collapseParty: function collapseParty(name) {
		return parties.filter(function (party) {
			return party.name.toLowerCase() === name.toLowerCase();
		})[0].abbr;
	},

	/**
  * Convert race type to its appropriate name.
  * Set `invert` to `true` to convert back to what AP gives us.
  *
  * @param {String} rType the race type, e.g. 'Caucuses'.
  * @param {Boolean} invert whether to invert back to what AP gives us.
  * @returns {String} the converted race type.
  * @example
  * standardize.raceType('Caucus') //=> 'Caucuses'
  * standardize.raceType('Primary') //=> 'Primary'
  * standardize.raceType('Caucuses', true) //=> 'Caucus'
  */
	raceType: function raceType(rType, invert) {
		return invert ? rType.replace(/aucuses$/, 'aucus') : rType.replace(/aucus$/, 'aucuses');
	},

	percent: function percent(x, shorten) {

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

/**
 * Various Candidate helper functions.
 * @module Candidate
 * @example
 * import { Candidate } from 'election-utils'
 */
var Candidate = {

	/**
  * Determine if this candidate is the winner.
  * Will respect `winnerOverride` if present.
  *
  * @param {Object} candidate the candidate
  * @returns {Boolean} whether candidate is winner
  * @example
  * Candidate.isWinner(winningCandidate) //=> true
  */
	isWinner: function isWinner(candidate) {
		var winner = candidate.winner;
		var winnerOverride = candidate.winnerOverride;

		var isWinner = undefined;

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

/**
 * Various Candidates helper functions.
 * @module Candidates
 * @example
 * import { Candidates } from 'election-utils'
 */
var Candidates = {

	/**
  * Get the candidates' total vote count.
  *
  * @param {Object} candidates an array of Candidates
  * @returns {Number} the total vote count
  * @example
  * Candidates.getVoteCount(myCandidates) //=> 123
  */
	getVoteCount: function getVoteCount(candidates) {
		return candidates.map(function (x) {
			return x.voteCount;
		}).reduce(function (x, y) {
			return x + y;
		}, 0);
	},

	/**
  * Sort candidates by vote count and ballot order, in that order.
  *
  * @param {Object} candidates an array of Candidates
  * @returns {Array} a new array of Candidates, sorted. Does not mutate original array.
  * @example
  * Candidates.sort(myCandidates) //=> mySortedCandidates
  */
	sort: function sort(candidates) {
		return orderBy(candidates, ['voteCount', 'ballotOrder'], ['desc', 'asc']);
	}

};

export { Candidates, Candidate, standardize, parties, raceTypes, primaries2016Dates };