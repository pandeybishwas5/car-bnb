import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import {Link} from 'react-router-dom'
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import carImg from '../assets/img/toyota-offer-2.png';


function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user'))
  const menu = (
    <Menu>
        <Menu.Item>
        <a
         
          href="/"
        >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          
          href="/userbookings"
        >
          Bookings
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
         
          href="/admin"
        >
          Admin
        </a>
      </Menu.Item>
      <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
          <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
             <h1 ><b><Link to='/' style={{color:'orangered'}}>CarBnB</Link></b></h1>

          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>{user.username}</Button>
          </Dropdown>
        </div>
              </Col>
          </Row>
        
      </div>
      <div className="content">{props.children}</div>
      
      <div>
      <Row>
      <Col lg="6" md="6" sm="6" className=" become__driver__img">
        <img src={carImg} alt="" className="w-100" />
      </Col>
      <Col lg="6" md="6" sm="6">
        <h2 className="section__title become__driver__title">
        Do You Want to Earn Money Renting Your Car? So Don't Be Late
        </h2>

        <Button className="btn btn-primary mt-4 become__driver__btn">
          <Link to="/admin">Lease Your Car</Link>{' '}
        </Button>
      </Col>
    </Row>
      </div>
      <footer>
      <Container>
        <div className="footer__top pb-5">
          <Row>
            <Col lg="4" md="4" sm="12">
              <div className="logo footer__logo__container mb-4">
                <h1>
                  <Link to="/" className="footer__logo">
                    <i class="ri-car-line"></i>
                    <span className="text-light ">
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
                <p className="footer__logo-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nulla id ipsa neque harum quod quae reiciendis et quasi illum
                  alias. Vero ipsam a omnis! Totam nam eaque sequi voluptates
                  doloribus?
                </p>
              </div>
            </Col>
            
            <Col lg="3" md="4" sm="6">
              <div className="mb-4">
                {' '}
                <h5 className="text-light mb-4 footer__quick__links">
                  Head Office
                </h5>
                <p className="head__office">
                46-52 Mountain St, Ultimo NSW 2007
                </p>
                <p className="head__office">Phone: +61410743137 </p>
                <p className="head__office">Email: pandeybishwas5@gmail.com</p>
                <p className="head__office">Office Time: 10am - 7pm</p>
              </div>
            </Col>

            <Col lg="3" md="4">
              <div className="mb-4">
                <h5 className="text-light mb-4 footer__quick__links">
                  Newsletter
                </h5>
                <p className="section__description">
                Subscribe our newsletter
                </p>
                <div className="newsletter">
                  <input type="email" placeholder="email address" />
                  <span>
                    <i class="ri-send-plane-line"></i>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Container>
          <Row>
            <Col>
              <div className="footer__bottom">
                <p className="section__description pt-4 fw-bold text-center d-flex align-items-center justify-content-center gap-1">
                  <i class="ri-copyright-line"></i> Copyright 2022 Developed by
                SEP401 Group. All rights reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
      

      
    </div>
  );
}

export default DefaultLayout;
