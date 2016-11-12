import {expect} from 'chai';
import {title_case} from '../src';

describe('TitleCase', function () {
    
    it('should be exists.', () => {
        title_case.should.be.exists;
    });

    it('should convert title to Title', () => {
        title_case('title').should.equals('Title');
    });

    it('should title a sentence.', () => {
        title_case('hello there!').should.be.equals('Hello there!');
    });

});