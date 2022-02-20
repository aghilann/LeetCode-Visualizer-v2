import { Container } from "@mantine/core";
import { PieChart, Pie, Cell } from "recharts";
import { data } from "./data";

const COLORS = ["#7BE0AD", "#F9E784", "#D1495B"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieGraph() {
  return (
    <Container
      fluid={false}
      padding="xs"
      className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg my-10 grid place-items-center"
    >
      <PieChart width={500} height={400}>
        <Pie
          data={data}
          //   cx={170}
          //   cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Container>
  );
}
