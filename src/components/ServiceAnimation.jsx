import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ServiceAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <div className="service_list">
      <ul>
        <li>
          <div
            className="list_inner"
            onClick={toggleModalOne}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="img/anxiety.svg" alt="" />
            <div className="service_title">
              <h3>ANXIETY & DEPRESSION</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Motion Graphy */}
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModalOne}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalOne}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "https://d1dbgh6ga9ets8.cloudfront.net/wp-content/uploads/2018/01/shutterstock_87396635-685x368.jpg"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Depression and Anxiety</h3>
                      <p>
                      Depression and anxiety are common mental health conditions that can affect children and young people. Depression is a mood disorder characterized by persistent feelings of sadness, hopelessness, and lack of interest or pleasure in activities that were once enjoyable. Anxiety, on the other hand, is a condition characterized by excessive worry, fear, and apprehension. Children with anxiety may become nervous, irritable, or tense and may also experience physical symptoms such as stomachaches and headaches. Both depression and anxiety can impact a child's daily life, including their ability to interact with others, perform well in school, and participate in extracurricular activities. It's important for parents to be aware of the signs and symptoms of depression and anxiety in their children and to seek help from a mental health professional if they suspect their child is struggling with these conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Motion Graphy */}
        </li>
        <li>
          <div
            className="list_inner"
            onClick={toggleModalTwo}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <img className="svg" src="img/friends.svg" alt="" />
            <div className="service_title">
              <h3>FAMILY &amp; FRIEND DYNAMICS</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Branding & Design */}
          <Modal
            isOpen={isOpen2}
            onRequestClose={toggleModalTwo}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalTwo}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "https://southwestfamilyvalues.org.uk/wp-content/uploads/2022/08/Family-dynamic-image-970x728.webp"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Family and Friend Dynamics?</h3>
                      <p>
                      Family and friend dynamics can have a significant impact on a child's mental health and development. The quality of relationships and communication within the family can influence a child's emotional well-being and self-esteem. If a child feels loved, supported, and validated by their family, they are more likely to have a positive sense of self and better mental health outcomes. Conversely, family conflict, neglect, or abuse can have negative effects on a child's mental health and development, potentially leading to depression, anxiety, or other mental health disorders. Friend dynamics are also important, as a child's peer group can influence their social and emotional development. Positive and supportive friendships can provide a sense of belonging and validation, which can enhance a child's self-esteem and mental health. Conversely, negative peer relationships can lead to feelings of rejection and exclusion, potentially causing anxiety or depression. As a parent, it's important to be aware of the social dynamics in your child's life and to support them in building positive relationships both within the family and with peers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Branding & Design */}
        </li>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalThree}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <img className="svg" src="img/heal.svg" alt="" />
            <div className="service_title">
              <h3>TRAUMA</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Mobile App Design */}
          <Modal
            isOpen={isOpen3}
            onRequestClose={toggleModalThree}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalThree}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "https://procaresoftware.com/wp-content/uploads/2021/06/Trauma-1024x682.jpeg"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Trauma in Children</h3>
                      <p>Trauma is a psychological and emotional response to a deeply distressing or disturbing event or series of events that exceed a child's ability to cope. Trauma can have a significant impact on a child's mental health and development, potentially leading to long-term emotional and behavioral difficulties. Traumatic events can vary, from natural disasters to accidents, physical or emotional abuse, neglect, or witnessing violence. Children who experience trauma may exhibit symptoms such as nightmares, flashbacks, anxiety, depression, and behavioral problems. It's important for parents to be aware of the signs of trauma in children and to seek help from a mental health professional if they suspect their child has experienced a traumatic event. Early intervention and support can help children recover and prevent long-term mental health difficulties. Parents can provide emotional support to their children, creating a safe environment for them to express their emotions and seek comfort. Parents should seek professional help for their children if experiencing severe symptoms </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Mobile App Design*/}
        </li>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalFour}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <img className="svg" src="img/feelings.svg" alt="" />
            <div className="service_title">
              <h3>Parental Guidance</h3>
            </div>
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Modal Ui/Ux Consultancy */}
          <Modal
            isOpen={isOpen4}
            onRequestClose={toggleModalFour}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalFour}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/service/4.jpg"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>
                        Ui/Ux Consultancy is the trending Part of Graphics
                      </h3>
                      <p>
                        Just because we can't get out and about like we normally
                        would, doesn’t mean we have to taking pictures. There’s
                        still plenty you can do, provided you're prepared to use
                        some imagination. Here are a few ideas to keep you
                        shooting until normal life resumes.
                      </p>
                      <p>
                        Most photographers love to shoot the unusual, and you
                        don’t get much more unusual than These Unprecedented
                        Times. Right now everything counts as out of the
                        ordinary. There are a number of remarkable things about
                        these lockdown days that are worth photographing now we
                        can remember them when it is all over.
                      </p>
                      <h3>What Is Branding?</h3>
                      <p>
                        Nullam blandit constituto eam ne, te nam ignota
                        vituper.atoribus. Malis cetero quem saipe, prou
                        thendrerit voluptaria.
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Ui/Ux Consultancy*/}
        </li>
      </ul>
    </div>
  );
};

export default ServiceAnimation;
