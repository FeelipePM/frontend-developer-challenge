const footerWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .footer {
      width: 100%;
      height: 200.64px;
      background-color: #707070;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #ffffff;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 12px;
      margin-top: 143px;
    }

    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (...$children) => {
    module._style();
    return `
      <section class="footer">
      ${$children.join("")}
      </section>`;
  };

  return {
    render: module.render
  };
})();
