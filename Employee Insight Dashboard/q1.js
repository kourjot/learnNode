const employees = [
  { id: 1, name: 'Alice', dept: 'HR', joined: 2021, salary: 40000, active: true },
  { id: 2, name: 'Bob', dept: 'Tech', joined: 2020, salary: 75000, active: true },
  { id: 3, name: 'Charlie', dept: 'Finance', joined: 2018, salary: 62000, active: true },
  { id: 4, name: 'David', dept: 'Tech', joined: 2022, salary: 80000, active: true },
  { id: 5, name: 'Eve', dept: 'Finance', joined: 2021, salary: 68000, active: false },
  { id: 6, name: 'Frank', dept: 'HR', joined: 2023, salary: 42000, active: true },
  { id: 7, name: 'Grace', dept: 'Tech', joined: 2023, salary: 95000, active: true },
];

const filtered = employees.filter(emp => emp.joined > 2019 && emp.active);

const map = {};
filtered.forEach(emp => {
  if (!map[emp.dept]) {
    map[emp.dept] = { total: 0, count: 0 };
  }
  map[emp.dept].total += emp.salary;
  map[emp.dept].count += 1;
});

const avg = Object.entries(map).map(([dept, data]) => ({
  dept,
  avgSalary: data.total / data.count
}));

const max= avg
  .sort((a, b) => b.avgSalary - a.avgSalary)
  .slice(0, 3)
  .map(entry => entry.dept);

console.log(max);
