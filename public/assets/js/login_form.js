let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  password = id("password"),
  pincode = id("pincode"),
  form = id("form"),
  errorMsg = classes("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Please do not leave blank!");
  engine(password, 1, "Please do not leave blank!");
  engine(pincode, 2, "Please do not leave blank!");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "1px solid #e22e2e";
    id.style.boxShadow = "0px 0px 8px 0px #e22e2ea6";
  } else {
    errorMsg[serial].innerHTML = "<span class='successful'>Successful!</span>";
    id.style.border = "1px solid #4caf50";
    id.style.boxShadow = "0px 0px 8px 0px #4caf507a";
  }
};
