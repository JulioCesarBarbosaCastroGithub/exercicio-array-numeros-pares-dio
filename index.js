let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for(let i = 0; i < numeros.length; i++){

    if(numeros[i] % 2 === 0){
        console.log(i);
    }else{
        console.log("Não é um número par");
    };

};