//all components start the same 
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'





//all components start with the line below (line 6,7,8)
export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="
                                https://images.unsplash.com/photo-1448387473223-5c37445527e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80                                "
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>TrackerFit</h3>
                                <p>Track your progress</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="
                                https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80                                "
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>TrackerFit</h3>
                                <p>Compete and stay on track with your friends</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <Container>
                    <Row>
                        <Col><img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" className="leftSide" /></Col>
                        <Col>
                            <p className="words">
                                <i>
                                    Use <b>TrackerFit</b>, to Track all your exercises, <b>wherever</b>, <b>whenever</b>
                                </i>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="words">
                                <i>
                                    Track your <b>progress</b> over time and see how <b>everyone else is doing</b>
                                </i>
                            </p>

                        </Col>
                        <Col><img src="https://images.unsplash.com/photo-1517931524326-bdd55a541177?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" className="leftSide" /></Col>
                    </Row>
                </Container>
                <hr />

            </div>
            // ./ Carousel
        )
    }
}