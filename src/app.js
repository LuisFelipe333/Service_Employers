const express = require('express');
const morgan = require('morgan');
const app = express();

//Puerto
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev')); //Permite ver por la consola lo que nos llega al server
app.use(express.urlencoded({extended: false})); //Entender datos del formulario
app.use(express.json());

//rutas
app.use('/employers', require('./routes/employers'));

//Inicio
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});