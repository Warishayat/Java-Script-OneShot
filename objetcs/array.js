// #first define the array

let arr = [1,2,3,4,"waris","software-ENGINEERING",{CHANNEL:"gOOGLE",ENGINE:"V8"}];

for (let i=1;i<10;i++){
    console.log(arr[i]);
}
console.log();
console.log(typeof(arr));

arr.push(5);
arr.push("ak47");
arr.push("openai");
arr.push("deepseek");

console.log(arr);
console.log();
console.log(arr.sort());
console.log(arr.toString());