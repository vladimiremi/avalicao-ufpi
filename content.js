const text = document.querySelector(".ytab-strip-wrap");
const header = document.querySelector(".ytab-strip-wrap");//pega o local que quero inserir meu html e css
//Button
const button = document.createElement("button");
button.innerHTML = "Avaliar Todos"; //coloca o contente no html
button.classList.add("avalia"); //coloca uma class
header.appendChild(button);//pega o lugar onde quero inserir o HTML e depois coloca o que quero inserir, que no caso é um botão que foi adicionado a const buttom

//Input
const input = document.createElement("input"); //cria e armazena meu botão na variável button
const input2 = document.createElement("input"); //cria e armazena meu botão na variável button
input.classList.add("valor");
input2.classList.add("valor");
header.appendChild(input);//coloca meu input no local definido
header.appendChild(input2);//coloca meu input no local definido
input.placeholder = "Menor nota";
input2.placeholder= "Maior nota";

//Text
const negacao = document.createElement("li");
console.log(negacao);
negacao.innerHTML = "5 - Péssimo; 4 - Deficiente; 3 - Regular; 2 - Bom; 1 - Ótimo. ( Está ao Contrário)";
negacao.classList.add("informacao");
text.appendChild(negacao);

//
function getRandomInt(min, max) { //Gera um inteiro aleatório dentro de um intervalo.
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
//Função executada ao clicar no botão
button.addEventListener("click", (e)=>{

    e.preventDefault();
    
    var selects = document.querySelectorAll('select'); //Pega todos os elementos select e coloca em um Array

    selects.forEach((select) => {
        select[getRandomInt(input.value, input2.value)].selected = true;

    })

})





