const express = require('express');
const ejs = require('ejs')

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/contact', (req,res)=>{
    res.render('contact')
})

app.get('/pricing', (req,res)=>{
    res.render('pricing')
})

app.get('/services', (req,res)=>{
    res.render('services')
})

app.get('/teashop', (req,res)=>{
    res.render('teashop')
})

app.get('/about', (req,res)=>{
    res.render('about')
})

app.get('/testimonies', (req,res)=>{
    res.render('testimonies')
})


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  