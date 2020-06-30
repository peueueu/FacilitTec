import React from 'react';
import { Wrapper, CardText, InfoWrapper, Tag, Avatar } from './styled'


const Card = props => (
  <Wrapper>
    <CardText>
      {props.conteudo}
    </CardText>
    <InfoWrapper>
      <Tag>
        {props.tag}
      </Tag>
      <Avatar />
    </InfoWrapper>
  </Wrapper>
)

export default Card;