const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express()
const port = 3000

app.use('/static', express.static('public'))
app.get("/public/folders", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get('/folder/:folderNamer/', function (req, res) {
    fs.readdir(path.join(__dirname, '/public/picture/' + req.params.folderNamer), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})