//Write a function calculateFactorial that takes a positive integer as a parameter and returns its factorial.

function calculateFactorial(number){
    if (number == 0 || number==1 ){
        var numfactorial=1
        
    }
    else 
        numfactorial = number*calculateFactorial(number-1)

    return numfactorial;
}
console.log(calculateFactorial(5))