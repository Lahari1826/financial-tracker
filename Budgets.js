import React from "react";

function Budgets({ budgets, onAdd }) {
  function handleAdd(e) {
    e.preventDefault();
    const form = e.target;
    onAdd({
      id: budgets.length + 1,
      category: form.category.value,
      limit: Number(form.limit.value),
      spent: 0,
    });
    form.reset();
  }

  return (
    <section>
      <h2>Budgets</h2>
      <form className="inline-form" onSubmit={handleAdd}>
        <input name="category" placeholder="Category" required />
        <input name="limit" type="number" placeholder="Limit" required />
        <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Limit</th>
            <th>Spent</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((b) => (
            <tr key={b.id}>
              <td>{b.category}</td>
              <td>${b.limit}</td>
              <td>${b.spent}</td>
              <td>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{
                      width: `${Math.min(100, (b.spent / b.limit) * 100)}%`,
                    }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Budgets;