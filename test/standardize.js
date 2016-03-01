const test = require('tape');
const standardize = require('./../build/index.js').standardize;

test('expandState', (assert) => {
	assert.equal(standardize.expandState('iA'), 'Iowa');
	assert.equal(standardize.expandState('Gu'), 'Guam');
	assert.end();
});

test('expandParty', (assert) => {
	assert.equal(standardize.expandParty('dEm'), 'Democratic');
	assert.end();
});

test('collapseState', (assert) => {
	assert.equal(standardize.collapseState('iOwA'), 'IA');
	assert.equal(standardize.collapseState('GuAm'), 'GU');
	assert.end();
});

test('collapseParty', (assert) => {
	assert.equal(standardize.collapseParty('demOcraTIC'), 'DEM');
	assert.end();
});

test('raceType', (assert) => {
	assert.equal(standardize.raceType('Caucus'), 'Caucuses');
	assert.equal(standardize.raceType('Caucuses'), 'Caucuses');
	assert.equal(standardize.raceType('Caucuses', true), 'Caucus');
	assert.equal(standardize.raceType('Primary'), 'Primary');
	assert.end();
});
