import sortByOrder from 'lodash/collection/sortByOrder';
import addCommas from 'add-commas';
import Standardize from './../util/Standardize';

function candidateRow(candidate, index, totalVoteCount) {

	const first     = candidate.hasOwnProperty('first') ? candidate.first : '';
	const last      = candidate.hasOwnProperty('last') ? candidate.last : '';
	const voteCount = candidate.hasOwnProperty('voteCount') ? candidate.voteCount : 0;
	const percent   = totalVoteCount > 0 ? candidate.voteCount/totalVoteCount : 0;
	const displayPct = Standardize.percent(percent);

	const winnerTag = candidate.winner === 'X' ? '<span class="winner">✔</span>' : '';

	return `
		<tr>
			<th scope='row' class='candidate'><img alt='' src='assets/img/${index % 5}.png' />${winnerTag}<span class='long name epsilon'>${[first, last].join(' ')}</span><span class='short name epsilon'>${last}</span></th>
			<td class='percent'><span class='number theta'>${displayPct}</span><span class='sign theta'>%</span></td>
			<td class='bar'><span class='container'><span style='width: ${displayPct}%' class='colored-bar theta'>&nbsp;</span></span></td>
			<td class='votes'><span class='iota'>${addCommas(voteCount)}</span></td>
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
	<div class='precincts'><span class='iota'>${stateRU.precinctsReportingPct}% precincts reporting</span></div>

	<table summary='A table that has the candidate, percent, and vote count across the top and the candidates down the left hand side for the 2016 ${stateRU.stateName} ${Standardize.expand.party(results.party)} ${Standardize.raceType(results.raceType).toLowerCase()}'>
		<thead>
			<tr>
				<th scope='col' class='iota candidate'>Candidates</th>
				<th scope='col' class='iota percent'>Percent</th>
				<th scope='col' class='iota bar'>&nbsp;</th>
				<th scope='col' class='iota votes'>Votes</th>
			</tr>
		</thead>
		<tbody>
			${candidates.map((x, i) => candidateRow(x, i, totalVoteCount)).join('')}
		</tbody>
	</table>
	`;

}
