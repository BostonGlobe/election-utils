const partyAbbreviations = require('./parties-abbreviations');

module.exports = {

	party: function(x) {
		return partyAbbreviations[x];
	}

};
