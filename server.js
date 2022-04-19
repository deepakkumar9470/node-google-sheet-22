require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const cors = require('cors')
const sheetData = require('./sheetData.json')
const apiRoute = require('./routes/api')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:  true}))

app.use('/api', apiRoute)



app.get('/', (req,res)=>{
    let result = JSON.parse(JSON.stringify(sheetData))
    console.log(result)
    res.send(result)

});

app.listen(PORT, ()=>{
    console.log(`Server started at port http://localhost:${PORT}`)
});