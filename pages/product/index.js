(function() {
  const $root = document.querySelector("#root");

  const $productWrapper = productWrapper.render(products());

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
