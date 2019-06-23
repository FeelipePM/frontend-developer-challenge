const moreProducts = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .more-products {
    padding: 11px 37px;
    font-size: 16px;
    background-color: #fff;
    color: inherit;
    border: 1px solid #888888;
    border-radius: 4px;
    margin-top: 40px;
    cursor: pointer;
  }
   
  `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `
    <section class="products">
      <button class="more-products" onClick="moreProducts.handleClick(this)">Ainda mais produtos aqui!</button>
    </section>  
    `;
  };

  module.handleClick = () => {
    createdProducts();
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
