const textSpan = document.querySelector(".text_SPAN");

const flowers = document.querySelectorAll(".flowers");
const audio = new Audio("./audio.mp3");
textSpan.addEventListener("click", () => {
  textSpan.classList.add("hidden");
  audio.play();
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
});
