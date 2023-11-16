// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import SportPage from './components/SportPage';

const App = () => {
  const [authToken, setAuthToken] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/Auth/login" render={(props) => <Login {...props} setAuthToken={setAuthToken} />} />
        <Route path="/Auth/register" component={Register} />
        <Route path="/pages/dashboard" render={(props) => <Dashboard {...props} authToken={authToken} />} />
        <Route path="/pages/sport/:id" component={SportPage} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
