import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from './guess-form.js';
import { isIterable } from 'core-js';

describe('<GuessForm />', function() {
    it('Renders without crashing', function() {
        shallow(<GuessForm />);
    });

    it('Returns callback with expected value', function() {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = "1";
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });
});