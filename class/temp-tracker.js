/***
 * TempTracker class that keeps track of lowest, highest and average temperature of readings so far
 * Temperature values are stored internally in Celsius
 */
class TempTracker {
    #lowestTemp = null;
    #highestTemp = null;
    #averageTemp = null;
    #readingCount = 0; // Total no. of readings taken so far

    /***
     * A method to add new temperature to our tracker class
     * @param temp - New temperature
     * @param unit - Unit of temperature - Celsius is default
     * @returns entered temperature
     */
    addTemp(temp, unit = 'C') {
        if (typeof temp === 'undefined') {
            throw new Error('Invalid Input: Temperature Value Not Specified');
        }
        if (!Number.isFinite(temp)) {
            throw new Error('Invalid Input: Temperature Value Invalid');
        }
        if (!(unit === 'C' || unit === 'F')) {
            throw new Error('Invalid Input: Temperature Unit Invalid');
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
