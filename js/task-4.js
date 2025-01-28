const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const inputData = {};

  new FormData(form).forEach((value, name) => {
    inputData[name] = value.trim();
  });

  form.reset();

  return console.log(inputData);
}
