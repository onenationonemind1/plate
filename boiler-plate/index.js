const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.set("strictQuery", false).connect('mongodb+srv://38s_Seat:abcd@cluster.lahq0uh.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello world!~~ 안녕하세요 ~'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))