const imagem = document.querySelector('#imagem');
const onLight = document.querySelector('#on');
const offLight = document.querySelector('#off');
const title = document.querySelector('h2');
function ligar() {
    imagem.setAttribute('src', './img/ligada.jpg');
    document.body.style.backgroundColor = 'white';
    title.style.color = "black";
}
function desligar() {
    imagem.setAttribute('src', './img/desligada.jpg');
    document.body.style.backgroundColor = 'black';
    title.style.color = "white";
}
function quebrou() {
    imagem.setAttribute('src', './img/quebrada.jpg');
    document.body.style.backgroundColor = 'black';
    title.style.color = "white";
}

document.body.style.backgroundColor = 'black';
onLight.addEventListener('click', ligar);
offLight.addEventListener('click', desligar);
imagem.addEventListener('mouseover', ligar);
imagem.addEventListener('mouseleave', desligar);
imagem.addEventListener('dblclick', quebrou);