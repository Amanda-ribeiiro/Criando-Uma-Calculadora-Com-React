import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Body = styled.div`
    width: 365px;
    height: 400px;
    background-color: #22272e;
    border-radius: 27px;
    
`;

export const Screen = styled.div`
    height: 140px;
    width: 94%;
    display: flex;
    justify-content: end;
    align-items: flex-end;
    flex-direction: column;
    margin-right: 49px;
    margin-bottom: 25px;
    background-color: #24682b4;
    border-radius: 27px;   
`;

export const Count = styled.div`
    color: #ffffff90;
    text-align: right;
    font-size: 24px;
`

export const Result = styled.div`
    color: #ffffff;
    text-align: right;
    font-size: 50px;
`