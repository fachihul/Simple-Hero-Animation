var a = 10, b = 20;
console.log('Before swap: Value of a:' + a + ' and Value of b:' + b); 

function swap(a, b) {
    console.log('Before swap inside function: Value of a:' + a + ' and Value of b:' + b);  
    var temp = a;
    a = b;
    b = temp;
    console.log('After swap inside function: Value of a:' + a + ' and Value of b:' + b);  
}
swap(a, b);
console.log('After swap: Value of a:' + a + ' and Value of b:' + b); 
