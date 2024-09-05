let idade = [];
let altura = [];
let peso = [];
let mediaId = [];
let supId = [];
let porcInf = [];

// Coleta de Dados
for (let i = 0; i < 5; i++) {
    idade.push(Number(prompt(`Informe a idade: `)))
    altura.push(Number(prompt(`Informe a altura(Cm): `)))
    peso.push(Number(prompt(`Informe o peso(Kg): `)))
}

// Processamento
let md = 0;
let count = 0;
let pm = 0;
let count2 = 0;
for (let i = 0; i < 5; i++) {
    if (idade[i] > 50) {
        supId.push(idade[i]);
    } else if (idade[i] >= 10 && idade[i] <= 20) {
        md += altura[i];
        count++;
    } else if (peso[i] < 40) {
        pm += peso[i];
        count2++;
    }
}


if (count > 0) {
    mediaId.push(md / count);
}

let porcentagemPeso = (count2 / peso.length) * 100;

console.log(`Quantidade de pessoas +50: ${supId.length}\nMedia de altura entre 10 e 20 anos: ${mediaId}\nPorcentagem de peso abaixo de 40Kg: ${porcentagemPeso.toFixed(2)}%`);