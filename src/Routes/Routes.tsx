import { Outlet, createBrowserRouter } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import { SigninPage } from '../Components/Signin/Signin';
import ProfileUser from '../Components/ProfileUser/ProfileUser';
import { Error404 } from '../Components/Error404/Error404';
import { HomePage } from '../Components/Home/HomePage';
import { AboutPage } from '../Components/About/AboutPage';
import { StorePage } from '../Components/Store/StorePage';
import { FavoritesPage } from '../Components/Favorites/FavoritesPage';
import CheckoutPage from '../Components/CheckoutPage/CheckoutPage';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <NavBar />
            <Outlet />
            
        </>,
        errorElement: <Error404 />,
        children: [
            {
                path: '/profile',
                element: <>
                    <ProfileUser country='' email='' img="" username='' nickname='' />
                </>
            },
            {
                path: '/signin',
                element: <>
                    <SigninPage />
                </>
            },
            {
                path: '/home',
                element: <>
                    <HomePage />
                </>
            },
            {
                path: '/about',
                element: <>
                    <AboutPage />
                </>
            },
            {
                path: '/store',
                element: <>
                    <StorePage />
                </>
            },
            {
                path: '/favorites',
                element: <>
                    <FavoritesPage />
                </>
            },
            {
                path: '/checkout',
                element: <>
                <CheckoutPage />
                </>
            },
        ]
    },

]);



