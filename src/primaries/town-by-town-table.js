import sortByOrder from 'lodash/collection/sortByOrder';
import Standardize from './../util/Standardize';

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

export default function townByTownTable(results) {

	// get state-level reporting unit
	const stateRU = results.reportingUnits.filter(x => x.level === 'state')[0];

	// sort candidates by ballot number and vote count
	const candidates = sortByOrder(stateRU.candidates, ['voteCount', 'ballotOrder'], [false, true]);

	return `

		<table summary='A table that has candidates across the top and towns down the left hand side for the 2016 ${stateRU.stateName} ${Standardize.expand.party(results.party)} ${Standardize.raceType(results.raceType).toLowerCase()}'>

			<thead>
				<tr>

					<th scope='col'>
						<div><span>City/town</span></div>
						<div><span>Pcts. reporting</span></div>
					</th>

					${candidates.map((x, i) => candidateHead(x, i)).join('')}

				</tr>
			</thead>

		</table>

	`;

}
