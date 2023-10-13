function insert(x) {
    if (document.getElementById('result').innerHTML === "Error!!!") {
        document.getElementById('result').innerHTML = "";
    }
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + x;
}

function clean() {
    document.getElementById('result').innerHTML = "";
}

function back() {
    let resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calculator() {
    let resultado = document.getElementById('result').innerHTML;
    if (resultado) {
        document.getElementById('result').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('result').innerHTML = "Error!!!";
    }
}
