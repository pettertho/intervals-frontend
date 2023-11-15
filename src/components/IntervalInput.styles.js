import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
  border-radius: 5px;
`;

export const AddButton = styled.button`
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  width: min-content;
  background-color: light-grey;
  color: black;
  padding: 0.75rem;
  align-self: center;
  min-width: 6rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
