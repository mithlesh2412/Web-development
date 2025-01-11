let decimalNumber = 13;
console.log(`Binary representation of ${decimalNumber} is: ${Dec2Binary(decimalNumber)}`);
function Dec2Binary(decimal) {
    let binary = '';

    while (decimal > 0) {
        binary = (decimal % 2) + binary; 
        decimal = Math.floor(decimal / 2); 
    }

    return binary || '0';
}

