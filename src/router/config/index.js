import DummyScreen from '../../container/dummyContainer';
import HomeScreen from '../../component/home';
import WithPage from '../../hoc/withPage';
import WithHomeLogin from '../../hoc/withHomeLogin';
import Login from '../../component/login';
import SignUp from '../../component/sign up';

export const ROUTES = [
    {
        name: 'dummy',
        path: '/component/dummy',
        Component: WithPage(DummyScreen),
    },
    {
        name: 'home',
        path: '/component/home',
        Component: WithPage(HomeScreen),
    },

    // WithHomeLogin
    {
        name: 'login',
        path: '/component/login',
        Component: WithPage(WithHomeLogin(Login)),
    },
    {
        name: 'sign up',
        path: '/component/sign up',
        Component: WithPage(SignUp),
    }
]