import React from "react";

function Income({ accounts, transactions, onAdd }) {
  function handleAdd(e) {
    e.preventDefault();
    const form = e.target;
    const newIncome = {
      id: transactions.length + 1,
      date: form.date.value,
      description: form.description.value,
      amount: Number(form.amount.value),
      category: form.category.value,
      account: form.account.value,
      type: "Income",
    };
    onAdd(newIncome);
    form.reset();
  }

  return (
    <section>
      <h2>Income</h2>
      <form className="inline-form" onSubmit={handleAdd}>
        <input name="date" type="date" required />
        <input name="description" placeholder="Description" required />
        <input name="amount" type="number" placeholder="Amount" required />
        <select name="category" required>
          <option value="">Category</option>
          <option>Salary</option>
          <option>Freelance</option>
          <option>Other</option>
        </select>
        <select name="account" required>
          {accounts.map((acc) => (
            <option key={acc.id}>{acc.name}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
      <ul>
        {transactions
          .filter((t) => t.type === "Income")
          .map((t) => (
            <li key={t.id}>
              {t.date} - {t.description} - ${t.amount} ({t.category})
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Income;