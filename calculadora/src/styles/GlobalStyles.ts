import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;900&display=swap');
    *{
        margin: 0px;
        border: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
    }
    html, body{
        width: 100%;
        height: 90vh;
        
        margin: 10px 0 0 px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color: #B0C4DE;
    }
`;