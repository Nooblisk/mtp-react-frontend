import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as routes from '../../constants/routes';
import AppContainer from '../containers/AppContainer';
import MainPage from '../pages/mainPage/MainPage';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <AppContainer>
                    <Switch>
                        <Route exact path={routes.MAIN_URL} component={MainPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </AppContainer>
            </BrowserRouter>
        );
    }
}
