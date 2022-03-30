import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState('pink')

  const changeCount = () => {
    setCount(prevState => prevState + 1)
  }

  const changeColor = () => {
    if(color === 'pink') {
      setColor('red')
    } else {
      setColor('pink')
    }
  }

  useEffect(() => {
    console.log('useEffect mounted')
  }, [])

  useEffect(() => {
    console.log('change')
  }, [color])

  return (
    <div>
      <button onClick={changeCount}>Change Count</button>
      {count}
      <button onClick={changeColor}>ChangeColor</button>
      {color}
    </div>
  );
}

export default App;
