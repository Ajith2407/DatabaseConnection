const express =require('express'); //like us a framework of nodejs 
const mysql=require('mysql');//database connectivity
const app=express();//to call as a varibale name app
const dotenv=require('dotenv');//password security purpose use this dependency
const path=require('path');  //already install path dependency in node js
const hbs=require('hbs');    //this is a  javascript template engine.



//this call us dotenv function 
dotenv.config({
    path:'./.env',
});

const db =mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,

});

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("MySql connected Successfully");
    }
});


  



//current directory shows

console.log(__dirname);

const location=path.join(__dirname, "./public");
app.use(express.static(location));

//case-sensitive hbs within " "
app.set("view engine", "hbs");


const partialspath=path.join(__dirname,"./views/partials");
hbs.registerPartials(partialspath);



app.use("/", require("./routes/pages")(db));

  
app.listen(5000, () => {
    console.log('server is Online portNo http://localhost:5000');
});


