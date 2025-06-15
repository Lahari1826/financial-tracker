import React from "react";

function Navbar({ setTab, setUser }) {
  return (
    <nav>
      <button onClick={() => setTab("dashboard")}>Dashboard</button>
      <button onClick={() => setTab("transactions")}>Transactions</button>
      <button onClick={() => setTab("income")}>Income</button>
      <button onClick={() => setTab("budgets")}>Budgets</button>
      <button onClick={() => setTab("reports")}>Reports</button>
      <button onClick={() => setTab("accounts")}>Accounts</button>
      <button onClick={() => setUser(null)}>Logout</button>
    </nav>
  );
}

export default Navbar;