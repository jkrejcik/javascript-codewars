function makeLatinSquare(n) {
    let latinSquare = new Array(n).fill().map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            latinSquare[i][j] = (i + j) % n + 1;
        }
    }

    return latinSquare;
}

console.log(makeLatinSquare(5));
