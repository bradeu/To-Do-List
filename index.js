import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;
var arr = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.render("index.ejs");
});

app.get('/submit', function (req, res) {
    res.render("index.ejs");
});

app.post('/submit', function(req, res){
    arr.push(req.body['item']);
    res.render("index.ejs", {arr: arr});
});

app.listen(port, function() {
    console.log(`server running on port ${port}`);
});

