//Variables que usamos en todas las funciones
var ctrl = 0;
function presionaDigito(digito) {
    var display = document.getElementById("display");
        if(ctrl == 0) display.value = "";
    display.value = display.value + digito;
    ctrl = 1;
}

function limpiaDisplay() {
    var display = document.getElementById("display");
    display.value="0";
    ctrl=0;
}

function presionaOperador(operador) {
    var display = document.getElementById("display");
    if(ctrl == 0 && operador == "(")  display.value="";
    if(ctrl == 0) ctrl = 1;
    display.value = display.value + operador;
}

function presionaIgual() {
    var display = document.getElementById("display");
    var resultado = eval(display.value);
    display.value = resultado;
}

function calculaRaiz() {
    var display = document.getElementById("display");
    display.value = Math.sqrt(eval(display.value));
}

function calcularPotencia() {
    var exponente = prompt('Exponente: ');
    var display = document.getElementById("display");
    display.value = Math.pow(eval(display.value),exponente);
}

function calcularLn() {
    var display = document.getElementById("display");
    display.value = Math.log(eval(display.value));
}

function calcularLog() {
    var display = document.getElementById("display");
    display.value = Math.log10(eval(display.value));
}

function calcularFactorial() {
	var num = document.getElementById("display").value; 
    var total = 1;
	for (i=1; i<=num; i++) {
	    total = total * i;
	}
    display.value = total;
}


function calcularPorcentaje(){
    var num = document.getElementById("display").value;
    display.value = (eval(num)/100);
}
