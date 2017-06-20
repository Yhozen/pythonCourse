const clase10 = {
  title: 'Clase 10: ',
  tags: ['archivos'],
  brief:``,
  text: `ARCHIVOS
Lectura de archivos:
      Abrir archivo: Los archivos pueden ser abiertos para lectura, escritura o insersión. Para ello debemos especificar que queremos hacer.
	w abre un archivo para escritura. Se crea si no existe
        a  abre un archivo para escritura al final del archivo
        r  abre un archivo para lectura(el archivo debe existir
        w+  Crea un archivo para lectura y escritura
       a+  abre/crea un archivo para lectura y escritura al final del archivo
        r+  abre un archivo para lectura y escritura (el archivo debe existir)
Para crear una variable de tipo archivo debemos escribir FILE* (nombrevariable);
Para abrir el archivo ocupamos fopen:
La función fopen tiene dos argumentos. En el primero escribimos el nombre del archivo. En el segundo el tipo de apertura.
archivo = fopen ("ejemplo.txt", "r");
Es importante que después de abrir un archivo siempre debemos cerrarlo con fclose
fclose(archivo);
Leer archivos:
Para leer archivos ocupamos la función fgets, que nos permitirá leer una determinada cantidad de caracteres.
fgets(buffer, caracteres,file)
por ejemplo:
#include<stdio.h>
int main()
{
 FILE *archivo;
 char buffer[100];
 archivo = fopen("ejemplo.txt", "r");
 fgets(buffer, 12, archivo);
printf("%s",buffer);
fclose (archivo);
}
La función fscanf es casi lo mismo que scanf excepto que el primer argumento es el puntero del archivo.
fscanf(*file, format, *char)
por ejemplo:
#include<stdio.h>
int main()
{
 FILE *archivo;
 char buffer[100];
 archivo = fopen("ejemplo.txt", "r");
 fscanf(archivo, "%s",buffer);

 printf("%s",buffer);
 fclose (archivo);
}
Tambien tenemos la función feof que devuelve cero(Falso) si NO es encontrado el final del archivo, esta la podemos ocupar para poder leer el archivo completo como muestra el siguiente ejemplo:
#include<stdio.h>
int main()
{
 FILE *archivo;
 char buffer[100];
 archivo = fopen("ejemplo.txt", "r" );
 if (archivo!=NULL)
 {
 while (!feof(archivo))
{
 fscanf(archivo, "%s",buffer);
 printf("%s",buffer);
 }
fclose (archivo);
}
else
{
printf("Error: Archivo no pudo ser abierto");
}
}
Escritura de Archivos:
Para la escritura de archivos ocupamos la función fprintf que es casi lo mismo que printf excepto que el primer argumento es el puntero de archivo.
fprintf(*FILE, formato, *char)
ejemplo:
#include<stdio.h>
int main()
{
 FILE *archivo;
 char buffer[100]= "chao a todos";
 archivo = fopen("ejemplo.txt", "r+");
 fprintf(archivo,"%s", buffer);

 fclose (archivo);
}





EJERCICIOS
1.- Cree un programa que permita hacer la división por restas sucesivas, utilizando recursividad.

2.- Programe un algoritmo que permita dar vuelta un numero, utilizando recursión. Ejemplo sea el numero de entrada 123, el numero de salida debe ser 321.

3. Cree un programa que permita calcular la multiplicación, utilizando recursión.

 4. Cree un programa que te diga si la palabra es palindroma o no.
5. Implemente	un	programa	de	10	alumnos	guardar nombre,	nombre	de	la	asignatura	y	4	notas. Calcular	y	mostrar	el	promedio	y	la	suma de las	notas.
6. Escribe el código de la función busca_max() que retorna la posición del elemento del arreglo numeros[] con el máximo valor entre las posiciones inicio y final (inclusive).

7. Cree un programa que te indique si el numero es par o impar

8. Cree un programa que indique si el numero es primo o no

9.Pide al usuario que ingrese 5 nombres, luego muéstrale la ultima letra de cada uno de ellos y finalmente muéstrale los nombres dados vuelta.

10. Escribe el código de la función intercambia_3() que intercambia los valores
de 3 posiciones de un arreglo, que ha sido declarado como variable global en el
programa. La función no tiene valor de retorno y toma como parámetros de entrada las 3 posiciones cuyos valores se intercambian. Si los nombres de los parámetros de
entrada son pos1, pos2 y pos3, entonces la función escribe el contenido de pos3 en pos1, el de pos1 en pos2 y el de pos2 en pos3.

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
export default clase10;
