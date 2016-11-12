import {expect} from 'chai';
import {studle_case} from '../src';

describe('StudleCase', () => {
    
    it('should be exists.', () => {
        studle_case.should.be.exists;
    });

    it('should convert CamelCaseClass to camelCaseClass', () => {
        studle_case('CamelCaseClass').should.equals('camelCaseClass');
    });

    it('should do nothing', () => {
         studle_case('studleCaseFunction').should.equals('studleCaseFunction');
    });

    it('should convert i_am_studle_case to "iAmStudleCase', () => {
        studle_case('i_am_studle_case').should.equals('iAmStudleCase');
    });

    it('should convert i.m.studle.case to "iAmStudleCase', () => {
        studle_case('i.am.studle.case', '.').should.equals('iAmStudleCase');
    });
});