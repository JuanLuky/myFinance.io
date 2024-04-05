import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <C.Container>
      <C.ContainerTwo>
        <C.Header>
          <C.HeaderTitle>{title}</C.HeaderTitle>
          <Icon />
        </C.Header>
        <C.Total>{value}</C.Total>
      </C.ContainerTwo>
    </C.Container>
  );
};

export default ResumeItem;
