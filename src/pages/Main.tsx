import { useCallback } from "react";
import SignupPage from "../components/SignupPage";
import Homepage from "../components/Homepage";
import PageHeader from "../components/PageHeader";
import FrameComponent from "../components/FrameComponent";
import GraffitiArtPost from "../components/GraffitiArtPost";
import Header from "../components/Header";
import "./main.css";

const Main = () => {
  const onUnsplashzawAr1FKOMwIconClick = useCallback(() => {
    // Please sync "profile" to the project
  }, []);

  const onMessagesIconClick = useCallback(() => {
    // Please sync "Messages" to the project
  }, []);

  const onComponentClick = useCallback(() => {
    // Please sync "Create a post" to the project
  }, []);

  return (
    <div className="main">
      <SignupPage />
      <div className="homepage-wrapper">
        <Homepage />
      </div>
      <img
        className="unsplashkv3vk3eevew-icon2"
        alt=""
        src="/unsplashkv3vk3eevew@2x.png"
      />
      <img
        className="unsplashm58gp7tam54-icon2"
        alt=""
        src="/unsplashm58gp7tam54@2x.png"
      />
      <img
        className="unsplash6g2g6-rq-b0-icon3"
        alt=""
        src="/unsplash6g2g6-rqb0@2x.png"
      />
      <img
        className="unsplashbu8texhspcy-icon1"
        alt=""
        src="/unsplashbu8texhspcy@2x.png"
      />
      <b className="alice-zukabeng2">Alice Zukabeng</b>
      <b className="mark-anderson2">Mark Anderson</b>
      <b className="yolanda-harts3">Yolanda Harts</b>
      <div className="this-kind-of">
        This kind of art makes me breathless😍👌
      </div>
      <div className="are-those-oil">😱Are those oil colors</div>
      <div className="masterpiece1">Masterpiece👌😫😍❤️</div>
      <img className="main-child" alt="" src="/group-48.svg" />
      <img className="main-item" alt="" src="/group-49.svg" />
      <div className="main-inner" />
      <div className="content1">
        <div className="frame-parent">
          <div className="feed-container-wrapper">
            <div className="feed-container">
              <div className="homepage">
                <img
                  className="unsplashbu8texhspcy-icon2"
                  alt=""
                  src="/unsplashbu8texhspcy@2x.png"
                />
                <img
                  className="component-4-icon"
                  alt=""
                  src="/component-4.svg"
                />
                <div className="feed-info">
                  <PageHeader
                    propTextDecoration="unset"
                    propColor="#0267ff"
                    propTextDecoration1="unset"
                    propColor1="#000"
                    propMargin="0"
                    propHeight="unset"
                    propLineHeight="50px"
                  />
                  <div className="bottom-navigation">
                    <div className="masterpiece2">Masterpiece👌😫😍❤️</div>
                    <div className="home-background" />
                    <div className="home-icon">
                      <div className="home-parent">
                        <h1 className="tbn2">tbn</h1>
                        <div className="vector-wrapper">
                          <img
                            className="vector-icon12"
                            alt=""
                            src="/vector-3.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="navigation">
                      <img
                        className="navigation-child"
                        alt=""
                        src="/group-48.svg"
                      />
                      <img
                        className="navigation-item"
                        alt=""
                        src="/group-49.svg"
                      />
                      <img
                        className="navigation-inner"
                        loading="lazy"
                        alt=""
                        src="/group-59.svg"
                      />
                      <div className="explore-parent">
                        <div className="explore-link">
                          <div className="explore-button">
                            <div className="explore-icon">
                              <img
                                className="unsplashkv3vk3eevew-icon3"
                                alt=""
                                src="/unsplashkv3vk3eevew@2x.png"
                              />
                              <img
                                className="vector-icon13"
                                alt=""
                                src="/vector-4.svg"
                              />
                            </div>
                            <div className="message-parent">
                              <div className="message-link">
                                <div className="message-button">
                                  <div className="message-icon">
                                    <b className="alice-zukabeng3">
                                      Alice Zukabeng
                                    </b>
                                    <div className="home2">Home</div>
                                  </div>
                                </div>
                                <div className="this-kind-of1">
                                  This kind of art makes me breathless😍👌
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="account-parent">
                          <div className="account-link">
                            <img
                              className="account-icon"
                              alt=""
                              src="/vector-5.svg"
                            />
                            <div className="account-label">
                              <div className="explore2">Explore</div>
                            </div>
                          </div>
                        </div>
                        <div className="messages-parent">
                          <div className="messages-link">
                            <img
                              className="messages-icon"
                              alt=""
                              src="/vector-6.svg"
                              onClick={onMessagesIconClick}
                            />
                            <div className="messages-label">
                              <div
                                className="messages2"
                                onClick={onMessagesIconClick}
                              >
                                Messages
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="account-parent1">
                          <div className="account-link1">
                            <img
                              className="account-icon1"
                              alt=""
                              src="/vector-7.svg"
                              onClick={onUnsplashzawAr1FKOMwIconClick}
                            />
                            <div className="account-label1">
                              <div
                                className="account2"
                                onClick={onUnsplashzawAr1FKOMwIconClick}
                              >
                                Account
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="user-post">
                          <div className="user-post-link">
                            <div className="user-post-button">
                              <div className="user-post-content">
                                <div className="user-post-image">
                                  <img
                                    className="unsplashm58gp7tam54-icon3"
                                    alt=""
                                    src="/unsplashm58gp7tam54@2x.png"
                                  />
                                  <img
                                    className="vector-icon14"
                                    alt=""
                                    src="/vector-8.svg"
                                  />
                                </div>
                                <div className="user-post-details">
                                  <div className="mark-anderson-parent">
                                    <b className="mark-anderson3">
                                      Mark Anderson
                                    </b>
                                    <div className="user-post-comment">
                                      <div className="user-post-caption">
                                        <div className="are-those-oil1">
                                          😱Are those oil colors
                                        </div>
                                        <div className="settings2">
                                          Settings
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="separator">
                                <div className="separator-child" />
                              </div>
                            </div>
                          </div>
                          <div className="add-post">
                            <img
                              className="unsplash6g2g6-rq-b0-icon4"
                              loading="lazy"
                              alt=""
                              src="/unsplash6g2g6-rqb0@2x.png"
                            />
                            <img
                              className="unsplashbu8texhspcy-icon3"
                              alt=""
                              src="/unsplashbu8texhspcy-1@2x.png"
                            />
                            <b className="yolanda-harts4">Yolanda Harts</b>
                            <button className="create-button">
                              <div className="create-button-child" />
                              <div className="create4">Create</div>
                            </button>
                          </div>
                        </div>
                        <div className="footer">
                          <div className="footer-links">
                            <h3 className="about2">About</h3>
                            <h3 className="apps2">Apps</h3>
                            <h3 className="legal-help2">Legal Help</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content2">
                  <div className="feed">
                    <div className="feed-users">
                      <b className="mark-anderson4">Mark Anderson</b>
                      <b className="yolanda-harts5">Yolanda Harts</b>
                      <b className="noir-komi2">Noir Komi</b>
                      <div className="feed-items">
                        <div className="feed-item">
                          <div className="feed-content">
                            <div className="feed-separator" />
                          </div>
                          <div className="user-post1">
                            <div className="user-post-content1">
                              <div className="post-image">
                                <img
                                  className="unsplashzawar1fkomw-icon3"
                                  loading="lazy"
                                  alt=""
                                  src="/unsplashzawar1fkomw@2x.png"
                                />
                              </div>
                              <div className="what-do-you-guys-think-of-nyas-parent">
                                <div className="what-do-you-container">
                                  <span>
                                    What do you guys think of Nyashinki’s...
                                  </span>
                                  <span className="more">more</span>
                                </div>
                                <div className="post-actions">
                                  <img
                                    className="post-actions-child"
                                    alt=""
                                    src="/group-51-1.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="user-post-content2">
                              <div className="user-post-content-child" />
                            </div>
                            <div className="user-post-content3">
                              <div className="unsplash6g2g6-rq-b0-wrapper">
                                <img
                                  className="unsplash6g2g6-rq-b0-icon5"
                                  alt=""
                                  src="/unsplash6g2g6-rqb0@2x.png"
                                />
                              </div>
                              <div className="do-you-like-culinary-art-parent">
                                <div className="do-you-like">
                                  Do you like culinary art........come for a
                                  cook off...
                                </div>
                                <div className="frame-wrapper">
                                  <img
                                    className="frame-child"
                                    alt=""
                                    src="/group-51-1.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="user-post-content4">
                              <div className="user-post-content-item" />
                            </div>
                            <FrameComponent />
                            <div className="user-post-content5">
                              <div className="user-post-content-inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="story">
                      <div className="story-item">
                        <img
                          className="unsplashm58gp7tam54-icon4"
                          alt=""
                          src="/unsplashm58gp7tam54@2x.png"
                        />
                        <div className="story-caption">
                          <div className="random-street-art">
                            Random street art by Chinoveski😁
                          </div>
                        </div>
                      </div>
                      <img
                        className="unsplashk0rvudbob4c-icon"
                        alt=""
                        src="/unsplashk0rvudbob4c@2x.png"
                      />
                      <img
                        className="story-child"
                        alt=""
                        src="/group-51-1.svg"
                      />
                    </div>
                    <div className="korean-landmark-separator">
                      <div className="culinary-art-separator" />
                    </div>
                    <div className="culinary-art-post-parent">
                      <div className="culinary-art-post">
                        <div className="culinary-art-content">
                          <img
                            className="unsplash6g2g6-rq-b0-icon6"
                            loading="lazy"
                            alt=""
                            src="/unsplash6g2g6-rqb0@2x.png"
                          />
                          <div className="culinary-art-info">
                            <div className="culinary-art-author">
                              <b className="yolanda-harts6">Yolanda Harts</b>
                              <div className="just-beautiful">
                                Just beautiful😫❤️
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="unsplash5mtf9xyvvgm-icon"
                        alt=""
                        src="/unsplash5mtf9xyvvgm@2x.png"
                      />
                      <img
                        className="frame-item"
                        alt=""
                        src="/group-51-1.svg"
                      />
                    </div>
                    <div className="kenyan-art-post">
                      <div className="kenyan-art-content">
                        <img
                          className="unsplashkv3vk3eevew-icon4"
                          alt=""
                          src="/unsplashkv3vk3eevew@2x.png"
                        />
                        <div className="kenyan-art-info">
                          <b className="alice-zukabeng4">Alice Zukabeng</b>
                          <div className="the-art-in">
                            The art in this country is just👌😫❤️
                          </div>
                        </div>
                      </div>
                    </div>
                    <GraffitiArtPost />
                  </div>
                </div>
              </div>
              <div className="profile-page">
                <div className="profile">
                  <div className="profile-feed">
                    <Header />
                    <div className="profile-info">
                      <div className="profile-image-content-parent">
                        <div className="profile-image-content">
                          <img
                            className="unsplashzawar1fkomw-icon4"
                            loading="lazy"
                            alt=""
                            src="/unsplashzawar1fkomw-5@2x.png"
                          />
                          <div className="profile-info-content-wrapper">
                            <div className="profile-info-content">
                              <div className="profile-name-parent">
                                <div className="profile-name">
                                  <h3 className="noir-komi3">Noir Komi</h3>
                                </div>
                                <button className="rectangle-parent">
                                  <div className="frame-inner" />
                                  <a className="edit">Edit</a>
                                </button>
                              </div>
                              <div className="profile-bio">
                                <div className="art-lover-dancer-sarcastic">
                                  <p className="art-lover">Art lover</p>
                                  <p className="dancer">Dancer</p>
                                  <p className="sarcastic">sarcastic👀</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="profile-stats">
                          <div className="profile-stats-item">
                            <div className="profile-stats-title">
                              <h3 className="blogs">Blogs</h3>
                            </div>
                            <div className="profile-social-stats">
                              <div className="profile-social-stats-item">
                                <div className="profile-post-stats">
                                  <div className="posts">4 Posts</div>
                                  <div className="followers">463 followers</div>
                                </div>
                                <div className="profile-media-stats">
                                  <h3 className="media">Media</h3>
                                </div>
                              </div>
                              <div className="profile-following-stats">
                                <div className="following">10 following</div>
                                <div className="profile-tags-stats">
                                  <h3 className="tags1">Tags</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img className="line-icon" alt="" src="/line-69.svg" />
                      </div>
                    </div>
                    <div className="profile-media">
                      <div className="profile-media-separator" />
                    </div>
                  </div>
                  <div className="profile-media-content">
                    <div className="media-message">
                      <div className="material-symbols-lightimage-wrapper">
                        <img
                          className="material-symbols-lightimage-icon1"
                          loading="lazy"
                          alt=""
                          src="/materialsymbolslightimage.svg"
                        />
                      </div>
                      <h1 className="no-media-has">{`No media has been posted                                                                      `}</h1>
                    </div>
                  </div>
                  <img
                    className="component-5-icon"
                    loading="lazy"
                    alt=""
                    src="/component-4.svg"
                    onClick={onComponentClick}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-parent">
            <div className="homepage1">
              <b className="mark-anderson5">Mark Anderson</b>
              <b className="yolanda-harts7">Yolanda Harts</b>
              <div className="home-page-content">
                <PageHeader
                  propTextDecoration="unset"
                  propColor="#000"
                  propTextDecoration1="unset"
                  propColor1="#0267ff"
                  propMargin="0"
                  propHeight="unset"
                  propLineHeight="50px"
                  onUnsplashzawAr1FKOMwIconClick={
                    onUnsplashzawAr1FKOMwIconClick
                  }
                />
                <div className="post-preview">
                  <div className="preview-container">
                    <img
                      className="unsplashkv3vk3eevew-icon5"
                      loading="lazy"
                      alt=""
                      src="/unsplashkv3vk3eevew@2x.png"
                    />
                    <div className="post-content">
                      <div className="post-description">
                        <div className="post-author-name">
                          <b className="alice-zukabeng5">Alice Zukabeng</b>
                        </div>
                        <div className="this-kind-of2">
                          This kind of art makes me breathless😍👌
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="are-those-oil2">😱Are those oil colors</div>
              <div className="masterpiece3">Masterpiece👌😫😍❤️</div>
              <div className="homepage-child" />
              <div className="posts-container">
                <div className="posts-wrapper">
                  <img
                    className="unsplashm58gp7tam54-icon5"
                    loading="lazy"
                    alt=""
                    src="/unsplashm58gp7tam54@2x.png"
                  />
                  <img
                    className="unsplash6g2g6-rq-b0-icon7"
                    loading="lazy"
                    alt=""
                    src="/unsplash6g2g6-rqb0@2x.png"
                  />
                  <img
                    className="unsplashbu8texhspcy-icon4"
                    loading="lazy"
                    alt=""
                    src="/unsplashbu8texhspcy@2x.png"
                  />
                  <img
                    className="unsplashbu8texhspcy-icon5"
                    alt=""
                    src="/unsplashbu8texhspcy-1@2x.png"
                  />
                  <img
                    className="posts-wrapper-child"
                    alt=""
                    src="/group-48.svg"
                  />
                  <img
                    className="posts-wrapper-item"
                    alt=""
                    src="/group-49.svg"
                  />
                  <div className="rectangle-group">
                    <div className="frame-child1" />
                    <div className="create-post-button4">
                      <div className="create-post">Create post:</div>
                      <textarea
                        className="plus-icon"
                        placeholder="|"
                        rows={10}
                        cols={16}
                      />
                    </div>
                    <div className="cancel-button">
                      <div className="cancel-post-button">
                        <div className="cancel">Cancel</div>
                        <div className="save-draft-button">
                          <div className="save-draft">Save Draft</div>
                        </div>
                        <div className="post">Post</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-footer">
                <div className="footer-icons">
                  <img
                    className="footer-icons-child"
                    loading="lazy"
                    alt=""
                    src="/group-59.svg"
                  />
                </div>
                <div className="footer-paginator">
                  <img
                    className="component-4-icon1"
                    alt=""
                    src="/component-4.svg"
                  />
                  <div className="posts1">
                    <div className="post-list">
                      <div className="post-items">
                        <div className="post-separator" />
                      </div>
                      <div className="post-card">
                        <div className="post-elements">
                          <div className="post-image-container">
                            <img
                              className="unsplashzawar1fkomw-icon5"
                              loading="lazy"
                              alt=""
                              src="/unsplashzawar1fkomw@2x.png"
                            />
                          </div>
                          <div className="post-details">
                            <div className="post-info">
                              <b className="noir-komi4">Noir Komi</b>
                              <div className="what-do-you-container1">
                                <span>
                                  What do you guys think of Nyashinki’s...
                                </span>
                                <span className="more1">more</span>
                              </div>
                            </div>
                            <div className="post-counters">
                              <img
                                className="post-counters-child"
                                alt=""
                                src="/group-51-1.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="post-elements1">
                          <div className="post-elements-child" />
                        </div>
                        <div className="post-elements2">
                          <div className="unsplash6g2g6-rq-b0-container">
                            <img
                              className="unsplash6g2g6-rq-b0-icon8"
                              alt=""
                              src="/unsplash6g2g6-rqb0@2x.png"
                            />
                          </div>
                          <div className="frame-group">
                            <div className="yolanda-harts-parent">
                              <b className="yolanda-harts8">Yolanda Harts</b>
                              <div className="do-you-like1">
                                Do you like culinary art........come for a cook
                                off...
                              </div>
                            </div>
                            <div className="frame-container">
                              <img
                                className="frame-child2"
                                alt=""
                                src="/group-51-1.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="post-elements3">
                          <div className="post-elements-item" />
                        </div>
                        <FrameComponent />
                        <div className="post-elements4">
                          <div className="post-elements-inner" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="suggested-posts">
                <div className="suggested-post-list">
                  <div className="suggested-post-item">
                    <img
                      className="unsplashm58gp7tam54-icon6"
                      alt=""
                      src="/unsplashm58gp7tam54@2x.png"
                    />
                    <b className="mark-anderson6">Mark Anderson</b>
                    <div className="suggested-post-description">
                      <div className="random-street-art1">
                        Random street art by Chinoveski😁
                      </div>
                    </div>
                  </div>
                  <div className="more-posts">
                    <img
                      className="unsplashk0rvudbob4c-icon1"
                      alt=""
                      src="/unsplashk0rvudbob4c@2x.png"
                    />
                    <img
                      className="more-posts-child"
                      alt=""
                      src="/group-51-1.svg"
                    />
                  </div>
                  <div className="post-list-separator">
                    <div className="another-post-item" />
                  </div>
                  <div className="another-post-image">
                    <div className="another-post-container">
                      <img
                        className="unsplash6g2g6-rq-b0-icon9"
                        loading="lazy"
                        alt=""
                        src="/unsplash6g2g6-rqb0@2x.png"
                      />
                      <div className="another-post-details">
                        <div className="yolanda-harts-group">
                          <b className="yolanda-harts9">Yolanda Harts</b>
                          <div className="just-beautiful1">
                            Just beautiful😫❤️
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="yet-another-post">
                    <img
                      className="unsplash5mtf9xyvvgm-icon1"
                      loading="lazy"
                      alt=""
                      src="/unsplash5mtf9xyvvgm@2x.png"
                    />
                  </div>
                  <div className="yet-another-post-elements-wrapper">
                    <div className="yet-another-post-elements">
                      <img
                        className="yet-another-post-elements-child"
                        alt=""
                        src="/group-51-1.svg"
                      />
                      <div className="final-post-container-wrapper">
                        <div className="final-post-container">
                          <img
                            className="unsplashkv3vk3eevew-icon6"
                            alt=""
                            src="/unsplashkv3vk3eevew@2x.png"
                          />
                          <div className="zukabeng-comment">
                            <b className="alice-zukabeng6">Alice Zukabeng</b>
                            <div className="the-art-in1">
                              The art in this country is just👌😫❤️
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <GraffitiArtPost />
                </div>
              </div>
            </div>
            <div className="messages-page">
              <div className="messages3">
                <div className="messages-content">
                  <div className="messages-feed">
                    <Header
                      propAlignSelf="unset"
                      propFlex="1"
                      onUnsplashzawAr1FKOMwIconClick={
                        onUnsplashzawAr1FKOMwIconClick
                      }
                    />
                  </div>
                  <div className="messages-title">
                    <input
                      className="messages-heading"
                      placeholder="Your Messages"
                      type="text"
                    />
                    <div className="heading-divider" />
                  </div>
                  <div className="messages-list">
                    <div className="message-item">
                      <div className="message">
                        <img
                          className="unsplashm58gp7tam54-icon7"
                          alt=""
                          src="/unsplashm58gp7tam54@2x.png"
                        />
                        <div className="message-content">
                          <div className="message-details">
                            <b className="mark-anderson7">Mark Anderson</b>
                            <div className="message-body">
                              <div className="check-out-my">
                                Check out my lasted blog on chinese street art
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="message-divider">
                        <div className="message-item-second" />
                      </div>
                      <div className="message-second">
                        <img
                          className="unsplash6g2g6-rq-b0-icon10"
                          alt=""
                          src="/unsplash6g2g6-rqb0@2x.png"
                        />
                        <div className="message-content-second">
                          <div className="message-details-second">
                            <b className="yolanda-harts10">Yolanda Harts</b>
                            <div className="message-body-second">
                              <div className="woow-i-really">
                                Woow i really loved your recent blog on African
                              </div>
                              <div className="more2">...more</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-item-third">
                    <div className="message-third">
                      <div className="message-container">
                        <div className="message-border" />
                      </div>
                      <div className="message-details-container">
                        <img
                          className="unsplashkv3vk3eevew-icon7"
                          alt=""
                          src="/unsplashkv3vk3eevew@2x.png"
                        />
                        <div className="message-body-third">
                          <div className="message-header-third">
                            <div className="sender-details-third">
                              <b className="alice-zukabeng7">Alice Zukabeng</b>
                            </div>
                            <div className="your-blogs-are">
                              Your blogs are just........wow
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-divider-third">
                    <div className="messages-bottom-divider" />
                  </div>
                </div>
                <div className="message-input">
                  <div className="message-input-container">
                    <img
                      className="component-13-icon"
                      loading="lazy"
                      alt=""
                      src="/component-13.svg"
                    />
                  </div>
                  <img
                    className="component-6-icon"
                    loading="lazy"
                    alt=""
                    src="/component-4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
