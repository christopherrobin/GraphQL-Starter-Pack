import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookView from './BookView';
import NotFoundComponent from './components/NotFound';
import WelcomeComponent from './components/Welcome';

export default function createRoutes() {
    return (
        <Switch>
            <Route exact path='/' component={WelcomeComponent} />
            <Route path='/books' component={BookView} />
            <Route path='/*' component={NotFoundComponent} />
        </Switch>
    );
}
