import createIteratorObject from "./100-createIteratorObject";

import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

// console.log(employees);


const report = createReportObject(employees);
// console.log(report);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}