

const header = document.querySelector("#elgen-14");
console.log(header);

const button = document.createElement("button");
button.innerHTML = "Avaliar Todos";
button.classList.add("avalia");

// button.addEventListener("click", ()=>{

//     var select = document.querySelectorAll('select'); //Pega todos os elementos select e coloca em um Array

//     for(i=0; i< select.length; i++){ //pega cada select e marca a opção desejada.

//     let option = select[i].children; //Dá pra pegar todos os sub elementos option que estão no select específico
//     option[1].selected = true; //Atribuo a nota onde 0 = "" | 1 = 5 | 2 = 4 | 3 = 3 | 4 = 2 | 5 = 1 |

// };

// })


button.addEventListener("click", ()=>{

    var selects = document.querySelectorAll('select'); //Pega todos os elementos select e coloca em um Array

    selects.forEach((select) => {
        select[1].selected = true;
    })


    // for(i=0; i< select.length; i++){ //pega cada select e marca a opção desejada.

    // let option = select[i].children; //Dá pra pegar todos os sub elementos option que estão no select específico
    // option[1].selected = true; //Atribuo a nota onde 0 = "" | 1 = 5 | 2 = 4 | 3 = 3 | 4 = 2 | 5 = 1 |

// };

})


header.appendChild(button);

console.log(button);
