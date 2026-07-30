document.documentElement.classList.add("js");

window.addEventListener("pageshow", () => {
  document.body.classList.remove("is-leaving");
  requestAnimationFrame(() => document.body.classList.add("is-ready"));
});

document.querySelectorAll('a[href]').forEach((link) => {
  const href = link.getAttribute("href");
  const isInternalPage =
    href &&
    href.endsWith(".html") &&
    !link.hasAttribute("target") &&
    !link.hasAttribute("download");

  if (!isInternalPage) return;

  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    document.body.classList.add("is-leaving");
    window.setTimeout(() => {
      window.location.href = href;
    }, 240);
  });
});
