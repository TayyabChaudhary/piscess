import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage, Faqs, HomePage, CommingSoon, HomePageTwo } from "./pages";
import Footer from "./components/Footer/Footer";
import DemoThree from "./pages/HomePage/DemoThree/DemoThree";
// Import All Router components.
const routes = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/faqs",
    exact: false,
    element: <Faqs />,
  },
  {
    path: "/comming-soon",
    exact: false,
    element: <CommingSoon />,
  },
  {
    path: "/demo-02",
    exact: false,
    element: <HomePageTwo />,
  },
  {
    path: "/demo-03",
    exact: false,
    element: <DemoThree />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Footer />
    </>
  );
}

export default App;
