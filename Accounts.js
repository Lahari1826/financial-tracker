import React from "react";

function Accounts({ accounts, onAdd }) {
  function handleAdd(e) {
    e.preventDefault();
    const form = e.target;
    onAdd({
      id: accounts.length + 1,
      name: form.name.value,
      balance: Number(form.balance.value),
    });
    form.reset();
  }

  return (
    <section>
      <h2>Accounts</h2>
      <form className="inline-form" onSubmit={handleAdd}>
        <input name="name" placeholder="Account Name" required />
        <input name="balance" type="number" placeholder="Initial Balance" required />
        <button type="submit">Add</button>
      </form>
      <ul>
        {accounts.map((acc) => (
          <li key={acc.id}>
            {acc.name}: ${acc.balance}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Accounts;