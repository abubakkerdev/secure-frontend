function Some() {
  return (
    <>
      <section
        id="appointment"
        className="appointment section light-background"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>MAKE AN APPOINTMENT</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <form
            action="forms/appointment.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="col-md-4 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  required=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input
                  type="datetime-local"
                  name="date"
                  className="form-control datepicker"
                  id="date"
                  placeholder="Appointment Date"
                  required=""
                />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select
                  name="department"
                  id="department"
                  className="form-select"
                  required=""
                >
                  <option value="">Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
              </div>
              <div className="col-md-4 form-group mt-3">
                <select
                  name="doctor"
                  id="doctor"
                  className="form-select"
                  required=""
                >
                  <option value="">Select Doctor</option>
                  <option value="Doctor 1">Doctor 1</option>
                  <option value="Doctor 2">Doctor 2</option>
                  <option value="Doctor 3">Doctor 3</option>
                </select>
              </div>
            </div>

            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message (Optional)"
              ></textarea>
            </div>
            <div className="mt-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your appointment request has been sent successfully. Thank you!
              </div>
              <div className="text-center">
                <button type="submit">Make an Appointment</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Country</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Madaline Gardner</td>
                <td>ryjuwodoca@gmail.com</td>
                <td>Pa$$w0rd!</td>
                <td>Colombia</td>
                <td>
                  <div role="group" className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-primary">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Marcia Witt</td>
                <td>xugyr@gmail.com</td>
                <td>Pa$$w0rd!</td>
                <td>Australia</td>
                <td>
                  <div role="group" className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-primary">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Burke Mccall</td>
                <td>vizene@gmail.com</td>
                <td>Pa$$w0rd!</td>
                <td>Germany</td>
                <td>
                  <div role="group" className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-primary">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Wanda Giles</td>
                <td>jusytaxoji@gmail.com</td>
                <td>Pa$$w0rd!</td>
                <td>Spain</td>
                <td>
                  <div role="group" className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-primary">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>zarozemede</td>
                <td>xytetery@mailinator.com</td>
                <td>Pa$$w0rd!</td>
                <td>Denmark</td>
                <td>
                  <div role="group" className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-primary">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Martin Tillman</td>
                <td>fyhibuwax@gmail.com</td>
                <td>Pa$$w0rd!</td>
                <td>Spain</td>
                <td>
                  <div role="group" className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-primary">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6 ">
              <div className="row gy-4">
                <div className="col-lg-12">
                  <div
                    className="info-item d-flex flex-column justify-content-center align-items-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className="info-item d-flex flex-column justify-content-center align-items-center"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className="info-item d-flex flex-column justify-content-center align-items-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>

                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="4"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        id="appointment"
        className="appointment section light-background"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>MAKE AN APPOINTMENT</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <form
            action="forms/appointment.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="col-md-4 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  required=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input
                  type="datetime-local"
                  name="date"
                  className="form-control datepicker"
                  id="date"
                  placeholder="Appointment Date"
                  required=""
                />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select
                  name="department"
                  id="department"
                  className="form-select"
                  required=""
                >
                  <option value="">Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
              </div>
              <div className="col-md-4 form-group mt-3">
                <select
                  name="doctor"
                  id="doctor"
                  className="form-select"
                  required=""
                >
                  <option value="">Select Doctor</option>
                  <option value="Doctor 1">Doctor 1</option>
                  <option value="Doctor 2">Doctor 2</option>
                  <option value="Doctor 3">Doctor 3</option>
                </select>
              </div>
            </div>

            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message (Optional)"
              ></textarea>
            </div>
            <div className="mt-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your appointment request has been sent successfully. Thank you!
              </div>
              <div className="text-center">
                <button type="submit">Make an Appointment</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section
        id="appointment"
        className="appointment section light-background"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>MAKE AN APPOINTMENT</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <form
            action="forms/appointment.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="col-md-4 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  required=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input
                  type="datetime-local"
                  name="date"
                  className="form-control datepicker"
                  id="date"
                  placeholder="Appointment Date"
                  required=""
                />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select
                  name="department"
                  id="department"
                  className="form-select"
                  required=""
                >
                  <option value="">Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
              </div>
              <div className="col-md-4 form-group mt-3">
                <select
                  name="doctor"
                  id="doctor"
                  className="form-select"
                  required=""
                >
                  <option value="">Select Doctor</option>
                  <option value="Doctor 1">Doctor 1</option>
                  <option value="Doctor 2">Doctor 2</option>
                  <option value="Doctor 3">Doctor 3</option>
                </select>
              </div>
            </div>

            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message (Optional)"
              ></textarea>
            </div>
            <div className="mt-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your appointment request has been sent successfully. Thank you!
              </div>
              <div className="text-center">
                <button type="submit">Make an Appointment</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Some;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import logo from '/img/logo.jpg'
// import './App.css'
