//part 1
var filterFord = arr => {
    return arr.name === "ford";
}
const arr = [
    {"name":"chevy", "count": 2},
    {"name":"ford", "count": 5},
    {"name":"acura", "count": 3},
    {"name":"honda", "count": 16},
]

const newArr = arr.filter(filterFord);
console.log(arr);
console.log(newArr);

//part 2
const students = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

const addNewStudent = [...students, ...newStudents];

console.log(students);
console.log(addNewStudent);