

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "New York"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 23,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tableHead = document.createElement("tr");

const header1 = document.createElement("th");
header1.textContent = "First Name";
const header2 = document.createElement("th");
header2.textContent = "Location";

tableHead.appendChild(header1);
tableHead.appendChild(header2);
table.appendChild(tableHead);

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
