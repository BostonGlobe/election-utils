import unitedStates from 'united-states';
import parties from './parties';

const standardize = {

	expand: {

		state: function(abbr) {
			return unitedStates.filter(state => state.abbr === abbr.toUpperCase())[0].name;
		},

		party: function(abbr) {
			return parties.filter(party => party.abbr === abbr.toUpperCase())[0].name;
		}

	},

	collapse: {

		state: function(name) {
			return unitedStates.filter(state => state.name.toLowerCase() === name.toLowerCase())[0].abbr;
		},

		party: function(name) {
			return parties.filter(party => party.name.toLowerCase() === name.toLowerCase())[0].abbr;
		}

	},

	raceType: function(x, undo) {
		return undo ? x.replace(/aucuses$/, 'aucus') : x.replace(/aucus$/, 'aucuses');
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
