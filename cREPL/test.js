const fetch = require('node-fetch')

fetch('http://localhost:8000')
  .then(res => res.json())
  .then(console.log)
