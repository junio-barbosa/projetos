const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionCotroller = require ('./controllers/SessionController');
const SpotController = require ('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionCotroller.store);
routes.post('/spots',upload.single('thumnail'),SpotController.store);


module.exports = routes;