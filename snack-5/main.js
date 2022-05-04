const list = [];

for (let i = 0; i < 6; i++) {
    let number = Number(prompt("inserisci un numero"));
     if ((number % 2) == 1) {
         list.push(number)
     };
};

console.log(list)
