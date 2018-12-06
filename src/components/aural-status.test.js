import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status.js';

Describe('<AuralStatus />', function() {
    it('Renders without crashing', function() {
        shallow(<AuralStatus />);
    });


});