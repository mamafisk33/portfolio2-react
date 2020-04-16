import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div id="bodyAbout" className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>About Us</BreadcrumbItem>
            </Breadcrumb>
            <h2 className="text-white">About Us</h2>
            <hr />
          </div>
        </div>

        {/*  -- Our Mission -- */}
        <div className="row row-content">
          <div className="col-sm-6 text-white font-weight-bold">
            <h3>Our Mission</h3>
            <p>
              We are all about you. You getting healthier. You getting stronger. You getting fitter.
            </p>
            <p>
              We are here to help. Whether with coaching, nutrition programs, Cross Fit classes,
              training, competions or your custom program designed to meet your goals.
            </p>
            <p>Set up a free consultation and we'll help you get started!</p>
          </div>
          <div className="col-md-6">
            <Card>
              <CardHeader className="bg-secondary text-white">
                <h3>Facts At a Glance</h3>
              </CardHeader>
              <CardBody>
                <dl className="row">
                  <dt className="col-6">Founded</dt>
                  <dd className="col-6">2017</dd>
                  <dt className="col-6">Members</dt>
                  <dd className="col-6">185</dd>
                  <dt className="col-6">Classed Per Week</dt>
                  <dd className="col-6">33</dd>
                  <dt className="col-6">Employees</dt>
                  <dd className="col-6">4</dd>
                  <dt className="col-6">Motto</dt>
                  <dd className="col-6">We are getting stronger!</dd>
                </dl>
              </CardBody>
            </Card>
          </div>
        </div>
        {/*  -- end Our Mission -- */}

        {/*  -- Our Staff -- */}
        <div className="row row-content">
          <div className="col">
            {/* -- span entire width -- */}
            <h3>Our Staff</h3>
            <div className="row row-content align-items-center justify-content-center">
              <div className="col-sm-4">
                <figure className="figure">
                  <div className="media">
                    <img
                      className="d-flex mr-3 img-thumbnail "
                      src="/assets/images/ironmortar_headshot-brendenthumb.jpg"
                      alt="Owner Brenden Loyer"
                    />
                  </div>
                  <figcaption className="figure-caption">
                    <h6>Brenden Loyer | Owner</h6>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-4">
                <figure className="figure">
                  <div className="media">
                    <img
                      className="d-flex mr-3 img-thumbnail "
                      src="/assets/images/ironmortar_headshot-ashleythumb.jpg"
                      alt="Owner Ashley Loyer"
                    />
                  </div>
                  <figcaption className="figure-caption">
                    <h6>Ashley Loyer | Owner</h6>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-4 md-3">
                <figure className="figure">
                  <div className="media">
                    <img
                      className="d-flex mr-3 img-thumbnail "
                      src="/assets/images/ironmortar_headshot-stacythumb.jpg"
                      alt="Coach Stacy Lewis"
                    />
                  </div>
                  <figcaption className="figure-caption">
                    <h6>Stacy Lewis | Coach</h6>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-4 md-3">
                <figure className="figure">
                  <div className="media">
                    <img
                      className="d-flex mr-3 img-thumbnail "
                      src="/assets/images/ironmortar_headshot-laycithumb.jpg"
                      alt="GM Layci Nelson"
                    />
                  </div>
                  <figcaption className="figure-caption">
                    <h6>Layci Nelson | GM + Nutrition Coach</h6>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* -- end Our Staff  -- */}
      </div>
    </div>
  );
}

export default About;
