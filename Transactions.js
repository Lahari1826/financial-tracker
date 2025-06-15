import React, { useState } from "react";

function Transactions({ accounts, transactions, onAdd }) {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    const form = e.target;
    const newTx = {
      id: transactions.length + 1,
      date: form.date.value,
      description: form.description.value,
      amount: Number(form.amount.value),
      category: form.category.value,
      account: form.account.value,
      type: form.type.value,
    };
    onAdd(newTx);
    form.reset();
  }

  const filteredTx = transactions.filter(
    (t) =>
      (filter === "" ||
        t.description.toLowerCase().includes(filter.toLowerCase())) &&
      (category === "" || t.category === category)
  );

  return (
    <section>
      <h2>Transactions</h2>
      <form className="inline-form" onSubmit={handleAdd}>
        <input name="date" type="date" required />
        <input name="description" placeholder="Description" required />
        <input name="amount" type="number" placeholder="Amount" required />
        <select name="category" required>
          <option value="">Category</option>
          <option>Food</option>
          <option>Salary</option>
          <option>Transport</option>
          <option>Other</option>
        </select>
        <select name="account" required>
          {accounts.map((acc) => (
            <option key={acc.id}>{acc.name}</option>
          ))}
        </select>
        <select name="type" required>
          <option>Expense</option>
          <option>Income</option>
        </select>
        <button type="submit">Add</button>
      </form>
      <div className="filter-bar">
        <input
          placeholder="Search description"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option>Food</option>
          <option>Salary</option>
          <option>Transport</option>
          <option>Other</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Account</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredTx.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.description}</td>
              <td>{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.account}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Transactions;