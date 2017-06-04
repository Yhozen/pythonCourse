const spawn = require('child_process').spawn
const gcc = spawn('gcc', ['-Wall', 'main.c', '-o', 'main', '-lcs50', '-lm'])

gcc.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

gcc.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`)
})

gcc.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
  const child = spawn('./main')
  child.stdin.setEncoding('ascii')
  child.stdout.pipe(process.stdout)
  process.stdin.on("data", function (input) {
    child.stdin.write(input+'\n')
  })
})
