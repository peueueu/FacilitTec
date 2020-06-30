import React from 'react';
import Column from '../Column';
import BtnAdd from '../BtnAdd';
import { ColumnWrapper } from './styled';


const ColumnContainer = props => (
  <ColumnWrapper>
    <Column numCard="3" columnTitle="A Iniciar" />
    <Column numCard="3" columnTitle="Andamento" />
    <Column numCard="0" columnTitle="Atrasado" />
    <Column numCard="2" columnTitle="Em Teste" />
    <Column numCard="4" columnTitle="Concluído" />
    <BtnAdd name="Coluna" />
  </ColumnWrapper>
)

export default ColumnContainer;