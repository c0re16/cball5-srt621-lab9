
var express = require('express');
const path = require('path');
const app = express();
app.set('views',path.join(__dirname+"/serve_html","views"));
app.set('view engine', 'ejs');

const port = 3000;
app.use(express.static('serve_html/views'));

app.use(express.static('serve_html/public/css'));
app.use(express.static('serve_html/public/images'));
// app.get('/',(req,res) => {
// 	res.render('index.html')
// });

app.get("/",( req, res) => {
	res.sendfile('./serve_html/views/index.html')
});
app.get("/home",( req, res) => {
	res.sendfile('./serve_html/views/index.html')
});
app.get('/images/:num',(req,res) => {
	let number = req.params.num.replace(':','');
	res.render('pic', {number: number});
});

app.use(function(req,res) {
	res.status(404);
	res.sendfile('serve_html/views/notfound.html');
});

app.listen(port, () => console.log('listening on port 3000'));
