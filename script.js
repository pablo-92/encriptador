/* SELECCION DE TODOS LOS ELEMENTOS */
var texto1 = document.querySelector("#texto-1");
var botonEncriptar = document.querySelector("#encriptar");
var botonDesencriptar = document.querySelector("#desencriptar");
var munieco = document.querySelector("#munieco");
var ayuda = document.querySelector("#ayuda");
var texto2 = document.querySelector("#texto-2");
var botonCopiar = document.querySelector("#copiar");
/* SELECCION DE TODOS LOS ELEMENTOS */

/* FUNCIONES AL CLICKEAR */
window.onload = function () {
  botonEncriptar.onclick = encriptado;
  botonDesencriptar.onclick = desencriptado;
  botonCopiar.onclick = funcionCopiar;
}
/* FUNCIONES AL CLICKEAR */

/* ENCRIPTAR */
function encriptado() {
  var nuevoInput = texto1.value;
  var input2 = nuevoInput.replace(/[e]/igm, "enter").replace(/[i]/igm, "imes").replace(/[a]/igm, "ai").replace(/[o]/igm, "ober").replace(/[u]/igm, "ufat");

  texto2.textContent = input2;
  ayuda.style.display = "none";
  munieco.style.display = "none"
  texto2.style.display = "block";
  botonCopiar.style.display = "block";
}
/* ENCRIPTAR */

/* COPIAR */
function funcionCopiar() {
  var copiado = texto2.innerHTML;
  navigator.clipboard.writeText(copiado);
}
/* COPIAR */

/* DESENCRIPTAR */
function desencriptado() {
  var nuevoInput2 = texto1.value;
  var input3 = nuevoInput2.replace(/enter/igm, "e").replace(/imes/igm, "i").replace(/ai/igm, "a").replace(/ober/igm, "o").replace(/ufat/igm, "u");

  texto2.textContent = input3;
  ayuda.style.visibility = "hidden";
  texto2.style.display = "block";
  botonCopiar.style.visibility = "visible";
}
/* DESENCRIPTAR */