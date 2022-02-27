interface IDataPoint {
  name: string;
  category: string;
  Easy: number;
  Medium: number;
  Hard: number;
  amt: number;
  Total: number;
}

type IDataPoints = IDataPoint[];

export const data: IDataPoints = [
  {
    name: "L. L",
    category: "Linked List",
    Easy: 4000,
    Medium: 2400,
    Hard: 2000,
    amt: 2400,
    Total: 8400,
  },
  {
    name: "S. W",
    category: "Sliding Window",
    Easy: 3000,
    Medium: 1300,
    Hard: 500,
    amt: 2210,
    Total: 4800,
  },
  {
    name: "2. P",
    category: "2-Pointer",
    Easy: 2000,
    Medium: 9800,
    Hard: 1000,
    amt: 2290,
    Total: 12800,
  },
  {
    name: "Heaps",
    category: "Heaps",
    Easy: 2780,
    Medium: 3900,
    Hard: 450,
    amt: 2000,
    Total: 7130,
  },
  {
    name: "Graphs",
    category: "Graphs",
    Easy: 1890,
    Medium: 4800,
    Hard: 4500,
    amt: 2181,
    Total: 11190,
  },
  {
    name: "D. P",
    category: "Dyanmic Programming",
    Easy: 2390,
    Medium: 3800,
    Hard: 4500,
    amt: 2500,
    Total: 10690,
  },
];
