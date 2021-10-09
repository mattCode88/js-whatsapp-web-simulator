//STRUTTURA DATI
class UserClass {
    constructor(name,
                avatar,
                visible,
                selected,
                lastAccess,
                messages,             
                ){
                    this.name = name;
                    this.avatar = avatar;
                    this.visible = visible;
                    this.selected = selected;
                    this.lastAccess = lastAccess;
                    this.messages = messages;
                }
}
class Messages {
    constructor(data, text, status, removed){
        this.data = data;
        this.text = text;
        this.status = status;
        this.removed = removed;
    }
}

// FUNZIONE PER CREARE ARRAY MESSAGGI----------------------------------------------------------------------------------------------------------------------
const createMessagesArray = (number, ...element) => {
    let array = [];
    let message;
    let data;
    let mex;
    let status;
    let primo = 0;
    let secondo = 1;
    let terzo = 2;
    let remove = false;
    for(let i = 0; i < number; i++){
        for(let x = 0; x < 3; x++){
            data = element[primo];
            mex = element[secondo];
            status = element[terzo];
        }
        primo += 3;
        secondo += 3;
        terzo += 3;
        message = new Messages(data, mex, status, remove);
        array.push(message);
    }
    return array;
}

// CREO ARRAY MESSAGGI PER OGNI UTENTE----------------------------------------------------------------------------------------------------------------------
const arrayLuigi = createMessagesArray( 3,
                                        '10/01/2020 15:30:55',
                                        'Hai portato a spasso il cane? Fagli fare un giro lungo che non esce da un po.',
                                        'sent',
                                        '10/01/2020 15:50:00',
                                        'Ricordati di dargli da mangiare',
                                        'sent',
                                        '10/01/2020 16:15:22',
                                        'Tutto fatto.',
                                        'received');
       
const arrayMario = createMessagesArray( 3,
                                        '20/03/2020 16:30:00',
                                        'Ciao come stai?',
                                        'sent',
                                        '20/03/2020 16:30:55',
                                        'Bene grazie! Stasera ci vediamo?',
                                        'received',
                                        '20/03/2020 16:35:00',
                                        'Mi piacerebbe ma devo andare a fare la spesa.',
                                        'sent');

const arrayFausto = createMessagesArray(3,
                                        '28/03/2020 10:10:40',
                                        'La Marianna va in campagna',
                                        'received',
                                        '28/03/2020 10:20:10',
                                        'Sicuro di non aver sbagliato chat?',
                                        'sent',
                                        '28/03/2020 16:15:22',
                                        'Ahahah..era uno scherzo che voleva farti Ambrogio!',
                                        'received');

const arrayLuisa = createMessagesArray( 2,
                                        '10/01/2020 15:30:55',
                                        'Lo sai che ha aperto una nuova pizzeria?',
                                        'sent',
                                        '10/01/2020 15:50:00',
                                        'Si, ma preferirei andare al cinema',
                                        'received');

const arrayFernando = createMessagesArray( 2,
                                        '15/01/2020 09:30:55',
                                        'Ehi Ferni come stai?',
                                        'sent',
                                        '15/01/2020 09:50:00',
                                        'We bello tutto bene..tu?',
                                        'received');

const arrayAmbrogio = createMessagesArray(3,
                                        '02/03/2020 20:10:40',
                                        'Teo scrivi al Fausto che la Marianna va in campagna...',
                                        'received',
                                        '02/03/2020 20:20:10',
                                        'Ahahahah...che bigolo!',
                                        'sent',
                                        '02/03/2020 20:15:22',
                                        'Dai dai facciamogli sto scherzo.',
                                        'received');

const arrayLeopoldo = createMessagesArray( 3,
                                        '10/01/2020 08:33:55',
                                        'Sono un po stanco oggi...',
                                        'sent',
                                        '10/01/2020 08:50:00',
                                        'Non dirlo a me!',
                                        'received',
                                        '10/01/2020 08:55:22',
                                        'Ci vorrebbe una settimana di totale relax.',
                                        'sent');

const arrayFrancesca = createMessagesArray( 3,
                                        '10/01/2020 12:34:55',
                                        'Ma quanto è bella la Francesca???',
                                        'sent',
                                        '10/01/2020 12:35:00',
                                        'è bella e buona come una pesca!',
                                        'sent',
                                        '10/01/2020 12:38:22',
                                        'Dai scemo....',
                                        'received');

// CREO OGGETTI USER----------------------------------------------------------------------------------------------------------------------------------------
const luigi = new UserClass("Luigi", 'avatar_1.jpg', true, true, '16:15', arrayLuigi);
const mario = new UserClass("Mario", 'avatar_2.jpg', false, true, '16:35', arrayMario);
const fausto = new UserClass("Fausto", 'avatar_3.jpg', false, true, '17:45', arrayFausto);
const luisa = new UserClass("Luisa", 'avatar_4.jpg', false, true, '15:50', arrayLuisa);
const fernando = new UserClass("Fernando", 'avatar_6.jpg', false, true, '09:50', arrayFernando);
const ambrogio = new UserClass("Ambrogio", 'avatar_7.jpg', false, true, '20:15', arrayAmbrogio);
const leopoldo = new UserClass("Leopoldo", 'avatar_8.jpg', false, true, '08:55', arrayLeopoldo);
const francesca = new UserClass("Francesca", 'avatar_9.jpg', false, true, '12:38', arrayFrancesca);

// CREO JSON----------------------------------------------------------------------------------------------------------------------------------------------
const userJson = [luigi, mario, fausto, luisa, fernando, ambrogio, leopoldo, francesca];

// ELEMENTI DOM E VARIABILI------------------------------------------------------------------------------------------------------------------------------
const WHATZAPPLEFTBOTTOM = document.getElementById("whatzapp-left-bottom");
const WHATZAPPRIGHTTOP = document.getElementById("whatzapp-right-top");
const WHATZAPPRIGHTTOPUSER = document.querySelector("#whatzapp-right-top > div:first-of-type");
const CONTENTMESSAGE = document.querySelector("#whatzapp-right-center > div");
const INVIOMESSAGGIO = document.getElementById("input2");
const CERCAUTENTE = document.getElementById("input");
let eliminaMessaggio;
let nomeInserito = '';
let elementiDaMostrare = [];
let arrayRisposte = [
                    'Tutto bene tu?',
                    'Scusa sto lavorando.',
                    'Tanto va la gatta al largo che ci lascia lo zampino.',
                    'Non ti voglio sentire',
                    'Trallalero trallalla',
                    'Domani vado in vacanza!',
                    'Per fortuna che sono bello!',
                    `La mela non cade lontana dall' albero`,
                    `Quando vieni a trovarmi?`,
                    `Ok.`
                    ];

// FUNZIONI STRUTTURALI--------------------------------------------------------------------------------------------------------------------------------
// FUNZIONE PER VISUALIZZARE LISTA UTENTI--------------------------------------------------------------------------------------------------------------
function mostraUtenti(array) {
    eliminaUtenti();
    array.forEach(element => {
        let div = document.createElement("DIV");
        div.setAttribute("class", element.name);
        div.innerHTML = `<div>
                            <img src="./image/${element.avatar}" class="avatar">
                            <div class="${element.name}">
                               <div class="${element.name}">
                                    <div class="${element.name}">${element.name}</div>
                                    <div class="${element.name}">${getLastMessage(element.messages)}</div>
                               </div>
                               <div class="${element.name}">${getDataLastMessage(element.messages)}</div>   
                            </div>
                         </div>`;
        WHATZAPPLEFTBOTTOM.appendChild(div);
    });
}

// MOSTRA UTENTE SELEZIONATO-------------------------------------------------------------------------------------------------------------------------------
function mostraUtenteSelezionato() {
    userJson.forEach(element => {
        if ( element.visible ) {
            WHATZAPPRIGHTTOPUSER.innerHTML = `<img src="./image/${element.avatar}" class="avatar">
                                                <div>
                                                    <div>${element.name}</div>
                                                    <div>Ultimo accesso: ${element.lastAccess}</div>
                                                </div>`;
        }
    });
}

// MOSTRA MESSAGGI UTENTE-----------------------------------------------------------------------------------------------------------------------------------
function mostraMessaggiUtente() {
    pulisciMessaggi();
    let div;
    userJson.forEach(element => {
        if ( element.visible ) {
            element.messages.forEach(messaggio => {
                if ( messaggio.status === 'sent' && !messaggio.removed ) {
                    div = document.createElement("DIV");
                    div.setAttribute("class", "sent");
                    div.innerHTML = `<div>${messaggio.text}</div>
                                    <div>${cutData(messaggio.data)}</div>
                                    <i class="fas fa-times"></i>`;
                    CONTENTMESSAGE.appendChild(div);
                }
                if ( messaggio.status === 'received' && !messaggio.removed ) {
                    div = document.createElement("DIV");
                    div.setAttribute("class", "received");
                    div.innerHTML = `<div>${messaggio.text}</div>
                                    <div>${cutData(messaggio.data)}</div>
                                    <i class="fas fa-times"></i>`;
                    CONTENTMESSAGE.appendChild(div);
                }
            });
        }
    });
}

// VISUALIZZA MESSAGGIO DI DEFAULT-------------------------------------------------------------------------------------------------------------------------
function showDefaultMessage() {
    let messaggiVisualizzati = document.querySelectorAll("#whatzapp-right-center > div > div");
    if ( messaggiVisualizzati.length === 0 || messaggiVisualizzati[0].className === "default-message" ){
        let div = document.createElement("DIV");
        div.setAttribute("class", "default-message");
        div.innerHTML = "I messaggi e le chiamate sono crittografati end-to-end.Nessuno al di fuori di questa chat, nemmeno WhatSapp, può leggerne o ascoltarne il contenuto. Tocca per saperne di più.";
        CONTENTMESSAGE.appendChild(div);
    }
}

// FUNZIONI UTILITY--------------------------------------------------------------------------------------------------------------------------------------
// GENERA NUMERO RANDOM
function generaNumeroRandom() {
    return Math.floor(Math.random() * (arrayRisposte.length - 0) + 0);
}

// ELIMINO GLI UTENTI DALLA LISTA------------------------------------------------------------------------------------------------------------------------
function eliminaUtenti() {
    let utenti = document.querySelectorAll("#whatzapp-left-bottom > div");
    if( utenti.length > 0 ) {
        utenti.forEach(element => {
            element.remove();
        });
    }
}

// RECUPERO ULTIMO MESSAGGIO PRESENTE NELLA LISTA-----------------------------------------------------------------------------------------------------------
function getLastMessage(array) {
    let count = 0;
    for ( let i = array.length; i => 0; i-- ) {
        if ( array[i] && !array[i].removed ) {
            return cutMessage(array[i].text);
            break;
        } else if ( i === 0 ){
            return 'I messaggi e le chiamate so...';
        }
    }
}

// RECUPERO LA DATA DELL' ULTIMO MESSAGGIO------------------------------------------------------------------------------------------------------------------
function getDataLastMessage(array) {
    for ( let i = 0; i < array.length; i++ ) {
        if ( i === array.length - 1 ) {
            return array[i].data.slice(10, 16);
        }
    }
}

// TAGLIO DATA DA MOSTRARE NEI MESSAGGI--------------------------------------------------------------------------------------------------------------------
function cutData(data) {
    return data.slice(10, 16);
}

// TAGLIO MESSAGGIO DA MOSTRARE----------------------------------------------------------------------------------------------------------------------------
function cutMessage(messaggio) {
    if( messaggio.length > 27 ) {
        let messaggioTagliato = messaggio.slice(0, 27);
        return messaggioTagliato + "...";
    } else {
        return messaggio;
    }
}

// PULISCI MESSAGGI-----------------------------------------------------------------------------------------------------------------------------------------
function pulisciMessaggi() {
    let listaMessaggi = document.querySelectorAll("#whatzapp-right-center > div > div");
    listaMessaggi.forEach(element => {
        element.remove();
    });
}

// RECUPERO ORA INVIO MESSAGGIO------------------------------------------------------------------------------------------------------------------------------
function oraInvioMessaggio () {
    let date = new Date();
    let ora = date.getHours();
    let minutes = aggiungi0AData(date.getMinutes());
    let giorno = aggiungi0AData(date.getDate());
    let mese = aggiungi0AData(date.getMonth());
    let anno = date.getFullYear();
    let time = `${giorno}/${mese}/${anno} ${ora}:${minutes}`;
    return time;
}

// CREAZIONE MESSAGGI INVIATI/RICEVUTI
function createObjMessage(time, testoMessaggio, status, array) {
    let objMessage = {};
    objMessage.data = time;
    objMessage.text = testoMessaggio;
    objMessage.status = status;
    objMessage.removed = false;
    array.push(objMessage);
}

// AGGIUNGI 0 PRIMA DI UNA DATA O ORA------------------------------------------------------------------------------------------------------------------------
function aggiungi0AData(date) {
    if(date < 10){
        date = `0${date}`;
        return date
    }
    return date;
}

// TRIGGER FUNZIONI----------------------------------------------------------------------------------------------------------------------------------------
mostraUtenti(userJson);
mostraUtenteSelezionato();
mostraMessaggiUtente();

// EVENTI---------------------------------------------------------------------------------------------------------------------------------------------------
// EVENTO PER SELEZIONE UTENTE-----------------------------------------------------------------------------------------------------------------------------
WHATZAPPLEFTBOTTOM.addEventListener("click", (e) => {
    if ( e.target.tagName === "DIV" && e.originalTarget.id !== "whatzapp-left-bottom" ) {
        userJson.forEach(element => {
            if ( element.name === e.target.className ) {
                element.visible = true;
            } else {
                element.visible = false;
            }
        });
    }
    if(elementiDaMostrare.length > 0){
        mostraUtenti(elementiDaMostrare);
    } else {
        mostraUtenti(userJson);
    } 
    mostraUtenteSelezionato();
    mostraMessaggiUtente();
    showDefaultMessage();    
})

// EVENTO DI INVIO MESSAGGI--------------------------------------------------------------------------------------------------------------------------------
INVIOMESSAGGIO.addEventListener("keypress", (e) => {
    if( e.keyCode === 13 && INVIOMESSAGGIO.value !== "" ) {
        let testoMessaggio = INVIOMESSAGGIO.value;
        let time = oraInvioMessaggio();
        let userName;
        INVIOMESSAGGIO.value = "";
        userJson.forEach(element => {
            if( element.visible ) {
                userName = element.name;
                createObjMessage(time, testoMessaggio, 'sent', element.messages);
            }
        });  
        if(elementiDaMostrare.length > 0){
            mostraUtenti(elementiDaMostrare);
        } else {
            mostraUtenti(userJson);
        }
        mostraMessaggiUtente();
        setTimeout( function() {
            let time = oraInvioMessaggio();
            let randomNumber = generaNumeroRandom();
            userJson.forEach(element => {
                if( element.name === userName ) {
                    createObjMessage(time, arrayRisposte[randomNumber], 'received', element.messages);
                    element.lastAccess = cutData(time);
                    mostraUtenteSelezionato();
                }
            });
            if(elementiDaMostrare.length > 0){
                mostraUtenti(elementiDaMostrare);
            } else {
                mostraUtenti(userJson);
            }
            mostraMessaggiUtente();
        }, 10000);
    }
})

// EVENTO PER ELIMINARE MESSAGGI-------------------------------------------------------------------------------------------------------------------------
CONTENTMESSAGE.addEventListener("click", (e) => {
    if( e.target.tagName === "I" ){
        let messaggioRimosso = e.target.parentElement.firstChild.textContent;
        userJson.forEach(element => {
            if(element.messages){
                element.messages.forEach(el => {
                    if(el.text === messaggioRimosso){
                        el.removed = true;
                    }
                });
            }
        });
        e.target.parentElement.remove();
        showDefaultMessage();
    }
    if(elementiDaMostrare.length > 0){
        mostraUtenti(elementiDaMostrare);
    } else {
        mostraUtenti(userJson);
    }
})

// EVENTO PER RICERCA UTENTI-----------------------------------------------------------------------------------------------------------------------------
CERCAUTENTE.addEventListener("keypress", (e) => {
    if ( e.key === "Enter" && CERCAUTENTE.value !== "" ) {
        elementiDaMostrare = [];
        let nome = CERCAUTENTE.value;
        let nomeCorretto;
        nomeCorretto = nome[0].toUpperCase() + nome.slice(1, nome.length);
        userJson.forEach(element => {
            if( element.name.includes(nomeCorretto) ) {
                elementiDaMostrare.push(element);
            }
        });
        mostraUtenti(elementiDaMostrare);
    } else if ( e.key === "Enter" && CERCAUTENTE.value === "" ) {
        elementiDaMostrare = [];
        mostraUtenti(userJson);
    }   
})




