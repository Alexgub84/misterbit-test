import React from "react";

import { ItemPreview } from "./ItemPreview";

export function ItemsList({ items }) {
  return (
    <ul className="items-list">
      {React.Children.toArray(
        items.map((item) => {
          return <ItemPreview item={item} />;
        })
      )}
    </ul>
  );
}
