import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './containers/navigation';
import Footer from './containers/footer';

import Homepage from './views/Homepage';
import Login from './views/Login';
import About from './views/About';
import Pricing from './views/Pricing';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';

dotenv.config();

const AppWrapper = () => {
  return (
    <>
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/pricing" component={Pricing} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
