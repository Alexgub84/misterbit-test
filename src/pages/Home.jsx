import React, { Component } from "react";
import { Highlights } from "../cmps/Highlights";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="hero">Hero</section>
        <section className="middle">
          <h2>The most locally sourced food</h2>
          <img alt="" />
        </section>
        <Highlights />
        <section className="bottom">Family Gathering</section>
        <section className="last"> Ready to make a reservation?</section>
      </div>
    );
  }
}
