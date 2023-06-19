import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-12">
          {" "}
          <img
            src="./images/admin.jpg"
            alt=""
            style={{ height: "400px", width: "500px" }}
          />
        </div>
        <div className="col-md-8 col-sm-12 fs-1">
          <div
            className="row justify-content-center align-item-center"
            style={{ marginTop: "70px", fontWeight: "bold" }}
          >
            <div className="col-4">
              <div>HAVMOR</div>
            </div>
            <div className="row justify-content-center m-3">
              <div className="col-4">
                <h1 className="text-danger mx-5">WELOCME</h1>
                <h1 className="text-black mx-5">ADMIN</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
      <div
          className="col-md-4 col-sm-12 ms-2 bg-danger"
          style={{ height: "200px", width: "200px"}}
        >
          <Nav.Link
            className="text-center align-item-center text-light"
            style={{ marginTop: "50%", fontWeight: "bold" }}
            as={Link}
            to={"/addproduct"}
          >
            Add Products
          </Nav.Link>
        </div>
        <div
          className="col-md-4 col-sm-12 ms-2 bg-danger"
          style={{ height: "200px", width: "200px"}}
        >
          <Nav.Link
            className="text-center align-item-center text-light"
            style={{ marginTop: "50%", fontWeight: "bold" }}
            as={Link}
            to={"/product-list"}
          >
            SEE ALL Products
          </Nav.Link>
        </div>
        <div
          className="col-md-4 col-sm-12 ms-2 bg-danger"
          style={{ height: "200px", width: "200px"}}
        >
          <Nav.Link
            className="text-center align-item-center text-light"
            style={{ marginTop: "50%", fontWeight: "bold" }}
            as={Link}
            to={"/user-list"}
          >
            SEE ALL USERS
          </Nav.Link>
        </div>
        <div
          className="col-md-4 col-sm-12 bg-success ms-4"
          style={{ height: "200px", width: "200px" }}
        >
          <Nav.Link
            className="text-center align-item-center"
            style={{ marginTop: "50%", fontWeight: "bold" }}
            as={Link}
            to={"/query-list"}
          >
            See All Complain
          </Nav.Link>
        </div>
      </div>
    </>
  );
}
export default AdminPage;
