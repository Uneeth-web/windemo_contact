import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";



export default function ContactUs() {
  

  return (
      <Container>
     
        <Row className="mb-5 mt-3">
        <Col lg='8'>
          <h3 ClassName="display-4 mb-4">
             Contact Us 
          </h3>

        </Col>
        </Row>


        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
          <h5 ClassName="color_sec">Inspections</h5>
          <p>(800)309-6753|info@wini.com</p>

          <br />

          <h5 ClassName="color_thir py-4">Franchising</h5>
          <p>(800)309-6753|info@wini.com</p>

          <br />

          <h5 ClassName="color_four py-4">Vendors</h5>
          <p>(312)557-9319|vendors@wini.com</p>
           
          </Col>

          
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                <label for="name"><strong>Name</strong></label>
                <br />
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder=" Full Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                <label for="email"><strong>Email</strong></label>
                <br />
                  <input
                    className="form-control "
                    id="email"
                    name="email"
                    placeholder="xyz@abc.com"
                    type="email" 
                    required 
                  />
                </Col>
                <br />
                 <br />
                <Col lg="6" className="form-group">
                <label for="number"><strong>Phone Number</strong></label>
                <br />
                  <input
                    className="form-control "
                    id="number"
                    name="number"
                    placeholder=" (123) 456-7890" 
                    type="number"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                <label for="number"><strong>ZIP Code</strong></label>
                <br />
                  <input
                    className="form-control "
                    id="number"
                    name="number"
                    placeholder="XXXXX"
                    type="number" 
                    required 
                  />
                </Col>
              </Row>
              {/* /text area */}
              <label for="message"><strong>Message</strong></label>
              <br />
              <textarea
                className="form-control "
                id="message"
                name="message"
                placeholder="Please type it in here..."
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit"> 
                  Submit
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
  );
}