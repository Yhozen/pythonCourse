const clase2 = {
  title: 'Clase 2: ',
  tags: ['while', 'arreglos', 'iteraciones', 'ciclos'],
  brief:`Aquí aprenderas un nuevo ciclo, en el cual su termino será definido por la condición que necesites. Además encontrarás la manera de almacenar varias variables en una`,
  text: `Tema 1:

Expresiones booleanas (TRUE o FALSE)
Una expresión booleana o expresión lógica es una expresión que vale o bien True o bien False.

Podemos asignar el valor de una variable booleana mediante un if:
bool igual;
if (a == b)
{
    igual = true;
}
else
{
    igual = false;
}
Sin embargo, todo esto podemos escribir en una sólo línea:

bool igual = a == b;

While ➔ Ocupamos esta iteración para ejecutar una acción hasta que la condición de este se haga falsa.

Por ejemplo, si queremos imprimir en la pantalla infinitamente “Hola, mundo” podemos escribir esto
Int x =1;
While (x=1){
Printf(“Hola, mundo”);}

Pero si quisiéramos escribirlo 100 veces lo podemos escribir así:
 Int cont=0;
While (cont<100){
Printf(“Hola, mundo”);
Cont++
}

EJERCICIOS
Cree un programa que le pida una contraseña al usuario, y si ingresa la contraseña correcta, se le muestre “HAZ ADIVINADO LA CONTRASEÑA”
Tema 2:

Arreglos ➔ Permiten almacenar muchos valores en una misma variable.
                   Para crear un arreglo se debe:
Definir tipo
Indicar nombre de la variable
Tamaño del arreglo

Ejemplo: int a [5];  esto indica entonces que la variable a es un arreglo de 5 espacios. Tener en cuenta que se parte desde el arreglo cero, y termina en el arreglo 4.



*Para llenar un arreglo se puede hacer de tres formas:

   -Caso 1:   int a [5] = {1,9,3,4,8};

   -Caso 2:   int a [5];
                     a[0]=1;
                     a[1]=9;
                     a[2]=3;
                     a[3]=4;
                     a[4]=8;

-Caso3: int a [5];
  for (int i=0; i<5; i ++){
 scanf("%i", a[i]);  
}

EJERCICIO:
Cree un arreglo con las notas de un alumno y luego calcule su promedio.
`
}

export default clase2;
