import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Query() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    username: "",
    email: "",
    complain: "",
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

 

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

 
  let handlerComplainAction = (e) => {
    let newuser = { ...user, complain: e.target.value };
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
      let url = `http://localhost:4000/addquery?username=${user.username}&email=${user.email}&complain=${user.complain}`;

      let res = await fetch(url);

      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        username: "",      
        email: "",       
        complain: "",
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
        <div className="col-sm-12 col-md-8 m-3 rounded-4">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="fs-2 m-3 text-success">Submit your Query</div>

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
                <label htmlFor="">Query*</label>
                <textarea
                  className="form-control form-control-lg mb-2 mt-2"
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  value={user.complain}
                  placeholder="Enter Your Query"
                  onChange={handlerComplainAction}
                  required
                />

                <input
                  type="button"
                  value="SUBMIT"
                  className="w-100 btn btn-lg btn-success mb-3 mt-3"
                  onClick={registerAction}
                />

               
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

export default Query;
