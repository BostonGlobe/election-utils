module.exports = {

	raceType: function(x) {
		return x.replace(/^caucus$/, 'caucuses');
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
