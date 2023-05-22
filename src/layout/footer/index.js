import React from 'react'
import styles from "./styles.module.css"
import Link from 'next/link'
import { faPhone, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Row, Col, Container } from 'reactstrap'
import { Mailicon, Phoneicon, SvgRightArrow,Timeicon } from '@/src/assets/images'

const Footer = () => {
  return (
    <Container fluid className={styles.outerContainer}>
      <div className={styles.officeDetailContainer}>

        <Row xs="1" sm="2" md="4" className={styles.rowContainer} >
          <Col>

            <p className={styles.officeAdd}>Office Address</p>

            <p className={styles.paratext}>Plot No. 47, Second Floor, G S Plaza, Scheme No 78 - III, Part II, Vijay Nagar, Indore, Madhya Pradesh 452010</p>

            <Phoneicon /><span className={styles.iconTitle}>  Call us</span><p className={styles.content}> +91-8871681905</p>
            <Mailicon /> <span className={styles.iconTitle}> Write to us</span><p className={styles.content}> info@Audacious.com</p>
            <Timeicon/> <span className={styles.iconTitle}> Office Time</span><p className={styles.content}>10:00 AM to 06:00 PM</p>
          </Col>
          <Col>
            <p className={styles.officeAdd}>Industries</p>
            <SvgRightArrow /><Link className={styles.linkTag} href='/'>Automobile</Link><br />
            <SvgRightArrow /><Link className={styles.linkTag} href='/'>E-Commerece</Link><br />
            <SvgRightArrow /><Link className={styles.linkTag} href='/'>E-Learning</Link><br />
            <SvgRightArrow /><Link className={styles.linkTag} href='/'>Space Operations</Link><br />
            <SvgRightArrow /><Link className={styles.linkTag} href='/'>Booking Platforms</Link><br />
            <SvgRightArrow /><Link className={styles.linkTag} href='/'>HRM</Link><br />
            <SvgRightArrow /><Link className={styles.linkTag} href='/'>Guest Posting</Link><br />
          </Col>

          <Col><p className={styles.officeAdd}>Useful Links</p>
            <SvgRightArrow /> <Link className={styles.linkTag} href='/'>Hire Angular developer</Link><br />
            <SvgRightArrow /> <Link className={styles.linkTag} href='/'>Hire Angular developer</Link><br />
            <SvgRightArrow /> <Link className={styles.linkTag} href='/'>Hire Angular developer</Link><br />
            <SvgRightArrow /> <Link className={styles.linkTag} href='/'>Hire Angular developer</Link><br />
            <SvgRightArrow /> <Link className={styles.linkTag} href='/'>Hire Angular developer</Link><br />



          </Col>
          <Col>
          <p className={styles.mapText}>Map</p>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12242.425891209761!2d75.88065407843085!3d22.7634025518641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303e2a864f88d%3A0xf192bed38923c0a1!2sAudacious%20Techiegent%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1684402004377!5m2!1sen!2sin" width="300" height="280"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </Col>
        </Row>
      </div>
      <div className={styles.copyrightContainer}>
        <div className={styles.subCopyrightContainer1}>© Copyright 2023 Audacious. All Right Reserved Copyright</div>
        <div className={styles.subCopyrightContainer2}><Link className={styles.copyrightLink} href='#'>Terms and conditions</Link><Link className={styles.copyrightLink} href='#'>Privacy Policy</Link><Link className={styles.copyrightLink} href='#'>Login / Signup</Link></div>
      </div>
    </Container>
  )
}

export default Footer
