import * as React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout.tsx";

import About from "../components/about.tsx";

const IndexPage = () => (
  <Layout>
    <section id="home" className="cd-hero js-cd-hero">
      <ul className="cd-hero__slider">
        <li className="cd-hero__slide js-cd-slide">
          <div className="cd-hero__content cd-hero__content--half-width">
            <h2>Communicate, safe as a whisper.</h2>
            <p>
              Tox puts you in touch with friends and family, with video chats
              and text messages, as safely as whispering in person.
            </p>
            <Link to="/download/" className="hvr-bounce-to-right cd-hero__btn">
              <i className="fa fa-apple"></i>
              Download qTox
            </Link>
            <Link
              to="/download/"
              className="hvr-bounce-to-right cd-hero__btn cd-hero__btn--secondary"
            >
              <i className="fa fa-android"></i>
              Get the app
            </Link>

            <div className="cd-hero__content--img">
              <img src="/uploads/qtox.png" className="img-fluid" alt="tech 2" />
            </div>
          </div>

          <div className="cd-hero__content cd-hero__content--half-width cd-hero__content--img">
            <img
              src="/uploads/app_iphone_01.png"
              className="img-fluid"
              alt="tech 1"
            />
          </div>
        </li>
      </ul>
    </section>

    {About()}
  </Layout>
);

export default IndexPage;