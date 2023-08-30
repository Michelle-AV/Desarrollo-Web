function sumar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").textContent = resultado;
}

function resta() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").textContent = resultado;
}

function division() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 / num2;
    document.getElementById("resultado").textContent = resultado.toFixed(2);
}

function mult() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").textContent = resultado;
}

function limpiar() {
    document.getElementById("calculadora").reset();
    document.getElementById("resultado").textContent = " ";
}