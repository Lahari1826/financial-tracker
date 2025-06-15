import React from "react";

function Reports({ transactions }) {
  const categories = ["Food", "Salary", "Transport", "Other"];
  return (
    <section>
      <h2>Reports</h2>
      <div>
        <h4>Expenses by Category</h4>
        <ul>
          {categories.map((cat) => {
            const sum = transactions
              .filter((t) => t.category === cat && t.type === "Expense")
              .reduce((s, t) => s + t.amount, 0);
            return (
              <li key={cat}>
                {cat}: ${sum}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Reports;