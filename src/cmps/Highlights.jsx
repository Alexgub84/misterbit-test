import React, { Component } from "react";

import { ItemsList } from "./ItemsList";

import { itemsService } from "../services/itemsService";
export class Highlights extends Component {
  state = {
    items: [],
  };
  async componentDidMount() {
    const items = await itemsService.query();
    this.setState({ items });
  }
  render() {
    const { items } = this.state;

    if (items.length === 0) return <div>Loading...</div>;
    return (
      <section className="highlights">
        <div className="content flex">
          <div className="left-side">
            <img
              src={require("../assets/images/patterns/pattern-divide.svg")}
              alt="pattern"
            />
            <h2>A few highlights from our menu</h2>
            <p>
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>
          </div>
          <ItemsList items={items} />
        </div>
      </section>
    );
  }
}
