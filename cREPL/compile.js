const { spawnSync } = require('child_process')
const { writeFileSync, unlinkSync } = require('fs')



const compileNRun = (file, text) => {
  writeFileSync(`/tmp/${file}.c`,  text)
  let output = ''
  const gcc = spawnSync('gcc', ['-Wall', `/tmp/${file}.c`, '-o', `/tmp/${file}`, '-lcs50', '-lm'])
  if (gcc.status == 0) {
    output += gcc.stdout + '\n'
    const compiled = spawnSync(`/tmp/${file}`)
    if (compiled.status == 0) {
      output += compiled.stdout + '\n'
    } else {
      output += compiled.stderr + '\n'
    }
  } else {
    output += gcc.stderr + '\n'
  }
  unlinkSync(`/tmp/${file}.c`)
  unlinkSync(`/tmp/${file}`)
  return output
}

module.exports = { compileNRun }
