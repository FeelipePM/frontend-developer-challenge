const footerTitle = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .footer-title > p {
      text-align: center;
      font-style: normal;
      padding: 5px;
    }

    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `
      <address class="footer-title">
      <p>Testando suas habilidades em HTML, CSS e JS</p>
      <p>Linx Impulse</p>
      <p>2019</p>
      </address>
      `;
  };

  return {
    render: module.render
  };
})();
