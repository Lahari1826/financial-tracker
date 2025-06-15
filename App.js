import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Income from "./components/Income";
import Budgets from "./components/Budgets";
import Reports from "./components/Reports";
import Accounts from "./components/Accounts";
import Login from "./components/Login";
const initialAccounts = [
  { id: 1, name: "Bank", balance: 2000 },
  { id: 2, name: "Cash", balance: 500 },
];
const initialTransactions = [
  { id: 1, date: "2025-06-14", description: "Groceries", amount: 50, category: "Food", account: "Bank", type: "Expense" },
  { id: 2, date: "2025-06-13", description: "Salary", amount: 1000, category: "Salary", account: "Bank", type: "Income" },
];
const initialBudgets = [
  { id: 1, category: "Food", limit: 300, spent: 50 },
  { id: 2, category: "Transport", limit: 100, spent: 0 },
];

function App() {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState(initialAccounts);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [budgets, setBudgets] = useState(initialBudgets);
  const [tab, setTab] = useState("dashboard");

  function handleAddTransaction(newTx) {
    setTransactions([...transactions, newTx]);
    setAccounts(accounts.map(acc =>
      acc.name === newTx.account
        ? { ...acc, balance: acc.balance + (newTx.type === "Income" ? newTx.amount : -newTx.amount) }
        : acc
    ));
    setBudgets(budgets.map(b =>
      b.category === newTx.category && newTx.type === "Expense"
        ? { ...b, spent: b.spent + newTx.amount }
        : b
    ));
  }

  function handleAddIncome(newIncome) {
    setTransactions([...transactions, newIncome]);
    setAccounts(accounts.map(acc =>
      acc.name === newIncome.account
        ? { ...acc, balance: acc.balance + newIncome.amount }
        : acc
    ));
  }

  function handleAddBudget(newBudget) {
    setBudgets([...budgets, newBudget]);
  }

  function handleAddAccount(newAccount) {
    setAccounts([...accounts, newAccount]);
  }

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div className="app-container">
      <Navbar setTab={setTab} setUser={setUser} />
      <main>
        {tab === "dashboard" && (
          <Dashboard accounts={accounts} transactions={transactions} />
        )}
        {tab === "transactions" && (
          <Transactions
            accounts={accounts}
            transactions={transactions}
            onAdd={handleAddTransaction}
          />
        )}
        {tab === "income" && (
          <Income
            accounts={accounts}
            transactions={transactions}
            onAdd={handleAddIncome}
          />
        )}
        {tab === "budgets" && (
          <Budgets budgets={budgets} onAdd={handleAddBudget} />
        )}
        {tab === "reports" && (
          <Reports transactions={transactions} />
        )}
        {tab === "accounts" && (
          <Accounts accounts={accounts} onAdd={handleAddAccount} />
        )}
      </main>
    </div>
  );
}

export default App;