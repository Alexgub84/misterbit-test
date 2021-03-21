import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './assets/styles/global.scss';
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { NavBar } from './cmps/NavBar'
import { Footer } from './cmps/Footer'

export class App extends Component {


  render() {


    return (
      <div>
        <header >
          <NavBar />
        </header>
        <main >
          <Switch>
            <Route component={Contact} path="/contact" />
            <Route component={About} path="/about" />
            <Route component={Home} path="/" />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div >
    );
  }

}