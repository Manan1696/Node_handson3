
const express = require("express");
const port = 3000;

const app = express();

const middleWare1 = (req,res,next) => {
    console.log("First Middleware");
    next();
    
}
const middleWare2 = (req,res,next) => {
    console.log("Second Middleware");
    next();

}


app.use(middleWare1);
app.get('/', (req,res)=>{
    res.send('Main Page');
})

app.get('/home', (req,res)=>{
    res.send('Day1 React'); 
})

app.get('/about',middleWare2, (req,res)=>{
    res.send('<h1>Day2 React</h1>');
})

app.get('/contact',middleWare2, (req,res)=>{
    res.send('<h1>Final Day</h1>');
})

app.listen(port,()=>{
    console.log('React Done');
})