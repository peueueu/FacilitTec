import React from 'react';
import GlobalStyle from './styles/global';
import Layout from './Components/Layout';
import Title from './Components/Title';
import Search from './Components/Search';
import ColumnContainer from './Components/ColumnContainer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider className="App" backend={HTML5Backend}>
      <Layout>
        <Title />
        <Search />
        <ColumnContainer />
      </Layout>
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
