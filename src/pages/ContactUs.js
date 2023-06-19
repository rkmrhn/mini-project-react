import Query from "./Query";
function ContactUs() {
  return (
    <>
      <div className="row">
        <img src="./images/contact-us-banner.jpg" alt="" />
      </div>
      <hr />
      <div className="row">
      <div className="col-md-9 col-sm-12 ms-5 text-danger">
        <h2>Let’s start a conversation.</h2>
        <h2>We’d love to hear from you!</h2>
        <h6 className="text-dark my-3">
          Browse our directory of service providers, or post a request and have
          providers respond to you directly. If you'd like to offer your own
          services, sign up today.
        </h6>
      </div>
    </div>
    <hr />

    {/**addind the contact column */}

    <div className="row justify-content-between mx-4">
      <div className="col-lg-4 col-sm-12 my-3">
        <div>
          <div className="d-flex text-danger">
            <div>
              <h3><i className="fa fa-phone"></i></h3>
            </div>
            <div><h4>Talk to Our Team Member</h4></div>
          </div>
          <div className="mx-2">022 4246 0606</div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 my-3">
        <div>
          <div className="d-flex text-danger">
            <div>
              <h3><i className="fa fa-building"></i></h3>
            </div>
            <div><h4>Come Say Hello</h4></div>
          </div>
          <div className="mx-2">
            2nd floor, Commerce House 4, besides shell petrol pump,
            PrahladnagarAnandnagar road, Ahmedabad-380015, Corporate office :
            079 4020 9000
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 my-3">
        <div>
          <div className="d-flex text-danger">
            <div>
              <h3><i className="fa fa-envelope"></i></h3>
            </div>
            <div><h4>Share Your Thoughts</h4></div>
          </div>
          <div className="mx-2">havmor@gmail.com</div>
        </div>
      </div>
    </div>
    <hr />
    <Query/>
    </>
  );
}
export default ContactUs;
