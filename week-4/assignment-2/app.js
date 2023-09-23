function ajax(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));
}

function render(data) {
  data.forEach((d) => {
    const productList = document.querySelector(".product-list");

    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "product");

    const name = document.createElement("div");
    name.setAttribute("class", "name");
    name.appendChild(document.createTextNode(`${d.name}`));

    const price = document.createElement("div");
    price.setAttribute("class", "price");
    price.appendChild(document.createTextNode(`${d.price}`));

    const description = document.createElement("div");
    description.setAttribute("class", "description");
    description.appendChild(document.createTextNode(`${d.description}`));

    newDiv.appendChild(name);
    newDiv.appendChild(price);
    newDiv.appendChild(description);

    productList.appendChild(newDiv);
  });
}

const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";


ajax(url).then((data) => {
  render(data);
});
// you should get product information in JSON format and render data in the page

// fetch('https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products')
// .then((response) => {
//     return response.json();
// })
// .then( (response) => {
//     console.log(response);
// })
// .catch((error) => {
//     console.log(`Error: ${error}`);
// })
