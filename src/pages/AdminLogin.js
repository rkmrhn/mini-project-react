import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    username: "",
    password: "",
  });

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let loginAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND :: ...
      let url = `http://localhost:4000/Admin-login-by-get?username=${user.username}&password=${user.password}`;
      let res = await fetch(url);

      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }

      localStorage.setItem("loginStatus", "true");
      navigate("/AdminPage", { replace: true });
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "600px" }}
      >
        <div className="col-sm-12 col-md-4 bg-light rounded-3">
          <div className="m-4">
            <div className="fs-2 text-success "><b>Sign In</b></div>
            <div>Stay Updated On Your Orders</div>
          </div>

          <div className="m-4">
            <form ref={formRef} className="needs-validation">
              <input
                type="text"
                className="form-control form-control-lg mt-4 "
                placeholder="Enter Admin username"
                value={user.username}
                onChange={handlerEmailAction}
                required
              />

              <input
                type="password"
                className="form-control form-control-lg mt-4"
                placeholder="Enter password"
                value={user.password}
                onChange={handlerPasswordAction}
                required
              />

              <input
                type="button"
                value="Login"
                className="w-100 btn btn-lg btn-success mt-4"
                onClick={loginAction}
              />
              <div className="d-flex justify-content-center mt-4 ">
                <Link to={"/home"}>Goto | HOME</Link>
              </div>
            </form>
          </div>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
