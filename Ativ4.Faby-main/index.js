// //Questão 1
// const number = parseInt(prompt("Digite um número inteiro: "));

// if (number > 0) {
//     console.log(`${number} é um número positivo.`);
// }
// else if (number < 0) {
//     console.log(`${number} é um número negativo.`);
// } else {
//     console.log(`${number} é igual a zero.`);
// }

// //Questão 2
// const idade = parseInt(prompt("Digite sua idade: "));

// if (idade >= 18) {
//     console.log(`A pessoa tem ${idade} anos e é maior de idade.`);
// } else {
//     console.log(`A pessoa tem ${idade} anos e é menor de idade.`);
// }

//Questão 3
// const numero1 = parseInt(prompt("Digite o primeiro número: "));
// const numero2 = parseInt(prompt("Digite o segundo número: "));

// if (numero1 > numero2) {
//     console.log(`O número ${numero1} é maior que o número ${numero2}.`);
// } else if (numero2 > numero1) {
//     console.log(`O número ${numero2} é maior que o número ${numero1}.`);
// } else {
//     console.log(`Os números ${numero1} e ${numero2} são iguais.`);
// }
// //Questão 4
// const numero = parseInt(prompt("Digite um número inteiro: "));

// if (numero % 2 === 0) {
//     console.log(`${numero} é um número par.`);
// } else {
//     console.log(`${numero} é um número ímpar.`);
// }
//Questão 5
// const nota1 = parseFloat(prompt("Digite a primeira nota: "));
// const nota2 = parseFloat(prompt("Digite a segunda nota: "));
// const nota3 = parseFloat(prompt("Digite a terceira nota: "));

// const media = (nota1 + nota2 + nota3) / 3;

            
//     if (media >= 7) {
//         console.log(`Com média ${media.toFixed(2)}, o aluno está APROVADO.`);
//     } else {
//         console.log(`Com média ${media.toFixed(2)}, o aluno está REPROVADO.`);
//             };
    
//Questão 6
// const tamanhoNome1 = nome1.length(prompt("Digite o primeiro nome: "));
// const tamanhoNome2 = nome2.length(prompt("Digite o segundo nome: "));

// if (tamanhoNome1 > tamanhoNome2) {
//     console.log(`O nome "${nome1}" possui mais caracteres do que o nome "${nome2}".`);
// } else if (tamanhoNome2 > tamanhoNome1) {
//     console.log(`O nome "${nome2}" possui mais caracteres do que o nome "${nome1}".`);
// } else {
//     console.log(`Os nomes "${nome1}" e "${nome2}" têm o mesmo número de caracteres.`);
// }

//Questão 7


//Questão 8
// let numeros: number[] = [a, b, c];

// const numero1 = parseFloat(prompt("Digite o primeiro número: "));
// const numero2 = parseFloat(prompt("Digite o segundo número: "));
// const numero3 = parseFloat(prompt("Digite o terceiro número: "));

// const numerosOrdenados = ordenarNumeros(numero1, numero2, numero3);

// console.log(`Os números em ordem crescente são: ${numerosOrdenados[0]}, ${numerosOrdenados[1]}, ${numerosOrdenados[2]}`);

//Questão 9
// const peso = parsefloat(prompt("Dgite seu peso: ")); 
// const altura = parsefloat("Digite sua altura: "); 

// const imc = calcularIMC(peso, altura) * 2;
// const categoria = categoriaIMC(imc);


// console.log(`IMC: ${imc.toFixed(2)}`);
// console.log(`Categoria: ${categoria}`);

// // if (imc < 18.5) {
//     console.log(`Abaixo do peso`); 
// } else if (imc < 25) {
//     console.log(`Peso normal`);
// } else if (imc < 30) {
//     console.log(`sobrepeso`);
// } else if (imc < 35) {
//     console.log(`Obesidade (Grau I)`); 
// } else if (imc < 40) {
//     console.log(`Obesidade Severa (Grau II)`); 
// } else {
//     console.log(`ObesidadeMórbida (Grau III)`); 
// }

//Questão 10

//const numeroMes = parseInt(prompt("Digite o numero correspondente ao mês:"));
//const nomeMes = obterNomeMes(numeroMes);

// console.log(`O mês correspondente ao número ${numeroMes} é ${nomeMes}.`);

//function obterNomeMes (numeroMes: number): string 
// switch (numeroMes) {
//     case 1:
//         return 'Janeiro';
//     case 2:
//         return 'Fevereiro';
//     case 3:
//         return 'Março';
//     case 4:
//         return 'Abril';
//     case 5:
//         return 'Maio';
//     case 6:
//         return 'Junho';
//     case 7:
//         return 'Julho';
//     case 8:
//         return 'Agosto';
//     case 9:
//         return 'Setembro';
//     case 10:
//         return 'Outubro';
//     case 11:
//         return 'Novembro';
//     case 12:
//         return 'Dezembro';
//     default:
//         return 'Mês inválido';
//   }
// }

//Questão 11

// const salarioAtual = parseFloat(prompt(Digite seu salário atual: 2000; 
// const aumento = 10%
// const novoSalario = salarioAtual + aumento;

// calcularAumentoSalario(salarioAtual: number): number {
//     if (salarioAtual > 1500) {
//         return salarioAtual * 0.1; // 10% de aumento
//     } else {
//         return salarioAtual * 0.15; // 15% de aumento
//     }
// }

// console.log(`O aumento salarial é de R$ ${aumento.toFixed(2)}.`);
// console.log(`O novo salário será de R$ ${novoSalario.toFixed(2)}.`);

//Questão 12
// function verificarDivisibilidade(numero: number): boolean {
// // Verifica se o número é divisível por 3 e por 5 ao mesmo tempo
//     const numero % 3 === 0 && numero % 5 === 0;
// }
// let numero = number: Boolean(prompt("Digite um número: "));

// if (verificarDivisibilidade(numero)) {
//     console.log(`O número ${numero} é divisível por 3 e por 5 ao mesmo tempo.`);
// } else {
//     console.log(`O número ${numero} não é divisível por 3 e por 5 ao mesmo tempo.`);
// }

// //Questão 13
// function verificarDiaUtil(dia: string): string {
    
//     const diaLowerCase = dia.toLowerCase();
//     const diaInformado = prompt("Digite um dia da semana: ");
//     const tipoDia = verificarDiaUtil(diaInformado);
    
//     console.log(`O dia ${diaInformado} é ${tipoDia}.`);
    
//     switch (diaLowerCase) {
//         case 'segunda-feira':
//         case 'terça-feira':
//         case 'quarta-feira':
//         case 'quinta-feira':
//         case 'sexta-feira':
//             return 'Dia útil';
//         case 'sábado':
//         case 'domingo':
//             return 'Fim de semana';
//         default:
//             return 'Dia inválido'; 
//     }
// }

//Questão 14
// function avaliarDesempenho(nota: number): string {

//     const numero = prompt("Digite um número: ")
//     const mensagem = avaliarDesempenho(numero);
    
//     switch (nota) {
//         case 5:
//             return "Muito bom";
//         case 4:
//             return "Bom";
//         case 3:
//             return "Regular";
//         case 2:
//             return "Insuficiente";
//         case 1:
//             return "Muito insuficiente";
//         default:
//             return "Valor inválido"; 
//     }
//     console.log(`Para a nota ${numero}, a avaliação é: ${mensagem}.`);
// }

//Questão 15
// const numeroDia = prompt("Digite um número entre 1 e 7: ");
// const diaSemana = obterDiaSemana(numeroDia);

// function obterDiaSemana(numero: number): string {
//     switch (numero) {
//         case 1:
//             return 'Domingo';
//         case 2:
//             return 'Segunda-feira';
//         case 3:
//             return 'Terça-feira';
//         case 4:
//             return 'Quarta-feira';
//         case 5:
//             return 'Quinta-feira';
//         case 6:
//             return 'Sexta-feira';
//         case 7:
//             return 'Sábado';
//         default:
//             return 'Número inválido'; 
//     }
//     console.log(`Para o número ${numeroDia}, o dia da semana é: ${diaSemana}.`);
// }

//Questão 16


//Questão 17
// const idade = prompt("Digite sua idade: ");
// const faixaEtaria = verificarFaixaEtaria(idade);

// function verificarFaixaEtaria(idade: number): string {
//     if (idade >= 0 && idade <= 1) {
//         return 'Bebê';
//     } else if (idade > 1 && idade <= 12) {
//         return 'Criança';
//     } else if (idade > 12 && idade <= 18) {
//         return 'Adolescente';
//     } else if (idade > 18) {
//         return 'Adulto';
//     } else {
//         return 'Idade inválida'; 
//     }
//     console.log(`Para a idade de ${idade} anos, a pessoa é classificada como: ${faixaEtaria}.`);
// }

//Questão 18
