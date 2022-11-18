import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import Cards from './components/Cards'
import {Body}  from "./components/Cards/styles";

const App = () => {
  const [values, setValues] = useState([]);
  const inforCards = (e) => {
    return setValues([...values, e]);
  };

  console.log(values);
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Resume />
      <Form inforCards={inforCards} />
      <Body>
        
        {values.map((item) => {
            return (
              <Cards titulo={item.fname} texto={item.coment} option={item.option}/>
            );
          })}
     
      </Body>
    </div>
  );
};

export default App;
