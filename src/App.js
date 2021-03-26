import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Quran from './component/content/quran'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Quran />

        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
