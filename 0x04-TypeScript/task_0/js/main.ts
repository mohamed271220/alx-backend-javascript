interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.body as HTMLBodyElement;
const table: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = document.createElement("thead");
const headerRow: HTMLTableRowElement = document.createElement("tr");
const headers: string[] = ["First Name", "Location"];

headers.forEach((headerText) => {
  const header: HTMLTableCellElement = document.createElement("th");
  header.textContent = headerText;
  headerRow.appendChild(header);
});
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

const tableBody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  const locationCell: HTMLTableCellElement = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
body.appendChild(table);
