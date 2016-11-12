import {expect} from 'chai';
import {camel_case} from '../src';

describe('CamelCase', () => {
    
    it('should be exists.', () => {
        camel_case.should.be.exists;
    });

    it('should convert helloThere to HelloThere.', () => {
        camel_case('helloThere').should.equals('HelloThere');
    });

    it('should convert i_am_a_robot to IAmARobot.', () => {
        camel_case('i_am_a_robot').should.equals('IAmARobot');
    });
});