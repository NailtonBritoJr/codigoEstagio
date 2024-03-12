let a = [1, 3, 5, 7];
let proximoA = a[a.length - 1] + 2;
console.log("1 Próximo termo: 1, 3, 5, 7, [", proximoA, "]");

let b = [2, 4, 8, 16, 32, 64];
let proximoB = b[b.length - 1] * 2;
console.log("2 Próximo termo: 2, 4, 8, 16, 32, 64, [", proximoB, "]");

let c = [0, 1, 4, 9, 16, 25, 36];
let proximoC = Math.pow(c.length, 2);
console.log("3 Próximo termo: 0, 1, 4, 9, 16, 25, 36, [", proximoC, "]");

let d = [4, 16, 36, 64];
let proximoD = d[d.length - 1] * 2;
console.log("4 Próximo termo: 4, 16, 36, 64, [", proximoD, "]");

let e = [1, 1, 2, 3, 5, 8];
let proximoE = e[e.length - 2] + e[e.length - 1];
console.log("5 Próximo termo: 1, 1, 2, 3, 5, 8, [", proximoE, "]");

let f = [2, 10, 12, 16, 17, 18, 19];
let proximoF = f[f.length - 1] + 1;
console.log("6 Próximo termo: 2, 10, 12, 16, 17, 18, 19, [", proximoF, "]");
