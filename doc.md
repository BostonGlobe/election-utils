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
