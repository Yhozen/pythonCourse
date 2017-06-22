const clase5 = {
  title: 'Clase 5: ',
  tags: ['swap', 'algoritmo', 'ordenamiento', 'sort'],
  brief:`Aprenderás a ordenar conjuntos
  de datos en un arreglo usando cambio de posición`,
  text: `Tema 1: SWAP

Swap → Permite hacer intercambio de variables
Para hacer un intercambio, no se hace directamente entre las dos variables, sino que necesitamos de una variable auxiliar, para explicar como funciona lo haremos a través de un ejemplo
Ejemplo: Para pasar de 34, 15   ---->  15, 34
 Int x = 34;
Int y = 15;
Int aux = 0;
 aux = x;  →  //asignamos el valor que tiene x, en este caso 34 a la variable aux.
 x=y;  → // asignamos el valor de la variable y, en este caso 15 a la variable x.
y=aux; → // asignamos el valor que guarda aux en la variable y.

Tema 2: Algortimos de ordenamiento (parte 1)
Selection Sort → Este es un algoritmo que permite ordenar los elementos de un conjunto. Selection Sort busca el menor número del conjunto y lo intercambia con el primero, quedando el número menor en un “lista ordenada” y el resto en una “desordenada”, luego vuelve a buscar el menor número de la lista desordenada y lo intercambia con el primer número de esa misma lista y este nuevo número que es menor queda en la lista ordenada, y así sucesivamente.
Ejemplo: Sea el conjunto {15, 1, 8, 6, 12}
Busca el menor, en este caso es el 1, lo cambia con el primer número,  y queda el 1 en una lista ordenada  → {1, 15, 8, 6, 12}
Vuelve a buscar el menor entre la lista desordenada y lo intercambia con el primer número de la lista desordenada → {1,6,8,15,12}
Busca el menor de la lista desordenada, en este caso el 8, y lo ubica (coincide en este caso que esta en la misma posición) → {1,6,8,15,12}
El menor de la lista desordenada es 12, entonces lo intercambia con el 15 → {1,6,8,12,15}

Selection sort  Consiste en encontrar el menor de todos los elementos del arreglo e intercambiarlo con el que está en la primera posición. Luego el segundo mas pequeño, y así sucesivamente hasta ordenarlo todo.
Su funcionamiento se puede definir de forma general como:
Buscar el mínimo elemento entre una posición i y el final de la lista
Intercambiar el mínimo con el elemento de la posición i
Así, se puede escribir el siguiente pseudocódigo para ordenar una lista de n elementos indexados desde el 1:
void selectionsort(int * x, int n){

  int minimo=0,i,j;
  int swap;
  for(i=0 ; i<n-1 ; i++)
  {
     minimo=i;
     for(j=i+1 ; j<n ; j++)
        if (x[minimo] > x[j])
           minimo=j;
     swap=x[minimo];
     x[minimo]=x[i];
     x[i]=swap;
  }}

EJERCICIO:
Cree un arreglo de 100 nuemero y luego ordenelos de mayor a menor(imprima el resultado)
`
}

export default clase5;
