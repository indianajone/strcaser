import {expect} from 'chai';
import {lower_case} from '../src/';

describe('LowerCase', () => {
    
    it('should be exists.', () => {
        lower_case.should.be.exists;
    });

    it('should lower first letter of a word.', () => {
        lower_case('LowerMe').should.equals('lowerMe');
    });

});