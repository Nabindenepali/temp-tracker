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
     * Sets low, high and avg temperatures to a specified value
     * @param temp - Specified temperature
     */
    setValues(temp) {
        this.#lowestTemp = temp;
        this.#highestTemp = temp;
        this.#averageTemp = temp;
    }

    /***
     * Computes the lowest temperature recorded so far
     * @param temp - New temperature reading
     */
    calculateLowestTemp(temp) {
        if (temp < this.#lowestTemp) {
            this.#lowestTemp = temp;
        }
    }

    /***
     * Computes the highest temperature recorded so far
     * @param temp - New temperature reading
     */
    calculateHighestTemp(temp) {
        if (temp > this.#highestTemp) {
            this.#highestTemp = temp;
        }
    }

    /***
     * Computes the average temperature recorded so far
     * @param temp - New temperature reading
     */
    calculateAverageTemp(temp) {
        // Calculate average temperature using number of past readings and average recorded so far
        // This is done to avoid recording all the temperatures and calculating average every time
        this.#averageTemp = ((this.#readingCount - 1) * this.#averageTemp + temp) / (this.#readingCount);
    }

    /***
     * Getter for lowest temperature
     * @returns lowest temperature seen so far
     */
    get lowestTemp() {
        if (!this.#readingCount) {
            throw new Error('Invalid Function Call: No Temperature Recording Exists So Far');
        }
        return this.#lowestTemp;
    }

    /***
     * Getter for highest temperature
     * @returns highest temperature seen so far
     */
    get highestTemp() {
        if (!this.#readingCount) {
            throw new Error('Invalid Function Call: No Temperature Recording Exists So Far');
        }
        return this.#highestTemp;
    }

    /***
     * Getter for average temperature
     * @returns average temperature of readings so far
     */
    get averageTemp() {
        if (!this.#readingCount) {
            throw new Error('Invalid Function Call: No Temperature Recording Exists So Far');
        }
        return this.#averageTemp;
    }

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

        this.#readingCount++;
        // Set low, high and avg temperature values for the very first reading
        if (this.#readingCount === 1) {
            this.setValues(temp);
            return temp;
        }

        this.calculateLowestTemp(temp);
        this.calculateHighestTemp(temp);
        this.calculateAverageTemp(temp);
        return temp;
    }
}

module.exports = TempTracker;
