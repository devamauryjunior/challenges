import { useEffect, useState } from 'react'
import './App.css'
import Github from './components/Github/Github';

function App() {
  const [myInformation, setMyInformation] = useState([]);

  useEffect(() => {
    const url = "https://api.github.com/users/devamauryjunior";
    async function getMyDates() {
      const api = await fetch(url);
      const profile = await api.json();
      setMyInformation(profile)
    }
    getMyDates();
  }, [])

  return (
    <div className="App">
      <Github dates={myInformation}/>
    </div>
  )
}

export default App
