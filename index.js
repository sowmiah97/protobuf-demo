const fs= require('fs');
const employeesArray =[];
employeesArray.push({
  "Name": "Sergio",
  "id": 1001,
  "Salary": 5000
});
const emp2 = { "Name": "Alicia", "id": 1002, "Salary": 5000 };
employeesArray.push({
  "Name": "Sierra",
  "id": 1003,
  "Salary": 9000
});
employeesArray.push(emp2);
console.log(JSON.stringify(employeesArray));
fs.writeFileSync("json.js", JSON.stringify(employeesArray));