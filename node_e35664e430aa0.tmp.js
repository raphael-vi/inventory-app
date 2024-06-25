const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('Connect to MongoDB sucessfully');

    
    })
    .catch(err =>{
        console.error('Error connecting to MongoDB: ', err);

    });


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})






