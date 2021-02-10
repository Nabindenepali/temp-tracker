# TempTracker

TempTracker is a class to keep track of low, high and average temperature recordings. 


## Usage

```
const TempTracker = require('./class/temp-tracker');

tempTracker.addTemp(10)
tempTracker.addTemp(20)
tempTracker.addTemp(15)

console.log(tempTracker.lowestTemp) # returns 10
console.log(tempTracker.highestTemp) # returns 20
console.log(tempTracker.lowestTemp) # returns 15
```

## Sample Results

```
New temp: 29
Lowest temp: 29
Highest temp: 29
Average temp: 29

New temp: 30
Lowest temp: 29
Highest temp: 30
Average temp: 29.5

New temp: -7
Lowest temp: -7
Highest temp: 30
Average temp: 17.33

New temp: -6
Lowest temp: -7
Highest temp: 30
Average temp: 11.5

New temp: -5
Lowest temp: -7
Highest temp: 30
Average temp: 8.2

New temp: 17
Lowest temp: -7
Highest temp: 30
Average temp: 9.67

New temp: 24
Lowest temp: -7
Highest temp: 30
Average temp: 11.71

New temp: 14
Lowest temp: -7
Highest temp: 30
Average temp: 12

New temp: -3
Lowest temp: -7
Highest temp: 30
Average temp: 10.33

New temp: 10
Lowest temp: -7
Highest temp: 30
Average temp: 10.3
```
