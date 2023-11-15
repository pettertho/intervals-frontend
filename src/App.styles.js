import styled from "@emotion/styled";

const pagePaddingRem = 1;

export const Container = styled.div`
    padding-left: ${pagePaddingRem}rem;
    padding-right: ${pagePaddingRem}rem;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    min-width: 2rem;
    `;

export const Form = styled.form`
    padding-left: ${pagePaddingRem}rem;
    padding-right: ${pagePaddingRem}rem;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    min-width: 2rem;
    `;

export const UL = styled.ul`
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    `;
