import React, { Component } from "react";
import team from "../../team.json";
import apple from "../../images/apple.png";
import google from "../../images/google.png";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className="hero header-image is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-2 has-text-white text-wrap-header">
                Grow big with Small.
              </h1>
              <br />
              <h2 className="subtitle has-text-white is-6 text-wrap-header">
                Small enables pharmaceutical and consumer packaged goods
                companies to sell and deliver to thousands of small shops across
                Zambia, Malawi and Mozambique.
              </h2>
              <div className="buttons">
                <a className="button drive" href="/">
                  <span>Partner Sign up</span>
                  <span className="icon">
                    <i className="fas fa-angle-right" />
                  </span>
                </a>
                <a className="button ship is-outlined is-white" href="/">
                  <span>Shop Sign up</span>
                  <span className="icon">
                    <i className="fas fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div
                  class="column is-flex"
                  style={{ justifyContent: "center" }}
                >
                  {" "}
                  <img src={img1} alt="Small" width="300" />
                </div>
                <div class="column">
                  {" "}
                  <h2 class="subtitle is-5 has-text-grey">
                    Shops can now order inventory at affordable rates and have
                    them delivered directly to their shops.
                  </h2>
                  <button class="button is-outlined">Shop sign up</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="hero" style={{ background: "#3c74db" }}>
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column">
                  {" "}
                  <h2 class="subtitle is-5 has-text-white">
                    Consumer packaged goods companies can reach thousands of
                    small shops without building their own distribution network.
                  </h2>
                  <button class="button is-outlined">Partner sign up</button>
                </div>
                <div
                  class="column is-flex"
                  style={{ justifyContent: "center" }}
                >
                  {" "}
                  <img src={img2} alt="Small" width="300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="hero has-text-centered has-background-light">
          <div class="hero-body">
            <div class="container">
              <h2 class="subtitle is-5 has-text-grey">
                Small is a team that is dedicated to solving big problems while
                emphasising a great quality of life for its employees. We are
                based in Nairobi and have offices in Zambia, and are launching
                Malawi and Mozambique soon. Come join us.
              </h2>
              <button class="button  is-info">Job Openings</button>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="columns" style={{ paddingLeft: "30px" }}>
            <div className="column">
              <ul>
                <li className="subtitle is-6 has-text-white">
                  <a className="account-btn hvr-grow-shadow" href="/">
                    <span>Partner Sign up </span>
                  </a>
                </li>
                <li className="subtitle is-6 has-text-white">
                  <a className="apply-driver-btn" href="/">
                    <span>Shop Sign up</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li className="subtitle is-6 has-text-white">
                  <a>
                    <span ClassName="subtitle is-6 has-text-white">
                      About Us
                    </span>
                  </a>
                </li>
                <li className="subtitle is-6 has-text-white">
                  <a className="subtitle is-6 has-text-white" href="/">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <ul id="social">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter-square" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="level-right">
              <p className="level-item has-text-white">
                © {new Date().getFullYear()} Small Distribution Africa, Inc
              </p>
            </div>
          </nav>
        </footer>
      </>
    );
  }
}

const Team = ({ team }) =>
  team.map((mate) => (
    <div class="column is-4-desktop is-3-widescreen is-half-tablet is-centered">
      <Profile picture={mate.img} name={mate.name} position={mate.position} />
    </div>
  ));

const Profile = ({ picture, linkedin, name, position }) => (
  <div>
    <img
      src={picture}
      style={{
        "border-radius": "50%",
        border: "1px solid rgb(187, 187, 187)",
        height: "200px",
        width: "200px",
        textAlign: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
    <br />
    <h4 class="title is-5 has-text-grey-dark" style={{ textAlign: "center" }}>
      {name}
    </h4>
    <h4 class="subtitle is-6 has-text-grey" style={{ textAlign: "center" }}>
      {position}
    </h4>
  </div>
);

export default LandingPage;
