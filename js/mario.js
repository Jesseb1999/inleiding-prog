// koppelt alle (html) elementen aan een variabele voor een overzichtelijk geheel
var htmlBody = document.getElementById('body');

var title = document.getElementById('title');
var mario = document.getElementById('mario');

var sterBtn = document.getElementById('sterBtn');
var kartBtn = document.getElementById('kartBtn');
var shellBtn = document.getElementById('shellBtn');
var inkt = document.getElementById('inkt');
var inktBtn = document.getElementById('inktBtn');

var audio = document.getElementById('audioFile');
var playpauseBtnText = document.getElementById('playpauseBtnText');
var playpauseBtn = document.getElementById('playpauseBtn');
var count = 0;


//array met strings 
var images = ['../img/mario_state1.png', '../img/mario_shell.png', '../img/mario_ster.png', '../img/mario_kart.png', '../img/inkt_scherm.png',];

//functie kart veranderd de img en text naar gewenst resultaat. Roept na 5 sec de resetMario functie aan.
function kart() {
    mario.src = images[3];
    title.textContent = 'Mario heeft een nieuwe kart gekregen!';
    setTimeout(resetMario, 5000);
}

//functie shell veranderd de img en text naar gewenst resultaat. Roept na 5 sec de resetMario functie aan.
function shell(){
    mario.src = images[1];
    title.textContent = 'Mario heeft een shell gevonden om te gooien!';
    setTimeout(resetMario, 5000);
}

//functie ster veranderd de img en text naar gewenst resultaat. Roept na 5 sec de resetMario functie aan.
function ster(){
    mario.src = images[2];
    title.textContent = "Mario heeft zojuist extra XP gekregen!";
    setTimeout(resetMario, 5000);
}

// deze functie veranderd het img en text naar begin state 
function resetMario(){
    mario.src = images[0];
    title.textContent = 'Speel met Mario!';
    inkt.style.display = 'none';
}

// deze functie veranderd het img en text naar een geinkt scherm
function inktScreen(){
    inkt.style.display = 'block';
    setTimeout(resetMario, 5000);
}

// deze functie laat de audio werken, als count 0 is zet dan count op 1 (audio starten), else is hij geen 0 doe dan dit (audio stoppen)
function playAudio(){
    if (count == 0){
        count = 1;
        audio.play();
        playpauseBtnText.textContent = 'Pauzeer audio';
    } else{
        count = 0;
        audio.pause();
        playpauseBtnText.textContent = 'Speel audio';
    }
}

// Voer d.m.v. een click event een bepaalde functie uit op een element/knop
sterBtn.addEventListener('click', ster);
shellBtn.addEventListener('click', shell);
kartBtn.addEventListener('click', kart);
inktBtn.addEventListener('click', inktScreen);
playpauseBtn.addEventListener('click', playAudio);

