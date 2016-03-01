import dateFormat from 'dateformat'

/**
 * Create `last updated` timestamp.
 *
 * @param {Array} races an array of races
 * @returns {String} the `last updated` formatted timestamp
 * @example
 *
 */
export default function createLastUpdated(races) {

	return 'hey'

	// sort races by the most recent timestamp

}

function lastUpdated(race) {

	const { timestamp } = race

	const date = new Date(timestamp)

	const dateString = dateFormat(date, 'mmm d h:MM TT Z')

	return dateString
}
