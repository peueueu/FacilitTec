import styled from 'styled-components';
import colorTheme from '../../styles/colorTheme';

export const Wrapper = styled.div`
display: flex;
background: ${colorTheme.columnHeader};
width: auto;
padding: 21px 15px;
align-items: center;
justify-content: space-between;
`

export const ColumnTitle = styled.h3`
font-size: 20px;
text-transform: uppercase;
color: ${colorTheme.titleGray}
`

export const MenuBtn = styled.button`
background: transparent;
border: none;
cursor: pointer;
&:focus {
  outline: none;
}
`