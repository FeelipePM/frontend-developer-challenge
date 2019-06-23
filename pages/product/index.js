(function() {
  const $root = document.querySelector("#root");

  const $headerContent = headerContent.render();

  const $headerWrapper = headerWrapper.render($headerContent);

  $root.insertAdjacentHTML("beforeend", $headerWrapper);
})();
