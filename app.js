const cors = require("cors")
const express = require("express")
const mysql = require("mysql")
const app = express()

const port = 3000

app.use(cors())

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    passworld:"",
    database:"1pro"
})

con.connect(function(err){
    if(err) console.log(err)
    console.log("Poloczono")
})

app.get("/select",function(req,res){
    const spl = "SELECT*FROM jeden"
    con.querry(sql,function(err,result,fields){
        if(err) console.log(err)
        res.send(result)
    })
})

app.get("/add/:imie/:nazwisko/:klasa",function(req,res){
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko 
    const klasa = req.params.klasa

    const sql = `INSERT INTO jeden (imie,nazwisko,klasa) VALUES ('${imie}','${nazwisko}','${klasa}')`
    con.query(sql, function(err,result,fields){
        if(err){
            console.log(err)
            res.send("nie dodano")
        } else res.send("dodano")
    })
})

app.get("/", function(req,res){
    res.send("ok")
})

app.listen(3000)