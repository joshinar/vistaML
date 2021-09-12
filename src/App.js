import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';
import Solutions from './components/solutions/Solutions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/solutions' component={Solutions}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
