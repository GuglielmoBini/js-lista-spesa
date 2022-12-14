/*
Consegna:
Data una lista della spesa (inventatela), stampare in pagina gli elementi della lista individualmente con un ciclo while.
(anche brutalmente, basta che si vedano).

Bonus:
Provare a stampare sia con i template literals che con i nodi, manipolando il DOM.

Consigli:
- Ricordiamoci di inizializzare le variabili  che servono alla condizione FUORI dal ciclo while, altrimenti verranno azzerate ad ogni ciclo
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/

//----------------------------------------------------------------------------

/* STEP
1- prendo l'elemento dal DOM
2- creo una lista della spesa (array)
3- creo un ciclo while
4- stampo in pagina
*/

// prendo l'elemento dal DOM
const targetElement = document.getElementById("target");

// creo una lista della spesa (array)
const shoppingList = [
  "pane",
  "acqua",
  "verdure",
  "carne",
  "biscotti",
  "latte",
  "vino",
  "yogurt",
];

let myList = "<ul>";

//creo ciclo while

let i = 0;
while (i < shoppingList.length) {
  myList += `<li class="h2">${shoppingList[i]}</li>`;
  i++;
}

myList += "</ul>";

//stampo in pagina
targetElement.innerHTML = myList;
