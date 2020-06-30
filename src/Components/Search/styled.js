import styled from 'styled-components';
import colorTheme from '../../styles/colorTheme';

export const Wrapper = styled.div`
`

export const SearchWrapper = styled.div`
display: flex;
margin-top: 17px;
height: 33px;
width: 100%;
`

export const SearchBar = styled.input`
  font-size: 20px;
  line-height: 24px;
  border: 1px solid ${colorTheme.inputBorder};
  border-radius: 4px;
  margin-right: 15px;
  width: 100%;
  max-width: 587px;
  padding: 10px;
  ::placeholder {
    color: ${colorTheme.placeHolder};
    font-style: italic;
    padding-left: 5px;
  }
  &:focus {
    outline: none;
  }
`

export const BtnFiltro = styled.button`
padding: 9px 10px;
display: flex;
align-items: center;
justify-content: space-around;
background: ${colorTheme.bg};
color: ${colorTheme.filter};
font-size: 15px;
text-transform: uppercase;
line-height: 18px;
border: none;
border-radius: 4px;
cursor: pointer;
&:focus {
  outline: none;
}
`