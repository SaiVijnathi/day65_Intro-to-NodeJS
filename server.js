import {studentData, students} from './students.js';

studentData();
console.log("-------------");

for (let student of students) {
  console.log(`Name: ${student.name}, Age: ${student.age}, Mother's Name: ${student.motherName}, Father's Name: ${student.fatherName}`);  
  console.log("-------------");
}
