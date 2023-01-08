export function alterarSegundos(tempoDecorrido,tempo) {
    tempoDecorrido.innerHTML = tempo.length > 1 ? `00:${tempo}` : `00:0${tempo}` 
}

export function alterarTempo(tempoDecorrido, segundos, minutos) {
    let minutosAlterar = minutos.toString().length == 1 && !0 ? minutos = `0${minutos}` : minutos = `${minutos}`
    let segundosAlterar = segundos.toString().length == 1 ? segundos = `0${segundos}` : segundos = `${segundos}`
    tempoDecorrido.innerHTML = `${minutosAlterar}:${segundos}`
}

export function retornaSegundosMinutosTotais(musica, tipo) {
    if (tipo === 'total') {
        let tempoTotal = (musica.duration / 60).toString()
        let minutosTotais = parseInt(tempoTotal.split('.')[0])
        let segundosTotais = tempoTotal.split('.')[1].slice(0, 2)
        segundosTotais = parseInt((parseInt(segundosTotais) * 60).toString().slice(0, 2))

        return [minutosTotais, segundosTotais]
    }

    else if (tipo === 'c') {
        let tempoTotalDecorrido = musica.currentTime
        let minutos = Math.trunc(tempoTotalDecorrido / 60)
        let segundos = (tempoTotalDecorrido / 60).toString().split('.')[1].slice(0, 2)
        segundos = Math.trunc(Number.parseFloat(`0.${segundos}`) * 60)

        return [segundos, minutos]

    }
    


}