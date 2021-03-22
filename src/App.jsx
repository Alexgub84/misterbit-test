import React, { Component } from "react";

import "./assets/styles/global.scss";
import { Home } from "./pages/Home";

import { Footer } from "./cmps/Footer";

export class App extends Component {
  render() {
    return (
      <div>
        <header></header>
        <main>
          <Home />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
