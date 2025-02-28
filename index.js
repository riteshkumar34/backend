require('dotenv').config()
const express = require('express')
const app = express()

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('Chai aur Code')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

