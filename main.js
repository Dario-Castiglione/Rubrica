const rubrica = [];


function subscribe() {
    
    let name = prompt("inserisci il Nome");
    let surname = prompt("inserisci il Cognome");
    let number = prompt("inserisci il numero");
    let input = [name,surname,number]
    let nuovoutente = creazionePersona(input);
    addinRubrica(nuovoutente);
    console.log(rubrica)
}

//CREAZIONE DELL'OGGETTO 
 function creazionePersona(ArrEl){
     let persona = {
         nome : ArrEl[0],
         cognome : ArrEl[1],
         numero : ArrEl[2],
     }
     return persona
 }

//INSERIMENTO DELL'OGGETTO NELL'ARRAY RUBRICA
 function addinRubrica(persona){
    rubrica.push(persona);
 }

