import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import DriverRegister from "./pages/DriverRegister";
import RootLayout from "./layout/RootLayout";
import ErrorBoundary from "./pages/Error";
import UserRegister from "./pages/UserRegister";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/driver-register",
        element: <DriverRegister />,
      },
      {
        path: "/user-register",
        element: <UserRegister />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
