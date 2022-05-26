import { useState } from 'react';
import Select from 'react-select';
import colors from '../BgColor/data.json';

export default function BgColor({ label }) {
  const [bgColors, setBgColors] = useState(label);
  const colorChange = e => {
    setBgColors(e.label);
  };

  return (
    <div>
      <style>{`body {background-color: ${bgColors}};`}</style>
      <Select options={colors} onChange={colorChange}></Select>
      <center>
        <p>The background color is: {bgColors}</p>
      </center>
    </div>
  );
}
