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
     * Computes the lowest temperature recorded so far
     * @param temp - New temperature reading
     */
    calculateLowestTemp(temp) {
        if (this.#lowestTemp === null) {
            this.#lowestTemp = temp;
            return;
        }
        if (temp < this.#lowestTemp) {
            this.#lowestTemp = temp;
        }
    }

    /***
     * Computes the highest temperature recorded so far
     * @param temp - New temperature reading
     */
    calculateHighestTemp(temp) {
        if (this.#highestTemp === null) {
            this.#highestTemp = temp;
            return;
        }
        if (temp > this.#highestTemp) {
            this.#highestTemp = temp;
        }
    }

    /***
     * Computes the average temperature recorded so far
     * @param temp - New temperature reading
     */
    calculateAverageTemp(temp) {
        if (this.#averageTemp === null) {
            this.#averageTemp = temp;
            return;
        }

        // Calculate average temperature using number of past readings and average recorded so far
        // This is done to avoid recording all the temperatures and calculating average every time
        this.#averageTemp = (this.#readingCount * this.#averageTemp + temp) / (this.#readingCount + 1);
    }

    /***
     * Getter for lowest temperature
     * @returns lowest temperature seen so far
     */
    get lowestTemp() {
        if (this.#lowestTemp === null) {
            throw new Error('Invalid Function Call: No Temperature Recording Exists So Far');
        }
        return this.#lowestTemp;
    }

    /***
     * Getter for highest temperature
     * @returns highest temperature seen so far
     */
    get highestTemp() {
        if (this.#highestTemp === null) {
            throw new Error('Invalid Function Call: No Temperature Recording Exists So Far');
        }
        return this.#highestTemp;
    }

    /***
     * Getter for average temperature
     * @returns average temperature of readings so far
     */
    get averageTemp() {
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
        this.calculateLowestTemp(temp);
        this.calculateHighestTemp(temp);
        this.calculateAverageTemp(temp);
        this.#readingCount++;
        return temp;
    }
}

module.exports = TempTracker;
