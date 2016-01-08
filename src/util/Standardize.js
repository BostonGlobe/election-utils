const unitedStates = require('united-states');
const Parties      = require('./Parties');

module.exports = {

	expand: {

		state: function(abbr) {
			return unitedStates.filter(state => state.abbr === abbr.toUpperCase())[0].name;
		},

		party: function(abbr) {
			return Parties.filter(party => party.abbr === abbr.toUpperCase())[0].name;
		}

	},

	raceType: function(x) {
		return x.replace(/aucus$/, 'aucuses');
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
