import express from 'express';
import {PORT , mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';

const app = express();

app.use(express.json())
app.get('/' , (req , res)=>{
    console.log('req'.req);
    res.status(201).send('welcome to book store')
})

app.use('/books' , booksRoute)

mongoose.connect(mongoDBURL).then(()=>{
    console.log('App connected to database');
    app.listen(PORT ,()=>{
        console.log(`running at port : ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})