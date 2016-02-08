import orderBy from 'lodash.orderby';

const Candidates = {

	getVoteCount: (cs) => cs.map(x => x.voteCount).reduce((x, y) => x + y, 0),

	// sort candidates by vote count and ballot order
	sort: (cs) => orderBy(cs, ['voteCount', 'ballotOrder'], ['desc', 'asc'])

};

export default Candidates;
