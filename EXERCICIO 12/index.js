const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

const diaDaSemana = 3;

if (diaDaSemana >= 1 && diaDaSemana <= 7) {
    if (diaDaSemana === 3) {
        console.log("Quarta-feira");
    } else {
        console.log(diasDaSemana[diaDaSemana]);
    }
} else {
    console.log("O dia da semana informado não é válido.");
}

const diaDeSemana = 10;

if (diaDeSemana >= 1 && diaDeSemana <= 7) {
    console.log("O dia da semana é válido.");
} else {
    console.log("O dia da semana informado não é válido.");
}
