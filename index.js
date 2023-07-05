
// 1. Install dependencies
// Run `npm install` in your project directory to install the necessary dependencies.

// 2. Create a file called `helpers.js` and add the following code:
// This file will contain the implementation of the required functions.

// updateEmployeeWithKeyAndValue() function

let employee = {
  name:'Sam',
};
// updateEmployeeWithKeyAndValue() function
function updateEmployeeWithKeyAndValue(employee, key, value) {
  employee.name = "Sam";
  console.log(employee);
  employee = { ...employee, [key]: value };
  console.log(employee);
  return employee;
}
updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')

// destructivelyUpdateEmployeeWithKeyAndValue() function
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  console.log(employee);
  return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')
// function updateEmployeeWithKeyAndValue(employee, key, value) {
//   // employee.name = 'Sam';
//   // emmployee = { ...employee, [key]: value };
//   employee[key] = value;
//   return employee;
//   const newEmployee = { ...employee };
//   newEmployee[key] = value;

//   // var newObj = Object.assign({}, employee, { [key]: value });
//   console.log(newEmployee);
//   // return employee;
// }
// updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')

// // destructivelyUpdateEmployeeWithKeyAndValue() function
// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//   employee.name = 'Sam';
//   const newEmployee = { ...employee };
//   newEmployee[key] = value;
//   // return newEmployee;
//   console.log(newEmployee);
//   // const employee = {...employee}
//   // console.log(employee.streetAddress);
//   // employee[key] = value;
//   // console.log(employee.name);
//   // console.log(employee.name);
//   // console.log(employee);
//   return newEmployee;
// }



// deleteFromEmployeeByKey() function
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = Object.assign({}, employee); //{ ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// destructivelyDeleteFromEmployeeByKey() function
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

module.exports = {
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey
};

// destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')
