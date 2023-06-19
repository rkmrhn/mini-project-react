import { Button } from "bootstrap";

function Zulubar() {
  return (
    <>
      <div class="row">
        <img src="./images/product1.jpg" alt="" />
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="row justify-content-center my-5 h-50">
            <div class="col-sm-12 col-md-9">
              <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="./images/Zulubar1.jpg"
                      class="d-block w-100"
                      style={{ height: "400px" }}
                      alt="..."
                    />
                    <div class="carousel-caption d-sm-block d-md-block">
                      <h5></h5>
                      <p></p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="./images/Zulubar2.jpg"
                      class="d-block w-100"
                      style={{ height: "400px" }}
                      alt="..."
                    />
                    <div class="carousel-caption d-sm-block d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/**<!--adding about product and buy button in second part-->*/}
        <div class="col-md-6 col-sm-12">
          <div class="row justify-content-center">
            <div class="col-6">
              <h1>ZULUBAR</h1>
              <p>
                Are you ready for an Ice Cream that’s chocolaty, inside out?
                Zulubar comes with a milk chocolate coating and milk chocolate
                inside. Check out this bestseller today!
              </p>
              <a href="#" class="btn btn-danger btn-lg">
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Zulubar;
