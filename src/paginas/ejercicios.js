const Ejercicios = {
  title: 'Ejercicios y desafios',
  text: `EJERCICIOS
  1.- Cree un programa que permita hacer la división por restas sucesivas, utilizando recursividad.

  2.- Programe un algoritmo que permita dar vuelta un numero, utilizando recursión. Ejemplo sea el numero de entrada 123, el numero de salida debe ser 321.

  3. Cree un programa que permita calcular la multiplicación, utilizando recursión.

  4. Cree un programa que te diga si la palabra es palindroma o no.

  5. Implemente	un programa de 3 alumnos guardar nombre, nombre de la asignatura y 4 notas. Calcular y mostrar el promedio y la suma de las notas.

  6. Escribe el código de la función busca_max() que retorna la posición del elemento del arreglo numeros[] con el máximo valor entre las posiciones inicio y final (inclusive).

  7. Cree un programa que te indique si el numero es par o impar

  8. Cree un programa que indique si el numero es primo o no

  9. Cree variables de 5 nombres, luego muéstrale la ultima letra de cada uno de ellos y finalmente muéstrale los nombres dados vuelta.

  10. Escribe el código de la función intercambia_3() que intercambia los valores de 3 posiciones de un arreglo, que ha sido declarado como variable global en el programa. La función no tiene valor de retorno y toma como parámetros de entrada las 3 posiciones cuyos valores se intercambian. Si los nombres de los parámetros de entrada son pos1, pos2 y pos3, entonces la función escribe el contenido de pos3 en pos1, el de pos1 en pos2 y el de pos2 en pos3.

  DESAFÍO:
  Cree un programa que entregue el numero identificar del rut .
  Para eso debes :
  tomar los numero del rut, sin contar el digito verificador
  Dar vuelta esos números
  Tome los numero y vaya multiplicando cada uno de ellos por la siguiente serie de numero : 2,3,4,5,6,7… en ese orden.Si se le acaban los números de la serie, vuelva a usarla desde el principio
  Una vez que haya multiplicado cada uno de los números, sume los resultados obtenidos
  Divida el numero obtenido por 11 y obtenga el resto
  Al numero 11 restele el resto de la división anterior
  Ahora hay que analizar el numero obtenido:
        Hay tres posibilidades:
  Si el numero obtenido es 1, 2,3, 4,5,6,7,8 o 9 ese es el digito verificador
  Si el numero obtenido es 11, el digito verificador es cero.
  Si el numero obtenido es 10, el digito verificador es k.`
}

export default Ejercicios
