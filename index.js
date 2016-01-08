// import stateResultsLargeTable from './src/primaries/state-results-large-table';
// import Standardize from 'src/util/Standardize.js';
// export stateResultsLargeTable;
// export Standardize;
//

export function getReposForUser(username) {
	let url = `https://api.github.com/users/${username}/repos`;

	return url;
};
