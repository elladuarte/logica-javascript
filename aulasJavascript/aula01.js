function quadrado(valor){
      return valor * valor;
}

const quadradoDez = quadrado(10);
console.log((quadradoDez) + quadrado(10));

function incrementarJuros(valor, percentualJuros){
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}

console.log(incrementarJuros(100,10))