let text = document.querySelector("#text");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  btn.innerText = "copied";
  navigator.clipboard.writeText(text.value);
  setInterval(() => {
    btn.innerText = "copy";
  }, 4000);
});
