import {BrowserRouter as Router} from 'react-router-dom'
import SideNav from './components/SideNav'
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <SideNav/>
      </div>
    </Router>
  )
}

export default App
