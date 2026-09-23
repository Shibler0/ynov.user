import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import './index.css'
import {Provider} from "react-redux";
import {store} from "./stores/store.ts";
import axios from "axios";
import {type RecipeThumbnail, setRecipesThumbnail, setUsers} from "./stores/reducers/users.ts";
import type User from "./types/user.ts";
import {setLoggedUser} from "./stores/reducers/auth.ts";
import {routes} from "./routes/route.tsx";

interface UsersResponse {
    users: User[];
}

interface RecipesThumbnailResponse {
    recipes: RecipeThumbnail[];
    total: number;
    skip: number;
    limit: number;
}

const getLoggedUser = async () => {
    try {
        const url = "https://dummyjson.com/auth/me";
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        });
        store.dispatch(setLoggedUser(response.data));
    } catch (e) {
        localStorage.removeItem('token');
        store.dispatch(setLoggedUser(null));
    }
}

const getRecipesThumbnail = async () => {
    const url =
        "https://dummyjson.com/recipes?select=id,name,prepTimeMinutes,image";

    const response = await axios.get<RecipesThumbnailResponse>(url);

    store.dispatch(setRecipesThumbnail(response.data.recipes));
};

getRecipesThumbnail();

const getUsers = async () => {
    const url = "https://dummyjson.com/users";
    const response = await axios.get<UsersResponse>(url);
    store.dispatch(setUsers(response.data.users));
}

getUsers();

Promise.all([getUsers(), getLoggedUser()])

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
