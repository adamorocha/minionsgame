function moverImagens() {
    var imagens = document.getElementsByClassName('frutaAnimada');
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    for (var i = 0; i < imagens.length; i++) {
        var imagem = imagens[i];
        var x = Math.floor(Math.random() * (windowWidth - imagem.width));
        var y = Math.floor(Math.random() * (windowHeight - imagem.height));

        // Verifica se a imagem ultrapassa os limites da tela e ajusta a posição
        if (x < 0) {
            x = 0;
        } else if (x + imagem.width > windowWidth) {
            x = windowWidth - imagem.width;
        }

        if (y < 0) {
            y = 0;
        } else if (y + imagem.height > windowHeight) {
            y = windowHeight - imagem.height;
        }

        anime({
            targets: imagem,
            translateX: x,
            translateY: y,
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    }
}

        setInterval(moverImagens, 1500); // Movimenta as imagens a cada 2 segundos

        // Inclua a biblioteca Anime.js no seu projeto para utilizar a função anime()
        // Contruido com Auxilio do CHATGPT