const textInput = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (textInput.value.trim() === "") {
    outputText.textContent = "Anonymous";
  } else {
    outputText.textContent = event.currentTarget.value.trim();
  }
});
