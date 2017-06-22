const clase3 = {
  title: 'Clase 3: ',
  tags: ['funciones', 'declaracion'],
  brief:`Aprenderás a crear funciones que te serviran para ahorrar lineas de códigos y no repetirlas.`,
  text: `Funciones

-Para crear una función se debe tener en consideración lo siguiente:
Tener un único nombre.
Debe aclarar un tipo de dato, si retorna o no un valor, sino lo hace debe emplear void.
Debe indicar si recibe valores (parámetros) y de que tipo.

-Ejemplo: int suma(int a, int b){
                   int c;
                   c=a+b;
                   return(c);
                 }
En el ejemplo el tipo de la función es “int”, ya que la función retornara un valor entero, los parámetros de entrada son “int a” y “int b”, esto quiere decir que la función recibe dos valores de tipo entero, finalmente el return, indica que se devolverá el valor de c, vale decir, la suma de a y b, a la función principal.

EJERCICIO:
Cree funciones de calculadora(sumar, restar, dividir y multiplicar), luego pídale al usuario que le entregue dos números  y entréguele los resultados de todas las operaciones
`
}

export default clase3;
