import { DataService } from "./dataService";
export async function addDataRows() {
    //instantiate the object
    const dataS = new DataService();
    await dataS.fetchData();
    const rowData = dataS.getData();
    let x;
    for (x = 0; x < 1; x++) {
        rowData.forEach(createRow);
    }
}
function createRow(rowData) {
    const table = document.getElementById('rows');
    //create new row
    const newRow = table.insertRow(0);
    //5 cells for each row
    const cell0 = newRow.insertCell(0);
    const cell1 = newRow.insertCell(1);
    const cell2 = newRow.insertCell(2);
    const cell3 = newRow.insertCell(3);
    const cell4 = newRow.insertCell(4);
    const cell5 = newRow.insertCell(5);
    //put each element of the object into the cells
    cell0.innerHTML = rowData.name.first;
    cell1.innerHTML = rowData.gender;
    cell2.innerHTML = rowData.location.street.number + " " + rowData.location.street.name + " " +
        rowData.location.city + ", " + rowData.location.state + " ";
    cell3.innerHTML = rowData.dob.age;
    cell4.innerHTML = rowData.phone;
    const img = document.createElement("img");
    img.src = rowData.picture.large;
    cell5.appendChild(img);
}
