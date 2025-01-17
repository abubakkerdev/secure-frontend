import { Link } from "react-router-dom";
import "./css/Login.css";

function EmailConfirm() {
  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content  text-center">
          <h2>Email Confirm</h2>

          <p className="message-email">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="button-fieldC">
            <Link to="/login" className="button-fieldBTN">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmailConfirm;
