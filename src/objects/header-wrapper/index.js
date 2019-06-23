const headerWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .header {
      width: 100%;
      height: 319.33px;
      background-color: #707070;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #FFFFFF;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif
    }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (...$children) => {
    module._style();
    return `
      <section class="header">
      ${$children.join("")}
      </section>`;
  };

  return {
    render: module.render
  };
})();
