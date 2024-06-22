import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className="comment-parent">
      <div className="comment1">
        <img
          className="unsplashkv3vk3eevew-icon11"
          alt=""
          src="/unsplashkv3vk3eevew@2x.png"
        />
      </div>
      <div className="comment-details">
        <div className="alice-zukabeng-parent">
          <b className="alice-zukabeng11">Alice Zukabeng</b>
          <div className="what-are-the1">
            What are the best paints to paint on a wall?
          </div>
        </div>
        <div className="comment-actions">
          <img className="comment-actions-child" alt="" src="/group-51-1.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
