const transactions = [
    { name: "Rent", category: "Housing", subCategory: "Fixed", amount: "₹20000" },
    { name: "Groceries", category: "Food", subCategory: "Essentials", amount: "₹3500" },
    { name: "Electricity", category: "Housing", subCategory: "Utilities", amount: "₹3000" },
    { name: "Dining Out", category: "Food", subCategory: "Leisure", amount: "₹1200" },
    { name: "Netflix", category: "Entertainment", subCategory: "Subscriptions", amount: "₹500" },
    { name: "Internet", category: "Housing", subCategory: "Utilities", amount: "₹999" }
  ];
  
  let categoryTotals = {};
  let subCategoryTotals = {};
  
  for (let i = 0; i < transactions.length; i++) {
    let tx = transactions[i];
    let amount = parseInt(tx.amount.replace("₹", ""));
  
    if (categoryTotals[tx.category]) {
      categoryTotals[tx.category] += amount;
    } else {
      categoryTotals[tx.category] = amount;
    }
  
    if (subCategoryTotals[tx.subCategory]) {
      subCategoryTotals[tx.subCategory] += amount;
    } else {
      subCategoryTotals[tx.subCategory] = amount;
    }
  }
  
  let maxSubCategory = "";
  let maxSubAmount = 0;
  
  for (let sub in subCategoryTotals) {
    if (subCategoryTotals[sub] > maxSubAmount) {
      maxSubAmount = subCategoryTotals[sub];
      maxSubCategory = sub;
    }
  }
  
  let result = {
    categoryTotals: categoryTotals,
    maxSubCategory: maxSubCategory,
    maxSubAmount: maxSubAmount
  };
  
  console.log(result);