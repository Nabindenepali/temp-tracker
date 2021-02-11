const expect = require('chai').expect;

const TempTracker = require('../class/temp-tracker');

describe('New temperatue input', () => {
    const tempTracker = new TempTracker();

    describe('Tests for invalid temperature input', () => {
        it('should fail when temperature is not specified', () => {
            expect(() => tempTracker.addTemp()).to.throw('Invalid Input: Temperature Value Not Specified');
        });

        describe('should fail when temperature is invalid', () => {
            it('should fail for null inputs', () => {
                expect(() => tempTracker.addTemp(null)).to.throw('Invalid Input: Temperature Value Invalid');
            });

            it('should fail for string inputs', () => {
                expect(() => tempTracker.addTemp('xc')).to.throw('Invalid Input: Temperature Value Invalid');
            });

            it('should fail for object inputs', () => {
                expect(() => tempTracker.addTemp({temp: 10})).to.throw('Invalid Input: Temperature Value Invalid');
            });
        });
    });

    describe('Tests for valid temperature input', () => {
        it('should return the entered temperature successfully', () => {
            expect(tempTracker.addTemp(10)).to.equal(10);
        });
    });
});

describe('Get lowest temperature so far', () => {
    describe('Test when no temperature tracked ever', () => {
        const tempTracker = new TempTracker();

        it('should fail when no temperature recording exists', () => {
            expect(() => tempTracker.lowestTemp).to.throw('Invalid Function Call: No Temperature Recording Exists So Far');
        });
    });

    describe('Test when single temperature recorded', () => {
        const tempTracker = new TempTracker();
        tempTracker.addTemp(30);

        it('should return the same temperature tracked', () => {
            expect(tempTracker.lowestTemp).to.equal(30);
        });
    });

    describe('Test when multiple temperatures recorded', () => {
        it('should return correct result when first temperature tracked is the lowest', () => {
            const tempTracker = new TempTracker();
            tempTracker.addTemp(30);
            tempTracker.addTemp(35);
            tempTracker.addTemp(40);
            tempTracker.addTemp(45);
            tempTracker.addTemp(50);

            expect(tempTracker.lowestTemp).to.equal(30);
        });

        it('should return correct result when last temperature tracked is the lowest', () => {
            const tempTracker = new TempTracker();
            tempTracker.addTemp(50);
            tempTracker.addTemp(45);
            tempTracker.addTemp(40);
            tempTracker.addTemp(35);
            tempTracker.addTemp(30);

            expect(tempTracker.lowestTemp).to.equal(30);
        });

        it('should return correct result when lowest temperature tracked lies in between', () => {
            const tempTracker = new TempTracker();
            tempTracker.addTemp(40);
            tempTracker.addTemp(35);
            tempTracker.addTemp(30);
            tempTracker.addTemp(50);
            tempTracker.addTemp(45);

            expect(tempTracker.lowestTemp).to.equal(30);
        });
    });
});

describe('Get highest temperature so far', () => {
    describe('Test when no temperature tracked ever', () => {
        const tempTracker = new TempTracker();

        it('should fail when no temperature recording exists', () => {
            expect(() => tempTracker.lowestTemp).to.throw('Invalid Function Call: No Temperature Recording Exists So Far');
        });
    });

    describe('Test when single temperature recorded', () => {
        const tempTracker = new TempTracker();
        tempTracker.addTemp(30);

        it('should return the same temperature tracked', () => {
            expect(tempTracker.highestTemp).to.equal(30);
        });
    });

    describe('Test when multiple temperatures recorded', () => {
        it('should return correct result when first temperature tracked is the highest', () => {
            const tempTracker = new TempTracker();
            tempTracker.addTemp(50);
            tempTracker.addTemp(45);
            tempTracker.addTemp(40);
            tempTracker.addTemp(35);
            tempTracker.addTemp(30);

            expect(tempTracker.highestTemp).to.equal(50);
        });

        it('should return correct result when last temperature tracked is the highest', () => {
            const tempTracker = new TempTracker();
            tempTracker.addTemp(30);
            tempTracker.addTemp(35);
            tempTracker.addTemp(40);
            tempTracker.addTemp(45);
            tempTracker.addTemp(50);

            expect(tempTracker.highestTemp).to.equal(50);
        });

        it('should return correct result when highest temperature tracked lies in between', () => {
            const tempTracker = new TempTracker();
            tempTracker.addTemp(40);
            tempTracker.addTemp(35);
            tempTracker.addTemp(30);
            tempTracker.addTemp(50);
            tempTracker.addTemp(45);

            expect(tempTracker.highestTemp).to.equal(50);
        });
    });
});

describe('Get average temperature so far', () => {
    describe('Test when no temperature tracked ever', () => {
        const tempTracker = new TempTracker();

        it('should fail when no temperature recording exists', () => {
            expect(() => tempTracker.averageTemp).to.throw('Invalid Function Call: No Temperature Recording Exists So Far');
        });
    });

    describe('Test when single temperature recorded', () => {
        const tempTracker = new TempTracker();
        tempTracker.addTemp(30);

        it('should return the same temperature tracked', () => {
            expect(tempTracker.averageTemp).to.equal(30);
        });
    });

    describe('Test when multiple temperatures recorded', () => {
        it('should return correct result for case 1', () => {
            const tempTracker = new TempTracker();
            tempTracker.addTemp(40);
            tempTracker.addTemp(35);
            tempTracker.addTemp(30);
            tempTracker.addTemp(50);
            tempTracker.addTemp(45);

            expect(tempTracker.averageTemp).to.equal(40);
        });

        it('should return correct result for case 2', () => {
            const tempTracker = new TempTracker();
            tempTracker.addTemp(20);
            tempTracker.addTemp(-32);
            tempTracker.addTemp(42);
            tempTracker.addTemp(-18);
            tempTracker.addTemp(44);
            tempTracker.addTemp(21);
            tempTracker.addTemp(41);
            tempTracker.addTemp(5);
            tempTracker.addTemp(-2);
            tempTracker.addTemp(27);

            expect(tempTracker.averageTemp).to.equal(14.8);
        });

        it('should return correct result for case 3', () => {
            const tempTracker = new TempTracker();
            tempTracker.addTemp(21);
            tempTracker.addTemp(-9);
            tempTracker.addTemp(12);
            tempTracker.addTemp(-8);
            tempTracker.addTemp(12);
            tempTracker.addTemp(32);
            tempTracker.addTemp(-12);
            tempTracker.addTemp(25);
            tempTracker.addTemp(16);
            tempTracker.addTemp(-8);
            tempTracker.addTemp(21);
            tempTracker.addTemp(8);
            tempTracker.addTemp(-9);
            tempTracker.addTemp(21);
            tempTracker.addTemp(17);

            expect(tempTracker.averageTemp).to.be.closeTo(9.26, 0.01);
        });
    });
});



