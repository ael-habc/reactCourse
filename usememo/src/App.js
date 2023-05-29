import React, {useMemo,useState} from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(()=> {
    return slowDowdon(number);
}, [number]);
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  function slowDowdon(num){
    for(let i = 0; i < 1000000000; i++){}
    return num * 2;
  }
  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(!dark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

export default App;

