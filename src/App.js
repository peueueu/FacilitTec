import React from 'react';
import GlobalStyle from './styles/global';
import Layout from './Components/Layout';
import Title from './Components/Title';
import Search from './Components/Search';
import ColumnContainer from './Components/ColumnContainer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <Title title="Facilit Teste" />
        <Search />
        <ColumnContainer />
      </Layout>
    </div>
  );
}

export default App;
