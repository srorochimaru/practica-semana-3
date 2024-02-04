function calcularVelocidad() {
    var distancia = document.getElementById('distancia').value;
    var tiempo = document.getElementById('tiempo').value;
    var velocidad = (distancia * 1000) / (tiempo * 60);
    document.getElementById('resultado1').innerHTML = 'La velocidad es ' + velocidad + ' m/s';
}

function tipoTriangulo() {
    var lado1 = document.getElementById('lado1').value;
    var lado2 = document.getElementById('lado2').value;
    var lado3 = document.getElementById('lado3').value;
    var tipo;
    if (lado1 == lado2 && lado2 == lado3) {
        tipo = 'Equilátero';
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        tipo = 'Isósceles';
    } else {
        tipo = 'Escaleno';
    }
    document.getElementById('resultado2').innerHTML = 'El triángulo es ' + tipo;
}

function calculadora() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operacion = document.getElementById('operacion').value;
    var resultado;
    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 != 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Error: División por cero';
            }
            break;
    }
    document.getElementById('resultado3').innerHTML = 'El resultado es ' + resultado;
}


function esPrimo() {
    var numero = document.getElementById('numero').value;
    var esPrimo = true;
    for (var i = 2; i < numero; i++) {
        if (numero % i == 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        document.getElementById('resultado4').innerHTML = 'El número es primo';
    } else {
        document.getElementById('resultado4').innerHTML = 'El número no es primo';
    }
}
