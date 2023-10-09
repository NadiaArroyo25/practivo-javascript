const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const button = document.querySelector("#btnCalcular");
const presult = document.querySelector("#result");

button.addEventListener("click", btnOnclick);

function btnOnclick(){
   const sumaInputs = Number (input1.value) + Number (input2.value);
   presult.innerText = "restultado: " + sumaInputs
}
