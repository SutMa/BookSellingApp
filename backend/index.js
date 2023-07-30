import express from "express"
import mysql2 from "mysql2"
const app = express()
app.use(express.json())


const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "bedrock2019",
  database: "test"
})

app.get("/", (req,res)=>{
  res.json("Hello this is the backend")
})

app.get("/books", (req, res) =>{
  const q = 'SELECT * FROM books'
  db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.post('/books', (req,res)=>{
  const q = 'INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)'
  const values = ['title from backend', 'desc from backend', 'cover form backend']
  db.query(q,[values], (err,data) =>{
    if(err) return res.json(err)
    return res.json('book has been created')
  })
})





app.listen(8800, ()=>{
  console.log('server is running')
})