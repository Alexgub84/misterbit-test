import React from "react";

export function ItemPreview({ item }) {
  return (
    <li className="flex">
      <div className="image">
        <img
          src={require(`../assets/images/homepage/menu-items/${item.imgUrl}`)}
          alt={item.title}
        />
        <div className="line" />
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </li>
  );
}
