let username = document.getElementById("username");
let email = document.getElementById("email");
let age = document.getElementById("age");
let country = document.getElementById("country");

if (sessionStorage.username) {
  username.value = sessionStorage.username;
}

if (sessionStorage.email) {
  email.value = sessionStorage.email;
}

if (sessionStorage.age) {
  age.value = sessionStorage.age;
}

if (sessionStorage.country) {
  country.value = sessionStorage.country;
}

username.oninput = function () {
  sessionStorage.setItem("username", this.value);
};

email.oninput = function () {
  sessionStorage.setItem("email", this.value);
};

age.oninput = function () {
  sessionStorage.setItem("age", this.value);
};

country.onchange = function () {
  sessionStorage.setItem("country", this.value);
};
