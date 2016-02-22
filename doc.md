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

# Candidates

Various Candidates helper functions.

**Examples**

```javascript
import { Candidates } from 'election-utils'
```

## getVoteCount

Get the candidates' total vote count.

**Parameters**

-   `candidates` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** an array of Candidates

**Examples**

```javascript
Candidates.getVoteCount(myCandidates) //=> 123
```

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the total vote count

## sort

Sort candidates by vote count and ballot order, in that order.

**Parameters**

-   `candidates` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** an array of Candidates

**Examples**

```javascript
Candidates.sort(myCandidates) //=> mySortedCandidates
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** a new array of Candidates, sorted. Does not mutate original array.

# party

Collapses a party name to its upper-case abbreviation.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** party name. Case insensitive.

**Examples**

```javascript
standardize.collapse.party('democratic') //=> 'DEM'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the party's upper-case abbreviation.

# party

Expands a party abbreviation to its title-case name.

**Parameters**

-   `abbr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** party abbreviation. Case insensitive.

**Examples**

```javascript
standardize.expand.party('dem') //=> 'Democratic'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the party's title-case name.

# standardize

Provides various functions to standardize AP data.

**Examples**

```javascript
import { standardize } from 'election-utils'
```

## raceType

Convert race type to its appropriate name.
Set `invert` to `true` to convert back to what AP gives us.

**Parameters**

-   `raceType` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the race type, e.g. 'Caucuses'.
-   `_raceType`  
-   `invert` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether to invert back to what AP gives us.

**Examples**

```javascript
standardize.raceType('Caucus') //=> 'Caucuses'
standardize.raceType('Primary') //=> 'Primary'
standardize.raceType('Caucuses', true) //=> 'Caucus'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

# state

Expands a state abbreviation to its title-case name.

**Parameters**

-   `abbr` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** state abbreviation. Case insensitive.

**Examples**

```javascript
standardize.expand.state('ia') //=> 'Iowa'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the state's title-case name.

# state

Collapses a state name to its upper-case abbreviation.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** state name. Case insensitive.

**Examples**

```javascript
standardize.collapse.state('iowa') //=> 'IA'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the state's upper-case abbreviation.
