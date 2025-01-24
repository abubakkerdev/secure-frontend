import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const getCookie = (cookieName) => {
  let cookieValue = document.cookie
    .split(";")
    .map(
      (el) =>
        decodeURIComponent(el.trim()).split("=")[0] == cookieName &&
        JSON.parse(
          decodeURIComponent(el.trim())
            .split("=")[1]
            .split("s:")[1]
            .split("}")[0] + "}"
        )
    );
  return cookieValue.find((el) => el && el);
};

function MainLayout() {
  const dispatch = useDispatch();
  const userAuth = useSelector(
    (state) => state.userInfo.userLoginInfo.infoUser
  );
  const navigate = useNavigate();

  console.log("Output => ", getCookie("userAllInfo"));

  useEffect(() => {
    if (getCookie("userAllInfo")) {
      dispatch(setUserData(getCookie("userAllInfo")));
    } else {
      if (userAuth && "error" in userAuth) {
        if (!userAuth.error) {
          navigate("/login");
        }
      }
    }
  }, [userAuth, navigate, dispatch]);

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
