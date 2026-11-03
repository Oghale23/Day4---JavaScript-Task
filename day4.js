// Task 1
const product = {
  id: 101,
  name: "Laptop",
  price: 12000,
  category: "Gadgets",
  inStock: true,
};
function formatProduct({ name, price, inStock }) {
  const formattedprice = price.toLocaleString("en-NG");
  const status = inStock ? "In Stock" : "Out of Stock";
  return `${name} - NGN ${formattedprice} (${status})`;
}
console.log(formatProduct(product));
// Task 2

const items = [
  {
    id: 102,
    name: "Wireless Mouse",
    price: 12000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 111,
    name: "Mechanical Keyboard",
    price: 45000,
    category: "Accessories",
    inStock: false,
  },
  {
    id: 121,
    name: "Smartphone",
    price: 250000,
    category: "Phones",
    inStock: true,
  },
  {
    id: 131,
    name: "Bluetooth Speaker",
    price: 30000,
    category: "Audio",
    inStock: true,
  },
  {
    id: 141,
    name: "Laptop",
    price: 650000,
    category: "Computers",
    inStock: true,
  },
  {
    id: 151,
    name: "Headphones",
    price: 18500,
    category: "Audio",
    inStock: false,
  },
  {
    id: 161,
    name: "USB-C Cable",
    price: 3500,
    category: "Accessories",
    inStock: true,
  },
];

// Task 3
// Return inStock items only
function getInStockItems(items) {
  return items.filter(({ inStock }) => inStock);
}
// get item names
function getItemNames(items) {
  return items.map(({ name }) => name);
}

// Find product by id
function findItemsById(items, id) {
  return items.find((item) => item.id === id);
}

//  sum of all prices
function getTotalCatalogValue(items) {
  return items.reduce((total, { price }) => total + price, 0);
}
// Group by Category
function groupByCategory(items) {
  return items.reduce((groups, item) => {
    const { category } = product;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  });
}

console.log(getInStockItems(items));
console.log(getItemNames(items));
console.log(findItemsById(items, 131));
console.log(getTotalCatalogValue(items));
console.log(groupByCategory(items));

// Task 4

const students = [
  { id: 1, name: "Joy", score: 85, subject: "Mathematics" },
  { id: 2, name: "Mary", score: 92, subject: "English" },
  { id: 3, name: "Ella", score: 48, subject: "Physics" },
  { id: 4, name: "Zainab", score: 67, subject: "Chemistry" },
  { id: 5, name: "Nurudeen", score: 74, subject: "Mathematics" },
  { id: 6, name: "Joshua", score: 39, subject: "Biology" },
  { id: 7, name: "Bola", score: 58, subject: "English" },
];
// Students who passed
function getPassingStudents(students, passMark) {
  return students.filter(({ score }) => score >= passMark);
}
// Find Average Score
function getAverageScore(students) {
  if (students.length === 0) return 0;
  const total = students.reduce((sum, { score }) => (sum = score), 0);
  return total / students.length;
}

// student with the highest score
function getTopStudent(students) {
  return students.reduce((top, student) =>
    student.score > top.score ? student : top,
  );
}
// Assigning Letter Grade
function assignGrade(score) {
  if (score >= 70) return "A";
  if (score >= 60) return "B";
  if (score >= 50) return "C";
  if (score >= 40) return "D";
  return "F";
}

function addGrades(students) {
  return students.map((student) => ({
    ...student,
    grade: assignGrade(student.score),
  }));
}

console.log(getPassingStudents(students, 75));
console.log(getAverageScore(students));
console.log(getTopStudent(students));
console.log(assignGrade(31));
console.log(addGrades(students));

// Task 5

const transactions = [
  { id: 1, type: "credit", amount: 150000, date: "2026-01-05" },
  { id: 2, type: "debit", amount: 25000, date: "2026-01-08" },
  { id: 3, type: "debit", amount: 12000, date: "2026-01-15" },
  { id: 4, type: "credit", amount: 30000, date: "2026-01-20" },
  { id: 5, type: "debit", amount: 45000, date: "2026-02-02" },
  { id: 6, type: "credit", amount: 150000, date: "2026-02-05" },
  { id: 7, type: "debit", amount: 8500, date: "2026-02-14" },
  { id: 8, type: "debit", amount: 60000, date: "2026-02-20" },
  { id: 9, type: "credit", amount: 20000, date: "2026-03-03" },
  { id: 10, type: "debit", amount: 15000, date: "2026-03-10" },
  { id: 11, type: "debit", amount: 35000, date: "2026-03-18" },
];
function getAmount({ type, amount }) {
  return type === "credit" ? amount : -amount;
}

function getBalance(transactions) {
  return transactions.reduce(
    (balance, transaction) => balance + getAmount(transaction),
  );
}

//FILTER BASED OFF TYPE
function getTransactionByType(transactions, type) {
  return transactions.filter((transaction) => transaction.type === type);
}

// Get Largest Transaction
function getLargestTransaction(transactions) {
  if (transactions.length === 0) return undefined;
  return transactions.reduce((largest, transaction) =>
    transaction.amount > largest.amount ? transaction : largest,
  );
}

//  Get monthly Total Transaction
function getMonthlyTotals(transactions) {
  return transactions.reduce((totals, transaction) => {
    const month = transaction.date.slice(0, 7);
    totals[month] = (totals[month] ?? 0) + getAmount(transaction);
    return totals;
  });
}
console.log(getBalance(transactions));
console.log(getTransactionByType(transactions, "credit"));
console.log(getTransactionByType(transactions, "debit"));
console.log(getLargestTransaction(transactions));
console.log(getMonthlyTotals(transactions));
