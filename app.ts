// const person: {name: string; age: number; hobbies: string[]; role: [number, string]} = {
//     name: "Sam",
//     age: 29,
//     hobbies: ['hiking', 'coding'],
//     role: [2, 'author']
// }

// console.log(person);

// let favouriteActivities: string[];
// favouriteActivities = ['reading'];

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase())
// }

// person.role.push('admin');
// person.role[1] = 10
// person.role = [0, 'admin', 'user']

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'Sam',
    age: 29,
    hobbies: ['cooking', 'coding'],
    role: Role.AUTHOR
}

if (person.role === Role.AUTHOR) {
    console.log(person.name, 'is an author')
}

