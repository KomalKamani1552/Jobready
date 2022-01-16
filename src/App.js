import logo from './logo.svg';
import './App.css';
import Home from './components/homePage';
import About from './components/about';
import {BrowserRouter, Route, Switch , useHistory } from "react-router-dom";
import Navigation from './components/navigation';
import Footer from './components/footer';
import Login from './components/login'
import Registration from './components/Registration';
import EmpList from './components/EmpList';
// import Test from './Test'

// import Viewdata from './components/Viewdata';

function App() {
  return (
      <div className="App">
         
        <BrowserRouter>
        <Navigation />
        <Switch>
        <Route path="/about" exact component={About}></Route>
        <Route path="/get-details" exact component={Login}></Route>
        <Route path="/registration" exact component={Registration}></Route>
        <Route path="/emplist" exact component={EmpList}></Route>
        <Route path="/register" exact></Route>
        <Route path="/" component={Home}/>
       
        </Switch>
        </BrowserRouter>
        <Footer />
        <test/>
      </div>
  );
}

export default App;
