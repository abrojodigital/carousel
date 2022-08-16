function loopDePares (n) {
  let pares = '';
  for (let i = 0; i < n; i++) {
    pares += `${i * 2} `;
  }
  return pares;
}

console.log(loopDePares(5));