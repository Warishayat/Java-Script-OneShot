// async function Fetchdata() {
//     let response  = await fetch("https://jsonplaceholder.typicode.com/");
//     let data = await response.text();
    
//     return data;
// }

// async function showData() {
//     let result = await Fetchdata();  // Use await to get the resolved value
//     console.log("result is here");
//     console.log(result);  // Now it will log the fetched data
// }
// showData();


// Event with rejection
async function Fetchdata() {
    let response  = await fetch("https://jr.typicode.com/");
    let data = await response.text();
    
    return data;
}

async function showData() {
    let result = await Fetchdata();  // Use await to get the resolved value
    console.log("result is here");
    console.log(result);  // Now it will log the fetched data
}
showData();