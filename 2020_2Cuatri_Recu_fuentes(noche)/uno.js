/* 1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
*/

// Alumnda: Natalia del Mar Rodriguez

function mostrar() {
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let cantidadPersonas = 0;
	let contadorHombres = 0;
	let contadorMujeres = 0;
	let acumuladorEdad = 0;
	let promedioDeEdades;
	let mayorTemperaturaMujer = 0;


	do {
		//validaciones: nombre
		do {
			nombre = prompt("Ingrese nombre ")
		} while (!(isNaN(nombre)));
		//sexo
		do {
			sexo = prompt("Ingrese el sexo ").toLowerCase()
		} while (!(sexo == "f" || sexo == "m"));
		//edad
		do {
			edad = parseInt(prompt("Ingrese la edad"))
		} while (!(edad >= 1 && edad <= 110));
		// temperatura
		do {
			temperatura = parseFloat(prompt("Ingrese la temperatura "))
		} while (!(temperatura >= 35 && temperatura <= 40));

		//Cuento las iteraciones
		cantidadPersonas++

		//a)informar la cantidad de personas de cada sexo
		if (sexo == "f") {
			contadorMujeres++;

			// c)la mujer con más temperatura. 
			if (mayorTemperaturaMujer < temperatura) {
				mayorTemperaturaMujer = temperatura;
			}

		} else //si no la hay
			contadorHombres++;

		//acumulador para sacar el promedio.
		acumuladorEdad += edad

	} while (cantidadPersonas <= 4);

	//	b)la edad promedio en total:
	promedioDeEdades = parseFloat(acumuladorEdad / cantidadPersonas).toFixed(1);

	// pedir datos por prompt y mostrar por document.write o console.log
	document.write("La cant de personas del sexo masculino es en total " + contadorHombres + " y del sexo femenino es" + contadorMujeres + "<br/>");
	document.write(" la edad promedio del total es de " + promedioDeEdades + "<br/>");

	if (mayorTemperaturaMujer > 0) {
		document.write(" la mujer con más temperatura es " + mayorTemperaturaMujer + "<br/>");
	} else
		document.write("No se han ingresado ninguna mujer hasta hora");
}
