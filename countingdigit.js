//program to count number of  digits
let number  =1234567891011;
console.log("number of digits in given number N:",CountDigits(number));
function CountDigits(number){
    number = Math.abs(number);
    if(number ==0)
        return 1;

    let count = 0;
    while(number >0){
        number = Math.floor(number/10);
        count++;

    }
    return count;

}