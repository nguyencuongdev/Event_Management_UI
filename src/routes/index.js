import { HomePage, DetailEventPage, LoginPage, SignupPage } from '../pages';
import { DefaultLayout, OnlyHeaderLayout } from '../layouts';

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
        layout: OnlyHeaderLayout
    },
    {
        path: '/signup',
        element: SignupPage,
        layout: OnlyHeaderLayout
    },
]

