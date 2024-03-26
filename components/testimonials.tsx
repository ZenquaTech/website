import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="counter-section-one lg-mt-100">
            <div className="container-counter">
              <div
                className="inner-container bg-color position-relative"
                data-aos="zoom-in"
              >
                <div className="counter-row justify-content-center">
                  <div
                    className="col-md-3 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="50"
                  >
                    <div className="counter-block-one text-center mb-20">
                      <div className="main-count">
                        <img src="/images/project.png" width="80" alt="" />
                      </div>
                      <div className="main-count">
                        <span className="counter">100</span>+
                      </div>
                      <p>projects delivered</p>
                    </div>
                    {/* <!-- /.counter-block-one --> */}
                  </div>
                  <div
                    className="col-md-3 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="counter-block-one text-center mb-20">
                      <div className="main-count">
                        <img src="/images/success.png" width="80" alt="" />
                      </div>
                      <div className="main-count">
                        <span className="counter">96</span>%
                      </div>
                      <p>enterprise client retention</p>
                    </div>
                    {/* <!-- /.counter-block-one --> */}
                  </div>
                  <div
                    className="col-md-3 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="350"
                  >
                    <div className="counter-block-one text-center mb-20">
                      <div className="main-count">
                        <img src="/images/client.png" width="80" alt="" />
                      </div>
                      <div className="main-count">
                        <span className="counter">95</span>+
                      </div>
                      <p>happy clients</p>
                    </div>
                    {/* <!-- /.counter-block-one --> */}
                  </div>
                  <div
                    className="col-md-3 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="counter-block-one text-center mb-20">
                      <div className="main-count">
                        <img src="/images/year.png" alt="" />
                      </div>
                      <div className="main-count">
                        <span className="counter" id="year"></span>2+
                      </div>
                      <p>years of experience</p>
                    </div>
                    {/* <!-- /.counter-block-one --> */}
                  </div>
                </div>
              </div>
              {/* <!-- /.inner-container --> */}
            </div>
          </div>

          <div className="technology-section pt-70">
            <div className="container">
              <div className="block-style-seventeen">
                <h3
                  style={{ fontSize: "2rem", fontWeight: "800" }}
                  className="p-5 text-center"
                  data-aos="zoom-in"
                >
                  Technologies We Work With
                </h3>
                <div className="technology-row row-cols-lg-5 row-cols-md-3 row-cols-2 d-flex flex-wrap justify-content-between">
                  <div
                    className="text-center p-3 block-style-eighteen"
                    data-aos="fade-up"
                  >
                    <img src="images/ror.png" alt="technology icon" />
                    Ruby On Rails
                  </div>
                  <div
                    className="text-center p-3 block-style-eighteen"
                    data-aos="fade-up"
                  >
                    <img src="/images/python.png" alt="technology icon" />
                    Python
                  </div>
                  <div
                    className="text-center p-3 block-style-eighteen"
                    data-aos="fade-up"
                  >
                    <img src="/images/django.png" alt="technology icon" />
                    Django
                  </div>
                  <div
                    className="text-center p-3 block-style-eighteen"
                    data-aos="fade-up"
                  >
                    <img src="/images/js.png" alt="technology icon" />
                    JavaScript
                  </div>
                  <div
                    className="text-center p-3 block-style-eighteen"
                    data-aos="fade-up"
                  >
                    <img src="/images/react.png" alt="technology icon" />
                    ReactJS
                  </div>
                  <div
                    className="text-center p-3 block-style-eighteen"
                    data-aos="fade-up"
                  >
                    <img src="/images/angular.png" alt="technology icon" />
                    AngularJS
                  </div>
                  <div
                    className="text-center p-3 block-style-eighteen"
                    data-aos="fade-up"
                  >
                    <img src="/images/html.png" alt="technology icon" />
                    HTML5
                  </div>
                  <div
                    className="text-center p-3 block-style-eighteen"
                    data-aos="fade-up"
                  >
                    <img src="/images/css.png" alt="technology icon" />
                    CSS3
                  </div>
                  <div
                    className="text-center p-3 block-style-eighteen"
                    data-aos="fade-up"
                  >
                    <img src="/images/redux.png" alt="technology icon" />
                    REDUX
                  </div>
                  <div
                    className="text-center p-3 block-style-eighteen"
                    data-aos="fade-up"
                  >
                    <img src="/images/bootstrap.png" alt="technology icon" />
                    Bootstrap
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Don't take our word for it</h2>
            <p className="text-xl text-gray-400">Words from our Client</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage03}
                    width={48}
                    height={48}
                    alt="Testimonial 01"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                {" "}
                "Partnering with Zenqua for our mobile app
                development project was the best decision we made. Their
                technical proficiency, seamless communication, and on-time
                delivery surpassed our expectations. The app has received
                excellent feedback from our users!"
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">David Thompson </cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  CTO of Parikya Enterprises
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage02}
                    width={48}
                    height={48}
                    alt="Testimonial 02"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
               
              We approached Zenqua for custom software development, and they delivered a solution that streamlined our operations and enhanced our productivity. Their professionalism, technical expertise, and post-launch support made the entire process seamless. Highly satisfied!"
                        
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Michael Johnson</cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  COO of diaspark Industries
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage01}
                    width={48}
                    height={48}
                    alt="Testimonial 03"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                
              "Working with the team at Precious Infosystem has been a pleasure from start to finish. Their collaborative approach, proactive communication, and ability to understand our business needs set them apart. They delivered a software solution that has transformed our business processes. Highly recommend their services!"                         
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Amanda Roberts</cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                 Operations Manager at taskup Corporation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
