const listaDeJogos = [document.querySelector('#game-1'), document.querySelector('#game-2'), document.querySelector('#game-3')];

const listaDeBotoes = [listaDeJogos[0].querySelector('.dashboard__item__button'), listaDeJogos[1].querySelector('.dashboard__item__button'), listaDeJogos[2].querySelector('.dashboard__item__button')];
 
imagensDosJogos = [listaDeJogos[0].querySelector('div'), listaDeJogos[1].querySelector('div'), listaDeJogos[2].querySelector('div')];

// Altera o status de um botão de "Alugar" para "Devolver" ou vide-versa
function alterarStatus(indice) {
    imagensDosJogos[indice - 1].classList.toggle('dashboard__item__img--rented');

    listaDeBotoes[indice - 1].classList.toggle('dashboard__item__button--return');

    if (listaDeBotoes[indice - 1].textContent == 'Alugar') {
        listaDeBotoes[indice - 1].textContent = 'Devolver';
    } else {
        listaDeBotoes[indice - 1].textContent = 'Alugar'
    }
};
