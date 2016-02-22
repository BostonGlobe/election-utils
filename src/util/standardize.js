import unitedStates from 'united-states';
import parties from './parties';

/**
 * Provides various functions to standardize AP data.
 * @module standardize
 * @example
 * import { standardize } from 'election-utils'
 */
const standardize = {

	/**
	 * Expands a state abbreviation to its title-case name.
	 *
	 * @param {String} abbr state abbreviation. Case insensitive.
	 * @returns {String} the state's title-case name.
	 * @example
	 * standardize.expandState('ia') //=> 'Iowa'
	 */
	expandState: function(abbr) {
		return unitedStates.filter(state => state.abbr === abbr.toUpperCase())[0].name;
	},

	/**
	 * Expands a party abbreviation to its title-case name.
	 *
	 * @param {String} abbr party abbreviation. Case insensitive.
	 * @returns {String} the party's title-case name.
	 * @example
	 * standardize.expandParty('dem') //=> 'Democratic'
	 */
	expandParty: function(abbr) {
		return parties.filter(party => party.abbr === abbr.toUpperCase())[0].name;
	},

	/**
	 * Collapses a state name to its upper-case abbreviation.
	 *
	 * @param {String} name state name. Case insensitive.
	 * @returns {String} the state's upper-case abbreviation.
	 * @example
	 * standardize.collapseState('iowa') //=> 'IA'
	 */
	collapseState: function(name) {
		return unitedStates.filter(state => state.name.toLowerCase() === name.toLowerCase())[0].abbr;
	},

	/**
	 * Collapses a party name to its upper-case abbreviation.
	 *
	 * @param {String} name party name. Case insensitive.
	 * @returns {String} the party's upper-case abbreviation.
	 * @example
	 * standardize.collapseParty('democratic') //=> 'DEM'
	 */
	collapseParty: function(name) {
		return parties.filter(party => party.name.toLowerCase() === name.toLowerCase())[0].abbr;
	},

	/**
	 * Convert race type to its appropriate name.
	 * Set `invert` to `true` to convert back to what AP gives us.
	 *
	 * @param {String} raceType the race type, e.g. 'Caucuses'.
	 * @param {Boolean} invert whether to invert back to what AP gives us.
	 * @returns {String}
	 * @example
	 * standardize.raceType('Caucus') //=> 'Caucuses'
	 * standardize.raceType('Primary') //=> 'Primary'
	 * standardize.raceType('Caucuses', true) //=> 'Caucus'
	 */
	raceType: function(raceType, invert) {
		return invert ? raceType.replace(/aucuses$/, 'aucus') : raceType.replace(/aucus$/, 'aucuses');
	},

	percent: function(x, shorten) {

		var decimalPlaces = shorten ? 0 : 1;

		if (x === 1) {
			return '100';
		} else if (x === 0) {
			return '0';
		} else {
			return (100*x).toFixed(decimalPlaces).toString();
		}

	}

};

export default standardize;
