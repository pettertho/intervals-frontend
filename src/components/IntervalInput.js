import * as S from "./IntervalInput.styles";

export default function IntervalInput({
  intervals,
  setIntervals,
  start,
  setStart,
  end,
  setEnd,
  buttonText,
  addInterval,
}) {
  const handleFormSubmit = e => {
    e.preventDefault();
    addInterval(intervals, setIntervals, start, end);
  };

  return (
    <S.Form onSubmit={handleFormSubmit}>
      <S.InputContainer>
        <S.Input
          placeholder="Start"
          type="number"
          value={start || ""}
          onChange={e => setStart(Number(e.target.value))}
        />
        <S.Input
          placeholder="End"
          type="number"
          value={end || ""}
          onChange={e => setEnd(Number(e.target.value))}
        />
      </S.InputContainer>
      <S.AddButton type="submit">{buttonText}</S.AddButton>
      <input type="submit" style={{ display: "none" }} />
    </S.Form>
  );
}
