import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Menubar from './components/Navigation/Menubar';
import Contact from './components/Home/Contact/Contact';
import TopMenu from './components/Navigation/TopMenu';
import OurFirm from './components/Home/OurFirm/OurFirm';
import Owner from './components/Home/UdderOwner/Owner';

function App() {
  return (
    <Router>
      <Menubar />
      {/* <TopMenu /> */}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/firm">
          <OurFirm />
        </Route>
        <Route path="/owner">
          <Owner />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
