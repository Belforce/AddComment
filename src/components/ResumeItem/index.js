import React from "react";
import * as C from "./styles";

const ResumeItem = ({titulo, texto, option}) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{titulo}</C.HeaderTitle>
        </C.Header>
        <C.Header>
        <C.HeaderTitle>{option}</C.HeaderTitle>
      </C.Header>
      <C.Total>{texto}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;