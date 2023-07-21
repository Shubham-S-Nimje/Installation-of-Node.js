const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi', this.name)
    }
}
person.greet();