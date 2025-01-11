//program to print the reverse of a num
let number =54321;
let rem ;
let rev =0;
while(number >0){
    rem =number%10;
    number = Math.floor(number/10);
    rev =rev*10+rem;
}

console.log("reversed number is :",rev);
