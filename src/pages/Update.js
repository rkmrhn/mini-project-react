import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Update() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
    address: "",
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };
  let handlerAddressAction = (e) => {
    let newuser = { ...user, address: e.target.value };
    setUser(newuser);
  };

  let registerAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND
      let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}&address=${user.address}`;

      let res = await fetch(url);

      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        username: "",
        password: "",
        email: "",
        mobile: "",
        address: "",
      };
      setUser(newuser);

      formRef.current.classList.remove("was-validated");

      alert("success");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-5 bg-light m-3 rounded-4">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="fs-2 m-3 text-success">Sign Up</div>

              <form ref={formRef} className="needs-validation">
                <label htmlFor="">Name*</label>
                <input
                  type="text"
                  className="form-control form-control-lg mb-2 mt-2"
                  placeholder="Enter username"
                  value={user.username}
                  onChange={handlerUsernameAction}
                  required
                />

                <label htmlFor="">Email*</label>
                <input
                  type="email"
                  className="form-control form-control-lg mb-2 mt-2"
                  placeholder="Enter Email"
                  value={user.email}
                  onChange={handlerEmailAction}
                  required
                />
                <label htmlFor="">Mobile Number*</label>
                <input
                  type="text"
                  className="form-control form-control-lg mb-2 mt-2"
                  placeholder="Enter mobile"
                  value={user.mobile}
                  onChange={handlerMobileAction}
                  required
                />
                <label htmlFor="">Address*</label>
                <input
                  type="text"
                  className="form-control form-control-lg mb-2 mt-2"
                  placeholder="Enter your address"
                  value={user.address}
                  onChange={handlerAddressAction}
                  required
                />

                <label htmlFor="">Password*</label>
                <input
                  type="password"
                  className="form-control form-control-lg mb-2"
                  placeholder="Enter password"
                  value={user.password}
                  onChange={handlerPasswordAction}
                  required
                />
                <input
                  type="button"
                  value="Register"
                  className="w-100 btn btn-lg btn-success mb-3 mt-3"
                  onClick={registerAction}
                />

                <div className="d-flex justify-content-center mb-3 ">
                  <Link to={"/login"}>Existing User, Login here</Link>
                </div>
              </form>

              {isSuccess && <div className="alert alert-success">Success</div>}
              {isError && <div className="alert alert-danger">Error</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
