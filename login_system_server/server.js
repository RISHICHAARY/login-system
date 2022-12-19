const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Rishi",
        database: "ww_users", 
    }
);

app.listen(3001, () => {
    console.log("Server - ON");
})

app.post("/create", (req,res) =>{
    
    const Firstname = req.body.Firstname;
    const Lastname = req.body.Lastname;
    const Gender = req.body.Gender;
    const Age = req.body.Age;
    const DOB = req.body.DOB;
    const Email = req.body.Email;
    const Mobile = req.body.Mobile;
    const Password = req.body.Password;

    db.query("insert into users (first_name,last_name,gender,age,dob,email,mobile_no,password) values(?,?,?,?,?,?,?,?)" , 
        [Firstname , Lastname , Gender, Age , DOB , Email , Mobile , Password] ,
        (err,result) =>{
            if (err){
                console.log(err);
            }else{
                res.send("Success");
            }
        });
});