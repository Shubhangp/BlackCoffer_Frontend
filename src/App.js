import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./Components/Authentication/Authentication";
import Dashboard from "./Components/Dashboard/Dashboard";
import Body from "./Components/Body";
import { QueryClient, QueryClientProvider,  } from "react-query";
import { Provider } from "react-redux";
import store from './Utils/store';

const queryClient = new QueryClient();
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Authentication />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={appRouter} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;