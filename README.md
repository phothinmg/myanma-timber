# Myanma Timber Volumetric Tons Calculation


## Install

Install from the command line:

```bash
npm install @phothinmg/myanma-timber

```

## Usage

```javascript

import { Lumber,TimberLog,mmTranslate,cashValue } from '@phothinmg/myanma-timber';

```

> Myanmar is one of the countries that officially use the [FPS](https://en.wikipedia.org/wiki/Foot%E2%80%93pound%E2%80%93second_system) system.The calculations are based on the FPS system and the Myanmar currency , Kyats(MMK).


### Lumber



#### 1.Cubic Feet

```javascript
const x = Lumber.cubicFeet(x,y,l,t);
/* 
Input 
x -- width of lumber in inches -- number -- require
y -- thickness of lumber in inches -- number -- require
l -- length of lumber in feet -- number -- require
t -- type of output -- string{"number" | "string"} -- default("number")

Output
cubic feet
t = "number" -- output number
t = "string" -- output string
*/
```

#### 2.Tons

```javascript
const x = Lumber.ton(x,y,l,t);
/* 
Input 
x -- width of lumber in inches -- number -- require
y -- thickness of lumber in inches -- number -- require
l -- length of lumber in feet -- number -- require
t -- type of output -- string{"number" | "string"} -- default("number")

Output
ton/tons
t = "number" -- output number
t = "string" -- output string
*/
```

#### 3.Feet Per Ton

```javascript

const x = Lumber.feetPerTon(x,y,t);
/* 
Input 
x -- width of lumber in inches -- number -- require
y -- thickness of lumber in inches -- number -- require
t -- type of output -- string{"number" | "string"} -- default("number")

Output
The total feet (length) in one ton of lumber for the input dimension.
t = "number" -- output number
t = "string" -- output string
*/


```

### Timber Log

> For timber log we(Myanmar) still use [Hoppus Ton ](https://en.wikipedia.org/wiki/Hoppus#cite_note-2).

Mid-Girth = Take the middle of a timber log, e.g., 6' 9" in feet and inches.

mgf = Mid-girth in feet(eg. 6')

mgi = Mid-girth in inches(eg. 9")

l = Length of a timber log in feet.

t = type of output , string{"number" | "string"} -- default("number")

#### 1.Hoppus Cube

```javascript

const x = TimberLog.hoppusCube(mgf,mgi,l,t);
/* 
Input 
mgf , mgi , l
t(optional) -- default("number")
Output
Hoppus Cube -- (Cubic Feet)
t = "number" -- output number
t = "string" -- output string
*/

```

#### 2.Hoppus Ton

```javascript

const x = TimberLog.hoppusTon(mgf,mgi,l,t);
/* 
Input 
mgf , mgi , l
t(optional) -- default("number")
Output
Hoppus Ton
t = "number" -- output number
t = "string" -- output string
*/


```

### Calculation of cash amount

```javascript

const x = cashValue(ton/tons,p,t);
/* 
Input 
ton/tons 
p = market price of one ton of lumber or timber log.
t(optional) -- default("number")
Output
Hoppus Ton
t = "number" -- output number
t = "string" -- output string
*/

```











