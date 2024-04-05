import React from "react";
import * as C from "./styles";
import logo from "../../image/finance-logo.png"

const Header = () => {
  return (
    <C.Container>
      <C.Header>
        <C.Title>Meu Financeiro</C.Title>
        <C.Logo src={logo} alt="logo" />
      </C.Header>
    </C.Container>
  );
};

export default Header;
