import React from 'react';
import Dropdown from '../../styles/assets/dropdown';
import { Wrapper, ColumnTitle, MenuBtn } from './styled';

const ColumnHeader = props => (
  <Wrapper>
    <ColumnTitle>{props.title}</ColumnTitle>
    <MenuBtn><Dropdown /></MenuBtn>
  </Wrapper>
)

export default ColumnHeader;