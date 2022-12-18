import React from "react";

import gitLogo from '../assets/github.png'
import { Container, ContainerTwo, GithubProfileLink } from "./styles";

const Github: React.FC = () => {
    return (
        <Container>
            <ContainerTwo>
                <img src={gitLogo} width={50} height={50} alt="github logo"/>
                <GithubProfileLink href="https://github.com/Amanda-ribeiiro">Amanda Ribeiro</GithubProfileLink>
            </ContainerTwo>
        </Container>
    );
};

export default Github;


