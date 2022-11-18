import styled from "styled-components";

export const Body = styled.div`
  width: 90%;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (max-width: 620px) {
      width: 100%;
    
  }
`;

export const Container = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border: solid 2px black;
  border-radius: 15px;
  width: 350px;
  height: 400px;
  padding: 10px;
  @media screen and (max-width: 620px) {
    width: 350px;
    height: 400px;
  }
`;

export const Nome = styled.h1`
  font-size: 30px;
  margin-top: 10px;
  text-align: center;
`;

export const Option = styled.h2`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
`;

export const Coment = styled.p`
  font-size: 18px;
  text-align: justify;
  margin-top: 25px;
`;
