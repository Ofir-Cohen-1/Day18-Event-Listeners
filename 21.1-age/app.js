const input = document.querySelector("input");
const btn = document.querySelector("button");
const text = document.querySelector("h2");

input.placeholder = "Enter Age";

function submit() {
  text.style.color = "red";
  if (isNaN(Number(input.value))) {
    text.innerText = "Please enter a number";
  } else if (Number(input.value) < 0) {
    text.innerText = "Please enter a positive age";
  } else if (Number(input.value) >= 18) {
    text.style.color = "green";
    text.innerText = "you can drink";
  } else {
    text.innerText = "you're too young";
  }
  input.value = "";
}

btn.addEventListener("click", submit);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submit();
  }
});
