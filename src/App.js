import './App.css';
import { useState } from 'react';
import { Greeting } from './pages/Greeting';
import { Identify } from './pages/Identify';
import { Gift } from './pages/Gift';
function App() {
  const [page, setPage] = useState(0)
  
  if (page == 0) {
    return (
      <Greeting setPage={setPage}/>
    )
  } else if (page == 1) {
    return(
      <Identify setPage={setPage}/>
    )
  } else if (page == 2) {
    return (
      <Gift/>
    )
  }
}

export default App;
