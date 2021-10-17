import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header/Header"
// import Home from './components/Home/Home';
import DestinationDetail from './components/destinationDetail/DestinationDetail';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Hero></Hero>
          </Route>
          <Route path="/home">
            <Hero></Hero>
          </Route>
          <Route path="/:name">
            <DestinationDetail></DestinationDetail>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
