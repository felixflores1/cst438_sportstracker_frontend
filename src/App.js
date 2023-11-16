// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import SportPage from './SportPage';

const App = () => {
  const [authToken, setAuthToken] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} setAuthToken={setAuthToken} />} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} authToken={authToken} />} />
        <Route path="/sport/:id" component={SportPage} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
