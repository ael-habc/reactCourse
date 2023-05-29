import React, { useCallback, useState } from 'react';
import List from './List';

function App() {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);
  const getItems = useCallback( () => {
    return [num, num + 1, num + 2];
  },[num]);
  
  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  };
  return (
    <>
      <div style={theme}>
        <button onClick={() => setNum(num + 1)}>+</button>
        <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        <List getItems={getItems} />
      </div>
    </>
  );
}

export default App;
