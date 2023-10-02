// form page
const form = document.getElementById("form");
const username = document.getElementById("username");
const username2 = document.getElementById("username2");
const email = document.getElementById("email");
const number = document.getElementById("number");
const select = document.getElementById("select");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const username2Value = username2.value.trim();
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();
  const selectValue = select.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Ве молиме внесете го вашето име и презиме");
  } else {
    setSuccessFor(username);
  }

  if (username2Value === "") {
    setErrorFor(username2, "Ве молиме внесете име на компанија");
  } else {
    setSuccessFor(username2);
  }

  if (emailValue === "") {
    setErrorFor(email, "Ве молиме внесете валиден имелј ");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (numberValue === "") {
    setErrorFor(number, "Ве молиме внесете телефонски број");
  } else {
    setSuccessFor(number);
  }

  if (selectValue === "student") {
    setErrorFor(select, "Ве молиме изберете тип на студент");
  } else {
    setSuccessFor(select);
  }
}

function setErrorFor(input, message) {
  const inputControl = input.parentElement;
  const small = inputControl.querySelector("small");
  inputControl.className = "input-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const inputControl = input.parentElement;
  inputControl.className = "input-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
