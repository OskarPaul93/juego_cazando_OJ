let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const VELOCIDAD = 15;
// Gato
let gatoX = 0;
let gatoY = 0;
const ANCHOGATO = 50;
const ALTURAGATO = 50;
 
// Comida
let comidaX = 50;
let comidaY = 50;
const ANCHOCOMIDA = 30;
const ALTURACOMIDA = 30;
 
function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
};
 
function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#000000");

};
 
function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHOCOMIDA, ALTURACOMIDA, "#ff0000");
};
 
function iniciarJuego() {
    gatoX = (canvas.width / 2) - (ANCHOGATO / 2);
    gatoY = (canvas.height / 2) - (ALTURAGATO / 2);

    //COMIDA ESQUINA INFERIOR DERECHA
    comidaX = canvas.width - ANCHOCOMIDA;
    comidaY = canvas.height - ALTURACOMIDA;
 
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    graficarGato();
    graficarComida();    
    
}


function mover(direccion) {
    if (direccion === "arriba") gatoY -= VELOCIDAD;
    if (direccion === "abajo") gatoY += VELOCIDAD;
    if (direccion === "izquierda") gatoX -= VELOCIDAD;
    if (direccion === "derecha") gatoX += VELOCIDAD;
    graficarGato();
}

//Limpiar canva

function limpiarCanva(){
    ctx.clearRect (0,0,canvas.width, canvas.height);
}

const LIMITE_X = canvas.width - ANCHOGATO; 
const LIMITE_Y = canvas.height - ALTURAGATO;

//Mover Izquierda
function moverIzquierda (){
    if(gatoX>0){
    gatoX -=10;
    limpiarCanva();
    graficarGato ();
    graficarComida();
    }
}

//Mover Derecha
function moverDerecha (){
    if(gatoX<LIMITE_X){
    gatoX +=10;
    limpiarCanva();
    graficarGato ();
    graficarComida();
    }
}

//Mover Arriba
function moverArriba (){
    if(gatoY>0){
    gatoY -=10;
    limpiarCanva();
    graficarGato ();
    graficarComida();
    }
}

//Mover Abajo
function moverAbajo (){
    if(gatoY<LIMITE_Y){
    gatoY +=10;
    limpiarCanva();
    graficarGato ();
    graficarComida();
    }
}

document.getElementById("btnArriba").onclick = () => moverArriba();
document.getElementById("btnAbajo").onclick = () => moverAbajo();
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha();
