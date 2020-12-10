import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

// Exemplos
//dataKey = "acelerômetro"
// stroke é a cor em hexa
const Graphic = ({data, dataKey, stroke}) => {

return (
  <div id="conteudo">
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
      <Line
        type='monotone'
        dataKey={dataKey}
        stroke={stroke}
        activeDot={{r: 8}}
        />
      <CartesianGrid strokeDasharray='3 3'/>
      <Tooltip/>
      <YAxis/>
      <XAxis dataKey='tempo'/>
      <Legend />
    </LineChart>
  </div>
      
);
}

export default Graphic;