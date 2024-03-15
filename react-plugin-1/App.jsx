import './App.css'
import { useEffect } from 'react';
import { initPlugin } from './Form';
function App() {

  useEffect(() => {
    initPlugin('1', 'form');
    initPlugin('3', 'blog');
  }, [])

  return (
    <>
      <div id='1'></div>
      <div id='3'></div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;