import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from '../Pages/HomePage/HomePage';
import Timeline from '../Pages/Timeline/Timeline';
import StatsPage from '../Pages/StatsPage/StatsPage';




export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>
            },
            {
                path: "/timeline",
                element: <Timeline></Timeline>
            },
            {
                path: "/stats",
                element: <StatsPage></StatsPage>
            }

        ],

        errorElement: <ErrorPage></ErrorPage>

    },

]);
