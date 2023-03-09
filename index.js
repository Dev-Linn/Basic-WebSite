const btn = document.querySelector("#send")

btn.addEventListener("click" , function(e){
e.preventDefault();

const name = document.querySelector("#name");

const value = name.value;

var a = value

console.log(value)

document.getElementById("teste2").innerHTML = "A cor: " + " ' " +cor + " ' " + " não está disponivel"


})  