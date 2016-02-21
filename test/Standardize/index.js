const test = require('tape');
const standardize = require('./../../build/index').standardize;

test('expand.state', (assert) => {
	assert.equal(standardize.expand.state('iA'), 'Iowa');
	assert.end();
});

test('expand.party', (assert) => {
	assert.equal(standardize.expand.party('dEm'), 'Democratic');
	assert.end();
});

test('collapse.state', (assert) => {
	assert.equal(standardize.collapse.state('iOwA'), 'IA');
	assert.end();
});

test('collapse.party', (assert) => {
	assert.equal(standardize.collapse.party('demOcraTIC'), 'DEM');
	assert.end();
});

test('raceType', (assert) => {
	assert.equal(standardize.raceType('Caucus'), 'Caucuses');
	assert.equal(standardize.raceType('Caucuses'), 'Caucuses');
	assert.equal(standardize.raceType('Caucuses', true), 'Caucus');
	assert.equal(standardize.raceType('Primary'), 'Primary');
	assert.end();
});
