import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import RecentPosts from './RecentPosts'
import Subscribe from './Subscribe'
import "../../assets/scss/landingPage.scss"
import poster from '../../assets/images/poster.png'

const LandingPage = () => {
    return (
        <div>
            <Container fluid>
                <img src={poster} alt="poster" className="poster" />
                <div className="poster-overlay">The Journey of Art</div>
                <Row>
                    <Col sm={12} md={{ span: 5, offset: 1 }}  >
                        <RecentPosts />
                    </Col>
                    <Col sm={12} md={{ span: 4, offset: 1 }}  >
                        <Subscribe />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
