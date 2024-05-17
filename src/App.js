
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Contact from './components/Contact';
import {BroweserRouter, Router, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header>
      <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          
            <Route path="/home" exact component={Home} />
            <Route path="/contact" component={Contact} />
        
        
         
        </main>
      </div>
      </Router>
      </header>
    </div>
  );
}

export default App;