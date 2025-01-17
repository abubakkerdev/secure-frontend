import ErrorMessage from "../components/error/ErrorMessage";
import "./css/Login.css";

function ChangePassword() {
  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content  text-center">
          <h2>Change Password</h2>
          <form action="#">
            <div className=" form-group mt-3 ">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Your password"
              />

              <ErrorMessage message="An example danger alert with an icon" />
            </div>

            <div className="mb-4 mt-4 form-group">
              <input
                type="password"
                name="cpassword"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>

            <div className="button-fieldC">
              <button className="button-fieldBTN">Change Password</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ChangePassword;
