import React from 'react';
import ColumnHeader from '../ColumnHeader';
import BtnAdd from '../BtnAdd';
import Card from '../Card';

import { ColumnWrapper, Wrapper, BtnWrapper } from './styled';

const Column = props => {

  let arr = [];

  for (let i = 0; i < props.numCard; i++) {
    arr = arr.concat(<Card />);
  };

  return (
    <ColumnWrapper>
      <ColumnHeader title={props.columnTitle} />
      <Wrapper numCard={props.numCard}>
        {arr.map((i, index) => {
          return <Card
            conteudo="Quos nostrum adipisci mollitia deserunt esse reprehendarit facere."
            tag="Desenvolvimento"
            key={index} />;
        })}
        <BtnWrapper>
          <BtnAdd name="Task" />
        </BtnWrapper>
      </Wrapper>
    </ColumnWrapper>
  )
}

export default Column;