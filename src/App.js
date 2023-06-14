import './App.css';
import BlogDetails from './components/BlogDetails';
import Create from './components/Create';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Notfound from './components/NotFound';
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/blog:id">
          <BlogDetails/>
        </Route>
        <Route path="*">
          <Notfound/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
