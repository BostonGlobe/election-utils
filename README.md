# election-utils

This module provides various utility functions for dealing with AP election data.

## Install

- `npm install --save election-utils`

## API Reference

#### Standardize

``` js
import { Standardize } from 'election-utils';
```


<a name="expand-state" href="#expand-state">#</a> Standardize.<b>expand.state</b>(<i>stateAbbreviation</i>)

Expands a state abbreviation to its title-case name. *stateAbbreviation* is case-insensitive.

```js
Standardize.expand.state('nh');
// => New Hampshire
```


<a name="collapse-state" href="#collapse-state">#</a> Standardize.<b>collapse.state</b>(<i>stateName</i>)

Collapse a state name to its abbreviation. *stateName* is case-insensitive.

```js
Standardize.collapse.state('new hampshire');
// => NH
```


<a name="expand-party" href="#expand-party">#</a> Standardize.<b>expand.party</b>(<i>partyAbbreviation</i>)

Expands a party abbreviation to its title-case name. *partyAbbreviation* is case-insensitive.

```js
Standardize.expand.party('dem');
// => Democratic
```


<a name="collapse-party" href="#collapse-party">#</a> Standardize.<b>collapse.party</b>(<i>partyName</i>)

Collapse a party name to its abbreviation. *partyName* is case-insensitive.

```js
Standardize.collapse.party('democratic');
// => DEM
```
