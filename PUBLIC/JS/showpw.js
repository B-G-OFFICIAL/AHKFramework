const checkbox = document.getElementById("showPassword");
const passwordInput = document.getElementById("passwordInput");

checkbox.addEventListener("click", function() {
  if (checkbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});