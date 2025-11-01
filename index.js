const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número do WhatsApp (apenas números com DDD): ', (numero) => {
  rl.question('Digite a mensagem que deseja enviar: ', (mensagem) => {
    const textoCodificado = encodeURIComponent(mensagem);
    const link = `https://wa.me/${numero}?text=${textoCodificado}`;
    console.log('\nLink gerado:');
    console.log(link);
    rl.close();
  });
});
