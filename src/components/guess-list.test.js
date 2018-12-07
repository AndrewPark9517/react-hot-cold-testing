import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list.js';


describe('<GuessList />', function() {
    it('Renders without crashing', function() {
        const array = [];
        shallow(<GuessList guesses={array} />);
    });

     it('Should include guesslist', function() {
         const array = [];
         const wrapper = shallow(<GuessList guesses={array}/>);
         expect(wrapper.hasClass('guessBox')).toEqual(true);
     });
});