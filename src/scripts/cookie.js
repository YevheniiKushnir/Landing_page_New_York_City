document.querySelectorAll(".cookie button").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".cookie").style.display = "none";
  });
});
