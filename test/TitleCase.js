import {expect} from 'chai';
import {title_case} from '../src';

describe('TitleCase', function () {
    
    it('should be exists.', () => {
        expect(title_case).to.be.exists;
    });

    it('should convert title to Title', () => {
        expect(title_case('title')).to.be.equals('Title');
    });

    it('should title a sentence.', () => {
        expect(title_case('hello there!')).to.be.equals('Hello there!');
    });

});