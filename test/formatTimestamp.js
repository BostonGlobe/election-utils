const test = require('tape')
const formatTimestamp = require('./../build/index.js').formatTimestamp
const fs = require('fs')

test('formatTimestamp', (assert) => {

	const file = fs.readFileSync('./test/fixtures/in/20160301-MA.json', 'utf8')
	const json = JSON.parse(file)
	assert.equal(formatTimestamp(json), 'Mar. 1&nbsp;&nbsp;3:46 PM EST')
	assert.end()

})
