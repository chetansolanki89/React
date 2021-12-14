import React from "react";
import { Tab, Tabs, Card, Button } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Who we are">
          <p style={{ textAlign: "justify" }}>
            PickupBiz, providing elegant business solutions for brands across
            the globe. A team of dedicated developers and creative designers
            from India, thrives to provide best and affordable solutions in web
            development, mobile app development, UI/UX and logo designing for
            large businesses and Start-ups. We also provide on-demand white
            label services like Data mining, customized Ecommerce solutions and
            Start-up tech partners.
          </p>
          <p style={{ textAlign: "justify" }}>
            We are serving various domains of industry like Ed-Tech, Ecommerce,
            Healthcare, etc. At PickupBiz, we do a transparent business working
            with you to enhance your business, to give a rich experience and
            maintain a long-term relationship. We make it a top priority to
            build and maintain partnerships with distinguished international
            partners, to build and deliver tailored solutions to our customers.
            We aspire to touch the lives of millions of people, through
            information technology and listen to their challenges and ambitions.
            This enables us to create the products and services they need to
            serve their daily needs. The general purpose of PickupBiz is to
            develop and promote advanced information technologies for multi-user
            operation. As a leader in technology exploring, PickupBiz is
            committed to exporting quality software worldwide.
          </p>
          <p style={{ textAlign: "justify" }}>
            PickupBiz business philosophy is to assure the highest quality
            product, total client satisfaction, timely delivery of solutions and
            the best quality/price ratio found in the industry. Our emphasis is
            on offering a high degree of product user friendliness through a
            positive, creative and focused company staff. Trust, Integrity and
            Teamwork are the values upon which we built our growth and success,
            and which we live and work by.
          </p>
          <p style={{ textAlign: "justify" }}>
            Mission: Our mission is to provide the best fully tested products
            and solutions for our customers.
          </p>
          <p style={{ textAlign: "justify" }}>
            Vision: To be the biggest technology enabler for building the future
            of our customers.
          </p>
        </Tab>
        <Tab eventKey="profile" title="Technologies">
          <h2>Technologies we Expertise in</h2>
          <div>
            <img
              src="https://pickupbiz.com/products/Zeeshan/technologiesimg/technology-2.png"
              alt=""
            />
            <img
              src="https://pickupbiz.com/products/Zeeshan/technologiesimg/technology-1.png"
              alt=""
            />
            <img
              src="https://pickupbiz.com/products/Zeeshan/technologiesimg/technology-3.png"
              alt=""
            />
            <img
              src="https://pickupbiz.com/products/Zeeshan/technologiesimg/technology-4.png"
              alt=""
            />
            <img
              src="https://pickupbiz.com/products/Zeeshan/technologiesimg/technology-5.png"
              alt=""
            />
            <img
              src="https://pickupbiz.com/products/Zeeshan/technologiesimg/technology-6.png"
              alt=""
            />
            <img
              src="https://pickupbiz.com/products/Zeeshan/technologiesimg/technology-7.png"
              alt=""
            />
            <img
              src="https://pickupbiz.com/products/Zeeshan/technologiesimg/technology-8.png"
              alt=""
            />
          </div>
        </Tab>

        <Tab eventKey="contact" title="Training">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://pickupbiz.com/products/Zeeshan/whychooseus/service-6.svg"
                height="100px"
              />
              <Card.Body>
                <Card.Title>Software Development</Card.Title>
                <Card.Text>
                  We have strong experience in Web Application development and
                  have skillful professional with creative minds.
                </Card.Text>
                <Button variant="primary">Enquiry here..</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://pickupbiz.com/products/Zeeshan/whychooseus/service-5.svg"
                height="100px"
              />
              <Card.Body>
                <Card.Title>Mobile App Development</Card.Title>
                <Card.Text>
                  We have sound experience in mobile App Development, our
                  professional having exposure on both Android and IOS.
                </Card.Text>
                <Button variant="primary">Enquiry here..</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://pickupbiz.com/products/Zeeshan/whychooseus/service-4.svg"
                height="100px"
              />
              <Card.Body>
                <Card.Title>UI/UX Designing</Card.Title>
                <Card.Text>
                  Our amazing designers with creative skills on Human-First
                  approach to product and services of app designing.
                </Card.Text>
                <Button variant="primary">Enquiry here..</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://pickupbiz.com/products/Zeeshan/whychooseus/service-3.svg"
                height="100px"
              />
              <Card.Body>
                <Card.Title>Digital Marketing</Card.Title>
                <Card.Text>
                  We are expert in promotion of products and Services, we have
                  impactful exposure in digital marketing experience.

                </Card.Text>
                <Button variant="primary">Enquiry here..</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://pickupbiz.com/products/Zeeshan/whychooseus/service-2.svg"
                height="100px"
              />
              <Card.Body>
                <Card.Title>Cloud Services</Card.Title>
                <Card.Text>
                  Our experts on Cloud services and DevOps Solutions
                  implementations with Cloud Migration experiences.
                  <br /><br />
                </Card.Text>
                <Button variant="primary">Enquiry here..</Button>
              </Card.Body>
            </Card>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default AboutUs;
