export default function createIteratorObject(report) {
  // report is an object with the following structure:
  /*
  {
    allEmployees: { engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] },
    getNumberOfDepartments: [Function: getNumberOfDepartments]
  }
  */

  // Create an array of the employees in the report
  const employees = Object.values(report.allEmployees).flat();
  // console.log(employees);
  // [ 'Bob', 'Jane', 'Sylvie' ]

  return employees;
}
