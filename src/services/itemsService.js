const gItems = [
  {
    title: "Seared Salmon Fillet",
    desc:
      "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
    imgUrl: "menu-item1.jpg",
  },
  {
    title: "Rosemary Filet Mignon",
    desc:
      "Our prime beef served to your taste with a delicious choice of seasonal sides.",
    imgUrl: "menu-item2.jpg",
  },
  {
    title: "Summer Fruit Chocolate Mousse",
    desc:
      "Creamy mousse combined with summer fruits and dark chocolate shavings.",
    imgUrl: "menu-item3.jpg",
  },
];
export const itemsService = {
  query,
};
async function query() {
  const items = await gItems;
  return items;
}
