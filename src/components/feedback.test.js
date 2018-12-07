import React from 'react';

import {shallow, mount} from 'enzyme';
import Feedback from './feedback.js';

describe('<Feedback />', function() {
    it('Renders without crashing', function() {
        shallow(<Feedback />);
    });

    it('Contains the feedback element', function() {
        const foo = "foo";
        const wrapper = shallow(<Feedback feedback={foo}/>);
        const text = "foo Guess again!";
        expect(wrapper.text()).toEqual(text);
    });

});