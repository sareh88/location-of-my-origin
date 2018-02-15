'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const userModel = require('./models/user.model.js');

const app = express();

const db = "mongodb://localhost:27017/mapLocation";

mongoose.promise = global.Promise;
mongoose.connection.openUri(db);

const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next)=>{
    res.send('Hello');
	// res.sendFile(__dirname + '/index.html');
});

app.post('/get_student', (req, res, next)=>{
	console.log(req.body);
	const newUser = {
		email: req.body.email,
		name: req.body.name,
		city: req.body.city,
		lang: req.body.lang,
		lot: req.body.lot,
		flag: req.body.flag,
		info: req.body.info,
		image: req.body.image
	}

	userModel.findOne({email: req.body.email}, (err, user)=>{
		if(err){res.json({Erro: err});}
		if(user){
			res.json({success: false, message: 'This user is already exist...'})
		}else{
			userModel.create(newUser)
			.then(data=> res.json(data))
			.catch(err=> res.json(err))
		}
	})
});

app.use((err, req, res, next) => {
  res.send(err);
  next();
});

app.listen(port, () => {
  console.log("Server started on port....." + port);
});

