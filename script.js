function media() {
  //inicio
  var nome = document.getElementById("nome").value;
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var peso1 = parseFloat(document.getElementById("peso1").value);
  var peso2 = parseFloat(document.getElementById("peso2").value);
  var media = (nota1 * peso1) + (nota2 * peso2);

  console.log(nome);
  console.log(nota1);
  console.log(nota2);
  console.log(peso1);
  console.log(peso2);
  console.log(media);

  var card = document.querySelector(".card");
  var resultado = document.querySelector(".card-ponderada");

  card.style.display = "none";
  resultado.style.display = "flex";

  var nomeuser = document.getElementById("nomeuser");
  var notap = document.getElementById("notap");
  
  nomeuser.innerHTML = nome;
  notap.innerHTML = media.toFixed(2);
  
}


function voltar() {

  var card = document.querySelector(".card");
  var resultado = document.querySelector(".card-ponderada");

  card.style.display = "flex";
  resultado.style.display = "none";

}
