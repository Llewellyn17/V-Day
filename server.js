const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const fs = require ('fs')

const app = express();
const port = '3000';


app.use(bodyParser.urlencoded({ extended: false}));




app.post('/scores', (req, res) => {
    let name = req.body.name;
    let score = req.body.score;
    let item = {"name":name, "score":score};
    fs.appendFileSync(dataPath,
        JSON.stringify(item, null, 4), 'utf-8', err => console.log(err));
        res.redirect('/');

});


app.use(express.static(path.join(__dirname,'looks')));

app.listen(port,function(){
});
