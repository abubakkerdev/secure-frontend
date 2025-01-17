import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Home() {


  const handleDelete = () => {
    console.log("Delete button clicked");
    toast.success("Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <section
        id="appointment"
        className="appointment section commonHeight light-background"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>Information Table</h2>
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
                  <div
                    role="group"
                    className="btn-group btn-group-sm commonBtn"
                  >
                    <Link to="/edit" className="btn btn-primary">
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="btn btn-danger"
                    >
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
                  <div
                    role="group"
                    className="btn-group btn-group-sm commonBtn"
                  >
                    <Link to="/edit" className="btn btn-primary">
                      Edit
                    </Link>
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

              <tr>
                <td colSpan={6} className="text-center">
                  <h4>Loading</h4>
                </td>
              </tr>
            </tbody>
          </table>
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
    </>
  );
}

export default Home;
