document.querySelectorAll(".accordion__top").forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.classList.toggle("accordion--active");
  });
});
