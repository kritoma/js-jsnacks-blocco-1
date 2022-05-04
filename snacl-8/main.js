const listNumber = [1,2,3,4,5,6,7];

let result = 0;

for (let i = 0; i < listNumber.length; i++) {
    if(listNumber[i] % 2 == 1) {
        result += listNumber[i];
    };
    
};

console.log(result)