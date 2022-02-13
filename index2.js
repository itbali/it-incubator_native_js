let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Bob",
        age: 23,
        isMarried: false,
        scores: 25
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// creating empty array for names
const names=[];

// array iteration
for (let i = 0; i < students.length; i++) {
    //getting names from each element of array
    const name = students[i].name
    // adding names to new array
    names[i]=name
}
// console.log(names)

// isStudent:true

//creating empty array for Students
const trueStudents = []

for (let i = 0; i < students.length; i++) {
    //getting all data from each element of array
    const trueStudent = {...students[i], isStudent: true}
    trueStudents[i]=trueStudent;
}

// console.log(trueStudents)

function myMap(arr, callback) {
    const resultArray = []
    for (let i = 0; i < arr.length; i++) {
        const newData = callback(arr[i]);
        resultArray[i] = newData;
    }

    return resultArray;
}


// console.log(myMap(students, s => s.name));
// console.log(myMap(students, s => ({...s, isStudent: true})));


// console.log(students.map(s => s.name))
// console.log(students.map(s => ({...s, isStudent: true})))

function myFilter (arr, callback){
    const resultArray = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) ===true) {
            resultArray.push(arr[i])
        }
    }

    return resultArray
}

// console.log(myFilter(students,s => s.scores >= 100))
// console.log(students.filter(s =>s.scores >= 100))

function myFind (arr,item) {
    for (let i = 0; i < arr.length; i++) {
        for (let prop in arr[i]){
            if (arr[i][prop]===item) {
                return arr[i]
            }
        }
    }
    // return underfined;
}

console.log(myFind(students,'Bob'));