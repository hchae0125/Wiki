import React, { Component } from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import { AppRoute } from './components/AppRoute';
import DefaultLayout from './layouts/DefaultLayout';
import { Redirect, Switch } from 'react-router';
import Page from './pages/Page';

export default class App extends Component<{}> {
  componentDidMount() {

  }

  render() {
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
    const history = createBrowserHistory({ basename: baseUrl});
    
    return (
      <Switch>
        <AppRoute layout={DefaultLayout} exact path="/" component={Page} />
        <Redirect to="/" />
      </Switch>
    )
  }
}