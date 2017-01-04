var process = require('process');

var preguntas = [
    "Cual es tu nombre?",
    "Cual es tu hobby?",
    "Cual es tu edad?"
];

var respuestas = [];

function responder(i) {
    process.stdout.write(`\n\n\n ${preguntas[i]} `);
    process.stdout.write(" > ");
};

process.stdin.on('data', function(data) {
    respuestas.push(data.toString().trim());

    if (respuestas.length < preguntas.length) {
        responder(respuestas.length);
    }
    else{
        process.exit();
    }
});

process.on('exit', function() {
    process.stdout.write("\n\n\n");

    process.stdout.write(`Ves ${respuestas[1]} ${respuestas[0]} con ${respuestas[2]} años`);

    process.stdout.write("\n\n\n");
});


responder(0);