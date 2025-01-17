import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/error/ErrorMessage";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAddUserMutation } from "../features/user/userAPISlice";
import "./css/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { setDynamicToken } from "../features/user/userSlice";

const registrationToken = import.meta.env.VITE_REGISTRATION_TOKEN;

function Registration() {
  const [addUser, { data, isLoading, isSuccess, isError }] =
    useAddUserMutation();

  const userAuth = useSelector((state) => state.userInfo.userLoginInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerInfo, setRegisterInfo] = useState({
    uname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [registerError, setRegisterError] = useState({
    uname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (el) => {
    let { name, value } = el.target;
    setErrorMessage("");
    if (value !== "") {
      setRegisterError({ ...registerError, [name]: "" });
    }
    setRegisterInfo({ ...registerInfo, [name]: value });
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
        setRegisterInfo({
          uname: "",
          email: "",
          password: "",
          cpassword: "",
        });

        toast.success(data.success.message, {
          position: "top-right",
          onClose: () => {
            dispatch(setDynamicToken(null));
            navigate("/login");
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
            setRegisterError({
              [data.error.field]: data.error.message,
            });
          } else {
            setErrorMessage(data.error.message);
          }
        } else {
          setErrorMessage(data.error);
        }
      }
    }

    if (isError) {
      setErrorMessage("There was an server-side Error.");
    }
  }, [data, isSuccess, isError, navigate, dispatch]);

  // Both is work. But async-await is good code by AI
  // const handleRegistration = (e) => {
  //   e.preventDefault();
  //   setErrorMessage("");
  //   addUser({
  //     ...registerInfo,
  //   });
  // };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    dispatch(setDynamicToken(registrationToken));

    try {
      await addUser({
        ...registerInfo,
      }).unwrap(); // Unwraps the response
      // console.log("User added successfully:", response);
    } catch (error) {
      // console.error("Error adding user:", error); // Catches the error directly
    }
  };

  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content  text-center">
          <h2>Signup</h2>
          <form method="POST" onSubmit={handleRegistration}>
            <div className="mb-4 mt-4 form-group">
              <input
                type="text"
                name="uname"
                className="form-control"
                placeholder="Your Name"
                onChange={handleChange}
                value={registerInfo.uname}
              />
              {registerError?.uname && (
                <ErrorMessage message={registerError.uname} />
              )}
            </div>

            <div className=" form-group mt-3 ">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                value={registerInfo.email}
              />
              {registerError?.email && (
                <ErrorMessage message={registerError.email} />
              )}
            </div>

            <div className="mb-4 mt-4 form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Your Password"
                onChange={handleChange}
                value={registerInfo.password}
              />
              {registerError?.password && (
                <ErrorMessage message={registerError.password} />
              )}
            </div>

            <div className="mb-4 mt-4 form-group">
              <input
                type="password"
                name="cpassword"
                className="form-control"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={registerInfo.cpassword}
              />
              {registerError?.cpassword && (
                <ErrorMessage message={registerError.cpassword} />
              )}

              {errorMessage && <ErrorMessage message={errorMessage} />}
            </div>
            {isLoading ? (
              <div className="d-flex justify-content-center mt-3 mb-3">
                <div className="spinner-border" role="status"></div>
              </div>
            ) : (
              <div className="button-fieldC">
                <button className="button-fieldBTN">Signup</button>
              </div>
            )}
          </form>
          <div className="form-link">
            <span>
              Already have an account?{" "}
              <Link to="/login" className="link signup-link">
                Login
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

export default Registration;
