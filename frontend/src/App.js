import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Browse from "./components/Browse";
import "./App.css";

const AdminLogin = lazy(() => import("./components/Admin/AdminLogin"));
const AdminHomePage = lazy(() => import("./components/Admin/AdminHomePage"));
const AdminUsers = lazy(() => import("./components/Admin/AdminUsers"));
const AdminAddAnnouncement = lazy(() =>
  import("./components/Admin/AdminAddAnouncement")
);

const UserLogin = lazy(() => import("./components/User/UserLogin"));
const UserHomePage = lazy(() => import("./components/User/UserHomePage"));
const UserRegister = lazy(() => import("./components/User/UserReg"));
const UserVillageAnnouncements = lazy(() =>
  import("./components/User/UserVillageAnnouncements")
);

const Applayout = () => {
  return (
    <div>
      <Browse />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    Element: <Applayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Browse />
          </Suspense>
        ),
      },
      {
        path: "/Adminlogin/",
        element: (
          <Suspense>
            <AdminLogin />
          </Suspense>
        ),
      },
      {
        path: "/userLogin/",
        element: (
          <Suspense>
            <UserLogin />
          </Suspense>
        ),
      },
      {
        path: "/admin/",
        element: (
          <Suspense>
            <AdminHomePage />
          </Suspense>
        ),
      },
      {
        path: "/userRegister",
        element: (
          <Suspense>
            <UserRegister />
          </Suspense>
        ),
      },
      {
        path: "/admin/users",
        element: (
          <Suspense>
            <AdminUsers />
          </Suspense>
        ),
      },
      {
        path: "/admin/addAnnouncement",
        element: (
          <Suspense>
            <AdminAddAnnouncement />
          </Suspense>
        ),
      },

      {
        path: "/user/",
        element: (
          <Suspense>
            <UserHomePage />
          </Suspense>
        ),
      },
      {
        path: "/user/userVillageAnnouncements/",
        element: (
          <Suspense>
            <UserVillageAnnouncements />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
