function operacion(idNumN, idNumM, tipoOperacion) {
	var resultado = document.getElementById("res");
	var valorResultado;
	
	// Si el valor del campo es numérico.
	if (validaNumero(idNumN) && validaNumero(idNumM)) {
		var n = parseInt(document.getElementById(idNumN).value);
		var m = parseInt(document.getElementById(idNumM).value);
		
		// Realiza operación.
		switch (tipoOperacion) {
		case "+":
			valorResultado = sumar(n, m);
			break;
		case "-":
			valorResultado = restar(n, m);
			break;
		case "*":
			valorResultado = multiplicar(n, m);
			break;
		case "/":
			valorResultado = dividir(n, m);
			break;
		}
		
		// Escribimos valor.
		resultado.value = valorResultado;
		
		// Si la operación se realizó de forma correcta, limpiamos los campos.
		document.getElementById(idNumN).value = "";
		document.getElementById(idNumM).value = "";
		// Enviamos el curso al primer campo.
		document.getElementById(idNumN).focus();
	}
}

function validaNumero(id) {
	var caja = document.getElementById(id);
	var value = caja.value;
	var msg = "";
	var field = caja.name;
	var numeroValido = true;

	if (value == null || value.length == 0 || isNaN(value)) {
		numeroValido = false;
		msg += "El campo " + field + " debe contener n\u00FAmeros.\n\n";
		alert(msg);
		// Enviamos cursor al campo inválido.
		caja.focus();
	}
	return numeroValido;
}

//Si nos fijamos en las funciones que realizan las operaciones, estan operando
//de forma directa con los valores de los campos, es verdad que lo hemos
//validado de que sean valores numéricos, pero en ningún momento estamos
//diciendo que son de tipo enteros.
//JS no tiene tipado en sí.
function sumar(n, m) {
	return (n + m);
}

function restar(n, m) {
	return (n - m);
}

function multiplicar(n, m) {
	return (n * m);
}

function dividir(n, m) {
	if(m == 0) {
		window.alert("No se puede dividir por 0");
		return "NaN";
	}
	
	return (n / m);
}
