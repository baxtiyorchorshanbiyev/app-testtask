import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePages from './components/Homepages/HomePages';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
function App() {
  return (
  <BrowserRouter >
    <Router>
    <Navbar />
      <Switch>
        <Route path="/" exact component={HomePages}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/menu" exact component={Menu} ></Route>
        <Route path="/features" exact component={Features}></Route>
        <Route path="/contact" exact component ={Contact} ></Route>
      </Switch>
      <Footer />
    </Router>
  </BrowserRouter>
  );
}

export default App;
