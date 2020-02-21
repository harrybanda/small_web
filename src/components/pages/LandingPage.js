import React, { Component, Fragment } from "react";
import axios from "axios";
import logo from "../../images/logo.png";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";

const GOOGLE_FORM_NAME_ID = "entry.569883621";
const GOOGLE_FORM_EMAIL_ID = "emailAddress";
const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfp-VGAhfHnz1da4t9mACauVujyNPEt4FzCgF-zED3lC1tv1w/formResponse";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.sendMessage();
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  sendMessage = () => {
    const formData = new FormData();
    formData.append(GOOGLE_FORM_NAME_ID, this.state.name);
    formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email);
    axios
      .post(CORS_PROXY + GOOGLE_FORM_ACTION_URL, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      })
      .then(() => {
        this.setState({
          name: "",
          email: ""
        });
        alert("Thank you.");
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div className="landing">
        <Fragment>
          <section className="hero header">
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column is-two-fifths">
                    <img src={logo} alt="Small" width="150" />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className="title has-text-white is-1">
                      Grow Big With the Small App
                    </h1>
                    <br />
                    <h1 className="subtitle has-text-white is-4">
                      Access loans • Accept digital payments • Manage your
                      business
                    </h1>
                  </div>
                  <div className="column"></div>
                </div>
                <br />
                <br />
              </div>
            </div>
          </section>
          <section className="section">
            <br />
            <br />
            <br />
            <br />
            <div className="container">
              <div className="tile is-ancestor">
                <div
                  className="tile is-vertical is-7"
                  style={{ paddingLeft: "50px" }}
                >
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <div className="tile is-child">
                        <div className="tile is-child">
                          <img src={img2} alt="Small" width="300" />
                        </div>
                        <h1 className="subtitle has-text-white is-4">
                          From boutiques, to electronics stores
                        </h1>
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <div className="tile is-child">
                        <div className="tile is-child">
                          <img src={img1} alt="Small" width="300" />
                        </div>
                        <h1 className="subtitle has-text-white is-4">
                          From Barbershops to salons
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tile is-parent is-vertical">
                  <div className="tile is-child"></div>
                  <div className="tile is-child">
                    <h1 className="title has-text-white is-1 has-text-centered">
                      Join Wait list
                    </h1>
                    <h1 className="subtitle has-text-white is-4 has-text-centered">
                      Be the first to know when we launch
                    </h1>
                    <form onSubmit={this.handleSubmit}>
                      <div className="field">
                        <div className="control">
                          <input
                            required
                            className="input is-medium"
                            type="text"
                            placeholder="First and Last Name"
                            name="names"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <input
                            required
                            className="input is-medium"
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <p className="control">
                          <button
                            type="submit"
                            className="button is-success is-medium is-fullwidth"
                          >
                            Join
                          </button>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="footer" style={{ background: "#3c74db" }}>
            <div className="content has-text-centered has-text-white">
              <p>&copy; Copyright 2020, small.</p>
            </div>
          </footer>
        </Fragment>
      </div>
    );
  }
}

export default LandingPage;
