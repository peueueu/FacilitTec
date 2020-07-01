import styled from 'styled-components';
import colorTheme from '../../styles/colorTheme';

export const Wrapper = styled.div`
  background: #fff;
  padding: 19px 16px;
  border-radius: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, .16);
  margin-top: 10px;
  margin-bottom: 10px;
 `

export const CardTitle = styled.div`
  font-size: 15px;
  line-height: 18px;
  color: ${colorTheme.CardText};
`

export const InfoWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Tag = styled.ul`
display: flex;
li {
  background: ${colorTheme.bg};
  color: ${colorTheme.tagGray};
  padding: 5px;
  border-radius: 3px;
}
li:nth-of-type(2n) {
  margin-left: 5px;
}
`

export const Avatar = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background #000;
`