const TempTracker = require('./class/temp-tracker');

/***
 * A function to return random temperature in the specified range
 */
function getRandomTemp(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}

/***
 * Display low, high and avg temp for the a given TempTracker instance
 * @param tempTracker
 */
function display(tempTracker) {
    console.log('Lowest temp:', tempTracker.lowestTemp);
    console.log('Highest temp:', tempTracker.highestTemp);
    console.log('Average temp:', Number(tempTracker.averageTemp.toFixed(2)));
    console.log('');
}

const tempTracker = new TempTracker();

for (let i = 0; i < 10; i++) {
    const newTemp = getRandomTemp(-10, 40);
    console.log('New temp:', newTemp);
    tempTracker.addTemp(newTemp);
    display(tempTracker);
}



