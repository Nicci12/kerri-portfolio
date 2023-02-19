import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../components/Social";

Modal.setAppElement("#root");

const ConsentForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const attributes = {
    id: "JotFormIFrame-230465208451047",
    title: "Form",
    allowtransparency: true,
    allowfullscreen: true,
    allow: "geolocation; microphone; camera",
    frameBorder: 0,
    style: {
      minWidth: "100%",
      maxWidth: "100%",
      height: "539px",
      border: "none",
    },
    onLoad: () => window.parent.scrollTo(0, 0),
  };

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (
    <>
      <div className="news_list">
        <ul>
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="/img/form.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/form.png"
                    })`,
                  }}></div>
              </div>
              {/* End image */}

              <div className="details">
                <h3 className="title" onClick={toggleModalOne}>
                  Informed Consent Form
                </h3>
              </div>
              {/* End details */}

              {/* Start Modal */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}>
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      {/* End image */}

                      <div className="details">
                        <h3 className="title" onClick={toggleModalOne}>
                          Informed Consent Form
                        </h3>
                      </div>
                      {/* End details */}

                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>{" "}
                          
                        
                          <div className="quotebox">
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        {/* End description */}
                        <div className="news_share ">
                          <span>Share:</span>
                          <Social />
                        </div>
                        {/* End news share */}
                      </div>
                    </div>
                  </div>
                  {/* End box inner */}
                </div>
                {/* End modal box news */}
              </Modal>
              {/* End modal */}
            </div>
          </li>
          {/* End single blog */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="150">
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/img/cbf.png"
                    })`,
                  }}></div>
              </div>
              {/* End image */}

              <div className="details">
                <h3 className="title" onClick={toggleModalTwo}>
                  Child Biographical Form
                </h3>
              </div>
              {/* End details */}

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}>
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close modal */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      {/* End image */}

                      <div className="details">
                        <h3 className="title">Child Biographical Form</h3>
                      </div>
                      {/* End details */}
                      <div className="main_content">
                        <div className="descriptions">
                          <iframe src="https://form.jotform.com/230482455574460" {...attributes}></iframe>
                        </div>
                        {/* End description */}
            
                        {/* End news share */}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
              {/* End modal */}
            </div>
            {/* End list inner */}
          </li>
          {/* End single blog */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300">
            <div className="list_inner">
              <div className="image" onClick={toggleModalThree}>
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/img/cdf.png"
                    })`,
                  }}></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <h3 className="title" onClick={toggleModalThree}>
                  Client Detail Form
                </h3>
              </div>
              {/* End details */}

              {/* Start Modal */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}>
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      {/* END IMAGE */}
                      <div className="details">
                        <span>Client Detail Form</span>
                      </div>
                      {/* End details */}
                      <div className="main_content">
                        <div className="descriptions">
                          <iframe
                            src="https://form.jotform.com/230465208451047"
                            {...attributes}></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* End single blog */}
        </ul>
      </div>
    </>
  );
};

export default ConsentForm;