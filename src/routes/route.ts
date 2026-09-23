


const routes : [
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
]