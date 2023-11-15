import styled from "@emotion/styled";

const pagePaddingRem = 1;


export const Container = styled.div`
padding-left: ${pagePaddingRem}rem;
padding-right: ${pagePaddingRem}rem;
display: flex;
flex-direction: column;
margin: 2rem;
min-width: 2rem;
gap: 1rem;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
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
    `;



export const Input = styled.input`
    margin: 1rem;
    padding: 5px;
    font-size: 1.2rem;
    border-radius: 5px;
    max-width: 200px;
    min-width: 2rem;
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


export const SectionHeader = styled.h3`
    min-width: 5rem;
    text-align: end;
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