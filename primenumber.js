//Code to Print Prime Numbers up to n
let n = 20; 
printPrimes(n);
function printPrimes(n){
    console.log("prime numbers upto n :");
    for(i=2; i<=n; i++){
        let isprime =true;

        for(j=2; j<=Math.sqrt(i);  j++){
            if(i%j ==0){
                isprime = false;
                break;

            }
        }
        if(isprime){
            console.log(i);
        }
    }
}