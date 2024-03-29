import App from "@/App";
import About from "@/components/About";
import Home from "@/components/Home";
import Dashboard from "@/components/dashboard/Dashboard";
import EventDashboard from "@/components/dashboard/EventDashboard";
import Main from "@/components/dashboard/Main";
import RecentEventDashboard from "@/components/dashboard/RecentEventDashboard";
import ServiceDashboard from "@/components/dashboard/ServiceDashboard";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  }, {
    path: '/admin',
    element: <Dashboard />, children: [
      { index: true, element: <Main /> },
      { path: '/admin/events', element: <EventDashboard /> },
      { path: '/admin/recent-event', element: <RecentEventDashboard /> },
      { path: '/admin/service', element: <ServiceDashboard /> }
    ]
  }
]);

export default routes;
