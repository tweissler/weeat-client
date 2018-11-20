import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Provider from './Provider';

import Rating from '../components/Rating/Rating'
import Filter from '../components/Filter/Filter'
import NewRestForm from '../components/NewRestForm/NewRestForm'

storiesOf('Rating', module).add('1 star', () => <Rating rating={1}/>).add('2 stars', () => <Rating rating={2}/>).add('3 stars', () => <Rating rating={3}/>);

storiesOf('Filter', module).add('default', () => <Filter type='type' options={['option 1','option 2','option 3']}/>)

function onSubmit(){}

storiesOf('NewRestForm', module).addDecorator(story => <Provider story={story()}/>)
    .add('error form', () => <NewRestForm onSubmit={onSubmit} pristine={true}/>)
