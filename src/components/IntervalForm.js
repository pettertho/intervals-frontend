// src/components/IntervalForm.js
import React, { useState, useEffect } from 'react';
import * as S from './IntervalForm.styles';

function IntervalForm({ onIntervalAdded }) {
  const [includeIntervals, setIncludeIntervals] = useState([]);
  const [excludeIntervals, setExcludeIntervals] = useState([]);

  const [includeStart, setIncludeStart] = useState();
  const [includeEnd, setIncludeEnd] = useState();
  const [excludeStart, setExcludeStart] = useState();
  const [excludeEnd, setExcludeEnd] = useState();
  const [message, setMessage] = useState('');

  useEffect(() => {
    handleSubmit();
  }, [includeIntervals, excludeIntervals]);

  const addInterval = (intervals, setIntervals, start, end) => {
    // Flip the interval if the start is greater than the end
    if (start > end) {
      const temp = start;
      start = end;
      end = temp;
    }
    
    // Check if the interval already exists
    for (let interval of intervals) {
      if (interval.start === start && interval.end === end) {
        setMessage('This interval already exists.');
        return; // If it does, return without adding the new interval
      }
    }
    
    setMessage(''); // Clear the message when a new interval is successfully added
    setIntervals([...intervals, { start, end }]);
  };
  
  
  const handleSubmit = async (e) => {

    try {
      const response = await fetch('http://localhost:8080/api/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          includes: includeIntervals.map(interval => ({ Start: interval.start ? parseInt(interval.start) : null, End: interval.end ? parseInt(interval.end) : null })),
          excludes: excludeIntervals.map(interval => ({ Start: interval.start ? parseInt(interval.start) : null, End: interval.end ? parseInt(interval.end) : null })),
        }),
      });
      console.log(includeIntervals, excludeIntervals)
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await response.json();
      onIntervalAdded(result.output);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    {message ? <p>{message}</p> : <p></p>}
    <S.Container>
      <S.InputContainer>
      <S.SectionHeader>Include:</S.SectionHeader>
      <S.InputContainers>
        <S.Input placeholder="Start" type="number" value={includeStart || ''} onChange={(e) => setIncludeStart(Number(e.target.value))}/>
        <S.Input placeholder="End" type="number" value={includeEnd || ''} onChange={(e) => setIncludeEnd(Number(e.target.value))}/>
      </S.InputContainers>
      <S.AddButton type="submit" onClick={() => addInterval(includeIntervals, setIncludeIntervals, includeStart, includeEnd)}>Include</S.AddButton>
    
      <S.IntervalContainer>
        <S.SectionHeader>Included Intervals:</S.SectionHeader>
        <S.IntervalUL>
        {includeIntervals.map((interval, index) => (
          <li key={index}> [{interval.start}, {interval.end}]</li>
        ))}
        </S.IntervalUL>
      </S.IntervalContainer>
      </S.InputContainer>

      <S.InputContainer>
      <S.SectionHeader>Exclude:</S.SectionHeader>
      <S.InputContainers>
      <S.Input placeholder="Start" type="number"  value={excludeStart || ''} onChange={(e) => setExcludeStart(Number(e.target.value))}/>
      <S.Input placeholder="End" type="number"  value={excludeEnd || ''} onChange={(e) => setExcludeEnd(Number(e.target.value))}/>
      </S.InputContainers>
      <S.AddButton type="submit" onClick={() => addInterval(excludeIntervals, setExcludeIntervals, excludeStart, excludeEnd)}>Exclude</S.AddButton>
      <S.IntervalContainer>
        <S.SectionHeader>Excluded Intervals:</S.SectionHeader>
        <S.IntervalUL>
        {excludeIntervals.map((interval, index) => (
          <li key={index}>[{interval.start}, {interval.end}]</li>
        ))}
        </S.IntervalUL>
      </S.IntervalContainer>
    </S.InputContainer>
      <S.ResetButton onClick={() => {
        setIncludeIntervals([]);
        setExcludeIntervals([]);
        setIncludeStart(null);
        setIncludeEnd(null);
        setExcludeStart(null);
        setExcludeEnd(null);
      }}>Reset</S.ResetButton>
    </S.Container>
    </>
  );
}

export default IntervalForm;
