import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function MyFooter() {
  return (
    <>
      <div
        class="row justify-content-between mx-2 my-4"
        style={{ backgroundColor: "#f08080" }}
      >
        <div className="col-lg-4 col-sm-12 my-3">
          <div>
            <div className="d-flex text-danger">
              <div className="text-dark">
                <h5 className="text-light">CHOOSE YOUR PALATTE</h5>
                <div>
                  <Nav.Link as={Link} to={""}>
                    chocolate
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link as={Link} to={""}>
                    Dry Fruits
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link as={Link} to={""}>
                    Indian Traditional
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link as={Link} to={""}>
                    Fruits
                  </Nav.Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 my-3">
          <div>
            <div className="d-flex text-danger">
              <div className="text-dark">
                <h5 className="text-light">KNOW US BETTER</h5>
                <div className="text-dark">
                  <div>
                    <Nav.Link as={Link} to={""}>
                      About Havmor
                    </Nav.Link>
                  </div>
                  <div>
                    <Nav.Link as={Link} to={""}>
                      Awards
                    </Nav.Link>
                  </div>
                  <div>
                    <Nav.Link as={Link} to={""}>
                      Career
                    </Nav.Link>
                  </div>
                  <div>
                    <Nav.Link as={Link} to={""}>
                      Privacy Policy
                    </Nav.Link>
                  </div>
                  <div>
                    <Nav.Link as={Link} to={""}>
                      FAQ
                    </Nav.Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 my-3">
          <div>
            <div className="d-flex text-danger">
              <div className="text-dark">
                <h5 className="text-light">REACH OUT TO US</h5>
                <div>
                  <Nav.Link as={Link} to={""}>
                    Become Franchiser
                  </Nav.Link>
                </div>
                <h5 className="text-light my-3">OFFICE ADDRES</h5>
                <h6>
                  2nd floor, Commerce House 4, besides shell petrol pump,
                  Prahladnagar Anandnagar road, Ahmedabad-380015, Corporate
                  office : 079 4020 9000
                </h6>
                <h5 className="text-light">CUSTMORE CARE</h5>
                <h6 className="my-3 ">022 4246 0606</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyFooter;
