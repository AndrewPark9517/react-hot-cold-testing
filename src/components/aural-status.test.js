import React from 'react';

import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status.js';

describe('<AuralStatus />', function() {
    it('Renders without crashing', function() {
        shallow(<AuralStatus />);
    });

    it('Should have the screenreader component', function() {
        const wrapper = shallow(<AuralStatus />);
        expect(wrapper.hasClass('visuallyhidden')).to.equal(true);
    });

    

});