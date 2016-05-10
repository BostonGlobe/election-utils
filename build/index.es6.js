import orderBy from 'lodash.orderby';
import unitedStates from 'united-states';
import dateFormat from 'dateformat';

var babelHelpers = {};

babelHelpers.extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

babelHelpers;

/**
 * An array of 2016 primaries candidates, each with `first`, `last`, `party` and `suspendedDate` properties.
 * @module primaries2016Candidates
 * @example
 * import { primaries2016Candidates } from 'election-utils'
 * primaries2016Candidates[0] //=> { 'last': 'bush', 'first': 'jeb', 'party': 'republican' ...}
 */
var primaries2016Candidates = [{
	"last": "bush",
	"first": "jeb",
	"party": "republican",
	"suspendedDate": "2016-02-20"
}, {
	"last": "carson",
	"first": "ben",
	"party": "republican",
	"suspendedDate": "2016-03-04"
}, {
	"last": "christie",
	"first": "chris",
	"party": "republican",
	"suspendedDate": "2016-02-10"
}, {
	"last": "clinton",
	"first": "hillary",
	"party": "democratic",
	"suspendedDate": false
}, {
	"last": "cruz",
	"first": "ted",
	"party": "republican",
	"suspendedDate": "2016-05-03"
}, {
	"last": "fiorina",
	"first": "carly",
	"party": "republican",
	"suspendedDate": "2016-02-10"
}, {
	"last": "gilmore",
	"first": "jim",
	"party": "republican",
	"suspendedDate": "2016-02-12"
}, {
	"last": "huckabee",
	"first": "mike",
	"party": "republican",
	"suspendedDate": "2016-02-01"
}, {
	"last": "kasich",
	"first": "john",
	"party": "republican",
	"suspendedDate": "2016-05-04"
}, {
	"last": "o'malley",
	"first": "martin",
	"party": "democratic",
	"suspendedDate": "2016-02-01"
}, {
	"last": "paul",
	"first": "rand",
	"party": "republican",
	"suspendedDate": "2016-02-03"
}, {
	"last": "rubio",
	"first": "marco",
	"party": "republican",
	"suspendedDate": "2016-03-15"
}, {
	"last": "sanders",
	"first": "bernie",
	"party": "democratic",
	"suspendedDate": false
}, {
	"last": "santorum",
	"first": "rick",
	"party": "republican",
	"suspendedDate": "2016-02-03"
}, {
	"last": "trump",
	"first": "donald",
	"party": "republican",
	"suspendedDate": false
}];

/**
 * An array of 2016 (AP tabulated) primaries dates, each with `stateAbbr`, `party`, `date`, `raceType`, and `resultsNote` properties.
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
	"raceType": "Caucuses",
	"resultsNote": "Vote totals are State Delegates Equivalents"
}, {
	"stateAbbr": "IA",
	"party": "Republican",
	"date": "2016-02-01",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "NH",
	"party": "Democratic",
	"date": "2016-02-09",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "NH",
	"party": "Republican",
	"date": "2016-02-09",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "NV",
	"party": "Democratic",
	"date": "2016-02-20",
	"raceType": "Caucuses",
	"resultsNote": "Vote totals are county convention delegates"
}, {
	"stateAbbr": "SC",
	"party": "Republican",
	"date": "2016-02-20",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "NV",
	"party": "Republican",
	"date": "2016-02-23",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "SC",
	"party": "Democratic",
	"date": "2016-02-27",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "AL",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "AL",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "AK",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "AR",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "AR",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "CO",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "GA",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "GA",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "MA",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "MA",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "MN",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "MN",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "OK",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "OK",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "TN",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "TN",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "TX",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "TX",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "VT",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "VT",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "VA",
	"party": "Democratic",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "VA",
	"party": "Republican",
	"date": "2016-03-01",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "KS",
	"party": "Democratic",
	"date": "2016-03-05",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "KS",
	"party": "Republican",
	"date": "2016-03-05",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "KY",
	"party": "Republican",
	"date": "2016-03-05",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "LA",
	"party": "Democratic",
	"date": "2016-03-05",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "LA",
	"party": "Republican",
	"date": "2016-03-05",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "ME",
	"party": "Republican",
	"date": "2016-03-05",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "NE",
	"party": "Democratic",
	"date": "2016-03-05",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "ME",
	"party": "Democratic",
	"date": "2016-03-06",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "HI",
	"party": "Republican",
	"date": "2016-03-08",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "ID",
	"party": "Republican",
	"date": "2016-03-08",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "MI",
	"party": "Democratic",
	"date": "2016-03-08",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "MI",
	"party": "Republican",
	"date": "2016-03-08",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "MS",
	"party": "Democratic",
	"date": "2016-03-08",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "MS",
	"party": "Republican",
	"date": "2016-03-08",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "DC",
	"party": "Republican",
	"date": "2016-03-12",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "WY",
	"party": "Republican",
	"date": "2016-03-12",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "FL",
	"party": "Democratic",
	"date": "2016-03-15",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "FL",
	"party": "Republican",
	"date": "2016-03-15",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "IL",
	"party": "Democratic",
	"date": "2016-03-15",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "IL",
	"party": "Republican",
	"date": "2016-03-15",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "MO",
	"party": "Democratic",
	"date": "2016-03-15",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "MO",
	"party": "Republican",
	"date": "2016-03-15",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "NC",
	"party": "Democratic",
	"date": "2016-03-15",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "NC",
	"party": "Republican",
	"date": "2016-03-15",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "OH",
	"party": "Democratic",
	"date": "2016-03-15",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "OH",
	"party": "Republican",
	"date": "2016-03-15",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "AZ",
	"party": "Democratic",
	"date": "2016-03-22",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "AZ",
	"party": "Republican",
	"date": "2016-03-22",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "ID",
	"party": "Democratic",
	"date": "2016-03-22",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "UT",
	"party": "Democratic",
	"date": "2016-03-22",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "UT",
	"party": "Republican",
	"date": "2016-03-22",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "AK",
	"party": "Democratic",
	"date": "2016-03-26",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "HI",
	"party": "Democratic",
	"date": "2016-03-26",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "WA",
	"party": "Democratic",
	"date": "2016-03-26",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "WI",
	"party": "Democratic",
	"date": "2016-04-05",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "WI",
	"party": "Republican",
	"date": "2016-04-05",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "WY",
	"party": "Democratic",
	"date": "2016-04-09",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "NY",
	"party": "Democratic",
	"date": "2016-04-19",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "NY",
	"party": "Republican",
	"date": "2016-04-19",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "CT",
	"party": "Democratic",
	"date": "2016-04-26",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "CT",
	"party": "Republican",
	"date": "2016-04-26",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "DE",
	"party": "Democratic",
	"date": "2016-04-26",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "DE",
	"party": "Republican",
	"date": "2016-04-26",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "MD",
	"party": "Democratic",
	"date": "2016-04-26",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "MD",
	"party": "Republican",
	"date": "2016-04-26",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "PA",
	"party": "Democratic",
	"date": "2016-04-26",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "PA",
	"party": "Republican",
	"date": "2016-04-26",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "RI",
	"party": "Democratic",
	"date": "2016-04-26",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "RI",
	"party": "Republican",
	"date": "2016-04-26",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "IN",
	"party": "Democratic",
	"date": "2016-05-03",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "IN",
	"party": "Republican",
	"date": "2016-05-03",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "NE",
	"party": "Republican",
	"date": "2016-05-10",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "WV",
	"party": "Democratic",
	"date": "2016-05-10",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "WV",
	"party": "Republican",
	"date": "2016-05-10",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "KY",
	"party": "Democratic",
	"date": "2016-05-17",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "OR",
	"party": "Democratic",
	"date": "2016-05-17",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "OR",
	"party": "Republican",
	"date": "2016-05-17",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "WA",
	"party": "Republican",
	"date": "2016-05-24",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "CA",
	"party": "Democratic",
	"date": "2016-06-07",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "CA",
	"party": "Republican",
	"date": "2016-06-07",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "MT",
	"party": "Democratic",
	"date": "2016-06-07",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "MT",
	"party": "Republican",
	"date": "2016-06-07",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "NJ",
	"party": "Democratic",
	"date": "2016-06-07",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "NJ",
	"party": "Republican",
	"date": "2016-06-07",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "NM",
	"party": "Democratic",
	"date": "2016-06-07",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "NM",
	"party": "Republican",
	"date": "2016-06-07",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "ND",
	"party": "Democratic",
	"date": "2016-06-07",
	"raceType": "Caucuses",
	"resultsNote": false
}, {
	"stateAbbr": "SD",
	"party": "Democratic",
	"date": "2016-06-07",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "SD",
	"party": "Republican",
	"date": "2016-06-07",
	"raceType": "Primary",
	"resultsNote": false
}, {
	"stateAbbr": "DC",
	"party": "Democratic",
	"date": "2016-06-14",
	"raceType": "Primary",
	"resultsNote": false
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

		var isWinner = void 0;

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

var compareStringsIgnoreCase = function compareStringsIgnoreCase(a, b) {
	return a.toUpperCase() === b.toUpperCase();
};

/**
 * Various Candidates helper functions.
 * @module Candidates
 * @example
 * import { Candidates } from 'election-utils'
 */
var Candidates = {

	/**
  * Marge `candidates` and `lookupCandidates` by adding
  * `isMainAndRunning` to each candidate.
  *
  * @param {Array} $0.candidates an array of Candidates
  * @param {Array} $1.lookupCandidates an array of lookup candidates
  * @returns {Array} a new array of items augmented with `isMainAndRunning`
  * @example
  * import { Candidates, primaries2016Candidates } from 'election-utils'
  * Candidates.addIsMainAndRunning({
  *   candidates,
  *   lookupCandidates: primaries2016Candidates
  * })[0] //=> { isMainAndRunning: true, ... }
  */
	addIsMainAndRunning: function addIsMainAndRunning(_ref) {
		var candidates = _ref.candidates;
		var lookupCandidates = _ref.lookupCandidates;
		return candidates.map(function (c) {

			// try to find this candidate in lookupCandidates
			var mainCandidate = lookupCandidates.filter(function (l) {
				return(

					// if this candidate has a first name, find its lookup counterpart
					(!c.first || compareStringsIgnoreCase(l.first, c.first)) && (

					// if this candidate has a last name, find its lookup counterpart
					!c.last || compareStringsIgnoreCase(l.last, c.last)) && (

					// if this candidate has a party, find its lookup counterpart
					!c.party || compareStringsIgnoreCase(l.party, standardize.expandParty(c.party)))
				);
			})[0];

			var isMainAndRunning = !!mainCandidate && !mainCandidate.suspendedDate;

			return babelHelpers.extends({}, c, {
				isMainAndRunning: isMainAndRunning
			});
		});
	},

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
	makeColorMappings: function makeColorMappings(_ref2) {
		var candidates = _ref2.candidates;
		var party = _ref2.party;
		var mainCandidates = _ref2.mainCandidates;


		// this will take a list of state-level candidates.
		// we then sort the list by main status, vote count and ballot order.
		// we then assign color classes based on this.
		// finally we return a hash, { candidateID: 123, colorClass: 'red' }

		// get lowercase party - we'll use it quite a bit
		var partyL = party.toLowerCase();

		// get a list of this party's candidate last names
		var partyCandidatesNames = mainCandidates.filter(function (x) {
			return x.party === partyL;
		}).map(function (x) {
			return x.last;
		});

		// add 'mainCandidate' boolean flag
		var enhancedCandidates = candidates.map(function (c) {
			return babelHelpers.extends({}, c, {
				mainCandidate: partyCandidatesNames.indexOf(c.last.toLowerCase()) > -1
			});
		});

		// sort by main, votecount, ballotorder (in that order
		var mapping = orderBy(enhancedCandidates, ['mainCandidate', 'voteCount', 'ballotOrder'], ['desc', 'desc', 'asc'])
		// and return a candidate/color class hash
		.map(function (c, i) {
			return {

				colorClass: c.mainCandidate ? partyL + '-' + i : partyL + '-other',
				candidateID: c.candidateID

			};
		});

		return mapping;
	},

	/**
  * Get the candidates' total vote count.
  *
  * @param {Array} candidates an array of Candidates
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
  * @param {Array} candidates an array of Candidates
  * @returns {Array} a new array of Candidates, sorted. Does not mutate original array.
  * @example
  * Candidates.sort(myCandidates) //=> mySortedCandidates
  */
	sort: function sort(candidates) {
		return orderBy(candidates, ['voteCount', 'ballotOrder'], ['desc', 'asc']);
	}

};

/**
 * Format timestamp.
 * Useful for displaying `last updated`.
 *
 * @param {String} $0.timestamp a timestamp
 * @returns {String} the formatted timestamp
 * @example
 * import { formatTimestamp } from 'election-utils'
 * formatTimestamp(results) //=> 'Mar. 1, 2:26 PM EST'
 */
function formatTimestamp(_ref) {
  var timestamp = _ref.timestamp;


  var date = new Date(timestamp);

  return dateFormat(date, 'mmm. d, h:MM TT Z');
}

export { formatTimestamp, Candidates, Candidate, standardize, parties, raceTypes, primaries2016Dates, primaries2016Candidates };