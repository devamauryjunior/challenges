"use strict";
const idText = document.querySelector("#id");
const newText = document.querySelector("#new-text");
const buttonPauseOrReturn = document.querySelector("#pause-return");
const spanGoogleType = document.querySelectorAll('.material-symbols-outlined');
const startPhrase = document.querySelector('#random');
let data;

spanGoogleType.forEach(value => value.style.cursor = 'pointer');

async function getDataApi() {
  const resposta = await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
  });
  const objResposta = await resposta.json();
  return objResposta.slip;
}
const showPhraseAndId = () => {
  data = setInterval(() => {
    getDataApi()
      .then((res) => {
        idText.textContent = `Advice #${res.id}`;
        newText.textContent = `"${res.advice}"`;
        localStorage.setItem('id', res.id);
        localStorage.setItem('advice', res.advice);
      })
      .catch((err) => console.log(err));
  }, 2000);
};
const parandoFrasesEId = () => clearInterval(data);
const mudandoButton = (string) => spanGoogleType.textContent = string;


window.onload = () => {
    idText.textContent = `Advice #${localStorage.getItem('id')}`;
    newText.textContent = `"${localStorage.getItem('advice')}"`;
}
showPhraseAndId();
buttonPauseOrReturn.addEventListener('click', () => {
    parandoFrasesEId();
    mudandoButton('play_arrow');
});
startPhrase.onclick = () => {
    showPhraseAndId();
}
