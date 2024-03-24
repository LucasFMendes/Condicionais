const tipoDePagamento = "credito";
const valorDoProduto = 13000;
const desconto = 0.05;

const valorTotal = valorDoProduto - (valorDoProduto * desconto)

const valorFinal =(valorTotal / 100).toFixed(2)
console.log("R$" + valorFinal)