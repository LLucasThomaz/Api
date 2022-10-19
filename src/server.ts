import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import router from './routes'


const app = express()
app.use(express.json())
app.use(router)

mongoose.connect('mongodb+srv://llucasthomaz:lindolindo92@cluster0.qxvfnpw.mongodb.net/?retryWrites=true&w=majority')

.then((data)=>{
    console.log('Conectou!')
})

.catch((err)=>{
    console.log('Deu ruim' ,err.message)
})




app.listen(5500, () => console.log('Testando servidor na porta 5500'))