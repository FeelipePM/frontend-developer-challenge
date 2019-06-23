(function() {
  const $root = document.querySelector("#root");

  const $product = product.render(
    "",
    "Nome do produto",
    "Descrição do produto um pouco maior.com duas linhas ou três que explica melhor do que se trata.",
    "23,99",
    "19,99"
  );

  const $productWrapper = productWrapper.render(
    $product,
    $product,
    $product,
    $product,
    $product,
    $product,
    $product,
    $product
  );

  const $headerContent = headerContent.render();

  const $headerWrapper = headerWrapper.render($headerContent);

  $root.insertAdjacentHTML("beforeend", $headerWrapper);
  $root.insertAdjacentHTML("beforeend", $productWrapper);
})();
