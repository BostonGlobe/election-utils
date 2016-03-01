# Candidates

Various Candidates helper functions.

**Examples**

```javascript
import { Candidates } from 'election-utils'
```

## addIsMainAndRunning

Marge `candidates` and `lookupCandidates` by adding
`isMainAndRunning` to each candidate.

**Parameters**

-   `$0.candidates` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** an array of Candidates
-   `$1.lookupCandidates` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** an array of lookup candidates
-   `_ref`  

**Examples**

```javascript
import { Candidates, primaries2016Candidates } from 'election-utils'
Candidates.addIsMainAndRunning({
  candidates,
  lookupCandidates: primaries2016Candidates
})[0] //=> { isMainAndRunning: true, ... }
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** a new array of items augmented with `isMainAndRunning`

## getVoteCount

Get the candidates' total vote count.

**Parameters**

-   `candidates` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** an array of Candidates

**Examples**

```javascript
Candidates.getVoteCount(myCandidates) //=> 123
```

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the total vote count

## makeColorMappings

Map candidates to color classes.
Useful for coloring choropleths.

**Parameters**

-   `$0.candidates` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** an array of Candidates
-   `$1.party` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the Candidates' party
-   `$2.mainCandidates` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** an array of main Candidates
-   `_ref2`  

**Examples**

```javascript
const m = Candidates.makeColorMappings({ candidates, party, mainCandidates })
m[0] //=> { colorClass: 'democratic-0', candidateID: '123' }
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** an array of objects containing `colorClass` and `candidateID`

## sort

Sort candidates by vote count and ballot order, in that order.

**Parameters**

-   `candidates` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** an array of Candidates

**Examples**

```javascript
Candidates.sort(myCandidates) //=> mySortedCandidates
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** a new array of Candidates, sorted. Does not mutate original array.

# Candidate

Various Candidate helper functions.

**Examples**

```javascript
import { Candidate } from 'election-utils'
```

## isWinner

Determine if this candidate is the winner.
Will respect `winnerOverride` if present.

**Parameters**

-   `candidate` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the candidate

**Examples**

```javascript
Candidate.isWinner(winningCandidate) //=> true
```

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether candidate is winner

# standardize

Provides various functions to standardize AP data.

**Examples**

```javascript
import { standardize } from 'election-utils'
```

## collapseParty

Collapses a party name to its upper-case abbreviation.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** party name. Case insensitive.

**Examples**

```javascript
standardize.collapseParty('democratic') //=> 'DEM'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the party's upper-case abbreviation.

## collapseState

Collapses a state name to its upper-case abbreviation.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** state name. Case insensitive.

**Examples**

```javascript
standardize.collapseState('iowa') //=> 'IA'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the state's upper-case abbreviation.

## expandParty

Expands a party abbreviation to its title-case name.

**Parameters**

-   `abbr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** party abbreviation. Case insensitive.

**Examples**

```javascript
standardize.expandParty('dem') //=> 'Democratic'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the party's title-case name.

## expandState

Expands a state abbreviation to its title-case name.

**Parameters**

-   `abbr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** state abbreviation. Case insensitive.

**Examples**

```javascript
standardize.expandState('ia') //=> 'Iowa'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the state's title-case name.

## raceType

Convert race type to its appropriate name.
Set `invert` to `true` to convert back to what AP gives us.

**Parameters**

-   `rType` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the race type, e.g. 'Caucuses'.
-   `invert` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether to invert back to what AP gives us.

**Examples**

```javascript
standardize.raceType('Caucus') //=> 'Caucuses'
standardize.raceType('Primary') //=> 'Primary'
standardize.raceType('Caucuses', true) //=> 'Caucus'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the converted race type.

# formatTimestamp

Format timestamp.
Useful for displaying `last updated`.

**Parameters**

-   `$0.timestamp` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** a timestamp
-   `_ref`  

**Examples**

```javascript
import { formatTimestamp } from 'election-utils'
formatTimestamp(results) //=> 'Mar. 1 2:26 PM EST'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the formatted timestamp

# parties

An array of parties, each with an `abbr` and `name` property.

**Examples**

```javascript
import { parties } from 'election-utils'
parties[0] //=> { abbr: 'DEM', name: 'Democratic' }
```

# primaries2016Candidates

An array of 2016 primaries candidates, each with `first`, `last`, `party` and `suspendedDate` properties.

**Examples**

```javascript
import { primaries2016Candidates } from 'election-utils'
primaries2016Candidates[0] //=> { 'last': 'bush', 'first': 'jeb', 'party': 'republican' ...}
```

# primaries2016Dates

An array of 2016 (AP tabulated) primaries dates, each with `stateAbbr`, `party`, `date`, `raceType`, and `resultsNote` properties.
Only contains state presidential primaries.

**Examples**

```javascript
import { primaries2016Dates } from 'election-utils'
primaries2016Dates[0] //=> { stateAbbr: 'IA', party: 'Democratic', date: '2016-02-01', ... }
```

# raceTypes

An array of race types.

**Examples**

```javascript
import { raceTypes } from 'election-utils'
raceTypes[0] //=> 'Caucuses'
```
