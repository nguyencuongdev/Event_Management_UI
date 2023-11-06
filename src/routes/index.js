import { HomePage, DetailEventPage, LoginPage, SignupPage } from '../pages';
import { DefaultLayout } from '../layouts';

export const public_route = [
    {
        path: '/',
        element: HomePage,
        layout: DefaultLayout
    },
    {
        path: '/event/detail/:event_slug',
        element: DetailEventPage,
        layout: DefaultLayout
    },
    {
        path: '/login',
        element: LoginPage,
        layout: null
    },
    {
        path: '/signup',
        element: SignupPage,
        layout: null
    },
]

