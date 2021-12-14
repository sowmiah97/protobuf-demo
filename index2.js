const fs = require('fs');
const protobuffSchema = require('./employees_pb');
const Sergio = new protobuffSchema.Employee();
Sergio.setId(1);
Sergio.setSalary(1000);
Sergio.setName("Sergio");

const Alicia = new protobuffSchema.Employee();
Alicia.setId(2);
Alicia.setSalary(5000);
Alicia.setName("Alicia");

const Sierra = new protobuffSchema.Employee();
Sierra.setId(3);
Sierra.setSalary(5000);
Sierra.setName("Sierra");

const employeesArray = new protobuffSchema.EmployeeArray();
employeesArray.addIndividual(Sergio);
employeesArray.addIndividual(Alicia);
employeesArray.addIndividual(Sierra);

const bytes = employeesArray.serializeBinary();
console.log("bytes" + bytes);
fs.writeFileSync("protobuffbinary ", bytes);

const deserialisedEmployeesArray = protobuffSchema.EmployeeArray.deserializeBinary(bytes);
console.log("deserialized " + deserialisedEmployeesArray);

const employeeArrayString = deserialisedEmployeesArray.toString();
console.log("deserialized string " + employeeArrayString);

fs.writeFileSync("deserializedstring", employeeArrayString);

