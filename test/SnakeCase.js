import {expect} from 'chai';
import {snake_case} from '../src';

describe('SnakeCase', () => {
    
    it('should have snake_case method', () => {
        expect(snake_case).to.be.exists;
    });

    it('should convert "i am snake case" to snake_case.', () => {
        expect(snake_case('i am snake case')).to.be.equals('i_am_snake_case');
    });

    it('should convert "i am snake   case" with more than one space to snake_case.', () => {
        expect(snake_case('i am snake   case')).to.be.equals('i_am_snake_case');
    });

    it('should convert "IAmSnakeCase" to snake_case.', () => {
        expect(snake_case('IAmSnakeCase')).to.be.equals('i_am_snake_case');
    });

    it('should not convert "i_am_snake_case_"', () => {
        expect(snake_case('i_am_snake_case_')).to.be.equals('i_am_snake_case_');
    });

    it('should convert "i__am__snake__case" to snake_case.', () => {
        expect(snake_case('i__am__snake__case', '__')).to.be.equals('i_am_snake_case');
    });

});