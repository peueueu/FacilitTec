import React from "react";
import { Wrapper } from "./styled";

const Layout = props => (
  <Wrapper>
    {props.children}
  </Wrapper>
)

export default Layout;