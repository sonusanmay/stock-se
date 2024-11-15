import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Adminhome from "./pages/adminhome";
import Userhome from "./pages/userhome";
import UserNews from "../src/components/user-news/userNews";
import "../src/components/user-news/userNews.css";
// import User from "./pages/UserDashboard";

import NewsUpdate from "../src/components/admin-newsupdate/newsupdate";
import "../src/components/admin-newsupdate/newsupdate.css";
import News from "../src/components/admin-news/news";
import "../src/components/admin-news/news.css";
const router = createBrowserRouter([
  {
    path: "/", // Root path renders Home by default
    element: <Adminhome/>,
  },
  {
    path: "home", // Root path renders Home by default
    element: <Adminhome />,
  },
 
  {
    path: "userhome",
    element: <Userhome />,
  },
 
       
  {
    path: "userNews",
    element: <UserNews />,
  },

  {
    path: "newsupdate",
    element: <NewsUpdate />,
  },
  {
    path: "news",
    element: <News />,
  },
 
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
