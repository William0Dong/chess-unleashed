const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const mysql = require('mysql2')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res)=>{
res.send("Welcome to your server")
})

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
})

let config = require('./database.js');
let con = mysql.createConnection(config)

app.post('/board1save', (req, res) =>{
    let sql = 'UPDATE BoardPos SET ? WHERE id = 1'
    console.log(req.body.fen);
    let row = {
      name: req.body.name,
      fen: req.body.fen
    }
    con.query(sql, row, (err, res) =>{
      if(err) throw err;
      console.log("BOARD1 Name and Fen Changed");
    })
})

app.post('/board2save', (req, res) =>{
  let sql = 'UPDATE BoardPos SET ? WHERE id = 2'
  console.log(req.body.fen);
  let row = {
    name: req.body.name,
    fen: req.body.fen
  }
  con.query(sql, row, (err, res) =>{
    if(err) throw err;
    console.log("BOARD2 Name and Fen Changed");
  })

})

app.post('/board3save', (req, res) =>{
  let sql = 'UPDATE BoardPos SET ? WHERE id = 3'
  console.log(req.body.fen);
  let row = {
    name: req.body.name,
    fen: req.body.fen
  }
  con.query(sql, row, (err, res) =>{
    if(err) throw err;
    console.log("BOARD3 Name and Fen Changed");
  })

})

app.get('/board1load', (req, res) => {
  let sql = 'SELECT fen FROM BoardPos WHERE id = 1'
  con.query(sql, function(err, query){
    res.send(query[0].fen)
})
})

app.get('/board2load', (req, res) => {
  let sql = 'SELECT fen FROM BoardPos WHERE id = 2'
  con.query(sql, function(err, query){
    res.send(query[0].fen)
})
})

app.get('/board3load', (req, res) => {
  let sql = 'SELECT fen FROM BoardPos WHERE id = 3'
  con.query(sql, function(err, query){
    res.send(query[0].fen)
})
})
