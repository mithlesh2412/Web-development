//program to print fizz buzz
let number =20;
for(let i =1; i<=number; i++ ){
    if(i%3 ==0){
        console.log("FIZZ");

    }else if(i%5 ==0)
    {
        console.log("BUZZ");

    }else if(i% 3==0 && i%5 ==0 ){
        console.log("FIZZBUZZ");

    }else{
        console.log(i);

    }
}