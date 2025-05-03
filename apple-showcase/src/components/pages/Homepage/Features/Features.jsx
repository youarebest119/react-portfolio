import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Features.scss";
import FeaturesExperience from './FeaturesExperience/FeaturesExperience';

const Features = () => {
    return (
        <section className="features_design">
            <FeaturesExperience />
            <div className="features_design_in">
                <Container>
                    <h2>Features</h2>
                    <div className="features_boxes">
                        <Row className='justify-content-end'>
                            <Col md={6}>
                                <div className="feature_box feature_box_1">
                                    <div className="feature_box_design">
                                        <h3>Feature 1</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae inventore dolore architecto alias neque quas est? Tenetur iste itaque illo ut possimus rerum, enim accusantium repellat, quas soluta eius blanditiis?</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <div className="feature_box feature_box_2">
                                    <div className="feature_box_design">
                                        <h3>Feature 2</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae inventore dolore architecto alias neque quas est? Tenetur iste itaque illo ut possimus rerum, enim accusantium repellat, quas soluta eius blanditiis?</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='justify-content-end'>
                            <Col md={6}>
                                <div className="feature_box feature_box_3">
                                    <div className="feature_box_design">
                                        <h3>Feature 3</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae inventore dolore architecto alias neque quas est? Tenetur iste itaque illo ut possimus rerum, enim accusantium repellat, quas soluta eius blanditiis?</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Features
