'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CharlaSchema = Schema({
    nombreCharla:String,
	descripcion: String,
    comunicador: String,
    salon: String,
    numeroAsiento:Number,
    hora:Date,
    fecha: Date,
    capacidad: Number,
    image: String,
    ocupados: [{type: Schema.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Conferencia', CharlaSchema);