import React from 'react';
import Card from '../Card';
import ColumnHeader from '../ColumnHeader';

import { ColumnWrapper, Wrapper } from './styled';

const Column = props => {
  return (
    <ColumnWrapper id={props.id}>
      <ColumnHeader title={props.columnTitle} />
      <Wrapper numCard={props.numCard}>
        {props.children}
      </Wrapper>
    </ColumnWrapper>
  )
}

export default Column;