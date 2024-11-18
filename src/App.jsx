import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./components/login";
import HomePage from "./pages/homepage";
import { useSelector } from "react-redux";
import About from "./components/skills";

const route = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  const blur = useSelector((state) => state.reviewSlice.isblur);

  return (
    <div className={blur ? "blur" : ""}>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
