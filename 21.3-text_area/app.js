const text = document.querySelector("textarea");
const charCount = document.querySelector("span");
const btn = document.querySelector("button");
const msg = document.querySelector("div");
msg.style.color = "red";
let counter = 100;

text.addEventListener("keydown", () => {
  if (text.value.length < 100) {
    setTimeout(() => {
      let size = counter - text.value.length;
      if (size < 0) {
        size = 0;
      }
      charCount.innerText = `Characters left: ${size}`;
    }, 10);
  }
});

btn.addEventListener("click", () => {
  if (text.value.length < 100) {
    msg.innerText = "You need at least 100 characters!";
  } else {
    text.value = "";
    msg.innerText = "";
    charCount.innerText = "Characters left: 100";
  }
});
