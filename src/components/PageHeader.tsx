import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import "./page-header.css";

const PageHeader = ({
  className = "",
  propTextDecoration,
  propColor,
  propTextDecoration1,
  propColor1,
  propMargin,
  propHeight,
  propLineHeight,
  onUnsplashzawAr1FKOMwIconClick,
}) => {
  const tbnStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      color: propColor,
    };
  }, [propTextDecoration, propColor]);

  const tbn1Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
      color: propColor1,
      margin: propMargin,
    };
  }, [propTextDecoration1, propColor1, propMargin]);

  const tbn2Style = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight,
    };
  }, [propHeight, propLineHeight]);

  const onUnsplashzawAr1FKOMwIconClick1 = useCallback(() => {
    // Please sync "profile" to the project
  }, []);

  return (
    <div className="page-header">
      <div className="header">
        <div className="header-logo" />
        <a className="tbn5" style={tbnStyle}>
          tbn
        </a>
        <div className="header-tabs">
          <div className="header-tab">
            <div className="header-tab-label-parent">
              <div className="header-tab-label" />
              <div className="header-tab-label1" />
              <div className="header-tab-label2" />
            </div>
            <div className="header-tag">
              <div className="for-you1">For you</div>
            </div>
          </div>
        </div>
        <div className="tags2">Tags</div>
        <div className="header-profile-menu">
          <div className="header-profile-items">
            <div className="header-profile-item">
              <a className="tbn6" style={tbn1Style}>
                tbn
              </a>
            </div>
            <div className="header-profile-label">
              <div className="following1">Following</div>
              <div className="header-action-icon">
                <img
                  className="header-action-icon-child"
                  alt=""
                  src="/group-23.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="post-content1">
          <div className="post-author-info">
            <div className="tags3">Tags</div>
          </div>
          <div className="post-description1">
            <img
              className="unsplashzawar1fkomw-icon6"
              loading="lazy"
              alt=""
              src="/unsplashzawar1fkomw@2x.png"
              onClick={onUnsplashzawAr1FKOMwIconClick}
            />
            <img className="equalizer-icon" alt="" src="/equalizer@2x.png" />
          </div>
        </div>
      </div>
      <h1 className="tbn7" style={tbn2Style}>
        tbn
      </h1>
    </div>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
  propColor: PropTypes.any,
  propTextDecoration1: PropTypes.any,
  propColor1: PropTypes.any,
  propMargin: PropTypes.any,
  propHeight: PropTypes.any,
  propLineHeight: PropTypes.any,

  /** Action props */
  onUnsplashzawAr1FKOMwIconClick: PropTypes.func,
};

export default PageHeader;
