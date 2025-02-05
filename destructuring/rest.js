// spread opertors

let arr1 = [1,2,3,4,5];
let arr2 = [...arr1];


console.log("arr2"+arr2);
console.log("arr1"+arr1);


// rest operators
function nothingtodo(...arr1){
    return arr1;
}

result = nothingtodo(...arr1);
console.log(result);