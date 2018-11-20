import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../store/configureStore';

export default function Provider({ story }) {
    return (
        <ReduxProvider store={configureStore()}>
            {story}
        </ReduxProvider>
    );
};