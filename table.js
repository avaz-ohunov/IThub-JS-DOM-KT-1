// table.js

"use strict";


// Массив, куда будут добавляться рандомные числа
let randomNums = [];

// Добавляем в массив рандомные числа
for(let i = 1; i <= 30; i++) {
    let randNum = Math.floor(Math.random() * 99) + 1;
    randomNums.push(randNum);
}


// Добавляем теги таблицы
document.body.innerHTML += "<table></table>";

document.getElementsByTagName("table")[0]
    .innerHTML += "<tbody></tbody>";

let tbody = document.getElementsByTagName("tbody")[0];


// Функция добавления ячеек
function addRandNum(randNum = false) {
    if(!randNum) {
        randNum = Math.floor(Math.random() * 99) + 1;
        randomNums.push(randNum);
    }
    
    if(randNum >= 50) {
        tbody.lastChild.innerHTML += `
            <td style="background-color: orange; color: black;">
                ${randNum}
            </td>
        `;
    } else {
        tbody.lastChild.innerHTML += `<td>${randNum}</td>`;
    }
}


// Создаём таблицу
for(let index in randomNums) {
    if(index % 5 === 0) {
        tbody.innerHTML += "<tr></tr>";
    }
    
    addRandNum(randomNums[index]);
}


// Функция добавления рандомного числа в таблицу
function foo() {
    if(randomNums.length % 5 === 0) {
        tbody.innerHTML += "<tr></tr>";
    }
    
    addRandNum();
}
