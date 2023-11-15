// src/App.js
import React, { useState } from 'react';
import IntervalForm from './components/IntervalForm';
import * as S from "./App.styles";

function App() {
  const [output, setOutput] = useState([]);

  const handleIntervalAdded = (newOutput) => {
    setOutput(newOutput);
  };

  return (
    <S.Container>
      <IntervalForm onIntervalAdded={handleIntervalAdded} />
      <h2>Output Intervals</h2>
      <S.UL>
        {output.map((interval, index) => (
          <li key={index}>{`[${interval.Start}, ${interval.End}]`}</li>
        ))}
      </S.UL>
    </S.Container>
  );
}

export default App;
