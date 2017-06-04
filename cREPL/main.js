// const exec = require("child_process").exec
//
// exec("gcc -Wall main.c -o main -lcs50 -lm", (err, stdout, stderr) => {
//   stdCallback(err, stdout, stderr)
//   exec("./main", stdCallback)
// });
//
//
// function stdCallback (error, stdout, stderr) {
//   if (error) {
//     console.error(`exec error: ${error}`)
//     return
//   }
//   console.log(`stdout: ${stdout}`)
//   console.log(`stderr: ${stderr}`)
// }
const spawn = require('child_process').spawn;
const gcc = spawn('gcc', ['-Wall', 'main.c', '-o', 'main', '-lcs50', '-lm']);

gcc.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

gcc.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

gcc.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
  const child = spawn('./main')
  child.stdin.setEncoding('ascii');
  child.stdout.pipe(process.stdout)
  process.stdin.on("data", function (input) {
    child.stdin.write(input+'\n');
  });
});
