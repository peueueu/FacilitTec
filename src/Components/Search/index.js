import React from 'react';
import ArrowDown from '../../styles/assets/arrow-down';
import { Wrapper, SearchWrapper, SearchBar, BtnFiltro } from './styled';

const Search = props => (
  <Wrapper>
    <SearchWrapper>
      <SearchBar type="text" placeholder="Pesquisar" />
      <BtnFiltro>Filtro Avançado <ArrowDown /></BtnFiltro>
    </SearchWrapper>
  </Wrapper>
)

export default Search;