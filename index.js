function ContarPalavras(texto) {
  const palavras = texto
    .trim()
    .toLowerCase()
    .split(" ")
    .filter(p => p !== "");

  const contador = {};

  for (let palavra of palavras) {
    contador[palavra] = (contador[palavra] || 0) + 1;
  }

  console.log(`Total de palavras: ${palavras.length}\n`);

  for (let palavra in contador) {
    console.log(`${palavra} → ${contador[palavra]} vez(es)`);
  }
}

export default ContarPalavras;