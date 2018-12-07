import React from 'react';

import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count.js';
import { isIterable } from 'core-js';

describe('<GuessCount />', function() {
    
    it('Renders without crashing', function() {
        shallow(<GuessCount />);
    });

    it('Should return number of guesses', function() {
        const count = 0;
        const wrapper = shallow(<GuessCount guessCount={count} />);
        const text = "You've made 0 guesses!";
        expect(wrapper.text()).toEqual(text);
    })
})