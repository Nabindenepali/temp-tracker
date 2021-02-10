const expect = require('chai').expect;

const TempTracker = require('../class/temp-tracker');

describe('New temperatue input', () => {
    const tempTracker = new TempTracker();

    describe('should fail for  invalid temperature inputs', () => {
        it('should fail when temperature is not specified', () => {
            expect(() => tempTracker.addTemp()).to.throw('Invalid Input: Temperature Value Not Specified');
        });

        it('should fail when temperature is invalid', () => {
            expect(() => tempTracker.addTemp('xc')).to.throw('Invalid Input: Temperature Value Invalid');
        });

        it('should fail when temperature unit is not supported', () => {
            expect(() => tempTracker.addTemp(50, 'W')).to.throw('Invalid Input: Temperature Unit Invalid');
        });
    });

    describe('should support valid temperature inputs', () => {
        it('should accept temperature when unit is not specified', () => {
            expect(tempTracker.addTemp(10)).to.equal(10);
        });

        it('should accept valid Celsius temperature', () => {
            expect(tempTracker.addTemp(10, 'C')).to.equal(10);
        });

        it('should accept valid Fahrenheit temperature', () => {
            expect(tempTracker.addTemp(20, 'F')).to.equal(20);
        });
    });
});
