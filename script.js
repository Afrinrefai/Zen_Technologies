let selectedRow;

function addData() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let salary = document.getElementById("salary").value;
    let department = document.getElementById("department").value;
    let table = document.getElementById("tableData");

    if (!name || !age || !salary || !department) {
        alert("Fill all the fields")
    }
    else {
        let row = table.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = age;
        row.insertCell(2).textContent = salary;
        row.insertCell(3).textContent = department;

        row.insertCell(4).innerHTML = `<button onclick="edit(this)">Edit</button>
        <button onclick="del(this)">Delete</button>`;

        clearAll();
    }
}

function edit(button){
    selectedRow = button.parentElement.parentElement;
    let btn = document.getElementById("update");

    document.getElementById("name").value=selectedRow.cells[0].textContent;
    document.getElementById("age").value=selectedRow.cells[1].textContent;
    document.getElementById("salary").value=selectedRow.cells[2].textContent;
    document.getElementById("department").value=selectedRow.cells[3].textContent;

    btn.innerHTML = `<button onclick="update()">Update</button>`;
}

function update(){
    selectedRow.cells[0].textContent = document.getElementById("name").value ;
    selectedRow.cells[1].textContent = document.getElementById("age").value ;
    selectedRow.cells[2].textContent = document.getElementById("salary").value ;
    selectedRow.cells[3].textContent = document.getElementById("department").value ;

    document.getElementById("update").innerHTML = `<button type="submit" onclick="addData()">Submit</button>`;
    clearAll();
    alert("Record Updated Successfully")

}

function del(button){
    let row = button.parentElement.parentElement;
    row.remove();
    alert("Record Deleted")
}

function clearAll(){
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("salary").value="";
    document.getElementById("department").value="";

}