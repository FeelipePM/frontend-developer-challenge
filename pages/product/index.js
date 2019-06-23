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
  const $moreProducts = moreProducts.render();
  const $newsletterContent = newsletterContent.render();
  const $footerTitle = footerTitle.render();

  const $headerWrapper = headerWrapper.render($headerContent);
  const $newsletterWrapper = newsletterWrapper.render($newsletterContent);
  const $footerWrapper = footerWrapper.render($footerTitle);

  $root.insertAdjacentHTML("beforeend", $headerWrapper);
  $root.insertAdjacentHTML("beforeend", $productWrapper);
  $root.insertAdjacentHTML("beforeend", $moreProducts);
  $root.insertAdjacentHTML("beforeend", $newsletterWrapper);
  $root.insertAdjacentHTML("beforeend", $footerWrapper);
})();
