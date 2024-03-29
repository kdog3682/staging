class Person {
    // Properties
    name: string 
    age: number

    // Constructor
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    toString() {
        return this.name + ' says hi'
    }

}

// Create an instance of Person
const person1 = new Person("Alice", 30)
console.log(`${person1}`)
