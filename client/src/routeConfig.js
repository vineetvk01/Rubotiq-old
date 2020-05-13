import Login from './views/Login';
import Signup from './views/Signup';
import Profile from './views/Profile';
import Dashboard from './views/Dashboard';
import Settings from './views/Settings';
import NotFound from './views/NotFound';

export const routeConfig = {
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
  profilePage: {
    component: Profile,
    route: '/profile/:username',
    exact: true
  },
  userHomePage: {
    component: Dashboard,
    route: '/',
    exact: true
  },
  boardPage: {
    component: Settings,
    route: '/settings',
    exact: true
  },
  notFoundPage: {
    component: NotFound,
    route: '/'
  }
};