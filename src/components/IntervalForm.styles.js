import styled from "@emotion/styled";

const pagePaddingRem = 1;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 2rem;
  gap: 0.25rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.25rem;

  @media (min-width: 768px) {
    gap: 2.5rem;
    flex-direction: row;
  }
`;

export const Form = styled.div`
  padding-left: ${pagePaddingRem}rem;
  padding-right: ${pagePaddingRem}rem;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  min-width: 2rem;
  gap: 1rem;
`;

export const InputContainers = styled.form`
  display: flex;
  flex-direction: column;
`;

export const IntervalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const SectionHeader = styled.h3`
  min-width: 5rem;
  align-self: start;
`;

export const IntervalUL = styled.ul`
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  list-style-type: ", ";
  margin: 1rem;

  & :first-child {
    list-style-type: none;
  }
`;

export const ResetButton = styled.button`
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  max-width: 5rem;
  width: 100%;
  background-color: light-grey;
  color: black;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Message = styled.p`
  text-align: start;
  text-decoration: underline;
  font-style: italic;
  font-weight: bold;
`;
