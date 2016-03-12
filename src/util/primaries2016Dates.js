/**
 * An array of 2016 (AP tabulated) primaries dates, each with `stateAbbr`, `party`, `date`, `raceType`, and `resultsNote` properties.
 * Only contains state presidential primaries.
 * @module primaries2016Dates
 * @example
 * import { primaries2016Dates } from 'election-utils'
 * primaries2016Dates[0] //=> { stateAbbr: 'IA', party: 'Democratic', date: '2016-02-01', ... }
 */
const primaries2016Dates = [
	{
		"stateAbbr": "IA",
		"party": "Democratic",
		"date": "2016-02-01",
		"raceType": "Caucuses",
		"resultsNote": "Vote totals are State Delegates Equivalents"
	},
	{
		"stateAbbr": "IA",
		"party": "Republican",
		"date": "2016-02-01",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "NH",
		"party": "Democratic",
		"date": "2016-02-09",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "NH",
		"party": "Republican",
		"date": "2016-02-09",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "NV",
		"party": "Democratic",
		"date": "2016-02-20",
		"raceType": "Caucuses",
		"resultsNote": "Vote totals are county convention delegates"
	},
	{
		"stateAbbr": "SC",
		"party": "Republican",
		"date": "2016-02-20",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "NV",
		"party": "Republican",
		"date": "2016-02-23",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "SC",
		"party": "Democratic",
		"date": "2016-02-27",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "AL",
		"party": "Democratic",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "AL",
		"party": "Republican",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "AK",
		"party": "Republican",
		"date": "2016-03-01",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "AR",
		"party": "Democratic",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "AR",
		"party": "Republican",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "CO",
		"party": "Democratic",
		"date": "2016-03-01",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "GA",
		"party": "Democratic",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "GA",
		"party": "Republican",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "MA",
		"party": "Democratic",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "MA",
		"party": "Republican",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "MN",
		"party": "Democratic",
		"date": "2016-03-01",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "MN",
		"party": "Republican",
		"date": "2016-03-01",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "OK",
		"party": "Democratic",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "OK",
		"party": "Republican",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "TN",
		"party": "Democratic",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "TN",
		"party": "Republican",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "TX",
		"party": "Democratic",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "TX",
		"party": "Republican",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "VT",
		"party": "Democratic",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "VT",
		"party": "Republican",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "VA",
		"party": "Democratic",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "VA",
		"party": "Republican",
		"date": "2016-03-01",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "KS",
		"party": "Democratic",
		"date": "2016-03-05",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "KS",
		"party": "Republican",
		"date": "2016-03-05",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "KY",
		"party": "Republican",
		"date": "2016-03-05",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "LA",
		"party": "Democratic",
		"date": "2016-03-05",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "LA",
		"party": "Republican",
		"date": "2016-03-05",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "ME",
		"party": "Republican",
		"date": "2016-03-05",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "NE",
		"party": "Democratic",
		"date": "2016-03-05",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "ME",
		"party": "Democratic",
		"date": "2016-03-06",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "HI",
		"party": "Republican",
		"date": "2016-03-08",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "ID",
		"party": "Republican",
		"date": "2016-03-08",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "MI",
		"party": "Democratic",
		"date": "2016-03-08",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "MI",
		"party": "Republican",
		"date": "2016-03-08",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "MS",
		"party": "Democratic",
		"date": "2016-03-08",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "MS",
		"party": "Republican",
		"date": "2016-03-08",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "DC",
		"party": "Republican",
		"date": "2016-03-12",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "WY",
		"party": "Republican",
		"date": "2016-03-12",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "FL",
		"party": "Democratic",
		"date": "2016-03-15",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "FL",
		"party": "Republican",
		"date": "2016-03-15",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "IL",
		"party": "Democratic",
		"date": "2016-03-15",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "IL",
		"party": "Republican",
		"date": "2016-03-15",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "MO",
		"party": "Democratic",
		"date": "2016-03-15",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "MO",
		"party": "Republican",
		"date": "2016-03-15",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "NC",
		"party": "Democratic",
		"date": "2016-03-15",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "NC",
		"party": "Republican",
		"date": "2016-03-15",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "OH",
		"party": "Democratic",
		"date": "2016-03-15",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "OH",
		"party": "Republican",
		"date": "2016-03-15",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "AZ",
		"party": "Democratic",
		"date": "2016-03-22",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "AZ",
		"party": "Republican",
		"date": "2016-03-22",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "ID",
		"party": "Democratic",
		"date": "2016-03-22",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "UT",
		"party": "Democratic",
		"date": "2016-03-22",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "UT",
		"party": "Republican",
		"date": "2016-03-22",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "AK",
		"party": "Democratic",
		"date": "2016-03-26",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "HI",
		"party": "Democratic",
		"date": "2016-03-26",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "WA",
		"party": "Democratic",
		"date": "2016-03-26",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "WI",
		"party": "Democratic",
		"date": "2016-04-05",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "WI",
		"party": "Republican",
		"date": "2016-04-05",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "WY",
		"party": "Democratic",
		"date": "2016-04-09",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "NY",
		"party": "Democratic",
		"date": "2016-04-19",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "NY",
		"party": "Republican",
		"date": "2016-04-19",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "CT",
		"party": "Democratic",
		"date": "2016-04-26",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "CT",
		"party": "Republican",
		"date": "2016-04-26",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "DE",
		"party": "Democratic",
		"date": "2016-04-26",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "DE",
		"party": "Republican",
		"date": "2016-04-26",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "MD",
		"party": "Democratic",
		"date": "2016-04-26",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "MD",
		"party": "Republican",
		"date": "2016-04-26",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "PA",
		"party": "Democratic",
		"date": "2016-04-26",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "PA",
		"party": "Republican",
		"date": "2016-04-26",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "RI",
		"party": "Democratic",
		"date": "2016-04-26",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "RI",
		"party": "Republican",
		"date": "2016-04-26",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "IN",
		"party": "Democratic",
		"date": "2016-05-03",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "IN",
		"party": "Republican",
		"date": "2016-05-03",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "NE",
		"party": "Republican",
		"date": "2016-05-10",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "WV",
		"party": "Democratic",
		"date": "2016-05-10",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "WV",
		"party": "Republican",
		"date": "2016-05-10",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "KY",
		"party": "Democratic",
		"date": "2016-05-17",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "OR",
		"party": "Democratic",
		"date": "2016-05-17",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "OR",
		"party": "Republican",
		"date": "2016-05-17",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "WA",
		"party": "Republican",
		"date": "2016-05-24",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "CA",
		"party": "Democratic",
		"date": "2016-06-07",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "CA",
		"party": "Republican",
		"date": "2016-06-07",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "MT",
		"party": "Democratic",
		"date": "2016-06-07",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "MT",
		"party": "Republican",
		"date": "2016-06-07",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "NJ",
		"party": "Democratic",
		"date": "2016-06-07",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "NJ",
		"party": "Republican",
		"date": "2016-06-07",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "NM",
		"party": "Democratic",
		"date": "2016-06-07",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "NM",
		"party": "Republican",
		"date": "2016-06-07",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "ND",
		"party": "Democratic",
		"date": "2016-06-07",
		"raceType": "Caucuses",
		"resultsNote": false
	},
	{
		"stateAbbr": "SD",
		"party": "Democratic",
		"date": "2016-06-07",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "SD",
		"party": "Republican",
		"date": "2016-06-07",
		"raceType": "Primary",
		"resultsNote": false
	},
	{
		"stateAbbr": "DC",
		"party": "Democratic",
		"date": "2016-06-14",
		"raceType": "Primary",
		"resultsNote": false
	}
];

export default primaries2016Dates;
