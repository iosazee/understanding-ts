const person = {
    name: "Sam",
    age: 29,
    hobbies: ['hiking', 'coding']
}

console.log(person);

let favouriteActivities: string[];
favouriteActivities = ['reading'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}