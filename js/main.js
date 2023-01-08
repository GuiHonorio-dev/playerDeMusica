import { alterarSegundos, alterarTempo, retornaSegundosMinutosTotais } from './funcoesDeTempo.js'

const musica = new Audio('musica.mp3')
const botoesDePlay = document.querySelectorAll('#play')
const barrinhaDuracao = document.querySelectorAll('.duracao')

const tempoTotalMusica = document.querySelectorAll('.tempoTotal')
const tempoPassando = document.querySelectorAll('.tempoDecorrido')

let reproduzindo = false

botoesDePlay.forEach(play => {
    play.addEventListener('click', () => {
        if (reproduzindo) {
            musica.pause()
            play.src = './assets/play.png'
            reproduzindo = false;
        } else {
            musica.play();
            play.src = './assets/pause.png'
            reproduzindo = true;
        }   
    }); 
})

musica.onloadeddata = () => {

    let [minutosTotais, segundosTotais] = retornaSegundosMinutosTotais(musica, 'total')

    tempoTotalMusica.forEach(tempo => {
        tempo.innerHTML = minutosTotais.toString().length == 1 ? `0${minutosTotais}:${segundosTotais}` : `${minutosTotais}:${segundosTotais}`
    })
}

musica.addEventListener('timeupdate', () => {
    
    const duracaoTotal = musica.duration
    let duracaoAtual = musica.currentTime
    
    barrinhaDuracao.forEach(barrinhas => {
        barrinhas.style.width = `${((duracaoAtual.toFixed(2) / duracaoTotal.toFixed(2)) * 100)}%`
    })
    
    tempoPassando.forEach(tempoDecorrido => {
        if (musica.currentTime < 60) {
            alterarSegundos(tempoDecorrido, Math.trunc(musica.currentTime).toString())  
        } else {

            const [segundos, minutos] = retornaSegundosMinutosTotais(musica, 'durante')
            alterarTempo(tempoDecorrido, segundos, minutos)           
        }
    })
})