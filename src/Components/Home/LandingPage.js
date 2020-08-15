import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import RecentPosts from './RecentPosts'
import Subscribe from './Subscribe'
import "../../assets/scss/landingPage.scss"
import poster from '../../assets/images/poster.png'

const LandingPage = () => {
    return (
        <div>
            <img src={poster} alt="poster" className="poster" />
            <div className="poster-overlay">The Journey of Art</div>
            <Container fluid>
                <Row>
                    <Col sm={12} md={{ span: 5, offset: 1 }}  >
                        <RecentPosts />
                    </Col>
                    <Col sm={12} md={{ span: 4, offset: 1 }}  >
                        <Subscribe />
                    </Col>
                </Row>
                {/* <Row>
                    <Col sm={12}>
                        <RecentPosts />
                    </Col>
                    <Col sm={12}>
                        <Subscribe />
                    </Col>
                </Row> */}
            </Container>
        </div>
    )
}

export default LandingPage
