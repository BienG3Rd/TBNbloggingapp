import PropTypes from "prop-types";
import "./graffiti-art-post.css";

const GraffitiArtPost = ({ className = "" }) => {
  return (
    <div className="graffiti-art-post">
      <div className="graffiti-art-content">
        <img
          className="unsplashjowbip8ea-8-icon1"
          alt=""
          src="/unsplashjowbip8ea-8@2x.png"
        />
      </div>
      <div className="graffiti-art-info">
        <img
          className="graffiti-art-info-child"
          loading="lazy"
          alt=""
          src="/group-51-1.svg"
        />
        <div className="graffiti-art-separator">
          <div className="graffiti-art-separator-child" />
        </div>
        <div className="street-art-post-separator">
          <div className="street-art-post">
            <div className="street-art-content">
              <div className="street-art-image-container">
                <img
                  className="unsplashm58gp7tam54-icon11"
                  loading="lazy"
                  alt=""
                  src="/unsplashm58gp7tam54@2x.png"
                />
                <div className="street-art-info">
                  <div className="street-art-author">
                    <b className="mark-anderson11">Mark Anderson</b>
                    <div className="which-country-is1">
                      Which country is that😱😍❤️
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="street-art-navigation">
              <img className="street-art-prev-btn" alt="" src="/vector-9.svg" />
              <div className="street-art-next-btn">
                <img
                  className="street-art-last-btn"
                  loading="lazy"
                  alt=""
                  src="/vector-10.svg"
                />
              </div>
              <div className="vector-container">
                <img className="vector-icon15" alt="" src="/vector-11.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GraffitiArtPost.propTypes = {
  className: PropTypes.string,
};

export default GraffitiArtPost;
