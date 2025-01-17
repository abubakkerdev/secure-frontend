import { Link } from "react-router-dom"

function EmailMessage() {
  return (
    <section className="container forms">
    <div className="form login">
      <div className="form-content  text-center">
        <h2>Email was Send</h2>

        <p className="message-email">Check your Mail.</p>
        <div className="button-fieldC">
            <Link to="/" className="button-fieldBTN">
              Back To Home
            </Link>
          </div>
      </div>
    </div>
  </section>
  )
}

export default EmailMessage