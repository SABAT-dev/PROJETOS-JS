var nome = window.prompt("Qual é o seu nome?");

document.writeln(`Olá, ${nome}! Bem vindo ao exercício 04.`);
document.writeln(`Seu nome possui, ${nome.length} letras.`);
document.writeln(`em maiúsculo fica, ${nome.toUpperCase()}.`);
document.writeln(`em minúsculo fica, ${nome.toLowerCase()}.`);