const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express()
const port = 3000

app.use(express.static('public'))
app.get("/public/folders", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Beach", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Beach"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Bird", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Bird"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Butterfly", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Butterfly"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Cake", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Cake"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Cat", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Cat"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Christmas", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Christmas"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Cloud", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Cloud"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Cookies", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Cookies"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Dog", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Dog"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Field", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Field"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Fire", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Fire"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Flower", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Flower"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Flower_field", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Flower field"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Forest", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Forest"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Fruit", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Fruit"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Ice_Cream", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Ice Cream"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Juice", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Juice"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Lake", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Lake"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Leaf", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Leaf"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Mountain", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Mountain"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Rain", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Rain"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Sea_Life", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Sea Life"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Snow", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Snow"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Star", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Star"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Sun", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Sun"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Tree", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Tree"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Walkway", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Walkway"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Waterfall", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Waterfall"), (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          res.send(JSON.stringify(files))
        } 
      }) 
})

app.get("/public/folder/Wild_Life", function (req, res) {
    fs.readdir(path.join(__dirname, "/public/picture/Wild Life"), (err, files) => { 
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