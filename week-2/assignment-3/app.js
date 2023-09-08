function calculate(data) {
  let totalPrice = 0;
  for (let i = 0; i < data.products.length; i++) {
    totalPrice += data.discount * data.products[i].price;
  }
  return totalPrice;
}

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});

console.log(discountedPrice); // show the total price of all products after applying a discount
