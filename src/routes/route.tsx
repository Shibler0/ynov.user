import type {RouteObject} from "react-router";
import App from "../App.tsx";
import Connection from "../pages/Connection.tsx";
import NotFound from "../pages/NotFound.tsx";
import RecipeDetails from "../pages/Recipe-details.tsx";
import UserDetails from "../pages/User-details.tsx";
import UserList from "../pages/UserList.tsx";
import Username from "../pages/Username.tsx";
import Userprofile from "../pages/Userprofile.tsx";
import GuestRoute from "./GuestRoute.tsx";
import Layout from "./Layout.tsx";

export const routes: RouteObject[] = [
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <App/>,
            },
            {
                path: "/userlist",
                element: <UserList/>,
            },
            {
                path: "/user/:username",
                element: <Username/>,
            },
            {
                path: "/recipedetails/:id",
                element: <RecipeDetails/>,
            },
            {
                path: "/userdetails/:id",
                element: <UserDetails/>,
            },
            {
                path: "/login",
                element: (
                    <GuestRoute>
                        <Connection/>
                    </GuestRoute>
                ),
            },
            {
                path: "/userprofile/:id",
                element: <Userprofile/>,
            },
            {
                path: "*",
                element: <NotFound/>,
            },
        ],
    },
];
