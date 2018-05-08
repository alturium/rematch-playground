import React from "react";
import { Link } from "react-router-dom";

const style = {
  header: {
    minHeight: "110px",
    backgroundColor: "#0046AD"
  },
  logoContainer: {
    display: "inline-block"
  },
  logoBox: {
    backgroundColor: "#0046AD",
    border: "2px solid #ffffff",
    display: "inline-flex"
  },
  schoolLogoContainer: {
    backgroundColor: "#ffffff",
    float: "left",
    padding: 5
  },
  schoolLogoContainerImg: {
    height: 40,
    width: "auto"
  },
  adminLogoContainer: {
    float: "left",
    paddingLeft: "5px",
    paddingRight: "5px",
    color: "#ffffff",
    fontSize: "30px",
    fontWeight: 700,
    fontFamily: '"Montserrat", sans-serif'
  },
  cccLogoContainer: {
    color: "#ffffff",
    fontFamily: '"Montserrat", sans-serif',
    fontSize: "18px",
    marginTop: 8,
    textTransform: "uppercase"
  },
  navbar: {
    background: "rgba(0, 0, 0, 0) none repeat scroll 0 0",
    border: "medium none",
    borderRadius: 0,
    marginBottom: 0,
    paddingTope: "2em"
  },
  clear: {
    clear: "both"
  }
};

const Header = () => {
  return (
    <header className="header mb-1" style={style.header}>
      <div className="container-fluid">
        <div className="row">
          <nav className={"navbar navbar-toggleable-md navbar-inverse "}>
            <Link className="navbarBrand" to="/">
              <div id="logoContainer" style={style.logoContainer}>
                <div id="logoBox" style={style.logoBox}>
                  <div
                    id="schoolLogoContainer"
                    style={style.schoolLogoContainer}
                  >
                    <img
                      src="/public/images/ccc-logo.png"
                      style={style.schoolLogoContainerImg}
                    />
                  </div>
                  <div id="adminLogoContainer" style={style.adminLogoContainer}>
                    <span style={{ fontWeight: 400, color: "#ffffff" }}>
                      CCC
                    </span>TestPage
                  </div>{" "}
                  {/* Replace with logo */}
                  <div style={style.clear} />
                </div>
                <div id="cccLogoContainer" style={style.cccLogoContainer}>
                  Schools
                </div>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;