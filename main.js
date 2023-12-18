document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('.form form');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const n1 = parseInt(document.getElementById('numeroum').value);
        const n2 = parseInt(document.getElementById('numerodois').value);

        const mensagemPositiva = document.querySelector('.msg-positiva');
        const mensagemNegativa = document.querySelector('.msg-negativa');
        const mensagemExibir= document.querySelector(".msg");

        if (n1 > n2) {
            mensagemPositiva.style.display = 'block';
            mensagemNegativa.style.display = 'none';
            

        } else {
            mensagemPositiva.style.display = 'none';
            mensagemNegativa.style.display = 'block';
            
        }
    });
});