const newsletterContent = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .newsletter .news-title {
      font-size: 18px;
      font-weight: bold;
      margin: 174px 0 44px 0;
    }

    .newsletter .news-subtitle {
      display: block;
      font-size: 14px;
      margin-bottom: 40px;
    }

    .newsletter-subscription {
      width: 100%;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: left;
    }


    .subscription label {
      display: inline-block;
    }

    .subscription label:first-child {
      display: inline-block;
      margin-right: 40px;
    }

    .subscription input {
      display: block;
      width: 340px;
      height: 30px;
      margin-top: 7px; 
    }

    .subscription .btn-news {
      display: block;
      width: 260px;
      height: 39px;
      background-color: #fff;
      border: 1px solid #707070;
      border-radius: 4px;
      color: #888888;
      font-size: 16px;
      margin: 50px auto;
      cursor: pointer;
    }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `
      <h2 class="news-title">Compartilhe a novidade</h2>
    <small class="news-subtitle">Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</small>
    <section class="newsletter-subscription">
      <form class="subscription">
        <label for="user">Nome do seu amigo:
        <input type="text" name="name">
        </label>
        <label>Email:
        <input type="email" name="email">
        </label>
        <input class="btn-news" type="submit" value="Enviar agora">
      </form>
    </section>`;
  };

  return {
    render: module.render
  };
})();
