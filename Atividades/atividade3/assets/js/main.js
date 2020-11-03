/* Js reconhece maiusculas e minusculas, cuidado!

formas de acessar o dom
por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
/*getElementeById com # não funciona
 e query selector sem # não funciona */

/*
nome.style.width = '100%'
email.style.width = '100%' */

function sendForm() {
  event.preventDefault();
  if (nome.value.length < 3 && assunto.value.length > 20) {
    alert(
      "Hm, acredito que escreveu algo errado :( Verifique se seu nome está correto, e se o assunto foi descrito. Tente novamente por favor!"
    );
  } else {
    alert("Valeu por colaborar SZ!");
  }
}
