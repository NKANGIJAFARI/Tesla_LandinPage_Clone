import Header from './components/Header'
import HomeScreen from "./pages/HomeScreen"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./Styles/main.scss"

import "./app.css"


function App() {
  return (
      
      
      <Router>
        <div className="App">
          <Header />
          <>
            <Switch>
              <Route path = "/">
                <HomeScreen />
              </Route>
            </Switch>  
          </>
        </div>
      </Router>
  );
}

export default App;
