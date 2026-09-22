import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import './index.css'
import UserList from "./pages/UserList.tsx";
import Username from "./pages/Username.tsx";
import Header from "./components/Header.tsx";
import {Outlet} from "react-router";
import App from "./App.tsx";
import RecipeDetails from "./pages/Recipe-details.tsx";
import UserDetails from "./pages/User-details.tsx";
import Connection from "./pages/Connection.tsx";
import Userprofile from "./pages/Userprofile.tsx";
import NotFound from "./pages/NotFound.tsx";
import {Provider} from "react-redux";
import {store} from "./stores/store.ts";
import axios from "axios";
import {type RecipeThumbnail, setRecipesThumbnail, setUsers} from "./stores/reducers/users.ts";
import type User from "./types/user.ts";

interface UsersResponse {
    users: User[];
}

interface RecipesThumbnailResponse {
    recipesThumbnail: RecipeThumbnail[];
}

const getUsers = async () => {
    const url = "https://dummyjson.com/users";
    const response = await axios.get<UsersResponse>(url);
    store.dispatch(setUsers(response.data.users));
}

getUsers();

const getRecipesThumbnail = async () => {
    const url = "https://dummyjson.com/recipes";
    const response = await axios.get<RecipesThumbnailResponse>(url);
    store.dispatch(setRecipesThumbnail(response.data.recipesThumbnail))
}

getRecipesThumbnail();

const Layout = () => (
    <>
        <Header/>
        <Outlet/>
    </>
)

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <App/>,
            },
            {
                path: "/userlist",
                element: <UserList/>,
            },
            {
                path: "/user/:username",
                element:<Username/>
            },
            {
                path: "/recipedetails/:id",
                element:<RecipeDetails/>
            },
            {
                path: "/userdetails/:id",
                element:<UserDetails/>
            },
            {
                path: "/login",
                element:<Connection/>
            },
            {
                path: "/userprofile/:id",
                element:<Userprofile/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }

]);

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
