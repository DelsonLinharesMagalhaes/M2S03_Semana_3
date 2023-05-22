// Exercicio 8 Metodo SetInterval

myInterval = setInterval(setColor, 500);
 
function setColor() {
  let x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}
 
function stopColor() {
  clearInterval(myInterval);
}