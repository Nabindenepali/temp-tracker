/***
 * TempTracker class that keeps track of lowest, highest and average temperature of readings so far
 * All the temperature readings need to be in the same unit for a tracker instance
 */
class TempTracker {
    #lowestTemp = null;
    #highestTemp = null;
    #averageTemp = null;
    #readingCount = 0; // Total no. of readings taken so far

    /***
     * A method to add new temperature to our tracker class
     * @param temp - New temperature
     * @returns entered temperature
     */
    addTemp(temp) {
        if (typeof temp === 'undefined') {
            throw new Error('Invalid Input: Temperature Value Not Specified');
        }
        if (!Number.isFinite(temp)) {
            throw new Error('Invalid Input: Temperature Value Invalid');
        }
        return temp;
    }

    /***
     * Getter for lowest temperature
     * @returns lowest temperature seen so far
     */
    get lowestTemp() {
        return this.#lowestTemp;
    }

    /***
     * Getter for highest temperature
     * @returns highest temperature seen so far
     */
    get highestTemp() {
        return this.#highestTemp;
    }

    /***
     * Getter for average temperature
     * @returns average temperature of readings so far
     */
    get averageTemp() {
        return this.#averageTemp;
    }
}

module.exports = TempTracker;
