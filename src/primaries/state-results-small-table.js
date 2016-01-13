import sortByOrder from 'lodash/collection/sortByOrder';
import addCommas from 'add-commas';
import Standardize from './../util/Standardize';

const NUMBER_TO_PRIORITIZE = 2;

function candidateRow(candidate, index, totalVoteCount) {

	const first      = candidate.hasOwnProperty('first') ? candidate.first : '';
	const last       = candidate.hasOwnProperty('last') ? candidate.last : '';
	const voteCount  = candidate.hasOwnProperty('voteCount') ? candidate.voteCount : 0;
	const percent    = totalVoteCount > 0 ? candidate.voteCount/totalVoteCount : 0;
	const displayPct = Standardize.percent(percent);
	const winnerTag  = candidate.winner === 'X' ? '<span class="winner">✔</span>' : '';

	return `

	<div class='candidate-row fancy'>
		<div class='photo'><img alt='' src='assets/img/${index % 5}.png' /></div>
		<div class='two-rows'>
			<div class='name-and-pct'>
				<div class='name'><span class='zeta'><span class='first'>${first}</span> <span class='last'>${last}</span></span></div>
				<div class='pct'><span class='zeta'>${displayPct}%</span></div>
			</div>
			<div class='bar-and-votes'>
				<div class='bar'><span style='width: ${displayPct}%' class='iota'>&nbsp;</span></div>
				<div class='votes'><span class='iota'>9,999,999 votes</span></div>
			</div>
		</div>
	</div>

	`;
				// <div class='votes'><span class='theta'>${addCommas(voteCount)} votes</span></div>

}

export default function stateResultsSmallTable(results) {

	// get state-level reporting unit
	const stateRU = results.reportingUnits.filter(x => x.level === 'state')[0];

	// sort candidates by ballot number and vote count
	const candidates = sortByOrder(stateRU.candidates, ['voteCount', 'ballotOrder'], [false, true]);

	// get the total vote count
	const totalVoteCount = candidates
		.map(x => x.voteCount)
		.reduce((x, y) => x + y);

	return `

	<div class='title-and-updater'>
		<div class='title'><span>${Standardize.expand.party(results.party)} ${Standardize.raceType(results.raceType)}</span></div>
		<div class='updater'><span>Update in 15</span></div>
	</div>

	<div class='results'>
		${candidates.map((x, i) => candidateRow(x, i, totalVoteCount)).join('')}
	</div>

	<div class='precincts-and-more'>
		<div class='precincts'><span class='iota'>${stateRU.precinctsReportingPct}% precincts reporting</span></div>
		<div class='more'><a href=''>Complete results</a></div>
	</div>

	`;

}

