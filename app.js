const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World From GitHub! Updated but This time through push!'))
// go into folder(test-repository) and do git pull

app.listen(3000, () => console.log('App listening for connections'))

console.log("Does this work?");
