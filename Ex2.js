function somatorio(n) {
    if (n == 0) return 0;
    return n + somatorio(n - 1)
}

console.log(somatorio(4))