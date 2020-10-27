const header = document.querySelector(".ytab-strip-wrap");
console.log(header);

const button = document.createElement("button"); //cria e armazena meu botão na variável button
button.innerHTML = "Avaliar Todos"; //coloca o contente no html
button.classList.add("avalia"); //coloca uma class

function getRandomInt(min, max) { //Gera um inteiro aleatório dentro de um intervalo.
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

button.addEventListener("click", (e)=>{

    e.preventDefault();
    
    var selects = document.querySelectorAll('select'); //Pega todos os elementos select e coloca em um Array

    selects.forEach((select) => {
        select[getRandomInt(1, 3)].selected = true;

    })

})

header.appendChild(button);


