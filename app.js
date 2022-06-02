let conta = Number(prompt("Digite o valor da conta: "));
let clientes = Number(prompt("Vai dividir a conta em quantos trutão?"));
let total = conta / clientes;

alert(`A vão pagar em ${clientes}, então vai ficar R$:${total} pra cada um`);
console.log("O número de clientes é tipo " + typeof clientes);
