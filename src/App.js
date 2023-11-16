// src/App.js
import React, { useState } from "react";
import IntervalForm from "./components/IntervalForm";
import * as S from "./App.styles";

function App() {
  const [output, setOutput] = useState([]);

  const handleIntervalAdded = newOutput => {
    setOutput(newOutput);
  };
  return (
    <S.Container>
      <h1>Interval Processor</h1>
      <p>
        Enter intervals to include and exclude, and the output will be the
        intervals that are included after the excluded intervals are removed.
      </p>
      <IntervalForm onIntervalAdded={handleIntervalAdded} />
      <S.H2>Output Intervals</S.H2>
      <S.UL>
        {output.map((interval, index) => (
          <li key={index}>{`[${interval.Start}, ${interval.End}]`}</li>
        ))}
      </S.UL>
    </S.Container>
  );
}

export default App;
