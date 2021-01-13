import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import CounterView from '../../Views/CounterView';
import { Route, Switch } from 'react-router-dom';
import routers from '../../routers';
import PhoneBookView from '../../Views/PhoneBookView';

export default class App extends Component {
  render() {
    return (
      <>
        <Navigation />

        <Switch>
          <Route path={routers.counter} component={CounterView} />
          <Route path={routers.phoneBook} component={PhoneBookView} />
        </Switch>
      </>
    );
  }
}
