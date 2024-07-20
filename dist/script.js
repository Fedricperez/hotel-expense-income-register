document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const category = document.getElementById('category').value;
    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const remarks = document.getElementById('remarks').value;
    const date = new Date().toLocaleString();

    addEntryToTable(category, type, amount, remarks, date);
    updateTotals(type, amount);
    resetForm();
});

function addEntryToTable(category, type, amount, remarks, date) {
    const table = document.getElementById('registerTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    cell2.textContent = type === 'income' ? amount : '';
    cell3.textContent = type === 'expense' ? amount : '';
    cell4.textContent = remarks;
    cell5.textContent = date;
}

function updateTotals(type, amount) {
    const totalIncomeCell = document.getElementById('totalIncome');
    const totalExpenseCell = document.getElementById('totalExpense');
    const totalProfitCell = document.getElementById('totalProfit');

    let totalIncome = parseFloat(totalIncomeCell.textContent);
    let totalExpense = parseFloat(totalExpenseCell.textContent);
    let totalProfit = parseFloat(totalProfitCell.textContent);

    if (type === 'income') {
        totalIncome += amount;
        totalIncomeCell.textContent = totalIncome.toFixed(2);
    } else {
        totalExpense += amount;
        totalExpenseCell.textContent = totalExpense.toFixed(2);
    }

    totalProfit = totalIncome - totalExpense;
    totalProfitCell.textContent = totalProfit.toFixed(2);
}

function resetForm() {
    document.getElementById('registerForm').reset();
}