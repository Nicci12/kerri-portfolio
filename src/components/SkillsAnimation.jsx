import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const educationContent = [
  {
    passingYear: "2020",
    degree: "Internship ",
    instituteName: "Nova Pioneer",
  },
  {
    passingYear: "2018-2019",
    degree: "Masters in Educational Psychology ",
    instituteName: "University of Johannesburg",
  },
  {
    passingYear: "2017",
    degree: "Honours in Educational Psychology ",
    instituteName: "University of Johannesburg",
  },
  {
    passingYear: "2016",
    degree: "Post Graduate in Chilhood Education-PGCE",
    instituteName: "University of Johannesburg",
  },
  {
    passingYear: "2013-2015",
    degree: "BA Humanties",
    instituteName: "University of Johannesburg",
  },
];

const skillsContent = [
  {
    name: "Play Therapy",
  },
  {
    name: "Trauma Work",
  },
  {
    name: "Family Therapy",
  },
  {
    name: "Couple Therapy",
  },
  {
    name: "Psychodynamic Therapy",
  },
  {
    name: "Anxiety and Depression",
  },
  {
    name: "PsychoEducational Screenings",
  },
  {
    name: "Loss and Bereavement",
  },
  {
    name: "Self-Harm and Suicidality",
  },
];

const awardContent = [
  {
    awardYear: "2022-Present",
    degree: "I talk about a wide range of topics regarding childrens mental health and devlopment on the platform panda",
    instituteName: "PANDA",
  }
];
const experienceContent = [
  {
    designation: "Educational Psychologist-Internship",
    jobType: "Full Time",
    year: "Jan 2020-Dec 2020",
    compnayName: "Nova Pioneer.",
    descriptions:
      "I worked at Nova Pioneer High School as an intern Educational Psychologist",
    animationDealy: "",
  },
  {
    designation: "Educational Psychologist",
    jobType: "Part Time",
    year: "2020-2023",
    compnayName: "Family Tree Therapy Center",
    descriptions:
      "I worked at Family Tree Therapy Center as an Educational Psychologist",
    animationDealy: "200",
  },
  {
    designation: "Educational Psychologist",
    jobType: "Part Time",
    year: "2022-2023",
    compnayName: "Psych Central",
    descriptions:
      "I work at Psych Central Therapy Center  as an Educational Psychologist",
    animationDealy: "200",
  },
  {
    designation: "Educational Psychologist",
    jobType: "Full Time",
    year: "Present",
    compnayName: "Blu Bird Medical Suites",
    descriptions:
      "I worked at Blu Bird Medical Suites as an Educational Psychologist",
    animationDealy: "200",
  },
];

const SkillsAnimation = () => {
  return (
    <>
      <div className="beny_tm_resume">
        <div className="main_title">
          <h3>My Experience</h3>
        </div>
        <Tabs>
          <TabList className="tab_list">
            <Tab> Education & Skills</Tab>
            <Tab>Experience</Tab>
          </TabList>
          <TabPanel>
            <div className="resume_inner">
              <div className="row">
                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Education</label>
                      </h4>
                      <ul>
                        {educationContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.passingYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="skills ">
                    <h4>
                      <label>Skills</label>
                    </h4>
                    <div className="beny_progress">
                      {skillsContent.map((val, i) => (
                        <div className="progress_inner" key={i}>
                          <span>
                            <span className="label">{val.name}</span>
                            <span className="number"></span>
                          </span>
                          <div className="background">
                            <div className="bar open">
                              <div
                                className="bar_in"
                                style={{ width: val.skillPercent + "%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* End .col-5 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Additonal Work</label>
                      </h4>
                      <ul>
                        {awardContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.awardYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="row">
              {experienceContent.map((val, i) => (
                <div
                  className="col-6"
                  key={i}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={val.animationDealy}
                >
                  <div className="resume-box-01">
                    <h5>{val.designation}</h5>
                    <h6>{val.jobType}</h6>
                    <span>{val.year}</span>
                    <div className="hr"></div>
                    <h4>
                      <label>{val.compnayName}</label>
                    </h4>
                    <p>{val.descriptions}</p>
                  </div>
                </div>
                //  End .col
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default SkillsAnimation;
