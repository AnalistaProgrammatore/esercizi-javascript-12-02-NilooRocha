/**
* Scrivere qui il codice della funzione fattoriale(n)
**/
const fatorial = function(n){
    for(let x = n-1; x>=1; x--){
        n = n * x
    }    
    return n
}
let result = fatorial(4)
console.log(result)