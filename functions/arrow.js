// #dont need to pass function like other way that we hae earnt already
let sum =(num1,num2)=>{
    return num1+num2;
}
console.log(sum(12,14));


// simple arrow function with no pramaters
let result = ()=>{
    console.log("I am arrow function without parmaters");
}
result();

// make a function that will take 3 variable as input and will return the sum of those three numbers
let addition = (a,b,c) => {
    return a+b+c;
}

console.log("Addition of these three numbres are:")
console.log(addition(12,13,14));