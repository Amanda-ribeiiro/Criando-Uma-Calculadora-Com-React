import React from "react";
import Github from "../../GitHub";

import Calculator from "../Calculator";

import { Container, Wrapper } from "./styles";

const Page = () => {
    return (
        <Container>
            <Wrapper>
                <Calculator />
            </Wrapper>
            <Github />
        </Container>
    );
};

export default Page;