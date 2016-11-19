import {expect} from 'chai';
import {studle_case} from '../src';

describe('StudleCase', () => {
    
    it('should be exists.', () => {
        expect(studle_case).to.be.exists;
    });

    it('should convert CamelCaseClass to camelCaseClass', () => {
        expect(studle_case('CamelCaseClass')).to.be.equals('camelCaseClass');
    });

    it('should do nothing', () => {
        expect(studle_case('studleCaseFunction')).to.be.equals('studleCaseFunction');
    });

    it('should convert i_am_studle_case to "iAmStudleCase', () => {
        expect(studle_case('i_am_studle_case')).to.be.equals('iAmStudleCase');
    });

    it('should convert i.m.studle.case to "iAmStudleCase', () => {
        expect(studle_case('i.am.studle.case', '.')).to.be.equals('iAmStudleCase');
    });
});