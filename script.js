let selectedRow;

// Function Add
function addData() {

    let name = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value.trim();
    let salary = document.getElementById('salary').value.trim();
    let department = document.getElementById('department').value.trim();
    let table = document.getElementById('tableData');

    if (!name || !age || !salary || !department) {
        alert("Need to fill all the fields");
    }
    else {
        let row = table.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = age;
        row.insertCell(2).textContent = salary;
        row.insertCell(3).textContent = department;

        row.insertCell(4).innerHTML = ` <button type="submit" onclick="editData(this)">Edit</button>
    <button type="submit" onclick="deleteData(this)">Delete</button> `
        clearField();
    }

}

// Delete Row

function deleteData(button) {

    let row = button.parentElement.parentElement;
    let table = document.getElementById('tableData');
    table.deleteRow(row.rowIndex);

    clearField();

}

// Edit Row

function editData(button) {
    selectedRow = button.parentElement.parentElement;

    document.getElementById('name').value = selectedRow.cells[0].textContent;
    document.getElementById('age').value = selectedRow.cells[1].textContent;
    document.getElementById('salary').value = selectedRow.cells[2].textContent;
    document.getElementById('department').value = selectedRow.cells[3].textContent;

    let updateButton = document.getElementById('update');
    updateButton.innerHTML = `<button onclick="updateData()">Update</button> `;

}

function updateData() {

    selectedRow.cells[0].textContent = document.getElementById('name').value;
    selectedRow.cells[1].textContent = document.getElementById('age').value;
    selectedRow.cells[2].textContent = document.getElementById('salary').value;
    selectedRow.cells[3].textContent = document.getElementById('department').value;

    let updateButton = document.getElementById('update');
    updateButton.innerHTML = `<button onclick="addData()">Submit</button> `;
    clearField()
}

// Function Clear Field

function clearField() {
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('salary').value = "";
    document.getElementById('department').value = "";
}
