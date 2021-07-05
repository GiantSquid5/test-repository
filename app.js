const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World From GitHub! Updated but this time we push!'))
// go into folder on the server(test-repository) and do git pull
//edits inside of the git repository on the server whould be collected using git pull

//sourcetree can collect updates from git using the pull button when accessing the repository from local (as long as it connected and hasnt been moved)

app.listen(3000, () => console.log('App listening for connections'))

console.log("Does this work?");
