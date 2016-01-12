import indexOf from 'lodash/array/indexOf';
import sortBy from 'lodash/collection/sortBy';
import sortByOrder from 'lodash/collection/sortByOrder';
import pluck from 'lodash/collection/pluck';
import isEqual from 'lodash/lang/isEqual';

import addCommas from 'add-commas';
import Standardize from './../util/Standardize';

const NUMBER_TO_DISPLAY = 2;

function candidateHead(candidate, index) {

	const last = candidate.hasOwnProperty('last') ? candidate.last : '';
	const winnerTag = candidate.winner === 'X' ? '<span class="winner">✔</span>' : '';
	const votesTag = index === 0 ? '<div><span>Votes</span></div>' : '';

	return `
		<th scope='col'>
			<div>${winnerTag}<span>${last}</span></div>
			${votesTag}
		</th>
	`;

}

function subunitRowResult(voteCount, totalVotes) {

	const percent = totalVotes > 0 ? voteCount/totalVotes : 0;

	return `
		<td>
			<div><span>${Standardize.percent(percent)}%</span></div>
			<div><span>${addCommas(voteCount)}</span></div>
		</td>
	`;

}

function subunitRow(subunit, overallCandidateIds) {

	// sort subunit candidates into overall candidate order
	const theseCandidates = sortBy(subunit.candidates, function(candidate) {
		return indexOf(overallCandidateIds, candidate.candidateID);
	});

	// really make sure they're the same order
	if (!isEqual(pluck(theseCandidates, 'candidateID'), overallCandidateIds)) {
		return '';
	}

	// get the subunit candidate vote counts
	const voteCounts = pluck(theseCandidates, 'voteCount');

	// get the total vote count
	const totalVoteCount = voteCounts.reduce((x, y) => x + y);

	// we are going to only display the first 2 candidates,
	// and collapse the rest into an "other" column.

	// get the first n candidates
	const firstVotes = voteCounts.slice(0, NUMBER_TO_DISPLAY);

	// get the rest of the candidates and add them up
	const restOfVotes = voteCounts.slice(NUMBER_TO_DISPLAY)
		.reduce((x, y) => x + y);

	return `
		<tr>
			<td>
				<div><span>${subunit.reportingunitName}</span></div>
				<div><span>${subunit.precinctsReporting} of ${subunit.precinctsTotal}</span></div>
			</td>

			${firstVotes.map(x => subunitRowResult(x, totalVoteCount)).join('')}

			${subunitRowResult(restOfVotes, totalVoteCount)}

		</tr>
	`;

}

export default function townByTownTable(results) {

	// get state-level reporting unit
	const stateRU = results.reportingUnits.filter(x => x.level === 'state')[0];

	// sort candidates by ballot number and vote count
	const candidates = sortByOrder(stateRU.candidates, ['voteCount', 'ballotOrder'], [false, true]);
	const candidateIds = pluck(candidates, 'candidateID');

	// get reporting units
	const subunits = results.reportingUnits.filter(x => x.level === 'subunit');

	return `

		<table summary='A table that has candidates across the top and towns down the left hand side for the 2016 ${stateRU.stateName} ${Standardize.expand.party(results.party)} ${Standardize.raceType(results.raceType).toLowerCase()}'>

			<thead>
				<tr>

					<th scope='col'>
						<div><span>City/town</span></div>
						<div><span>Pcts. reporting</span></div>
					</th>

					${candidates.slice(0, NUMBER_TO_DISPLAY).map((x, i) => candidateHead(x, i)).join('')}

				</tr>
			</thead>

			<tbody>

				${subunits.map(x => subunitRow(x, candidateIds)).join('')}

			</tbody>

		</table>

	`;

}
