let $nextPage = 1;

const createdProducts = () => {
  const request = new XMLHttpRequest();

  request.open(
    "GET",
    `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${$nextPage}`,
    true
  );

  $nextPage++;

  request.onload = function() {
    const data = JSON.parse(this.response);

    const createProducts = () => {
      for (let i = 0; i <= data.products.length; i++) {
        const productName = data.products[i].name;
        const productImage = "https:" + data.products[i].image;
        const productOldPrice = data.products[i].oldPrice;
        const price = data.products[i].price;
        const productDescription = data.products[i].description;

        const $containerProduct = document.querySelector(".container-product");

        const $product = product.render(
          productImage,
          productName,
          productDescription,
          productOldPrice,
          price
        );

        $containerProduct.insertAdjacentHTML("beforeend", $product);
      }
    };

    if (request.status >= 200 && request.status < 400) {
      createProducts();
    } else {
      console.log("error");
    }
  };

  request.send();
};
