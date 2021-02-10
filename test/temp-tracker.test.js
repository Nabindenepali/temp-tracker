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

