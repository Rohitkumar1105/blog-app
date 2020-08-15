import React from 'react'

import Header from './Header'
import poster from '../assets/images/poster.png'
import model from '../assets/images/model.jpg'
import '../assets/scss/aboutMe.scss'
import { Container, Row, Col, Image } from 'react-bootstrap'

const AboutMe = () => {
    return (
        <>
            <Header />
            <div className="banner">
                <div className="banner-overlay">ABOUT ME</div>
                {/* <img src={poster} alt="banner" className="banner" /> */}
            </div>
            <Container>
                <Row className="about-me-content">
                    <Col sm={12} md={8}>
                        <div>
                            <h3>My Story</h3>
                            <p>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div>
                            <img src={model} alt="me" className="about-me-photo" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutMe
