const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const { compileNRun } = require('./compile')

const port = (process.env.PORT || 8000)

app.set('json spaces', 2)

app.listen(port, () => {
  console.log('We are live on ' + port);
})

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  next()
 })

app.post('/', function (req, res) {
  res.json(compileNRun(req.body.file, req.body.code))
})

// #include <stdio.h>
// #include <cs50.h>
//
// int fibonacci(int n) {
//   if (n==0 || n ==1) {
//     return n;
//   } else {
//     return fibonacci(n-1)+fibonacci(n-2);
//   }
// }
//
// int main() {
//   printf("Hello world!\n");
//   printf("Numeros!\n");
//   int a = 2;
//   printf("a es %i\n", a);
//   int b = 3;
//   printf("b es %i\n", b);
//   int c = 31;
//   printf("c es %i\n", fibonacci(c));
//   return 0;
// }
