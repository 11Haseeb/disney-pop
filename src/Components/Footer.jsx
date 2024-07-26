import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer(props) {
  const { mode } = props;
  const bgColor = mode === "light" ? "light" : "dark";
  const textColor = mode === "light" ? "text-dark" : "text-light";
  const footerBgColor =
    mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)";

  return (
    <MDBFooter
      bgColor={bgColor}
      className={`text-center text-lg-start text-muted ${textColor}`}
    >
      <section
        className={`d-flex justify-content-center justify-content-lg-between p-4 border-bottom ${textColor}`}
      >
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100092188118551"
            className="me-4 text-reset"
          >
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="https://x.com/Haseeb588432261" className="me-4 text-reset">
            {/* <MDBIcon color="secondary" fab icon="X" /> */}X
          </a>
          {/* <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a> */}
          <a
            href="https://www.instagram.com/haseeb_ahmad_47/"
            className="me-4 text-reset"
          >
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          {/* <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a> */}
          <a href="https://github.com/11Haseeb" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className={`text-uppercase fw-bold mb-4 ${textColor}`}>
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                DisneyPop
              </h6>
              <p className={textColor}>
                Welcome to our <b>Disney Pop</b> platform where you will found
                your favourite disney shows and products.
              </p>
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className={`text-uppercase fw-bold mb-4 ${textColor}`}>
                Products
              </h6>
              <p>
                <a href="#!" className={`text-reset`}>
                  <span className={textColor}>Laravel</span>
                </a>
              </p>
              <p>
                <a href="#!" className={`text-reset`}>
                  <span className={textColor}>Vue</span>
                </a>
              </p>
              <p>
                <a href="#!" className={`text-reset`}>
                  <span className={textColor}>Angular</span>
                </a>
              </p>
              <p>
                <a href="#!" className={`text-reset`}>
                  <span className={textColor}>React</span>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className={`text-uppercase fw-bold mb-4 ${textColor}`}>
                Useful links
              </h6>
              <p>
                <a href="#!" className={`text-reset`}>
                  <span className={textColor}>Prices</span>
                </a>
              </p>
              <p>
                <a href="#!" className={`text-reset`}>
                  <span className={textColor}>Settings</span>
                </a>
              </p>
              <p>
                <a href="#!" className={`text-reset`}>
                  <span className={textColor}>Orders</span>
                </a>
              </p>
              <p>
                <a href="#!" className={`text-reset`}>
                  <span className={textColor}>Help</span>
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="4" lg="4" xl="4" className="mx-auto mb-md-0 mb-4">
              <h6 className={`text-uppercase fw-bold mb-4 ${textColor}`}>
                Contact
              </h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                <span className={`${textColor}`}>
                  Shalimar Park, Faisalabad, Pakistan
                </span>
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                <span className={textColor}>haseebahm76.a@gmail.com</span>
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" />
                <span className={textColor}> + 92 306 3799841</span>
              </p>
              {/* <p>
                <MDBIcon color="secondary" icon="print" className="me-3" />
                <span className={textColor}> + 01 234 567 89</span>
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className={`text-center p-4 ${textColor}`}
        style={{ backgroundColor: footerBgColor }}
      >
        © 2024 Copyright:
        <a className={`text-reset fw-bold ${textColor}`} href="/home">
          DisneyPop
        </a>
      </div>
    </MDBFooter>
  );
}
