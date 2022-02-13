const name = 'Bob';
const friend = name; //'Bob'

const user = {
    name: 'BOB',
    age:33
} //user => #345
const myFriend = user // myFriend => #345




const cloneUser = {...user, isStudent: true, friends:[]} // поверхностное клонирование или копирование
const alex = {...cloneUser, name:'Alex'}

// console.log(cloneUser)
// console.log(alex)
user.name = "Ann"

// console.log({} === {}) //false


const arr = [1,2,3,4,5,6];
const copyArr = [...arr]
// console.log(arr === copyArr) //false

const complexUser = {
    name: "John", age: 22, friends: ['Alex','Ann','Den']
}

const copyComplexUser = {...complexUser, name: 'Proxer'}

// console.log(copyComplexUser === complexUser) //false
copyComplexUser.friends.push('John');
// console.log(complexUser)
// console.log(copyComplexUser)

const deepCopyComplexUser = {...complexUser, friends: [...complexUser.friends]}
deepCopyComplexUser.friends.push('Helga')
console.log(deepCopyComplexUser)
console.log(copyComplexUser)