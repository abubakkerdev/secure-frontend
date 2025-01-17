import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import UserAdd from "./pages/UserAdd";
import UserEdit from "./pages/UserEdit";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import EmailConfirm from "./pages/EmailConfirm";
import Forgot from "./pages/Forgot";
import ChangePassword from "./pages/ChangePassword";
import ForgotError from "./pages/ForgotError";
import EmailMessage from "./pages/EmailMessage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<UserAdd />} />
          <Route path="edit" element={<UserEdit />} />
        </Route>

        {/* <Route path="/school" element={<SchoolLayout />}>
          <Route index element={<SchoolHome />} />
          <Route path="about" element={<SchoolAbout />} />
          <Route
            path="user"
            element={<SchoolUser />}
            loader={user}
            errorElement={<SchoolUserError />}
          />
        </Route>
        <Route path="/school/*" element={<SchoolError />} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registration />} />
        <Route path="/emailconfirm" element={<EmailConfirm />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/forgot-error" element={<ForgotError />} />
        <Route path="/auth/mail" element={<EmailMessage />} />
        <Route path="/change-password/:token" element={<ChangePassword />} />
        <Route path="/*" element={<Error />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
