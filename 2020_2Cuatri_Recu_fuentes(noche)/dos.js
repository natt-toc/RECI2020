/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
*/
function mostrar() {

  let respuesta;
  let marca;
  let precio;
  let peso;
  let tipo;
  let acumuladorPeso = 0;
  let productoPrecioMasCaro = 0;
  let marcaLiqCaro;
  let productoMenosPesado;
  let marcaSolidoMasLiviano;
  let flagSolido = 0;

  do {

    //  validar datos: 
    //marca
    do {
      marca = prompt("Ingrese la marca deseada ")

    } while (!(isNaN(marca)));

    // precio
    do {
      precio = parseInt(prompt("Ingrese el precio"));
    }
    while (isNaN(precio));

    //peso en Kg
    do {
      peso = parseInt(prompt("ingrese el peso en Kg"));

    } while (isNaN(peso));

    // tipo(sólido o líquido).
    do {
      tipo = prompt("Ingrese el tipo: Sólido o líquido")
    }
    while (!(tipo == "Sólido" || tipo == "líquido"));

    //a)informar el peso total de la compra.
    acumuladorPeso += peso
    console.log("cantidad de productos " + acumuladorPeso)

    //  b)la marca del más caro de los líquidos
    //aclaración: En liquido no utilicé la bandera porque inicializo la variable en 0 dte.
    if (tipo == "líquido") {
      if (productoPrecioMasCaro < precio) {
        productoPrecioMasCaro = precio;
        marcaLiqCaro = marca;
      }
      // c)la marca del más liviano de los sólidos
    } else if (tipo == "Sólido") {

      if (flagSolido == 0) {
        marcaSolidoMasLiviano = marca;
        productoMenosPesado = peso;
        flagSolido = 1;
      }
    }
    respuesta = confirm("Desea continuar??");
  } while (respuesta == true);

  document.write(" El peso total de la compra es de " + acumuladorPeso + "<br/>");
  document.write("la marca del más caro de los líquidos es " + marcaLiqCaro + "<br/>");
  document.write("la marca del más liviano de los sólidos " + marcaSolidoMasLiviano + "<br/>");


}
