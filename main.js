
//synchronous/asynchronous code/callback function
console .log("1. order placed");
setTimeout(() => {
    console .log("2. the pizza is ready");
}, 3000);
console .log("3. serve drink to another tables");

//example of promise/await
const cookPizza = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve("2.the pizza is ready with the promotion");
    }, 3000);
});
const promotiontopromote = async () => { console.log("1. order placed");
     const result = await cookPizza(); 
     console.log(result); console.log("3. serve drink to another tables"); };
setTimeout(() => { promotiontopromote();
}, 4000);