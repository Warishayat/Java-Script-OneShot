function greeting(name){
   console.log("Welcoe to thsi page:"+name);
}

function processInput(callback){
    var name =prompt("Enter the name");


    callback(name);
}

processInput(greeting);