"use strict";
const form = document.querySelector("#form");
const cep = document.querySelector("#valor-cep");

async function cepDates(cepValue) {
  const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json`, {
    method: "GET",
    mode: "cors", // da licença, posso entrar na sua casa
    cache: "default",
  });
  const cep = await response.json();
  return cep;
}

const validateValueInput = (valueCep) => {
  // isNaN - false - somente numero
  // isNaN - true  - não é numero
  if (valueCep.length !== 8 || isNaN(valueCep) !== false) {
    alert("Digite um cep válido");
    return -1;
  }
  return 0;
};

const estadosDoCep = (state) => {
  const estados = {
    AC: "Acre",
    AL: "Alagoas",
    AP: "Amapá",
    AM: "Amazonas",
    BA: "Bahia",
    CE: "Ceará",
    DF: "Distrito Federal",
    ES: "Espírito Santo",
    GO: "Goiás",
    MA: "Maranhão",
    MT: "Mato Grosso",
    MS: "Mato Grosso do Sul",
    MG: "Minas Gerais",
    PA: "Pará",
    PB: "Paraíba",
    PR: "Paraná",
    PE: "Pernambuco",
    PI: "Piauí",
    RJ: "Rio de Janeiro",
    RN: "Rio Grande do Norte",
    RS: "Rio Grande do Sul",
    RO: "Rondônia",
    RR: "Roraima",
    SC: "Santa Catarina",
    SP: "São Paulo",
    SE: "Sergipe",
    TO: "Tocantins",
  };
  return estados[state];
};

const showDates = (response) => {
  // for(let campo in response) console.log(campo);
  const cidade = document.querySelector("#cidade");
  const cepDaCidade = document.querySelector("#cep");
  const ddd = document.querySelector("#ddd");
  const ufDaCidade = document.querySelector("#uf");
  cidade.textContent = "Cidade: " + response.localidade;
  cepDaCidade.textContent = "CEP: " + response.cep;
  ddd.textContent = "DD: " + response.ddd;
  ufDaCidade.textContent = "UF: " + estadosDoCep(response.uf);
};

const getDatesForCep = (valor) => {
  const data = cepDates(valor);
  try {
    data.then((response) => {
      showDates(response);
    });
  } catch (error) {
    alert(error);
  }
};

const start = () => {
    const valorDoCep = cep.value.replace("-", "");
    if (validateValueInput(valorDoCep) !== -1) {
      getDatesForCep(valorDoCep);
    }
}

cep.onclick = () => (cep.value = "");
form.onkeyup = (event) => {
    event.preventDefault();
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  start()
});
