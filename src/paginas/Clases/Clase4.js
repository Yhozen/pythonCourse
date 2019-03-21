const clase4 = {
  title: 'Clase 4: ',
  n: 4,
  tags: ['busqueda', 'lineal', 'binaria'],
  brief: `En este clase aprenderás como buscar un elemento dentro de un conjunto`,
  text: `Busqueda Lineal  → La búsqueda lineal permite encontrar elementos dentro de un conjunto. Este tipo de búsqueda consiste básicamente en buscar un elemento de manera secuencial. Entonces vamos preguntando si el elemento que buscamos es igual al primero, al segundo, al tercero… (Así hasta encontrar el número que buscamos)

Busqueda Binaria  la búsqueda binaria permite encontrar elementos dentro de un conjunto previamente ordenado
Este algoritmo reduce el tiempo de búsqueda considerablemente, ya que disminuye exponencialmente el número de iteraciones necesarias.
Para implementar este algoritmo se compara el elemento a buscar con un elemento cualquiera del conjunto (generalmente es el elemento central); si el valor de éste es mayor que el del elemento buscado se repite el procedimiento desde el inicio de éste hasta el elemento, en caso contrario se toma la parte del conjunto que va desde el elemento tomado hasta el final. De esta manera obtenemos intervalos cada vez más pequeños, hasta que se obtenga un intervalo indivisible. Si el elemento no se encuentra dentro de este último entonces se deduce que el elemento buscado no se encuentra en todo el conjunto.

EJERCICIO:
1. Escribe el código de un programa que cree arreglo de 100 números enteros
generados de manera aleatoria.
Pista: Para esto ocupa rand()%N
Esto te entrega valores aleatorias de 0 a n-1
Ej: int x= rand()%10;
Este te entregara valores del 0 al 9.)
y luego crea una variable con un nuemero.
 Si el número se encuentra en el arreglo, se debe indicar su posición. Sino se encuentra, se
debe desplegar un mensaje con esta información.
2. Escribe el código de un programa que usa búsqueda binaria para buscar un número
en un arreglo de números ordenados.`
}

export default clase4
