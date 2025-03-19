var Leonardo = window.document.getElementById('leonardo')
var Samantha = window.document.getElementById('samantha')
var Bruna = window.document.getElementById('bruna')
var setaEsquerda = window.document.getElementById('seta-esquerda')
var setaDireita = window.document.getElementById('seta-direita')

function RolarParaDireita(){
    Bruna.style = "display: none"
    Samantha.style = "display: flex"
    setaEsquerda.style = "display: flex"
    setaDireita.style = "display: none"
}

function RolarParaEsquerda(){
    Bruna.style = "display: flex"
    Samantha.style = "display: none"
    setaEsquerda.style = "display: none"
    setaDireita.style = "display: flex"
}