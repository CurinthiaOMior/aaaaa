const express = require('express')
const cors = require ('cors')
const app = express()

const db = require('./db/conn')
const host = 'localhost'
const port = 3000

const funcionariocontroller = require('./controller/funcionario.controller')
const materialcontroller = require('./controller/material.controller')
const movimentocontroller = require('./controller/movimento.controller')
const obracontroller = require('./controller/obra.controller')
const authcontroller = require ('./controller/auth.controller')

const authMiddleware = require('./middleware/auth.middleware')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.post('/funcionario', funcionariocontroller.cadastrar)
app.post('/login', authcontroller.login)

app.use(authMiddleware)

app.post('/material', materialcontroller.cadastrar)
app.post('/movimento', movimentocontroller.cadastrar)
app.post('/obra', obracontroller.cadastrar)

app.listen(port, host, ()=>{
    console.log(`http://${host}:${port}`)
})
