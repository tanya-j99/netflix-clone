let get = document.querySelector(".get");
let okay = document.querySelector(".okay");
let idiot = document.querySelector(".idiot-holder");
let div = document.querySelectorAll(".div");

function getValue() {
  valueInput = document.querySelector("#input");
  value = valueInput.value;
  if (value != "") {
    idiot.classList.remove("hide");
    window.scrollTo({
      top: 0,
      behavior: "auto", // This adds a smooth scrolling effect
    });
  }
}

div.forEach((div) => {
  div.addEventListener("click", () => {
    idiot.classList.remove("hide");
    window.scrollTo({
      top: 0,
      behavior: "auto", // This adds a smooth scrolling effect
    });
  });
});

okay.addEventListener("click", () => {
  idiot.classList.add("hide");
});
