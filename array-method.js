const hobbies = ["reading", "playing", "cooking"];
// for(let hobby of hobbies){
//     console.log(hobby)
// }

// hobbies.map((data) => {
//     console.log(data)
// })
// Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon].
// Transform it into ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon]
// using array maps
const array = ["apple", "oranges", " ", "mango", " ", "lemon"];
newarr = [];
array.map((arr) => {
    if(arr === " "){
        arr = 'Empty String'
    }
    newarr.push(arr)
})
console.log(newarr)