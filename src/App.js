import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from "./components/Layout";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout><Home /></Layout>,
    },
    {
    path: "/movie/:id",
    element: <Layout><Detail /></Layout>,
    },
    {
    path: "/about",
    element: <Layout><About /></Layout>,
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;