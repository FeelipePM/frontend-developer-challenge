const newsletterWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .newsletter {
      width: 100%;
      display: block;
      text-align: center;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      color: #888888;
    }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (...$children) => {
    module._style();
    return `
      <section class="newsletter">
      ${$children.join("")}
      </section>`;
  };

  return {
    render: module.render
  };
})();
