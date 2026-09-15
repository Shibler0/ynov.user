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
            }
        ]
    }

]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
