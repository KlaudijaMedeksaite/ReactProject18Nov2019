const express = require('express')
const app = express()
const port = 4000

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

const mongoDB = 'mongodb+srv://admin:admin@cluster0-ovc2j.mongodb.net/projectDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title:String,
    rating:String,
    cover:String,
    review:String
});
const bookModel = mongoose.model('books', bookSchema);


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

app.get('/whatever', (req,res) => {
    res.send('whatever');
})
app.get('/api/books/:id',(req,res)=>{
    console.log(req.params.id);

    bookModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

app.get('/api/books',(req,res) =>{
    bookModel.find((error, data) => {
        res.json({books:data});
    })
})
   
app.listen(port, () => console.log('app listening on port ' + port));

app.delete('/api/books/:id', (req, res)=>{
    console.log(req.params.id);
    bookModel.deleteOne({_id: req.params.id}, 
        (error, data)=>{
            res.json(data);
        });
});

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

app.get('/api/books/:id', (req,res)=>{
    console.log("Get: " + req.params.id);
    bookModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    });
})