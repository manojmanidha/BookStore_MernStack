import express from 'express';
import {PORT , mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();
// Option1
app.use(cors()); 
// option 2
// app.use(
//     cors({
//       origin: 'http://localhost:3000',
//       methods: ['GET', 'POST', 'PUT', 'DELETE'],
//       allowedHeaders: ['Content-Type'],
//     })
//   );
  

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