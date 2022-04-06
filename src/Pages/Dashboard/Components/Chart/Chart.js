import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    date: 'Jan',
    time: 6
  },
  {
    date: 'Feb',
    time: 18
  },
  {
    date: 'Mar',
    time: 48
  },
  {
    date: 'Apr',
    time: 48
  },
  {
    date: 'May',
    time: 18
  },
  {
    date: 'Jun',
    time: 25
  },
  {
    date: 'Jul',
    time: 42
  },
  {
    date: 'Aug',
    time: 33
  },
];

export default function Example (props){
  
    return (
      <ResponsiveContainer width="100%" height="100%" className={props.className}>
        <LineChart
          // width={500}
          // height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="" vertical={false}/>
          <XAxis dataKey="date" axisLine={false} tickLine={false} tickSize={20}/>
          <YAxis axisLine={false} tickLine={false} tickSize={20}/>
          <Tooltip />
          <Line dataKey="time" stroke={props.strokeColor} dot={{ strokeWidth: 1 }}  strokeWidth={2} r={5}/>
          
        </LineChart>
      </ResponsiveContainer>
    );
  
}
