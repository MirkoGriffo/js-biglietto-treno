/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo a schermo in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/
var km = prompt("Inserire il numero di km");

var eta = prompt("Quanti anni hai?");

var prezzoNetto = 0;

var prezzoSenzaSconto = km * 0.21;

if (eta < 18) {
  var sconto = (prezzoSenzaSconto * 20) / 100;
  document.getElementById("avviso").innerHTML =
    "Hai diritto allo sconto del 20%";
} else if (eta > 65) {
  var sconto = (prezzoSenzaSconto * 40) / 100;
  document.getElementById("avviso").innerHTML =
    "Hai diritto allo sconto del 40%";
} else {
  sconto = 0;
}

prezzoNetto = prezzoSenzaSconto - sconto;

document.getElementById("prezzo").innerHTML =
  "Prezzo del biglietto: " + prezzoNetto.toFixed(2) + "€";
