import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    "My name is Michael and I am based in Clinton Township, MI. I found my passion for learning computer sciences at the age of 23 and went to college at age 25. I've dedicated countless hours to learning and expanding this passion. I have developed an avid work ethic and disciplinary skills along my journey in life. Strong creative and critical thinking skills have helped me to excel in areas like web development as well as functional and object-oriented programming."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'In my professional career, I started out as a Java developer working at Oakland University. During my time there, the team decided to implement ReactJS and this sparked my interest in JavaScript. I spent the next few years working on various JavaScript and CSS projects while continuing to work as a back-end developer. Now, I am shifting my focus more towards JavaScript and frontend development in general.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'When I am not coding, I enjoy playing guitar, watching "The Great Courses", playing PC games, reading, and spending time with my partner (since 2010).'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
