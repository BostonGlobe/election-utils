import dateFormat from 'dateformat'

/**
 * Format timestamp.
 * Useful for displaying `last updated`.
 *
 * @param {Array} $0.timestamp a timestamp
 * @returns {String} the formatted timestamp
 * @example
 *
 */
export default function formatTimestamp({ timestamp }) {

	const date = new Date(timestamp)

	const dateString = dateFormat(date, 'mmm d h:MM TT Z')

	return dateString
}
