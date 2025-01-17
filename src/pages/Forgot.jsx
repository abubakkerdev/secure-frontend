import "./css/Login.css";

function Forgot() {
  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content  text-center">
          <form action="#">
            <div className=" form-group mt-3 ">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required=""
              />
            </div>
            <div className="button-fieldC">
              <button className="button-fieldBTN">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Forgot;
