const express = require('express')
const app = express()
const port = 4000 //port for api

const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//mongo server website
const mongoDB = 'mongodb+srv://admin:admin@cluster0-ovc2j.mongodb.net/projectDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true});

//schema of books for Mongo
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title:String,
    rating:String,
    cover:String,
    review:String
});
const bookModel = mongoose.model('books', bookSchema);

//server listening on port 4000 for server use
app.listen(port, () => console.log('app listening on port ' + port));

//finds all books
app.get('/api/books',(req,res) =>{
    bookModel.find((error, data) => {
        res.json({books:data});
    })
})

//finds book by id
app.get('/api/books/:id', (req,res)=>{
    console.log("Get: " + req.params.id);
    bookModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    });
})

//used in edit to update book by id
app.put('/api/books/:id', (req,res)=>{
    console.log("Edit: " + req.params.id);
    console.log(req.body);
    bookModel.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true},
        (error,data)=>{
            res.json(data);
        })
})
//creates a new book and posts to server
app.post('/api/books', (req,res)=>{
    console.log(req.body);
    
    bookModel.create({
        title:req.body.title,
        rating:req.body.rating,
        cover:req.body.cover,
        review:req.body.review
    })
    
    res.json('Data uploaded');
});


//delete the book by id 
app.delete('/api/books/:id', (req, res)=>{
    console.log(req.params.id);
    bookModel.deleteOne({_id: req.params.id}, 
        (error, data)=>{
            res.json(data);
        });
});