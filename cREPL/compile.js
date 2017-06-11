const spawnSync = require('child_process').spawnSync

const compileNRun = () => {
  let output = ''
  const gcc = spawnSync('gcc', ['-Wall', 'main.c', '-o', 'main', '-lcs50', '-lm'])
  if (gcc.status == 0) {
    output += gcc.stdout + '\n'
    const compiled = spawnSync('./main')
    if (compiled.status == 0) {
      output += compiled.stdout + '\n'
    } else {
      output += compiled.stderr + '\n'
    }
  } else {
    output += gcc.stderr + '\n'
  }
  return output
}

module.exports = { compileNRun }
