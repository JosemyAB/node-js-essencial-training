var Person = require('./lib/Person');

var ben = new Person("Ben Franklin");
var josemy = new Person("Josmey");

ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});

josemy.on('speak', function(said) {
	console.log(`${this.name} -> ${said}`);
});


ben.emit('speak', "You may delay, but time will not.");
josemy.emit('speak', 'hola que ase');
