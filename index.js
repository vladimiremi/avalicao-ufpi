var select = document.querySelectorAll('select'); //Pega todos os elementos select e coloca em um Array

for(i=0; i< select.length; i++){ //pega cada select e marca a opção desejada.

    let option = select[i].children; //Dá pra pegar todos os sub elementos option que estão no select específico
    option[2].selected = true; //Atribuo a nota onde 0 = "" | 1 = 5 | 2 = 4 | 3 = 3 | 4 = 2 | 5 = 1 |

};