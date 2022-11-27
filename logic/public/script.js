var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}
function readFormData() {
    var formData = {};
    formData["EmployeeName"] = document.getElementById("EmployeeName").value;
    formData["EmployeeID"] = document.getElementById("EmployeeID").value;
    formData["EmployeeMobile"] = document.getElementById("EmployeeMobile").value;
    formData["EmployeeAddress"] = document.getElementById("EmployeeAddress").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.EmployeeName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.EmployeeID;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.EmployeeMobile;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.EmployeeAddress;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("EmployeeName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("EmployeeID").value = selectedRow.cells[1].innerHTML;
    document.getElementById("EmployeeMobile").value = selectedRow.cells[2].innerHTML;
    document.getElementById("EmployeeAddress").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.EmployeeName;
    selectedRow.cells[1].innerHTML = formData.EmployeeID;
    selectedRow.cells[2].innerHTML = formData.EmployeeMobile;
    selectedRow.cells[3].innerHTML = formData.EmployeeAddress;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}
function resetForm() {
    document.getElementById("EmployeeName").value = '';
    document.getElementById("EmployeeID").value = '';
    document.getElementById("EmployeeMobile").value = '';
    document.getElementById("EmployeeAddress").value = '';
    selectedRow = null;
}
