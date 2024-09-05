let med = 0, med2 = 0, med3 = 0, med4 = 0, med5 = 0, med6 = 0, op;

do {
    op = Number(prompt("QUAL OPÇÃO VOCÊ DESEJA:\n1. Candidato W\n2. Candidato X\n3. Candidato Y\n4. Candidato Z\n5. Voto em Branco\n6. Voto Nulo\nDigite a opção:"));
    
    if (op == 1) {
        med++;
    } else if (op == 2) {
        med2++;
    } else if (op == 3) {
        med3++;
    } else if (op == 4) {
        med4++;
    } else if (op == 5) {
        med5++;
    } else if (op == 6) {
        med6++;
    } else {
        alert(`Opção informada inválida!`);
    }

} while (op != 0);

let totalVotos = med + med2 + med3 + med4 + med5 + med6;
let percentualNulos = (med6 * 100) / totalVotos;
let percentualBranco = (med5 * 100) / totalVotos;

alert(`O Candidato W recebeu ${med} votos\nO Candidato X recebeu ${med2} votos\nO Candidato Y recebeu ${med3} votos\nO Candidato Z recebeu ${med4} votos\nO total de Votos em Branco foi de ${med5}\nO total de Votos Nulos foi de ${med6}\nA porcentagem de votos nulos é de ${percentualNulos}%\nA porcentagem de votos em branco é de ${percentualBranco}%\n`);
