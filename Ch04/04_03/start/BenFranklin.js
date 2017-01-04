/*var events = require('events');

var emisorEventos = new events.EventEmitter();

emisorEventos.on('miEvento', function (message, status) {
    console.log(`${status}: ${message}`);
});

emisorEventos.emit('miEvento', 'Hola Mi evento.', 200);*/

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

var josemy = new Person("Josemy");

josemy.on('habla', function(haDicho) {
    console.log(`${this.name} dice que ${haDicho}`);
});

josemy.emit('habla', 'Que está pasando aqui');