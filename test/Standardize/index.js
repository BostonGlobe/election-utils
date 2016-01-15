const test = require('tape');
const Standardize = require('./../../build/index').Standardize;

test('expand.state', (assert) => {
	assert.equal(Standardize.expand.state('iA'), 'Iowa');
	assert.end();
});

test('expand.party', (assert) => {
	assert.equal(Standardize.expand.party('dEm'), 'Democratic');
	assert.end();
});

test('collapse.state', (assert) => {
	assert.equal(Standardize.collapse.state('iOwA'), 'IA');
	assert.end();
});

test('collapse.party', (assert) => {
	assert.equal(Standardize.collapse.party('demOcraTIC'), 'DEM');
	assert.end();
});

test('raceType', (assert) => {
	assert.equal(Standardize.raceType('Caucus'), 'Caucuses');
	assert.equal(Standardize.raceType('Caucuses'), 'Caucuses');
	assert.equal(Standardize.raceType('Caucuses', true), 'Caucus');
	assert.equal(Standardize.raceType('Primary'), 'Primary');
	assert.end();
});
