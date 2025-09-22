
let employees = [];

function addEmployee() {

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let salary = document.getElementById("salary").value;

  if (name && age && salary) {
    
    employees.push({ name, age, salary });

    displayEmployees();

    
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("salary").value = "";
  } else {
    alert("Please fill all the fields!");
  }
}

function displayEmployees() {
  let tableBody = document.querySelector("#employeeTable tbody");
  tableBody.innerHTML = ""; 

  employees.forEach(emp => {
    let row = `<tr>
                 <td>${emp.name}</td>
                 <td>${emp.age}</td>
                 <td>${emp.salary}</td>
               </tr>`;
    tableBody.innerHTML += row;
  });
}
