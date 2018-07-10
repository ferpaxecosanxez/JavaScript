function calcular(id) {
	// Si el valor del campo es numérico.
	if (validaNumero(id)) {
		// Realiza sumatorio.
		calcularSumatorio(id);
	}
}

function calcularSumatorio(id) {
	// Obtenemos el objeto DOM.
	var caja = document.getElementById(id);
	// Recuperamos su valor
	var valor = caja.value;
	var resultado = 0;
	for (var i = 1; i <= valor; i++) {
		resultado += i;
	}
	window.alert("Sumatorio = " + resultado);
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
	}
	// Verificar se han dado errores.
	return numeroValido;
}
