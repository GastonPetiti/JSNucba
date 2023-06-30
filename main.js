//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const verificarPar= (num)=>{
    if(num % 2 ===0){
        console.log(`${num} es par`)
    } else{
        console.log(`${num} no es par`)
    }

}

verificarPar(4)
//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
const verificarMayor = (num1, num2)=>{
    if(num1 > num2){
        console.log(`${num1} es mayor a ${num2}`)
    } else{
        console.log(`${num1} no es mayor a ${num2}`)
    }
}
verificarMayor(7,3)
//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const multiploDeCinco = (num)=>{
    if(num % 5 ===0){
        console.log(`${num} es multiplo de 5`)
    } else{
        console.log(`${num} no es multiplo de 5`)
    }
}
multiploDeCinco(29)
//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
const mostrarNumeros=(num) =>{
    for (let i = 0; i <= num; i++){
        console.log(i)
    }
}
mostrarNumeros(10)

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

const mostrarString = (str, num) =>{
    for(let i = 0; i < num; i++){
        console.log(str)
    }
}

mostrarString('zaraza', 7)

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let array = [1,2,3,4,5,6,7,8,9,10];

const mostrarValoresArray= (arr) =>{
    arr.forEach((num) => {
        console.log(num)
    });
}

mostrarValoresArray(array)

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const sacandoQuintaPosicion = (arr) =>{
    for(let i =0; i < arr.length; i++){
        if(i !== 5){
            console.log(arr[i])
        }
    }
}

sacandoQuintaPosicion(array)

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const multiplicarArrayPorNum = (arr, num) =>{
  for (let i = 1; i <= arr.length ; i++){
    console.log( i * num)
  }
}

multiplicarArrayPorNum (array, 2)