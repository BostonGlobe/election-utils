import orderBy from 'lodash.orderby';

const Candidates = {

	// sort candidates by vote count and ballot order
	sort: (cs) => orderBy(cs, ['voteCount', 'ballotOrder'], ['desc', 'asc'])

};

export default Candidates;
