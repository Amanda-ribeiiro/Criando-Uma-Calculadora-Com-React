import styled from 'styled-components';


export const Container = styled.div`
  width: 220px;
  height: 60px;
  margin: 20px 0;
  background:#00bfff;
  border-radius: 50px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerTwo = styled.div`
  width: 220px;
  height: 60px;
  margin: 20px 0;
  background:#22272e;
  border-radius: 50px;
  bottom: 0px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;  

export const GithubProfileLink = styled.a`
    text-decoration: none;
    font-family: 'On Sans' 
    padding-top: 25px;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    @keyframes rainbow {
        10%{
            color: #FD7730;
        }
        20%{
            color: #00FFFF;
        }
        30%{
            color: #F67dg85;
        }
        40%{
            color: #EF7401;
        }
        50%{
            color: #B9D4DB;
        }
        60%{
            color: #FF00AA;
        }
        70%{
            color: #AA00FF;
        }
        80%{
            color: #00AAFF;
        }
        90%{
            color: #778899;
        }
    }

    &:hover{
        animation: rainbow 5s infinite;
        transition: 15s;
    }
`