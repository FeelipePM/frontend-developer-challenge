const productWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .products {
      text-align: center;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      color: #888888;
    }

    .container-product {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding-left: 200px;
      padding-right: 200px;
    }

    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (...$children) => {
    module._style();
    return `
      <section class="products">
      <h2 class="page-title">Sua seleção especial</h2>
      <section class="container-product">
      ${$children.join("")}
      </section>
      </section>`;
  };

  return {
    render: module.render
  };
})();
