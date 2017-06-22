const clase7 = {
  title: 'Clase 7: ',
  n: 7,
  tags: ['recursion', 'funciones'],
  brief:`Aqui aprenderás funciones recursivas`,
  text: `-Recursión → La recursión es cuando una función se llama así misma.
 La recursión cuenta con:
 1) CASO BASE: Condición de término.
2) CASO REPETITIVO: Involucra volver a utilizar la función original, con parámetros que se acercan más al caso base.
Uno de los ejemplos más clásicos es el factorial de un número. Intenta seguir la explicación razonando cada paso. Para cualquier entero positivo N, el factorial de N (expresado como N!) es el producto de todos los enteros menor a él:

1! = 1
2! = 1 x 2 = 2
3! = 1 x 2 x 3 = 6
4! = 1 x 2 x 3 x 4 = 24
Observaciones:
-Se puede ver que el factorial de cada número incluye el factorial de todos los números anteriores a él
- Para cualquier entero N mayor a 1, podemos decir que el factorial de N es igual al factorial del número anterior a N multiplicado por N. La fórmula N! = (N-1)! x N.
-Entonces se podría decir que una buena técnica es encontrar el factor en el resultado que se repite.

EJERCICIOS:
1.Programe un algoritmo recursivo que permita sumar los elementos de un vector.
2.Programe un algoritmo recursivo que permita multiplicar los elementos de un vector
`
}

export default clase7;
