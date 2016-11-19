import {expect} from 'chai';
import {lower_case} from '../src/';

describe('LowerCase', () => {
    
    it('should be exists.', () => {
        expect(lower_case).to.be.exists;
    });

    it('should lower first letter of a word.', () => {
        expect(lower_case('LowerMe')).to.be.equals('lowerMe');
    });

});