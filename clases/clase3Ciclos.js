/* HAY 3 CLASES DE CICLOS O BUCLES

_ WHILE:   puede no ejecutarse si no se cumple la condicion logica 

while(condicion logica){
    todas las lineas de codigo que quiero que se repitan
    hay q cambiar la condicion logica, asi se corta el proceso y no se hace un bucle infinito
}
*/

// let contador = 1;

// while (contador <= 20) {
//     document.write('Elemento' + contador + '<br>');
//     contador = contador + 1; // o tambien se podria escribir contador++;
// }

/*
_DO DHILE: hacer (mientras se cumple la condicion logica) AL MENOS SE EJECUTA UNA VEZ

    do{
        todas las lines de codigo a ejecutar
    } while (condicion logica)
    */

    // let cont = 20;

    // do {
    //     document.write('Elemento' + cont + '<br>');
    //     cont--; // o tambien puede ser cont - 1;
    // } while (cont >=1);

    /* FOR funciona igual a un  while pero es mas sintetico

    //  for(inicializamos una variable; condicion logica; cambio incremento o decremento){
        .... lineas de codigo
    }   */

// for(let indice = 1; indice <= 100; indice = indice+1){
// document.write('Elemento' + indice + '<br>');
// }


/* Ejercicio Nº9
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
*/

let frase = prompt("ingresa una frase");
console.log(frase);
console.log(frase.length);
console.log(frase.charAt(3));

// recorrer la frase con un bucle (for o while), el fin del bucle sera hasta que los caracteres de la frase sea igual al length
//if preguntar si cada caracter es una vocal frase.charat(X) == 'vocal'
//si es igual a vocal mandar document.write
