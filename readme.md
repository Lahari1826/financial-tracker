# Personal Finance Tracker

A simple personal finance tracker web application built with React.js and CSS.  
Track your income, expenses, budgets, accounts, and view reports—all in your browser.

## Features

- User authentication (mock login)
- Dashboard overview (balance, income, expenses)
- Add and filter transactions (income/expense, category, account)
- Income tracking
- Budget creation and progress tracking
- Accounts management
- Simple reports (expenses by category)
- Responsive and clean UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes with Node.js)

### Installation

1. **Clone or download this repository.**
2. **Open a terminal and navigate to the project folder.**
3. **Install dependencies:**
   ```
   npm install
   ```
4. **Start the development server:**
   ```
   npm start
   ```
5. **Open your browser and go to:**  
   [http://localhost:3000](http://localhost:3000)

### Login Credentials

- **Username:** `user`
- **Password:** `pass`

## Project Structure

```
budget-tracker/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Login.js
│   │   ├── Dashboard.js
│   │   ├── Transactions.js
│   │   ├── Income.js
│   │   ├── Budgets.js
│   │   ├── Reports.js
│   │   └── Accounts.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Customization

- You can add more features, improve the UI, or connect to a backend as needed.
- All data is stored in memory (refreshing the page will reset the data).

## License

This project is for