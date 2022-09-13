var numero1 = document.getElementById('num1').value;
var numero2 = document.getElementById('num2').value;
var numero3 = document.getElementById('num3').value;
var resultado = document.getElementById('resultado');
var boton = document.getElementById('boton');

function mayor() {
    alert(numero1);
    if (numero1 < numero2) {
        resultado.innerText = numero2;
    }
}

boton.addEventListener("click", mayor, true);

/* valor1=2
   valor2=4
   valor3=6
   si valor1 > valor2
   entonces ..
   si valor 1 > valor3
   entonces ..
   sino 
   si valor2 > valor3
   entonces ..
   sino
   si valor3 > valor1
   entonces valor3=mayor
    */

