import dateFormat from 'dateformat'

/**
 * Format timestamp.
 * Useful for displaying `last updated`.
 *
 * @param {String} $0.timestamp a timestamp
 * @returns {String} the formatted timestamp
 * @example
 * import { formatTimestamp } from 'election-utils'
 * formatTimestamp(results) //=> 'Mar. 1 2:26 PM EST'
 */
export default function formatTimestamp({ timestamp }) {

	const date = new Date(timestamp)

	const day = dateFormat(date, 'mmm. d')
	const time = dateFormat(date, 'h:MM TT Z')

	return [day, time].join('&nbsp;&nbsp;')

}
