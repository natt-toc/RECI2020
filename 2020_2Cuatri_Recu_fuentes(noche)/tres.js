/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 

informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {

	let respuesta;
	let titular;
	let sexo;
	let lugar;
	let temporada;
	let cantidadPersonas;
	let lugarMaselegido;
	let titularConMasPax;
	let promedioDePersonasPorviaje;

	// contadores etc
	let contadorPersonas = 0;
	let contBariloche = 0;
	let contCataratas = 0;
	let contSalta = 0;
	let mayorCantPax = 0;
	let contadorPersonasInvierno;0


	do {


		// validación:
		// nombre del titular
		do {
			nombre = prompt("Ingrese nombre del titular ")
		} while (!(isNaN(nombre)));

		// lugar ( “bariloche”, “cataratas” o “salta”)
		do {
			lugar = prompt("Ingrese un destino: “Bariloche”, “Cataratas” o “Salta”");
			//console.log(lugar)
		} while (lugar != "Bariloche" && lugar != "Cataratas" && lugar != "Salta");

		// temporada (“otoño”,”invierno, “verano,”primavera”)
		do {
			temporada = prompt("Ingrese la temporada elegida");
			console.log(temporada)
		} while (!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera"));

		//cantidad de personas que viajan.
		do {
			cantidadPersonas = parseInt(prompt("ingrese la cantidad de personas van a viajar"))

		} while (isNaN(cantidadPersonas));

		// Contadores para: el lugar más elegido a)
		switch (lugar) {
			case "Bariloche":
				contBariloche++;
				break;
			case "Cataratas":
				contCataratas++;
				break;
			case "Salta":
				contSalta++;
				break;
		}

		// a)el lugar más elegido 

		if (contBariloche > contCataratas && contBariloche > contSalta) {
			lugarMaselegido = "Bariloche";

		} else if (contBariloche < contCataratas && contCataratas > contSalta) {
			lugarMaselegido = "Cataratas";

		} else if (contSalta > contCataratas && contSalta > contBariloche) {
			lugarMaselegido = "Salta";

		} else {
			lugarMaselegido = "Vaya! hay mas de un lugar como el mas elegido! ";
		}

		//b)el nombre de titular que lleva más pasajeros.
		//Aclaración: Inicializo en 0 mayorCantPasajeros

		if (mayorCantPax <cantidadPersonas) {
			mayorCantPax=cantidadPersonas;
			titularConMasPax=nombre;
		
		}

		//c)el promedio de personas por viaje,  que viajan en invierno
		if (temporada == "invierno") {
			acumuladorCantidadPersonas += cantidadPersonas;
			contadorPersonasInvierno++;
		}
		

		contadorPersonas++

		respuesta = confirm("Desea ingresar otra estadia")
	} while (respuesta == true);


	promedioDePersonasPorviaje= 

	document.write("El lugar mas elegido es " + lugarMaselegido + "<br/>");
	document.write("El nombre del titular que llevará mas pasajeros es " +titularConMasPax+ "<br/>");

}
