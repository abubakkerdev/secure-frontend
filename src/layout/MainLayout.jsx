import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function MainLayout() {
  const userAuth = useSelector((state) => state.userInfo.userLoginInfo);
  const navigate = useNavigate();


  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
