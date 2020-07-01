import React, { useState, useEffect } from 'react';
import { Wrapper, CardTitle, InfoWrapper, Tag, Avatar } from './styled';
import { useDrag } from 'react-dnd';
import axios from 'axios';


const Card = props => {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })
  const [tags, setTags] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:4000/tags')
  //     .then(res => console.log(res))
  //     .catch(err => {
  //       console.log(err);
  //     })
  // })


  return (
    <Wrapper ref={dragRef}>
      <CardTitle>
        {props.title}
      </CardTitle>
      <InfoWrapper>
        <Tag>
          {props.tag}
        </Tag>
        <Avatar />
      </InfoWrapper>
    </Wrapper>
  )
}

export default Card;