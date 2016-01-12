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

function townRow() {

	return `

	<tr data-reactid=".0.6.1.0.1.$Abington"><td data-reactid=".0.6.1.0.1.$Abington.0"><div data-reactid=".0.6.1.0.1.$Abington.0.0"><span data-reactid=".0.6.1.0.1.$Abington.0.0.0"><a href="/news/politics/election-results/2014-11-04/town/MA/Abington?p1=BG_elections_town_results" data-reactid=".0.6.1.0.1.$Abington.0.0.0.0">Abington</a></span></div><div data-reactid=".0.6.1.0.1.$Abington.0.1"><span data-reactid=".0.6.1.0.1.$Abington.0.1.0"><span data-reactid=".0.6.1.0.1.$Abington.0.1.0.0">5</span><span data-reactid=".0.6.1.0.1.$Abington.0.1.0.1"> of </span><span data-reactid=".0.6.1.0.1.$Abington.0.1.0.2">5</span></span></div></td><td data-reactid=".0.6.1.0.1.$Abington.1:$39388934"><div data-reactid=".0.6.1.0.1.$Abington.1:$39388934.0"><span data-reactid=".0.6.1.0.1.$Abington.1:$39388934.0.0"><span data-reactid=".0.6.1.0.1.$Abington.1:$39388934.0.0.0">59.0</span><span data-reactid=".0.6.1.0.1.$Abington.1:$39388934.0.0.1">%</span></span></div><div data-reactid=".0.6.1.0.1.$Abington.1:$39388934.1"><span data-reactid=".0.6.1.0.1.$Abington.1:$39388934.1.0">3,458</span></div></td><td data-reactid=".0.6.1.0.1.$Abington.1:$39385862"><div data-reactid=".0.6.1.0.1.$Abington.1:$39385862.0"><span data-reactid=".0.6.1.0.1.$Abington.1:$39385862.0.0"><span data-reactid=".0.6.1.0.1.$Abington.1:$39385862.0.0.0">35.9</span><span data-reactid=".0.6.1.0.1.$Abington.1:$39385862.0.0.1">%</span></span></div><div data-reactid=".0.6.1.0.1.$Abington.1:$39385862.1"><span data-reactid=".0.6.1.0.1.$Abington.1:$39385862.1.0">2,104</span></div></td><td data-reactid=".0.6.1.0.1.$Abington.1:$39896838"><div data-reactid=".0.6.1.0.1.$Abington.1:$39896838.0"><span data-reactid=".0.6.1.0.1.$Abington.1:$39896838.0.0"><span data-reactid=".0.6.1.0.1.$Abington.1:$39896838.0.0.0">3.4</span><span data-reactid=".0.6.1.0.1.$Abington.1:$39896838.0.0.1">%</span></span></div><div data-reactid=".0.6.1.0.1.$Abington.1:$39896838.1"><span data-reactid=".0.6.1.0.1.$Abington.1:$39896838.1.0">202</span></div></td><td data-reactid=".0.6.1.0.1.$Abington.1:$39894790"><div data-reactid=".0.6.1.0.1.$Abington.1:$39894790.0"><span data-reactid=".0.6.1.0.1.$Abington.1:$39894790.0.0"><span data-reactid=".0.6.1.0.1.$Abington.1:$39894790.0.0.0">0.8</span><span data-reactid=".0.6.1.0.1.$Abington.1:$39894790.0.0.1">%</span></span></div><div data-reactid=".0.6.1.0.1.$Abington.1:$39894790.1"><span data-reactid=".0.6.1.0.1.$Abington.1:$39894790.1.0">49</span></div></td><td data-reactid=".0.6.1.0.1.$Abington.1:$39895814"><div data-reactid=".0.6.1.0.1.$Abington.1:$39895814.0"><span data-reactid=".0.6.1.0.1.$Abington.1:$39895814.0.0"><span data-reactid=".0.6.1.0.1.$Abington.1:$39895814.0.0.0">0.8</span><span data-reactid=".0.6.1.0.1.$Abington.1:$39895814.0.0.1">%</span></span></div><div data-reactid=".0.6.1.0.1.$Abington.1:$39895814.1"><span data-reactid=".0.6.1.0.1.$Abington.1:$39895814.1.0">45</span></div></td></tr>


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
