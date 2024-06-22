import { useMemo } from "react";
import PropTypes from "prop-types";
import "./header.css";

const Header = ({
  className = "",
  propAlignSelf,
  propFlex,
  onUnsplashzawAr1FKOMwIconClick,
}) => {
  const headerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div className="header1" style={headerStyle}>
      <div className="profile-header-bg" />
      <h1 className="tbn8">tbn</h1>
      <div className="profile-nav">
        <div className="profile-home-nav">
          <div className="line-parent">
            <div className="frame-child4" />
            <div className="frame-child5" />
            <div className="frame-child6" />
          </div>
          <div className="for-you-wrapper">
            <div className="for-you2">For you</div>
          </div>
        </div>
      </div>
      <div className="tags4">Tags</div>
      <div className="profile-following-nav">
        <div className="profile-following-nav-item">
          <div className="profile-following-nav-icon">
            <h1 className="tbn9">tbn</h1>
          </div>
          <div className="following-parent">
            <div className="following2">Following</div>
            <div className="profile-following-notification">
              <img
                className="profile-following-notification-child"
                alt=""
                src="/group-23.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="profile-tags">
        <div className="profile-tags-item">
          <div className="tags5">Tags</div>
        </div>
        <div className="profile-image">
          <img
            className="unsplashzawar1fkomw-icon8"
            alt=""
            src="/unsplashzawar1fkomw@2x.png"
            onClick={onUnsplashzawAr1FKOMwIconClick}
          />
          <img className="equalizer-icon1" alt="" src="/equalizer@2x.png" />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,

  /** Action props */
  onUnsplashzawAr1FKOMwIconClick: PropTypes.func,
};

export default Header;
