import styled from "@emotion/styled";

const pagePaddingRem = 1;

export const Container = styled.div`
  padding: 0.5rem 0.75rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: auto;
  margin: 0.2rem;
  border-radius: 1rem;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const H2 = styled.h2`
  margin-top: 3rem;
`;
