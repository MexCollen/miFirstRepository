const h1Principal = document.querySelector("#miH1");
const miButton = document.querySelector("#miButton");

miButton.addEventListener("click", changeText);

function changeText () {
  h1Principal.innerText = "lorem";
}
