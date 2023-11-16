// src/components/IntervalForm.js
import React, { useState, useEffect } from "react";
import * as S from "./IntervalForm.styles";
import IntervalInput from "./IntervalInput";

function IntervalForm({ onIntervalAdded }) {
  const [includeIntervals, setIncludeIntervals] = useState([]);
  const [excludeIntervals, setExcludeIntervals] = useState([]);

  const [includeStart, setIncludeStart] = useState();
  const [includeEnd, setIncludeEnd] = useState();
  const [excludeStart, setExcludeStart] = useState();
  const [excludeEnd, setExcludeEnd] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    handleSubmit();
  }, [includeIntervals, excludeIntervals]);

  const addInterval = (intervals, setIntervals, start, end) => {
    // Validate input
    if (!start || !end) {
      setMessage("Please enter a start and end value!");
      return;
    } else if (start > end) {
      setMessage("Start cannot be greater than end!");
      return;
    }

    // Check if the interval already exists
    for (let interval of intervals) {
      if (interval.start === start && interval.end === end) {
        setMessage("This interval already exists!");
        return; // If it does, return without adding the new interval
      }
    }

    setMessage(""); // Clear the message when a new interval is successfully added
    setIntervals([...intervals, { start, end }]);
  };

  const handleSubmit = async e => {
    try {
      const response = await fetch("http://localhost:8080/api/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          includes: includeIntervals.map(interval => ({
            Start: interval.start ? parseInt(interval.start) : null,
            End: interval.end ? parseInt(interval.end) : null,
          })),
          excludes: excludeIntervals.map(interval => ({
            Start: interval.start ? parseInt(interval.start) : null,
            End: interval.end ? parseInt(interval.end) : null,
          })),
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      onIntervalAdded(result.output);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const resetForm = () => {
    setIncludeIntervals([]);
    setExcludeIntervals([]);
    setIncludeStart(null);
    setIncludeEnd(null);
    setExcludeStart(null);
    setExcludeEnd(null);
  };
  return (
    <>
      {message ? <S.Message>{message}</S.Message> : <S.Message></S.Message>}
      <S.Container>
        <S.InputContainer>
          <S.SectionHeader>Include:</S.SectionHeader>
          <IntervalInput
            intervals={includeIntervals}
            setIntervals={setIncludeIntervals}
            start={includeStart}
            setStart={setIncludeStart}
            end={includeEnd}
            setEnd={setIncludeEnd}
            buttonText="Include"
            addInterval={addInterval}
          />
          <S.IntervalContainer>
            <S.SectionHeader>Included Intervals:</S.SectionHeader>
            <S.IntervalUL>
              {includeIntervals.map((interval, index) => (
                <li key={index}>
                  {" "}
                  [{interval.start}, {interval.end}]
                </li>
              ))}
            </S.IntervalUL>
          </S.IntervalContainer>
        </S.InputContainer>
        <S.InputContainer>
          <S.SectionHeader>Exclude:</S.SectionHeader>
          <IntervalInput
            intervals={excludeIntervals}
            setIntervals={setExcludeIntervals}
            start={excludeStart}
            setStart={setExcludeStart}
            end={excludeEnd}
            setEnd={setExcludeEnd}
            buttonText="Exclude"
            addInterval={addInterval}
          />
          <S.IntervalContainer>
            <S.SectionHeader>Excluded Intervals:</S.SectionHeader>
            <S.IntervalUL>
              {excludeIntervals.map((interval, index) => (
                <li key={index}>
                  [{interval.start}, {interval.end}]
                </li>
              ))}
            </S.IntervalUL>
          </S.IntervalContainer>
        </S.InputContainer>
        <S.ResetButton onClick={resetForm}>Reset</S.ResetButton>
      </S.Container>
    </>
  );
}

export default IntervalForm;
