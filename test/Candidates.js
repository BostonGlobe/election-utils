const test = require('tape')
const Candidates = require('./../build/index.js').Candidates
const primaries2016Candidates = require('./../build/index.js').primaries2016Candidates
const fs = require('fs')

test('Candidates.addIsMainAndRunning', (assert) => {

	const input = JSON.parse(
		fs.readFileSync('./test/fixtures/in/20160301-MA.json', 'utf8'))

	const output = JSON.parse(
		fs.readFileSync('./test/fixtures/out/Candidates-augmented.json', 'utf8'))

	const candidates = input.races[0].reportingUnits[0].candidates
	const augmentedCandidates = Candidates.addIsMainAndRunning({
		candidates,
		lookupCandidates: primaries2016Candidates
	})

	assert.deepEqual(augmentedCandidates, output)

	assert.end()

})

