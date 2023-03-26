//import React, { Component } from 'react';
import { React, useState, useEffect, Component } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireExtinguisher } from "@fortawesome/free-solid-svg-icons";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faHandsPraying } from "@fortawesome/free-solid-svg-icons";
import Image from 'react-bootstrap/Image';
//import './intro.css';

export default function Tourpromotion() {
    const [position, setPosition] = useState(0);

    function onScroll(){
        setPosition(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [])

    return (
        <>
            <Container>
                <div className="about">
                    <Image src="" className="img-responsive" width={1000} alt="about" fluid />
                </div>
            </Container>
                <Row md={4} className="parallax" style={{
                    backgroundPositionY: position / -4,
                }}>
                    <Col className="parallaxList">

                        <div className="imgwap mission"><FontAwesomeIcon icon={faFireExtinguisher} className="icon" /></div>
                        <h2>Sacrifice</h2>
                        <h2>희생</h2>
                        <br></br>
                        <h5>누구도 예상하지 못한 곳에서 피해를 입은 사람들에게 희망을 전달합니다.</h5>
                    </Col>
                    <Col className="parallaxList">
                        <div className="imgwap product"><FontAwesomeIcon icon={faHelmetSafety} className="icon" /></div>
                        <h2>Adversity</h2>
                        <h2>역경</h2>
                        <br></br>
                        <h5>신속하게 재난 및 사고가 일어난 정보를 제공하여 안전을 확보합니다.</h5>
                    </Col>
                    <Col className="parallaxList">
                        <div className="imgwap testimonial"><FontAwesomeIcon icon={faPerson} className="icon" /></div>
                        <h2>Life</h2>
                        <h2>생명</h2>
                        <br></br>
                        <h5>위급한 상황에서 최대한 안전하게 구조를 실시하여 생명을 지킵니다.</h5>
                    </Col>
                    <Col className="parallaxList">
                        <div className="imgwap statistic"><FontAwesomeIcon icon={faHandsPraying} className="icon" /></div>
                        <h2>Everyday</h2>
                        <h2>일상</h2>
                        <br></br>
                        <h5>사람들이 재난을 극복하고 일상생활로 돌아갈 수 있도록 지원합니다.</h5>
                    </Col>
                </Row>
            <Container className="Con2">
                <div className="about">
                    <Image src="" className="img-responsive" width={1000} alt="about02" fluid />
                </div>                                       
                <Row md={2} className="row1">
                    <Col sm={12}>
                        <div className="event_box_wap event_animate_left">
                            <div className="intro_img">
                                <Image src="" class="img-responsive" alt="intro_img01" fluid />
                            </div>
                            <h1>구호물품 전달</h1>
                            <div className="intro_img01_caption">
                            </div>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className="event_box_wap event_animate_right">
                            <div className="intro_img">
                                <Image src="" class="img-responsive" alt="intro_img02" fluid />
                            </div>
                            <div className="intro_img02_caption">
                            </div>
                            <h1>네팔 지진 현장</h1>
                        </div>
                    </Col>
                </Row>
                <Row md={2}>
                    <Col sm={12}>
                        <div className="event_box_wap event_animate_left">
                            <div className="intro_img">
                                <Image src="" class="img-responsive" alt="" fluid />
                            </div>
                            <div className="intro_img03_caption">
                            </div>
                            <h1>재난 구호단</h1>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className="event_box_wap event_animate_right">
                            <div className="intro_img">
                                <Image src="" class="img-responsive" alt="" fluid />
                            </div>
                            <div className="intro_img04_caption">
                            </div>
                            <h1>수해 복구</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}