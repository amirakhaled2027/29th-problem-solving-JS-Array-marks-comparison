//Return students who have marks less than 80 and age more than 27

let students = [
    { name: "Lisa", age: 26, mark: 100},
    { name: "Jiso", age: 30, mark: 70},
    { name: "Jennie", age: 27, mark: 90},
    { name: "Rose", age: 28, mark: 60},
];

let highAge = students.filter((student) => student.mark < 80 && student.age >27);
console.log(highAge);