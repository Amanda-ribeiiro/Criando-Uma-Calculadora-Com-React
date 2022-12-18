import React from "react";
import { Operator } from "../../lib/types";
import Key  from "../Key";

import {Container, Pad, Wrapper} from './styles';

interface Props {
    inputFunc: (num: number) => void;
    clearFunc: () => void;
    porcentageFunc: () => void;
    changeSignFunc: () => void;
    operatorHandler: (operator: Operator) => void;
    calculateFunc: () => void;
}

const Keyboard = ({calculateFunc, operatorHandler, changeSignFunc, inputFunc, porcentageFunc, clearFunc }: Props) => {
    return (
        <Container>
            <Wrapper>
                <Pad>
                    <Key clickEvent={clearFunc} color={"#3692f9"} digit={"AC"} />
                    <Key clickEvent={changeSignFunc} color={"#3692f9"} digit={"+/-"} />
                    <Key clickEvent={porcentageFunc} color={"#3692f9"} digit={"%"}/>
                    <Key clickEvent={operatorHandler} color={"3692f9"} digit={"/"} />
                    <Key clickEvent={inputFunc} isCircle color={"#ffffff"} digit={"7"} />
                    <Key clickEvent={inputFunc} isCircle color={"#ffffff"} digit={"8"} />
                    <Key clickEvent={inputFunc} isCircle color={"#ffffff"} digit={"9"} />
                    <Key clickEvent={operatorHandler} color={"3692f9"} digit={"x"} />
                    <Key clickEvent={inputFunc} isCircle color={"#ffffff"} digit={"4"} />
                    <Key clickEvent={inputFunc} isCircle color={"#ffffff"} digit={"5"} />
                    <Key clickEvent={inputFunc} isCircle color={"#ffffff"} digit={"6"} />
                    <Key clickEvent={operatorHandler} color={"3692f9"} digit={"-"} />
                    <Key clickEvent={inputFunc} isCircle color={"#ffffff"} digit={"1"} />
                    <Key clickEvent={inputFunc} isCircle color={"#ffffff"} digit={"2"} />
                    <Key clickEvent={inputFunc} isCircle color={"#ffffff"} digit={"3"} />
                    <Key clickEvent={operatorHandler} color={"3692f9"} digit={"+"} />
                    <Key clickEvent={inputFunc} isCircle color={"#ffffff"} digit={","} />           
                    <Key clickEvent={inputFunc} isCircle color={"#ffffff"} digit={"0"} />
                    <Key clickEvent={inputFunc} isCircle color={"#ffffff"} digit={"."} />
                    <Key clickEvent={calculateFunc} color={"#78FF86"} digit={"="} />
                </Pad>
            </Wrapper>
        </Container>
    )
}

export default Keyboard;