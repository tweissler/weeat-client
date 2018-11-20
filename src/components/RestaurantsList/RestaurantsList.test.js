import React from 'react';
import { shallow, mount } from 'enzyme';
import "../../setupTest";

import RestaurantsList from './RestaurantsList';
import Restaurant from "../Restaurant/Restaurant";

describe('Restaurants list tests', () => {

    const rest1 = {name: 'rest1', address: '39.6284, 35.2846', cuisine: 'cuisine1', rating: 1};
    const rest2 = {name: 'rest2', address: '39.6282, 35.2842', cuisine: 'cuisine2', rating: 2};
    const restaurants = [rest1, rest2];

    it('renders restaurants-list', () => {
        const wrapperShallow = shallow(<RestaurantsList restaurants={restaurants} />);
        expect(wrapperShallow.find('.restaurants-list')).toBeDefined();
        expect(wrapperShallow.find('.restaurant')).toHaveLength(restaurants.length);
    });

    it('renders a restaurants-list', () => {
        const wrapperShallow = shallow(<RestaurantsList restaurants={restaurants} />);
        expect(wrapperShallow.contains(<Restaurant className='restaurant' key='rest1' rest={rest1}/>)).toBeTruthy();
        expect(wrapperShallow.contains(<Restaurant className='restaurant' key='rest2' rest={rest2}/>)).toBeTruthy();
    });

    it('renders restaurants-list', () => {
        const wrapperMount = mount(<RestaurantsList restaurants={restaurants} />);
        expect(wrapperMount.find('.restaurants-list')).toBeDefined();
        expect(wrapperMount.find('.restaurant')).toHaveLength(restaurants.length);
        expect(wrapperMount.find('.rating')).toBeDefined();
    });
});