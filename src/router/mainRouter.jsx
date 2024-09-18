import {createBrowserRouter} from "react-router-dom";
import { Profile, Login } from '../layouts/index';
import { Calendar, CarRent, DarkMode, Dashboard, HelpCenter, Inbox, Insight, Reuimbers, Setting, Error} from '../pages/index';
import App from '../App'
const appChildren = [
  {
    path: "/",
    element: <Profile/>,
    children: [
      { path: "/", element: <Dashboard/> },
      { path: "/carrent", element: <CarRent/> },
      // { path: "/insight", element: <Insight/> },
      // { path: "/reuimbers", element: <Reuimbers/> },
      // { path: "/inbox", element: <Inbox/> },
      // { path: "/calendar", element: <Calendar/> },
      // { path: "/setting", element: <Setting/> },
      // { path: "/helpcenter", element: <HelpCenter/> },
      // { path: "/darkmode", element: <DarkMode/>}
    ]
  },
  { path: "/login", element: <Login/> },
  { path: "*", element: <Error/> }
]

export const router = createBrowserRouter([{path: "/", element: <App/>, children: [...appChildren]}]) 