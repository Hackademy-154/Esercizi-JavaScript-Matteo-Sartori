// 3. Scrivere una funzione che, assegnati 2 numeri, generi un numero random intero fra i 2 assegnati(compresi)

function numeriRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(numeriRandom(1, 20));

// 4. Scrivere una funzione che trasformi un nome nelle sue iniziali. Ad esempio: "Tizio Caio" => "T.C."

function iniziali(nome) {
  let slitted = nome.split(" ");
  return `${slitted[0][0]}.${slitted[1][0]}.`;
}
console.log(iniziali("Matteo Sartori"));

// 5. Scrivere una funzione che, assegni 3 numeri, ritorni true se i 3 numeri possono eseere i lati di un triangolo, false altrimenti.

function isTriangle(a, b, c) {
  let primo = a > Math.abs(b - c) && a < b + c;
  let secondo = b > Math.abs(a - c) && b < b + c;
  let terzo = c > Math.abs(a - b) && c < b + c;
  return primo && secondo && terzo;
}
console.log(isTriangle(1, 15, 15));

// 6. Congettura di Collatz: preso un numero naturale maggiore di 1, se questo è pari dividerlo per 2, se dispari, moltiplicarlo per 3 e aggiungere 1. Ripetere. Qualunque sia il numero di partenza, l'algoritmo termina sempre ad 1. Scrivere una funzione che implementi l'algoritmo e ritorni un array con il valore calcolato ad ogni iterazione. Ad esempio, 10 >= [10, 5, 16, 8, 4, 2, 1]

function collatzAlgoritmo(a) {
  let collatzArray = [a];
  while (a > 1) {
    if (a % 2 == 0) {
      a = a / 2;
      collatzArray.push(a);
    } else {
      a = a * 3 + 1;
      collatzArray.push(a);
    }
  }
  console.log(collatzArray);
}
collatzAlgoritmo(10);

// 7. Scrivere un programma che stampi tutti i numeri da 1 a 100: per i multipli di 3 stampare"JAVA" (al pposto del numero), per i multipli di 5 stampare "Script", infine per i numeri multipli di 3 e 5 spampare "JAVASCRIPT"

function numeriTanti() {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log(`${i} = "JAVASCRIPT"`);
    } else if (i % 5 == 0) {
      console.log(`${i} = "SCRIPT"`);
    } else if (i % 3 == 0) {
      console.log(`${i} = "JAVA"`);
    }
  }
}
console.log(numeriTanti());

// 8. Scrivere una funzione che, assegnato un numero n, ritorni la successione di Fibonacci fino all'ennesimo numero sotto forma di array. Ad esempio 3=> [1,1,2] o ancora 9 =>[1,1,2,3,5,8,13,21,34]

function fibonacci(a) {
  let array = [1, 1];
  let b = 0;
  for (let i = 1; i < a - 1; i++) {
    b = array[i - 1] + array[i];
    array.push(b);
  }
  console.log(array);
}
fibonacci(9);

// 9. Scrivere una funzione che assegnato un numero n ritorni se è primo

function isPrimo(a) {
  if (a == 1) return false;
  if (a == 2) return true;
  for (let i = 2; i < a; i++) {
    if (a % i == 0) return false;
  }
  return true;
}
console.log(isPrimo(7));

// 10. Scrivere una funzione che, assegnata una stringa, ritorni la somma delle cifre in essa presenti. ad esempio "sono 1 stringa di 6 cifre"
let stringa = "1so1no 100 2stri100nga2 di 6 cif6re45";

function sommaSTRINGA(stringa) {
  let somma1 = 0;
  let spazi = stringa.replace(/\D/g, " ").split(" ");

  spazi.forEach((element) => {
    if (Number(element)) {
      let trasformato1 = parseInt(element);
      somma1 = trasformato1 + somma1;
    }
  });

  console.log(somma1);
}

sommaSTRINGA(stringa);

// 11. Scrivere una funzione che accetta come parametri un array di numeri ed un numero di soglia e restituisca un array formato dai numeri maggiori della soglia fornita ad esempio ([1,2,3,4]3) => [4]

let x = 4;
let array = [1, 2, 3, 4, 5, 6];

function soglia(array, x) {
  let newArray = [];

  array.forEach((element) => {
    if (element > x) {
      newArray.push(element);
    }
  });

  console.log(newArray);
}
soglia(array, x);

// 12. Scrivere una funzione che trasformi un numero in ore e minuti: ad esempio 3014 => 23:14 devono essere sempre presenti 2 cifre sia per le ore che per i minuti (non devo leggere ad esempio 1:9 ma 01:09)

let numero = "2314";

function orologio(numero) {
  let ore = 0;
  let minuti = 0;
}
