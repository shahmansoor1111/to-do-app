// Store employees in an array
let employees = [];

function addEmployee() {
  // Get values
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let salary = document.getElementById("salary").value;

  if (name && age && salary) {
    // Add to array
    employees.push({ name, age, salary });

    // Update table
    displayEmployees();

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("salary").value = "";
  } else {
    alert("Please fill all fields!");
  }
}

function displayEmployees() {
  let tableBody = document.querySelector("#employeeTable tbody");
  tableBody.innerHTML = ""; // Clear old rows

  employees.forEach(emp => {
    let row = `<tr>
                 <td>${emp.name}</td>
                 <td>${emp.age}</td>
                 <td>${emp.salary}</td>
               </tr>`;
    tableBody.innerHTML += row;
  });
}
