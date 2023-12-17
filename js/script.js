const textSpan = document.querySelector(".text_SPAN");

const flowers = document.querySelectorAll(".flowers");

textSpan.addEventListener("click", () => {
  textSpan.classList.add("hidden");
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
});
