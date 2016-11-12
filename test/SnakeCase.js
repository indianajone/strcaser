import {expect} from 'chai';
import {snake_case} from '../src';

describe('SnakeCase', () => {
    
    it('should have snake_case method', () => {
        snake_case.should.be.exists;
    });

    it('should convert "i am snake case" to snake_case.', () => {
        snake_case('i am snake case').should.be.equals('i_am_snake_case');
    });

    it('should convert "i am snake   case" with more than one space to snake_case.', () => {
        snake_case('i am snake   case').should.be.equals('i_am_snake_case');
    });

    it('should convert "IAmSnakeCase" to snake_case.', () => {
        snake_case('IAmSnakeCase').should.be.equals('i_am_snake_case');
    });

    it('should not convert "i_am_snake_case_"', () => {
        snake_case('i_am_snake_case_').should.be.equals('i_am_snake_case_');
    });

    it('should convert "i__am__snake__case" to snake_case.', () => {
        snake_case('i__am__snake__case', '__').should.be.equals('i_am_snake_case');
    });

});