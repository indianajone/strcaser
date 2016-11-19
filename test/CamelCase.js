import {expect} from 'chai';
import {camel_case} from '../src';

describe('CamelCase', () => {
    
    it('should be exists.', () => {
        expect(camel_case).to.be.exists;
    });

    it('should convert helloThere to HelloThere.', () => {
        expect(camel_case('helloThere')).to.be.equals('HelloThere');
    });

    it('should convert i_am_a_robot to IAmARobot.', () => {
        expect(camel_case('i_am_a_robot')).to.be.equals('IAmARobot');
    });
});