const clase6 = {
  title: 'Clase 6: ',
  tags: ['bubble', 'sort', 'merge', 'ordenamiento'],
  brief:`Esta clase es la continuación de la clase 5, por lo que seguiremos aprendiendo a ordenar conjuntos`,
  text: `ALGORITMOS DE ORDENAMIENTO (parte 2)

Bubble Sort → Es un algoritmo usado para ordenar una secuencia de números
Sea el conjunto {5,9,3,1,2,8,4,7,6}
-En este caso compara el 7 y el 6, si el número de la derecha es menor que el de la izquierda, entonces los números se intercambian (swap)
 → {5,9,3,1,2,8,4,6,7}
-Una vez terminado este intercambio, se avanza una posición a la izquierda, y compara de nuevo e intercambia si  se cumple que el de la derecha sea menor, en el ejemplo comparara los números 4 y 6, y como el 6 no es menor que 4, se mantiene
 → {5,9,3,1,2,8,4,6,7}
-Se avanza una posición a la izquierda y compara de nuevo, ahora entre el 4 y 8, en caso que se cumpla que el número de la derecha sea menor, los intercambia
→ {5,9,3,1,2,4,8,6,7}
- Se seguirá comparando hasta que se alcanza el extremo izquierdo, cuando el menor número del conjunto llega a la primera posición, se “fija”, quedando en una lista ordenada                                  →  {1,5,9,3,2,4,8,6,7}
- Una vez que se fijó el valor, se devuelve al extremo  derecho y comienza a comparar de nuevo, en el ejemplo comparara el 6 y el 7, y como el 7 no es menor que 6, el orden queda igual. Luego avanzara y tomara el 8 y el 6, para compararlos, como se cumple que el 6 es menor que 8, hará un swap y los intercambiara → {1,5,9,3,2,4,6,8,7}.
- Cuando llegue a comparar el 2 con el 3, los intercambiara, luego el 2 con el 9 también y finalmente el 2 con el 5 serán intercambiados de igual manera. Entonces quedara el 2 en la lista ordenada → {1,2,5,9,3,4,6,8,7}
 -Seguirá  así sucesivamente, avanzando, comparando e intercambiando en los casos necesarios hasta que quede todo ordenado.
Merge sort 
Es un algoritmo de ordenamiento que funciona si inicialmente tenemos la lista desordenada, y la dividimos a la mitad, nos quedaremos con 2 sub-listas desordenadas, entonces, realizamos otra vez la misma acción: dividimos las sub-listas resultantes en 4 nuevas sub-listas, y así sucesivamente.

Esta operación se realizará hasta que lleguemos a una sub-lista con 1 o 0 elementos en ella, que por defecto va a estar ordenada, y como dicha sub-lista ya está ordenada, la mezclamos con la de al lado, que está ordenada también, y así continuamente vamos ordenando las sub-listas hacia arriba para llegar al caso base.`
}

export default clase6;
