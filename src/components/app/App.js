import React, { Component } from 'react';

import AppContainer from '../containers/AppContainer';
import MainPage from '../pages/mainPage/MainPage';

export default class App extends Component {
    render() {
        return (
            <AppContainer>
                <MainPage />
            </AppContainer>
        );
    }
}
