const addInput = document.querySelector(".classes-to-add");
const removeInput = document.querySelector(".classes-to-remove");
const currentElement = document.querySelector(".current");
const resultBox = document.querySelector(".classes-list div");

function showClasses() {
  resultBox.innerHTML = "";

  let classes = Array.from(currentElement.classList).sort();

  if (classes.length === 0) {
    resultBox.textContent = "No Classes To Show";
    return;
  }

  classes.forEach(cls => {
    let span = document.createElement("span");
    span.textContent = cls;
    resultBox.appendChild(span);
  });
}

addInput.addEventListener("blur", () => {
  let value = addInput.value.trim().toLowerCase();

  if (value !== "") {
    let classes = value.split(" ");

    classes.forEach(cls => {
      if (cls !== "") {
        currentElement.classList.add(cls);
      }
    });
  }

  addInput.value = "";
  showClasses();
});

removeInput.addEventListener("blur", () => {
  let value = removeInput.value.trim().toLowerCase();

  if (value !== "") {
    let classes = value.split(" ");

    classes.forEach(cls => {
      if (cls !== "") {
        currentElement.classList.remove(cls);
      }
    });
  }

  removeInput.value = "";
  showClasses();
});

showClasses();