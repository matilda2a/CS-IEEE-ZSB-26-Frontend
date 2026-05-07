let fontSelect = document.getElementById("fonts");
let colorSelect = document.getElementById("colors");
let sizeSelect = document.getElementById("sizes");

if (localStorage.fontFamily) {
  document.body.style.fontFamily = localStorage.fontFamily;
  fontSelect.value = localStorage.fontFamily;
}

if (localStorage.color) {
  document.body.style.color = localStorage.color;
  colorSelect.value = localStorage.color;
}

if (localStorage.fontSize) {
  document.body.style.fontSize = localStorage.fontSize;
  sizeSelect.value = localStorage.fontSize;
}

fontSelect.onchange = function () {
  document.body.style.fontFamily = this.value;
  localStorage.setItem("fontFamily", this.value);
};

colorSelect.onchange = function () {
  document.body.style.color = this.value;
  localStorage.setItem("color", this.value);
};

sizeSelect.onchange = function () {
  document.body.style.fontSize = this.value;
  localStorage.setItem("fontSize", this.value);
};