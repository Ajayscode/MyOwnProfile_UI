import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./components/login";
import HomePage from "./pages/homepage";
import { useSelector } from "react-redux";
import About from "./components/about";
import Dashboard from "./components/Dashboard";
import Education from "./components/Education";
import Skills from "./components/skills";
import Contact from "./components/contact";
const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      { path: "about", element: <About /> },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
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
