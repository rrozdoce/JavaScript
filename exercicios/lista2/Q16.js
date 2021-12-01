const bissexto = ano => {
   return new Date(ano, 1, 29).getDate() === 29;
}

console.log(bissexto(2020))
console.log(bissexto(2100))