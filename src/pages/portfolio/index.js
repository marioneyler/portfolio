import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { videosportfolio, photosportfolio, showreel, meta } from "../../content_option";

export const Portfolio = () => {

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <video
              className="video-fluid z-depth-1"
              playsInline
              controls
              src={process.env.PUBLIC_URL + showreel}
            >
            </video>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg="8">
            <h1 className="display-8 mb-4"> Videos </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {videosportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <video src={process.env.PUBLIC_URL + data.content} muted autoPlay loop playsInline></video>
                <div className="content">
                  <p>{data.description}</p>
                  
                </div>
              </div>
            );
          })}
        </div>

        <Row className="mb-5">
          <Col lg="8">
            <h1 className="display-8 mb-4"> Photos </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {photosportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={process.env.PUBLIC_URL + data.content} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <img src={process.env.PUBLIC_URL + data.alt} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
