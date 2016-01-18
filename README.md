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

Expands a state abbreviation to its title-case name.

```js
Standardize.expand.state('nh');
// => New Hampshire
```
