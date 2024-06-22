import { useCallback } from "react";
import PropTypes from "prop-types";
import "./signup-page.css";

const SignupPage = ({ className = "" }) => {
  const onSignupCardContainerClick = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  return (
    <div className="signup-page">
      <img
        className="unsplashft49qnfucq8-icon"
        alt=""
        src="/unsplashft49qnfucq8@2x.png"
      />
      <div className="signup-fields">
        <div className="signup-username">
          <div className="signup-username-field">
            <h1 className="tbn3">tbn</h1>
          </div>
          <div className="signup-card" onClick={onSignupCardContainerClick}>
            <div className="signup-card-background" />
            <div className="signup-title">
              <h1 className="sign-up">Sign Up</h1>
            </div>
            <div className="signup-email">
              <div className="signup-email-input">
                <div className="email">Email:</div>
                <div className="signup-email-field" />
              </div>
            </div>
            <div className="signup-password">
              <div className="signup-password-input">
                <div className="password">Password:</div>
                <div className="signup-password-field">
                  <div className="signup-confirm" />
                </div>
              </div>
            </div>
            <div className="signup-confirm-input">
              <h3 className="confirm">Confirm:</h3>
              <div className="signup-confirm-field">
                <div className="signup-action" />
              </div>
            </div>
            <div className="signup-button-label">
              <h3 className="submit">Submit</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="footer1">
        <div className="footer-content" />
        <div className="footer-brand">
          <div className="footer-brand-info">
            <div className="footer-brand-name">
              <div className="footer-brand-link">
                <div className="footer-brand-label">
                  <img className="group-icon2" alt="" src="/group.svg" />
                  <div className="bri4vn">bri4vn</div>
                </div>
                <div className="footer-social-links">
                  <img
                    className="logosfacebook-icon"
                    alt=""
                    src="/logosfacebook.svg"
                  />
                  <div className="footer-facebook-label">
                    <div className="tbn4">TBN</div>
                  </div>
                </div>
              </div>
              <div className="all-rights-reserved">All rights reserved</div>
            </div>
          </div>
          <div className="footer-social-icons">
            <img
              className="primetwitter-icon"
              alt=""
              src="/primetwitter@2x.png"
            />
            <div className="bieng3rd">bieng3rd</div>
          </div>
        </div>
        <div className="footer-company-links">
          <div className="company-about-us-container">
            <p className="company">COMPANY</p>
            <p className="about-us">
              <a
                className="about-us1"
                href="https://www.manypixels.co/about-us"
                target="_blank"
              >
                <span className="about-us2">About Us</span>
              </a>
            </p>
            <p className="careers">
              <a
                className="careers1"
                href="https://manypixels.breezy.hr/"
                target="_blank"
              >
                <span className="careers2">Careers</span>
              </a>
            </p>
          </div>
        </div>
        <div className="footer-resource-links">
          <div className="footer-services">
            <div className="service-our-work-container">
              <p className="service">SERVICE</p>
              <p className="our-work">
                <a
                  className="our-work1"
                  href="https://www.manypixels.co/our-work"
                  target="_blank"
                >
                  <span className="our-work2">Our Work</span>
                </a>
              </p>
              <p className="pricing">
                <a
                  className="pricing1"
                  href="https://www.manypixels.co/pricing"
                  target="_blank"
                >
                  <span className="pricing2">Pricing</span>
                </a>
              </p>
              <p className="help-center">
                <a
                  className="help-center1"
                  href="https://www.manypixels.co/help"
                  target="_blank"
                >
                  <span className="help-center2">Help Center</span>
                </a>
              </p>
              <p className="scope-of-services">
                <a
                  className="scope-of-services1"
                  href="https://www.manypixels.co/scope-of-services"
                  target="_blank"
                >
                  <span className="scope-of-services2">Scope of Services</span>
                </a>
              </p>
            </div>
            <div className="footer-resources">
              <div className="resources-free-illustrations-container">
                <p className="resources">RESOURCES</p>
                <p className="free-illustrations">
                  <a
                    className="free-illustrations1"
                    href="https://www.manypixels.co/gallery"
                    target="_blank"
                  >
                    <span className="free-illustrations2">
                      Free Illustrations
                    </span>
                  </a>
                </p>
                <p className="guidesblog">
                  <a
                    className="guides"
                    href="https://www.manypixels.co/guides"
                    target="_blank"
                  >
                    <span className="guides1">Guides</span>
                  </a>
                  <a
                    className="blog"
                    href="https://www.manypixels.co/blog"
                    target="_blank"
                  >
                    <span className="blog1">Blog</span>
                  </a>
                </p>
                <p className="case-studies">
                  <a
                    className="case-studies1"
                    href="https://www.manypixels.co/case-studies"
                    target="_blank"
                  >
                    <span className="case-studies2">Case Studies</span>
                  </a>
                </p>
                <p className="affiliatescompare-hub">
                  <a
                    className="affiliates"
                    href="https://www.manypixels.co/affiliates"
                    target="_blank"
                  >
                    <span className="affiliates1">Affiliates</span>
                  </a>
                  <a
                    className="compare-hub"
                    href="https://www.manypixels.co/compare"
                    target="_blank"
                  >
                    <span className="compare-hub1">Compare Hub</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignupPage.propTypes = {
  className: PropTypes.string,
};

export default SignupPage;
