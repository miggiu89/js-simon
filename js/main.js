// un alert mostra 5 numeri generati casualmente
//parte un timer di 30 secondi visibile
// finiti i 30 secondi chiedere all'utente di inserire i 5 numeri che sono apparsi nell'alert
// dire quanti numeri ha indovinato l'utente

// genero numeri random nell'alert
var numeriGenerati = [];
while ( numeriGenerati.length < 5 ){
    var random = numeriRandom(1,100);
    if ( !numeriGenerati.includes(random) ){
      numeriGenerati.push(random);
    }
}
alert(numeriGenerati);
console.log(numeriGenerati);


// inserimento numeri dell'utente
var numeriInseriti = [];
var numeriIndovinati;
var numeriCorretti = [];
setTimeout(indovinaNumeri, 15000);



// countdown (messo 15 secondi per far prima)
var secondi = 15;
var countdown = setInterval(function(){
  if ( secondi == 0 ){
    clearInterval(countdown);
    document.getElementById('gioco').innerHTML = ' ';
  } else {
    document.getElementById('gioco').innerHTML = secondi;
    secondi-- ;
  }
}, 1000);


// funzioni 

//generatore di numeri randomici
function numeriRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//funzione per far inserire i numeri all'utente
function indovinaNumeri(){
  while ( numeriInseriti.length != 5 ){
      var utente = parseInt(prompt('Inserisci un numero tra 1 e 100'));

      // controllo che non ci siano numeri doppioni e che siano compresi tra 1 e 100
      if ( numeriInseriti.includes(utente) ){
        alert('Numero già inserito');
      } else if( utente < 0 || utente > 100 ){
        alert('iL NUMERO DEVE ESSERE TRA 1 E 100!!!!');
      }
      else{
        numeriInseriti.push(utente);
      }



      // controllo quanti e quali numeri inseriti sono corretti
      if ( numeriGenerati.includes(utente)  &&  !numeriCorretti.includes(utente) ){
        numeriCorretti.push(utente);
        numeriIndovinati = numeriCorretti.length;
      } 
      else if ( numeriCorretti.length == 0 ){
        numeriIndovinati = 0;
        numeriCorretti = 'Mi dispiace, la tua memoria è pessima (si hai totalizzato 0)'
      }
  }
  console.log(numeriCorretti);
  document.getElementById('gioco').innerHTML = 'Hai indovinato ' + numeriIndovinati + ' numeri/o! I/Il numeri/o indovinati/o sono/è: ' + numeriCorretti;
}