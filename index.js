const horas = document.getElementById("horas")
const minu = document.getElementById("minutos")
const seg = document.getElementById("segundos")
const tempos = document.getElementById("tempos")


const Tempo = setInterval(function time(){
    let Agora = new Date()
    let H = Agora.getHours()
    let M = Agora.getMinutes()
    let S = Agora.getSeconds()

    let T = Agora.toLocaleDateString()

    if(H < 10) H = '0' + H
    if(M < 10) M = '0' + M
    if(S < 10) S = '0' + S

    horas.textContent = H 
    minu.textContent = M
    seg.textContent = S
    tempos.textContent = T
})
