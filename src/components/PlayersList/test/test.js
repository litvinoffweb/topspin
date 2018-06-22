import React from 'react';
import PlayersList from '../PlayersList';
import { shallow } from 'enzyme';

describe('<PlayersList />', () => {
    it('renders 1 <PlayersList /> component', () => {
        const component = shallow(<PlayersList />);
        expect(component).toHaveLength(1);
    });
})