import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../navigation';
import Footer from '../footer';

import { routeConfig } from '../../routeConfig';

const App = () => {
  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          {Object.keys(routeConfig).map((routeKey, index) => {
            const Component = routeConfig[routeKey].component;
            const { exact, route, props } = routeConfig[routeKey];

            return <Route exact={exact} path={route} key={index} render={nProps => {
              const updatedProps = {
                ...nProps,
                ...props
              };
              return <Component {...updatedProps} />;
            }}
            />
          })}
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App;