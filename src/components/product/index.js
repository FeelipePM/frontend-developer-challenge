const product = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .product {
        width: 201px;
        height: 350px;
        text-align: left;
        margin-top: 50px;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        color: #888888;
        font-size: 12px;
      }

      .product .title {
        font-size: 14px;
        margin-top: 14px
      }

      .product .description {
        font-size: 12px;
        margin: 10px 0 10px 0;
      }

      .product .promotion {
        font-size: 16px;
        font-weight: bold;
        margin: 6px 0 7px 0;
      }

      .buy-product {
        display: block;
        border-radius: 4px;
        margin-top: 10px;
        width: 100%;
        height: 30px;
        text-decoration: none;
        text-align: center;
        line-height: 30px;
        border: 1px solid #707070;
        color: #888888;
        box-sizing: border-box;
      }

      .page-title {
        font-size: 18px;
        font-weight: bold;
        margin-top: 48.65px;
      }

      .img-product {
        display: block;
        width: 200px;
        height: 150px;
        border: 1px solid #888888;
        box-sizing: border-box;
      }

    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (
    productImage,
    productName,
    productDescription,
    productOldPrice,
    price
  ) => {
    module._style();
    return `
      <dl class="product">
      <img class="img-product" src="${productImage}" alt="Imagem do produto">
      <dt class="title">${productName}</dt>
      <dd class="description">${productDescription}</dd>
      <dd>De: R$${productOldPrice}</dd>
      <dd class="promotion">Por: R$${price}</dd>
      <dd>ou: 2x de R$9,99</dd>
      <dd><a href="" class="buy-product">Comprar</a></dd>
    </dl>`;
  };

  return {
    render: module.render
  };
})();
