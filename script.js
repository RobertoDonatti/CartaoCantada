function run(){
    var botaoNao = document.getElementById("nao")

    var largurajanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = largurajanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatrorioY = Math.floor(Math.random()* maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatrorioY + "px";
}

function play() {
    var audio = new Audio('audio/Careless.mp3');
    
    audio.play();
}