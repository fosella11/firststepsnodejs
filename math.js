const m = {}; 

function add(a, b){
    return a + b;
}
function substract(a, b){
    return a - b;
}
function divide(a, b){
    if(a != 0){
        return a / b;
    }
    return 0;
}
function multiply(a, b){
    return a * b;
}

m.add = add;
m.substract = substract;
m.divide = divide; 
m.multiply = multiply;

module.exports = m;