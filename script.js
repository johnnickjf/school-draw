document.getElementById("sortearBtn").addEventListener("click", sortear);

function sortear() {
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const display = document.getElementById("display");

  if (isNaN(quantidade) || quantidade < 1) {
    alert("Informe uma quantidade válida.");
    return;
  }

  const numeros = Array.from({ length: quantidade }, (_, i) => i + 1);

  let tempoPassado = 0;
  const duracao = 5000;
  const intervaloTempo = 100;

  const intervalo = setInterval(() => {
    const aleatorio = numeros[Math.floor(Math.random() * numeros.length)];
    display.textContent = aleatorio;
    tempoPassado += intervaloTempo;

    if (tempoPassado >= duracao) {
      clearInterval(intervalo);
      const escolhido = numeros[Math.floor(Math.random() * numeros.length)];
      display.textContent = `🎉 ${escolhido} 🎉`;
    }
  }, intervaloTempo);
}
