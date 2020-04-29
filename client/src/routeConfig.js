import Login from './views/Login';
import Signup from './views/Signup';
import Profile from './views/Profile';
import Home from './views/Home';
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
    component: Home,
    route: '/',
    exact: true
  },
  boardPage: {
    component: Home,
    route: '/board/:id',
    exact: true
  },
  notFoundPage: {
    component: NotFound,
    route: '/'
  }
};