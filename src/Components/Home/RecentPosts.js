import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'

import "../../assets/scss/recentPosts.scss"

const RecentPosts = () => {
    return (
        <>
            <h3 className="recent-posts-heading">Recent Posts</h3>

            <CardDeck>
                <Card className="recent-posts-card">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="recent-posts-card">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="recent-posts-card">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </>
    )
}

export default RecentPosts
