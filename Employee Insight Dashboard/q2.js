const stuff =  [
  {
    id: 'P1',
    category: 'Electronics',
    inStock: true,
    sales: [
      { date: '2025-05-05', quantity: 2, price: 1200 },
      { date: '2025-03-10', quantity: 1, price: 1300 },
    ]
  },
  {
    id: 'P2',
    category: 'Books',
    inStock: true,
    sales: [
      { date: '2025-05-20', quantity: 10, price: 200 },
    ]
  },
  {
    id: 'P3',
    category: 'Clothing',
    inStock: false,
    sales: [
      { date: '2025-05-22', quantity: 5, price: 500 },
    ]
  },
  {
    id: 'P4',
    category: 'Electronics',
    inStock: true,
    sales: [
      { date: '2025-05-28', quantity: 1, price: 2000 },
    ]
  },
  {
    id: 'P5',
    category: 'Fitness',
    inStock: true,
    sales: [
      { date: '2025-06-01', quantity: 3, price: 800 },
    ]
  },
  {
    id: 'P6',
    category: 'Books',
    inStock: true,
    sales: [
      { date: '2025-06-02', quantity: 6, price: 150 },
    ]
  }
];



const today = new Date('2025-06-06');
const last30 = new Date(today);
last30.setDate(today.getDate() - 30);

const inStockItems = stuff.filter(item => item.inStock);

const box = {};

inStockItems.forEach(item => {
  item.sales.forEach(sale => {
    const soldOn = new Date(sale.date);
    if (soldOn >= last30 && soldOn <= today) {
      const total = sale.quantity * sale.price;
      if (!box[item.category]) {
        box[item.category] = 0;
      }
      box[item.category] += total;
    }
  });
});

const result = Object.entries(box)
  .map(([cat, money]) => ({ category: cat, revenue: money }))
  .sort((a, b) => b.revenue - a.revenue)
  .slice(0, 5);

console.log(result);
