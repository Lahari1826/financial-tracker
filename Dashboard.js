import React from "react";

function Dashboard({ accounts, transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <section>
      <h2>Dashboard</h2>
      <div className="dashboard-cards">
        <div className="card">
          Total Balance: <b>${totalBalance}</b>
        </div>
        <div className="card">
          Total Income: <b>${totalIncome}</b>
        </div>
        <div className="card">
          Total Expenses: <b>${totalExpense}</b>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;