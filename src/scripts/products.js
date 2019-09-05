const products = () => {
  const request = new XMLHttpRequest();

  request.open(
    "GET",
    "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1",
    true
  );

  request.onload = function() {
    const data = JSON.parse(this.response);

    const createProducts = () => {
      for (let i = 0; i <= data.products.length; i++) {
        if (typeof data.products[i] !== "undefined") {
          let productName = data.products[i].name;
          let productImage = "https:" + data.products[i].image;
          let productOldPrice = data.products[i].oldPrice;
          let price = data.products[i].price;
          let productDescription = data.products[i].description;

          const $containerProduct = document.querySelector(
            ".container-product"
          );

          const $product = product.render(
            productImage,
            productName,
            productDescription,
            productOldPrice,
            price
          );

          $containerProduct.insertAdjacentHTML("beforeend", $product);
        }
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
