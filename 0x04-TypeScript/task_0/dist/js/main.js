var student1 = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 21,
    location: "New York"
};
var student2 = {
    firstName: "Bob",
    lastName: "Smith",
    age: 23,
    location: "London"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var tableHead = document.createElement("tr");
var header1 = document.createElement("th");
header1.textContent = "First Name";
var header2 = document.createElement("th");
header2.textContent = "Location";
tableHead.appendChild(header1);
tableHead.appendChild(header2);
table.appendChild(tableHead);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);
//# sourceMappingURL=main.js.map