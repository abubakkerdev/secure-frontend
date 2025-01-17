import { Link } from "react-router-dom";

function ForgotError() {
  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content  text-center">
          <h2>Credential not match</h2>

          <div className="button-fieldC">
            <Link to="/" className="button-fieldBTN">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotError;
