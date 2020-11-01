import './App.css';
import {Login} from './components/Login';
import {Navbar} from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {React} from 'react';
import {Provider} from 'react-redux'
import {store} from './redux/redux'


function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navbar />
            <Switch>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
