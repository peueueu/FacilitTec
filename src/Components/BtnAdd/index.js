import React from 'react';
import { Btn, AddIcon } from './styled';

const BtnAdd = props => (
  <Btn><AddIcon>+</AddIcon>{props.name}</Btn>
)

export default BtnAdd;