import styled from 'styled-components';
import colorTheme from '../../styles/colorTheme';

export const ColumnWrapper = styled.div`
display: flex;
flex-direction: column;
width: 370px;
margin-right: 10px;
flex-shrink: 0;
`

export const Wrapper = styled.div`
height: calc(100vh - 250px);
background: ${colorTheme.bg};
padding: 12px 11px;
overflow-y: scroll;
button {
  height: auto;
}
`

export const BtnWrapper = styled.div`
margin-top: 7px;
`