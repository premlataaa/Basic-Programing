
let checkPrime = function(num){
 for(let i=2;i<=num-1;i++){
    if (num%i==0){
        return false
    }
 }
 return true

}
console.log(checkPrime(8));

// This is for testing
let evenOdd = function(num){
    for (let  i = 1;i<=num;i++){
        if(i%2==0){
            return true
        }else{
            return false
        }
    }
    
}

console.log(evenOdd(3))