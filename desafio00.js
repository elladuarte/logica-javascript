// Programa que calcula o desconto aplicado e o valor final do produto

const precoProduto = 250.00;
const desconto = 20;
const descontoDecimal = (desconto / 100);
const porcentagemValor = (precoProduto * descontoDecimal);
const precoFinalProduto = (precoProduto - porcentagemValor);

console.log(precoFinalProduto); 