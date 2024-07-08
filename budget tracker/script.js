document.addEventListener('DOMContentLoaded', () => {
    const budgetForm = document.getElementById('budget-form');
    const expenseForm = document.getElementById('expense-form');
    const totalBudgetInput = document.getElementById('total-budget');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const idealPlanSection = document.getElementById('ideal-plan-section');
    const addExpenseSection = document.getElementById('add-expense-section');
    const budgetComparisonSection = document.getElementById('budget-comparison-section');
    const idealPlanTable = document.getElementById('ideal-plan');
    const comparisonList = document.getElementById('comparison-list');
    
    let idealPlan = {};
    let actualExpenses = {};

    const categories = {
        'Housing': 0.3,
        'Food': 0.2,
        'Transportation': 0.1,
        'Savings': 0.2,
        'Entertainment': 0.1,
        'Others': 0.1
    };

    budgetForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const totalBudget = parseFloat(totalBudgetInput.value);

        // Generate ideal plan
        idealPlan = {};
        for (const category in categories) {
            idealPlan[category] = totalBudget * categories[category];
        }

        displayIdealPlan();
        idealPlanSection.style.display = 'block';
        addExpenseSection.style.display = 'block';
        budgetComparisonSection.style.display = 'block';
    });

    expenseForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const expenseName = expenseNameInput.value;
        const expenseAmount = parseFloat(expenseAmountInput.value);

        if (!actualExpenses[expenseName]) {
            actualExpenses[expenseName] = 0;
        }
        actualExpenses[expenseName] += expenseAmount;

        displayComparison();
        expenseForm.reset();
    });

    function displayIdealPlan() {
        idealPlanTable.innerHTML = '';
        for (const category in idealPlan) {
            const row = document.createElement('tr');
            const categoryCell = document.createElement('td');
            categoryCell.textContent = category;
            const amountCell = document.createElement('td');
            amountCell.textContent = idealPlan[category].toFixed(2);
            row.appendChild(categoryCell);
            row.appendChild(amountCell);
            idealPlanTable.appendChild(row);
        }
    }

    function displayComparison() {
        comparisonList.innerHTML = '';
        for (const category in idealPlan) {
            const row = document.createElement('tr');

            const categoryCell = document.createElement('td');
            categoryCell.textContent = category;
            row.appendChild(categoryCell);

            const idealAmountCell = document.createElement('td');
            idealAmountCell.textContent = idealPlan[category].toFixed(2);
            row.appendChild(idealAmountCell);

            const actualAmountCell = document.createElement('td');
            actualAmountCell.textContent = (actualExpenses[category] || 0).toFixed(2);
            row.appendChild(actualAmountCell);

            const differenceCell = document.createElement('td');
            const difference = (actualExpenses[category] || 0) - idealPlan[category];
            differenceCell.textContent = difference.toFixed(2);
            row.appendChild(differenceCell);

            comparisonList.appendChild(row);
        }
    }
});
