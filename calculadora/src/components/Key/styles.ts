import styled from 'styled-components';
import Button from '../../Button';

export const Container = styled.div`
    width: 100%
    height: 100%;
`;

export const ButtonK = styled(Button)`
    width: 59px;
    height: 59px;
    margin: 5px;
    font-sixe: 30px;
    text-align: center;
    background: #242730;
    cursor: pointer;
    transition-duration: 150ms;

    &:hover {
        background: #fd7730;
    }
`;