import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { data } from "./data";

export const Chart: React.FC = () => {
  return (
    <div className="grid place-items-center">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
        className="grid place-items-center"
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Hard" stackId="a" fill="#D1495B" />
        <Bar dataKey="Medium" stackId="a" fill="#F9E784" />
        <Bar dataKey="Easy" stackId="a" fill="#7BE0AD" />
        <Line type="monotone" dataKey="Total" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

// export const Chart: React.FC = () => {
//   return (
//     <div className="content-center">
//       <BarChart
//         width={800}
//         height={500}
//         data={data}
//         margin={{
//           top: 20,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//         className=""
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="Hard" stackId="a" fill="#D1495B" />
//         <Bar dataKey="Medium" stackId="a" fill="#F9E784" />
//         <Bar dataKey="Easy" stackId="a" fill="#7BE0AD" />
//       </BarChart>
//     </div>
//   );
// };
