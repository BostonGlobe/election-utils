import sortByOrder from 'lodash/collection/sortByOrder';
import addCommas from 'add-commas';
import Standardize from './../util/Standardize';

function candidateRow(candidate, index, totalVoteCount) {

	const first     = candidate.hasOwnProperty('first') ? candidate.first : '';
	const last      = candidate.hasOwnProperty('last') ? candidate.last : '';
	const voteCount = candidate.hasOwnProperty('voteCount') ? candidate.voteCount : 0;
	const percent   = candidate.voteCount/totalVoteCount;
	const pctSign   = index === 0 ? '%' : '';

	return `
		<tr>
			<th scope='row' class='candidate'><img alt='' src='assets/img/2014-11-04-ma-governor-baker.png' /><span class='long'>${[first, last].join(' ')}</span><span class='short'>${last}</span></th>
			<td class='percent'><span class='number'>${Standardize.percent(percent)}</span><span class='sign'>%</span></td>
			<td class='votes'>${addCommas(voteCount)}</td>
		</tr>
	`;

}

export default function stateResultsLargeTable(results) {

	// get state-level reporting unit
	const stateRU = results.reportingUnits.filter(x => x.level === 'state')[0];

	// sort candidates by ballot number and vote count
	const candidates = sortByOrder(stateRU.candidates, ['voteCount', 'ballotOrder'], [false, true]);

	// get the total vote count
	const totalVoteCount = candidates
		.map(x => x.voteCount)
		.reduce((x, y) => x + y);

	return `
	<table summary='A table that has the candidate, percent, and vote count across the top and the candidates down the left hand side for the 2016 ${stateRU.stateName} ${Standardize.expand.party(results.party)} ${Standardize.raceType(results.raceType).toLowerCase()}'>
		<thead>
			<tr>
				<th scope='col' class='candidate'>Candidates</th>
				<th scope='col' class='percent'>Percent</th>
				<th scope='col' class='votes'>Votes</th>
			</tr>
		</thead>
		<tbody>
			${candidates.map((x, i) => candidateRow(x, i, totalVoteCount)).join('')}
		</tbody>
	</table>

	`;

}
