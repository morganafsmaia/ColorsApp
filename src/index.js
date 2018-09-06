// Create a Node.js application that has one route that reads in
// the colors.json file.
// • It should then send this data to a Pug template.
// • The template should list each of the colors, and the color
// listed should be in the color of the hexValue value.
// • hint: use <style: color=red>, except splice in the hex
// value from the server.

const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen('4005',()=>{console.log('Hey, I am here in 4005.')});

app.get('/', (req,res)=>{
    fs.readFile('./src/colors.json',(err, data)=>{
        if (err){
            throw err;
        }
        var colors = JSON.parse(data).colorsArray;
        res.render('index', {colors: colors});
        })

});
