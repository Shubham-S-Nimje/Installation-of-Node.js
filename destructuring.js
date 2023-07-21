const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi', this.name)
    }
}
const Printnames = ({name}) => {
console.log(name)
}
Printnames(person)

const {name, age} = person
console.log(name, age)

const hobbies = ["reading", "playing", "cooking"];
const [hobby1, hobby2, hobby3] = hobbies
console.log(hobby1, hobby2, hobby3)