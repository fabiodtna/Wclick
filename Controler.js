const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res)=>{
    res.send('Meu server esta rodando');
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Serve OK');
});