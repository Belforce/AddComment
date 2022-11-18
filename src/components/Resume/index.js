import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";

const Resume = () => {
  return (
    <C.Container>
      <ResumeItem titulo={'Excelent'} texto={'live a comment about how excelent the services was about.'}/>
      <ResumeItem titulo={'Good'} texto={'live a comment about how good the services was about.'}/>
      <ResumeItem titulo={'Mediun'} texto={'live a comment about how mediun the services was about.'}/>
    </C.Container>
  );
};

export default Resume;
