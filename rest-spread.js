const hobbies = ["reading", "playing", "cooking"];
//Rest
// const copyofhobbies = [...hobbies]
// console.log(copyofhobbies)

//Spread
const newarr = (...args) => {
    return(console.log(args))
}

newarr(...hobbies)//destructuring