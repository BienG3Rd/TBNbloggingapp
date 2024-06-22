import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./mac-book-pro16.css";

const MacBookPro16 = () => {
  const navigate = useNavigate();

  const onCreatePostButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAccountTextClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onMessagesTextClick = useCallback(() => {
    // Please sync "Messages" to the project
  }, []);

  const onExploreTextClick = useCallback(() => {
    // Please sync "MacBook Pro 16" - 2" to the project
  }, []);

  return (
    <div className="macbook-pro-16-3">
      <div className="content">
        <img
          className="phcalendar-fill-icon"
          alt=""
          src="/phcalendarfill.svg"
        />
        <div className="tags">Tags</div>
        <div className="for-you">For you</div>
        <img
          className="unsplashzawar1fkomw-icon"
          alt=""
          src="/unsplashzawar1fkomw@2x.png"
        />
        <div className="whats-happening">What’s happening?</div>
        <div className="content-child" />
        <div className="content-item" />
        <img
          className="material-symbols-lightimage-icon"
          alt=""
          src="/materialsymbolslightimage.svg"
        />
        <img
          className="mingcutegift-card-fill-icon"
          alt=""
          src="/mingcutegiftcardfill.svg"
        />
        <img
          className="fluentpoll-horizontal-20-fill-icon"
          alt=""
          src="/fluentpollhorizontal20filled.svg"
        />
        <img
          className="fluentemoji-20-filled-icon"
          alt=""
          src="/fluentemoji20filled.svg"
        />
        <img className="content-inner" alt="" src="/line-68.svg" />
        <img
          className="unsplash6g2g6-rq-b0-icon"
          alt=""
          src="/unsplash6g2g6-rqb0@2x.png"
        />
        <b className="yolanda-harts">Yolanda Harts</b>
        <div className="masterpiece">Masterpiece👌😫😍❤️</div>
        <img
          className="unsplashbu8texhspcy-icon"
          alt=""
          src="/unsplashbu8texhspcy@2x.png"
        />
        <img className="chatbot-icon" alt="" src="/chatbot.svg" />
        <div className="component-12">
          <div className="component-12-child" />
          <div className="people-you-should">People you should follow:</div>
          <div className="l">l</div>
          <div className="trending">Trending</div>
          <div className="create-post-button" onClick={onCreatePostButtonClick}>
            <div className="create-post-button-child" />
            <div className="create">Create</div>
          </div>
          <img
            className="component-12-item"
            alt=""
            src="/rectangle-18@2x.png"
          />
          <img
            className="component-12-inner"
            alt=""
            src="/rectangle-18@2x.png"
          />
          <img className="rectangle-icon" alt="" src="/rectangle-18@2x.png" />
          <img
            className="component-12-child1"
            alt=""
            src="/rectangle-18@2x.png"
          />
          <img
            className="unsplashzawar1fkomw-icon1"
            alt=""
            src="/unsplashzawar1fkomw@2x.png"
          />
          <img
            className="unsplash6g2g6-rq-b0-icon1"
            alt=""
            src="/unsplash6g2g6-rqb0@2x.png"
          />
          <img
            className="unsplashkv3vk3eevew-icon"
            alt=""
            src="/unsplashkv3vk3eevew@2x.png"
          />
          <img
            className="unsplashm58gp7tam54-icon"
            alt=""
            src="/unsplashm58gp7tam54@2x.png"
          />
          <b className="alice-zukabeng">Alice Zukabeng</b>
          <b className="mark-anderson">Mark Anderson</b>
          <b className="yolanda-harts1">Yolanda Harts</b>
          <b className="noir-komi">Noir Komi</b>
          <div className="rectangle-div" />
          <b className="search">Search</b>
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
        <img
          className="pepicons-popdots-x"
          alt=""
          src="/pepiconspopdotsx.svg"
        />
        <img className="group-icon" alt="" src="/group-69.svg" />
      </div>
      <div className="nav-bar">
        <div className="nav-bar-child" />
        <div className="settings">Settings</div>
        <div className="account" onClick={onAccountTextClick}>
          Account
        </div>
        <div className="messages" onClick={onMessagesTextClick}>
          Messages
        </div>
        <div className="explore" onClick={onExploreTextClick}>
          Explore
        </div>
        <div className="home" onClick={onExploreTextClick}>
          Home
        </div>
        <img className="vector-icon1" alt="" src="/vector1.svg" />
        <img
          className="vector-icon2"
          alt=""
          src="/vector2.svg"
          onClick={onExploreTextClick}
        />
        <img
          className="vector-icon3"
          alt=""
          src="/vector3.svg"
          onClick={onMessagesTextClick}
        />
        <img
          className="vector-icon4"
          alt=""
          src="/vector4.svg"
          onClick={onAccountTextClick}
        />
        <img className="vector-icon5" alt="" src="/vector5.svg" />
        <div className="create-post-button1" onClick={onCreatePostButtonClick}>
          <div className="create-post-button-item" />
          <div className="create1">Create</div>
        </div>
        <div className="about">About</div>
        <div className="apps">Apps</div>
        <div className="legal-help">Legal Help</div>
        <div className="tbn">tbn</div>
      </div>
    </div>
  );
};

export default MacBookPro16;
