import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
    }

    private middlewares (): void{
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database ():void{
      mongoose.connect('mongoDbUrl/YourDbName', {
        useNewUrlParser: true
      })
    }

    private routes (): void{
      this.express.get('/', (req, res) => {
        return res.send('Hello World')
      })
    }
}