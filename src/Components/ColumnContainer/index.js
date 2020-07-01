import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Column from '../Column';
import BtnAdd from '../BtnAdd';
import Card from '../Card';
import { ColumnWrapper } from './styled';


const ColumnContainer = props => {

  const [columnsArr, setColumnState] = useState([]);

  const [addColumn, setAddColumn] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/boards')
      .then(res => {
        setAddColumn(res.data[0].columns);
        setColumnState(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const columnAdd = (e) => {
    e.preventDefault();

    setAddColumn(addColumn => [...addColumn, {
      "id": (Math.floor(Math.random() * 100) + 10),
      "title": "",
      "cards": []
    }]);

    axios.patch('http://localhost:4000/boards/1', {
      "columns": [...addColumn],
    }).catch(err => {
      console.log(err);
    })
  };

  // useEffect(() => {

  // })

  const addTask = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <ColumnWrapper>
      {columnsArr.map(post => {
        return (
          post.columns.map(coluna => {
            return (
              <Column key={coluna.id} columnTitle={coluna.title}>
                {coluna.cards.map(card => {
                  return <Card key={card.id} title={card.title} tag={card.tags.map(tag => <li>{tag}</li>)} />
                })}
                <BtnAdd add={addTask} name="Task" key={`btnColumn-${coluna.id}`} />
              </Column>
            )
          })
        );
      })}
      <BtnAdd add={columnAdd} name="Coluna" />
    </ColumnWrapper>
  )
}

export default ColumnContainer;