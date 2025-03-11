function somatorioEntre (k, j) {
    if (k === j) return k;
    return k + somatorioEntre(k+1, j)
}

console.log(somatorioEntre(2, 5))