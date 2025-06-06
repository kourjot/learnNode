const data = [
  {
    id: 1,
    name: 'Ravi',
    lastActive: '2025-06-03',
    activity: { login: 15, comments: 5, submissions: 3 }
  },
  {
    id: 2,
    name: 'Sneha',
    lastActive: '2025-05-25',
    activity: { login: 30, comments: 2, submissions: 1 }
  },
  {
    id: 3,
    name: 'Manoj',
    lastActive: '2025-06-01',
    activity: { login: 10, comments: 8, submissions: 4 }
  },
  {
    id: 4,
    name: 'Priya',
    lastActive: '2025-06-05',
    activity: { login: 8, comments: 4, submissions: 5 }
  },
  {
    id: 5,
    name: 'Arjun',
    lastActive: '2025-06-04',
    activity: { login: 5, comments: 1, submissions: 0 }
  }
];

const today = new Date('2025-06-06');
const last7 = new Date(today);
last7.setDate(today.getDate() - 7);

const final = data
  .filter(x => new Date(x.lastActive) >= last7)
  .map(x => {
    const act = x.activity;
    const score = act.login * 1 + act.comments * 5 + act.submissions * 10;
    return { name: x.name, score };
  })
  .filter(x => x.score > 50)
  .sort((a, b) => b.score - a.score);

console.log(final);
