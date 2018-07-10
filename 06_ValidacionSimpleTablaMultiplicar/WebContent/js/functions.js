function validaFormulario(objFormulario) {
	// Tenemos el objeto, por tanto, no tenemos que buscarlo, aparte que no
	// tiene id el formulario.
	//var form = document.getElementById(idForm);
	
	var msg = "";
	var error = false;

	for (i = 0; i < objFormulario.childNodes.length; i++) {
		var itemForm = objFormulario.childNodes[i];

		// Capturar etiqueta: <input>
		if (itemForm.tagName != null && itemForm.tagName == "INPUT") {
			var value = itemForm.value;
			var field = itemForm.name;

			if (itemForm.type == "text"
					&& (value == null || value.length == 0 || isNaN(value))) {
				error = true;
				msg += "El campo " + field + " debe contener n\u00FAmeros.\n\n";
			}
		}
	}
	// Verificar se han dado errores.
	if (error) {
		alert(msg);
		return false;
	} else {
		return true;
	}
}
