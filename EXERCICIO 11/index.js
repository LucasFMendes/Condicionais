const rendaMensalEmCentavos = 150000;


const mesesDecorridos = 12;


const totalJaPagoPeloAluno = 1000000;

const valorDoCurso = 180000;
let valorDaParcela;


if (rendaMensalEmCentavos < 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} else {
    valorDaParcela = rendaMensalEmCentavos * valorDoCurso / 100;

   
    if (valorDaParcela === 0) {
        console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o aluno não precisa pagar nada.");
    } else {
        console.log("O valor da parcela desse mês é R$", valorDaParcela / 100, "reais.");
    }
}
