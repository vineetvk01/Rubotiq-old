import Homepage from './views/Homepage';
import Login from './views/Login';
import Signup from './views/Signup';
import About from './views/About';
import Pricing from './views/Pricing';
import Profile from './views/Profile';
import Home from './views/Home';
import NotFound from './views/NotFound';

export const routeConfig = {
  indexPage: {
    component: Homepage,
    route: '/',
    props: {},
    exact: true
  },
  loginPage: {
    component: Login,
    route: '/login',
    exact: true
  },
  signupPage: {
    component: Signup,
    route: '/signup',
    exact: true
  },
  aboutPage: {
    component: About,
    route: '/about',
    exact: true
  },
  pricingPage: {
    component: Pricing,
    route: '/pricing',
    exact: true
  },
  profilePage: {
    component: Profile,
    route: '/profile/:username',
    exact: true
  },
  userHomePage: {
    component: Home,
    route: '/home',
    exact: true
  },
  notFoundPage: {
    component: NotFound,
    route: '/'
  }
};