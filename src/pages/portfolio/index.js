import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { videosportfolio, photosportfolio, illustrationsportfolio, unrealportfolio, showreel, meta } from "../../content_option";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


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
                  <h4>{data.title}</h4>
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
                {data.alt != null && (
                  <Carousel
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    className="carousel"
                  >
                    {data.alt.map((alt, i) => {
                      return (
                        <div key={i}>
                          <img src={process.env.PUBLIC_URL + alt} alt="" />
                        </div>
                      );
                    })}
                  </Carousel>
                )}
                <div className="content">
                  <h4>{data.title}</h4>
                  {data.description.length > 400 && (<p style={{fontSize: "16px"}}>{data.description}</p>)}
                  {data.description.length <= 400 && (<p>{data.description}</p>)}
                  {/* <img src={process.env.PUBLIC_URL + data.alt} alt="" /> */}
                </div>
              </div>
            );
          })}
        </div>
        <Row className="mb-5">
          <Col lg="8">
            <h1 className="display-8 mb-4"> Illustrations </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {illustrationsportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={process.env.PUBLIC_URL + data.content} alt="" />
                {data.alt != null && (
                  <Carousel
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    className="carousel"
                  >
                    {data.alt.map((alt, i) => {
                      return (
                        <div key={i} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                          <img src={process.env.PUBLIC_URL + alt} alt=""/>
                        </div>
                      );
                    })}
                  </Carousel>
                )}
                <div className="content">
                  <h4>{data.title}</h4>
                  {data.description.length > 400 && (<p style={{fontSize: "16px"}}>{data.description}</p>)}
                  {data.description.length <= 400 && (<p>{data.description}</p>)}
                  {/* <img src={process.env.PUBLIC_URL + data.alt} alt="" /> */}
                </div>
              </div>
            );
          })}
        </div>
        <Row className="mb-5">
          <Col lg="8">
            <h1 className="display-8 mb-4"> Unreal</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {unrealportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={process.env.PUBLIC_URL + data.content} alt="" />
                {data.video != null && (
                  <video src={process.env.PUBLIC_URL + data.video} muted autoPlay loop playsInline></video>
                )}
                {data.alt != null && (
                  <Carousel
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    className="carousel"
                  >
                    {data.alt.map((alt, i) => {
                      return (
                        <div key={i} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                          <img src={process.env.PUBLIC_URL + alt} alt=""/>
                        </div>
                      );
                    })}
                  </Carousel>
                )}
                <div className="content">
                  <h4>{data.title}</h4>
                  {data.description.length > 400 && (<p style={{fontSize: "16px"}}>{data.description}</p>)}
                  {data.description.length <= 400 && (<p>{data.description}</p>)}
                  {/* <img src={process.env.PUBLIC_URL + data.alt} alt="" /> */}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
