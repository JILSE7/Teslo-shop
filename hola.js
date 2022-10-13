
const transaction = (fee, balance, amount) => {
    console.log(fee, balance, amount);
    return balance + amount - fee;
}


const curry = (fn, ...args) => {
    return (..._arg) => {
        console.log(..._arg);
        return fn(...args, ..._arg)
    }
}

const freeTransaction = curry(transaction, 50);

const hola = freeTransaction(10, 90)
console.log(hola);