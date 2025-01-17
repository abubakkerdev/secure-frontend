import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";
import ErrorMessage from "../components/error/ErrorMessage";
import { useEffect, useState } from "react";
import { useLoginUserMutation } from "../features/user/userAPISlice";
import { useDispatch, useSelector } from "react-redux";
import { setDynamicToken, setUserData } from "../features/user/userSlice";
import { ToastContainer, toast } from "react-toastify";

const loginToken = import.meta.env.VITE_LOGIN_TOKEN;
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

function Login() {
  const [loginUser, { data, isLoading, isSuccess, isError }] =
    useLoginUserMutation();

  const userAuth = useSelector((state) => state.userInfo.userLoginInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (el) => {
    let { name, value } = el.target;
    setErrorMessage("");
    if (value !== "") {
      setLoginError({ ...loginError, [name]: "" });
    }
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  useEffect(() => {
    if ("login" in userAuth) {
      if (userAuth.login) {
        navigate("/");
      }
    }
  }, [navigate, userAuth]);

  useEffect(() => {
    if (data !== undefined && !isError) {
      if ("success" in data) {
        dispatch(setUserData(getCookie("userAllInfo")));

        setLoginInfo({
          email: "",
          password: "",
        });

        toast.success(data.success.message, {
          position: "top-right",
          onClose: () => {
            dispatch(setDynamicToken(null));
            navigate("/");
          },
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        if (typeof data.error === "object") {
          if ("field" in data.error) {
            setLoginError({
              [data.error.field]: data.error.message,
            });
          } else {
            setErrorMessage(data.error.message);
          }
        } else {
          setErrorMessage(data.error); // check this
        }
      }
    }

    if (isError) {
      setErrorMessage("There was an server-side Error.");
    }
  }, [data, isSuccess, isError, navigate, dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    dispatch(setDynamicToken(loginToken));

    try {
      await loginUser({ ...loginInfo }).unwrap(); // Unwraps the response
      // console.log("User added successfully:", response);
    } catch (error) {
      // console.error("Error adding user:", error); // Catches the error directly
    }
  };

  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content  text-center">
          <h2>Login</h2>
          <form method="POST" onSubmit={handleLogin}>
            <div className=" form-group mt-3 ">
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                placeholder="Your Email"
                value={loginInfo.email}
              />

              {loginError?.email && <ErrorMessage message={loginError.email} />}
            </div>

            <div className="mb-4 mt-4 form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handleChange}
                value={loginInfo.password}
                placeholder="Your Password"
              />
              {loginError?.password && (
                <ErrorMessage message={loginError.password} />
              )}
              {errorMessage && <ErrorMessage message={errorMessage} />}
            </div>

            <div className="form-link">
              <Link to="/forgot" className="forgot-pass">
                Forgot password?
              </Link>
            </div>

            {isLoading ? (
              <div className="d-flex justify-content-center mt-3 mb-3">
                <div className="spinner-border" role="status"></div>
              </div>
            ) : (
              <div className="button-fieldC">
                <button className="button-fieldBTN">Login</button>
              </div>
            )}
          </form>
          <div className="form-link">
            <span>
              Don&apos;t have an account?{" "}
              <Link to="/registrar" className="link signup-link">
                Signup
              </Link>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}

export default Login;
