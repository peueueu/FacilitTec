import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BoardTitle } from './styled';

const Title = props => {

  const [mainTitle, setTitle] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/boards')
      .then(res => {
        console.log(res);
        setTitle(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])



  return (
    <BoardTitle>
      {mainTitle.map(index => {
        return index.title
      })}
    </BoardTitle>
  )
};

export default Title;