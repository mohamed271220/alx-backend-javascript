import createEmployeesObject from "./11-createEmployeesObject";
import createReportObject from './12-createReportObject';
import createIteratorObject from './100-createIteratorObject';
import iterateThroughObject from './101-iterateThroughObject';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
// console.log(report);

const reportWithIterator = createIteratorObject(report);
// console.log(reportWithIterator);


console.log(iterateThroughObject(reportWithIterator));