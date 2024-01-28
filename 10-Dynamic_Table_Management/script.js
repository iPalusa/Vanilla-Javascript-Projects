const tBody = document.querySelector('#table tbody');

const addRow = () => {
    const newRow = tBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = '<input type="text" class="text1" >';
    cell2.innerHTML = '<input type="text" class="text2" >';
    cell3.innerHTML = '<button class="remove-btn">&times;</button>';
    cell3.onclick = () => {
        tBody.deleteRow(newRow.rowIndex - 1);
    }
}
