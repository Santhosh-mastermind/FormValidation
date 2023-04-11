const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  if (!validateForm()) {
    e.preventDefault();
  }
});
function validateForm() {
  var temp = true;
  var uname = username.value.trim();
  var upassword = password.value.trim();
  var ucpassword = cpassword.value.trim();
  var emailVal = email.value.trim();
  if (uname === "" || uname === " ") {
    temp = false;
    setError(username, "Please Enter user name");
  } else {
    setSucess(username);
  }

  if (upassword === "" || upassword === " ") {
    temp = false;
    setError(password, "Password must not be empty");
  } else if (upassword.length < 6) {
    temp = false;
    setError(password, "password must be more than 6 character");
  } else {
    setSucess(password);
  }

  if (ucpassword === upassword && ucpassword != "" && ucpassword != " ") {
    setSucess(cpassword);
  } else {
    temp = false;
    setError(cpassword, "Enter valid password");
  }
  if (emailVal === "") {
    temp = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailVal)) {
    temp = false;
    setSucess(email, "Please enter a valid email");
  } else {
    setSucess(email);
  }
  return temp;
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function setError(element, errormessage) {
  const parentElement = element.parentElement;
  const errorElement = parentElement.querySelector(".error");
  errorElement.innerText = errormessage;
  parentElement.classList.add("error");
  parentElement.classList.remove("success");
}
function setSucess(element) {
  const parentElement = element.parentElement;
  const errorElement = parentElement.querySelector(".error");
  errorElement.innerText = "";
  parentElement.classList.add("success");
  parentElement.classList.remove("error");
}
