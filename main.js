import { gerarNumeroAleatorio, verificarAcerto } from './game.js';
import { solicitarPalpite, mostrarMensagem, mostrarTentativa } from './ui.js';

const numeroDeTentativas = 5;

function iniciarJogo() {
  const numero = gerarNumeroAleatorio();
  mostrarMensagem("O Jogo vai começar");

  for (let i = 0; i < numeroDeTentativas; i++) {
    let palpite = parseInt(solicitarPalpite(), 10);
    if (verificarAcerto(numero, palpite)) {
      mostrarMensagem("Parabéns! Você ganhou!");
      break;
    } else if (numero < palpite) {
      mostrarMensagem("tente um palpite menor");
    } else {
      mostrarMensagem("tente um palpite maior");
    }
    mostrarTentativa(i + 1, numeroDeTentativas);
  }

  mostrarMensagem(`Fim do jogo! O número era ${numero}.`);
}


window.iniciarJogo = iniciarJogo;