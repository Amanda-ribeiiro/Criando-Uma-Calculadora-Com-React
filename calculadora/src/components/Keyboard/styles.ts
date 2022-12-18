import styled from "styled-components";

export const Container = styled.div`
    background-color: #2A2D36;
    border-radius: 31px;
    width: 365px;
    height: 400px;
`;

export const Wrapper = styled.div`
    width: 100%
    height: 100%
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Pad = styled.div`
    display: grid;
    justify-items: center;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
`;