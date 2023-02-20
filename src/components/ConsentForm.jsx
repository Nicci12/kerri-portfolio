import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ConsentForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isModalOneOpen, setIsModalOneOpen] = useState(false);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);

  const openModalOne = () => {
    setIsModalOneOpen(true);
  };

  const closeModalOne = () => {
    setIsModalOneOpen(false);
  };

  const openModalTwo = () => {
    setIsModalTwoOpen(true);
  };

  const closeModalTwo = () => {
    setIsModalTwoOpen(false);
  };

  const attributes = {
    id: "JotFormIFrame-230465208451047",
    title: "Form",
    allowtransparency: "true",
    allowfullscreen: "true",
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
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/230492673821458";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
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
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-around",
                            }}>
                            <button
                              className="modal_button"
                              onClick={openModalOne}>
                              Face To Fact Therapy
                            </button>
                            <button
                              className="modal_button"
                              onClick={openModalTwo}>
                              Online Therapy-Teletherapy
                            </button>
                          </div>
                          <Modal
                            className="custom-modal"
                            overlayClassName="custom-overlay"
                            closeTimeoutMS={500}
                            isOpen={isModalOneOpen}
                            onRequestClose={closeModalOne}>
                            <div className="box_inner">
                              <div className="description_wrap scrollable">
                                <div className="details">
                                  <h6 className="title">
                                    Face To Face Therapy-Consent Form
                                  </h6>
                                </div>

                                <iframe
                                  src="https://form.jotform.com/230492673821458"
                                  {...attributes}></iframe>
                                <div className="beny_tm_modalbox_news">
                                  <button
                                    className="close-modal"
                                    onClick={closeModalOne}>
                                    <img
                                      src="/img/svg/cancel.svg"
                                      alt="close icon"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Modal>

                          <Modal
                            className="custom-modal"
                            overlayClassName="custom-overlay"
                            closeTimeoutMS={500}
                            isOpen={isModalTwoOpen}
                            onRequestClose={closeModalTwo}>
                            <div className="box_inner">
                              <div className="description_wrap scrollable">
                                <div className="details">
                                  <h6 className="title">
                                    Online Therapy- Telethapy- Consent Form
                                  </h6>
                                </div>

                                <iframe
                                  src="https://form.jotform.com/230492757619466"
                                  {...attributes}></iframe>
                                <div className="beny_tm_modalbox_news">
                                  <button
                                    className="close-modal"
                                    onClick={closeModalTwo}>
                                    <img
                                      src="/img/svg/cancel.svg"
                                      alt="close icon"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Modal>
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
                          <iframe
                            src="https://form.jotform.com/230482455574460"
                            {...attributes}></iframe>
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
