// set --> estrutura de conjunto, nao indexada
// nao aceita repetição

const { time } = require("console");
const { set, compact } = require("lodash");

const times = new Set();

times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Corinthians');
times.add('Flamengo');
times.add('Vasco');

console.log(times);
console.log(times.size);
console.log(times.has('vasco')) // 'vasco' minusculo false
console.log(times.has('Vasco')) // true
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] // nao repetiu lucas, pois nao permite repetição
const nomesSet = new Set(nomes)
console.log(nomesSet)

