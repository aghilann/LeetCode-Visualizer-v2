interface IDataPoint {
  name: string;
  Easy: number;
  Medium: number;
  Hard: number;
  amt: number;
  total(): number;
}

type IDataPoints = IDataPoint[];

export const data: IDataPoints = [
  {
    name: "Linked Lists",
    Easy: 4000,
    Medium: 2400,
    Hard: 2000,
    amt: 2400,
    total: function () {
      return this.Easy + this.Medium + this.Hard;
    },
  },
  {
    name: "Sliding Window",
    Easy: 3000,
    Medium: 1398,
    Hard: 500,
    amt: 2210,
    total: function () {
      return this.Easy + this.Medium + this.Hard;
    },
  },
  {
    name: "2-Pointer",
    Easy: 2000,
    Medium: 9800,
    Hard: 1000,
    amt: 2290,
    total: function () {
      return this.Easy + this.Medium + this.Hard;
    },
  },
  {
    name: "Heaps",
    Easy: 2780,
    Medium: 3908,
    Hard: 450,
    amt: 2000,
    total: function () {
      return this.Easy + this.Medium + this.Hard;
    },
  },
  {
    name: "Graphs",
    Easy: 1890,
    Medium: 4800,
    Hard: 4500,
    amt: 2181,
    total: function () {
      return this.Easy + this.Medium + this.Hard;
    },
  },
  {
    name: "Dynamic Programming",
    Easy: 2390,
    Medium: 3800,
    Hard: 4500,
    amt: 2500,
    total: function () {
      return this.Easy + this.Medium + this.Hard;
    },
  },
];
