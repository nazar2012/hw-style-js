import './App.css'
import Dishes from './components/Dishes/Dishes'
import dishes from "./dishes.json"


function App() {
  return (
    <>
     <Dishes dishes={dishes}/>
    </>
  )
}

export default App
