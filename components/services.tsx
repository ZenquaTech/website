import React from "react";
import Image from "next/image";
export const services = () => {
  return (
    <div>
      <div className="sub_page">
        <div className="hero_area">
          {/* <!-- header section strats --> */}
          <header className="header_section">
            <div className="container">
              <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
                <a className="navbar-brand mr-5" href="index.html">
                  <Image src="images/logo.png" alt="" />
                  <span>Fregg</span>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav  ">
                      <li className="nav-item ">
                        <a className="nav-link" href="index.html">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">
                          {" "}
                          About{" "}
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="service.html">
                          {" "}
                          Service{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Contact us
                        </a>
                      </li>
                    </ul>
                    <form className="form-inline">
                      <button
                        className="btn  my-2 my-sm-0 nav_search-btn"
                        type="submit"
                      ></button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          {/* <!-- end header section --> */}
        </div>

        <div className="body_bg layout_padding">
          {/* <!-- service section --> */}

          <section className="service_section ">
            <div className="container">
              <div className="heading_container">
                <h2>At Your Service</h2>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="box">
                    <div className="img-box">
                      <Image src="images/s-1.png" alt="" />
                    </div>
                    <h4>Written with Love</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content t,
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box align-items-end align-items-md-start text-right text-md-left">
                    <div className="img-box">
                      <Image src="images/s-2.png" alt="" />
                    </div>
                    <h4>Fast Turnaround</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="box">
                    <div className="img-box">
                      <Image src="images/s-3.png" alt="" />
                    </div>
                    <h4>Up to Date</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like now use Lorem Ipsum as their default model text,
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box align-items-end align-items-md-start text-right text-md-left">
                    <div className="img-box">
                      <Image src="images/s-4.png" alt="" />
                    </div>
                    <h4>Premium Content</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- end service section --> */}
        </div>
        {/* <!-- info section --> */}

        <section className="info_section layout_padding">
          <div className="footer_contact">
            <div className="heading_container">
              <h2>Contact Us</h2>
            </div>
            <div className="box">
              <a href="" className="img-box">
                <Image src="images/location.png" alt="" className="img-1" />
                <Image src="images/location-o.png" alt="" className="img-2" />
              </a>
              <a href="" className="img-box">
                <Image src="images/call.png" alt="" className="img-1" />
                <Image src="images/call-o.png" alt="" className="img-2" />
              </a>
              <a href="" className="img-box">
                <Image src="images/envelope.png" alt="" className="img-1" />
                <Image src="images/envelope-o.png" alt="" className="img-2" />
              </a>
            </div>
          </div>
        </section>

        {/* <!-- end info section --> */}

        {/* <!-- footer section --> */}
        <section className="container-fluid footer_section">
          <p>
            {/* Copyright &copy; 2019 All Rights Reserved By */}
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </section>
        {/* <!-- footer section --> */}

        <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
      </div>
    </div>
  );
};
