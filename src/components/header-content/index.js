const headerContent = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .header-title {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .highlighted {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 24px;
    }

    .header-subtitle {
      font-size: 14px;
    }

    .header .menu-nav {
      display: flex;
      margin-top: 50px;
    }

    .header .menu-nav li {
      margin: 0 40px 0 40px;
    }

    .header .menu-nav li a {
      display: block;
      text-decoration: none;
      color: #888888;
      background-color: #FFFFFF;
      border: 1px solid #707070;
      padding: 12px 42px;
      border-radius: 5px;
    }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `
      <small class="header-title">
      uma seleção de produtos
    </small>
    <h1 class="highlighted">
      especial para você
    </h1>
      <h2 class="header-subtitle">
        Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
      </h2>
      <nav class="menu">
        <ul class="menu-nav">
          <li><a href="">Conheça a Linx</a></li>
          <li><a href="">Ajude o algoritmo</a></li>
          <li><a href="">Seus produtos</a></li>
          <li><a href="">Compartilhe</a></li>
        </ul>
      </nav>`;
  };

  return {
    render: module.render
  };
})();
