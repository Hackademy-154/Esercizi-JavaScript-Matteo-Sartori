// es1
// dichiara una variabile num1, e assegnale un numero qualsiasi
// dichiara una variabile num2, e assegnale un numero qualsiasi
// visualizza a schermo “Il valore della variabile num1 e' tot“. Fai la stessa cosa per num2
// dichiara una variabile chiamata stringa, e assegnale come valore una stringa qualsiasi
// stampa a schermo “Il valore della variabile stringa e' tot“
// sostituisci il valore della variabile stringa con un qualsiasi altro valore e poi stampalo a schermo.
// dichiara una costante chiamata PIGRECO, e assegnale un valore di 3.14159265359
// visualizza a schermo “il valore di PIGRECO e' tot”
// prova a cambiare il valore della costante e vedi cosa succede

let num1 = 1;
let num2 = 2;

console.log(num1, num1 + num2);

var stringa = "ciao sono nuovo";

console.log((stringa = "ciao"));

const PIGRECO = 3.14159265359;
//   console.log((PIGRECO = 2));

//   es2
// Crea due variabili contenenti l’anno corrente e l’anno di nascita di una persona. Crea un programma che calcoli:
// l’eta' della persona
// quanti anni sono necessari per raggiungere i 100
// In console poi mostra la frase “Hai tot anni e ti mancano tot anni per compierne 100“.

let annoCorrente = 2024;
let nascita = 1998;

function calcoloAnni(annoCorrente, nascita) {
  let età = annoCorrente - nascita;
}

console.log(
  `Hai ${annoCorrente - nascita} anni e ti mancano ${
    100 - (annoCorrente - nascita)
  } per compierne 100!!`
);

// es3
// Crea due variabili i cui valori verranno scelti dall’utente. Crea un programma che esegua i seguenti calcoli su quei due numeri:

// somma
// sottrazione
// moltiplicazione
// divisione
// potenza
// In seguito in console stampa la frase “Con i numeri da te scelti, i risultati delle varie operazioni sono: somma (tot), sottrazione(tot) ecc ecc“.

// HINT

// Usa parseInt() per trasformare il valore che inserisci nel prompt in un numero → es: parseInt(prompt('Inserisci un numero:'))

let number1;
let number2;
function operazioni(number1, number2) {
  let somma = number1 + number2;
  let sottrazione = number1 - number2;
  let moltiplicazione = number1 * number2;
  let divisione = number1 / number2;
  let potenza = number1 ** number2;
  console.log(
    `Con i numeri da te scelti, i risultati delle varie operazioni sono: Somma:${somma} Sottrazione:${sottrazione}, Moltiplicazione:${moltiplicazione}, Divisione:${divisione}, Potenza:${potenza}`
  );
}
operazioni(10, 2);

console.log(parseInt("123456"));

// Crea due variabili, una che contiene il numero totale dei gatti e una che contiene il numero dei gatti in fila. Scrivi quindi un programma che calcoli:
// Il numero di file risultanti
// il numero di gatti mancanti per completare una nuova fila
// quanti gatti rimangono fuori
// In seguito, stampa in console la frase “Ci sono X file di gatti e ne mancano Y per una nuova fila, con un avanzo di Z”

let gattiTotale = 26;
let gattiInFila = 6;
let fileTotali = Math.floor(gattiTotale / gattiInFila);
let avanzo = gattiTotale % gattiInFila;
let mancanti = gattiInFila - avanzo;

console.log(
  `Esercizio 1 "Condizioni e Cicli":\n\nCi sono ${fileTotali} file di gatti e ne mancano ${mancanti} per una nuova fila, con un avanzo di ${avanzo}`
);

// Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
// se il voto e’ minore di 18,  stampare in console  “insufficiente”
// se il voto e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
// se il voto e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
// se il voto e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
// se il voto e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
// se il voto e’ uguale a 30, stampare in console:  “eccellente”
// Esempio:
// let v = 29;
// Output: Ottimo
// Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch.

let voto = 26;

if (voto < 18) {
  console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto insufficiente`);
} else if (voto >= 18 && voto <= 21) {
  console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto sufficiente`);
} else if (voto >= 21 && voto <= 24) {
  console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto buono`);
} else if (voto >= 24 && voto <= 27) {
  console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto distinto`);
} else if (voto >= 27 && voto <= 29) {
  console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto ottimo`);
} else if (voto == 30) {
  console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto eccellente`);
} else {
  console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto non valido`);
}

switch (true) {
  case voto < 18:
    console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto insufficiente`);
    break;
  case voto >= 18 && voto <= 21:
    console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto sufficiente`);
    break;
  case voto >= 21 && voto <= 24:
    console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto buono`);
    break;
  case voto >= 24 && voto <= 27:
    console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto distinto`);
    break;
  case voto >= 27 && voto <= 29:
    console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto ottimo`);
    break;
  case voto == 30:
    console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto eccellente`);
    break;
  default:
    console.log(`Esercizio 2 "Condizioni e Cicli":\n\nVoto non valido`);
    break;
}

//Scrivi un programma che converta una temperatura inserita dall’utente con una delle seguenti descrizioni, stampate in console:

// se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sule e lu ientu”
// se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
// se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”
// Cerca di risolvere questo esercizio utilizzando prima if else e poi con switch case.

let temperatura = 31;

if (temperatura < -10) {
  console.log(
    `Esercizio 3 "Condizioni e Cicli":\n\ncopriti…ancora ti raffreddi`
  );
} else if (temperatura < 0) {
  console.log(
    `Esercizio 3 "Condizioni e Cicli":\n\n “non e’ tanto il freddo quanto l’umidità"`
  );
} else if (temperatura < 20) {
  console.log(
    `Esercizio 3 "Condizioni e Cicli":\n\n “non ci sono piu’ le mezze stagioni"`
  );
} else if (temperatura < 30) {
  console.log(
    `Esercizio 3 "Condizioni e Cicli":\n\n “mi dia una peroni sudata"`
  );
} else if (temperatura >= 30) {
  console.log(
    `Esercizio 3 "Condizioni e Cicli":\n\n “lu mare, lu sule e lu ientu"`
  );
} else {
  console.log("non esiste");
}

switch (true) {
  case temperatura < -10:
    console.log(
      `Esercizio 3 "Condizioni e Cicli":\n\n"copriti…ancora ti raffreddi"`
    );
    break;
  case temperatura < 0:
    console.log(
      `Esercizio 3 "Condizioni e Cicli":\n\n"non e’ tanto il freddo quanto l’umidità"`
    );
    break;
  case temperatura < 20:
    console.log(
      `Esercizio 3 "Condizioni e Cicli":\n\n"non ci sono piu’ le mezze stagioni"`
    );
    break;
  case temperatura < 30:
    console.log(
      `Esercizio 3 "Condizioni e Cicli":\n\n"mi dia una peroni sudata"`
    );
    break;
  case temperatura >= 30:
    console.log(
      `Esercizio 3 "Condizioni e Cicli":\n\n“lu mare, lu sule e lu ientu"`
    );
    break;

  default:
    console.log("non esiste");
    break;
}

// Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.
let num = 2;

for (let i = 1; i < 11; i++) {
  console.log(
    `Esercizio 4 "Condizioni e Cicli":\n\n ${i} * ${num} = ${i * num}`
  );
}

// Scrivi un programma che stampi dei numeri da 1 a 20 ma solo quelli pari. Di tutti i numeri dispari, invece, calcola anche la media e stampala a schermo.
let totNumeri = 0;
let totDispari = 0;
let media = totDispari / totNumeri;

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0 && i != 0) {
    console.log(`Esercizio 5 "Condizioni e Cicli":\n\n ${i}`);
  } else {
    totNumeri = totNumeri + 1;
    console.log(`SommaDispari=  ${totDispari} + ${i}`);

    totDispari = i + totDispari;
  }

  media = totDispari / totNumeri;
}

console.log(`La media dei numeri dispari è :${media}`);

// ES 6

// while (true) {
//   scelta = prompt(
//     "Seleziona una bevanda:\n1: Acqua\n2: Coca Cola\n3: Birra"
//   );

//   switch (scelta) {
//     case "1":
//       console.log("E’ stata selezionata l’acqua");
//       break;
//     case "2":
//       console.log("E’ stata selezionata la coca cola");
//       break;
//     case "3":
//       console.log("E’ stata selezionata la birra");
//       break;
//     default:
//       continue;
//   }
//   break;
// }

// Esercizi Funzioni e array

// Dato il seguente array mischiato e confuso:

let array_1 = [
  ["un", "per", "incatenarli."],
  ["Anello", "trovarli,"],
  ["ghermirli", "e"],
  ["gondor", "mark"],
];

let array_2 = [
  [["trovarli,"]],
  ["tu,", "sciocchi"],
  ["tu,", "sciocchi", ["padron", "Sauron"]],
  ["nel", ["fuggite", "gandalf"]],
  [["domarli,", "passare"], "buio"],
];
// Stampa a schermo la frase: "Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.“

// HINT

// Non tutte le parole sono necessarie per la frase;
// Occhio agli array annidati

let frase = [
  array_1[0][0],
  array_1[1][0],
  array_1[0][1],
  array_2[4][0][0],
  array_1[0][0],
  array_1[1][0],
  array_1[0][1],
  array_1[1][1],
  array_1[0][0],
  array_1[1][0],
  array_1[0][1],
  array_1[2][0],
  array_1[2][1],
  array_2[3][0],
  array_2[4][1],
  array_1[0][2],
].join(" ");
console.log(frase);

// Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.

// Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
// ogni dado ha 6 facce
// ogni giocatore tirerà il dado n volte
// Per ogni giocatore:
// generare un numero casuale per ogni tiro che effettuera’,
// ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.
// TIPS:

// Usiamo questa formula per generare un numero random → Math.floor(Math.random() * (6 - 1) + 1);

// let giocoDadi = prompt("Quanti tiri facciamo?");
function game(giocoDadi) {
  let scorePlayer1 = 0;
  let scorePlayer2 = 0;

  // Player 1
  for (let i = 1; i <= giocoDadi; i++) {
    let tiroDadi = Math.floor(Math.random() * (6 - 1) + 1);
    scorePlayer1 = tiroDadi + scorePlayer1;
  }

  // Player 2
  for (let i = 1; i <= giocoDadi; i++) {
    let tiroDadi = Math.floor(Math.random() * (6 - 1) + 1);
    scorePlayer2 = tiroDadi + scorePlayer2;
  }

  // Condizione Vittoria
  if (scorePlayer1 < scorePlayer2) {
    console.log(
      `Il giocatore 2 ha vinto con un totale di: ${scorePlayer2} punti!\n Il giocatore 1 ha invece totalizzato: ${scorePlayer1} punti`
    );
  } else if (scorePlayer1 > scorePlayer2) {
    console.log(
      `Il giocatore 1 ha vinto con un totale di: ${scorePlayer1} punti!\n Il giocatore 2 ha invece totalizzato: ${scorePlayer2} punti`
    );
  } else {
    console.log(
      `I giocatori hanno pareggiato con un totale di: Giocatore 1: ${scorePlayer1} punti!\nGiocatore 2: ${scorePlayer2} punti!`
    );
  }
}
// game(giocoDadi);

// Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:

// N dovra’ rappresentare il parametro formale della funzione
// tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'

function print(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      console.log(`Multiplo di 15: fizzBuzz ${i}`);
    } else if (i % 5 == 0) {
      console.log(`Multiplo di 5: Buzz ${i}`);
    } else if (i % 3 == 0) {
      console.log(`Multiplo di 3: Fizz ${i}`);
    } else {
      console.log(i);
    }
  }
}
print(100);

// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

// Esempio:

// Input : 9 → output: 1 cifra
// Input : 99 → output: 2 cifre
// Input: 12000 → output: Numero troppo grande

function count(x) {
  converted = x.toString();
  if (converted.length > 4) {
    console.log("Numero troppo grande");
  } else if ((converted.length = 1)) {
    console.log(`${converted.length} Cifre`);
  } else if ((converted.length = 2)) {
    console.log(`${converted.length} Cifre `);
  } else if ((converted.length = 3)) {
    console.log(`${converted.length} Cifre `);
  } else {
    console.log(`${converted.length} Cifre `);
  }
}
count(999999);

// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.

// Primo step: eliminare gli spazi e i segni di punteggiatura:
// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")
// Esempio:

// Input: “i topi non avevano nipoti”
// Output: true

function palindroma(frase2) {
  let frase1 = "i topi non avevano nipoti";

  let replaced1 = frase1.replace(/\W/g, "");
  let replaced2 = frase2.replace(/\W/g, "");

  if (replaced1 == replaced2) {
    console.log("true");
  } else {
    console.log("false");
  }
}
palindroma("i ' to-  pi no  nave .  vano ni -  pot   i");

// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

// Esempio:
// Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
// Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]
// Variante:
// Prova ad ordinali in modo crescente.

function riordina() {
  let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
  let crescente = array.sort((a, b) => a - b);
  let decrescente = array.sort((a, b) => b - a);
  console.log(decrescente, crescente);
}
riordina();

// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:

// Esempio:

//  Input: a = [3, 5, 10, 2, 8]
//  Output: media = 5.6, valori minori = [3, 5, 2]

// Variante:

// Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.

let a = [3, 5, 10, 2, 8, 90, 41, 4, 7, 87, -1];
function cose(a) {
  let somma = a.reduce((acc, n) => acc + n);
  let media = somma / a.length;

  let riordina = a.sort((a, b) => a - b);

  let minori;
  let maggiori;

  minori = riordina.slice(0, 3);
  maggiori = riordina.slice(Math.max(riordina.length - 3, 1));

  console.log(
    `Media: ${media}\nNumeri Minori: ${minori}\nNumeri Maggiori: ${maggiori}`
  );
}
cose(a);

// Crea un oggetto persona con le seguenti caratteristiche:

// nome
// cognome
// eta'
// un metodo che permetta di salutare

let persona = {
  nome: "Matteo",
  cognome: "Sartori",
  età: 26,
};
console.log(
  `Ciao mi chiamo ${persona.nome} ${persona.cognome} e ho ${persona.età} anni`
);

// Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:

// mostrare tutti i contatti dell’agenda
// mostrare un singolo contatto
// eliminare un contatto dall’agenda
// aggiungere un nuovo contatto
// modificare un contatto esistente
// Suggerimento:
let rubrica = {
  contacts: [
    { nome: "Angela", telefono: "3331111111" },
    { nome: "Annalisa", telefono: "3332222222" },
    { nome: "Paola", telefono: "3333333333" },
    { nome: "Emilia", telefono: "3334444444" },
  ],
  // Mostra contatti
  showContacts: function () {
    this.contacts.forEach((contact) => {
      console.log(`nome: ${contact.nome}\nnumero è: ${contact.telefono}`);
    });
  },
  // Mostra singolo contatto
  showSingleContact: function (nome) {
    let contatto = this.contacts.find((contact) => contact.nome === nome);
    if (contatto) {
      console.log(`Contatto richiesto: ${contatto.nome}`);
    } else {
      console.log(`contatto non trovato`);
    }
  },
  // Elimina contatto
  deleteContact: function (nome) {
    let originalLength = this.contacts.length;

    this.contacts = this.contacts.filter((contatto) => contatto.nome !== nome);

    if (this.contacts.length < originalLength) {
      rubrica.showContacts();
      console.log(`Contatto "${nome} eliminato con successo!"`);
    } else {
      console.log(`Contatto "${nome} inesistente!"`);
    }
  },
  // Aggiungi contatto
  addContact: function (nome, telefono) {
    let newContact = { nome: nome, telefono: telefono };
    this.contacts.push(newContact);
    rubrica.showContacts();
    console.log("Contatto aggiunto con successo!!");
  },
  // Modifica contatto esistente

  changeContactPrompt: function () {
    let contattoCercato = prompt("quale contatto vuoi modificare?");
    let index = this.contacts.findIndex((obj) => obj.nome == contattoCercato);
    let nomeModificato = prompt("come vuoi modificare il nome?");
    let numeroModificato = prompt("come vuoi modificare il numero?");
    if (
      nomeModificato != "" &&
      nomeModificato != " " &&
      nomeModificato != null &&
      nomeModificato != undefined
    ) {
      this.contacts[index].nome = nomeModificato;
    }
    if (
      numeroModificato != "" &&
      numeroModificato != " " &&
      numeroModificato != null &&
      numeroModificato != undefined
    ) {
      this.contacts[index].telefono = numeroModificato;
    }
    alert("contatto modificato");
  },
};

rubrica.showSingleContact("Angela");
rubrica.deleteContact("Paola");
// rubrica.changeContactPrompt();
rubrica.addContact("Matteo", "333333333333");

// Crea un oggetto bowling con le seguenti caratteristiche:

// una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi
// diverse funzionalità tra cui:
// creare 10 punteggi casuali per ogni giocatore:
// Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores,
// dieci punteggi casuali ad ogni giocatore
// Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
// trovare il punteggio finale per ogni giocatore:

// aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui
// determinare il vincitore
// Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
// EXTRA:

// Crea un metodo per stilare la classifica finale dei giocatori

// DATI DI PARTENZA:

let bowling = {
  players: [
    { name: "Livio", scores: [] },
    { name: "Paola", scores: [] },
    { name: "Filippo", scores: [] },
    { name: "Giuseppe", scores: [] },
  ],

  setScore: function () {
    this.players.forEach((element) => {
      for (let i = 0; i < 11; i++) {
        element.scores.push(Math.floor(Math.random() * 11));
      }
      console.log(element);
    });
  },

  setFinalScore: function () {
    this.players.forEach((element) => {
      element.finalScore = element.scores.reduce((acc, n) => acc + n, 0);
    });
  },

  addNewPlayer: function (name) {
    let array = [];
    for (let i = 0; i < 11; i++) {
      array.push(Math.floor(Math.random() * 11));
    }
    this.players.push({ name: name, scores: array });
  },

  setWinner: function () {
    this.players.sort((a, b) => b.finalScore - a.finalScore);
    let winnerScore = this.players[0].finalScore;

    let pareggiatori = [this.players[0]];

    for (let i = 1; i < this.players.length; i++) {
      if (this.players[i].finalScore == winnerScore) {
        pareggiatori.push(this.players[i]);
      }
    }
    if (pareggiatori.length >= 2) {
      console.log("I vincitori a parimerito sono: ");
      pareggiatori.forEach((element) => {
        console.log(
          `${element.name} con un punteggio di ${element.finalScore} punti`
        );
      });
      for (let i = pareggiatori.length; i < this.players.length; i++) {
        console.log(
          `${i - 1}° ${this.players[i].name} con un punteggio di: ${
            this.players[i].finalScore
          } `
        );
      }
    } else if ((pareggiatori.length = 1)) {
      console.log(
        `Il vincitore è ${this.players[0].name} con un punteggio di: ${this.players[0].finalScore} `
      );
      for (let i = 1; i < this.players.length; i++) {
        console.log(
          `${i + 1}° ${this.players[i].name} punteggio di: ${
            this.players[i].finalScore
          }`
        );
      }
    }
  },
};

bowling.setScore();
bowling.addNewPlayer("Pollo");
bowling.setFinalScore();
bowling.setWinner();
console.log(bowling);
